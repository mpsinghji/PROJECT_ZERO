import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: "Please enter a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: ["admin", "student", "teacher"],
    default: "student",
  },
  rollno: {
    type: String,
    required: function () {
      return this.role === "student"; // Make rollno required only for students
    },
  },
  mobileno: {
    type: String,
    required: function () {
      return this.role === "student"; // Make mobileno required only for students
    },
  },
});

const User = mongoose.model("User", userSchema);
export default User;
