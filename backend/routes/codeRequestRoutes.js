// codeRequestRoutes.js
import express from 'express';
import { createCodeRequest, deleteCodeRequest, confirmCodeRequest, getAllCodeRequests } from '../controllers/codeRequestController.js'; 

const router = express.Router();

// Endpoint for handling code requests
router.post('/new-code-request',  createCodeRequest);
router.put('/confirm-code-request', confirmCodeRequest);
router.delete('/delete-code-request/:codeRequestId', deleteCodeRequest);
router.get('/all-code-requests', getAllCodeRequests);




export default router;
