import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { CartContext } from '../CartContext';

const mockContext = {
  cartItems: [
    { id: 1, title: 'Test Product 1', quantity: 2 },
    { id: 2, title: 'Test Product 2', quantity: 1 },
  ],
};

describe('Navbar', () => {
  it('renders Navbar with cart item count', () => {
    render(
      <CartContext.Provider value={mockContext}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </CartContext.Provider>
    );

    expect(screen.getByText('Cart (3)')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(
      <CartContext.Provider value={mockContext}>
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      </CartContext.Provider>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Shop')).toBeInTheDocument();
    expect(screen.getByText('Cart (3)')).toBeInTheDocument();
  });
});
