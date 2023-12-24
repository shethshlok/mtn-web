// HeroPage.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import './HeroPage.css'; // Import your CSS file for styling
import { FaSearch } from "react-icons/fa";

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
            <div className='lower-header-item'>Shop</div>
            <div className='lower-header-item'>About</div>
            <div className='lower-header-item'>Contact</div>
            <div className='lower-header-item'>FAQ</div>
        </div>
    </div>
  );
};

export default HeroPage;
