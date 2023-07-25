import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon Component', () => {
  it('renders with given iconUrl', () => {
    const { getByTestId } = render(<Icon iconUrl="test-url" />);
    const img = getByTestId('icon');
    expect(img).toHaveAttribute('src', 'test-url');
  });
});

