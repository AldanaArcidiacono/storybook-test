import { render, screen } from '@testing-library/react';
import App from './App';

describe('Given the APP component', () => {
  test('When it renders, it should display test', () => {
    render(<App />);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
  });
});
