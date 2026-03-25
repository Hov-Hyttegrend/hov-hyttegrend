// MEWS BOOKING ENGINE DISABLED - To be replaced with alternative booking engine

/* COMMENTED OUT MEWS ERROR MODAL
import { useCookieConsent } from '../contexts/useCookieConsent';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function MewsErrorModal() {
  const { mewsError, mewsLoading } = useCookieConsent();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleBookingClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const distributorButton = target.closest('.distributor');

      if (distributorButton && (mewsLoading || mewsError)) {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleBookingClick, true);

    return () => {
      document.removeEventListener('click', handleBookingClick, true);
    };
  }, [mewsLoading, mewsError]);

  // console.log('mewsLoading:', mewsLoading, 'mewsError:', mewsError);

  const shouldShowModal = isOpen && (mewsLoading || mewsError);

  if (!shouldShowModal) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className={`text-2xl ${mewsLoading ? 'animate-spin-slow' : ''}`}>
              {mewsLoading ? '⏳' : '⚠️'}
            </span>
            <h2 className="text-lg font-bold text-gray-900">
              {mewsLoading
                ? t('common.errors.bookingLoadingTitle')
                : t('common.errors.bookingUnavailableTitle')}
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer text-xl leading-none"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-gray-600">
          {mewsLoading
            ? t('common.errors.bookingLoadingDescription')
            : t('common.errors.bookingUnavailableDescription')}
        </p>
      </div>
    </div>
  );
}
*/
