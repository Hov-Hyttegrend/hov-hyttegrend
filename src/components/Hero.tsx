import type { ReactNode } from 'react';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  children?: ReactNode;
  backgroundDecoration?: ReactNode;
  sectionClassName?: string;
  imageContainerClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
  titleClassName?: string;
}

export default function Hero({
  imageSrc,
  imageAlt,
  title,
  children,
  backgroundDecoration,
  sectionClassName,
  imageContainerClassName,
  imageClassName,
  overlayClassName,
  titleClassName,
}: HeroProps) {
  return (
    <section
      className={`hero-section relative overflow-hidden flex flex-col gap-16 items-center justify-center h-screen w-full md:px-8 pt-14 md:pt-32 lg:pt-34.5 2xl:pt-55 pb-16 ${sectionClassName ?? ''}`}
    >
      {backgroundDecoration}
      <div
        className={`image-container z-10 max-w-430 h-full lg:h-120 w-full overflow-hidden relative ${imageContainerClassName ?? ''}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={
            imageClassName ?? 'lg:animate-pan-vertical w-full h-full lg:h-[200%] object-cover'
          }
        />
        <div
          className={`absolute z-10 top-1/2 left-1/2 w-full h-full text-center flex flex-col justify-center translate-x-[-50%] translate-y-[-50%] bg-black/30  ${overlayClassName ?? ''}`}
        >
          <h1
            className={
              titleClassName ??
              'text-white text-shadow-sm tracking-widest font-bold text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl p-6'
            }
          >
            {title}
          </h1>
        </div>
      </div>
      {children ? <div className="relative z-10 w-full">{children}</div> : null}
    </section>
  );
}
