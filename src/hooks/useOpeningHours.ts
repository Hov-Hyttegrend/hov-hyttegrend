import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getOpeningHours } from '../utils/openingHours';

export function useOpeningHours() {
  const { t } = useTranslation();
  const [hours, setHours] = useState(() => getOpeningHours());

  useEffect(() => {
    let timeoutId: number;

    const refresh = () => {
      setHours(getOpeningHours());
    };

    // Align checks to each minute so a page left open updates at midnight.
    const scheduleRefresh = () => {
      timeoutId = window.setTimeout(
        () => {
          refresh();
          scheduleRefresh();
        },
        60_000 - (Date.now() % 60_000),
      );
    };

    scheduleRefresh();
    window.addEventListener('focus', refresh);
    document.addEventListener('visibilitychange', refresh);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('focus', refresh);
      document.removeEventListener('visibilitychange', refresh);
    };
  }, []);

  return hours ?? t('common.contact.openingHoursOnRequest');
}
