// HeroPage.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroPage.css'; // Import your CSS file for styling
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const HeroPage = () => {
  return (
    <div className='heroPage'>
    
        <div className="header">

            <div className="logo-container"></div>

            <div className="search-container">
            {/* <input className='searchBox' type="text" placeholder="Search" /> */}
                <FaSearch />
            </div>
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
            <div className='down-arrow'>Pick up<RiArrowDropDownLine /> </div>
            </div>
        </div>
    </div>
  );
};

export default HeroPage;
