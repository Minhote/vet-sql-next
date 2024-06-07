import { createConnection } from "mysql2/promise";

export const connection = await createConnection({
  host: "127.0.0.1",
  user: "root",
  port: 3306,
  password: "barcelo1994",
  database: "mydb",
});
