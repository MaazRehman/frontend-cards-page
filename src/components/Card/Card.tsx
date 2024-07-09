import React from 'react';
import { Listing } from '../../data/getListings';
import './Card.css';
import { formatPrice } from './utils';

type ListingCardProps  = {
  listing: Listing;
}
const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  return (
    <div className="listing-card">
      <img
        src={listing.image}
        alt={listing.title.en}
        className="listing-image"
      />
      <div className="listing-details">
        <h3>{listing.title.en}</h3>
          <p>Price: €{formatPrice(listing.price)}
              <span className="per-month">per month</span>
          </p>
      </div>
    </div>
  );
};

export default ListingCard;
