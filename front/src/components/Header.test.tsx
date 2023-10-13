import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header'; // Adjust the import according to your file structure
import Nav from './Nav'; // Adjust the import according to your file structure
import '@testing-library/jest-dom/extend-expect';

// TODO: Add explanation for the following code.
jest.mock('./Nav', () => {
  return function DummyNav() {
    return <div data-testid="nav">Nav Component</div>;
  };
});

test('renders Nav component', () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId('nav')).toBeInTheDocument();
});

