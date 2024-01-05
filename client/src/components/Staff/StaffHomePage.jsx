import { useDispatch, useSelector, } from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { issueActions } from '../../redux/issue/issueSlice';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';


const StaffHomePage = () => {
    // const userInfo = useSelector((state)=> state.auth.user);
const dispatch = useDispatch();
const newIssues = useSelector((state) => state.issue.newIssues);
const progressIssues = useSelector((state) => state.issue.progressIssues);
const closedIssues = useSelector((state) => state.issue.closedIssues);
const All_Issues = useSelector((state) => state.issue.assignedToMe);
const len = All_Issues.length;
const Issues = All_Issues.slice(len - 4, len);

//three lengths
const newLeng = newIssues.length
const progLeng = progressIssues.length
const closeLeng = closedIssues.length


const [assignedToId, setUserId] = useState(null);



  const data = [
    { label: 'Progress', value: progLeng },
    { label: 'Open', value: newLeng },
    { label: 'Closed', value: closeLeng },
  ];

  const labels = data.map(item => item.label);
  const values = data.map(item => item.value);



  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Issues Chart',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: values
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };


// issues 

useEffect(() => {
  const storedUserInfo = JSON.parse(sessionStorage.getItem('authState'));
  
  if (storedUserInfo && storedUserInfo.user && storedUserInfo.user._id) {
    setUserId(storedUserInfo.user._id);
  } else {
      //
  }
}, []);


useEffect(() => {
  if (assignedToId) {
    const fetchStudentIssues = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/issue/assigned-staff/${assignedToId}`);
        dispatch(issueActions.setAssignedToMe(response.data));

      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentIssues();
  }
}, [dispatch, assignedToId]);

  return (
    <div>
      <div className="issue-container px-32 py-16 grid grid-cols-2 gap-6">
        <div className="cards-graph">
          <div className="cards grid grid-cols-3 gap-3">
          <Link to="/Home/staff-issue-page">
            <div className="card-1 cursor-pointer bg-blue-500 px-10 py-10 rounded-md flex flex-col gap-4 justify-center items-center">
              <p className='text-2xl'>Open </p>
              <h1 className='text-2xl'>{newLeng}</h1>
            </div>
            </Link>
            <Link to="/Home/staff-issue-page">
            <div className="card-1 cursor-pointer bg-blue-500 px-10 py-10 rounded-md flex flex-col gap-4 justify-center items-center">
              <p className='text-2xl'>Progress</p>
              <h1 className='text-2xl'>{progLeng}</h1>
            </div>
            </Link>
            <Link to="/Home/staff-issue-page">
            <div className="card-1 cursor-pointer bg-blue-500 px-10 py-10 rounded-md flex flex-col gap-4 justify-center items-center">
              <p className='text-2xl'>Closed</p>
              <h1 className='text-2xl'>{closeLeng}</h1>
            </div>
            </Link>
          </div>
          <div className="graph py-32">
            <Bar data={chartData} options={options} />
          </div>
        </div>
      <div className="latest-issue border px-8 py-4">
        <div className="latest-title text-4xl font-bold pb-6">
          <p className=''>Recent issues</p>
        </div>
        <div className="issues-list flex flex-col gap-5 py-4">
        {Issues?.map((issue) =>(
            <div className="issue-1 border p-4 rounded-md space-y-2">
              <p className=''>{issue.title}</p>
              {issue.status==='assigned' && <p className='px-3 text-red-500'>{issue.status}</p> }
              {issue.status==='progress' && <p className='px-3 text-green-500 '>{issue.status}</p>}
              {issue.status==='closed' && <p className='px-3 text-gray-500'>{issue.status}</p>}
            </div>
        ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default StaffHomePage