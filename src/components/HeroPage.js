// HeroPage.js

import React, { useEffect } from 'react';
import './HeroPage.css'; // Import your CSS file for styling
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react'; // Import useState hook
import AgePrompt from './AgePrompt'; // Import the new component
import AdBanner from './AdBanner';

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

        < div className='lower-header'>
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

    </div>
  );
};

export default HeroPage;
