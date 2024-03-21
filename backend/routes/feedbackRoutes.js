import express from 'express';
import feedbackController from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/new', feedbackController.createFeedback);
router.put('/:feedbackId', feedbackController.updateFeedback);
router.delete('/:feedbackId', feedbackController.deleteFeedback);
router.get('/:userId', feedbackController.getFeedbackByUserId);

export default router;
