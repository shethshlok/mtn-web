// HeroPage.js

import React, { useEffect } from 'react';
import './HeroPage.css'; // Import your CSS file for styling
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react'; // Import useState hook
import AgePrompt from './AgePrompt'; // Import the new component
import AdBanner from './AdBanner';
import ScrollPopup from './ScrollPopup'; // Adjust the path based on your project structure

const HeroPage = () => {
  
  
  const [showAgeModal, setShowAgeModal] = useState(false);
  const [showSearchContainer, setShowSearchContainer] = useState(false);

  const handleConfirmAge = () => {
    // Add logic to handle age confirmation
    setShowAgeModal(false);
  };

  const handleRejectAge = () => {
    // Add logic to handle age rejection
    setShowAgeModal(false);
  };

  const handleSearchIconClick = () => {
    // Toggle the visibility of the search container
    setShowSearchContainer(!showSearchContainer);
  };
  
  
  return (
    <div className='heroPage'>
      {/* Age Verification Modal */}
      {showAgeModal && (
        <AgePrompt
          onConfirm={handleConfirmAge}
          onReject={handleRejectAge}
        />
      )}
    
        <div className="header">
        <ScrollPopup />

            <div className="search-container">
            {/* <input className='searchBox' type="text" placeholder="Search" /> */}
            {showSearchContainer && (
              <div>
                {/* Add your search box input or any other content here */}
                <input className='searchBox' type="text" placeholder="Search" />
              </div>
            )}
            <FaSearch onClick={handleSearchIconClick} />
            </div>

            <div className="logo-container"></div>
            <div className='cart-container'>
              <div className='cart-icon'></div>
            </div>
        </div>

        <div className='lower-header'>
            <div className='lower-header-item'>
            <div className='down-arrow'>Wine<RiArrowDropDownLine /> </div>
            </div>
            <div className='lower-header-item'>
            <div className='down-arrow'>Spirit<RiArrowDropDownLine /> </div>
            </div>
            <div className='lower-header-item'>
            <div className='down-arrow'>Beer<RiArrowDropDownLine /> </div>
            </div>
            <div className='lower-header-item'>
            <div className='down-arrow'>Offers<RiArrowDropDownLine /> </div>
            </div>
        </div>

        <div className='ad-banner'>
          {/* <AdBanner /> */}
          </div>

        <div className='instructions'>
            <div className='left-text'>
            <div className='banner-text-header'>Place Your Order</div>
            <div className='banner-text-header'>Online</div>
            </div>
            <div className='icons'>
              <div className='mobile-cart-icon'></div>
              <div className='arrow-icon'></div>
              <div className='receiver-icon'></div>
            </div>
            <div className='left-text'>
            <div className='banner-text-header'>Convinient In-Store</div>
            <div className='banner-text-header'>Pickup</div>
            </div>
        </div>

        <div className='product-card'>
            <div className='product-card-image'>
              <img src='https://www.totalwine.com/site/binaries/t1656689719030/cardMedium/content/gallery/module-images/disc-images/wine/wine-disc.png' />
            </div>
            <div className='product-card-info'>
              <div className='product-card-title'>Woodsdford Whisky</div>
              <div className='product-card-body'>750ml</div>
              <div className='product-card-price'>
                <div className='current-price'>$9.99</div>
                <div className='previous-price'>$12.99</div>
              </div>
              <div className='product-card-button'>Add To Cart</div>
            </div>
        </div>
    </div>
  );
};

export default HeroPage;
