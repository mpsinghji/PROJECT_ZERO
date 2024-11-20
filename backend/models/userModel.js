import mongoose from "mongoose";
import validator from "validator";

export const userSchema = new mongoose.Schema({
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
});

const User = mongoose.model("User", userSchema);
export default User;
