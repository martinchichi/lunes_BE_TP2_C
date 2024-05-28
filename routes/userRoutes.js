import { Router } from "express";
import UserControllers from "../Controllers/UserControllers.js";

const userController = new UserControllers();

const userRoutes = Router();

userRoutes.get("/", userController.getAllUsers);
userRoutes.get("/:id", userController.getUserById);
userRoutes.post("/", userController.createUser);
userRoutes.put("/:id", userController.updateUser);
userRoutes.delete("/:id", userController.deleteUser);

export default userRoutes;
