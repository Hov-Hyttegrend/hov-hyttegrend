import { useCookieConsent } from '../contexts/useCookieConsent';

export default function GoogleMaps() {
  const { cookiesAccepted } = useCookieConsent();

  return (
    <div className="w-full flex justify-center relative">
      {/* Google Maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7657.604776950507!2d6.258996427059175!3d61.326245908670614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4616236a68752b3b%3A0xb9b7b8246bb0e7a3!2sHOV%20HYTTEGREND!5e0!3m2!1sno!2sno!4v1757068137715!5m2!1sno!2sno"
        className="max-w-150 w-full h-96 rounded-xl"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />

      {/* Cookie Overlay */}
      {!cookiesAccepted && (
        <div className="absolute inset-0 backdrop-blur-xs flex flex-col items-center justify-center">
          <div className="bg-black/50 max-w-150 w-full h-full flex flex-col items-center justify-center rounded-xl">
            <div className="bg-white rounded-lg p-6 shadow-xl max-w-sm mx-4 text-center">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 className="text-lg font-semibold mb-2">Cookies kreves</h3>
              <p className="text-gray-600 text-sm mb-4">
                For å bruke kartet må du akseptere cookies
              </p>
              <button
                onClick={() => {
                  window.dispatchEvent(new Event('showCookieBanner'));
                }}
                className="w-full px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded font-semibold transition hover:cursor-pointer"
              >
                Aksepter cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
