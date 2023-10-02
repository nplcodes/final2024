// models/post.js

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  datePosted: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  datePosted: { type: Date, default: Date.now },
  comments: [commentSchema],  // Array of comments
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]  // Array of user IDs who liked the post
});

const Post = mongoose.model('Post', postSchema);

export default Post;
