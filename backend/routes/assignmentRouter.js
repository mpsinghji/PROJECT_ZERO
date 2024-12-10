import express from 'express';
import { getAllAssignments,addAssignment,countAssignments } from '../controllers/assignmentController.js';

const router = express.Router();

router.get('/getall', getAllAssignments);
router.post('/add', addAssignment);
router.get('/count', countAssignments);


export default router;