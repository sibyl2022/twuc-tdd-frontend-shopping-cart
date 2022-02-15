import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import App from '../src/App';

test('App', () => {
    const { getByText } = render(<App />);
    expect(getByText('Hello React')).toBeInTheDocument();
});
