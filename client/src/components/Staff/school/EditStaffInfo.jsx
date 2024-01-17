import React, { useState } from "react";

const EditStaffInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    role: "teacher",
    position: "lecturer",
    telephone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="container mx-auto mt-8 px-32 py-2">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Update Staff Info</h2>
      <form onSubmit={handleSubmit} className="border p-24 grid grid-cols-2 gap-2">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            id="surname"
            placeholder="Surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <select
            id="role"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          >
            <option value="teacher">Teacher</option>
            <option value="staff">Staff</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <select
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          >
            <option value="lecturer">Lecturer</option>
            <option value="assistant">Assistant</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="telephone"
            placeholder="Telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
            autoSave="none"
          />
        </div>

        <div className="mt-4 col-span-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md border-none hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStaffInfo;
