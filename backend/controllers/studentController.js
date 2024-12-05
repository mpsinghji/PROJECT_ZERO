import Student from "../models/studentModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const studentRegister = async (req, res) => {
  const { email, password, rollno, mobileno } = req.body;

  try {
    console.log("Request Body:", req.body);

    // Check if the student already exists by email or roll number
    const existingStudent = await Student.findOne({ $or: [{ email }, { rollno }] });
    console.log("Existing student:", existingStudent);
    if (existingStudent) {
      return Response(res, 400, false, "Student with this email or roll number already exists");
    }

    // Create a new student
    const student = new Student({ email, password, rollno, mobileno });
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
