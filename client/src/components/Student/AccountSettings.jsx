import React from 'react'
import { Link } from 'react-router-dom'

function AccountSettings() {
  return (
    <div className='flex gap-3 p-12'>
         <div className="max-w-[300px] bg-white rounded-lg p-12 flex flex-col justify-center items-center shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="mb-8">
                    <img className="object-center object-cover rounded-md h-36 w-36" src="https://police.gov.rw/fileadmin/user_upload/gumira.jpg" alt="qw" />
                </div>
                <div className="text-center">
                    <p className="text-xl text-gray-700 font-bold mb-2">Lucy Carter</p>
                    <p className="text-base text-gray-400 font-normal">Academic Officer</p>
                    <div className='add '>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 mt-3 rounded-sm w-full" > Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat bg-cover bg-center relative">
                <div className="flex z-10">
                <div className="pb-12 pl-12 pb-r bg-white mx-auto rounded-2xl w-100 ">
                    <div>
                    <p className='text-2xl pt-5 pb-10 font-bold'>Edit Profile</p>
                    </div>
                    <form className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="text-sm font-medium text-gray-700">Full names</label>
                        <input
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Muneza Ben"
                            name="title"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Faculty</label>
                        <select
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="role"
                        >
                            <option value=" ">Select Fuculty</option>
                            <option value="Low">Law</option>
                            <option value="High">Ict</option>
                            <option value="Urgency">Languages</option>
                            <option value="Urgency">Pps</option>


                        </select>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Username</label>
                        <input
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="@lamar250"
                            name="username"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Your password @123"
                            name="fullName"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Comfirm Password</label>
                        <input
                            type="password"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Comfirm  password @123"
                            name="fullName"
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Class</label>
                        <select
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="role"
                        >
                            <option value=" ">Select Class</option>
                            <option value="student">Law 1</option>
                            <option value="student">Law 2</option>

                            <option value="student">Ict 1</option>
                            <option value="student">Ict 2</option>

                            <option value="staff">Pps 1</option>
                        </select>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">About</label>
                        <textarea
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Tell us about your self"
                            name="about"
                        ></textarea>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Role in class</label>
                        <select
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="category"
                        >
                            <option value="">Select Role</option>
                            <option value="Welfare">Cep</option>
                            <option value="Academic">Pltn </option>
                            <option value="Personal">Oc</option>
                            <option value="Personal">Cc</option>

                        </select>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 focus:outline-none focus:shadow-outline max-w-[100px]"
                    >
                        Edit
                    </button>
                    <p>
                        <Link to='/Home/manage-issue' className='text-blue-500'>Back</Link>
                    </p>
                    </form>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AccountSettings