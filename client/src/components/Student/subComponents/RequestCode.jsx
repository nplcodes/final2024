import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from 'axios';
import Modal from '../pop_up/Model';
import { useSelector } from 'react-redux';
import CodeCard from './codeCard/CodeCard ';

const validationSchema = object().shape({
  staff: string()
    .max(30, 'Issue title must be at most 30 characters')
    .required('Title is required'),
  requester: string()
    .required('Your id is missing please'),
  why: string()
    .max(200, 'Why must be at most 200 characters')
    .required('Description is required'),
  reason: string().required('Select your Reason'),
});

function RequestCode() {
  // Logged user Id
  const userInfo = useSelector((state)=> state.auth.user);
  const requester = userInfo._id;

  const [errorMessage, setErrorMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allStaffs, setAllStaffs] = useState([]);
  const [staff_to_interact, setSelectedStaff] = useState('');
  const [myCodes, setMyCodes] = useState([])
  
  // select staff to interact with
  const staff = 'Staff';
  useEffect(() => {
    const fetchIssuesData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/auth/staffs/' + staff);
        setAllStaffs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    fetchIssuesData();
  }, []);

  // fetch all codes for one user(logged in)
  useEffect(() => {
    const fetchCodeRequests = async () => {
      try {
        // Make a GET request to your backend API to fetch code requests for the logged-in requester
        const response = await axios.get(`http://localhost:8080/api/code/single-code-request/${requester}`); // Update the URL as needed

        // Update the state with the fetched code requests
        setMyCodes(response.data.filter((code)=> code.in_use ==false));
      } catch (error) {
        console.error('Error fetching code requests:', error);
      }
    };

    fetchCodeRequests();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmitHandler = async (data) => {
    try {
      await axios.post('http://localhost:8080/api/code/new-code-request', data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      openModal();
    } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.data && error.response.data.message) {
              setErrorMessage(error.response.data.message);
            } else {
              setErrorMessage('An error occurred while creating the code request.');
            }
    }
    reset();
  };

  const code=false;

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="flex z-10 px-2">
          <div className="p-8 rounded-2xl w-full">
            {/* CodeCard component */}
            {code ? <div className='flex justify-end'><CodeCard codes={myCodes}/></div> : ''}
            <p className='pb-8 text-2xl font-bold'>Request Private Channel</p>
            <form onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="grid grid-cols-2 gap-4">
                {/* fields */}
                <div>
                  <div className='mt-2'>
                    <select
                      {...register("staff")}
                      id="staffSelect"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      defaultValue=""
                      onChange={(e) => setSelectedStaff(e.target.value)}
                    >
                      <option value="" disabled>Select staff</option>
                      {allStaffs.map((s) => <option key={s._id} value={s._id}>{s.position}</option>)}
                    </select>
                    <p className="text-sm font-medium text-red-500">{errors.staff?.message}</p>
                  </div>
                  <div className='mt-2'>
                    <select
                      {...register("why")}
                      className="w-full text-base p-3 border-none bg-gray-100  rounded-lg focus:outline-none focus:border-blue-400"
                      defaultValue=""
                    >
                      <option value="" disabled>Why private channel?</option>
                      <option value="Real talk">Real talk</option>
                      <option value="Advice">Advice</option>
                      <option value="Urgency">Urgency</option>
                    </select>
                    <p className="text-sm font-medium text-red-500">{errors.why?.message}</p>
                  </div>
                  <div className='mt-2'>
                    <input
                      {...register('requester')}
                      type="hidden"
                      className="w-full text-base p-3 border-none bg-gray-100 rounded-lg focus:outline-none focus:border-blue-400"
                      placeholder="We want to see you"
                      defaultValue={requester}
                    />
                    <p className="text-sm font-medium text-red-500">{errors.requester?.message}</p>
                  </div>
                </div>
                {/* text area and button */}
                <div>
                  <div>
                    <textarea
                      {...register("reason")}
                      rows={10}
                      className="w-full text-base p-3 border-none bg-gray-100 rounded-lg focus:outline-none focus:border-blue-400"
                      placeholder="What is the main reason?"
                    ></textarea>
                    <p className="text-sm font-medium text-red-500">{errors.reason?.message}</p>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#1F3365] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  >
                    Request Code
                  </button>
                </div>
              </div>
              <p>
                <Link to='#' className='text-[#1F3365] max-w-64'>Back</Link>
              </p>
            </form>
            {errorMessage && <div className="error-message text-red-500">{errorMessage}</div>}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default RequestCode;
