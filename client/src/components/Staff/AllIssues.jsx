import { useState } from 'react';
import { BsDot } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { TbArrowBearRight2 } from "react-icons/tb";
import MeetingAndEscalate from './issueEscalationAndMeeting/ShareAndEscalateIssue';



function AllIssues() {
    const newIssues = useSelector((state) => state.issue.newIssues);

      const handleIconClick = (issueId) => {
        setSelectedIssueId(issueId);
      };
      
      const handleClosePopUp = () => {
        setSelectedIssueId(null);
      };
      const [selectedIssueId, setSelectedIssueId] = useState(null);


  return (
    <div>
        {newIssues.length === 0 ? (
        <p>No  New issue</p>
      ) : (
      newIssues?.map((issue) => (
        <div className='max-h-60 overflow-y-auto'>
          <div className='flex flex-row justify-between mb-1 border-b border-b-1'>
          <Link to={`/Home/manage-issue/${issue._id}`} key={issue._id}>
            <div className='flex gap-1'>
              <div className='text-red-500 text-4xl'><BsDot /></div>
              <div>
                <p className='pb-2 '>{issue.description}</p>
              </div>
            </div>
            </Link>
            <div className='flex flex-col gap-1'>
            <TbArrowBearRight2 onClick={() => handleIconClick(issue._id)} className="cursor-pointer text-red-600 text-xl font-bold"
            />
              {selectedIssueId === issue._id && (
              <MeetingAndEscalate
                onClose={handleClosePopUp}
                issueId={selectedIssueId}
              />
            )}
            </div>
          </div>
        </div>
      )))}
    </div>
  )
}

export default AllIssues;