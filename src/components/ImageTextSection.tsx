interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string | React.ReactNode[];
  buttonText?: string;
  className?: string;
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  text,
  buttonText,
  className,
}: ImageTextSectionProps) {
  return (
    <div
      className={`flex flex-col lg:flex-row max-w-7xl w-full items-center gap-20 md:gap-28 lg:gap-32 md:mx-11 ${className}`}
    >
      <div className="relative max-w-80 max-h-80 sm:max-w-100 sm:max-h-100 w-full h-full aspect-square flex items-center justify-center">
        <div className="absolute aspect-square rotate-45 flex items-center justify-center bg-secondary p-1 mx-10">
          <div className="w-full h-full overflow-hidden">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover scale-150 -rotate-45"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 lg:gap-10 lg:justify-center  w-full h-full ">
        <h2 className="h2">{title}</h2>
        <div className="text flex flex-col gap-10">{text}</div>

        {buttonText && (
          <div>
            <button className="button-green">{buttonText}</button>
          </div>
        )}
      </div>
    </div>
  );
}
