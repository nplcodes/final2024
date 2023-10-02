// models/User.js

import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

export default User;

// models/user.js

// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   fullName: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['student', 'staff'], required: true },
//   faculty: { type: String },
//   level: { type: Number },
//   position: {
//     type: String,
//     enum: ['ci', 'io', 'academic', 'logistics', 'admin', 'commandant']
//   },
//   accountStatus: { type: String, enum: ['active', 'inactive'], default: 'active' },
//   approvalStatus: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
// });

// const User = mongoose.model('User', userSchema);

// export default User;

