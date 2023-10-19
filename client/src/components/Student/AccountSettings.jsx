import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../redux/auth/authSlice';

  
function AccountSettings() {
    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.auth.user);
    const userId = userInfo._id;
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      username: '',
      faculty: '',
      role: '',
      position: '',
      level: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(`http://localhost:8080/auth/${userId}`);
            setFormData({
              fullName: response.data.fullName || '',
              email: response.data.email || '',
              username: response.data.username || '',
              level: response.data.level || '',
              role: response.data.role || '',
              faculty: response.data.faculty || '',
              position: response.data.position || ''
            });

          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
        fetchUserData();
      }, [userId]); 

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
  
      const handleUpdate = async (e) => {
        e.preventDefault()

        try {
            await axios.put(`http://localhost:8080/auth/users/${userId}`, formData)
            dispatch(authActions.updateAdditionalUserInfo(formData))
            console.log(formData)
          } catch (error) {
            console.error('Error updating user:', error);
          }
      };

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
                        <button type="file" className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-3 mt-3 rounded-sm w-full" > Edit Profile
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-no-repeat bg-cover bg-center relative">
                <div className="flex z-10">
                <div className="pb-12 pl-12 pb-r bg-white mx-auto rounded-2xl w-100 ">
                    <div>
                    <p className='text-2xl pt-5 pb-10 font-bold'>Provide More info ..... </p>
                    </div>
                    <form className="grid grid-cols-1 gap-4" onSubmit={handleUpdate}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                        <label className="text-sm font-medium text-gray-700">Full names</label>
                        <input
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Muneza Ben"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Faculty</label>
                        <select
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="faculty"
                            onChange={handleChange}
                        >
                            <option value={formData.faculty}>{formData.faculty}</option>
                            <option value="Law">Law</option>
                            <option value="Ict">Ict</option>
                            <option value="Languages">Languages</option>
                            <option value="Pps">Pps</option>

                        </select>
                        </div>
                        <div>
                        <input 
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="@lamar250"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        </div>
                        <div>
                        <input                    
                            type="email"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="lamar250@yahoo.com"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Position</label>
                        <select
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="position"
                            onChange={handleChange}
                        >
                            <option value={formData.position}>{formData.position}</option>
                            <option value="Io">Io</option>
                            <option value="Ci">Ci</option>
                            <option value="Academic">Academic</option>
                            <option value="Student">Student</option>
                            <option value="Logistics">Logistics</option>
                        </select>
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">  Role</label>
                        <input
                            type="text"
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            placeholder="Comfirm  password @123"
                            name="reserved"
                            value={formData.role}
                            onChange={handleChange}
                        />
                        </div>
                        <div>
                        <label className="text-sm font-medium text-gray-700">Level</label>
                        <select
                            className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                            name="level"
                            onChange={handleChange}
                        >
                            <option value={formData.level}>{formData.level}</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
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