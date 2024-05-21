import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";

const userController = new UserControllers();

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", (req, res) => {
  console.log(`🚀 ~ userRoutes.get ~ req:`, req);
  res.send("get user by id");
});
userRoutes.post("/", (req, res) => {
  console.log(`🚀 ~ userRoutes.post ~ req:`, req);
  res.send("create user");
});

userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", (req, res, next) => {
  res.send("delete user by id");
  next();
});

export default userRoutes;
