import React from 'react';

function Works() {
  const images = [
    '/img/Showcase/flower-2.jpg',
    '/img/Showcase/flower-3.jpg',
    '/img/Showcase/flower-4.jpg',
    '/img/Showcase/flower-5.jpg',
    '/img/Showcase/flower-6.jpg',
    '/img/Showcase/flower-7.jpg',
  ];

  return (
    <div className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-[70px] font-bold mb-4">WORKS</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`w-full md:w-${Math.floor(Math.random() * 3) + 1}/6`}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
