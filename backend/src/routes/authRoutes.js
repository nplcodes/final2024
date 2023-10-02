// routes/authRoutes.js

import express from 'express';
import verifyToken from '../middleware/auth.js';
import authController from '../controllers/authController.js';

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);
router.get('/protected', verifyToken, authController.protectedRoute);

export default router;
