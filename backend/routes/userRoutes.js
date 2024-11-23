import express from "express";
import { registerUser } from "../controllers/userController.js";
import { validateUserRegistration } from "../middlewares/userValidator.js";

const userRouter = express.Router();

userRouter.post("/register", validateUserRegistration, registerUser);

export default userRouter;
