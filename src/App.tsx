import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home';
import Terms from './pages/terms';
import Privacy from './pages/privacy';
import { CookieConsentProvider } from './contexts/CookieConsentProvider';
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './utils/ScrollToTop';
import CookieSettings from './components/cookies/CookieSettings';

function App() {
  return (
    <CookieConsentProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/terms_and_conditions" element={<Terms />} />
            <Route path="/privacy_policy" element={<Privacy />} />
            <Route path="/cookie_settings" element={<CookieSettings />} />
          </Route>
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </CookieConsentProvider>
  );
}

export default App;
