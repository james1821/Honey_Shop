import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

function Customers() {
  const images = [
    '/img/Customers/Customer-1.jpg',
    '/img/Customers/Customer-2.jpg',
    '/img/Customers/Customer-3.jpg',
    '/img/Customers/Customer-4.jpg',
    '/img/Customers/Customer-5.jpg',
    '/img/Customers/Customer-6.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  }

  const closeModal = () => {
    setSelectedImage(null);
  }

  return (
    <div id='Customers' className="container mx-auto p-8 flex flex-col items-center">
      <h1 className="text-[50px] md:text-[100px] text-center font-bold tracking-[-.2rem]">Our Clients</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className={`w-full `}>
            <Fade>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full cursor-pointer"
                onClick={() => openModal(image)} 
              />
            </Fade>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img src={selectedImage} alt="Selected Customer" className="w-[500px]" />
            <button onClick={closeModal} className="text-center bg-pink-500 text-white hover:bg-pink-700 px-4 py-2 rounded mt-4">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Customers;
