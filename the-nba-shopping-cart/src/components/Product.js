import React, { useContext, useState } from 'react';
import { CartContext } from '../CartContext';
import './Product.css';

const Product = ({ id, title, price }) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === id);
    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { id, title, price, quantity }]);
    }
  };

  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <input
        type="number"
        value={quantity}
        min="1"
        onChange={(e) => setQuantity(Number(e.target.value))}
      />
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
};

export default Product;
