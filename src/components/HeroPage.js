// HeroPage.js

import React, { useEffect } from 'react';
import './HeroPage.css'; // Import your CSS file for styling
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useState } from 'react'; // Import useState hook
import AgePrompt from './AgePrompt'; // Import the new component
import AdBanner from './AdBanner';
import ScrollPopup from './ScrollPopup'; // Adjust the path based on your project structure
import MobileCart from './online-shopping.png';
import Arrow from './timeline.png';
import Receiver from './receiver.png';
import LogoCarousel from './LogoCarousel'; // Adjust the path based on your project structure

const HeroPage = () => {
  
  
  const [showAgeModal, setShowAgeModal] = useState(true);
  const [showSearchContainer, setShowSearchContainer] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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

  const toggleCartDrawer = () => {
    setCartOpen(!cartOpen);
  
    // Add event listener to close cart on outside click when cart is open
    if (!cartOpen) {
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  };
  
  const handleOutsideClick = (e) => {
    const cartContainer = document.querySelector('.cart-container');
  
    // Check if the clicked element is outside the cart div
    if (cartContainer && !cartContainer.contains(e.target)) {
      setCartOpen(false);
      document.removeEventListener('click', handleOutsideClick);
    }
  };
  
  
  return (
    <div className={`heroPage ${cartOpen ? 'cart-open' : ''}`}>
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
            <div className='cart-container' onClick={toggleCartDrawer}>
              <div className='cart-icon'></div>
            </div>
        </div>

        {/* Cart Drawer */}
      <div className={`cart-drawer ${cartOpen ? 'open' : ''}`}>
        {/* Your cart content goes here */}
        <h2>Shopping Cart</h2>
        <ul>
          <li>
            <div className='cart-item'>
              <div className='cart-item-image'>
                <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/h9c/h6a/16773747802142.png' />
              </div>
              <div className='cart-item-info'>
                <div className='cart-item-title'>Woodsdford Whisky</div>
                <div className='cart-item-body'>750ml</div>
                <div className='cart-item-price'>$9.99</div>
                <div className='cart-item-quantity'>
          <button className='quantity-btn'>-</button>
          <span className='quantity-text'>1</span>
          <button className='quantity-btn'>+</button>
        </div>
              </div>
            </div>
          </li>
          <li>
            <div className='cart-item'>
              <div className='cart-item-image'>
                <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/h30/hc0/11986426003486.png' />
              </div>
              <div className='cart-item-info'>
                <div className='cart-item-title'>Woodsdford Whisky</div>
                <div className='cart-item-body'>750ml</div>
                <div className='cart-item-price'>$9.99</div>
                <div className='cart-item-quantity'>
          <button className='quantity-btn'>-</button>
          <span className='quantity-text'>1</span>
          <button className='quantity-btn'>+</button>
        </div>
              </div>
            </div>
          </li>   
          </ul>

          <div className='cart-footer'>
            <div className='cart-total'>
              <div className='cart-total-text'>Total</div>
              <div className='cart-total-price'>$19.98</div>
            </div>
            <div className='product-card-button'>Order Now</div>
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
          <AdBanner />
          </div>

        <div className='instructions'>
            <div className='left-text'>
            <div className='instructions-text'>Place Your Order</div>
            <div className='instructions-text'>Online</div>
            </div>
            <div className='icons'>
                <img src={MobileCart} className='mobile-cart-icon' />
                <img src={Arrow} className='arrow-icon' />
                <img src={Receiver} className='receiver-icon' />
            </div>
            <div className='left-text'>
            <div className='instructions-text'>Convinient In-Store</div>
            <div className='instructions-text'>Pickup</div>
            </div>
        </div>

        <div className='header-banner'>
          <span className='header-line'></span>
          <div className='header-text'>BESTSELLERS</div>
          <div className='header-line'></div>
        </div>

        <div className='bottles'>

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

        <div className='product-card'>
            <div className='product-card-image'>
              <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/h9c/h6a/16773747802142.png' />
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

        <div className='product-card'>
            <div className='product-card-image'>
              <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/h30/hc0/11986426003486.png' />
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

        <div className='header-banner'>
          <span className='header-line'></span>
          <div className='header-text'>BRANDS</div>
          <div className='header-line'></div>
        </div>


        <LogoCarousel />


    </div>
  );
};

export default HeroPage;
