import React, { useState } from 'react';
import axios from 'axios';
import { authActions } from '../../redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';


function PasswordComponent() {

   const dispatch = useDispatch()
  const userInfo = useSelector((state) => state.auth.user);
  const userId = userInfo._id;

  const [password, setPassword] = useState('');


  const handleSubmit = async(e) => {
    e.preventDefault();
    
      await axios.put(`http://localhost:8080/auth/user/setting/${userId}/password`, {
        password,
      })
      .then(()=>{
        dispatch(authActions.updatePassword(password));
        console.log(password)
      })
      .catch((error)=>{
        console.log(error);
      })

  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl mb-4 pb-7">Edit Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="password"
            id="currentPassword"
            name="password"
            onChange={(e)=> setPassword (e.target.value)}
            className="border p-2 w-full rounded-md"
            placeholder='Type new password'
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value=''
            className="border p-2 w-full rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
           Edit
        </button>
      </form>
    </div>
  );
}

export default PasswordComponent;
