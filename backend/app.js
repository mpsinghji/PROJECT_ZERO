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
import attendanceRouter from "./routes/attendanceRouter.js";

import Razorpay from "razorpay";

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
app.use("/api/v1/attendance", attendanceRouter);

app.post('/Fees', async(req, res) => {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: req.body.amount,
    currency: req.body.currency,
    receipt: "fee_receipt#1",
    payment_capture: 1,
  };
  try{
    const response = await razorpay.orders.create(options);
    res.json({
      order_id: response.id,
      currency: response.currency,
      amount: response.amount
    })
  }catch(error){
    res.status(500).send("Internal Server Error");
  }
})

app.get("/payment/:paymentId", async (req, res) => {
  const {paymentId} = req.params;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  try{
    const payment = await razorpay.payments.fetch(paymentId);
    if(!payment){
      return res.status(500).json("Error at razorpay loading");
    }
    res.json({
      status:payment.status,
      amount:payment.amount,
      method:payment.method,
      currency:payment.currency
    })
  }catch(error){
    res.status(500).send("Failed to fetch payment details");
  }
}
)

export default app;