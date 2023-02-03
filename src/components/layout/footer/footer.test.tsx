import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the FOOTER component', () => {
  describe('When we render it', () => {
    test('Then it should display The owner name', () => {
      render(<Footer />);
      const linkElement = screen.getByText(/Aldana/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
