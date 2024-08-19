import { createConnection } from "mysql2/promise";

const HOST = process.env.MYSQLHOST || "127.0.0.1";
const USER = process.env.MYSQLUSER || "root";
const PORT = process.env.MYSQLPORT ? parseInt(process.env.MYSQLPORT) : 3306;
const PASSWORD = process.env.MYSQLPASSWORD || "barcelo1994";
const DATABASE = process.env.MYSQLDATABASE || "mydb";
const URL =
  `mysql://${process.env.MYSQLUSER}:${process.env.MYSQL_ROOT_PASSWORD}@${process.env.RAILWAY_PRIVATE_DOMAIN}:3306/${process.env.MYSQL_DATABASE}` ||
  null;

export const connection = URL
  ? await createConnection(URL)
  : await createConnection({
      host: HOST,
      user: USER,
      port: PORT,
      password: PASSWORD,
      database: DATABASE,
    });
