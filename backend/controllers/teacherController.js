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
