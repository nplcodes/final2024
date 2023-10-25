import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function UpdatePost() {
  const { postId } = useParams();

  const [postData, setPostData] = useState({
    title: '',
    content: '',
    image: null,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/post/singlepost/${postId}`)
      .then((response) => {
        const post = response.data[0];

        setPostData({
          title: post.title,
          content: post.content,
          image: post.image,
        });
      })
      .catch((error) => {
        console.error('Error fetching post data:', error);
      });
  }, [postId]);

  const handleTitleChange = (e) => {
    setPostData({
      ...postData,
      title: e.target.value,
    });
  };

  const handleContentChange = (e) => {
    setPostData({
      ...postData,
      content: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setPostData({
      ...postData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('content', postData.content);
    formData.append('image', postData.image);


    try {
       const res =  await axios.put(`http://localhost:8080/post/update/${postId}`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        console.log(res.data)
  
      } catch (error) {
        console.error('Error updating post:', error);
      }

  };
 
  return (
    <div className='grid grid-cols-1 grid-rows-1 p-32 pt-10'>
      <form onSubmit={handleSubmit}>
        <div className='p-32 pt-10'>
          <div className='flex flex-col gap-2'>
            <label>Post Title</label>
            <input
              type='text'
              value={postData.title}
              onChange={handleTitleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label>Post Content</label>
            <textarea
              rows='10'
              value={postData.content}
              onChange={handleContentChange}
              placeholder='Text ...'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <div className=''>
            <div class="flex w-full items-center pt-5">
              <div class="rounded-md border border-gray-100 bg-white p-4 shadow-md">
                <label for="upload" class="flex flex-col items-center gap-2 cursor-pointer">
                  {/* Your file upload input */}
                  <input value={postData.image} id="upload" type="file" name='image' accept="image/*" onChange={handleImageChange} />
                </label>
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <button
              type='submit'
              className='bg-blue-500 hover-bg-blue-600 text-white font-semibold py-1 px-6 rounded-md'
            >
              Update
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UpdatePost;
