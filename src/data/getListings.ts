import listingsData from './listings.json';

// @Todo if the file grows we can extract type into a separate file
type Title = {
  de: string;
  en: string;
};

export type Listing = {
  _id: string;
  title: Title;
  image: string;
  sqm: number;
  beds: number;
  price: number;
};

export type ListingsData = {
  listings: Listing[];
};

/**
 * Mocks the effect of real api by sending response after 1000 ms
 * Returns listing data to be displayed on the page
 */
const getListings = (): Promise<Listing[]> =>
  new Promise((resolve) =>
    setTimeout(() => resolve((listingsData as ListingsData).listings), 1000)
  );

export default getListings;
