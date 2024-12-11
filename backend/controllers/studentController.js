import Student from "../models/studentModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const studentRegister = async (req, res) => {
  const { email, password, rollno, mobileno,gender,name } = req.body;

  try {
    console.log("Request Body:", req.body);

    const existingStudent = await Student.findOne({ $or: [{ email }, { rollno }] });
    console.log("Existing student:", existingStudent);
    if (existingStudent) {
      return Response(res, 400, false, "Student with this email or roll number already exists");
    }

    const student = new Student({ email, password, rollno, mobileno,gender,name });
    await student.save();

    return Response(res, 201, true, "Student successfully registered");
  } catch (error) {
    console.error("Error registering student:", error);
    return Response(res, 500, false, "Server error", error.message);
  }
};


export const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return Response(res, 404, false, "Student not found");
    }

    const isPasswordValid = await student.comparePassword(password);
    if (!isPasswordValid) {
      return Response(res, 401, false, "Invalid credentials");
    }

    const studenttoken = jwt.sign({ id: student._id, role: "student" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return Response(res, 200, true, "Student logged in", { studenttoken });
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json({ success: true, students });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  } 
};


export const deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return Response(res, 404, false, "Student not found");
    }
    return Response(res, 200, true, "Student deleted successfully");
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};

export const getStudentProfile = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 
    if (!token) {
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const student = await Student.findById(decoded.id);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      success: true,
      name: student.name,
      rollno: student.rollno,
      gender: student.gender,
      mobileno: student.mobileno,
      email: student.email,
    });
  } catch (error) {
    console.error("Error fetching student profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getStudentCount = async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments({ role: "student" });
    res.status(200).json({ success: true, totalStudents });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};