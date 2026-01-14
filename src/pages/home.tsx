import { useTranslation } from 'react-i18next';
import HOV_1 from '../assets/images/hov1.webp';
import HOV_2 from '../assets/images/hov2.jpg';
import HOV_5 from '../assets/images/hov5.jpg';
import HOV_6 from '../assets/images/hov6.jpg';

// import Vector2 from '../assets/svg/Vector2.svg?react';
import Vector3 from '../assets/svg/Vector3.svg';
import Trees3 from '../assets/svg/3-trees.svg?react';
import GroupTrees1 from '../assets/svg/GroupTrees1.svg?react';
import GroupTrees2 from '../assets/svg/GroupTrees2.svg?react';

import FishingIcon from '../assets/svg/fishing.svg?react';
import HikeIcon from '../assets/svg/hike.svg?react';
import MountainHikeIcon from '../assets/svg/mountain-hike.svg?react';
import FrisbeeGolfIcon from '../assets/svg/frisbeegolf.svg?react';
import PaddleIcon from '../assets/svg/paddle.svg?react';
import SwimmingIcon from '../assets/svg/swimming.svg?react';

import { useCookieConsent } from '../contexts/useCookieConsent';
import GoogleMaps from '../components/GoogleMaps';
import ImageTextSection from '../components/ImageTextSection';

export default function Home() {
  const { t } = useTranslation();
  const { cookiesAccepted } = useCookieConsent();

  function renderTextWithParagraphs(text: string): React.ReactNode[] {
    return text
      .split('\n')
      .filter((line) => line.trim())
      .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  }

  return (
    <>
      {/* Header */}
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
            <button
              className="button-yellow distributor"
              onClick={(e) => {
                if (!cookiesAccepted) {
                  e.preventDefault();
                  window.dispatchEvent(new Event('showCookieBanner'));
                }
              }}
            >
              {t('common.bookingButton')}
            </button>
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

      <div className="main-content w-full">
        {/* Section 1 */}

        <div className="section-container bg-primary">
          <section className="flex flex-col max-w-300 lg:p-10 gap-7 lg:gap-12">
            <h2 className="font-secondary text-xl sm:text-2xl md:text-3xl xl:text-5xl font-bold uppercase text-secondary">
              {t('homePage.section_1.title')}
            </h2>
            <div className="text-base sm:text-lg md:text-xl xl:text-[32px] flex flex-col gap-10">
              {renderTextWithParagraphs(t('homePage.section_1.text'))}
            </div>

            <div className="w-full flex justify-center">
              <Trees3 className="text-secondary max-w-28 md:max-w-40 lg:max-w-48 xl:max-w-64" />
            </div>
          </section>
        </div>

        {/* Section 2 */}
        <div className="section-container bg-light-green">
          <ImageTextSection
            imageSrc={HOV_2}
            imageAlt="Top"
            title={t('homePage.section_2.title')}
            text={t('homePage.section_2.text')}
            buttonText={t('common.bookingButton')}
            className="my-10"
          />
        </div>

        {/* section 3 and 4 */}
        <div className="bg-primary">
          <section className="w-full flex flex-col justify-center items-center px-6 py-10 sm:px-10 md:px-20 xl:py-40 lg:px-20">
            <h2 className="h2 pb-5">{t('homePage.section_3.title')}</h2>
            <p className="text pb-8">{t('homePage.section_3.text')}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 w-full max-w-7xl">
              <div className="icon-button icon-button-top">
                <MountainHikeIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button icon-button-top">
                <PaddleIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button icon-button-top">
                <SwimmingIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button icon-button-top">
                <FrisbeeGolfIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button icon-button-bottom md:col-span-2">
                <FishingIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button icon-button-bottom md:col-span-2">
                <HikeIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
            </div>
          </section>

          <div className="w-full flex justify-center p-6   sm:p-10  md:p-20  bg-primary">
            <div className="w-full max-w-7xl">
              <div className="flex justify-between border-b-3 border-secondary">
                <GroupTrees1 className="text-secondary h-9 sm:h-12 lg:h-20 xl:h-32" />
                <GroupTrees2 className="text-secondary h-9 sm:h-12 lg:h-20 xl:h-32" />
              </div>
              <div className="flex justify-between rotate-x-180">
                <GroupTrees1 className="text-secondary h-9 sm:h-12 lg:h-20 xl:h-32" />
                <GroupTrees2 className="text-secondary h-9 sm:h-12 lg:h-20 xl:h-32" />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <section className="relative w-full flex flex-col justify-center items-center px-6 py-10 sm:px-10 md:px-20 xl:pt-40 xl:pb-80 lg:px-20">
            <h2 className="h2 pb-5">{t('homePage.section_4.title')}</h2>
            <p className="text pb-8">{t('homePage.section_4.text')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-7xl">
              <div className="icon-button aspect-video">
                <MountainHikeIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button aspect-video">
                <PaddleIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
              <div className="icon-button aspect-video">
                <SwimmingIcon className="max-h-12 md:max-h-20 lg:max-h-28 text-primary" />
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 translate-y-[50%] flex justify-center overflow-x-hidden">
              <img
                src={Vector3}
                alt="Decorative wave divider"
                className="lg:w-full w-250 md:w-full text-secondary block"
              />
            </div>
          </section>
        </div>

        {/* Section 5 */}
        <div className="relative flex flex-col justify-center min-h-screen">
          <div className="absolute inset-x-0 bottom-0 translate-y-[50%] flex justify-center overflow-x-hidden">
            <img
              src={Vector3}
              alt="Decorative wave divider"
              className="lg:w-full w-250 md:w-full text-secondary block"
            />
          </div>
        </div>

        {/* Section 6 */}
        <div className="section-container bg-primary">
          <ImageTextSection
            imageSrc={HOV_5}
            imageAlt="Top"
            title={t('homePage.section_5.title')}
            text={renderTextWithParagraphs(t('homePage.section_5.text'))}
          />
        </div>

        {/* Section 7 */}
        <div className="section-container bg-light-green">
          <ImageTextSection
            imageSrc={HOV_6}
            imageAlt="Top"
            title={t('homePage.section_6.title')}
            text={renderTextWithParagraphs(t('homePage.section_6.text'))}
            className="lg:flex-row-reverse"
          />
        </div>

        {/* Section 9 */}
        <div className="section-container bg-primary">
          <GoogleMaps />
        </div>
      </div>
    </>
  );
}
