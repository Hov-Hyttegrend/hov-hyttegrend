import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollToHash } from '../hooks/useScrollToHash';
import MewsErrorModal from './MewsErrorModal';

export default function Layout() {
  useScrollToHash();

  return (
    <div className="min-h-screen flex flex-col w-full font-primary">
      <Header />
      <MewsErrorModal />
      <main className="grow flex flex-col  items-center ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
