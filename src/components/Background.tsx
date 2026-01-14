interface BackgroundProps {
  imageUrl: string;
  imageAlt: string;
}

const Background: React.FC<BackgroundProps> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="fixed inset-0 -z-10 flex flex-col justify-center w-full min-h-screen">
      <img src={imageUrl} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0"></div>
    </div>
  );
};

export default Background;
