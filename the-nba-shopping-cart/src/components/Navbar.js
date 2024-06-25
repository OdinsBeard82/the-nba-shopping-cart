import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext';
import './Navbar.css';

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/shop" className="nav-link">Shop</Link>
      <Link to="/cart" className="nav-link">Cart ({itemCount})</Link>
    </nav>
  );
};

export default Navbar;
