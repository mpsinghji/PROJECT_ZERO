import Teacher from "../models/teacherModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const teacherRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingTeacher = await Teacher.findOne({ email });
    if (existingTeacher) {
      return Response(res, 400, false, "Teacher already exists");
    }

    const teacher = new Teacher({ email, password });
    await teacher.save();

    Response(res, 201, true, "Teacher successfully registered");
  } catch (error) {
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

    const token = jwt.sign({ id: teacher._id, role: "teacher" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return Response(res, 200, true, "Teacher logged in", { token });
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};
