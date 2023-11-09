import express from 'express';

const router = express.Router();
import notificationController from '../controllers/NotificationController.js';

// Route for fetching notifications by user ID
router.get('/:userId', notificationController.getNotificationsByUser);

export default router;
