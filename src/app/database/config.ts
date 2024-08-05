import { createConnection } from "mysql2/promise";

const HOST = process.env.DB_HOST || "127.0.0.1";
const USER = process.env.DB_USER || "root";
const PORT = process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306;
const PASSWORD = process.env.DB_PASSWORD || "barcelo1994";
const DATABASE = process.env.DB_NAME || "mydb";

export const connection = await createConnection({
  host: HOST,
  user: USER,
  port: PORT,
  password: PASSWORD,
  database: DATABASE,
});
