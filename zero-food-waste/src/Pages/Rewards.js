import React from 'react';
import backgroundImage from '../images/reward.jpg'; // Adjust the path as necessary
import '../CSS/Rewards.css'; // Make sure the path to your CSS file is correct

const Rewards = ({ points, worth }) => { // Destructure the props correctly
  console.log(points, worth);
  const containerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="rewards-container" style={containerStyles}>
    <div className="rewards-container">
      <div className="points-box">
        <h2>My Points</h2>
        <div className="balance-info">
          <span>My Balance: </span>
          <span className="points">{points} Points</span>
        </div>
        <div className="voucher-value">
          <span>£{worth} </span>
          <span> Worth in voucher</span>
        </div>
        <button className="convert-button">Turn your points into Vouchers</button>
        <a href="/how-it-works" className="info-link">How Reward system work? click here</a>
      </div>
    </div>
    </div>
  );
};

export default Rewards;
