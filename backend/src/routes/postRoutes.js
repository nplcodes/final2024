// routes/posts.js

import express from 'express';
import postController from '../controllers/postController.js';
import {upload} from '../middleware/multer.js';


const router = express.Router();

router.post('/', upload.single('image'), postController.createPost);
router.post('/comment/:postId', postController.addComment);
router.post('/:postId/like', postController.addLike);
router.delete('/:postId/like', postController.removeLike);

export default router;
