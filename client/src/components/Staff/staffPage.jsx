import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function StaffPage() {
  const unassignedIssues = useSelector((state) => state.issue.unassignedIssues);
  const total_number_issues = unassignedIssues.length;

  const allIssues = useSelector((state) => state.issue.assignedIssues);
  const recentIssues = allIssues.slice(0, 3);


  return (
    <div className='pl-32 pr-32 pt-10'>
      <header className="bg-slate-200 p-5 text-black">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Manage upcomming </h1>
        </div>
      </header>
      <div className="flex p-8">
        <div className="w-3/5 mr-8">
          <h1 className="text-2xl font-semibold mb-4">New Issues ({total_number_issues})</h1>
          <div className="space-y-4">
            {unassignedIssues?.map((issue) => (
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg flex items-center justify-between">
                <Link to={`/Home/middleman-issue-page/${issue._id}`}>
                  <div>
                    <h2 className="text-lg font-semibold">{issue.title}</h2>
                    <p className="text-gray-600">{issue.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/5">
          <h5 className="text-md font-thin italic mb-4">recent assigned</h5>
          <div className="space-y-4">
            {recentIssues.map((issue) => (
              <div key={issue._id} className="bg-white p-4 shadow-md rounded-lg">
                <h2 className="text-sm font-semibold">{issue.title}</h2>
                <p className="text-gray-600">{issue.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaffPage;

