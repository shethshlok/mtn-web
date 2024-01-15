// LogoCarousel.js

import React, { useState, useEffect } from 'react';
import GlenlivetLogo from './Glenlivet_Logo.jpg';
import GreyGooseLogo from './Grey_Goose.png';
import JackDanielsLogo from './jack-daniels.png';
import SKYYLogo from './SKYY_Vodka_Primary_Blue_Lockup_-_Logo.png';
import Corona from './corona.png';
import Guinness from './Guinness.png';
import Heineken from './Heineken.png';
import Budweiser from './Budweiser.png';
import BudLight from './BudLight.png';
import CoorsLight from './CoorsLight.png';
import Titos from './Titos.png';

const LogoCarousel = () => {
  const logos = [
    GlenlivetLogo,
    GreyGooseLogo,
    JackDanielsLogo,
    SKYYLogo,
    Corona,
    Guinness,
    Heineken,
    Budweiser,
    BudLight,
    CoorsLight,
    Titos
    
    // Add more logo paths as needed
  ];

  const [startIdx, setStartIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setStartIdx((prevIdx) => {
        const nextIdx = (prevIdx + 1) % logos.length;
        return nextIdx <= logos.length - 8 ? nextIdx : 0; // Reset animation when reaching last 4 logos
      });
    }, 1000); // Adjust the interval duration in milliseconds (e.g., 3000 for 3 seconds)

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [logos.length]);

  return (
    <div className="logo-carousel">
      <div className="viewport" style={{ transform: `translateX(-${startIdx * (100 / 8)}%)` }}>
        {logos.map((logo, index) => (
          <img key={index} className="logo" src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;