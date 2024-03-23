import express from 'express';
import feedbackController from '../controllers/feedbackController.js';

const router = express.Router();

router.post('/new', feedbackController.createFeedback);
router.put('/:feedbackId', feedbackController.updateFeedback);
router.put('/assign/:feedbackId', feedbackController.updateAssignedToDuringEscalation);
router.delete('/:feedbackId', feedbackController.deleteFeedback);
router.get('/:userId', feedbackController.getFeedbackByUserId);
router.put('/read/:feedbackId/:assignedTo', feedbackController.updateFeedbackIsRead);


export default router;
