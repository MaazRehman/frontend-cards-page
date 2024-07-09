import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FallbackComponent from './FallbackComponent';

describe('<FallbackComponent/>', () => {
    it('should render error message and retry button', () => {
        const setShouldReFetch = jest.fn();
        render(<FallbackComponent setShouldReFetch={setShouldReFetch} />);

        expect(screen.getByText("Something went wrong")).toBeInTheDocument();
        expect(screen.getByText("Please retry by clicking the button below")).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Try Again/i })).toBeInTheDocument();
    });

    it('calls setShouldReFetch on retry button click', () => {
        const setShouldReFetch = jest.fn();
        render(<FallbackComponent setShouldReFetch={setShouldReFetch} />);

        const retryButton = screen.getByRole('button', { name: /Try Again/i });
        fireEvent.click(retryButton);

        expect(setShouldReFetch).toHaveBeenCalled();
    });

    it('toggles setShouldReFetch value on retry button click', () => {
        const setShouldReFetch = jest.fn((value: unknown) => !value);
        render(<FallbackComponent setShouldReFetch={setShouldReFetch} />);

        const retryButton = screen.getByRole('button', { name: /Try Again/i });
        fireEvent.click(retryButton);

        expect(setShouldReFetch).toHaveBeenCalled();
    });
});
