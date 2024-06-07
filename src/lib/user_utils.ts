import { RegisterFormData, UserData, loginData } from "@/app/database";
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
  const { identification_number, password, username } = formData;
  const hashedPassword = await hashingPassword(password);
  const [data] = await connection.execute<UserData[]>(
    `SELECT * FROM mydb.customer WHERE identification_number = ? `,
    [identification_number],
  );
  console.log(data);
  if (data.length === 0) {
    await connection.query<UserData[]>(
      `INSERT INTO mydb.customer (name, identification_number, password)
    VALUES (?,?,?)`,
      [username, identification_number, hashedPassword],
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
    identification_number: user[0].identification_number,
  };

  const expires = new Date(Date.now() + thirtyMinutes);
  const session = await encrypt({ user: userToSession, expires });
  cookies().set("session", session, { httpOnly: true, expires });

  return user;
}

export async function logout() {
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session");
  console.log(session);
  if (session) {
    return decrypt(session.value);
  }
  return null;
}
