// controllers/issueController.js
import Issue from '../models/Issue.js';
import Notification from '../models/Notification.js';
import mongoose from 'mongoose';
import User from '../models/User.js';


// Create new issue
const createIssue = async (req, res) => {
  try {
    const newIssueData = { ...req.body, assignedTo: null };  // Set assignedTo to null initially
    const issue = new Issue(newIssueData);
    await issue.save();
    res.status(201).json({Meassage: "Issue is submitted very well", issue});
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Assign issue to Staff
const updateAssignedTo = async (req, res) => {
    const { issueId } = req.params;  // Extract the issue ID from the route parameter
    const { assignedTo, status, senderId } = req.body;
  
    try {
      const issue = await Issue.findByIdAndUpdate(issueId, { assignedTo, status }, { new: true });
  
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
  
      // Send notification to the assigned user
      const staffNotificationMessage = `Issue ${issue._id} has been assigned to you.`;
      const studentNotificationMessage = `Issue ${issue._id} has been assigned to staff.`;
  
      // Send notification to staff
      const staffNotification = new Notification({
        notificationType: 'IssueAssigned',
        content: staffNotificationMessage,
        sender: senderId,  // Assuming senderId contains the sender's ID (staff)
        recipient: assignedTo,
        relatedIssue: issue._id
      });
      await staffNotification.save();
  
      // Send notification to the student who reported the issue
      const studentNotification = new Notification({
        notificationType: 'IssueAssigned',
        content: studentNotificationMessage,
        sender: senderId,  // Assuming senderId contains the sender's ID (staff)
        recipient: issue.reporter,
        relatedIssue: issue._id
      });
      await studentNotification.save();
  
      res.status(200).json(issue);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  // Assign issue to Staff
const EscalateIssue = async (req, res) => {
  const { issueId } = req.params; 
  const { assignedTo } = req.body;

  try {
    const issue = await Issue.findByIdAndUpdate(issueId, { assignedTo }, { new: true });

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    res.status(200).json(issue);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

  // Remove issue in cht Room
  const RemoveIssueToChatRoom = async (req, res) => {
    const { issueId } = req.params;
  
    try {
      const issue = await Issue.findByIdAndUpdate(issueId, { inChatRoom: 'false' }, { new: true });
  
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
  
      res.status(200).json(issue);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

    // Send issue in cht Room
    const ShareIssueToChatRoom = async (req, res) => {
      const { issueId } = req.params;
    
      try {
        const issue = await Issue.findByIdAndUpdate(issueId, { inChatRoom: 'true' }, { new: true });
    
        if (!issue) {
          return res.status(404).json({ message: 'Issue not found' });
        }
    
        res.status(200).json(issue);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    };
  // Retrieve issue to be display in chatroom
  const getAllIssuesInChatRoom = async (req, res) => {
    try {
      const Issues = await Issue.find({inChatRoom: true});
      res.status(200).json(Issues);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

// Student updae issue

const updateIssue = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { file } = req;
    const { id } = req.params;

    const updatedIssue = {
      title,
      description,
    };

    if (file) {
      // If a file is uploaded, create an attachment object and push it to the attachments array
      updatedIssue.attachments = [{
        filename: file.originalname,
        url: file.path,
      }];
    }

    // Update the issue with the new data and attachments
    const updated = await Issue.findByIdAndUpdate(id, { $set: updatedIssue }, { new: true });

    res.json(updated);
  } catch (error) {
    console.error('Error updating issue:', error);
    res.status(500).json({ error: 'An error occurred while updating the issue.' });
  }
};

const getOpenIssues = async (req, res) => {
  try {
    const openIssues = await Issue.find({ status: 'open' });

    res.status(200).json(openIssues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

 const rejectIssue = async (req, res) => {
    try {
      const { id } = req.params;
  
      const rejectedIssue = await Issue.findByIdAndUpdate(id, { $set: { status: 'rejected' } }, { new: true });
  
      if (!rejectedIssue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
  
      res.json({ message: 'Issue rejected successfully', rejectedIssue });
    } catch (error) {
      console.error('Error rejecting issue:', error);
      res.status(500).json({ error: 'An error occurred while rejecting the issue.' });
    }
  };

//   View the issue details
// Function to get issue details including comments
 const getIssueDetails = async (req, res) => {
    try {
      const { id } = req.params;
  
      const issue = await Issue.findById(id);
      if (!issue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
    
      res.json({ issue });
    } catch (error) {
      console.error('Error getting issue details:', error);
      res.status(500).json({ error: 'An error occurred while getting issue details.' });
    }
  };
  // student issue
  const getIssuesByReporterId = async (req, res) => {
    try {
      const {reporterId} = req.params;
      if (reporterId) {
        const issues = await Issue.find({ reporter: reporterId , status: 'assigned'});
        res.status(200).json(issues);
      } else {
        res.status(400).json({ message: 'Invalid reporterId' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

   // Staff issue
   const getIssuesByAssignedId = async (req, res) => {
    try {
      const {assignedToId} = req.params;
      if (assignedToId) {
        const issues = await Issue.find({ assignedTo: assignedToId});
        res.status(200).json(issues);
      } else {
        res.status(400).json({ message: 'Invalid assignedToID' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  const getAllIssues = async (req, res) => {
    try {
      const Issues = await Issue.find();
      res.status(200).json(Issues);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  const deleteIssueById = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedIssue = await Issue.findByIdAndDelete(id);
      if (!deletedIssue) {
        return res.status(404).json({ message: 'Issue not found' });
      }
      res.status(200).json({ message: 'Issue deleted successfully' });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

const addCommentInGroup = async (req, res) => {
  try {
    const { issueId } = req.params;
    const { text, authorId } = req.body;

    if (!issueId || !authorId) {
      return res.status(400).json({ message: 'Invalid input data' });
    }
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    const newComment = {
      text,
      author: authorId,
    };

    issue.groupComments.push(newComment);

    await issue.save();

    const authorInfo = await User.findById(authorId);
    const commentWithUserInfo = {
      ...newComment,
      authorInfo,
    };
    return res.status(201).json(commentWithUserInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const addCommentInStaffStudentChat = async (req, res) => {
  try {
    const { issueId } = req.params;
    const { text, authorId } = req.body;

    if (!issueId || !authorId) {
      return res.status(400).json({ message: 'Invalid input data' });
    }
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }
    const newComment = {
      text,
      author: authorId,
    };

    issue.staffStudentDiscussion.push(newComment);

    await issue.save();

    const userInfo = await User.findById(authorId);
    const commentWithUserInfo = {
      ...newComment,
      userInfo,
    };
    return res.status(201).json(commentWithUserInfo);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


// fetch group comments
const getCommentsByIssueId = async (req, res) => {
  try {
    const { issueId } = req.params;
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ error: 'Issue not found' });
    }

    const comments = issue.groupComments;

    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
}

const getStaffStudentCommentsByIssueId = async (req, res) => {
  try {
    const { issueId } = req.params;
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ error: 'Issue not found' });
    }

    const comments = issue.staffStudentDiscussion;

    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
}


// Update the isRead field for an issue
const markIssueAsRead = async (req, res) => {
  try {
    const { issueId } = req.params;
    const updatedIssue = await Issue.findOneAndUpdate(
      { _id: issueId },
      { $set: { isRead: true } },
      { new: true }
    );

    if (!updatedIssue) {
      return res.status(404).json({ error: 'Issue not found' });
    }

    res.json({ message: 'Issue marked as read successfully', issue: updatedIssue });
  } catch (error) {
    console.error('Error marking issue as read:', error);
    res.status(500).json({ error: 'An error occurred while marking the issue as read.' });
  }
};
  

export default { 
    createIssue, 
    updateAssignedTo,
     updateIssue,
     getOpenIssues,
      rejectIssue , 
      getIssueDetails,
      getIssuesByReporterId,
      getAllIssues,
      deleteIssueById,
      getIssuesByAssignedId,
      EscalateIssue,
      ShareIssueToChatRoom,
      getAllIssuesInChatRoom,
      addCommentInGroup,
      getCommentsByIssueId,
      RemoveIssueToChatRoom,
      addCommentInStaffStudentChat,
      getStaffStudentCommentsByIssueId,
      markIssueAsRead
};




