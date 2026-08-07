import { useTranslation } from 'react-i18next';
import renderTextWithParagraphs from '../utils/renderTextWithParagraphs';
import Hero from '../components/Hero';

import HOV_1 from '../assets/images/hov-drone3.webp';
import HOV_2 from '../assets/images/hov-foss1.jpg';
import HOV_3 from '../assets/images/hov-foss2.jpg';
import HOV_4 from '../assets/images/hov-fiske-1.webp';
import HOV_5 from '../assets/images/hov-vann-1.webp';
import HOV_6 from '../assets/images/hov-vann-2.webp';
import HOV_7 from '../assets/images/hov-utsikt-3.jpg';
import HOV_8 from '../assets/images/hov-utsikt-2.jpg';

import HikeIcon from '../assets/svg/hike.svg?react';
import FishingIcon from '../assets/svg/fishing.svg?react';
import MountainHikeIcon from '../assets/svg/mountain-hike.svg?react';
import SwimmingIcon from '../assets/svg/swimming.svg?react';
import FrisbeeGolfIcon from '../assets/svg/frisbeegolf.svg?react';

import type { IconButtonNavigationItem } from '../components/IconButtonNavigation';
import IconButtonNavigation from '../components/IconButtonNavigation';
import DecorativeFloatyTrees from '../components/DecorativeFloatyTrees';
import ActivitiesContentSection from '../components/ActivitiesContentSection';

export default function Activities() {
  const { t } = useTranslation(['translation', 'activities']);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  const createNavigationItems = (
    activeSection: 'all' | 'hiking' | 'fishing' | 'mountain-hiking' | 'swimming' | 'frisbee-golf',
  ): IconButtonNavigationItem[] => {
    const baseItems = [
      {
        id: 'hiking',
        icon: HikeIcon,
        ariaLabel: 'Hiking',
      },
      {
        id: 'fishing',
        icon: FishingIcon,
        ariaLabel: 'Fishing',
      },
      {
        id: 'mountain-hiking',
        icon: MountainHikeIcon,
        ariaLabel: 'Mountain Hiking',
      },
      {
        id: 'swimming',
        icon: SwimmingIcon,
        ariaLabel: 'Swimming',
      },
      {
        id: 'frisbee-golf',
        icon: FrisbeeGolfIcon,
        ariaLabel: 'Frisbee Golf',
      },
    ] as const;

    return baseItems.map((item) => ({
      ...item,
      isActive: activeSection === 'all' || item.id === activeSection,
      onClick: () => scrollToSection(item.id),
    }));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <Hero
        imageSrc={HOV_1}
        imageAlt="Dronebilde av Hov Hyttegrend med elv og fjell"
        title={t('activities:activitiesPage.title')}
        backgroundDecoration={<DecorativeFloatyTrees className="z-0" />}
        sectionClassName="bg-primary "
      >
        <div className="flex justify-center px-6 w-full">
          <IconButtonNavigation
            items={createNavigationItems('all')}
            buttonContainerClassName="grid-cols-3 md:grid-cols-5 max-w-280"
          />
        </div>
      </Hero>

      <ActivitiesContentSection
        id="hiking"
        sectionClassName="bg-light-green"
        title={t('activities:activitiesPage.fossestien.title')}
        miniTitle={t('activities:activitiesPage.fossestien.miniTitle')}
        textPart1={renderTextWithParagraphs(t('activities:activitiesPage.fossestien.text_part_1'))}
        textPart2={renderTextWithParagraphs(t('activities:activitiesPage.fossestien.text_part_2'))}
        imageSrc1={HOV_2}
        imageSrc2={HOV_3}
        imageAlt1="Fossefall og stryk i Gaularvassdraget"
        imageAlt2="Turstopp ved elva med utsikt mot fossen"
        icon={HikeIcon}
        navigationItems={createNavigationItems('hiking')}
      />

      <ActivitiesContentSection
        id="fishing"
        sectionClassName="bg-primary"
        backgroundDecoration={<DecorativeFloatyTrees className="z-0" />}
        title={t('activities:activitiesPage.fishing.title')}
        miniTitle={t('activities:activitiesPage.fishing.miniTitle')}
        textPart1={renderTextWithParagraphs(t('activities:activitiesPage.fishing.text_part_1'))}
        textPart2={renderTextWithParagraphs(t('activities:activitiesPage.fishing.text_part_2'))}
        imageSrc1={HOV_4}
        imageSrc2={HOV_5}
        imageAlt1="Fisker ved stille fjellvatn"
        imageAlt2="Stille fjellvatn med speilblank overflate"
        icon={FishingIcon}
        navigationItems={createNavigationItems('fishing')}
      />

      <ActivitiesContentSection
        id="mountain-hiking"
        sectionClassName="bg-light-green"
        title={t('activities:activitiesPage.mountainHike.title')}
        miniTitle={t('activities:activitiesPage.mountainHike.miniTitle')}
        textPart1={renderTextWithParagraphs(
          t('activities:activitiesPage.mountainHike.text_part_1'),
        )}
        textPart2={renderTextWithParagraphs(
          t('activities:activitiesPage.mountainHike.text_part_2'),
        )}
        imageSrc1={HOV_7}
        imageSrc2={HOV_8}
        imageAlt1="Fjellutsikt med dal og fjell i bakgrunnen"
        imageAlt2="Utsikt over vatn og fjell"
        icon={MountainHikeIcon}
        navigationItems={createNavigationItems('mountain-hiking')}
      />

      <ActivitiesContentSection
        id="swimming"
        sectionClassName="bg-primary"
        backgroundDecoration={<DecorativeFloatyTrees className="z-0" />}
        title={t('activities:activitiesPage.swimming.title')}
        miniTitle={t('activities:activitiesPage.swimming.miniTitle')}
        textPart1={renderTextWithParagraphs(t('activities:activitiesPage.swimming.text_part_1'))}
        imageSrc1={HOV_6}
        imageAlt1="Fjellvatn i kveldssol med skog og strand"
        icon={SwimmingIcon}
        navigationItems={createNavigationItems('swimming')}
      />

      <ActivitiesContentSection
        id="frisbee-golf"
        sectionClassName="bg-light-green pb-300"
        title={t('activities:activitiesPage.frisbeeGolf.title')}
        miniTitle={t('activities:activitiesPage.frisbeeGolf.miniTitle')}
        textPart1={renderTextWithParagraphs(t('activities:activitiesPage.frisbeeGolf.text_part_1'))}
        icon={FrisbeeGolfIcon}
        navigationItems={createNavigationItems('frisbee-golf')}
        buttonContainerClass="mb-10 md:mb-20 lg:mb-30 xl:mb-40"
      />
    </div>
  );
}
