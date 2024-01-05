import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'
import { generateVerificationCode } from '../VerificationCode.js';

const SECRET_KEY = process.env.SECRET_KEY;
const EMAIL = process.env.EMAIL;
const PASSWORD = process.env.PASSWORD;


const registerUser = async (req, res) => {
  const { username, password, fullName, email, role } = req.body;
  const profile = req.file ? req.file.path : null;
  const verificationCode = generateVerificationCode();



  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email has already taken.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      password: hashedPassword,
      fullName,
      email,
      role,
      profile,
      faculty: '',
      level: 0,
      verificationCode: verificationCode,
    });

    // Send email to user to comfirm registration
    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASSWORD
        }
    }

    let transporter = nodemailer.createTransport(config);

    // email template or design
    let MailGenerator = new Mailgen({
      theme: "default",
      product : {
          name: "nplcodes",
          link : 'https://mailgen.js/'
      }
  })

  // Email contents or body
  let response = {
    body: {
        name : "Leon",
        intro: "Your Account have been created, copy the code to verify your account!",
        table : {
            data : [
                {
                    code : verificationCode,
                    description: "Verification code",
                }
            ]
        },
        outro: "Looking forward!"
    }
} 

    // template and body together
    let mail = MailGenerator.generate(response);
    // Message to send
    let message = {
      from : EMAIL,
      to : email,
      subject: "Comfirm registration",
      html: mail
    }

    // 
    transporter.sendMail(message)

    await user.save();
    res.status(201).json({ message: 'User registered successfully.', user });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Could not register user.' });
  }
};


// Update profile picture
const updateProfileImage = async (req, res) => {
  try {
    const { userId } = req.params;
    const profileImage = req.file.path;

    // Update the user's profile image
    const updatedUser = await User.findByIdAndUpdate(userId, { profile: profileImage }, { new: true });

    res.status(200).json({ message: 'Profile image updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating profile image:', error);
    res.status(500).json({ error: 'An error occurred while updating the profile image.' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'User not exist.' });
    }

    const checkPassword = await bcrypt.compare(password, user.password);

    if (checkPassword) {
      if (user.approvalStatus === 'pending') {
        return res.status(403).json({ error: 'Your account is pending.' });
      } else {
        const token = jwt.sign({ email: user.email }, SECRET_KEY);
        res.setHeader('Authorization', `Bearer ${token}`);
        return res.json({ message: 'Login successful.', token });
      }
    } else {
      return res.status(401).json({ error: 'Invalid credentials.' });
    }
  } catch (error) {
    console.log('Login failed', error);
    return res.status(500).json({ error: 'Could not login.' });
  }
};



const protectedRoute = (req, res) => {
  res.json({ message: 'This is a protected route.', user: req.user });
};

// Update user
const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { username, fullName, email, role, faculty, position, level } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, fullName, email, role, faculty, position, level },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user details', error: error.message });
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
    //
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
    const users = await User.find();
    res.json( users );
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

const getUserById = async (req, res) => {
  const {userId} = req.params;
  try {
    const user = await User.findById(userId);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Could not retrieve user details.' });
  }
};

// Get user by email and password
const getUserByEmailAndPassword = async (req, res) => {
  try {
    const { email } = req.params;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// get all staffs

const getAllStaffs = async (req, res) => {
  try {
    const { staff } = req.params;

    const staffs = await User.find({ role: staff });

    if (!staff) {
      return res.status(404).json({ error: 'Staff not found' });
    }

    res.status(200).json(staffs);
  } catch (error) {
    console.error('Error fetching staff data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// get one staff
const getSingleStaff = async (req, res) => {
  try {
    const { staffId } = req.params;

    const staff = await User.find({ _id: staffId });

    if (!staff) {
      return res.status(404).json({ error: 'Staff not found' });
    }

    res.status(200).json(staff);
  } catch (error) {
    console.error('Error fetching staff data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
// update 
const updateUserDetails = async (req, res) => {
  const { userId } = req.params;
  const { username, fullName, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, fullName, email },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user details', error: error.message });
  }
};

const updateUserPassword = async (req, res) => {
  const { password } = req.body;
  const { userId } = req.params;

  try {
    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the user's password
    await User.findByIdAndUpdate(userId, { password: hashedPassword });

    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Unable to update password' });
  }
};

// Approve user
const ApproveUser = async (req, res) => {
  try {
    const {userId} = req.params;

    const approveUser = await User.findByIdAndUpdate(userId, { approvalStatus: 'approved' }, { new: true });

    if (!approveUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.json(approveUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Reject a user
const RejectUser = async (req, res) => {
  const {userId} = req.params;
  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await User.findByIdAndRemove(userId);
    return res.json({Mesage: "user is deleted"})
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller for deactivating a user's account
const deactivateAccount = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(userId, { accountStatus: 'inactive' }, { new: true });

    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Controller for activating a user's account 
const activateAccount = async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByIdAndUpdate(userId, { accountStatus: 'active' }, { new: true });

    res.json(user);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// verification code check user
const VerifyCode = async (req, res) => {
  try {
    const { verificationCode } = req.params;

    const checkCode = await User.findOneAndUpdate(
      { verificationCode: verificationCode },
      { 
        approvalStatus: 'pending',
        verificationCode: 0,  // Set verificationCode to 0
      },
      { new: true }
    );

    if (!checkCode) {
      return res.status(404).json({ error: 'verificationCode not found' });
    }

    return res.json(checkCode);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
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
  deactivateUser,
  getUserById,
  getUserByEmailAndPassword,
  getAllStaffs,
  updateUserDetails,
  updateUserPassword,
  getSingleStaff,
  ApproveUser,
  RejectUser,
  activateAccount,
  deactivateAccount,
  updateProfileImage,
  VerifyCode
};
