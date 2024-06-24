import React from 'react';

const ShoppingCart = ({ itemCount }) => {
  return (
    <div>
      <h1>Shopping Cart</h1>
      <p>Items in Cart: {itemCount}</p>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;
