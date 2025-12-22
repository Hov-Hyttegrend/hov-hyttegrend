import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import { CookieConsentProvider } from './contexts/CookieConsentProvider';
import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <CookieConsentProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </CookieConsentProvider>
  );
}

export default App;
