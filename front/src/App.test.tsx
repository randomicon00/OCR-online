import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ocr online text', () => {
  render(<App />);
  const titleElement = screen.getByText(/ocr online/i);
  expect(titleElement).toBeInTheDocument();
});
