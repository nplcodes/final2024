import React, { useState } from 'react';

function ImageComponent() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // Add logic to handle image upload (e.g., update state with the image)
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle image submission (e.g., send the image to the server)
    console.log('Image submitted:', image);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h2 className="text-2xl mb-4">Update Profile Image</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">Select Image</label>
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={handleImageChange}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Image
        </button>
      </form>
    </div>
  );
}

export default ImageComponent;
