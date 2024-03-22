import { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackComponent = () => {
  const [userId, setUserId] = useState(null);
  const [feedbackData, setFeedbackData] = useState([]);
  
  useEffect(() => {
    // Fetch user ID from sessionStorage
    const storedUserInfo = JSON.parse(sessionStorage.getItem('authState'));
    if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
      setUserId(storedUserInfo.user._id);
    } else {
      console.log('Failed to fetch userID');
    }
  }, []);
  
  useEffect(() => {
    // Fetch feedback data based on the user ID
    const fetchFeedbackData = async () => {
      try {
        if (!userId) return;
        const response = await axios.get(`http://localhost:8080/feedback/${userId}`);
        setFeedbackData(response.data); // Access feedbacks array
      } catch (error) {
        console.error('Error fetching feedback data:', error);
      }
    };
  
    fetchFeedbackData();
  }, [userId]); // Trigger fetchFeedbackData when userId changes
  
console.log("yiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii", feedbackData)


  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbackData?.length === 0 ? (
          <div className="text-center text-gray-500">No feedback found</div>
        ) : (
          feedbackData?.map((feedback) => (
            <div key={feedback._id} className="bg-white rounded-md shadow-md p-6">
              <h2 className="text-xl font-semibold mb-2">{feedback.issueTitle}</h2>
              <p className="text-gray-600 mb-4">{feedback.feedbackText}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src=""
                    alt=""
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-gray-700">{feedback.reporterName}</span>
                </div>
                <span className="text-gray-500">{new Date(feedback.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FeedbackComponent;
