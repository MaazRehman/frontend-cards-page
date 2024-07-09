import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Header from './Header';

jest.mock('./Header.css', () => ({}));

const simulateScroll = (scrollY: number) => {
    window.pageYOffset = scrollY;
    window.dispatchEvent(new Event('scroll'));
};

describe('<Header/>', () => {
    beforeEach(() => {
        render(<Header />);
    });

    afterEach(()=> jest.clearAllMocks())

    it('renders the logo and brand name', () => {
        const logo = screen.getByAltText('Wunderflats Logo');
        const brandName = screen.getByText('WUNDERFLATS');
        expect(logo).toBeInTheDocument();
        expect(brandName).toBeInTheDocument();
    });

    it('is visible on initial load', () => {
        const header = screen.getByRole('banner');
        expect(header).toHaveClass('visible');
    });

    it('hides when scrolling down and shows when scrolling up', async () => {
        const header = screen.getByRole('banner');
        // Scroll down
        simulateScroll(100);
        await waitFor(() => expect(header).toHaveClass('hidden'));

        // Scroll up
        simulateScroll(50);
        await waitFor(() => expect(header).toHaveClass('visible'));
    });

});
