import express from "express";
import routes from "./routes/routes.js";
import morgan from "morgan";
// import { logger } from "./middlewares/middlewares.js";

const app = express();

// app.use((req, res, next)=>{
//   console.log("todo ok")
// })
// app.use(logger);
// app.use(logger, routes);
app.use(morgan("tiny"));
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(routes);

// app.use(logger);
app.use((req, res, next) => {
  res.status(404).send({ success: false, message: "not found" });
});

app.listen(8080, () => {
  console.log("express ok");
});

// const obj={}
// obj.name="osval"
// obj.age=37
// console.log(`🚀 ~ obj:`, obj)

