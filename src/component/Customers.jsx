import React from 'react';

function Customers() {
  const images = [
    '/img/Customers/Customer-1.jpg',
    '/img/Customers/Customer-2.jpg',
    '/img/Customers/Customer-3.jpg',
    '/img/Customers/Customer-4.jpg',
    '/img/Customers/Customer-5.jpg',
    '/img/Customers/Customer-6.jpg',
  ];

  return (
    <div id='Customers' className="container mx-auto p-8 flex flex-col items-center ">
      <h1 className="text-[50px] md:text-[100px] text-center font-bold tracking-[-.2rem]">Our Happy Customers</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`w-full md:w-${Math.floor(Math.random() * 3) + 1}/6`}>
            <img src={image} alt={`Image ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Customers;
