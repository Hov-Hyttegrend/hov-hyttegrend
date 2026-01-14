interface ImageTextSectionProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  text: string;
  buttonText?: string;
}

export default function ImageTextSection({
  imageSrc,
  imageAlt,
  title,
  text,
  buttonText,
}: ImageTextSectionProps) {
  return (
    <div className="flex flex-col lg:flex-row max-w-7xl items-center gap-20 md:gap-28 lg:gap-32  md:mx-11">
      <div className="relative max-w-64 max-h-64 sm:max-w-100 sm:max-h-100 w-full h-full aspect-square flex items-center justify-center">
        <div className="absolute aspect-square rotate-45 flex items-center justify-center bg-secondary p-1 mx-5">
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

        <div>
          <button className="button-green">{buttonText}</button>
        </div>
      </div>
    </div>
  );
}
