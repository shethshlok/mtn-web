// AgeVerificationModal.js

import React from 'react';
import './AgePrompt.css';
// import { useHistory } from 'react-router-dom';

const AgePrompt = ({ onConfirm, onReject }) => {
  
    const handleLeftClick = () => {
        // Handle left half click, e.g., redirect to page1
        console.log('left');
        onConfirm();
      };
    
      const handleRightClick = () => {
        // Handle right half click, e.g., redirect to page2
        console.log('right');
        // stop the user accessing thw website
        onReject();
        
      };
  
  
    return (
    <div className="modal-overlay">
        <div className='agePrompt' onClick={(e) => e.clientX <= window.innerWidth / 2 ? handleLeftClick() : handleRightClick()} />
    </div>
  );
};

export default AgePrompt;
