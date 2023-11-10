import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import axios from 'axios';
import Modal from '../pop_up/Model';
import { useSelector } from 'react-redux';



const validationSchema = object().shape({
  title: string()
    .max(30, 'Issue title must be at most 30 characters')
    .required('Title is required'),
    reporter: string()
    .required('Your id is missing please'),
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
  
  const userInfo = useSelector((state)=> state.auth.user);
  const reporter = userInfo._id;



  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });


  const onSubmitHandler = async (data) => {
    try {
      const formData = new FormData();
      formData.append('title', data.title);
      formData.append('reporter', data.reporter);
      formData.append('description', data.description);
      formData.append('category', data.category);
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
                    rows={5}
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
                    required
                    {...register("attachment")}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                  />
                </div>
                <div>
                  <input
                  {...register('reporter')}
                    type="hidden"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="We want to see you"
                    name="reporter"
                    value={reporter}
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
