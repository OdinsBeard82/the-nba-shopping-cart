import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';
import { CartContext } from '../CartContext';

const mockContext = {
    cartItems: [
        { id: 1, title: 'Test Product 1', quantity: 2 },
        { id: 2, title: 'Test Product 2', quantity: 1 },
    ],
    setCartItems: jest.fn(),
};

describe('App', () => {
    it('renders Navbar and HomePage', () => {
        render(
            <CartContext.Provider value={mockContext}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Shop')).toBeInTheDocument();
        expect(screen.getByText('Cart (3)')).toBeInTheDocument();
        expect(screen.getByText('Welcome to our Store!')).toBeInTheDocument();
    });

    it('renders ShopPage on navigating to /shop', () => {
        window.history.pushState({}, 'Shop Page', '/shop');

        render(
            <CartContext.Provider value={mockContext}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText('Shop Page')).toBeInTheDocument();
    });

    it('renders ShoppingCart on navigating to /cart', () => {
        window.history.pushState({}, 'Shopping Cart', '/cart');

        render(
            <CartContext.Provider value={mockContext}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </CartContext.Provider>
        );

        expect(screen.getByText('Shopping Cart')).toBeInTheDocument();
        expect(screen.getByText('Items in Cart: 3')).toBeInTheDocument();
    });
});
