import React, { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`flex md:items-center md:justify-between p-6  bg-transparent rounded-md z-20 sm:sticky ${
        isOpen ? 'lg:w-full' : 'sm:w-[60px] lg:w-full'
      }   ${
        isOpen ? 'justify-end' : '' 
      }`}
    >
      <div className="block md:hidden">                                       
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex self-end rounded text-black-500"
        >
          <svg
            className={`w-full fill-current h-3  ${isOpen ? 'hidden' : 'block'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
          <svg
            className={`fill-current h-3 w-3 ${isOpen ? 'block' : 'hidden'}`}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
          </svg>
        </button>
      </div>
      <div
        className={`md:w-full md:h-2 md:flex md:items-center md:text-center ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-xl md:flex-grow md:space-x-[5rem]">
          <a
            href="#Home"
            onClick={handleLinkClick}
            className="block mt-4 md:inline-block md:mt-0 text-black hover:text-pink-500 mr-4"
          >
            Home
          </a>

          <a
            href="#Products"
            onClick={handleLinkClick}
            className="block mt-4 md:inline-block md:mt-0 text-black hover:text-pink-500 mr-4"
          >
            Products
          </a>
          <a
            href="#Background"
            onClick={handleLinkClick}
            className="block mt-4 md:inline-block md:mt-0 text-black hover:text-pink-500 mr-4"
          >
            Background
          </a>
          <a
            href="#Works"
            onClick={handleLinkClick}
            className="block mt-4 md:inline-block md:mt-0 text-black hover:text-pink-500 mr-4"
          >
            Works
          </a>
          <a
            href="#"
            onClick={handleLinkClick}
            className="block mt-4 md:inline-block md:mt-0 text-black hover:text-pink-500 mr-4"
          >
            Contacts
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
