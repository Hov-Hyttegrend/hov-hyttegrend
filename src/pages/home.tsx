import { useTranslation } from 'react-i18next';
import HOV_1 from '../assets/images/hov1.webp';
import VECTOR2 from '../assets/svg/Vector2.svg';

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* Section 1 */}
      <header className="flex h-screen w-full">
        <div className="relative w-full h-full">
          <img
            src={HOV_1}
            alt="Lake with mountain view and forest trees"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00000035]"></div>

          <div className="absolute z-10 top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%] text-center text-white gap-20 flex flex-col items-center px-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl lg:text-6xl text-shadow-sm tracking-widest font-bold">
                {t('welcome.title')}
              </h1>
              <p className="text-base lg:text-3xl text-shadow-sm">{t('welcome.description')}</p>
            </div>
          </div>
          <div className="w-full absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]">
            <img
              src={VECTOR2}
              alt=""
              className=" lg:w-full overflow-x-hidden shadow-vector-up w-250 md:w-full"
            />
          </div>
        </div>
      </header>

      {/* Section 2 */}
      <div className="section-container mt-50">
        <div className="relative max-w-60 max-h-60 sm:max-w-100 sm:max-h-100 md:max-w-125 md:max-h-125 lg:max-w-150 lg:max-h-150 w-full h-full aspect-square flex  items-center justify-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] aspect-square -mt-7.5 rotate-45 flex items-center justify-center bg-secondary p-2">
            <div className="w-full h-full overflow-hidden">
              <img
                src={HOV_1}
                alt="Top"
                className="w-full h-full object-cover scale-150 -rotate-45"
              />
            </div>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[40%] aspect-square rotate-45 flex items-center justify-center bg-secondary p-2">
            <div className="w-full h-full overflow-hidden">
              <img
                src={HOV_1}
                alt="Top"
                className="w-full h-full object-cover scale-150 -rotate-45"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 lg:gap-10 lg:justify-center max-w-70 max-h-80 sm:max-w-100 sm:max-h-100 md:max-w-125 md:max-h-125 lg:max-w-150 lg:max-h-150 w-full h-full ">
          <h2 className="h2">Om oss</h2>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div>
            <button className="button-green">Mer om oss</button>
          </div>
        </div>
      </div>
    </>
  );
}
