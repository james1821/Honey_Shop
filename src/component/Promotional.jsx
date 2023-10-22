import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

function Promotional() {
  const textStyle = {
    display: 'inline-block',
    background: 'rgba(0, 0, 0, 0.7)',
    padding: '10px', 
  };

  const [ref, inView] = useInView();
  const textRef = useRef(null);

  return (
    <div id='Promotional' className="relative h-screen">
      <video autoPlay loop muted className="absolute inset-0 w-full h-screen object-cover">
        <source src="/img/Video/works.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div ref={ref} className="absolute inset-0 flex items-center justify-center text-center text-[50px] md:text-[100px] text-white">
        {inView ? (
          <TypeAnimation
            ref={textRef}
            sequence={[
              'Made with Passion and Dedication, a labor of love that shines through every detail.',
              1000
            ]}
            wrapper="span"
            speed={40}
            style={textStyle}
            repeat={Infinity}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Promotional;
