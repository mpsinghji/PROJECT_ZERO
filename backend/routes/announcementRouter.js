import express from "express";
<<<<<<< HEAD
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementController.js";
=======
import { getAllAnnouncements, createAnnouncement } from "../controllers/announcementConroller.js";
>>>>>>> 867d8c3 (Announcemnt done + schema done)

const router = express.Router();

router.get('/getall', getAllAnnouncements);
router.post('/', createAnnouncement);


export default router; 


