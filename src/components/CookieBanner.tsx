import { useCookieConsent } from '../contexts/useCookieConsent';
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const { acceptCookies, declineCookies } = useCookieConsent();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 0);
      return () => clearTimeout(timer);
    }

    const handleShowBanner = () => setShowBanner(true);
    window.addEventListener('showCookieBanner', handleShowBanner);

    return () => window.removeEventListener('showCookieBanner', handleShowBanner);
  }, []);

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          This website uses cookies for booking functionality and maps. By continuing, you need to
          accept our use of cookies.
        </p>
        <div className="flex gap-3">
          <button
            onClick={() => {
              declineCookies();
              setShowBanner(false);
            }}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded text-sm transition"
          >
            Decline
          </button>
          <button
            onClick={() => {
              acceptCookies();
              setShowBanner(false);
            }}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded text-sm font-semibold transition"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
