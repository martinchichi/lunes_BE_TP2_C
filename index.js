import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
import dbConnection from "./dbConnection/dbConnection.js";
import {SERVER_PORT} from "./config/config.js"



const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "not found" });
});

await dbConnection.sync({force:true})
app.listen(SERVER_PORT, () => {
  console.log("express ok");
});
