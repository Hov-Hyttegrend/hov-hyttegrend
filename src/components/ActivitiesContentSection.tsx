import type { ComponentType, ReactNode, SVGProps } from 'react';
import IconButtonNavigation, { type IconButtonNavigationItem } from './IconButtonNavigation';

export type ActivitiesContentProps = {
  id: string;
  title: ReactNode;
  miniTitle?: ReactNode;
  textPart1: ReactNode;
  textPart2?: ReactNode;
  imageSrc1?: string;
  imageSrc2?: string;
  imageAlt1?: string;
  imageAlt2?: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  iconClassName?: string;
  sectionClassName?: string;
  contentClassName?: string;
  imageContainerClassName?: string;
  textClassName?: string;
  navigationItems: IconButtonNavigationItem[];
  backgroundDecoration?: ReactNode;
  buttonContainerClass?: string;
};

export default function ActivitiesContentSection({
  id,
  title,
  miniTitle,
  textPart1,
  textPart2,
  imageSrc1,
  imageSrc2,
  imageAlt1,
  imageAlt2,
  icon: Icon,
  iconClassName,
  sectionClassName,
  contentClassName,
  imageContainerClassName,
  textClassName,
  navigationItems,
  backgroundDecoration,
  buttonContainerClass,
}: ActivitiesContentProps) {
  return (
    <section
      className={`relative overflow-hidden activities-explore-sections ${sectionClassName}`}
      id={id}
    >
      {backgroundDecoration}
      <div className="relative z-10 flex flex-col items-center 2xl:items-start w-full max-w-430 2xl:px-10">
        <span className="2xl:absolute 2xl:left-0 2xl:top-4 2xl:-translate-x-[125%] inline-flex h-15 w-15 items-center justify-center rounded-sm bg-secondary rotate-45 mb-5 mt-10 2xl:mt-0">
          <Icon aria-hidden="true" className={`h-7 text-white -rotate-45 ${iconClassName}`} />
        </span>
        <div className="flex flex-col gap-2 mt-4 text-center 2xl:text-left">
          <h2 className="gap-8 text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-bold uppercase">
            {title}
          </h2>
          {miniTitle ? <h3 className="font-semibold lg:text-lg xl:text-2xl">{miniTitle}</h3> : null}
        </div>
      </div>

      <div
        className={`z-10 flex flex-col gap-10 lg:gap-30  lg:text-lg xl:text-xl max-w-430 ${contentClassName ?? ''}`}
      >
        <div className="text-image-container flex w-full flex-col-reverse items-center lg:items-start 2xl:items-center gap-10 xl:gap-10 lg:flex-row 2xl:px-10">
          <div
            className={`flex flex-col h-full justify-center items-center flex-1 gap-5 lg:gap-14 ${textClassName ?? ''}`}
          >
            {textPart1}
          </div>
          {imageSrc1 ? (
            <div
              className={`h-80 w-full overflow-hidden lg:h-100 lg:w-100 xl:h-137.5 xl:w-137.5 bg-secondary p-1 ${imageContainerClassName ?? ''}`}
            >
              <img src={imageSrc1} alt={imageAlt1 ?? ''} className="w-full h-full object-cover" />
            </div>
          ) : null}
        </div>

        {textPart2 || imageSrc2 ? (
          <div className="text-image-container flex w-full flex-col items-center lg:items-start 2xl:items-center gap-10 xl:gap-10 lg:flex-row 2xl:px-10">
            {imageSrc2 ? (
              <div
                className={`h-80 w-full overflow-hidden lg:h-100 lg:w-100 xl:h-137.5 xl:w-137.5 bg-secondary p-1 ${imageContainerClassName ?? ''}`}
              >
                <img
                  src={imageSrc2}
                  alt={imageAlt2 ?? imageAlt1 ?? ''}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}
            {textPart2 ? (
              <div className={`flex flex-col flex-1 gap-5 lg:gap-14 ${textClassName ?? ''}`}>
                {textPart2}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      <IconButtonNavigation
        items={navigationItems}
        buttonContainerClassName={`grid-cols-3 md:grid-cols-5 max-w-280 z-10 ${buttonContainerClass}`}
      />
    </section>
  );
}
