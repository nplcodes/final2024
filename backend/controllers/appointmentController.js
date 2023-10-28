import Availability from '../models/Availability.js';
import Appointment from '../models/Appointment.js';
import Notification from '../models/Notification.js';


// Make appointment for a student
const makeAppointment = async (req, res) => {
    const { timeSlotId } = req.params;
    const { userId } = req.body;
  
    try {
      // Find the availability time slot by its ID
      const availability = await Availability.findById(timeSlotId);
  
      if (!availability) {
        return res.status(404).json({ error: 'Availability not found.' });
      }
  
      // Check if the time slot is already booked
      if (availability.isBooked) {
        return res.status(400).json({ error: 'Time slot is already booked.' });
      }
  
      // Create a new appointment
      const appointment = new Appointment({
        staffId: availability.user,  // Assuming availability has a staffId field
        studentId: userId,
        startTime: availability.startTime,
        endTime: availability.endTime,
      });
  
      // Mark the availability as booked
      availability.isBooked = true;
      await availability.save();
  
      // Save the appointment
      await appointment.save();
  
      res.json({ message: 'Appointment made successfully.', appointment });
    } catch (error) {
      console.error('Error making appointment:', error);
      res.status(500).json({ error: 'An error occurred while making the appointment.' });
    }
  };

  //   student get all time slots
const getAllTimeSlots = async (req, res) => {
    try {
      const { userId } = req.params;
  
      // Fetch all available time slots for the given user (student)
      const timeSlots = await Availability.find({ user: userId });
  
      res.json({ timeSlots });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching time slots.' });
    }
  };

//   All staff timeslots
const getAllTimeSlotsForAllStaff = async (req, res) => {
    try {
      // Fetch all available time slots
      const timeSlots = await Availability.find();
  
      res.json({ timeSlots });
    } catch (error) {
      res.status(500).json({ error: 'Error fetching time slots.' });
    }
  };

//   User cancel appointment

   const cancelAppointment = async (req, res) => {
    const { appointmentId } = req.params;
  
    try {
      // Find the appointment and update its status to 'cancelled'
      const appointment = await Appointment.findByIdAndUpdate(appointmentId, { status: 'cancelled' }, { new: true });
  
      // Notify the staff about the cancellation
      const notification = new Notification({
        notificationType: 'appointment_cancelled',
        content: `Your appointment on ${appointment.startTime} to ${appointment.endTime} has been cancelled.`,
        recipient: appointment.staffId,
      });
  
      await notification.save();
  
      res.json({ message: 'Appointment cancelled successfully', appointment });
    } catch (error) {
      console.error('Error cancelling appointment:', error);
      res.status(500).json({ error: 'An error occurred while cancelling the appointment.' });
    }
  };

  export default {
    makeAppointment,
    getAllTimeSlots,
    getAllTimeSlotsForAllStaff,
    cancelAppointment
  };