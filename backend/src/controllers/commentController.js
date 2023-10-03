import Comment from '../models/Comment.js';

// Function to create a comment for a specific issue
 const createComment = async (req, res) => {
  try {
    const { content, role, userId } = req.body;
    const { issueId } = req.params;

    const comment = new Comment({
      content,
      user: userId,
      issue: issueId,
      role,  // Assign the role of the commenter
    });

    await comment.save();

    res.json({ message: 'Comment added successfully', comment });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'An error occurred while creating the comment.' });
  }
};

// Function to get all comments for a specific issue
 const getCommentsForIssue = async (req, res) => {
  try {
    const { issueId } = req.params;

    const comments = await Comment.find({ issue: issueId }).populate('user');

    res.json(comments);
  } catch (error) {
    console.error('Error getting comments:', error);
    res.status(500).json({ error: 'An error occurred while getting the comments.' });
  }
};

// Function to delete a comment for a specific issue
 const deleteComment = async (req, res) => {
    try {
      const { id } = req.params;
  
      const deletedComment = await Comment.findByIdAndRemove(id);
  
      if (!deletedComment) {
        return res.status(404).json({ message: 'Comment not found' });
      }
  
      res.json({ message: 'Comment deleted successfully', deletedComment });
    } catch (error) {
      console.error('Error deleting comment:', error);
      res.status(500).json({ error: 'An error occurred while deleting the comment.' });
    }
  };

export default{
    getCommentsForIssue,
    createComment,
    deleteComment

}
