import React, { useState } from 'react';

function PasswordComponent() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
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
    // Add logic to handle password update (e.g., send the data to the server)
    console.log('Password update submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl mb-4 pb-7">Edit Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input 
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            placeholder='Current Password'
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            className="border p-2 w-full rounded-md"
            placeholder='New Password'
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="confirmNewPassword"
            name="confirmNewPassword"
            value={formData.confirmNewPassword}
            onChange={handleChange}
            className="border p-2 w-full"
            placeholder='Confirm New Password'
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
