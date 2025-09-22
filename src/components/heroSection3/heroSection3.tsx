import React from 'react';

interface HeroSectionProps {
    backgroundImage: string;
    textImage: string;
    overlayText: string;
    mainHeading: string;
    subHeading?: string;
    description: string;
    buttonText: string;
    onButtonClick?: () => void;
}

const HeroSection3: React.FC = () => {

    const section: HeroSectionProps = {
        backgroundImage: "./section2.png",
        textImage: "./textImage2.png",
        overlayText: "The journey",
        mainHeading: "to Japan Build strong communication skills and cultural",
        description: "At Lanka Landy, we place great  emphasis on developing practical  communication skills. Throughout  the classes, we provide many  opportunities to practice speaking,  listening, reading and writing in  Japanese",
        buttonText: "VIEW INFORMATION",
        onButtonClick: () => console.log('Navigate to info'),
    };

    return (
        <div className="relative py-12 w-full overflow-hidden">
            {/* Background Image */}
            <div 
                className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${section.backgroundImage})` }}
            /> 
            
            <div className="relative z-10 flex items-center py-12 ">
                {/* Container for the layout */}
                <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center">
                        {/* Left Side - Big Text Image */}
                        <div className="flex-shrink-0">
                            <img 
                                src={section.textImage} 
                                alt="Text Logo" 
                                className="h-64 sm:h-80 lg:h-96 w-auto object-contain"
                            />
                        </div>
                        
                        {/* Right Side - Content (overlapping with text image) */}
                        <div className="flex-1 -ml-80 sm:-ml-96 lg:-ml-96 xl:-ml-96 2xl:-ml-96 pl-1 sm:pl-2 lg:pl-3">
                            {/* Small Overlay Text */}
                            <div className="text-white text-4xl sm:text-4xl font-medium mb-4 tracking-wider uppercase">
                                {section.overlayText}
                            </div>
                            
                            {/* Main Heading */}
                            <div className="mb-6">
                                <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase">
                                    {section.mainHeading}
                                </h1>
                                {section.subHeading && (
                                    <h2 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-2 uppercase">
                                        {section.subHeading}
                                    </h2>
                                )}
                            </div>
                            
                            {/* Description */}
                            <p className="text-white/90 text-base sm:text-lg mb-8 leading-relaxed max-w-md">
                                {section.description}
                            </p>
                            
                            {/* Button */}
                            <button 
                                onClick={section.onButtonClick}
                                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105"
                            >
                                {section.buttonText}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection3;
