// controllers/postController.js
import Post from '../models/Post.js';
import { upload } from '../middleware/multer.js';


// Function to create a post with image upload
 const createPost =  async (req, res) => {
    try {
      const { title, content, postedBy, datePosted } = req.body;
  
      // Get the image path from multer
      const image = req.file ? req.file.path : null;
      const likes = [];
      const post = new Post({
        title,
        content,
        image,
        postedBy,
        datePosted,
        likes,
      });
  
      await post.save();
  
      res.json({ message: 'Post created successfully', post });
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'An error occurred while creating the post.' });
    }
  };

// Function to like a post
 const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { user } = req; // Assuming user is authenticated

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    if (!post.likes.includes(user._id)) {
      post.likes.push(user._id);
      await post.save();
    }

    res.json({ message: 'Liked post successfully', post });
  } catch (error) {
    console.error('Error liking post:', error);
    res.status(500).json({ error: 'An error occurred while liking the post.' });
  }
};

// Function to comment on a post
 const commentOnPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const { user } = req; // Assuming user is authenticated

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    const newComment = {
      content,
      user: user._id,
    };

    post.comments.push(newComment);
    await post.save();

    res.json({ message: 'Comment added successfully', post });
  } catch (error) {
    console.error('Error commenting on post:', error);
    res.status(500).json({ error: 'An error occurred while commenting on the post.' });
  }
};
// comment on post

const addComment = async (req, res) => {
    try {
      const { postId, content, userId } = req.body;
  
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      const newComment = {
        content,
        user: userId
      };
  
      post.comments.push(newComment);
      await post.save();
  
      res.json({ message: 'Comment added successfully', post });
    } catch (error) {
      console.error('Error adding comment:', error);
      res.status(500).json({ error: 'An error occurred while adding the comment.' });
    }
  };

//   Like a post

const addLike = async (req, res) => {
    try {
        const postId = req.params
      const {  userId } = req.body;
  
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found too',postId });

      }
  
      if (!post.likes.includes(userId)) {
        post.likes.push(userId);
        await post.save();
      }
  
      res.json({ message: 'Like added successfully', post });
    } catch (error) {
      console.error('Error adding like:', error);
      res.status(500).json({ error: 'An error occurred while adding the like.' });
    }
  }

//   Unlike a post
const removeLike = async (req, res) => {
    try {
      const { postId, userId } = req.body;
  
      const post = await Post.findById(postId);
      if (!post) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      const index = post.likes.indexOf(userId);
      if (index !== -1) {
        post.likes.splice(index, 1);
        await post.save();
      }
  
      res.json({ message: 'Like removed successfully', post });
    } catch (error) {
      console.error('Error removing like:', error);
      res.status(500).json({ error: 'An error occurred while removing the like.' });
    }
  };


export default{
    commentOnPost,
    likePost,
    createPost,
    addComment,
    addLike,
    removeLike

}
