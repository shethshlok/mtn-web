// ScrollPopup.js

import React, { useState, useEffect } from 'react';

const ScrollPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // You can adjust the scroll threshold as needed
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <div className={`scroll-popup ${isVisible ? 'visible' : ''}`}>
     <div className='banner'>
          <div className='banner-text'>
            <div className='banner-text-header'>Click, Collect &amp; Sip</div>
            <div className='banner-text-body'>Your Spirits At Your Fingertips!</div>
            </div>
          <div className='pickup-button'>
            Place Order Now!
          </div>
        </div>
  </div>;
};

export default ScrollPopup;
