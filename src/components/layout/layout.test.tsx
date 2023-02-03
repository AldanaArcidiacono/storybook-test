import { render, screen } from '@testing-library/react';
import { Button } from '../../stories/Button';
import { Layout } from './layout';

describe('Given the LAYOUT component', () => {
  describe('When we render it', () => {
    test('Then it should display the header and footer', () => {
      render(
        <Layout>
          <>
            <p>Holis</p>
          </>
        </Layout>
      );
      const linkElement = screen.getByText(/Aldana/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
