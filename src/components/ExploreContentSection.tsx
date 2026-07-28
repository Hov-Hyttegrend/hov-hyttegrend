import type { ComponentType, SVGProps } from 'react';
import HeadingParagraphList from './HeadingParagraphList';
import IconButtonNavigation, { type IconButtonNavigationItem } from './IconButtonNavigation';

type ExploreContentSectionItem = {
  id?: string | number;
  title: string;
  text: string;
};

type ExploreContentSectionProps = {
  sectionId: string;
  sectionClassName: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconContainerClassName?: string;
  iconClassName?: string;
  title: string;
  description?: string;
  items: ExploreContentSectionItem[];
  navigationItems: IconButtonNavigationItem[];
};

export default function ExploreContentSection({
  sectionId,
  sectionClassName,
  icon: Icon,
  iconContainerClassName,
  iconClassName,
  title,
  description,
  items,
  navigationItems,
}: ExploreContentSectionProps) {
  return (
    <section
      id={sectionId}
      className={`flex flex-col gap-30 items-center justify-center min-h-screen w-full py-16 md:py-20 lg:py-30 xl:py-40 px-6 sm:px-14 md:px-28 xl:px-30 ${sectionClassName}`}
    >
      <div className="relative flex flex-col items-center 2xl:items-start w-full max-w-7xl 2xl:px-10">
        <span
          className={`2xl:absolute 2xl:left-0 2xl:top-4 2xl:-translate-x-[125%] inline-flex h-15 w-15 items-center justify-center rounded-sm bg-secondary rotate-45 ${iconContainerClassName}`}
        >
          <Icon aria-hidden="true" className={`h-7 text-white -rotate-45 ${iconClassName}`} />
        </span>
        <div className="flex flex-col gap-2 mt-6 text-center 2xl:text-left">
          <h2 className=" gap-8 text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold uppercase">
            {title}
          </h2>
          {description ? <p className="lg:text-lg xl:text-xl"> {description}</p> : null}
        </div>
      </div>

      <HeadingParagraphList
        items={items}
        containerClassName="flex flex-col gap-20 2xl:px-10 max-w-7xl"
        itemClassName="flex flex-col gap-5"
        headingClassName="text-lg xl:text-2xl font-bold"
        paragraphClassName="md:text-lg xl:text-xl"
      />

      <IconButtonNavigation items={navigationItems} />
    </section>
  );
}
