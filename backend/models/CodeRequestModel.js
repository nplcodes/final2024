// CodeRequestModel.js
import mongoose from 'mongoose';

const codeRequestSchema = new mongoose.Schema({
  staff: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff', // Assuming you have a Staff model, adjust as needed
    required: true,
  },
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', 
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const CodeRequest = mongoose.model('CodeRequest', codeRequestSchema);

export default CodeRequest;
