import UserController from "../controllers/User";
import express from "express";

const userRouter = express.Router();

userRouter.get("/", UserController.getAll);
userRouter.post("/", UserController.create);

export { userRouter };
