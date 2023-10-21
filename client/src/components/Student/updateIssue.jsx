import React from 'react';
import { Link } from 'react-router-dom';

// Validaton uing yup
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import  {object,mixed , string}  from "yup";
const allowedFileExtensions = ['pdf', 'docx', 'txt', 'jpg', 'jpeg', 'png'];

// Validation Form schema
const validationSchema = object().shape({
  title: string()
  .max(30, 'Issue title must be at most 30 characters')
  .required('title is required'),

description: string()
.matches(/^[A-Za-z\s]+$/, 'Description can only contain letters and spaces')
.max(200, 'Description must be at most 200 characters')
.required('Full name is required'),

  category: string().required("select your role"),


attachment:mixed()
.test('fileType', 'Invalid file type', (value) => {
  if (!value) return true;  // Allow empty attachment
  const fileExtension = value.split('.').pop().toLowerCase();
  return allowedFileExtensions.includes(fileExtension);
}),

});

function UpdateIssue() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const onSubmitHandler = async(data) => {
    try {
      console.log('Data saved to MongoDB');
    } catch (error) {
      console.error('Error saving data to MongoDB', error);
    }
    reset();
  };
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative pt-10">
        <div className="flex   z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-[60%] border">
            <div>
              <p className='text-2xl pt-5'>Update #Issue</p>
              <p className='pb-5'>Update issue to be solved by elders</p>
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
                 <label className="text-sm font-mediumtext-red-500">{errors.title?.message}</label>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <textarea
                  {...register("description")}
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Enter issue description"
                    name="description"
                  ></textarea>
                    <label className="text-sm font-medium text-red-500">{errors.description?.message}</label>
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
                  <label className="text-sm font-medium text-red-500">{errors.category?.message}</label>

                </div>
                <div>
                   <input type="file" name="file" className="border rounded p-2" />
                   <label className="text-sm font-medium text-red-500">{errors.attachment?.message}</label>

                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Rise
              </button>
              <p>
                <Link to='/Home/issue-page' className='text-blue-500'>Back</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
