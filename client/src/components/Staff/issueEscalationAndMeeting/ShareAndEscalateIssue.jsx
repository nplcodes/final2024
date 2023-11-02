import axios from 'axios';
import React, { useState, useEffect } from 'react';


function MeetingAndEscalate({ onClose, issueId }) {
  const [issue, setIssue] = useState(issueId);
  const [allStaffs, setAllStaffs] = useState([])
  const staff='staff';
  const [assignedTo, setSelectedStaff] = useState('');



  // Use useEffect to update the issue state when issueId changes
  useEffect(() => {
    setIssue(issueId);
  }, [issueId]);

//   fetch all staff

useEffect(() => {
    const fetchIssuesData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/staffs/'+staff);
        setAllStaffs(response.data)
      } catch (error) {
        console.log(error)
      }
    };
  
    fetchIssuesData();
  }, []);

//   Escalate Issue to top level
  const EscalateIssue = async(e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8080/issue/escalate/${issueId}`, {assignedTo})
    .then((response)=>{
        console.log("idiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",response.data)
    })
    .catch((error)=>{
        console.log(error)
    })
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <div className="bg-white w-[500px] h-[500px] p-4 rounded-lg shadow-md z-10 flex flex-col justify-center items-center">
        <div className="w-full flex gap-10">
          {/* Left Div */}
          <div className="w-1/2">
            <form>
              <label htmlFor="selectOption">Select Staff</label>
              <select
                id="selectOption"
                name="selectOption"
                className="w-full p-2 rounded-md"
                value={assignedTo}
                onChange={(e) => setSelectedStaff(e.target.value)}
              >
                {allStaffs.map((s)=> <option  value={s._id}>{s.position}</option>)}
              </select>
              <button
                className="bg-blue-500 text-white p-2 rounded-md w-full mt-6"
                onClick={EscalateIssue }
              >
                Escalate
              </button>
            </form>
          </div>
          {/* Right Div */}
          <div className="w-1/2">
            <p className="text-lg font-bold">Post Issue in discussion</p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  name="issue"
                  className="w-full rounded-md"
                  value={issue}
                ></input>
              </div>
              <button
                className="bg-blue-500 text-white p-2 rounded-md w-full"
                onClick={() => {
                  // Handle the "Post" button click action here
                }}
              >
                Post
              </button>
            </form>
          </div>
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-md mt-4"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default MeetingAndEscalate;
