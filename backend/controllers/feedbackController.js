import Feedback from '../models/Feedback.js';

// Controller to create a new feedback
const createFeedback = async (req, res) => {
    // Extract data from request
    const { issueId, reporter, assignedStaff, feedbackMessage, reason, wantToGoHigher } = req.body;

    try {
        // Create a new feedback instance
        const feedback = new Feedback({
            issueId,
            reporter,
            assignedStaff,
            reason,
            feedbackMessage,
            wantToGoHigher
        });

        // Save the feedback to the database
        await feedback.save();

        res.status(201).json({ message: 'Feedback created successfully.', feedback });
    } catch (error) {
        console.error('Error creating feedback:', error);
        res.status(500).json({ error: 'Could not create feedback.' });
    }
};

// Controller to update a feedback
const updateFeedback = async (req, res) => {
    // Extract parameters from request
    const { feedbackId } = req.params;
    const { issueId, reporter, assignedStaff, feedbackMessage, wantToGoHigher } = req.body;

    try {
        // Find the feedback by ID and update it
        const feedback = await Feedback.findByIdAndUpdate(
            feedbackId,
            { issueId, reporter, assignedStaff, feedbackMessage, wantToGoHigher },
            { new: true } // Return the updated feedback
        );

        res.json({ message: 'Feedback updated successfully.', feedback });
    } catch (error) {
        console.error('Error updating feedback:', error);
        res.status(500).json({ error: 'Could not update feedback.' });
    }
};

// Controller to delete a feedback
const deleteFeedback = async (req, res) => {
    // Extract parameters from request
    const { feedbackId } = req.params;

    try {
        // Find the feedback by ID and delete it
        const feedback = await Feedback.findByIdAndDelete(feedbackId);

        if (!feedback) {
            return res.status(404).json({ error: 'Feedback not found.' });
        }

        res.json({ message: 'Feedback deleted successfully.', feedback });
    } catch (error) {
        console.error('Error deleting feedback:', error);
        res.status(500).json({ error: 'An error occurred while deleting the feedback.' });
    }
};

// Controller to get all feedbacks by user ID
const getFeedbackByUserId = async (req, res) => {
    // Extract parameters from request
    const { userId } = req.params;

    try {
        // Find all feedbacks for the given user ID
        const feedbacks = await Feedback.find({ $or: [{ reporter: userId }, { assignedStaff: userId }] });

        res.json({ feedbacks });
    } catch (error) {
        console.error('Error getting feedbacks:', error);
        res.status(500).json({ error: 'An error occurred while getting feedbacks.' });
    }
};

export default {
    createFeedback,
    updateFeedback,
    deleteFeedback,
    getFeedbackByUserId,
};
