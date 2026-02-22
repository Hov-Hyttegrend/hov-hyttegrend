export const getConsentTimestamp = (): string | null => {
  try {
    const stored = localStorage.getItem('cookiePreferences');
    if (stored) {
      const prefs = JSON.parse(stored);
      return prefs.consentTimestamp || null;
    }
  } catch {
    return null;
  }
  return null;
};
