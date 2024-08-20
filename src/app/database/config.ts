import { createConnection } from "mysql2/promise";

const HOST = "127.0.0.1";
const USER = "root";
const PORT = 3306;
const PASSWORD = "barcelo1994";
const DATABASE = "mydb";
const URL = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:${process.env.RAILWAY_TCP_PROXY_PORT}/${process.env.MYSQLDATABASE}`;

export const connection = URL
  ? await createConnection(URL)
  : await createConnection({
      host: HOST,
      user: USER,
      port: PORT,
      password: PASSWORD,
      database: DATABASE,
    });
