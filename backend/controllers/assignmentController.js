import Assignment from '../models/assignmentSchema.js';

export const getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json({ success: true, assignments });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
export const addAssignment = async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ success: false, message: 'Title and description are required' });
    }
    
    try {
        const newAssignment = new Assignment({
            title,
            description,
        });
        
        await newAssignment.save();


        return res.status(201).json({ success: true, assignment: newAssignment });
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
    }
};

export const countAssignments = async (req, res) => {
    try {
        const count = await Assignment.countDocuments();
        res.status(200).json({ success: true, count });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};