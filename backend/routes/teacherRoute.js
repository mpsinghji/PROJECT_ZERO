import express from "express";
import { teacherLogin, teacherRegister,getAllTeachers,deleteTeacher,getTeacherProfile } from "../controllers/teacherController.js";
import { validateUserRegistration } from "../middlewares/userValidator.js";

const teacherRoute = express.Router();


teacherRoute.post("/register", validateUserRegistration, teacherRegister);

teacherRoute.post("/login", teacherLogin);

teacherRoute.get("/getall", getAllTeachers);;

teacherRoute.delete('/:id', deleteTeacher);

teacherRoute.get("/profile",getTeacherProfile);


export default teacherRoute;
