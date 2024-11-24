import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import adminRoute from "./routes/adminRoute.js";
import studentRoute from "./routes/studentRoute.js";
import teacherRoute from "./routes/teacherRoute.js";
import cors from "cors";


import announcementRouter from "./routes/announcementRouter.js"



dotenv.config({ path: "./config/config.env" });

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.LOCAL_URL, process.env.WEB_URL],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.use("/api/v1/user", userRouter);
app.use("/api/admin", adminRoute);
app.use("/api/student", studentRoute);
app.use("/api/teacher", teacherRoute);


app.use("/api/v1/announcements", announcementRouter);



app.use("/api/v1/announcements", announcementRouter);


app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

export default app;