import { Events } from "../models/eventsSchema.js";

export const createEvents = async (req, res, next) => {
  console.log(req.body);
  const { name, description, date } = req.body;

  try {
    if (!name || !description || !date) {
      return res.status(400).json({ error: "Please Fill the Form Completely!" });
    }

    const newEvent = await Events.create({ name, description, date });

    res.status(201).json({
      success: true,
      message: "Event is Created!",
      event: newEvent, // Returning the created event
    });
  } catch (err) {
    next(err);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await Events.find();
    res.status(200).json({
      success: true,
      events, // Return events in plural
    });
  } catch (err) {
    next(err);
  }
};

export const countEvents = async (req, res) => {
  try {
    const count = await Events.countDocuments();
    res.status(200).json({ success: true, count });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};