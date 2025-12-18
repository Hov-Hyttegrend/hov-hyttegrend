import { Outlet } from 'react-router-dom';
import Header from './Header';
// import Footer from './Footer';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full font-primary">
      <Header />
      <main className="bg-primary grow flex flex-col  items-center ">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
