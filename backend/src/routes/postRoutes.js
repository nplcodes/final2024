// routes/posts.js

import express from 'express';
import postController from '../controllers/postController.js';
import {upload} from '../middleware/multer.js';


const router = express.Router();

router.post('/create', upload.single('image'), postController.createPost);
router.post('/', upload.single('image'), postController.createPost);
router.post('/comment/:postId', postController.addComment);
router.post('/like/:postId', postController.addLike);
router.delete('/dislike/:postId', postController.removeLike);
router.get('/comments/:postId', postController.getCommentsForPost);
router.put('/:postId', postController.updatePost);
router.delete('/:postId', postController.deletePost);
router.get('/posts/:postedBy', postController.getPostsByUserId);
router.get('/', postController.getAllPosts);





export default router;
