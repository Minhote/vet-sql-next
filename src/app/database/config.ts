import { createConnection } from "mysql2/promise";

const HOST = process.env.MYSQLHOST || "127.0.0.1";
const USER = process.env.MYSQLUSER || "root";
const PORT = process.env.MYSQLPORT ? parseInt(process.env.MYSQLPORT) : 3306;
const PASSWORD = process.env.MYSQLPASSWORD || "barcelo1994";
const DATABASE = process.env.MYSQLDATABASE || "mydb";

export const connection = await createConnection({
  host: HOST,
  user: USER,
  port: PORT,
  password: PASSWORD,
  database: DATABASE,
});
