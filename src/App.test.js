import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('app')
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('screen')
  expect(linkElement).toBeEmptyDOMElement
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('gist')
  expect(linkElement).toBeInTheDocument();
});


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('header')
  expect(linkElement).toBeInTheDocument();
});