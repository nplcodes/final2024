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

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  status: { type: String, default: 'open' },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dateReported: { type: Date, default: Date.now },
  dateUpdated: { type: Date },
  inChatRoom: {type: Boolean, default: false},
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  attachments: [attachmentSchema], // Array of attachment objects
}, {
  timestamps: true} // Add timestamps
);

const Issue = mongoose.model('Issue', issueSchema);

export default Issue;
