import React from 'react';

function Footer() {
  return (
    <footer className="bg-pink-200 py-4 text-center">
      <p className="text-black">
        &copy; {new Date().getFullYear()}All rights reserved. <a target='_blank' href="https://github.com/james1821"><span>©James</span></a>
      </p>
    </footer>
  );
}

export default Footer;
