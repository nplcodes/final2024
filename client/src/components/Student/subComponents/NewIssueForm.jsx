import React from 'react';
import { Link } from 'react-router-dom';

function NewIssueForm() {
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative">
        <div className="flex   z-10">
          <div className="p-1 bg-white rounded-2xl w-100 ">
            <div>
              <p className='text-2xl pt-1 pb-10'>Forward new #Issue</p>
              <p className='pb-5'>Create new issue to be solved by elders</p>
            </div>
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="We want to see you"
                    name="title"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Priority</label>
                  <select
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    name="role"
                  >
                    <option value=" ">Select priority</option>
                    <option value="Low">Low</option>
                    <option value="High">High</option>
                    <option value="Urgency">Urgency</option>

                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Your username"
                    name="username"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Your full name"
                    name="fullName"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Role</label>
                  <select
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    name="role"
                  >
                    <option value=" ">Select role</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Enter issue description"
                    name="description"
                  ></textarea>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <select
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
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
              >
                Rise
              </button>
              <p>
                <Link to='/Home/issue-list' className='text-blue-500'>Back</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewIssueForm;