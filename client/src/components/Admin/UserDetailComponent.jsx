import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../../redux/auth/authSlice';
import ModalUpdate from './popup/ModalUpdate';


function UserDetailComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalOpen(false);
  };


  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.user);
  const userId = userInfo._id;

  const [errors, setErrors] = useState(null);
  const [preData, setPreData] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    username: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/auth/${userId}`);
        setPreData(response.data);
        setFormData({
          fullName: response.data.fullName || '',
          email: response.data.email || '',
          username: response.data.username || '',
        });
      } catch (error) {
        setErrors(error)
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/auth/user/setting/${userId}`, formData);
      dispatch(authActions.userInfoUpdate(formData));
      setIsModalOpen(true);  // Open the modal upon successful update
    } catch (error) {
      setErrors(error);
      console.error('Error updating user:', error);
    }

    console.log('Form submitted:', formData);
  };
  console.log('Form errors:', errors);
  console.log('Form predata:', preData);


  return (
    <div className="max-w-md mt-1 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl mb-4 pb-7">Edit User Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            placeholder='Full Name'

          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            placeholder='your Email'
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="phoneNumber"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            placeholder='Username'    
            />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Edit
        </button>
        <ModalUpdate show={isModalOpen} onClose={handleModalClose} />

      </form>
    </div>
  );
}

export default UserDetailComponent;
