import User from "../models/userModel.js";
import { message } from "../utils/message.js";
import { Response } from "../utils/response.js";

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

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (user.role === 'teacher') {
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      res.status(200).json({ token });
    } else {
      return res.status(403).json({ message: 'You are not authorized to login' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};