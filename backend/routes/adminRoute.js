import express from "express";
import User from "../models/userModel.js";
import { verifyToken } from "../middlewares/auth.js"; 
import { adminLogin } from "../controllers/userController.js";

const adminRoute = express.Router();

adminRoute.get("/users/count", verifyToken, async (req, res) => {
  try {
    const adminCount = await User.countDocuments({ role: "admin" });
    const studentCount = await User.countDocuments({ role: "student" });
    const teacherCount = await User.countDocuments({ role: "teacher" });

    res.json({
      totalAdmins: adminCount,
      totalStudents: studentCount,
      totalTeachers: teacherCount,
    });
  } catch (error) {
    console.error("Error fetching user counts:", error);
    res.status(500).json({ message: "Server error" });
  }
});

adminRoute.post("/login", adminLogin);

export default adminRoute;