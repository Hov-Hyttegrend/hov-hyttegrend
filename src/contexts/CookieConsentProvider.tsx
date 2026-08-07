import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import {
  clearConsentCookie,
  clearPreferencesCookie,
  getConsentCookie,
  getPreferencesCookie,
  setConsentCookie,
  setPreferencesCookie,
} from '../utils/consentCookies';

interface CookieConsentContextType {
  googleMapsAccepted: boolean;
  hasAcceptedAnyCookies: boolean;

  acceptAll: () => void;
  declineAll: () => void;
  setGoogleMaps: (accepted: boolean) => void;
  savePreferences: (googleMaps: boolean) => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export { CookieConsentContext };

interface CookiePreferences {
  googleMaps: boolean;
  consentTimestamp?: string;
}

const parsePreferences = (raw: string | null): CookiePreferences | null => {
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as {
      googleMaps?: boolean;
      marketing?: boolean;
      consentTimestamp?: string;
    };

    return {
      googleMaps: parsed.googleMaps ?? parsed.marketing ?? false,
      consentTimestamp: parsed.consentTimestamp,
    };
  } catch {
    return null;
  }
};

const getStoredPreferences = (): CookiePreferences => {
  const cookiePreferences = parsePreferences(getPreferencesCookie());
  if (cookiePreferences) {
    return cookiePreferences;
  }

  const localStoragePreferences = parsePreferences(localStorage.getItem('cookiePreferences'));
  if (localStoragePreferences) {
    return localStoragePreferences;
  }

  return { googleMaps: false };
};

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences>(() => getStoredPreferences());
  const [hasConsented, setHasConsented] = useState<boolean>(() => {
    return getConsentCookie() !== null || localStorage.getItem('cookieConsent') !== null;
  });

  // Persist consent in first-party cookies and clean up legacy localStorage keys.
  const saveToStorage = (prefs: CookiePreferences) => {
    const prefsWithTimestamp = {
      ...prefs,
      consentTimestamp: prefs.consentTimestamp || new Date().toISOString(),
    };

    setPreferences(prefsWithTimestamp);
    setPreferencesCookie(JSON.stringify(prefsWithTimestamp));
    setConsentCookie();
    setHasConsented(true);

    localStorage.removeItem('cookiePreferences');
    localStorage.removeItem('cookieConsent');
  };

  // Accept all cookies
  const acceptAll = () => {
    saveToStorage({ googleMaps: true });
  };

  // Decline all non-essential cookies
  const declineAll = () => {
    saveToStorage({ googleMaps: false });
  };

  // Set Google Maps consent only
  const setGoogleMaps = (accepted: boolean) => {
    saveToStorage({ ...preferences, googleMaps: accepted });
  };

  // Save custom preferences
  const savePreferences = (googleMaps: boolean) => {
    saveToStorage({ googleMaps });
  };

  // Reset consent (show banner again)
  const resetConsent = () => {
    clearConsentCookie();
    clearPreferencesCookie();
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookiePreferences');

    setPreferences({ googleMaps: false });
    setHasConsented(false);
  };

  const contextValue: CookieConsentContextType = {
    googleMapsAccepted: preferences.googleMaps,
    hasAcceptedAnyCookies: hasConsented,

    acceptAll,
    declineAll,
    setGoogleMaps,
    savePreferences,
    resetConsent,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>{children}</CookieConsentContext.Provider>
  );
}
