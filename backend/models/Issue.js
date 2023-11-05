// models/issue.js

import mongoose from 'mongoose';

const attachmentSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});

const StaffStudentcommentSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  createdAt: { type: Date, default: Date.now },
});


const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  status: { type: String, default: 'open' },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dateReported: { type: Date, default: Date.now },
  dateUpdated: { type: Date },
  staffStudentDiscussion: [StaffStudentcommentSchema],
  inChatRoom: { type: Boolean, default: false },
  inDiscussion: { type: String, default: 'new' },
  groupComments: [commentSchema], 
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  attachments: [attachmentSchema], 
}, {
  timestamps: true,
});

const Issue = mongoose.model('Issue', issueSchema);

export default Issue;
