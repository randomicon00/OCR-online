import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  it('renders correctly', () => {
    const { getByRole } = render(<Button name="testButton" text="Test Button"/>);

    const button = getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('displays correct text', () => {
    const { getByText } = render(<Button name="testButton" text="Test Button"/>);

    expect(getByText('Test Button')).toBeInTheDocument();
  });

  it('has correct name attribute', () => {
    const { getByRole } = render(<Button name="testButton" text="Test Button"/>);

    const button = getByRole('button');
    expect(button.getAttribute('name')).toBe('testButton');
  });

  it('has correct style', () => {
    const { getByRole } = render(<Button name="testButton" text="Test Button"/>);

    const button = getByRole('button');
    expect(button.style.backgroundColor).toBe('green');
  });

  it('fires onClick event', () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<Button name="testButton" text="Test Button" onClick={handleClick}/>);

    fireEvent.click(getByRole('button'));

    expect(handleClick).toHaveBeenCalled();
  });
});
