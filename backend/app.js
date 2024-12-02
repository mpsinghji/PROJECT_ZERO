import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import adminRoute from "./routes/adminRoute.js";
import studentRoute from "./routes/studentRoute.js";
import teacherRoute from "./routes/teacherRoute.js";
import cors from "cors";
import cookieParser from "cookie-parser";


import announcementRouter from "./routes/announcementRouter.js"
import eventsRouter from "./routes/eventsRouter.js";
import examRouter from "./routes/examRoute.js";
import libraryRouter from "./routes/libraryRoute.js";
import assignmentRouter from "./routes/assignmentRouter.js";


dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: [process.env.LOCAL_URL, process.env.WEB_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.post("/login", (req, res, next) => {
  const { email, password } = req.body;
  const token = "some token";
  res.cookie('authToken', token, {
    httpOnly: true, 
    secure: process.env.NODE_ENV === 'production', 
    maxAge: 3600000 
  });
  res.status(200).json({ message: 'Login successful' });
});


app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api/v1/user", userRouter);
app.use("/api/admin", adminRoute);
app.use("/api/student", studentRoute);
app.use("/api/teacher", teacherRoute);


app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/assignments", assignmentRouter);


app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

export default app;