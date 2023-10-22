import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Promotional() {
  const textStyle = {
    display: 'inline-block',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '10px',
  };

  return (
    <div id='Promotional' className="relative h-screen">
      <video autoPlay loop muted className="absolute inset-0 w-full h-screen object-cover">
        <source src="/img/Video/works.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center text-center text-[50px] md:text-[100px] text-white">
        <Fade >
          <span style={textStyle}>
            Made with Passion and Dedication, a labor of love that shines through every detail.
          </span>
        </Fade>
      </div>
    </div>
  );
}

export default Promotional;
