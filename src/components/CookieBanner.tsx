import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '../contexts/useCookieConsent';
import { useState } from 'react';

export default function CookieBanner() {
  const { acceptAll, declineAll, savePreferences } = useCookieConsent();
  const { t } = useTranslation();

  const [showBanner, setShowBanner] = useState(() => {
    const consent = localStorage.getItem('cookieConsent');
    return consent === null;
  });

  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  const consent = localStorage.getItem('cookieConsent');
  if (!showBanner || consent !== null) {
    return null;
  }

  const handleAcceptAll = () => {
    acceptAll();
    setShowBanner(false);
  };

  const handleDeclineAll = () => {
    declineAll();
    setShowBanner(false);
  };

  const handleSaveCustom = () => {
    savePreferences(analytics, marketing);
    setShowBanner(false);
  };

  if (showCustomize) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-6 shadow-lg z-50 max-h-[90vh] overflow-y-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold mb-4">{t('common.cookieBanner.customizeTitle')}</h2>

          <p className="text-sm text-gray-300 mb-6">
            {t('common.cookieBanner.customizeDescription')}
          </p>

          {/* Essential Cookies - Always On */}
          <div className="mb-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{t('common.cookieBanner.essential.title')}</h3>
              <span className="text-xs bg-green-600 px-2 py-1 rounded">
                {t('common.cookieBanner.alwaysActive')}
              </span>
            </div>
            <p className="text-sm text-gray-400">
              {t('common.cookieBanner.essential.description')}
            </p>
          </div>

          {/* Analytics Cookies */}
          <div className="mb-4 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{t('common.cookieBanner.analytics.title')}</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
            <p className="text-sm text-gray-400">
              {t('common.cookieBanner.analytics.description')}
            </p>
          </div>

          {/* Marketing Cookies */}
          <div className="mb-6 p-4 bg-gray-800 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{t('common.cookieBanner.marketing.title')}</h3>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={marketing}
                  onChange={(e) => setMarketing(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500"></div>
              </label>
            </div>
            <p className="text-sm text-gray-400">
              {t('common.cookieBanner.marketing.description')}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => setShowCustomize(false)}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-full text-sm font-semibold transition"
            >
              {t('common.cookieBanner.back')}
            </button>
            <button
              onClick={handleSaveCustom}
              className="flex-1 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 rounded-full text-sm font-semibold transition text-black"
            >
              {t('common.cookieBanner.savePreferences')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm mb-2">{t('common.cookieBanner.description')}</p>
            <button
              onClick={() => setShowCustomize(true)}
              className="text-xs text-yellow-500 hover:text-yellow-400 underline"
            >
              {t('common.cookieBanner.customize')}
            </button>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleDeclineAll}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-full text-sm transition cursor-pointer whitespace-nowrap"
            >
              {t('common.cookieBanner.declineAll')}
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-full text-sm font-semibold transition text-black hover:text-white cursor-pointer whitespace-nowrap"
            >
              {t('common.cookieBanner.acceptAll')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
