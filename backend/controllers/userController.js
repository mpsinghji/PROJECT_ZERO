import User from "../models/userModel.js";
import { message } from "../utils/message.js";
import { Response } from "../utils/response.js";

export const registerUser = async (req, res) => {
  try {
    const { email, password, rollno, mobileno } = req.body;

    if (!email || !password) {
      return Response(res, 400, false, message.missingFields);
    }

    const role = "admin";

    if (role === "student" && (!rollno || !mobileno)) {
      return Response(res, 400, false, message.studentFieldsMissing);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return Response(res, 400, false, message.userExists);
    }

    const user = await User.create({ email, password, role, rollno, mobileno });

    );

    Response(res, 201, true, message.userCreated, { userId: user._id });
  } catch (error) {
    Response(res, 500, false, message.serverError, error.message);
  }
};
