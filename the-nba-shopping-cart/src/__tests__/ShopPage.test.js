import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import ShopPage from '../components/ShopPage';
import { CartContext } from '../CartContext';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);

const mockProducts = [
    {
        id: 1,
        title: 'Test Product 1',
        price: 10,
        image: 'https://via.placeholder.com/150',
    },
    {
        id: 2,
        title: 'Test Product 2',
        price: 20,
        image: 'https://via.placeholder.com/150',
    },
];

describe('ShopPage', () => {
    const mockSetCartItems = jest.fn();

    beforeEach(() => {
        mock.onGet('https://fakestoreapi.com/products').reply(200, mockProducts);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('fetches and displays products', async () => {
        render(
            <CartContext.Provider value={{ cartItems: [], setCartItems: mockSetCartItems }}>
                <ShopPage />
            </CartContext.Provider>
        );

        expect(await screen.findByText('Test Product 1')).toBeInTheDocument();
        expect(screen.getByText('Price: £10')).toBeInTheDocument();
        expect(screen.getByText('Test Product 2')).toBeInTheDocument();
        expect(screen.getByText('Price: £20')).toBeInTheDocument();
    });

    it('adds product to cart when "Add to Cart" button is clicked', async () => {
        render(
            <CartContext.Provider value={{ cartItems: [], setCartItems: mockSetCartItems }}>
                <ShopPage />
            </CartContext.Provider>
        );

        const addButton1 = await screen.findByText('Add to Cart');
        fireEvent.click(addButton1);

        expect(mockSetCartItems).toHaveBeenCalledWith([{ ...mockProducts[0], quantity: 1 }]);
    });
});
