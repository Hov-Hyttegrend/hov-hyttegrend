import { createContext, useState } from 'react';
import type { ReactNode } from 'react';

interface CookieConsentContextType {
  analyticsAccepted: boolean;
  marketingAccepted: boolean;
  hasAcceptedAnyCookies: boolean;

  acceptAll: () => void;
  declineAll: () => void;
  setAnalytics: (accepted: boolean) => void;
  setMarketing: (accepted: boolean) => void;
  savePreferences: (analytics: boolean, marketing: boolean) => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export { CookieConsentContext };

interface CookiePreferences {
  analytics: boolean;
  marketing: boolean;
  consentTimestamp?: string;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  // Load saved preferences
  const [preferences, setPreferences] = useState<CookiePreferences>(() => {
    const stored = localStorage.getItem('cookiePreferences');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch {
        return { analytics: false, marketing: false };
      }
    }
    return { analytics: false, marketing: false };
  });

  // Save preferences to localStorage whenever they change
  const saveToStorage = (prefs: CookiePreferences) => {
    const prefsWithTimestamp = {
      ...prefs,
      consentTimestamp: prefs.consentTimestamp || new Date().toISOString(),
    };
    setPreferences(prefs);
    localStorage.setItem('cookiePreferences', JSON.stringify(prefsWithTimestamp));
    localStorage.setItem('cookieConsent', 'true');
  };

  // Accept all cookies
  const acceptAll = () => {
    saveToStorage({ analytics: true, marketing: true });
  };

  // Decline all non-essential cookies
  const declineAll = () => {
    saveToStorage({ analytics: false, marketing: false });
  };

  // Set analytics only
  const setAnalytics = (accepted: boolean) => {
    saveToStorage({ ...preferences, analytics: accepted });
  };

  // Set marketing only
  const setMarketing = (accepted: boolean) => {
    saveToStorage({ ...preferences, marketing: accepted });
  };

  // Save custom preferences
  const savePreferences = (analytics: boolean, marketing: boolean) => {
    saveToStorage({ analytics, marketing });
  };

  // Reset consent (show banner again)
  const resetConsent = () => {
    localStorage.removeItem('cookieConsent');
    localStorage.removeItem('cookiePreferences');
    setPreferences({ analytics: false, marketing: false });
  };

  const contextValue: CookieConsentContextType = {
    analyticsAccepted: preferences.analytics,
    marketingAccepted: preferences.marketing,
    hasAcceptedAnyCookies: preferences.analytics || preferences.marketing,

    acceptAll,
    declineAll,
    setAnalytics,
    setMarketing,
    savePreferences,
    resetConsent,
  };

  return (
    <CookieConsentContext.Provider value={contextValue}>{children}</CookieConsentContext.Provider>
  );
}
