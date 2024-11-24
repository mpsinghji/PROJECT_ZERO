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
      return res.status(404).json({ message: "Admin not found." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // Create a token with the user's id and role
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "24h", // Token expires in 1 day
    });
    res.status(200).json({ token }); // Send token to the client
  } catch (error) {
    console.error("Admin login error:", error.message); // Log error message
    console.error("Stack trace:", error.stack); // Log stack trace
    res.status(500).json({ message: "Server error.", error: error.message });
}
};