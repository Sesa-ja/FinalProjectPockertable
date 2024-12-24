import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Sidebar and GameBoard components', () => {
  render(<App />);
  expect(screen.getByText(/Actions/i)).toBeInTheDocument(); // Sidebar check
  expect(screen.getByText(/Your Cards:/i)).toBeInTheDocument(); // GameBoard check
  expect(screen.getByText(/Community Cards:/i)).toBeInTheDocument(); // GameBoard check
});
