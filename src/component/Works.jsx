import React from 'react';

function Works() {
  const images = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
 
  ];

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">MY WORKS</h1>
      <div className="grid md:grid-cols-3 grid-cols-1  ">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="w-full" />
        ))}
      </div>
    </div>
  );
}

export default Works;
