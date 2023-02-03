import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given the HEADER component', () => {
  describe('When we render it', () => {
    test('Then it should display test', () => {
      render(<Header title={'Test'} user={'Aldana'} />);
      const linkElement = screen.getByText(/Test/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
