import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Featured Products link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Featured Products/i);
  expect(linkElement).toBeInTheDocument();
});
