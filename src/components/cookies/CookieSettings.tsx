import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '../../contexts/useCookieConsent';
import { getConsentTimestamp } from '../../utils/cookieTimestamp';
import { useState, useMemo } from 'react';

export default function CookieSettings() {
  const { analyticsAccepted, marketingAccepted, savePreferences, resetConsent } =
    useCookieConsent();
  const { t, i18n } = useTranslation();

  const [analytics, setAnalytics] = useState(analyticsAccepted);
  const [marketing, setMarketing] = useState(marketingAccepted);
  const [saved, setSaved] = useState(false);

  const consentDate = useMemo(() => {
    const timestamp = getConsentTimestamp();
    if (timestamp) {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) {
        return null;
      }
      const formatted = date.toLocaleDateString(i18n.language, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
      return formatted;
    }
    return null;
  }, [i18n.language]);

  const handleSave = () => {
    savePreferences(analytics, marketing);
    setSaved(true);
    setTimeout(() => setSaved(false), 4000);
  };

  const handleReset = () => {
    if (confirm(t('common.cookieSettings.resetConfirm'))) {
      resetConsent();
      window.location.reload();
    }
  };

  return (
    <div className="bg-primary w-full">
      <div className="max-w-4xl mx-auto p-6 mt-25 lg:mt-37.5 2xl:mt-50">
        <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
          {t('common.cookieSettings.title')}
        </h1>
        <p className="text-sm lg:text-base text-gray-600 mb-8">
          {t('common.cookieSettings.description')}
        </p>

        {/* GDPR Consent Info */}
        {consentDate && (
          <div className="mb-6 p-4 bg-gray-900 text-white rounded-lg border">
            <p className="text-sm">
              <strong>ℹ️ {t('common.cookieSettings.consentInfo')}</strong>
              {consentDate}
            </p>
          </div>
        )}

        {/* Essential Cookies */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base lg:text-lg xl:text-xl font-semibold">
              {t('common.cookieBanner.essential.title')}
            </h2>
            <span className="text-sm text-center bg-green-700 text-white px-3 py-1 rounded-full">
              {t('common.cookieBanner.alwaysActive')}
            </span>
          </div>
          <p className="text-gray-600 mb-2">{t('common.cookieBanner.essential.description')}</p>
          <p className="text-sm text-gray-500">{t('common.cookieSettings.essential.details')}</p>
        </div>

        {/* Analytics Cookies */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base lg:text-lg xl:text-xl font-semibold">
              {t('common.cookieBanner.analytics.title')}
            </h2>
            <label htmlFor="analytics" className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="analytics"
                name="analytics"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <p className="text-gray-600 mb-2">{t('common.cookieBanner.analytics.description')}</p>
          <p className="text-sm text-gray-500">{t('common.cookieSettings.analytics.details')}</p>
        </div>

        {/* Marketing Cookies */}
        <div className="mb-6 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base lg:text-lg xl:text-xl font-semibold">
              {t('common.cookieBanner.marketing.title')}
            </h2>
            <label htmlFor="marketing" className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="marketing"
                name="marketing"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-14 h-7 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-yellow-500"></div>
            </label>
          </div>
          <p className="text-gray-600 mb-2">{t('common.cookieBanner.marketing.description')}</p>
          <p className="text-sm text-gray-500">{t('common.cookieSettings.marketing.details')}</p>
        </div>

        {/* Saved Message */}
        {saved && (
          <div className="mb-6 p-4 bg-gray-900 text-white rounded-lg">
            ✅ {t('common.cookieSettings.saved')}
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleSave}
            className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg transition cursor-pointer"
          >
            {t('common.cookieSettings.saveButton')}
          </button>
          <button
            onClick={handleReset}
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition cursor-pointer"
          >
            {t('common.cookieSettings.resetButton')}
          </button>
        </div>
      </div>
    </div>
  );
}
