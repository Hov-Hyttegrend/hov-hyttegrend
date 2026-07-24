import type { ReactNode } from 'react';

interface HeroProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  children?: ReactNode;
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
  sectionClassName,
  imageContainerClassName,
  imageClassName,
  overlayClassName,
  titleClassName,
}: HeroProps) {
  return (
    <section
      className={`hero-section flex flex-col items-center justify-center 2xl:h-screen w-full ${sectionClassName ?? ''}`}
    >
      <div
        className={`image-container max-w-430 h-120  w-full overflow-hidden relative ${imageContainerClassName ?? ''}`}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          className={imageClassName ?? 'w-full h-full object-cover'}
        />
        <div
          className={`absolute z-10 top-1/2 left-1/2 w-full h-full text-center flex flex-col justify-center translate-x-[-50%] translate-y-[-50%] bg-black/30  ${overlayClassName ?? ''}`}
        >
          <h1
            className={
              titleClassName ??
              'text-white text-shadow-sm tracking-widest font-bold text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl'
            }
          >
            {title}
          </h1>
        </div>
      </div>
      {children}
    </section>
  );
}
