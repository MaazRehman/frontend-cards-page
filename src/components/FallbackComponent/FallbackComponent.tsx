import React from 'react';
import * as Sentry from '@sentry/react';


type FallbackComponentProps = {
    setShouldReFetch: (val: any) => void;
};

const FallbackComponent = ({
                               setShouldReFetch
}: FallbackComponentProps) => {
  const onRetry = () => {
      Sentry.captureMessage('User is trying to re-fetch the listings', {
          level: 'error',
          tags: {
              action: 're-fetch',
              component: 'FallbackComponent',
          },
      });
      setShouldReFetch((value: unknown)  => !value)
  };

  return (
    <div className="error-container">
      <h2>Something went wrong</h2>
      <p>Please retry by clicking the button below</p>
      <button className="retry-button" onClick={onRetry}>
        Try Again
      </button>
    </div>
  );
};

export default FallbackComponent;
