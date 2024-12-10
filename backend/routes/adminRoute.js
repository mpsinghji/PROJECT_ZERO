// adminRoute.js
import express from "express";
import { adminRegister, adminLogin, getDashboardData,getAdminProfile} from "../controllers/adminController.js";
import { validateUserRegistration } from "../middlewares/userValidator.js";

const adminRoute = express.Router();

// Add registration route
adminRoute.post("/register", validateUserRegistration, adminRegister);
// Login route
adminRoute.post("/login", adminLogin);

adminRoute.get("/dashboard",getDashboardData);

adminRoute.get("/profile",getAdminProfile);

export default adminRoute;
