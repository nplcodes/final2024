import React, { useEffect, useState } from 'react'
import PieChart from '../../../PieChart';
import { UserData } from '../../../Data';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { issueActions } from '../../../redux/issue/issueSlice';



function AllStaffReport() {
  const dispatch = useDispatch()
    const allIssues = useSelector((state) => state.issue.issues);
    const [userData] = useState({
        datasets: [
          {
            label: "Issues Submitted",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
        // labels: UserData.map((data) => data.year),
      });
    
      const options = {
        plugins: {
          datalabels: {
            formatter: (value, ctx) => {
              const percent = ((value / ctx.dataset.data.reduce((a, b) => a + b, 0)) * 100).toFixed(2) + '%';
              const label = ctx.dataset.label ? ctx.dataset.label + ': ' + percent : percent;
              return label;
            },
          },
        },
      };

          // fetch data
    useEffect(() => {
      const fetchIssues = async () => {
        try {
          const response = await axios.get('http://localhost:8080/issue/all-issues');
          dispatch(issueActions.setIssues(response.data))
        } catch (error) {
          console.error('Error fetching issues:', error);
        }
      };
  
      fetchIssues();
    }, []); 

    const categories = ['Rogistics', 'Academic', 'Welfare', 'Personal'];
    const categorizedIssues = {};
    const totalIssues = allIssues.length;


    categories.forEach((category) => {
      categorizedIssues[category] = allIssues.filter((issue) => issue.category === category);
    });

    // percentage
    const categoryPercentages = {};

    categories.forEach((category) => {
      const categoryCount = categorizedIssues[category].length;
      const percentage = (categoryCount / totalIssues) * 100;
      categoryPercentages[category] = percentage.toFixed(2); // Round to 2 decimal places
    });
      
  return (
    <div>
            <div className='grid grid-cols-6'>
              <div className='col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='p-5'>
                  <div>
                    <div className='container flex'>
                      {/* Left div for the pie chart */}
                      <div className='w-4/5 h-[300px] flex justify-center'>
                        {/* Place your pie chart component or code here */}
                        <PieChart chartData={userData} options={options}/>
                      </div>
                      <div className='w-1/5'>
                        <div className="flex flex-col items-start max-w-xs">
                          <div className="text-gray-500 border-b border-gray-200 mb-2 pb-2"> Most appear</div>
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                            <p className="text-sm">Rogistics: {categoryPercentages.Rogistics}%</p>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-green-500 mr-2"></div>
                            <p className="text-sm">Personal: {categoryPercentages.Personal}%</p>
                          </div>
                          <div className="flex items-center mb-2">
                            <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
                            <p className="text-sm">Academic: {categoryPercentages.Academic}%</p>
                          </div>
                          <div className="flex items-center">
                            <div className="w-4 h-4 bg-red-500 mr-2"></div>
                            <p className="text-sm">Welfare: {categoryPercentages.Welfare}%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default AllStaffReport