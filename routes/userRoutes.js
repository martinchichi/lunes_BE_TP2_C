import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  res.send("get all users");
});
userRoutes.get("/:id", (req, res) => {
  console.log(`🚀 ~ userRoutes.get ~ req:`, req)
  res.send("get user by id");
});
userRoutes.post("/", (req, res) => {
  console.log(`🚀 ~ userRoutes.post ~ req:`, req)
  res.send("create user");
});

userRoutes.put("/:id", (req, res) => {
  res.send("update user by id");
});
userRoutes.delete("/:id", (req, res, next) => {
  res.send("delete user by id");
  next()
});

export default userRoutes;
