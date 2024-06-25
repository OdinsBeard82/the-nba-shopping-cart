import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import ShoppingCart from './components/ShoppingCart';
import Navbar from './components/Navbar';
import { CartProvider, CartContext } from './CartContext';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
