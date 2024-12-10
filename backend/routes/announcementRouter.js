import express from "express";
import { getAllAnnouncements, createAnnouncement,countAnnouncements } from "../controllers/announcementController.js";
const router = express.Router();

router.get('/getall', getAllAnnouncements);
router.post('/', createAnnouncement);
router.get('/count', countAnnouncements);


export default router; 

