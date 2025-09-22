import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
    id: number;
    title: string;
    mainHeading: string;
    backgroundImage: string;
}

const HeroSection: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides: Slide[] = [
        {
            id: 1,
            title: "Welcome to Lanka Landy Japanese Language School!",
            mainHeading: "Fluent Japanese, Bright Future",
            backgroundImage: "./HeroSection1.jpg"
        },
        {
            id: 2,
            title: "Welcome to Lanka Landy Japanese Language School!",
            mainHeading: "Learn Japanese, Live the Culture",
            backgroundImage: "./HeroSection2.png"
        },
        {
            id: 3,
            title: "Welcome to Lanka Landy Japanese Language School!",
            mainHeading: "Master Japanese, Unlock New Opportunities",
            backgroundImage: "./HeroSection3.png"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className='flex flex-col'>
            <div className="relative w-full h-screen overflow-hidden">
                {/* Slides Container */}
                <div
                    className="flex transition-transform duration-500 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="min-w-full h-full relative bg-cover bg-center bg-no-repeat transform scale-x-[-1]"
                            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-primary4/30 transform scale-x-[-1]" />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 md:px-12 lg:px-16 transform scale-x-[-1]">
                                <div className="max-w-full sm:max-w-4xl text-white">
                                    {/* Welcome Text */}
                                    <p className="text-xl sm:text-xl md:text-[36px] lg:text-[36px] xl:text-[36px] font-medium opacity-90 leading-tight">
                                        <span className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
                                            {slide.title.split(',').map((line, index) => (
                                                <span key={index}>{line.trim()}</span>
                                            ))}
                                        </span>
                                    </p>


                                    {/* Main Heading */}
                                    <h1 className="mt-5 text-4xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                        {slide.mainHeading.split(',').map((line, index, arr) => (
                                            <div
                                                key={index}
                                                className={`leading-none sm:leading-tight ${index !== arr.length - 1 ? 'mb-4 sm:mb-6 md:mb-0' : ''}`}
                                            >
                                                {line.trim()}
                                            </div>
                                        ))}
                                    </h1>

                                    <button className="bg-gradient-to-r from-blue-500 to-blue-700 mt-5 text-white font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base lg:text-lg">
                                        Let's go to Japan →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-4 sm:left-6 md:left-6 bottom-16 sm:bottom-20 md:bottom-24 hover:text-white/70 text-white p-1 sm:p-2 md:p-3 rounded-full transition-all duration-300 z-10 cursor-pointer"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-4 sm:right-6 md:right-6 bottom-16 sm:bottom-20 md:bottom-24 hover:text-white/70 text-white p-1 sm:p-2 md:p-3 rounded-full transition-all duration-300 z-10 cursor-pointer"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                </button>
            </div>
           
           
           {/* News Banner*/}
            <div className="bg-gradient-to-r from-primary3 to-primary2 z-20 py-5 px-32">
                <div className="block sm:hidden text-center px-4 py-6">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-orange-500 font-bold text-xl"><img className='w-10 h-10' src="./pic1.png" alt="pic" /></span>
                    </div>
                    
                    <div className="text-white mb-4">
                        <h3 className="font-semibold text-lg mb-1">NEW INTAKE</h3>
                        <p className="text-sm opacity-90">Next Intake Starts on January 05, 2026</p>
                    </div>
                    <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-sm font-medium">
                        CONTACT US
                    </button>
                </div>
                
                <div className="hidden sm:flex items-center justify-between px-6 md:px-8  sm:py-4">

                    <div className="flex items-center space-x-8">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center ">
                            <span className="text-orange-500 font-bold text-base"><img className='w-10 h-10' src="./pic1.png" alt="pic" /></span>
                        </div>
                        
                        <div className="text-white">
                            <h3 className="font-semibold text-base md:text-xl mb-2">LATUS NEWS</h3>
                            <p className="text-sm opacity-90 text-md">Next Intake Starts on January 05, 2026</p>
                        </div>
                    </div>
                    
                    <button className="border border-white text-white px-4 py-2 rounded-full transition-alltransform hover:scale-105 duration-300 text-sm font-medium">
                        CONTACT US
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;