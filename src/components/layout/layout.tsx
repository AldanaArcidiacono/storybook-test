import { Footer } from './footer/footer';
import { Header } from './header/header';

export function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header title={'Test'} user={'Aldana'} />
      {children}
      <Footer />
    </>
  );
}
