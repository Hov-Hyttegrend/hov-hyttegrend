const CONSENT_COOKIE_NAME = 'cookieConsent';
const PREFERENCES_COOKIE_NAME = 'cookiePreferences';
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

const decodeValue = (value: string): string => {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
};

export const getCookieValue = (name: string): string | null => {
  if (typeof document === 'undefined') {
    return null;
  }

  const encodedName = `${name}=`;
  const cookies = document.cookie ? document.cookie.split(';') : [];

  for (const cookie of cookies) {
    const trimmed = cookie.trim();
    if (trimmed.startsWith(encodedName)) {
      return decodeValue(trimmed.slice(encodedName.length));
    }
  }

  return null;
};

export const setCookieValue = (
  name: string,
  value: string,
  maxAgeInSeconds = ONE_YEAR_IN_SECONDS,
) => {
  if (typeof document === 'undefined') {
    return;
  }

  const encodedValue = encodeURIComponent(value);
  document.cookie = `${name}=${encodedValue}; path=/; max-age=${maxAgeInSeconds}; SameSite=Lax`;
};

export const deleteCookieValue = (name: string) => {
  if (typeof document === 'undefined') {
    return;
  }

  document.cookie = `${name}=; path=/; max-age=0; SameSite=Lax`;
};

export const getConsentCookie = (): string | null => getCookieValue(CONSENT_COOKIE_NAME);

export const setConsentCookie = () => {
  setCookieValue(CONSENT_COOKIE_NAME, 'true');
};

export const clearConsentCookie = () => {
  deleteCookieValue(CONSENT_COOKIE_NAME);
};

export const getPreferencesCookie = (): string | null => getCookieValue(PREFERENCES_COOKIE_NAME);

export const setPreferencesCookie = (value: string) => {
  setCookieValue(PREFERENCES_COOKIE_NAME, value);
};

export const clearPreferencesCookie = () => {
  deleteCookieValue(PREFERENCES_COOKIE_NAME);
};
