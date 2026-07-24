import { useTranslation } from 'react-i18next';
import renderTextWithParagraphs from '../utils/renderTextWithParagraphs';
import Hero from '../components/Hero';

import HOV_1 from '../assets/images/hov-drone3.webp';
import HOV_2 from '../assets/images/hov-foss1.jpg';
import HOV_3 from '../assets/images/hov-foss2.jpg';

import HikeIcon from '../assets/svg/hike.svg?react';
import FishingIcon from '../assets/svg/fishing.svg?react';
import MountainHikeIcon from '../assets/svg/mountain-hike.svg?react';
import SwimmingIcon from '../assets/svg/swimming.svg?react';
import FrisbeeGolfIcon from '../assets/svg/frisbeegolf.svg?react';

export default function Activities() {
  const { t } = useTranslation(['translation', 'activities']);

  return (
    <div className="flex flex-col items-center w-full">
      <Hero
        imageSrc={HOV_1}
        imageAlt="Oversiktsbilde av dalføre med elv, fossefall og fjell i naturskjønne omgivelser."
        title={t('activities:activitiesPage.title')}
        sectionClassName="bg-primary md:px-8 pt-14 md:pt-32 lg:pt-34.5 2xl:pt-55 pb-16"
        imageContainerClassName=""
        imageClassName="animate-pan-vertical h-[120%] lg:h-[250%]"
        // imageClassName="animate-pan-vertical h-[200%]"
      >
        <div className="buttons-container grid grid-cols-3 md:grid-cols-5 gap-5 mt-10 max-w-280 w-full px-6">
          <button className="h-18 w-full bg-secondary flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80">
            <HikeIcon className="h-10 w-10 text-white" />
          </button>
          <button className="h-18 w-full bg-secondary flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80">
            <FishingIcon className="h-10 w-10 text-white" />
          </button>
          <button className="h-18 w-full bg-secondary flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80">
            <MountainHikeIcon className="h-10 w-10 text-white" />
          </button>
          <button className="h-18 w-full bg-secondary flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80">
            <SwimmingIcon className="h-10 w-10 text-white" />
          </button>
          <button className="h-18 w-full bg-secondary flex items-center justify-center rounded-sm hover:cursor-pointer hover:bg-secondary/80">
            <FrisbeeGolfIcon className="h-10 w-10 text-white" />
          </button>
        </div>
      </Hero>

      <section className="activities-section flex flex-col items-center justify-center min-h-screen w-full bg-light-green py-16   px-6 sm:px-14 md:px-28 lg:px-10 xl:px-30">
        <div className="relative flex flex-col items-center 2xl:items-start w-full max-w-430 2xl:px-10">
          <span className="2xl:absolute 2xl:left-0 2xl:top-4 2xl:-translate-x-[125%] inline-flex h-10 w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 items-center justify-center rounded-sm bg-secondary rotate-45">
            <HikeIcon aria-hidden="true" className="h-5 md:h-7 lg:h-8 text-white -rotate-45" />
          </span>
          <div className="flex flex-col gap-2 mt-4 text-center 2xl:text-left">
            <h2 className=" gap-8 text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-bold uppercase">
              {t('activities:activitiesPage.fossestien.title')}
            </h2>
            <h3 className="font-semibold lg:text-lg xl:text-2xl">
              {' '}
              {t('activities:activitiesPage.fossestien.miniTitle')}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-30 mt-10 lg:text-lg xl:text-2xl max-w-430">
          <div className="text-image-container flex w-full flex-col-reverse items-center gap-10 xl:gap-10 lg:flex-row 2xl:px-10">
            <div className="flex flex-col h-full justify-center items-center flex-1 gap-5 lg:gap-14 py-6">
              {renderTextWithParagraphs(t('activities:activitiesPage.fossestien.text_part_1'))}
            </div>
            <div className="h-80 w-full overflow-hidden lg:h-100 lg:w-100 xl:h-137.5 xl:w-137.5 bg-secondary p-1">
              <img src={HOV_2} alt="Hov 1" className="w-full h-full object-cover"></img>
            </div>
          </div>
          <div className="text-image-container flex w-full flex-col items-center gap-10 xl:gap-10 lg:flex-row 2xl:px-10">
            <div className="h-80 w-full overflow-hidden lg:h-100 lg:w-100 xl:h-137.5 xl:w-137.5 bg-secondary p-1">
              <img src={HOV_3} alt="Hov 1" className="w-full h-full object-cover"></img>
            </div>
            <div className="flex flex-col flex-1 gap-5 lg:gap-14">
              {renderTextWithParagraphs(t('activities:activitiesPage.fossestien.text_part_2'))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="activities-section flex flex-col items-center justify-center min-h-screen w-full bg-light-green py-16   px-6 sm:px-14 md:px-28 lg:px-10 xl:px-30">
        <div className="relative flex flex-col items-center lg:items-start w-full max-w-430 xl:px-10">
          <span className="xl:absolute xl:left-0 xl:top-4 xl:-translate-x-[125%] inline-flex h-10 w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 items-center justify-center rounded-sm bg-secondary rotate-45">
            <HikeIcon aria-hidden="true" className="h-5 md:h-7 lg:h-8 text-white -rotate-45" />
          </span>
          <div className="flex flex-col gap-2 mt-4">
            <h2 className="flex flex-col lg:flex-row items-center gap-8 text-xl md:text-2xl lg:text-3xl font-bold uppercase">
              {t('activities:activitiesPage.fossestien.title')}
            </h2>
            <h3 className="font-semibold">
              {' '}
              {t('activities:activitiesPage.fossestien.miniTitle')}
            </h3>
          </div>
        </div>
        <div className="flex flex-col gap-10 lg:gap-30 mt-10 lg:text-lg xl:text-2xl max-w-430">
          <div className="text-image-container flex w-full flex-col-reverse items-center gap-10 xl:gap-10 lg:flex-row xl:px-10">
            <div className="flex flex-col h-full justify-center items-center flex-1 gap-5 lg:gap-14 py-6">
              {renderTextWithParagraphs(t('activities:activitiesPage.fossestien.text_part_1'))}
            </div>
            <div className="h-80 w-full overflow-hidden lg:h-100 lg:w-100 xl:h-137.5 xl:w-137.5 bg-secondary p-1">
              <img src={HOV_2} alt="Hov 1" className="w-full h-full object-cover"></img>
            </div>
          </div>
          <div className="text-image-container flex w-full flex-col items-center gap-10 xl:gap-10 lg:flex-row xl:px-10">
            <div className="h-80 w-full overflow-hidden lg:h-100 lg:w-100 xl:h-137.5 xl:w-137.5 bg-secondary p-1">
              <img src={HOV_3} alt="Hov 1" className="w-full h-full object-cover"></img>
            </div>
            <div className="flex flex-col flex-1 gap-5 lg:gap-14">
              {renderTextWithParagraphs(t('activities:activitiesPage.fossestien.text_part_2'))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
