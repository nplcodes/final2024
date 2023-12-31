import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateIssue() {
  const { id } = useParams();
  const history = useNavigate();

  const [formData, setFormData] = useState({
    title: '',         
    description: '',   
    category: '',      
    attachment: null, 
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/issue/view/${id}`);
        const { title, description, category } = response.data.issue;

        // Update the formData state with the fetched data
        setFormData({
          title: title || '',             
          description: description || '', 
          category: category || '',       
          attachment: null,    
        });
      } catch (error) {
        console.error('Error fetching issue data:', error);
      }
    };
    fetchData();
  }, [id]);

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
      await axios.put(`http://localhost:8080/issue/edit/${id}`, formData);
      history('/Home/issue-page');
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  };


  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center relative pt-10">
        <div className="flex z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-[60%] border">
            <div>
              <p className="text-2xl pt-5">Update #Issue</p>
              <p className="pb-5">Update issue to be solved by elders</p>
            </div>
            <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Title</label>
                  <input
                    type="text"
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="We want to see you"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Description</label>
                  <textarea
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    placeholder="Enter issue description"
                    rows={5}
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700">Category</label>
                  <select
                    className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="">Select category</option>
                    <option value="Welfare">Welfare</option>
                    <option value="Academic">Academic</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Personal">Personal</option>
                  </select>
                </div>
                <div>
                  <input
                    type="file"
                    name="file"
                    className="border rounded p-2"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover-bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Rise
              </button>
              <p>
                <Link to="/Home/issue-page" className="text-blue-500">Back</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateIssue;
