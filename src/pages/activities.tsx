import { useTranslation } from 'react-i18next';
import renderTextWithParagraphs from '../utils/renderTextWithParagraphs';
import Hero from '../components/Hero';

import HOV_1 from '../assets/images/hov-drone3.webp';
import HOV_2 from '../assets/images/hov-foss1.jpg';
import HOV_3 from '../assets/images/hov-foss2.jpg';
import HOV_4 from '../assets/images/hov-fiske-1.webp';
import HOV_5 from '../assets/images/hov-vann-1.webp';

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
        imageAlt="Oversiktsbilde av dalføre med elv, fossefall og fjell i naturskjønne omgivelser."
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
        imageAlt1="Hov 1"
        imageAlt2="Hov 1"
        icon={HikeIcon}
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
        imageAlt1="Hov 1"
        imageAlt2="Hov 1"
        icon={FishingIcon}
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
        imageSrc1={HOV_4}
        imageSrc2={HOV_3}
        imageAlt1="Hov 1"
        imageAlt2="Hov 1"
        icon={MountainHikeIcon}
      />
    </div>
  );
}
