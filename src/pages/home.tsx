import { useTranslation } from 'react-i18next';
import HOV_1 from '../assets/images/hov1.webp';

import Vector2 from '../assets/svg/Vector2.svg?react';
import Trees3 from '../assets/svg/3-trees.svg?react';
import TreeGroup3 from '../assets/svg/Trees-group3.svg?react';
import TreeGroup4 from '../assets/svg/Trees-group4.svg?react';

import FishingIcon from '../assets/svg/fishing.svg?react';
import HikeIcon from '../assets/svg/hike.svg?react';
import MountainHikeIcon from '../assets/svg/mountain-hike.svg?react';
import FrisbeeGolfIcon from '../assets/svg/frisbeegolf.svg?react';
import PaddleIcon from '../assets/svg/paddle.svg?react';
import SwimmingIcon from '../assets/svg/swimming.svg?react';

import { useCookieConsent } from '../contexts/useCookieConsent';
import GoogleMaps from '../components/GoogleMaps';

export default function Home() {
  const { t } = useTranslation();
  const { cookiesAccepted } = useCookieConsent();

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
            <button
              className="button-yellow distributor"
              onClick={(e) => {
                if (!cookiesAccepted) {
                  e.preventDefault();
                  window.dispatchEvent(new Event('showCookieBanner'));
                }
              }}
            >
              Book reisen din
            </button>
          </div>
          <div className="w-full absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]">
            <Vector2 className="w-full block text-secondary" />
          </div>
        </div>
      </header>

      <div className="main-content">
        {/* Section 2 */}
        <div className="section-container">
          <section className="flex flex-col max-w-7xl gap-12">
            <h2 className="font-secondary text-5xl font-bold uppercase">{t('test.title')}</h2>
            <p className="text-3xl">{t('test.text')}</p>

            <div className="w-full flex justify-center">
              <Trees3 className="text-secondary" />
            </div>
          </section>
        </div>

        {/* Section 3 */}
        <div className="section-container bg-light-green">
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
            <h2 className="h2">Om oss - Hov Hyttegend</h2>
            <p className="text">
              Hov Hyttegrend, ein liten og fredfull hyttegrend midt i hjartet av vakre Fjord-Noreg.
              Mellom fjell, fossar, fjordar og brear! Her får du eit perfekt utgangspunkt for å
              oppleve noko av det finaste naturen i Vestland har å by på. .
            </p>
            <p className="text">
              Vi ligg like ved det verna Gaularvassdraget, kjent for sine mange fossar, stryk og
              stille fjellvatn. Elva svingar seg gjennom landskapet og byr på både store
              naturopplevingar og gode fiskemoglegheiter.
            </p>
            <div>
              <button className="button-green">Mer om oss</button>
            </div>
          </div>
        </div>

        {/* section 4 */}
        <section className="section-container">
          <h2 className="h2">Aktivt friluftsliv – rett utanfor døra</h2>
          <p>
            Området rundt hyttene er ideelt for deg som ønskjer å vere aktiv ute i naturen. Her kan
            du:
          </p>
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

          <div className="w-full">
            <div className="flex justify-between border-b-3 border-secondary">
              <TreeGroup3 className="text-secondary" />
              <TreeGroup4 className="text-secondary" />
            </div>
            <div className="flex justify-between rotate-x-180">
              <TreeGroup3 className="text-secondary" />
              <TreeGroup4 className="text-secondary" />
            </div>
          </div>

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
        </section>

        {/* Section 9 */}
        <div className="section-container">
          <GoogleMaps />
        </div>
      </div>
    </>
  );
}
