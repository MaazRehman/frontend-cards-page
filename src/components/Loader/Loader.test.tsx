import React from 'react';
import { render, screen } from '@testing-library/react';
import Loader from './Loader';

jest.mock('./Loader.css', () => ({}));

describe('<Loader/>', () => {
    it('renders the loading message', () => {
        render(<Loader />);

        const loadingMessage = screen.getByText(/Loading homes in Berlin.../i);
        expect(loadingMessage).toBeInTheDocument();
        expect(loadingMessage).toHaveClass('loader');
    });
});
