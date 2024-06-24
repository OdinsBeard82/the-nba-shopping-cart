import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to our Store!</h1>
      <p className="home-description">
        Explore our wide range of products and find what you need.
      </p>
      <div className="home-images">
        <img src="/images/Booker_2_Giphy.webp" alt="NBA Store Image 1" className="home-image" />
        <img src="/images/Kyrie_giphy.webp" alt="NBA Store Image 2" className="home-image" />
        <img src="/images/Steph.gif" alt="NBA Store Image 3" className="home-image" />
      </div>
    </div>
  );
};

export default HomePage;