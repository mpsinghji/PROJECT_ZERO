import express from "express";
import { getAllEvents, createEvents,countEvents } from "../controllers/eventsController.js";

const router = express.Router();

router.get('/getall', getAllEvents);
router.post('/', createEvents);
router.get('/count', countEvents);


export default router;


