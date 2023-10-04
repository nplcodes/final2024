import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const SECRET_KEY = process.env.SECRET_KEY;

const registerUser = async (req, res) => {
  const { username, password, fullName, email, role } = req.body;

  try {
    // Check if the username or email is already taken
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email is already in use.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      fullName,
      email,
      role,
      faculty: '',
      level: 0,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not register user.' });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ username: user.username }, SECRET_KEY);
      res.setHeader('Authorization', `Bearer ${token}`);
      res.json({ message: 'Login successful.', token });
    } else {
      res.status(401).json({ error: 'Invalid credentials.' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Could not login.' });
  }
};

const protectedRoute = (req, res) => {
  res.json({ message: 'This is a protected route.', user: req.user });
};

// Update user
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updateFields = req.body;
  const { isApproved } = updateFields;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Update common fields (username, password, etc.) regardless of approval
    user.username = updateFields.username || user.username;
    user.password = updateFields.password ? await bcrypt.hash(updateFields.password, 10) : user.password;
    user.fullName = updateFields.fullName || user.fullName;
    user.email = updateFields.email || user.email;
    user.role = updateFields.role || user.role;

    // Update additional fields if the user is approved
    if (isApproved) {
      user.position = updateFields.position || user.position;
      user.faculty = updateFields.faculty || user.faculty;
      user.level = updateFields.level || user.level;
      user.accountStatus = updateFields.accountStatus || user.accountStatus;
      user.approvalStatus = updateFields.approvalStatus || user.approvalStatus;
    }

    await user.save();

    res.json({ message: 'User updated successfully.', user });
  } catch (error) {
    res.status(500).json({ error: 'Could not update user.' });
  }
};


// Admin approve pending user
const updateApprovalStatus = async (req, res) => {
  const { userId } = req.params;
  const { approvalStatus } = req.body;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Update the approvalStatus
    user.approvalStatus = approvalStatus;
    await user.save();

    // Create a notification
    const notification = new Notification({
      notificationType: 'Account Approval',
      content: `Your account has been ${approvalStatus === 'approved' ? 'approved' : 'rejected'}.`,
      sender: req.user._id, // Assuming you have a logged-in user
      recipient: userId,
    });

    // Save the notification
    await notification.save();

    res.json({ message: 'Approval status updated successfully.', user });
  } catch (error) {
    res.status(500).json({ error: 'Could not update approval status.' });
  }
};


// Admin display all users
const getUsers = async (req, res) => {
  try {
    // Fetch all users
    const users = await User.find();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch users.' });
  }
};

// get all pending users
const getPendingUsers = async (req, res) => {
  try {
    // Fetch all users with approvalStatus "pending"
    const pendingUsers = await User.find({ approvalStatus: 'pending' });
    res.json({ pendingUsers });
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch pending users.' });
  }
};

// Reject pending
const rejectUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Check if the user exists and is pending
    const user = await User.findOne({ _id: userId, approvalStatus: 'pending' });
    if (!user) {
      return res.status(404).json({ error: 'Pending user not found.' });
    }

    // Delete the user
    await User.deleteOne({ _id: userId });
    res.json({ message: 'Pending user rejected and deleted successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Could not reject and delete pending user.' });
  }
};

// deactivate user
const deactivateUser = async (req, res) => {
  const { userId } = req.params;

  try {
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Deactivate the user's account
    user.accountStatus = 'inactive';
    await user.save();

    res.json({ message: 'User account deactivated successfully.', user });
  } catch (error) {
    res.status(500).json({ error: 'Could not deactivate user account.' });
  }
};

export default {
  registerUser,
  loginUser,
  protectedRoute,
  updateUser,
  updateApprovalStatus,
  getUsers,
  getPendingUsers,
  rejectUser,
  deactivateUser
};
