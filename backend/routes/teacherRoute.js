import express from "express";
import { teacherLogin, teacherRegister } from "../controllers/teacherController.js";
import { validateUserRegistration } from "../middlewares/userValidator.js";

const teacherRoute = express.Router();


teacherRoute.post("/register", validateUserRegistration, teacherRegister);

teacherRoute.post("/login", teacherLogin);


export default teacherRoute;
