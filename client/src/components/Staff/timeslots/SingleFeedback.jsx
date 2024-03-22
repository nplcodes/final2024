import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

const ClaimFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    issueId:"",
    reporter:"",
    assignedStaff:"",
    reason: '',
    feedbackMessage: '',
    whatToImprove: "",
    satisfied: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/feedback/new', formData);
      console.log('Feedback submitted:', response.data);

      onClose();
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-[50%]">
        <h2 className="text-lg font-bold mb-4">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Reason for feedback</label>
            <textarea
              name="reason"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter reason for feedback"
              value={formData.reason}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">What can we do improve resolution of issue?</label>
            <div className="mt-1 grid grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="whatToImprove"
                  value="Word of Mouth"
                  className="mr-2"
                  checked={formData.whatToImprove === 'Word of Mouth'}
                  onChange={handleChange}
                />
                Word of Mouth
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="whatToImprove"
                  value="Social Media"
                  className="mr-2"
                  checked={formData.whatToImprove === 'Word of Mouth'}
                  onChange={handleChange}
                />
                Social Media
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="whatToImprove"
                  value="Advertisement"
                  className="mr-2"
                  checked={formData.whatToImprove === 'Word of Mouth'}
                  onChange={handleChange}
                />
                Advertisement
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="whatToImprove"
                  value="Other"
                  className="mr-2"
                  checked={formData.whatToImprove === 'Word of Mouth'}
                  onChange={handleChange}
                />
                Other
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Add Feedback </label>
            <textarea
              name="feedbackMessage"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter feedback"
              value={formData.feedbackMessage}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="satisfied"
                className="mr-2"
                checked={formData.satisfied}
                onChange={handleChange}
              />
              Do you want to meet Higher level Staff?
            </label>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${!formData.agreeTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!formData.satisfied}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};


const SingleFeedback = ({ feedback }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const issueDetails = useSelector((state) => state.issue.studentIssues);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Dummy feedback data for testing
  const dummyFeedback = {
    reporter: 'John Doe',
    date: '2024-03-17',
    status: 'Resolved',
    description: ' ipsujusto eget lorem consequat.',
  };

  // If feedback is not provided, use dummy data for testing
  feedback = feedback || dummyFeedback;
  return (
    <div className="max-w-[100%] bg-white shadow-md rounded-md overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">Feedback Details</div>
        <p className="text-sm mb-2"><strong>Issue title:</strong> {issueDetails?.issue.title}</p>
        <p className="text-sm mb-2"><strong>Details:</strong>{issueDetails?.issue.description}</p>
        <p className="text-sm mb-2"><strong>Submited Date:</strong> {new Date( issueDetails?.issue.updatedAt).toLocaleDateString()}</p>
        <p className="text-sm mb-2"><strong>Status:</strong> {issueDetails?.issue.status}</p>
        
        {/* Steps to be followed */}
        <div className="font-bold text-lg mt-4 mb-2">Steps to Follow</div>
        <ol className="list-decimal pl-6">
          {issueDetails?.issue.feedback.map(step =>(
            <li key={Date.now()+Math.random()}>{step.steps}.</li>
          ))}
        </ol>
      </div>
      <div className='flex justify-end px-6 py-4'>
        <button
          onClick={openModal}
          className='bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 hover:bg-blue-600'
        >
          Want to Claim?
        </button>
      </div>
      {isModalOpen && <ClaimFormModal onClose={closeModal} />}
    </div>
  );
};
export default SingleFeedback;
