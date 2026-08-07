import { useTranslation } from 'react-i18next';
import GoogleMaps from '../components/map/GoogleMaps';

import Vector3 from '../assets/svg/Vector3.svg';

import HOV_1 from '../assets/images/hov-resepsjon-1.jpg';

import HOV_2 from '../assets/images/hov-hytte-1.webp';
import HOV_3 from '../assets/images/hov-camp-1.jpg';
import HOV_4 from '../assets/images/hov-foss-3.jpg';
import HOV_5 from '../assets/images/hov-utsikt-1.jpg';

export default function About() {
  const { t } = useTranslation(['translation', 'about']);
  return (
    <>
      <header className="flex h-screen w-full">
        <div className="relative w-full h-full">
          <img
            src={HOV_1}
            alt="Resepsjonen på Hov Hyttegrend med fjell i bakgrunnen"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#00000035]"></div>

          <div className="absolute z-10 top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%] text-center text-white gap-10 lg:gap-15 2xl:gap-20 flex flex-col items-center px-8 max-w-6xl">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-shadow-sm tracking-widest font-bold">
                {t('about:aboutPage.header.title')}
              </h1>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 translate-y-[50%] flex justify-center overflow-x-hidden">
            <img
              src={Vector3}
              alt="Decorative wave divider"
              className="lg:w-full w-250 md:w-full text-secondary block"
            />
          </div>
        </div>
      </header>

      <section className="section-container bg-light-green">
        <div className="max-w-6xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-bold uppercase text-secondary pb-5 lg:pb-10 ">
            {t('about:aboutPage.title')}
          </h2>

          <div className="flex flex-col gap-10">
            <p className="text-2">{t('about:aboutPage.text_part_1')}</p>
            <p className="text-2">{t('about:aboutPage.text_part_2')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
              <div className="flex flex-col justify-center items-center max-h-100 ">
                <img
                  src={HOV_2}
                  alt="About Hov Hyttegrend"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center max-h-100 ">
                <img
                  src={HOV_3}
                  alt="About Hov Hyttegrend"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-2">{t('about:aboutPage.text_part_3')}</p>
            <p className="text-2">{t('about:aboutPage.text_part_4')}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
              <div className="flex flex-col justify-center items-center max-h-100 overflow-hidden">
                <img
                  src={HOV_4}
                  alt="About Hov Hyttegrend"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center items-center max-h-100 overflow-hidden">
                <img
                  src={HOV_5}
                  alt="About Hov Hyttegrend"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-2">{t('about:aboutPage.text_part_5')}</p>
            <p className="text-2">{t('about:aboutPage.text_part_6')}</p>
          </div>
        </div>
      </section>

      <div
        className="flex flex-col justify-center items-center w-full py-16 md:py-30 lg:py-40 xl:pb-60 px-6 sm:px-10 md:px-20 lg:px-20 bg-primary"
        id="contact"
      >
        <GoogleMaps />
      </div>
    </>
  );
}
