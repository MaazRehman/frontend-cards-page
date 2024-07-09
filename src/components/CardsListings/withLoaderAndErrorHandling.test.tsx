import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import withLoaderAndErrorHandling from './withLoaderAndErrorHandling';
import getListings, { Listing } from '../../data/getListings';

jest.mock('../../data/getListings');
jest.mock('../Loader/Loader', () => () => <div>Loading...</div>);
jest.mock('../FallbackComponent/FallbackComponent', () => ({ setShouldReFetch }: { setShouldReFetch: (arg: boolean) => void }) => <div>Error! <button onClick={() => setShouldReFetch(true)}>Retry</button></div>);

const MockComponent: React.FC<{ listings: Listing[], setShouldReFetch: (arg: boolean) => void }> = ({ listings }) => (
    <div>
        {listings.map((listing) => (
            <div key={listing._id}>{listing.title.en}</div>
        ))}
    </div>
);

const WrappedComponent = withLoaderAndErrorHandling(MockComponent);

describe('withLoaderAndErrorHandling HOC', () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should display loader initially', () => {
        (getListings as jest.Mock).mockReturnValue(new Promise(() => {}));
        render(<WrappedComponent />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('should display error and fallback component on fetch failure', async () => {
        (getListings as jest.Mock).mockRejectedValue(new Error('Failed to fetch'));
        render(<WrappedComponent />);
        await waitFor(() => expect(screen.getByText('Error!')).toBeInTheDocument());
        expect(screen.getByText('Retry')).toBeInTheDocument()
    });

    it('should display listings on successful fetch', async () => {
        const listings: Listing[] = [
            { _id: '1', title: {en : 'Listing 1', de: ''}, image: '', beds :2, price:10000, sqm: 55 },
            { _id: '2', title: {en : 'Listing 2', de: ''}, image: '', beds :2, price: 12000, sqm: 50 },
        ];
        (getListings as jest.Mock).mockResolvedValue(listings);
        render(<WrappedComponent />);
        await waitFor(() => {
            expect(screen.getByText('Listing 1')).toBeInTheDocument();
            expect(screen.getByText('Listing 2')).toBeInTheDocument();
        });
    });
});
