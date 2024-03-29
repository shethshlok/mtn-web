// HeroPage.js

import React, { useEffect } from 'react';
import './HeroPagev1.css'; // Import your CSS file for styling
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
                <div className='cart-item-title'>Borrasca Brut Cava</div>
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
                <div className='cart-item-title'>ABK6 VSOP Cognac</div>
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
            <div className='product-card-title'>Mascota Vineyards, 2018</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$19.99</div>
              <div className='previous-price'>$25.99</div>
            </div>
            <div className='product-card-button'>Add To Cart</div>
          </div>
        </div>

        <div className='product-card'>
          <div className='product-card-image'>
            <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/h9c/h6a/16773747802142.png' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>Borrasca Brut Cava</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$9.99</div>
              <div className='previous-price'>$11.99</div>
            </div>
            <div className='product-card-button'>Add To Cart</div>
          </div>
        </div>

        <div className='product-card'>
          <div className='product-card-image'>
            <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/hba/hcf/10508799049758.png' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>Clase Azul Ultra Tequila</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$1999.99</div>
              <div className='previous-price'>$2100.00</div>
            </div>
            <div className='product-card-button'>Add To Cart</div>
          </div>
        </div>

        <div className='product-card'>
          <div className='product-card-image'>
            <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/h30/hc0/11986426003486.png' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>ABK6 VSOP Cognac</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$35.99</div>
              <div className='previous-price'>$37.99</div>
            </div>
            <div className='product-card-button'>Add To Cart</div>
          </div>
        </div>

        <div className='product-card out-of-stock'>
          <div className='out-of-stock-overlay'>
            <div className='out-of-stock-text'>Out of Stock</div>
          </div>
          <div className='product-card-image'>
            <img src='https://www.totalwine.com/dynamic/250x/media/sys_master/twmmedia/hd9/h55/11605869854750.png' alt='Out of Stock' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>Borgata Chocolate Liqueur</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$19.99</div>
              <div className='previous-price'>$22.99</div>
            </div>
          </div>
          <div className='product-card-info'>
            <div className='restock-date'>Restock on 1/12/2024</div>
          </div>
        </div>

        <div className='product-card'>
          <div className='product-card-image'>
            <img src='https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/hc2/hb3/17509826953246.png' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>Summum Vodka</div>
            <div className='product-card-body'>1.75l</div>
            <div className='product-card-price'>
              <div className='current-price'>$26.99</div>
              <div className='previous-price'>$31.99</div>
            </div>
            <div className='product-card-button'>Add To Cart</div>
          </div>
        </div>

        <div className='product-card'>
          <div className='product-card-image'>
            <img src='https://www.totalwine.com/dynamic/x220,sq/media/sys_master/twmmedia/h0b/h3e/26864432152606.png' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>Woodford Reserve</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$27.99</div>
              <div className='previous-price'>$29.99</div>
            </div>
            <div className='product-card-button'>Add To Cart</div>
          </div>
        </div>

        <div className='product-card'>
          <div className='product-card-image'>
          <div className='premium-badge'>Premium Selection</div>
            <img src='https://www.totalwine.com/dynamic/270x/media/sys_master/twmmedia/ha0/h77/16530667667486.png' />
          </div>
          <div className='product-card-info'>
            <div className='product-card-title'>Angel's Envy</div>
            <div className='product-card-body'>750ml</div>
            <div className='product-card-price'>
              <div className='current-price'>$84.99</div>
              <div className='previous-price'>$87.99</div>
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
