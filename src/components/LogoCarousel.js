// LogoCarousel.js

import React, { useState } from 'react';
import GlenlivetLogo from './Glenlivet_Logo.jpg';
import GreyGooseLogo from './Grey_Goose.png';
import JackDanielsLogo from './jack-daniels.png';
import SKYYLogo from './SKYY_Vodka_Primary_Blue_Lockup_-_Logo.png';

const LogoCarousel = () => {
  const logos = [
    GlenlivetLogo,
    GreyGooseLogo,
    JackDanielsLogo,
    SKYYLogo
    // Add more logo paths as needed
  ];

  const [startIdx, setStartIdx] = useState(0);

  const handleNext = () => {
    setStartIdx((prevIdx) => (prevIdx + 1) % logos.length);
  };

  const handlePrev = () => {
    setStartIdx((prevIdx) => (prevIdx - 1 + logos.length) % logos.length);
  };

  return (
    <div className="logo-carousel">
      <div className="viewport">
        {logos.slice(startIdx, startIdx + 4).map((logo, index) => (
          <img key={index} className="logo" src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
      {/* <div className="arrow left" onClick={handlePrev}>{'<'}</div> */}
      {/* <div className="arrow right" onClick={handleNext}>{'>'}</div> */}
    </div>
  );
};

export default LogoCarousel;