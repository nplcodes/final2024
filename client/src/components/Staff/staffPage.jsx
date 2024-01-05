import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { format, render, cancel, register } from 'timeago.js';


function StaffPage() {
  const unassignedIssues = useSelector((state) => state.issue.unassignedIssues);
  const total_number_issues = unassignedIssues.length;

  const allIssues = useSelector((state) => state.issue.assignedIssues);
  const recentIssues = allIssues.slice(0, 3);


  return (
    <div className='pl-32 pr-32 pt-10'>
      <header className="bg-slate-200 p-5 text-black">
        <div className="container mx-auto flex justify-between items-center rounded-md">
          <h1 className="text-xl font-bold">New Issues Page </h1>
        </div>
      </header>
      <div className="flex p-8 border h-screen">
        <div className="w-4/5 mr-8 border">
          <h1 className="text-2xl font-semibold mb-4 p-4 ">New Issues ({total_number_issues})</h1>
          <div className="space-y-4">
            {unassignedIssues?.map((issue) => (
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
                <Link to={`/Home/middleman-issue-page/${issue._id}`}>
                  <div>
                    <h2 className="text-lg text-red-500 font-bold">{issue.title}</h2>
                    <p className="text-gray-500">{issue.description}</p>
                    <p className='pt-3 text-gray-400'>{format(issue?.createdAt)}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/5 border">
          <h5 className="text-md font-thin italic mb-4">recent assigned</h5>
          <div className="space-y-4">
            {recentIssues.map((issue) => (
              <Link to={`/Home/middleman-issue-page/${issue._id}`}>
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-sm font-semibold">{issue.title}</h2>
                <p className="text-gray-600">{issue.description}</p>
                <p className='pt-3 text-gray-400'>{format(issue?.dateReported)}</p>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;

