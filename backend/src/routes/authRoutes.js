// routes/authRoutes.js

import express from 'express';
import verifyToken from '../middleware/auth.js';
import authController from '../controllers/authController.js';

const router = express.Router();

// User
router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/protected', verifyToken, authController.protectedRoute);
router.put('/users/:userId', authController.updateUser);
router.put('/users/:userId/approve', authController.updateApprovalStatus);
router.get('/users', authController.getUsers);
router.get('/users/pending', authController.getPendingUsers);
router.delete('/users/pending/:userId', authController.rejectUser);
router.get('/:userId', authController.getUserById);
router.get('/login/:email', authController.getUserByEmailAndPassword);
router.get('/staffs/:staff', authController.getAllStaffs);



// Issue

export default router;
