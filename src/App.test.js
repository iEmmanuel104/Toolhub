import { render, screen } from '@testing-library/react';
import App from './App';

test('test leaderboard routes are working', () => {
  render(<App />);
  const linkElement = screen.getByText(/leaderboard/i);
  expect(linkElement).toBeInTheDocument();
} 
);

test('test records routes are working', () => {
  render(<App />);
  const linkElement = screen.getByText(/records/i);
  expect(linkElement).toBeInTheDocument();
}
);

test('test home routes are working', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
}
);

test('test error routes are working', () => {
  render(<App />);
  const linkElement = screen.getByText(/error/i);
  expect(linkElement).toBeInTheDocument();
}
);



