// activityRoutes.js
import express from "express";
import { countEvents } from "../controllers/eventsController.js";
import { countAssignments } from "../controllers/assignmentsController.js";
import { countAnnouncements } from "../controllers/announcementsController.js";

const activityRouter = express.Router();

activityRouter.get("/events/count", countEvents);
activityRouter.get("/assignments/count", countAssignments);
activityRouter.get("/announcements/count", countAnnouncements);

export default activityRouter;
