import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu'; // Assuming the component file is named Menu.js

describe('Menu component', () => {
  it('renders without crashing', () => {
    render(<Menu />);
  });

  it('displays the menu section', () => {
    render(<Menu />);
    const menuSectionElement = screen.getByText('Menu section');
    expect(menuSectionElement).toBeInTheDocument();
  });

  it('contains an unordered list', () => {
    render(<Menu />);
    const unorderedListElement = screen.getByRole('list');
    expect(unorderedListElement).toBeInTheDocument();
  });

  it('contains a list item with the text "Menu section"', () => {
    render(<Menu />);
    const listItemElement = screen.getByText('Menu section');
    expect(listItemElement).toBeInTheDocument();
  });

  // Add more tests if needed based on the functionality of the Menu component
});
