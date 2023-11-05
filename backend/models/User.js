import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: { type: String },
  email: { type: String },
  username: { type: String },
  password: { type: String },
  role: { type: String, enum: ['Student', 'Staff', 'Admin'] },
  faculty: { type: String },
  level: { type: Number },
  position: {
    type: String,
    enum: ['Ci', 'Io', 'Academic', 'Logistics', 'Admin', 'Commandant','Student', '']
  },
  accountStatus: { type: String, enum: ['active', 'inactive'], default: 'inactive' },
  approvalStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
});

const User = mongoose.model('User', userSchema);

export default User;