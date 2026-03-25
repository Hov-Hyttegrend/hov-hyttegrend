import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
// MEWS BOOKING ENGINE DISABLED - To be replaced with alternative booking engine
// import { initializeMews, setMewsTracking } from '../utils/initializeMews';

interface CookieConsentContextType {
  analyticsAccepted: boolean;
  marketingAccepted: boolean;
  hasAcceptedAnyCookies: boolean;
  // MEWS BOOKING ENGINE DISABLED
  // mewsError: boolean;
  // mewsLoading: boolean;

  acceptAll: () => void;
  declineAll: () => void;
  setAnalytics: (accepted: boolean) => void;
  setMarketing: (accepted: boolean) => void;
  savePreferences: (analytics: boolean, marketing: boolean) => void;
  resetConsent: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

export { CookieConsentContext };

// MEWS BOOKING ENGINE DISABLED - To be replaced with alternative booking engine
// const MEWS_CONFIG_ID = '708640f3-a347-4f8f-8852-b32800e0651d';

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

  // MEWS BOOKING ENGINE DISABLED
  // const [mewsInitialized, setMewsInitialized] = useState(false);
  // const [mewsError, setMewsError] = useState(false);
  // const [mewsLoading, setMewsLoading] = useState(true);
  // const initializationRef = useRef<{ completed: boolean }>({ completed: false });
  // const lastTrackingState = useRef<boolean | null>(null);
  // const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  // const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* MEWS BOOKING ENGINE DISABLED
  useEffect(() => {
    // Only initialize once successfully
    if (initializationRef.current.completed) return;

    const initializeMewsEngine = () => {
      if ((window as { mewsApi?: unknown }).mewsApi || mewsInitialized) return;

      initializeMews(MEWS_CONFIG_ID)
        .then(() => {
          initializationRef.current.completed = true;
          setMewsInitialized(true);
          setMewsLoading(false);
          lastTrackingState.current = preferences.analytics;
          setMewsTracking(preferences.analytics);
        })
        .catch(() => {
          setMewsLoading(false);
          setMewsError(true);
        });
    };

    if ((window as { Mews?: unknown }).Mews) {
      initializeMewsEngine();
    } else {
      intervalRef.current = setInterval(() => {
        if ((window as { Mews?: unknown }).Mews) {
          if (intervalRef.current) clearInterval(intervalRef.current);
          if (timeoutRef.current) clearTimeout(timeoutRef.current);
          initializeMewsEngine();
        }
      }, 100);

      timeoutRef.current = setTimeout(() => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        if (!(window as { Mews?: unknown }).Mews) {
          setMewsLoading(false);
          setMewsError(true);
        }
      }, 10000);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  */

  /* MEWS BOOKING ENGINE DISABLED
  // Update Mews tracking when analytics preference changes
  useEffect(() => {
    if (!mewsInitialized) return;

    if (lastTrackingState.current !== preferences.analytics) {
      lastTrackingState.current = preferences.analytics;
      setMewsTracking(preferences.analytics);
    }
  }, [preferences.analytics, mewsInitialized]);
  */

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
    // MEWS BOOKING ENGINE DISABLED
    // mewsError,
    // mewsLoading,
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
