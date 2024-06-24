import React from 'react';

const Product = ({ title, price, quantity, onAddToCart }) => {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <input type="number" value={quantity} onChange={(e) => onAddToCart(e.target.value)} />
      <button onClick={() => onAddToCart(quantity + 1)}>+</button>
      <button onClick={() => onAddToCart(quantity - 1)}>-</button>
      <button onClick={() => onAddToCart(quantity)}>Add To Cart</button>
    </div>
  );
};

export default Product;
