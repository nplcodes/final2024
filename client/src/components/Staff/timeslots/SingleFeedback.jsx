import React, { useState } from 'react';

const ClaimFormModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    // Define form fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    // You can send the formData to the server or perform any other action
    onClose();
  };

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-md shadow-md w-[50%]" >
        <h2 className="text-lg font-bold mb-4">Claim Form</h2>
        <form className=''>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="fullName"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Reason for Claim</label>
            <textarea
              name="claimReason"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter reason for claim"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
            <div className="mt-1 grid grid-cols-2 gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="howDidYouHear"
                  value="Word of Mouth"
                  className="mr-2"
                />
                Word of Mouth
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="howDidYouHear"
                  value="Social Media"
                  className="mr-2"
                />
                Social Media
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="howDidYouHear"
                  value="Advertisement"
                  className="mr-2"
                />
                Advertisement
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="howDidYouHear"
                  value="Other"
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Additional Comments</label>
            <textarea
              name="additionalComments"
              rows={4}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              placeholder="Enter additional comments"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeTerms"
                className="mr-2"
              />
              I agree to the terms and conditions
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
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum justo eget lorem consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum justo eget lorem consequat.',
  };

  // If feedback is not provided, use dummy data for testing
  feedback = feedback || dummyFeedback;

  return (
    <div className="max-w-[100%] bg-white shadow-md rounded-md overflow-hidden my-4">
      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2">Feedback Details</div>
        <p className="text-sm mb-2"><strong>Submitted By:</strong> {feedback.reporter}</p>
        <p className="text-sm mb-2"><strong>Date:</strong> {new Date(feedback.date).toLocaleDateString()}</p>
        <p className="text-sm mb-2"><strong>Status:</strong> {feedback.status}</p>
        <p className="text-sm mb-2"><strong>Description:</strong> {feedback.description}</p>
        
        {/* Steps to be followed */}
        <div className="font-bold text-lg mt-4 mb-2">Steps to Follow</div>
        <ol className="list-decimal pl-6">
          <li>Step 1: Analyze the feedback thoroughly.</li>
          <li>Step 2: Identify the necessary actions to resolve the issue.</li>
          <li>Step 3: Assign tasks to relevant team members.</li>
          <li>Step 4: Monitor progress and provide updates.</li>
          <li>Step 5: Close the feedback once resolved.</li>
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
