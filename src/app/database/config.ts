import { createConnection } from "mysql2/promise";

const HOST = "127.0.0.1";
const USER = "root";
const PORT = 3306;
const PASSWORD = "barcelo1994";
const DATABASE = "mydb";
const URL = process.env.MYSQL_URL;

export const connection = URL
  ? await createConnection(URL)
  : await createConnection({
      host: HOST,
      user: USER,
      port: PORT,
      password: PASSWORD,
      database: DATABASE,
    });
