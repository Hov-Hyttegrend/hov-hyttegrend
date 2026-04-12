import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollToHash } from '../hooks/useScrollToHash';

export default function Layout() {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col w-full font-primary">
      <Header />
      <main className="grow flex flex-col  items-center ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
