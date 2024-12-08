import express from "express";
import Attendance from "../models/attendanceSchema.js";
import Student from "../models/studentModel.js"; // Assuming you have a Student model

const router = express.Router();

// Fetch student list
router.get("/students", async (req, res) => {
    try {
        const students = await Student.find({}, { _id: 1, rollno: 1 }) || [];
        res.json(students);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).json({ error: "Failed to fetch students" });
    }
  });
  
  
  

// Submit attendance
router.post("/attendance", async (req, res) => {
    const { attendance } = req.body;

    try {
        const attendanceRecords = Object.entries(attendance).map(
            ([studentId, status]) => ({
                student: studentId,
                status,
                date: new Date(),
            })
        );

        await Attendance.insertMany(attendanceRecords); // Save all attendance records in bulk
        res.status(200).send("Attendance data submitted successfully!");
    } catch (error) {
        console.error("Error saving attendance:", error);
        res.status(500).json({ error: "Failed to save attendance" });
    }
});

  

export default router;