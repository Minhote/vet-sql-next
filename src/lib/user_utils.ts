import {
  IdObjectResponse,
  RegisterFormData,
  UserData,
  addAppointmentProps,
  addPetProps,
  customerResponse,
  getSessionResponse,
  idResponse,
  loginData,
  vetsResponse,
} from "@/app/database";
import { connection } from "@/app/database/config";
import { genSalt, hash, compare } from "bcryptjs";
import { cookies } from "next/headers";
import { thirtyMinutes, encrypt, decrypt } from "@/middleware";

export async function hashingPassword(
  password: string,
  salts = 10,
): Promise<string> {
  const salt = await genSalt(salts);
  const hashedPassword = await hash(password, salt);
  return hashedPassword;
}

export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await compare(password, hashedPassword);
}

export async function register(formData: RegisterFormData) {
  const { id, password, username } = formData;
  const hashedPassword = await hashingPassword(password);
  const [data] = await connection.execute<UserData[]>(
    `SELECT * FROM customer WHERE id = ? `,
    [id],
  );

  if (data.length === 0) {
    await connection.query<UserData[]>(
      `INSERT INTO customer (name, id, password)
    VALUES (?,?,?)`,
      [username, id, hashedPassword],
    );
    return true;
  }

  return false;
}

export async function login(formData: loginData) {
  const { password, username } = formData;
  const [user] = await connection.execute<UserData[]>(
    `SELECT * FROM customer WHERE name = ?`,
    [username],
  );

  // Si el usuario no existe
  if (user.length === 0) return false;

  //Si la contraseña no es válida
  const isValisPassword = await comparePassword(password, user[0].password);
  if (!isValisPassword) return false;

  // Autenticación si las credenciales son correctas
  const userToSession = {
    username: user[0].name,
    id: user[0].id,
  };

  const expires = new Date(Date.now() + thirtyMinutes);
  const session = await encrypt({ user: userToSession, expires });
  cookies().set("session", session, { httpOnly: true, expires });

  return user;
}

export async function logout() {
  cookies().delete("session");
  return true;
}

export async function getSession(): Promise<getSessionResponse | null> {
  const value = cookies().get("session")?.value;
  if (!value || value === "") return null;
  return await decrypt(value);
}

// SQL
export async function getInformationById(id: string) {
  try {
    const [customerData] = await connection.execute<customerResponse[]>(
      `SELECT 
    c.name AS customer_name,
    (
        SELECT 
            JSON_ARRAYAGG(
                JSON_OBJECT(
                    'pet_name', p.name, 
                    'pet_type', pt.type,
                    'pet_age', p.age,
                    'pet_id', p.id
                )
            )
        FROM pet_details AS p
        INNER JOIN pet_type AS pt ON p.pet_type_id = pt.id
        WHERE p.customer_id = c.id
    ) AS pet_details,
    (
        SELECT 
            CASE
                WHEN EXISTS (
                    SELECT 1
                    FROM appointment AS a
                    WHERE a.customer_id = c.id
                ) THEN
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'appointment_id', a.id,
                            'pet_name', p.name, 
                            'pet_type', pt.type,
                            'pet_age', p.age,
                            'appointment_date', a.date,
                            'vet_pro_name', vp.name,
                            'vet_pro_type', vpt.title
                        )
                    )
                ELSE NULL
            END
        FROM appointment AS a
        INNER JOIN pet_details AS p ON a.pet_details_id = p.id
        INNER JOIN pet_type AS pt ON p.pet_type_id = pt.id
        LEFT JOIN vet_pro AS vp ON a.vet_pro_id = vp.id
        LEFT JOIN pro_type AS vpt ON vp.pro_type_id = vpt.id
        WHERE a.customer_id = c.id
    ) AS appointment_details
FROM customer AS c
WHERE c.id = ?`,
      [id],
    );
    const [vetsData] = await connection.execute<vetsResponse[]>(`
      SELECT 
        v.name AS vet_name, pt.title AS vet_pro_type 
        FROM vet_pro AS v 
        INNER JOIN pro_type pt 
        ON v.pro_type_id = pt.id`);

    return { customerData: customerData[0], vetsData };
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function addPet(values: addPetProps) {
  const { pet_age, pet_name, pet_type, id } = values;
  try {
    const [pet_type_id] = await connection.execute<idResponse[]>(
      `SELECT id from pet_type WHERE type = ?`,
      [pet_type],
    );
    const { id: pet_id } = pet_type_id[0];
    const [result] = await connection.execute(
      `INSERT INTO pet_details(name, age, pet_type_id, customer_id) VALUES(?,?,?,?)`,
      [pet_name, pet_age, pet_id, id],
    );
    if (!result) return false;
    return true;
  } catch (error) {
    console.log(`Error en la funcion de addPet: ${error}`);
    return false;
  }
}

export async function deletePet(pet_id: number) {
  try {
    await connection.execute(
      `DELETE FROM appointment WHERE pet_details_id = ?`,
      [pet_id],
    );
    const [resultPet] = await connection.execute(
      `DELETE FROM pet_details WHERE id = ?`,
      [pet_id],
    );
    if (resultPet) return true;
  } catch (error) {
    console.log(`Error en la funcion de deletePet: ${error}`);
    return false;
  }
}

export async function deleteAppointment(appointment_id: number) {
  try {
    const [resultAppointment] = await connection.execute(
      `DELETE FROM appointment WHERE id = ?`,
      [appointment_id],
    );
    if (resultAppointment) return true;
  } catch (error) {
    console.log(`Error en la funcion de deletePet: ${error}`);
    return false;
  }
}

export async function addAppointment(values: addAppointmentProps) {
  try {
    const { appointment_date, id, pet_name, vet_pro } = values;
    const [results] = await connection.execute<IdObjectResponse[]>(
      `SELECT 
    vet_pro.id AS vet_id, 
    pet_details.id AS pet_id 
  FROM 
    vet_pro
  INNER JOIN 
    pet_details 
  WHERE 
    vet_pro.name = ? AND 
    pet_details.name = ?
  `,
      [vet_pro, pet_name],
    );
    const { vet_id, pet_id } = results[0];
    const [insertedAppointment] = await connection.execute(
      `INSERT INTO appointment (date,customer_id,vet_pro_id,pet_details_id) VALUES (?,?,?,?)`,
      [appointment_date, id, vet_id, pet_id],
    );
    if (insertedAppointment) return true;
  } catch (error) {
    console.log(`Error en la funcion de addAppointment ${error}`);
    return false;
  }
}

export async function getAppointmentsOptions() {
  try {
    const [vets] = await connection.execute<
      vetsResponse[]
    >(`SELECT name AS vet_pro_name, title AS vet_pro_type 
    FROM vet_pro AS vp INNER JOIN pro_type AS vpt 
    ON vp.pro_type_id = vpt.id`);
    return vets;
  } catch (error) {
    return { message: `Error en la función getAppointmentsOptions: ${error}` };
  }
}
