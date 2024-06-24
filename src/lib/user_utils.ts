import {
  RegisterFormData,
  UserData,
  customerResponse,
  getSessionResponse,
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
    `SELECT * FROM mydb.customer WHERE id = ? `,
    [id],
  );

  if (data.length === 0) {
    await connection.query<UserData[]>(
      `INSERT INTO mydb.customer (name, id, password)
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
    `SELECT * FROM mydb.customer WHERE name = ?`,
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
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession(): Promise<getSessionResponse | null> {
  const session = cookies().get("session");
  if (session) {
    return decrypt(session.value);
  }
  return null;
}

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
                    'pet_age', p.age
                )
            )
        FROM mydb.pet_details AS p
        INNER JOIN mydb.pet_type AS pt ON p.pet_type_id = pt.id
        WHERE p.customer_id = c.id
    ) AS pet_details,
    (
        SELECT 
            CASE
                WHEN EXISTS (
                    SELECT 1
                    FROM mydb.pet_details AS pd
                    LEFT JOIN mydb.appointment AS a ON pd.customer_id = a.customer_id
                    LEFT JOIN mydb.vet_pro AS vp ON a.vet_pro_id = vp.id
                    LEFT JOIN mydb.pro_type AS vpt ON vp.id = vpt.id
                    WHERE pd.customer_id = c.id AND a.id IS NOT NULL
                ) THEN
                    JSON_ARRAYAGG(
                        JSON_OBJECT(
                            'pet_name', p.name, 
                            'pet_type', pt.type,
                            'pet_age', p.age,
                            'appointment_date', a.date,
                            'vet_pro_name', vp.name,
                            'vet_pro_type', vpt.title
                        )
                    )
                ELSE NULL
                END AS appointment_details
                FROM mydb.pet_details AS p
                INNER JOIN mydb.pet_type AS pt ON p.pet_type_id = pt.id
                LEFT JOIN mydb.appointment AS a ON p.customer_id = a.customer_id
                LEFT JOIN mydb.vet_pro AS vp ON a.vet_pro_id = vp.id
                LEFT JOIN mydb.pro_type AS vpt ON vp.id = vpt.id
                WHERE p.customer_id = c.id
              ) AS appointment_details
            FROM mydb.customer AS c
          WHERE c.id = ?`,
      [id],
    );
    const [vetsData] = await connection.execute<vetsResponse[]>(`
      SELECT 
        v.name AS vet_name, pt.title AS vet_pro_type 
        FROM mydb.vet_pro AS v 
        INNER JOIN mydb.pro_type pt 
        ON v.pro_type_id = pt.id`);

    return { customerData: customerData[0], vetsData };
  } catch (error) {
    console.log(error);
    return null;
  }
}
