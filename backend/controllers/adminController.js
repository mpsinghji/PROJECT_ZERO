import Admin from "../models/adminModel.js";
import { Response } from "../utils/response.js";
import jwt from "jsonwebtoken";

export const adminRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return Response(res, 400, false, "Admin already exists");
    }

    const admin = new Admin({ email, password });
    await admin.save();

    Response(res, 201, true, "Admin successfully registered");
  } catch (error) {
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

    const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return Response(res, 200, true, "Admin logged in", { token });
  } catch (error) {
    return Response(res, 500, false, "Server error", error.message);
  }
};
