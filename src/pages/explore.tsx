import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import ExploreContentSection from '../components/ExploreContentSection';
import IconButtonNavigation, {
  type IconButtonNavigationItem,
} from '../components/IconButtonNavigation';
import DecorativeFloatyTrees from '../components/DecorativeFloatyTrees';
import HOV_1 from '../assets/images/hov-drone3.webp';

import FoodIcon from '../assets/svg/food.svg?react';
import ShopIcon from '../assets/svg/shop.svg?react';
import BinocularsIcon from '../assets/svg/binoculars.svg?react';

export default function Explore() {
  const { t } = useTranslation(['translation', 'explore']);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    section.scrollIntoView({ behavior: 'smooth' });
    window.history.replaceState(null, '', `#${sectionId}`);
  };

  const createNavigationItems = (
    activeSection: 'all' | 'sightseeing' | 'shopping' | 'food',
  ): IconButtonNavigationItem[] => {
    const baseItems = [
      {
        id: 'sightseeing',
        icon: BinocularsIcon,
        ariaLabel: 'Sightseeing',
      },
      {
        id: 'shopping',
        icon: ShopIcon,
        ariaLabel: 'Shopping',
      },
      {
        id: 'food',
        icon: FoodIcon,
        ariaLabel: 'Food',
      },
    ] as const;

    return baseItems.map((item) => ({
      ...item,
      isActive: activeSection === 'all' || item.id === activeSection,
      onClick: () => scrollToSection(item.id),
    }));
  };

  const createTextItems = (basePath: string, count: number) =>
    Array.from({ length: count }, (_, index) => {
      const itemNumber = index + 1;

      return {
        id: itemNumber,
        title: t(`explore:${basePath}.${itemNumber}.title`),
        text: t(`explore:${basePath}.${itemNumber}.text`),
      };
    });

  const sightseeingItems = createTextItems('explorePage.sightseeing', 8);
  const shoppingItems = createTextItems('explorePage.shopping', 9);
  const foodItems = createTextItems('explorePage.food', 5);

  return (
    <div className="flex flex-col items-center w-full">
      <Hero
        imageSrc={HOV_1}
        imageAlt="Oversiktsbilde av dalføre med elv, fossefall og fjell i naturskjønne omgivelser."
        title={t('explore:explorePage.title')}
        backgroundDecoration={<DecorativeFloatyTrees className="z-0" />}
        sectionClassName="bg-primary md:px-8 pt-14 md:pt-32 lg:pt-34.5 2xl:pt-55 pb-16 md:pb-20 lg:pb-30 2xl:pb-16"
        imageContainerClassName=""
        imageClassName="animate-pan-vertical h-[120%] lg:h-[250%]"
      >
        <div className="flex justify-center px-6 w-full">
          <IconButtonNavigation items={createNavigationItems('all')} />
        </div>
      </Hero>

      {/* Sightseeing */}
      <ExploreContentSection
        sectionId="sightseeing"
        sectionClassName="bg-light-green "
        icon={BinocularsIcon}
        title={t('explore:explorePage.sightseeing.title')}
        items={sightseeingItems}
        navigationItems={createNavigationItems('sightseeing')}
      />

      {/* Shopping */}
      <ExploreContentSection
        sectionId="shopping"
        sectionClassName="bg-primary"
        backgroundDecoration={<DecorativeFloatyTrees className="z-0" />}
        icon={ShopIcon}
        title={t('explore:explorePage.shopping.title')}
        description={t('explore:explorePage.shopping.description')}
        items={shoppingItems}
        navigationItems={createNavigationItems('shopping')}
      />

      {/* Food */}
      <ExploreContentSection
        sectionId="food"
        sectionClassName="bg-light-green"
        icon={FoodIcon}
        title={t('explore:explorePage.food.title')}
        description={t('explore:explorePage.food.description')}
        items={foodItems}
        navigationItems={createNavigationItems('food')}
      />
    </div>
  );
}
