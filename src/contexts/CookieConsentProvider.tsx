import { createContext, useState, useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import { initializeMews, setMewsTracking } from '../utils/initializeMews';

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

const MEWS_CONFIG_ID = '708640f3-a347-4f8f-8852-b32800e0651d';

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

  const [mewsInitialized, setMewsInitialized] = useState(false);
  const initializationAttempted = useRef(false);
  const lastTrackingState = useRef<boolean | null>(null);

  // Initialize Mews ONCE (essential functionality - no consent needed)
  // We use a ref to ensure this runs only once, ignoring dependency warnings
  useEffect(() => {
    if (initializationAttempted.current) return;
    initializationAttempted.current = true;

    const initializeMewsEngine = () => {
      if ((window as { mewsApi?: unknown }).mewsApi || mewsInitialized) return;

      initializeMews(MEWS_CONFIG_ID)
        .then(() => {
          setMewsInitialized(true);

          lastTrackingState.current = preferences.analytics;
          setMewsTracking(preferences.analytics);
        })
        .catch((err) => {
          console.error('❌ Failed to initialize Mews:', err);
        });
    };

    if ((window as { Mews?: unknown }).Mews) {
      initializeMewsEngine();
    } else {
      const checkInterval = setInterval(() => {
        if ((window as { Mews?: unknown }).Mews) {
          clearInterval(checkInterval);
          initializeMewsEngine();
        }
      }, 100);

      const timeout = setTimeout(() => {
        clearInterval(checkInterval);
        if (!(window as { Mews?: unknown }).Mews) {
          console.error('❌ Mews script failed to load');
        }
      }, 10000);

      return () => {
        clearInterval(checkInterval);
        clearTimeout(timeout);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update Mews tracking when analytics preference changes
  useEffect(() => {
    if (!mewsInitialized) return;

    if (lastTrackingState.current !== preferences.analytics) {
      lastTrackingState.current = preferences.analytics;
      setMewsTracking(preferences.analytics);
    }
  }, [preferences.analytics, mewsInitialized]);

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
