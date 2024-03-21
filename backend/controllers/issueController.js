// controllers/issueController.js
import CodeRequest from '../models/CodeRequestModel.js';
import Issue from '../models/Issue.js';
import Notification from '../models/Notification.js';
import User from '../models/User.js';


// Create new issue
const createIssue = async (req, res) => {
  try {
    const { title, reporter, description, category, private_channel_code  } = req.body;

    const newIssue = new Issue({
      title,
      reporter,
      description,
      assignedTo: null,
      category,
      attachments: req.file
        ? [{
            filename: req.file.filename,
            url: `/uploads/${req.file.filename}`,
          }]
        : [],
    });

     // If private_channel_code exists, add it to newIssueData
     if (private_channel_code) {
      const codeRequest = await CodeRequest.findOne({ _id: private_channel_code });
      if (codeRequest && codeRequest.staff) {
        newIssue.assignedTo = codeRequest.staff;
        newIssue.status = 'assigned';
      }
      newIssue.private_channel_code = private_channel_code;
      await CodeRequest.findOneAndUpdate({_id: private_channel_code}, {
        in_use: true
      });
    }
    
    const issue = await Issue.create(newIssue);

    const adminUser = await User.findOne({ role: 'Admin' });
    
    if (adminUser) {
      const adminNotification = new Notification({
        notificationType: 'IssueCreated',
        content: 'New issue created',
        recipient: adminUser._id,
      });
      await adminNotification.save();
    }

    res.status(201).json({ message: 'Issue submitted successfully', issue });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// add additional attachment file
const addAttachment = async (req, res) => {
  try {
    const { issueId } = req.params;
    const issue = await Issue.findById(issueId);
    if (!issue) {
      return res.status(404).json({ error: 'Issue not found' });
    }

    issue.attachments.push({
      filename: req.file.filename,
      url: `/uploads/${req.file.filename}`,
    });
    await issue.save();

    res.status(200).json({ message: 'Attachment added successfully', issue });
  } catch (error) {
    console.error('Error adding attachment:', error);
    res.status(500).json({ error: 'An error occurred while adding the attachment.' });
  }
};

// Assign issue to Staff
const updateAssignedTo = async (req, res) => {
  const { issueId } = req.params;
  const { assignedTo, status, senderId, priority } = req.body;

  try {
    const issue = await Issue.findByIdAndUpdate(issueId, { assignedTo, status, priority }, { new: true });

    if (!issue) {
      return res.status(404).json({ message: 'Issue not found' });
    }

    // Send notification to the assigned user
    const staffNotificationMessage = `You have been assigned to an issue (ID: ${issue._id}) with priority ${priority}.`;
    const studentNotificationMessage = `Your issue (ID: ${issue._id}) has been assigned to a staff member.`;

    // Send notification to staff
    let staffNotification;
    if (priority === 'Urgent') {
      // Send an alert notification if priority is 'Urgent'
      staffNotification = new Notification({
        notificationType: 'alert',
        content: "Urgent issue assigned!",
        recipient: assignedTo,
        relatedIssue: issue._id
      });
    } else {
      // Send a regular issue assigned notification otherwise
      staffNotification = new Notification({
        notificationType: 'IssueAssigned',
        content: staffNotificationMessage,
        recipient: assignedTo,
        relatedIssue: issue._id
      });
    }
    await staffNotification.save();

    // Send notification to the student who reported the issue
    const studentNotification = new Notification({
      notificationType: 'IssueAssigned',
      content: studentNotificationMessage,
      recipient: issue.reporter,
      relatedIssue: issue._id
    });
    await studentNotification.save();

    res.status(200).json(issue);
  } catch (error) {
    console.error('Error updating assignment:', error);
    res.status(500).json({ message: 'Internal server error' });
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
        const issues = await Issue.find({ reporter: reporterId});
        // const issues = await Issue.find({ reporter: reporterId , $or: [ { status: 'assigned' }, { status: 'closed' } ] });

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

// close issue
const closeIssue = async (req, res) => {
  const { issueId } = req.params;

  try {
    const issue = await Issue.findById(issueId);

    if (!issue) {
      return res.status(404).json({ error: 'Issue not found' });
    }
    issue.feedback.push(req.body);

    const updatedIssue = await issue.save();
    // delete code after issue is closed
    await CodeRequest.findByIdAndDelete(issueId);

    res.json(updatedIssue);
  } catch (error) {
    console.log('Error closing issue:', error);
    res.status(500).json({ error: 'Internal Server Error' });
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
      markIssueAsRead,
      addAttachment,
      closeIssue
};




