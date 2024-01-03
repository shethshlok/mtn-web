import React, { useState, useEffect } from 'react';
import ad1 from './be_sure.png';
import ad2 from './black_chivas_dewars_banner.jpg';
import ad3 from './click_collect.jpg';
import ad4 from './elixir_1920x580px (1).jpg';


const adImages = [
  ad1, ad2, ad3, ad4
];

const AdBanner = () => {
    const [currentAdIndex, setCurrentAdIndex] = useState(0);
    const [swipeDirection, setSwipeDirection] = useState(null);
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setSwipeDirection('right');
        setTimeout(() => {
          setCurrentAdIndex((prevIndex) =>
            prevIndex === adImages.length - 1 ? 0 : prevIndex + 1
          );
          setSwipeDirection(null);
        }, 500); // Adjust the delay based on your preference
      }, 3000);
  
      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, []); // Empty dependency array ensures the effect runs only once on mount
  
    const currentAdSrc = adImages[currentAdIndex];
  
    return (
      <div className={`ad-banner ${swipeDirection}`}>
        <img src={currentAdSrc} alt={`Ad ${currentAdIndex + 1}`} />
      </div>
    );
  };
  
  export default AdBanner;