// routes/issues.js

import express from 'express';
import issueController from '../controllers/issueController.js';
import upload from '../middleware/upload.js';

const router = express.Router();


router.post('/new-issue', issueController.createIssue);
router.put('/assign/:issueId', issueController.updateAssignedTo);
router.put('/edit/:id',upload.single('attachments'), issueController.updateIssue);
// router.delete('/delete/:id', issueController.deleteIssue);
router.put('/reject-issue/:id', issueController.rejectIssue);
router.get('/view/:id', issueController.getIssueDetails);
router.get('/reporter/:reporterId', issueController.getIssuesByReporterId);
router.get('/all-issues', issueController.getAllIssues);
router.delete('/delete/:id', issueController.deleteIssueById);



export default router;
