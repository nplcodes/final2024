// routes/issues.js

import express from 'express';
import issueController from '../controllers/issueController.js';
import upload from '../middleware/upload.js';

const router = express.Router();


router.post('/new-issue', issueController.createIssue);
router.put('/assign/:issueId', issueController.updateAssignedTo);
router.put('/escalate/:issueId', issueController.EscalateIssue);
router.put('/share/:issueId', issueController.ShareIssueToChatRoom);

router.put('/edit/:id',upload.single('attachments'), issueController.updateIssue);
// router.delete('/delete/:id', issueController.deleteIssue);
router.put('/reject-issue/:id', issueController.rejectIssue);
router.get('/view/:id', issueController.getIssueDetails);
router.get('/reporter/:reporterId', issueController.getIssuesByReporterId);
router.get('/assigned-staff/:assignedToId', issueController.getIssuesByAssignedId);
router.get('/all-issues', issueController.getAllIssues);
router.get('/chatroom-issues', issueController.getAllIssuesInChatRoom);
router.delete('/delete/:id', issueController.deleteIssueById);
router.post('/chatroom/:issueId/comments', issueController.addCommentInGroup);
router.get('/chatroom/:issueId/comments', issueController.getCommentsByIssueId);



router.get('/open', issueController.getOpenIssues);



export default router;
