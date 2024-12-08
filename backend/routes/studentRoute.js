import express from "express";
import { studentLogin ,studentRegister,getAllStudents,deleteStudent} from "../controllers/studentController.js";
import { validateUserRegistration } from "../middlewares/userValidator.js";


const studentRoute = express.Router();

studentRoute.post("/register", validateUserRegistration, studentRegister);

studentRoute.post("/login", studentLogin);

studentRoute.get("/getall",getAllStudents);

studentRoute.delete('/:id', deleteStudent);

export default studentRoute;
