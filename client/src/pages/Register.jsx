import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialIcons from '../components/social-media-icons/SocialIcons';

const backgroundImageUrl = 'https://igihe.com/IMG/arton54068.jpg?1406050788';

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  position: 'relative',
};

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    username: '',
    fullName: '',
    role: 'student',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative" style={containerStyle}>
        <div className="absolute bg-gradient-to-b from-blue-700 to-black opacity-75 inset-0 z-0"></div>
        <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
          <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
            <div className="self-start hidden lg:flex flex-col  text-white">
              <img src="" className="mb-3" alt=''/>
              <h1 className="mb-3 font-bold text-5xl">Hi! welcome to npc </h1>
              <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                and publishing industries for previewing layouts and visual mockups</p>
              <p className='mt-5'>Join npc on #social medias:</p>
                 <SocialIcons />
            </div>
          </div>
          <div className="flex justify-center self-center z-10">
            <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
              <div>
                <p className='text-2xl pt-5'>Sign Up here</p>
                <p className='pb-5'>Create your new account so that you explore #App</p>
              </div>
            <form className="grid grid-cols-1 gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="mail@gmail.com"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Enter your password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Username</label>
                  <input
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Your username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Your full name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Role</label>
                  <select
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    value={formData.role}
                    onChange={handleChange}
                    name="role"
                  >
                    <option value=" ">Select role</option>
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                  </select>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                onClick={handleSubmit}
              >
                Create account
              </button>
              <p>Have account? <Link to='/' className='text-blue-500'>Login</Link></p>
            </form>
              
              <div className="pt-5 text-center text-gray-400 text-xs">
                <span>
                  Copyright © 2023-2027
                  <a href="https://github.com/nplcodes/final2024" rel=""  title="NPL Codes" className="text-green hover:text-green-500 ">Npl Codes</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RegisterForm;
