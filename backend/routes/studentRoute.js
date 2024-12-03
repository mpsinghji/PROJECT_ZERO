import express from "express";
import { studentLogin ,studentRegister} from "../controllers/studentController.js";
import { validateUserRegistration } from "../middlewares/userValidator.js";


const studentRoute = express.Router();

studentRoute.post("/register", validateUserRegistration, studentRegister);

studentRoute.post("/login", studentLogin);

export default studentRoute;
