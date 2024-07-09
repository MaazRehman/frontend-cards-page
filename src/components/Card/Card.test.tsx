import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { Listing } from '../../data/getListings';

const mockListing: Listing = {
  _id: '1',
  title: { de: 'Elegantes Studio', en: 'Elegant Studio' },
  image: 'https://example.com/image1.jpg',
  sqm: 55,
  beds: 1,
  price: 180000,
};

describe('<Card/>', () => {
  afterEach(() => jest.clearAllMocks());

  it('should render individual Card component with details', () => {
    render(<Card listing={mockListing} />);
    const imgElement = screen.getByRole('img');

    expect(imgElement).toHaveAttribute('src', mockListing.image);
    expect(imgElement).toHaveAttribute('alt', mockListing.title.en);

    expect(screen.getByText(/Elegant Studio/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: €1800/i)).toBeInTheDocument();
  });
});
