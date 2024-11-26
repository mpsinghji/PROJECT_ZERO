import Exam from "../models/examSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const addExam = async (req, res, next) => {
  console.log(req.body);
  const { subjectName , subjectCode, batch, date} = req.body;
  try {
    if (!subjectName || !subjectCode || !batch || !date) {
      handleValidationError("Please fill out all fields!", 400);
    }
    await Exam.create({ subjectName, subjectCode, batch, date });
    res.status(200).json({
      success: true,
      message: "A new exam has been added!",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllExams = async (req, res, next) => {
  try {
    const exams = await Exam.find();
    res.status(200).json({
      success: true,
      exams,
    });
  } catch (err) {
    next(err);
  }
};
