// HeroPage.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroPage.css'; // Import your CSS file for styling
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react'; // Import useState hook
import AgePrompt from './AgePrompt'; // Import the new component

const HeroPage = () => {
  
  
  const [showAgeModal, setShowAgeModal] = useState(true);

  const handleConfirmAge = () => {
    // Add logic to handle age confirmation
    setShowAgeModal(false);
  };

  const handleRejectAge = () => {
    // Add logic to handle age rejection
    setShowAgeModal(false);
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
                <FaSearch />
            </div>

            <div className="logo-container"></div>
            <div className='cart-container'>
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
