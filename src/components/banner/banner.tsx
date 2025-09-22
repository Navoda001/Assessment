import React from 'react';

interface NewsBannerProps {
  bgFrom: string;
  bgTo: string;  
  iconSrc: string;
  title: string;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
}

const NewsBanner: React.FC<NewsBannerProps> = ({
  bgFrom,
  bgTo,
  iconSrc,
  title,
  subtitle,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className={`bg-gradient-to-r ${bgFrom} ${bgTo} z-20 py-5 px-4 sm:px-32`}>
      
      {/* Mobile View */}
      <div className="block sm:hidden text-center px-4 py-6">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <img className='w-10 h-10' src={iconSrc} alt="icon" />
        </div>

        <div className="text-white mb-4">
          <h3 className="font-semibold text-lg mb-1 uppercase">{title}</h3>
          <p className="text-sm opacity-90">{subtitle}</p>
        </div>

        <button
          onClick={onButtonClick}
          className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm font-medium"
        >
          {buttonText}
        </button>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex items-center justify-between px-6 md:px-8 sm:py-4">
        <div className="flex items-center space-x-8">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
            <img className='w-10 h-10' src={iconSrc} alt="icon" />
          </div>

          <div className="text-white">
            <h3 className="font-semibold text-base md:text-xl mb-2">{title}</h3>
            <p className="text-sm md:text-md opacity-90">{subtitle}</p>
          </div>
        </div>

        <button
          onClick={onButtonClick}
          className="border border-white text-white px-4 py-2 rounded-full transition-all hover:scale-105 duration-300 text-sm font-medium"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default NewsBanner;
