import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ itemCount }) => {
  return (
    <div className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/" className="nav-link">NBA Store</Link>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/shop" className="nav-link">Shop</Link>
          <Link to="/cart" className="nav-link">Cart ({itemCount})</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

