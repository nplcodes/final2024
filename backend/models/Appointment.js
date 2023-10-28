import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  staffId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to staff member
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to student
  startTime: { type: Date, required: true },
  endTime: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'cancelled'], default: 'scheduled' },
  createdAt: { type: Date, default: Date.now },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
