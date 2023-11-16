import { Link } from 'react-router-dom';
import { DiRedis } from "react-icons/di";
import { BiBookmarkAltMinus } from "react-icons/bi";
import PieChart from '../../PieChart';
import { UserData } from '../../Data'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Appointments() {
    const [issues, setIssues] = useState([]);
    const [openIssues, setOpenIssues] = useState([]);
    const [closedIssues, setClosedIssues] = useState([]);
    const [userData, setUserData] = useState({
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
            borderWidth: 0,
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
            const response = await axios.get('http://localhost:8080/issue/all-issues'); // Replace 'your-api-endpoint' with the actual endpoint
            setIssues(response.data);
          } catch (error) {
            console.error('Error fetching issues:', error);
          }
        };
    
        fetchIssues();
      }, []); 

      useEffect(() => {
        // Filter open and closed issues when 'issues' state changes
        const openIssues = issues.filter((issue) => issue.status === 'open');
        const closedIssues = issues.filter((issue) => issue.status === 'closed');
    
        setOpenIssues(openIssues);
        setClosedIssues(closedIssues);
      }, [issues]);


      console.log("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii",closedIssues);

    return (
      <div className='p-10'>
        <div>
          <p className='text-blue-500 text-2xl'>Overall Report</p>
        </div>
        {/* Booking left part */}
        <div className='w-full flex p-10'>
          <div className='bg-gray-200 w-[20%] h-[100px] flex flex-col items-center gap-2 justify-center'>
            <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'><DiRedis /></p>
            <Link to="#">
              <p className='text-2xl cursor-pointer p-2 hover:bg-blue-500 hover:text-white'><BiBookmarkAltMinus /></p>
            </Link>
          </div>
          <div className='w-[80%]'>
            <div className='grid grid-cols-6'>
              <div className='col-span-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                <div className='p-5'>
                  <div>
                    {/* Container div for the pie chart and its description */}
                    <div className='container flex'>
                      {/* Left div for the pie chart */}
                      <div className='w-4/5 h-[400px] flex justify-center'>
                        {/* Place your pie chart component or code here */}
                        <PieChart chartData={userData} options={options}/>
                      </div>
                      <div className='w-1/5'>
                        <p>Description</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Appointments;
  
  