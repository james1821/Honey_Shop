import React from 'react';

function Promotional() {
  return (
    <div className="relative h-screen">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src="/img/Video/works.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-white text-4xl font-bold text-center">
        Made with Passion and Dedication, a labor of love that shines through every detail.
        </div>
      </div>
    </div>
  );
}

export default Promotional;
