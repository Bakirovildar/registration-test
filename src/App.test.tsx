import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders register title', () => {
  render(<App />);
  const title = screen.getByText(/Регистрация/i);
  expect(title).toBeInTheDocument();
});