// models/post.js

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  content: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  datePosted: { type: Date, default: Date.now }
});

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String },  // Store image path
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  datePosted: { type: Date, default: Date.now },
  comments: [commentSchema],  // Array of comments
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],  // Array to store user IDs who liked the post

});

const Post = mongoose.model('Post', postSchema);

export default Post;
