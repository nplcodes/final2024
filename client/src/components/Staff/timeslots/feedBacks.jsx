import React from 'react';

const dummyFeedbackData = [
  {
    _id: '1',
    title: 'Great Experience',
    description: 'Lorem ipsum dolor sit amet, consectetur ',
    author: { name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
    createdAt: new Date('2024-03-17T08:00:00Z'),
  },
  {
    _id: '2',
    title: 'Improvement Suggestion',
    description: 'Lorem ipsum dolor sit amet, consectetur ',
    author: { name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
    createdAt: new Date('2024-03-16T08:00:00Z'),
  },
  {
    _id: '3',
    title: 'Bug Report',
    description: 'Lorem ipsum dolor sit amet, consectetur ',
    author: { name: 'Alice Johnson', avatar: 'https://via.placeholder.com/150' },
    createdAt: new Date('2024-03-15T08:00:00Z'),
  },
  {
    _id: '3',
    title: 'What to go home for Wedding',
    description: 'Lorem ipsum dolor sit amet, consectetur ',
    author: { name: 'Alice Johnson', avatar: 'https://via.placeholder.com/150' },
    createdAt: new Date('2024-03-15T08:00:00Z'),
  },
  {
    _id: '3',
    title: 'Bug in Displaying Issues',
    description: 'Lorem ipsum dolor sit amet, consectetur ',
    author: { name: 'Alice Johnson', avatar: 'https://via.placeholder.com/150' },
    createdAt: new Date('2024-03-15T08:00:00Z'),
  },
];

const FeedbackComponent = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummyFeedbackData.map((feedback) => (
          <div key={feedback._id} className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{feedback.title}</h2>
            <p className="text-gray-600 mb-4">{feedback.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src={feedback.author.avatar}
                  alt={feedback.author.name}
                  className="w-8 h-8 rounded-full mr-2"
                />
                <span className="text-gray-700">{feedback.author.name}</span>
              </div>
              <span className="text-gray-500">{new Date(feedback.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackComponent;
