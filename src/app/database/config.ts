import { createConnection } from "mysql2/promise";

const HOST = process.env.MYSQLHOST || "127.0.0.1";
const USER = process.env.MYSQLUSER || "root";
const PORT = process.env.MYSQLPORT ? parseInt(process.env.MYSQLPORT) : 3306;
const PASSWORD = process.env.MYSQLPASSWORD || "barcelo1994";
const DATABASE = process.env.MYSQLDATABASE || "mydb";
const URL =
  `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.RAILWAY_TCP_PROXY_DOMAIN}:${process.env.RAILWAY_TCP_PROXY_PORT}/${process.env.MYSQL_DATABASE}
` || null;

const URL2 = "mysql://root:@roundhouse.proxy.rlwy.net:14553/railway";

// export const connection = URL
//   ? await createConnection(URL)
//   : await createConnection({
//       host: HOST,
//       user: USER,
//       port: PORT,
//       password: PASSWORD,
//       database: DATABASE,
//     });

export const connection = await createConnection(URL2);
