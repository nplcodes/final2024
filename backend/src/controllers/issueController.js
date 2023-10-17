// controllers/issueController.js

import Issue from '../models/Issue.js';
import Notification from '../models/Notification.js';
import Comment from '../models/Comment.js';


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
    const { id } = req.params;  // Extract the issue ID from the route parameter
    const { assignedTo, senderId } = req.body;
  
    try {
      const issue = await Issue.findByIdAndUpdate(id, { assignedTo }, { new: true });
  
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
// Student can Deltete issue 

//  const deleteIssue = async (req, res) => {
//     try {
//       const { id } = req.params;
  
//       const deletedIssue = await Issue.findByIdAndRemove(id);
  
//       if (!deletedIssue) {
//         return res.status(404).json({ message: 'Issue not found' });
//       }
  
//       res.json({ message: 'Issue deleted successfully', deletedIssue });
//     } catch (error) {
//       console.error('Error deleting issue:', error);
//       res.status(500).json({ error: 'An error occurred while deleting the issue.' });
//     }
//   };

//   Middleman can reject an issue 
// ...

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
  
      const comments = await Comment.find({ issue: id });
  
      res.json({ issue, comments });
    } catch (error) {
      console.error('Error getting issue details:', error);
      res.status(500).json({ error: 'An error occurred while getting issue details.' });
    }
  };

// Function to get all issues for a specific reporter
 const getIssuesByReporterId = async (req, res) => {
    try {
      const { reporterId } = req.params;
  
      const issues = await Issue.find({ reporter: reporterId }).populate('assignedTo');
  
      res.json(issues);
    } catch (error) {
      console.error('Error getting issues by reporter ID:', error);
      res.status(500).json({ error: 'An error occurred while getting the issues.' });
    }
  };

  const getAllOpenIssues = async (req, res) => {
    try {
      const openIssues = await Issue.find({ status: 'open' });
      res.status(200).json(openIssues);
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
  
  

export default { 
    createIssue, 
    updateAssignedTo,
     updateIssue,

      rejectIssue , 
      getIssueDetails,
      getIssuesByReporterId,
      getAllOpenIssues,
      deleteIssueById
};
