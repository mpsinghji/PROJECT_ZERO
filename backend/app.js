import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/userRoutes.js";
import cors from "cors";

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

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Something went wrong!" });
});

export default app;
