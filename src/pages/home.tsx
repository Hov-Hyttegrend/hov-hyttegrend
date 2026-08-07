import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import renderTextWithParagraphs from '../utils/renderTextWithParagraphs';
import GoogleMaps from '../components/map/GoogleMaps';
import ImageTextSection from '../components/ImageTextSection';

import HOV_1 from '../assets/images/hov1.webp';
import HOV_2 from '../assets/images/hov2.jpg';
import HOV_5 from '../assets/images/hov5.jpg';
import HOV_6 from '../assets/images/hov6.jpg';
import HOV_7 from '../assets/images/hov7.webp';
import HOV_8 from '../assets/images/hov-vann-5.jpg';

import Vector3 from '../assets/svg/Vector3.svg';
import Trees3 from '../assets/svg/3-trees.svg?react';
import GroupTrees1 from '../assets/svg/GroupTrees1.svg?react';
import GroupTrees2 from '../assets/svg/GroupTrees2.svg?react';

import FishingIcon from '../assets/svg/fishing.svg?react';
import HikeIcon from '../assets/svg/hike.svg?react';
import MountainHikeIcon from '../assets/svg/mountain-hike.svg?react';
import FrisbeeGolfIcon from '../assets/svg/frisbeegolf.svg?react';
import SwimmingIcon from '../assets/svg/swimming.svg?react';
import FoodIcon from '../assets/svg/food.svg?react';
import ShopIcon from '../assets/svg/shop.svg?react';
import BinocularsIcon from '../assets/svg/binoculars.svg?react';
import Background from '../components/Background';
import BookingButton from '../components/BookingButton';

export default function Home() {
  const { t } = useTranslation(['translation', 'home']);
  const [currentHeaderImageIndex, setCurrentHeaderImageIndex] = useState(0);

  const headerSlides = [
    {
      src: HOV_1,
      alt: 'Vannkanten ved Hov Hyttegrend med naust og skog',
    },
    {
      src: HOV_8,
      alt: 'Vann omgitt av skog og fjell med en rød robåt og grønn kano i forgrunnen',
    },
    {
      src: HOV_7,
      alt: 'Elv som renner ut i innsjø omgitt av fjell',
    },
  ];

  useEffect(() => {
    const slideInterval = window.setInterval(() => {
      setCurrentHeaderImageIndex((prevIndex) => (prevIndex + 1) % headerSlides.length);
    }, 8000);

    return () => {
      window.clearInterval(slideInterval);
    };
  }, [headerSlides.length]);

  return (
    <>
      <Background imageUrl={HOV_7} imageAlt="Elv som renner ut i innsjø omgitt av fjell" />
      {/* Header */}
      <header className="flex h-screen w-full">
        <div className="relative w-full h-full">
          {headerSlides.map((slide, index) => (
            <img
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                currentHeaderImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-[#00000035]"></div>

          <div className="absolute z-10 top-1/2 left-1/2 w-full translate-x-[-50%] translate-y-[-50%] text-center text-white gap-10 lg:gap-15 2xl:gap-20 flex flex-col items-center px-8">
            <div className="flex flex-col gap-5">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl text-shadow-sm tracking-widest font-bold">
                {t('welcome.title')}
              </h1>
              <p className="text-base sm:text-xl lg:text-3xl text-shadow-sm">
                {t('welcome.description')}
              </p>
            </div>
            <BookingButton className="button-yellow" />
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
          <section className="flex flex-col max-w-200 2xl:max-w-250 lg:p-10 gap-7 lg:gap-12">
            <h2 className="font-secondary text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold uppercase text-secondary">
              {t('home:homePage.section_1.title')}
            </h2>
            <div className="text flex flex-col gap-5 lg:gap-10">
              {renderTextWithParagraphs(t('home:homePage.section_1.text'))}
            </div>

            <div className="w-full flex justify-center">
              <Trees3 className="text-secondary max-w-28 md:max-w-40 lg:max-w-48 2xl:max-w-64" />
            </div>
          </section>
        </div>

        {/* Section 2 */}
        <div className="section-container bg-light-green" id="about">
          <ImageTextSection
            imageSrc={HOV_2}
            imageAlt="Mann og hund går langs en elv i mellom skog og fjell"
            title={t('home:homePage.section_2.title')}
            titleClassName="h2"
            text={t('home:homePage.section_2.text')}
            textClassName="text flex flex-col gap-5 md:gap-8 xl:gap-10"
            textBoxClassName="flex flex-col gap-5 lg:gap-10 w-full h-full"
            buttonClassName="button-green"
            className="my-10"
          />
        </div>

        {/* section 3 and 4 */}
        <div className="bg-primary">
          <section className="w-full flex flex-col justify-center items-center pt-20 lg:pt-40 px-6 sm:px-10 md:px-20 lg:px-20">
            <h2 className="h2 pb-5">{t('home:homePage.section_3.title')}</h2>
            <p className="text pb-8">{t('home:homePage.section_3.text')}</p>
            <Link
              to="/activities"
              className="text-sm lg:text-lg mb-10 text-black hover:font-bold hover:text-secondary"
            >
              {t('home:homePage.section_3.message')}
            </Link>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-5 w-full xl:max-w-4xl ">
              <Link
                to="/activities#hiking"
                className="icon-button sm:col-span-2"
                aria-label="Hiking activities"
              >
                <HikeIcon className="text-primary icon-home" />
              </Link>

              <Link
                to="/activities#fishing"
                className="icon-button sm:col-span-2"
                aria-label="Fishing activities"
              >
                <FishingIcon className="text-primary icon-home" />
              </Link>

              <Link
                to="/activities#mountain-hiking"
                className="icon-button sm:col-span-2 col-span-2"
                aria-label="Mountain hiking activities"
              >
                <MountainHikeIcon className="text-primary icon-home" />
              </Link>

              <Link
                to="/activities#swimming"
                className="icon-button"
                aria-label="Swimming activities"
              >
                <SwimmingIcon className="text-primary icon-home" />
              </Link>

              <Link
                to="/activities#frisbee-golf"
                className="icon-button"
                aria-label="Frisbee golf activities"
              >
                <FrisbeeGolfIcon className="text-primary icon-home" />
              </Link>
            </div>
          </section>

          <div className="w-full flex justify-center py-20 sm:py-25 md:py-30 lg:py-40 px-6 sm:px-10 md:px-20 bg-primary">
            <div className="w-full ">
              <div className="flex justify-between border-b-3 border-secondary">
                <GroupTrees1 className="text-secondary h-9 sm:h-12 md:h-14 lg:h-20 2xl:h-32 pl-1 md:pl-6" />
                <GroupTrees2 className="text-secondary h-9 sm:h-12 md:h-14 lg:h-20 2xl:h-32 pr-1 md:pr-6" />
              </div>
              <div className="flex justify-between rotate-x-180">
                <GroupTrees1 className="text-secondary h-9 sm:h-12 md:h-14 lg:h-20 2xl:h-32 pl-1 md:pl-6" />
                <GroupTrees2 className="text-secondary h-9 sm:h-12 md:h-14 lg:h-20 2xl:h-32 pr-1 md:pr-6" />
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <section className="relative w-full flex flex-col justify-center items-center pb-30 lg:pb-60 xl:pb-80 px-6 sm:px-10 md:px-20 lg:px-20  ">
            <h2 className="h2 pb-5">{t('home:homePage.section_4.title')}</h2>
            <p className="text pb-8">{t('home:homePage.section_4.text')}</p>
            <Link
              to="/explore"
              className="text-sm lg:text-lg mb-10 text-black hover:font-bold hover:text-secondary"
            >
              {t('home:homePage.section_4.message')}
            </Link>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full xl:max-w-4xl">
              <Link
                to="/explore#sightseeing"
                className="icon-button"
                aria-label="Sightseeing activities"
              >
                <BinocularsIcon className="text-primary icon-home" />
              </Link>
              <Link to="/explore#food" className="icon-button" aria-label="Food activities">
                <FoodIcon className="text-primary icon-home" />
              </Link>
              <Link to="/explore#shopping" className="icon-button" aria-label="Shopping activities">
                <ShopIcon className="text-primary icon-home" />
              </Link>
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
        <div className="section-container  bg-primary">
          <ImageTextSection
            imageSrc={HOV_5}
            imageAlt="Likholefossen med gangbro og stryk"
            title={t('home:homePage.section_5.title')}
            titleClassName="h2"
            text={t('home:homePage.section_5.text')}
            textClassName="text flex flex-col gap-5 md:gap-8 xl:gap-10"
            textBoxClassName="flex flex-col gap-5 lg:gap-10 h-full"
          />
        </div>

        {/* Section 7 */}
        <div className="section-container bg-light-green">
          <ImageTextSection
            imageSrc={HOV_6}
            imageAlt="Vatn omgitt av skog og fjell"
            title={t('home:homePage.section_6.title')}
            titleClassName="h2"
            text={t('home:homePage.section_6.text')}
            textClassName="text flex flex-col gap-5 md:gap-8 xl:gap-10"
            textBoxClassName="flex flex-col gap-5 lg:gap-10 w-full h-full"
            className="lg:flex-row-reverse"
            listItems={[
              t('home:homePage.section_6.listItem1'),
              t('home:homePage.section_6.listItem2'),
              t('home:homePage.section_6.listItem3'),
              t('home:homePage.section_6.listItem4'),
              t('home:homePage.section_6.listItem5'),
              t('home:homePage.section_6.listItem6'),
            ]}
          />
        </div>

        {/* Section 9 - Map */}
        <div
          className="flex flex-col justify-center items-center py-16 md:py-30 lg:py-40 xl:pb-60 xl:pt-80 px-6 sm:px-10 md:px-20 lg:px-20 bg-primary"
          id="contact"
        >
          <GoogleMaps />
        </div>
      </div>
    </>
  );
}
