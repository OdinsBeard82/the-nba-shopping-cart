import React, { useContext } from 'react';
import { CartContext } from '../CartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const handleCheckout = () => {
    // For now, just clear the cart instead of handling checkout
    setCartItems([]);
  };

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <p>Items in Cart: {itemCount}</p>
      <button onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
