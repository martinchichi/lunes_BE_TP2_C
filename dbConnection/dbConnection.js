import mysql from "mysql2/promise";

const connection = async () => {
  try {
    const connection = await mysql.createConnection({
      host: "localhost",
      user: "root",
      database: "lunes",
      password: "",
      port: "3306",
    });

    //     await connection.connect();
    //     if (ok) {
    //  console.log(`🚀 ~ connection ~ ok:`, ok);
    console.log(`🚀 ~ connectionDb ~ ok`);
    return connection;
    //     } else {
    //      console.log(`🚀 ~ connection ~ ok.error:`, ok);
    //       throw new Error("no se pudo conectar a la db");
    //     }
  } catch (error) {
    console.log(`🚀 ~ connection ~ error:`, error);
  }
};

const dbConnection = await connection();

export default dbConnection;
