import { Sequelize } from "sequelize";

const db_host = "localhost";
const db_port = 5432;
const db_name = "mydb";
const db_user = "root";
const db_password = "root";

export default new Sequelize({
    dialect: "postgres",
    host: db_host,
    port: db_port,
    database: db_name,
    username: db_user,
    password: db_password,
});
