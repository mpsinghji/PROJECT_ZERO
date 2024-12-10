import Admin from "../models/adminModel.js";
import Student from "../models/studentModel.js";
import Teacher from "../models/teacherModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";


export const adminRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Request Body:", req.body);

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ email });
    console.log("Existing Admin:", existingAdmin);
    if (existingAdmin) {
      return Response(res, 400, false, "Admin already exists");
    }

    // Create a new admin
    const admin = new Admin({ email, password });
    await admin.save();

    return Response(res, 201, true, "Admin successfully registered");
  } catch (error) {
    console.error("Error registering admin:", error);
    return Response(res, 500, false, "Server error", error.message);
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return Response(res, 404, false, "Admin not found");
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return Response(res, 401, false, "Invalid credentials");
    }

    const admintoken = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return Response(res, 200, true, "Admin logged in", { admintoken });
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};

export const getDashboardData = async (req, res) => {
  try {
    // Count total users based on their roles
    const totalStudents = await Student.countDocuments({ role: 'student' });
    const totalTeachers = await Teacher.countDocuments({ role: 'teacher' });
    const totalAdmins = await Admin.countDocuments({ role: 'admin' });

    return res.status(200).json({
      totalStudents,
      totalTeachers,
      totalAdmins,
    });
  } catch (error) {
    console.error("Error fetching dashboard data:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const getAdminProfile = async (req, res) => {
  try {
    const admin = await Admin.findOne({}); 
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ email: admin.email });
  } catch (error) {
    console.error("Error fetching admin profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};