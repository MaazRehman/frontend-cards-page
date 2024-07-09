import React, { useEffect, useState } from 'react';
import FallbackComponent from '../FallbackComponent/FallbackComponent';
import getListings, { Listing } from '../../data/getListings';
import Loader from '../Loader/Loader';

type WithLoaderAndErrorHandlingProps = {
  listings: Listing[];
  setShouldReFetch: (arg: boolean) => void
};

/**
 * This HOC component has been created with separation of concern in mind .
 * Also, the logic can be reused by introducing a little bit of abstraction in this container
 * @param Component
 */
const withLoaderAndErrorHandling = (Component: React.ComponentType<WithLoaderAndErrorHandlingProps>) => {
  return () => {
    const [isLoading, setIsLoading] = useState(true);
    const [listings, setListings] = useState<Listing[]>([]);
    const [isError, setIsError] = useState(false);
    const [shouldReFetch, setShouldReFetch] = useState(false);

    useEffect(() => {
      setIsLoading(true);

      getListings()
        .then((listings) => setListings(listings))
        .catch(() => setIsError(true))
        .finally(() => {
          setIsLoading(false);
        });
    }, [shouldReFetch]);

    if (isLoading) {
      return <Loader />;
    }

    if (isError) {
      return (
        <FallbackComponent
            setShouldReFetch={setShouldReFetch}
        />
      );
    }

    return <Component
        listings={listings}
        setShouldReFetch={setShouldReFetch}
    />;
  };
};

export default withLoaderAndErrorHandling;
