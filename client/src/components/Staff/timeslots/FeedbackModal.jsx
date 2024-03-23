import { useState, useEffect } from 'react';
import axios from 'axios';

const FeedbackModal = ({ feedback, onClose }) => {
    
    const staff = 'Staff';
    const [assignedTo, setSelectedStaff] = useState('');
    const [allStaffs, setAllStaffs] = useState([]);
    // const [isReadUpdated, setIsReadUpdated] = useState(false);

    useEffect(() => {
        const fetchIssuesData = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/auth/staffs/${staff}`);
                setAllStaffs(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchIssuesData();
    }, []);

    // const handleAssignTo = async () => {
    //     try {
    //         if (assignedTo && feedback?._id) {
    //             await axios.put(`http://localhost:8080/feedback/assign/${feedback._id}/${assignedTo}`);
    //             // Add any additional logic after successful update if needed
    //         }
    //     } catch (error) {
    //         console.error('Error updating assignedTo:', error);
    //     }
    // };

    // useEffect(() => {
    //     const updateIsRead = async () => {
    //         try {
    //             if (!isReadUpdated && feedback?._id) {
    //                 await axios.put(`http://localhost:8080/feedback/read/${feedback._id}`);
    //                 setIsReadUpdated(true);
    //             }
    //         } catch (error) {
    //             console.error('Error updating isRead:', error);
    //         }
    //     };

    //     updateIsRead();
    // }, [feedback, isReadUpdated]);

    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-75 z-50">
            <div className="bg-white rounded-md shadow-lg" style={{ width: '50%', height: '50%' }}>
                <div className="p-8 h-full flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-semibold mb-2">{feedback?.issueTitle}</h2>
                        <p className="text-gray-600 mb-4">{feedback?.feedbackText}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <img
                                    src={feedback?.reporterImage}
                                    alt="reporter_image"
                                    className="w-8 h-8 rounded-full mr-2"
                                />
                                <span className="text-gray-700">{feedback?.reporterName}</span>
                            </div>
                            <span className="text-gray-500">Higher: {feedback?.wantToGoHigher ? "Yes" : "No"}</span>
                        </div>
                    </div>
                    {feedback?.wantToGoHigher && (
                        <select
                            id="staffSelect"
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            value={assignedTo}
                            onChange={(e) => setSelectedStaff(e.target.value)}
                        >
                            <option value="">Select staff</option>
                            {allStaffs.map((s) => <option key={s._id} value={s._id}>{s.position}</option>)}
                        </select>
                    )}
                    <div>
                        <button className="mt-4 text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600" onClick={onClose}>Close</button>
                        {feedback?.wantToGoHigher && (
                            <button className="mt-4 text-white bg-blue-500 px-4 py-2 rounded hover:bg-black">Assign To</button>
                        )}
                        <button className="mt-2 text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackModal;
