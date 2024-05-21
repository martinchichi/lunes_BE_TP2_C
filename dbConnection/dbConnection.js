import { Sequelize } from "sequelize";

const dbConnection = new Sequelize("lunes", "root", "", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

try {
  await dbConnection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}
export default dbConnection;
