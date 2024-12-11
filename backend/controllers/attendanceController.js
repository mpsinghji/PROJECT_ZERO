import Attendance from "../models/attendanceSchema.js";
import { handleValidationError } from "../middlewares/errorHandler.js";

export const markAttendance = async (req, res, next) => {
  const { attendanceData } = req.body;
  try {
    if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
      handleValidationError("Attendance data is missing or invalid!", 400);
    }
    const attendanceRecords = await Promise.all(attendanceData.map(async (record) => {
      const { student, status } = record;
      return await Attendance.create({ student, status });
    }));
    res.status(200).json({
      success: true,
      message: "Attendance marked successfully!",
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};

export const getAllAttendance = async (req, res, next) => {
  try {
    const attendanceRecords = await Attendance.find().populate('student', 'student RollNo');
    res.status(200).json({
      success: true,
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};

export const getStudentAttendance = async (req, res, next) => {
  try {
    const studentId = req.student.id; // From the decoded JWT token
    console.log("Fetching attendance for student ID:", studentId); // Log student ID
    const attendanceRecords = await Attendance.find({ student: studentId });

    if (!attendanceRecords || attendanceRecords.length === 0) {
      return res.status(404).json({ error: "No attendance records found for this student" });
    }

    res.status(200).json({
      success: true,
      attendanceRecords
    });
  } catch (err) {
    next(err); // Pass to error handler
  }
};