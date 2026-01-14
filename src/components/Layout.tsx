import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Background from './Background';
import HOV_7 from '../assets/images/hov7.webp';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col w-full font-primary">
      <Background
        imageUrl={HOV_7}
        imageAlt="Waterfall down to a lake surrounded by mountain and trees"
      />
      <Header />
      <main className="grow flex flex-col  items-center ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
