import React, { useState } from "react";

const EditStudentInfo = () => {
  const [formData, setFormData] = useState({
    name: "",
    sex: "male",
    age: "",
    telephone: "",
    email: "",
    faculty: "engineering",
    level: "undergraduate",
    studentClass: "classA",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the server
    console.log("Form submitted with data:", formData);
  };

  return (
    <div className="container mx-auto mt-8 px-32 py-2">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Update Student Info</h2>
      <form onSubmit={handleSubmit} className="border p-24 grid grid-cols-2 gap-4">
        <div className="mb-4">
          <input
            type="text"
            id="name"
            placeholder="Enter name"
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
            placeholder="Enter surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="age"
            placeholder="Enter age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="telephone"
            placeholder="Enter telephone"
            name="telephone"
            value={formData.telephone}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <select
            id="faculty"
            name="faculty"
            placeholder="Select faculty"
            value={formData.faculty}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          >
            <option value="engineering">Engineering</option>
            <option value="science">Science</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mb-4">
          <select
            id="level"
            name="level"
            placeholder="Select level"
            value={formData.level}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          >
            <option value="Level 1">Level 1</option>
            <option value="Level 2">Level 2</option>
            <option value="Level 3">Level 3</option>
            <option value="Level 4">Level 4</option>
          </select>
        </div>

        <div className="mb-4">
          <select
            id="class"
            name="studentClass"
            placeholder="Select class"
            value={formData.studentClass}
            onChange={handleChange}
            className="mt-1 p-3 bg-gray-100 border-none rounded-md w-full"
          >
            <option value="classA">Class A</option>
            <option value="classB">Class B</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="mt-4 col-span-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudentInfo;
