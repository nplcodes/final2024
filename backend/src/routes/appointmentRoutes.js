// routes/appointment.js
import express from 'express';
import appointmentController from '../controllers/appointmentController.js';

const router = express.Router();

// Student endpoint
router.post('/:timeSlotId', appointmentController.makeAppointment);
router.get('/student/:userId', appointmentController.getAllTimeSlots);
router.get('/time-slots/all-staff', appointmentController.getAllTimeSlotsForAllStaff);
router.put('/student/:appointmentId/cancel', appointmentController.cancelAppointment);


export default router;
