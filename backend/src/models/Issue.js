// models/issue.js

import mongoose from 'mongoose';

const issueSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String },
  status: { type: String, default: 'open' },
  reporter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  dateReported: { type: Date, default: Date.now },
  dateUpdated: { type: Date },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  priority: { type: String },
  attachments: { type: [String] } // Assuming file URLs
});

const Issue = mongoose.model('Issue', issueSchema);

export default Issue;
