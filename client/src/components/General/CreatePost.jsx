import React, { useState } from 'react';
import axios from 'axios';

function CreatePost() {

    const [postData, setPostData] = useState({
        title: '',
        content: '',
        image: null,
      });
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        // Use the spread operator to preserve other properties in the postData object
        setPostData({
          ...postData,
          [name]: type === 'file' ? files[0] : value,
        });
      };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send the form data with the image file
    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);

    try {
      // Send a POST request to your API endpoint to create a post
      const response = await axios.post('http://localhost:8080/api/post', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log('Post created:', response.data);
      // You can add further logic to handle the response, such as displaying a success message or redirecting the user.
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div className='grid grid-cols-2 grid-rows-1 p-10 gap-10'>
    <form onSubmit={handleSubmit}>
      <div className='p-32 pt-10'>
        <div className='flex flex-col gap-2'>
          <label>Post Title</label>
          <input
            type="text"
            value={postData.title}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label>Post Content</label>
          <textarea
            rows="10"
            cols="60"
            value={postData.content}
            onChange={handleChange}
            placeholder='Text ...'
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className=''>
          <div class="flex w-full items-center pt-5">
            <div class="rounded-md border border-gray-100 bg-white p-4 shadow-md">
              <label for="upload" class="flex flex-col items-center gap-2 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 fill-white stroke-indigo-500" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span class="text-gray-600 font-medium">Upload file</span>
              </label>
              <input id="upload" type="file" class="hidden" name='image' accept="image/*" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className='pt-5'>
          <button
          type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-6 rounded-md"
          >
            Post
          </button>
        </div>
      </div>
      </form>
      <div className='bg-gray-100 p-10 '>
        {/* Add your post display logic here */}
      </div>
    </div>
  );
}

export default CreatePost;
