import express from 'express';
import  commentController  from '../controllers/commentController.js';

const router = express.Router();

// POST a new comment for a specific issue
router.post('/new-comment/:issueId', commentController.createComment);

// GET all comments for a specific issue
router.get('/view-comment/:issueId', commentController.getCommentsForIssue);
router.delete('/delete/:id', commentController.deleteComment);


export default router
