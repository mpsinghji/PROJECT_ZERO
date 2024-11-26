import express from 'express';
import { getAllAssignments,addAssignment } from '../controllers/assignmentController.js';

const router = express.Router();

router.get('/getall', getAllAssignments);
router.post('/add', addAssignment);


export default router;