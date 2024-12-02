import express from "express";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Response } from "../utils/response.js";
import { message } from "../utils/message.js";

const teacherRoute = express.Router();

teacherRoute.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email, role: "teacher" });
    if (!user) {
        return Response(res, 404, false, message.teacherNotFound);
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        return Response(res, 401, false, message.invalidCredentials);
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    Response(res, 200, true, message.teacherLoginSuccess, { token });
  } catch (error) {
    console.error("Error during login:", error);
    Response(res, 500, false, message.serverError, error.message);
  }
});

export default teacherRoute;
