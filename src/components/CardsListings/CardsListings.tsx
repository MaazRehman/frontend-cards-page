import React from 'react';
import {Listing} from '../../data/getListings';
import Cards from '../Card/Card';
import withLoaderAndErrorHandling from './withLoaderAndErrorHandling';

type CardsListingsProps = {
    listings : Listing[];
    setShouldReFetch : (arg : any) => void
}

export const CardsListings: React.FC<CardsListingsProps> = ({ listings, setShouldReFetch }) => {
    const handleRefetch = ()=> {
        setShouldReFetch((value: unknown)  => !value)
    }

  return (
      <>
        <div className="listings-result">
        <h1>Homes in Berlin</h1>
        {listings?.length ? <p>More than {listings.length} homes found</p> : ''}
          <button onClick={handleRefetch}>Reload results</button>
          </div>
        <div className="listings-container">
          {listings.map((listing) => (
            <Cards key={listing._id} listing={listing} />
          ))}
        </div>
      </>
  );
};

export default withLoaderAndErrorHandling(CardsListings);