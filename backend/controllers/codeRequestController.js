// codeRequestController.js
import CodeRequest from "../models/CodeRequestModel.js";

const createCodeRequest = async (req, res) => {
  try {
    // Extract data from the request
    const { staff, reason, requester, why } = req.body;

    // Create a new code request
    const newCodeRequest = new CodeRequest({
      staff,
      reason,
      requester,
      why
    });

    // Save the code request to the database
    await newCodeRequest.save();

    res.status(201).json({ message: 'Code request created successfully' });
  } catch (error) {
    console.error('Error creating code request:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const confirmCodeRequest = async (req, res) => {
    try {
      const { codeRequestId } = req.body;
  
      // Update the code request status to "Approved" and set the confirmedBy field
      const updatedCodeRequest = await CodeRequest.findByIdAndUpdate(
        codeRequestId,
        { status: 'Approved' },
        { new: true }
      );
  
      if (!updatedCodeRequest) {
        return res.status(404).json({ message: 'Code request not found' });
      }
  
      res.status(200).json({ message: 'Code request confirmed successfully' });
    } catch (error) {
      console.error('Error confirming code request:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const deleteCodeRequest = async (req, res) => {
    try {
      const { codeRequestId } = req.params;
  
      // Find and delete the code request
      const deletedCodeRequest = await CodeRequest.findByIdAndDelete(codeRequestId);
  
      if (!deletedCodeRequest) {
        return res.status(404).json({ message: 'Code request not found' });
      }
  
      res.status(200).json({ message: 'Code request deleted successfully' });
    } catch (error) {
      console.error('Error deleting code request:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

  const getAllCodeRequests = async (req, res) => {
    try {
      // Retrieve all code requests from the database
      const codeRequests = await CodeRequest.find();
  
      res.status(200).json(codeRequests);
    } catch (error) {
      console.error('Error fetching code requests:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };

export { createCodeRequest, confirmCodeRequest, deleteCodeRequest, getAllCodeRequests  };
