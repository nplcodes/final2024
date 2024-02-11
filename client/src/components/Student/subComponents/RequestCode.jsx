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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allStaffs, setAllStaffs] = useState([]);
  const [staff_to_interact, setSelectedStaff] = useState('');


  // select staff to interact with
  const staff='Staff';

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

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const userInfo = useSelector((state)=> state.auth.user);
  const requester = userInfo._id;



  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });


  const onSubmitHandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append('staff', data.staff);
      formData.append('requester', data.requester);
      formData.append('reason', data.reason);
      formData.append('why', data.why);
      formData.append('attachment', data.attachment[0]); // Assuming a single file is selected

      await axios.post('http://localhost:8080/issue/new-issue', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      openModal();
    } catch (error) {
      console.error('Error creating issue:', error);
    }
    reset();
  };

  const code=false;

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="flex z-10 px-2">
          <div className="p-8 rounded-2xl w-full">
            {code ? (
              <div className='flex justify-end'><CodeCard /></div>
            ):('')}
           <p className='pb-8 text-2xl font-bold'>Request Private Channel</p>
            <form  onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="grid grid-cols-2 gap-4">
                {/* fields */}
                <div>
                  
                  <div className='mt-2'>
                  <select
                      id="staffSelect"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      value={staff}
                      onChange={(e) => setSelectedStaff(e.target.value)}
                      >
                          <option value="">Select staff</option>
                          {allStaffs.map((s)=> <option  value={s._id}>{s.position}</option>)}
                  </select>
                  </div>
                  <div className='mt-2'>
                    <select
                      {...register("why")}
                      className="w-full text-base p-3 border-none bg-gray-100  rounded-lg focus:outline-none focus:border-blue-400"
                      name="why"
                    >
                      <option value="">Why private channel?</option>
                      <option value="Real talk">Real talk</option>
                      <option value="Advice">Advice</option>
                      <option value="Urgency">Urgency</option>
                    </select>
                  </div>
                  <div className='mt-2'>
                    <input
                      type="file"
                      required
                      {...register("attachment")}
                      className="w-full text-base p-3 border-none bg-gray-100 rounded-lg focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <div className='mt-2'>
                    <input
                    {...register('requester')}
                      type="text"
                      className="w-full text-base p-3 border-none bg-gray-100 rounded-lg focus:outline-none focus:border-blue-400"
                      placeholder="We want to see you"
                      name="requester"
                      value={requester}
                    />
                    <label className="text-sm font-medium text-red-500">{errors.requester?.message}</label>
                  </div>
                </div>
                {/* text area and button */}
                <div>
                  <div>
                    <textarea {...register("reason")} rows={10}
                      className="w-full text-base p-3 border-none bg-gray-100 rounded-lg focus:outline-none focus:border-blue-400"
                      placeholder="what is Main reason?"
                      name="reason"
                    ></textarea>
                    <p className="text-sm font-medium text-red-500">{errors.reason?.message}</p>
                  </div>
                  <button
                  type="submit"
                  className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                  Request Code
                  </button>
                </div>
              </div>
              <p>
                <Link to='#' className='text-blue-500 max-w-64'>Back</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default RequestCode;
