import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from 'axios';
import { UserContext } from '../../../context/UserContext';
import Modal from '../pop_up/Model';


const validationSchema = object().shape({
  title: string()
    .max(30, 'Issue title must be at most 30 characters')
    .required('Title is required'),
    reporter: string()
    .required('Title is required'),
  description: string()
    .max(200, 'Description must be at most 200 characters')
    .required('Description is required'),
  category: string().required('Select your category'),
});

function NewIssueForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);


  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const user = useContext(UserContext); // Retrieve user info from context


  const onSubmitHandler = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/issue/new-issue', data);
      console.log('Issue created successfully:', response.data);
        // After successful issue creation, open the modal
        openModal();
      // Handle success (e.g., show a success message)
    } catch (error) {
      console.error('Error creating issue:', error);
      // Handle error (e.g., show an error message)
    }
    reset();
  };

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="flex   z-10">
          <div className="p-1 bg-white rounded-2xl w-100 ">
            <div>
              <p className='text-2xl pt-1 pb-10'>Forward new #Issue</p>
              <p className='pb-5'>Create new issue to be solved by elders</p>
            </div>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmitHandler)}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Title</label>
                  <input
                    {...register("title")}
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="We want to see you"
                    name="title"
                  />
                  <label className="text-sm font-medium text-red-500">{errors.title?.message}</label>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <textarea {...register("description")}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Enter issue description"
                    name="description"
                  ></textarea>
                  <p className="text-sm font-medium text-red-500">{errors.description?.message}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <select
                    {...register("category")}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    name="category"
                  >
                    <option value="">Select category</option>
                    <option value="Welfare">Welfare</option>
                    <option value="Academic">Academic</option>
                    <option value="Rogistics">Rogistics</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Files</label>
                  <input
                    type="file"
                    {...register("attachment")}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <input
                  {...register('reporter')}
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="We want to see you"
                    name="reporter"
                    value={user? user.state.user._id : null}
                  />
                  <label className="text-sm font-medium text-red-500">{errors.reporter?.message}</label>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Rise
              </button>
              <p>
                <Link to='#' className='text-blue-500'>Back</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default NewIssueForm;
