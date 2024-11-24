import User from "../models/userModel.js";
import { message } from "../utils/message.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { email, password, role, rollno, mobileno } = req.body;

    if (!email || !password) {
      return Response(res, 400, false, message.missingFields);
    }

    if (role === "student" && (!rollno || !mobileno)) {
      return Response(res, 400, false, message.studentFieldsMissing);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response(res, 400, false, message.userExists);
    }

    const user = await User.create({ email, password, role, rollno, mobileno });

    Response(res, 201, true, message.userCreated, { userId: user._id });
  } catch (error) {
    Response(res, 500, false, message.serverError, error.message);
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, role: "admin" });
    if (!user) {
      Response(res, 404, false, message.adminNotFound);
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      Response(res, 401, false, message.invalidCredentials);
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "24h", 
    });
    res.status(200).json({ token }); 
  } catch (error) {
    console.error("Admin login error:", error.message); 
    console.error("Stack trace:", error.stack); 
    Response(res, 500, false, message.serverError, error.message);
}
};

export const studentLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, role: "student" });
    if (!user) {
      Response(res, 404, false, message.studentNotFound);
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      Response(res, 401, false, message.invalidCredentials);
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "24h", 
    });
    res.status(200).json({ token }); 
  } catch (error) {
    console.error("Student login error:", error.message); 
    console.error("Stack trace:", error.stack); 
    Response(res, 500, false, message.serverError, error.message);
}
};

export const teacherLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, role: "teacher" });
    if (!user) {
      Response(res, 404, false, message.teacherNotFound);
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      Response(res, 401, false, message.invalidCredentials);
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error("Teacher login error:", error.message);
    console.error("Stack trace:", error.stack);
    Response(res, 500, false, message.serverError, error.message);
  }
};
