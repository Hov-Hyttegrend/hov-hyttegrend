import { useTranslation } from 'react-i18next';
import { useCookieConsent } from '../../contexts/useCookieConsent';
import MAP_PLACEHOLDER from '../../assets/images/map-placeholder.png';

export default function GoogleMaps() {
  const { marketingAccepted, setMarketing } = useCookieConsent();
  const { t } = useTranslation();

  const handleAcceptMarketing = () => {
    setMarketing(true);
  };

  return (
    <div className="max-w-7xl w-full flex flex-col lg:flex-row-reverse justify-center items-center gap-6">
      <div className="w-full lg:w-2/4 flex justify-center relative">
        <div className="p-1 rounded-xl w-full bg-secondary shadow-lg">
          {marketingAccepted ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7657.604776950507!2d6.258996427059175!3d61.326245908670614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616236a68752b3b%3A0xb9b7b8246bb0e7a3!2sHOV%20HYTTEGREND!5e0!3m2!1sno!2sno!4v1757068137715!5m2!1sno!2sno"
              title="Google Maps"
              className="w-full h-80 md:h-100 rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div className="w-full h-80 md:h-100 rounded-xl bg-gray-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-gray-300 to-gray-400 opacity-50">
                <img
                  src={MAP_PLACEHOLDER}
                  alt="Screenshot of google maps"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay with consent request */}
              <div className="relative z-10 bg-white rounded-lg p-6 shadow-xl max-w-sm mx-4 text-center">
                <svg
                  className="w-12 h-12 text-yellow-500 mx-auto mb-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <h3 className="text-lg font-semibold mb-2 text-gray-800">
                  {t('common.cookiesMapOverlay.title')}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {t('common.cookiesMapOverlay.description')}
                </p>

                <button
                  onClick={handleAcceptMarketing}
                  className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black rounded-full font-semibold transition hover:cursor-pointer"
                >
                  {t('common.cookiesMapOverlay.buttonAccept')}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-full lg:w-1/3">
        <div className="py-6">
          <h3 className="text-xl lg:text-3xl font-bold mb-6">
            {t('common.contact.informationTitle')}
          </h3>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <div className="w-6 h-6 shrink-0">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  {t('common.contact.addressTitle')}
                </p>
                <p className="text-sm md:text-base xl:text-lg">{t('common.contact.address')}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 shrink-0">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  {t('common.contact.phoneTitle')}
                </p>
                <p className="text-sm md:text-base xl:text-lg">+47 400 67 568</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 shrink-0">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  {t('common.contact.emailTitle')}
                </p>
                <p className="text-sm md:text-base xl:text-lg">post@hovhyttegrend.no</p>
              </div>
            </li>
            <li className="flex gap-3">
              <div className="w-6 h-6 shrink-0">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">
                  {t('common.contact.openingHoursTitle')}
                </p>
                <p className="text-sm md:text-base xl:text-lg">09:00 - 11:00 | 18:30 - 20:00</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
