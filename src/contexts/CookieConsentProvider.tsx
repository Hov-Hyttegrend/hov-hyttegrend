import { createContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { loadMewsScript } from '../utils/loadMewsScript';
import { initializeMews } from '../utils/initializeMews';

interface CookieConsentContextType {
  cookiesAccepted: boolean;
  acceptCookies: () => void;
  declineCookies: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export { CookieConsentContext };

const MEWS_CONFIG_ID = import.meta.env.VITE_MEWS_CONFIG_ID;

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    if (cookiesAccepted) {
      loadMewsScript()
        .then(() => {
          setTimeout(() => {
            initializeMews(MEWS_CONFIG_ID);
          }, 100);
        })
        .catch((err) => console.error('Failed to load Mews:', err));
    }
  }, [cookiesAccepted]);

  const acceptCookies = () => {
    setCookiesAccepted(true);
    localStorage.setItem('cookieConsent', 'true');
  };

  const declineCookies = () => {
    setCookiesAccepted(false);
    localStorage.setItem('cookieConsent', 'false');
  };

  return (
    <CookieConsentContext.Provider value={{ cookiesAccepted, acceptCookies, declineCookies }}>
      {children}
    </CookieConsentContext.Provider>
  );
}
