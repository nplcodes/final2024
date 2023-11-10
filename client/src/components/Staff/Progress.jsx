import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiMessage } from 'react-icons/bi';
import { BsDot } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function IssuesInProgress() {
  const progressIssues = useSelector((state) => state.issue.progressIssues);

  return (
    <div>
      <p className='pb-3 font-bold'>My issues page</p>

      {progressIssues.length === 0 ? (
        <p>No  issue Progress</p>
      ) : (
        progressIssues.map((issue) => (
          <div className='max-h-60 overflow-y-auto' key={issue._id}>
            <div className='flex flex-row justify-between p-10 mb-1 border-b border-b-1'>
              <Link to={`/Home/manage-issue/${issue._id}`}>
                <div className='flex gap-5'>
                  <div className='text-green-500 text-4xl'>
                    <BsDot />
                  </div>
                  <img
                    className='w-10 h-10 rounded-full'
                    src='https://www.shutterstock.com/image-illustration/male-default-placeholder-avatar-profile-260nw-582509551.jpg'
                    alt={issue.title}
                  />
                  <div>
                    <p className='text-xl pb-2 font-semibold italic'>{issue.category}</p>
                    <div className='flex gap-2'>
                      <p className='text-green-500'>{issue.reporterName} Progressing</p>
                      <div className='h-5 w-[0.5px] bg-slate-300'></div>
                      <p className='text-slate-500 flex items-center gap-2'>
                        <AiOutlineClockCircle />
                        {issue.dateReported}
                      </p>
                      <div className='h-5 w-[0.5px] bg-slate-300'></div>
                      <p className='flex items-center gap-2 text-slate-500'>
                        <BiMessage />
                        {issue.comments} Comments
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default IssuesInProgress;
