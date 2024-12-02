import Student from "../models/studentModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const studentRegister = async (req, res) => {
  const { email, password, rollno, mobileno } = req.body;

  try {
    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return Response(res, 400, false, "Student already exists");
    }

    const student = new Student({ email, password, rollno, mobileno });
    await student.save();

    Response(res, 201, true, "Student successfully registered");
  } catch (error) {
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

    const token = jwt.sign({ id: student._id, role: "student" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return Response(res, 200, true, "Student logged in", { token });
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};
