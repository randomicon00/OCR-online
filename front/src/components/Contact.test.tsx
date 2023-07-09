import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './Contact';

describe('Contact Form', () => {
  test('renders contact form', () => {
    render(<Contact />);
    const form = screen.getByTestId('contact-form');
    expect(form).toBeInTheDocument();
  });

  test('updates on input', () => {
    render(<Contact />);

    const inputName = screen.getByLabelText(/Name:/i);
    userEvent.type(inputName, 'John Doe');
    expect(inputName).toHaveValue('John Doe');

    const inputEmail = screen.getByLabelText(/Email:/i);
    userEvent.type(inputEmail, 'john@example.com');
    expect(inputEmail).toHaveValue('john@example.com');

    const inputSubject = screen.getByLabelText(/Subject:/i);
    userEvent.type(inputSubject, 'Hello');
    expect(inputSubject).toHaveValue('Hello');

    const textareaMessage = screen.getByLabelText(/Message:/i);
    userEvent.type(textareaMessage, 'Test message');
    expect(textareaMessage).toHaveValue('Test message');
  });

  test('submits the form', () => {
    const handleSubmit = jest.fn();
    render(<Contact onSubmit={handleSubmit} />);
    
    const button = screen.getByRole('button', { name: /submit/i });
    userEvent.click(button);

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
