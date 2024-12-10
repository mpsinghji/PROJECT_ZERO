import Teacher from "../models/teacherModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const teacherRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    console.log("Request Body:", req.body);

    // Check if the teacher already exists
    const existingteacher = await Teacher.findOne({ email });
    console.log("Existing teacher:", existingteacher);
    if (existingteacher) {
      return Response(res, 400, false, "teacher already exists");
    }

    // Create a new teacher
    const teacher = new Teacher({ email, password });
    await teacher.save();

    return Response(res, 201, true, "teacher successfully registered");
  } catch (error) {
    console.error("Error registering teacher:", error);
    return Response(res, 500, false, "Server error", error.message);
  }
};
export const teacherLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return Response(res, 404, false, "Teacher not found");
    }

    const isPasswordValid = await teacher.comparePassword(password);
    if (!isPasswordValid) {
      return Response(res, 401, false, "Invalid credentials");
    }

    const teachertoken = jwt.sign({ id: teacher._id, role: "teacher" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return Response(res, 200, true, "Teacher logged in", { teachertoken });
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};

export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json({ success: true, teachers });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(id);
    if (!deletedTeacher) {
      return Response(res, 404, false, "Teacher not found");
    }
    return Response(res, 200, true, "Teacher deleted successfully");
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};

export const getTeacherProfile = async (req, res) => {
  try {
    const teacher = await Teacher.findOne({}); 
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    res.status(200).json({ email: teacher.email });
  } catch (error) {
    console.error("Error fetching teacher profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};