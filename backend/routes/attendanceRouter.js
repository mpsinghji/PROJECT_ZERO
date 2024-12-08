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
    const { attendance, date } = req.body; // Get the date and attendance from the request body
  
    try {
      // Format the date as DD-MM-YYYY
      const formattedDate = new Date(date); // Convert the date string to a Date object
      const day = String(formattedDate.getDate()).padStart(2, "0");
      const month = String(formattedDate.getMonth() + 1).padStart(2, "0");
      const year = formattedDate.getFullYear();
      const formattedDateString = `${day}-${month}-${year}`; // Format the date as DD-MM-YYYY
  
      // Loop through the attendance data and insert or update each record
      for (const [studentId, status] of Object.entries(attendance)) {
        await Attendance.findOneAndUpdate(
          { student: studentId, date: formattedDateString },  // Find existing attendance for the student and date
          { student: studentId, status, date: formattedDateString }, // If it exists, update it
          { upsert: true } // If it doesn't exist, insert a new document
        );
      }
  
      res.status(200).send("Attendance data submitted successfully!");
    } catch (error) {
      console.error("Error saving attendance:", error);
      res.status(500).json({ error: "Failed to save attendance" });
    }
  });
  

export default router;