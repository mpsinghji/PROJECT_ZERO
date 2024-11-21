import User from "../models/userModel.js";
import { message } from "../utils/message.js";
import { Response } from "../utils/response.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { email, password, rollno, mobileno } = req.body;

    if (!email || !password) {
      return Response(res, 400, false, message.missingFieldsMessage);
    }

    const role = "admin"; 

    if (role === "student" && (!rollno || !mobileno)) {
      return Response(res, 400, false, "Roll number and mobile number are required for students.");
    }

    let user = await User.findOne({ email });
    if (user) {
      return Response(res, 400, false, message.userExistsMessage);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ email, password: hashedPassword, role, rollno, mobileno });

    Response(res, 201, true, message.userCreatedMessage, user._id);
  } catch (error) {
    Response(res, 500, false, error.message);
  }
};
