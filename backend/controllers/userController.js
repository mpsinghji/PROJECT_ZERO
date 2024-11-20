import User from "../models/userModel.js";
import { message } from "../utils/message.js";
import { Response } from "../utils/response.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    // Parsing body data
    const { email, password, role = "student" } = req.body;

    // Checking the body data
    if (!email || !password) {
      return Response(res, 400, false, message.missingFieldsMessage);
    }

    // Validate role
    const allowedRoles = ["admin", "student", "teacher"];
    if (!allowedRoles.includes(role)) {
      return Response(res, 400, false, "Invalid role provided");
    }

    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return Response(res, 400, false, message.userExistsMessage);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    user = await User.create({ email, password: hashedPassword, role });

    // Send response
    Response(res, 201, true, message.userCreatedMessage, user._id);
  } catch (error) {
    Response(res, 500, false, error.message);
  }
};
