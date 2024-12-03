import express from "express";
import dotenv from "dotenv";
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

app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/student", studentRoute);
app.use("/api/v1/teacher", teacherRoute);

app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/events", eventsRouter);
app.use("/api/v1/exam", examRouter);
app.use("/api/v1/library", libraryRouter);
app.use("/api/v1/assignments", assignmentRouter);

export default app;