import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardsListings } from './CardsListings';

const mockListings = [
  {
    _id: '1',
    title: { de: 'Elegantes Studio', en: 'Elegant Studio' },
    image: 'https://example.com/image1.jpg',
    sqm: 55,
    beds: 1,
    price: 180000,
  },
];

describe('<CardListings/>', () => {
  afterEach(() => jest.clearAllMocks());

  it('should renders CardsListings', () => {
    render(<CardsListings listings={mockListings} setShouldReFetch={()=>{}} />);
    expect(screen.getByText(/Homes in Berlin/i)).toBeInTheDocument();
    expect(screen.getByText(/More than 1 homes found/i)).toBeInTheDocument();
    expect(screen.getByText(/Reload Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Elegant Studio/i)).toBeInTheDocument();
    expect(screen.getByText(/Price: €1800/i)).toBeInTheDocument();
  });
});
