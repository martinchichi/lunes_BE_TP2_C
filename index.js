import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "not found" });
});

app.listen(8080, () => {
  console.log("express ok");
});
