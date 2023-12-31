import React, { useState, useEffect } from 'react';
const adImages = [
  './be_sure.jpg',
  './black_chivas_dewars_banner.jpg',
  './click_collect.jpg',
  './elixir_1920x580px (1).jpg',
];

const AdBanner = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current ad index every 3 seconds
      setCurrentAdIndex((prevIndex) =>
        prevIndex === adImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <img src={adImages[currentAdIndex]} alt={`Ad ${currentAdIndex + 1}`} />
    </div>
  );
};

export default AdBanner;
