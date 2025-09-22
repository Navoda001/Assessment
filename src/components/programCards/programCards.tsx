import React, { useState, useRef } from 'react';

interface CardData {
    id: string;
    title: string;
    description: string;
    backgroundImage?: string;
    hasReadMore?: boolean;
}

interface ProgramCardProps {
    card: CardData;
    className?: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ card, className = '' }) => {
    const { title, description, backgroundImage, hasReadMore } = card;

    return (
        <div
            className={`relative rounded-2xl overflow-hidden w-[280px] h-[470px] group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${className}`}
            style={{
                backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: backgroundImage ? 'transparent' : '#1e3a8a'
            }}
        >
            {/* Overlay */}
            {backgroundImage && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            )}

            {/* Content */}
            <div className="relative h-full flex flex-col justify-between p-6">

                {/* Centered Button */}
                {hasReadMore && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-primary4 text-white px-6 py-2 rounded-4xl text-sm md:text-base font-medium duration-200 shadow-lg transition-all transform hover:scale-105">
                            READ MORE
                        </button>
                    </div>
                )}

                {/* Title & Description at Bottom */}
                <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
                    <h3 className="text-white font-semibold text-lg md:text-xl mb-2">
                        {title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>

    );
};

const ProgramSection: React.FC = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const cardData: CardData[] = [
        {
            id: 'ssw-type-1',
            title: 'SSW TYPE 1',
            description: 'For workers in 14 specific industries in SSW. We are here to guide you across 4 key industries...',
            backgroundImage: './programcard4.png',
            hasReadMore: true
        },
        {
            id: 'ssw-type-2',
            title: 'SSW TYPE 2',
            description: 'For workers in 14 specific industries in SSW. We are here to guide you across 4 key industries...',
            backgroundImage: './programcard1.png',
            hasReadMore: true
        },
        {
            id: 'jft',
            title: 'JFT',
            description: 'For workers in 14 specific industries in SSW. We are here to guide you across 6 key industries...',
            backgroundImage: './programcard2.png',
            hasReadMore: true
        },
        {
            id: 'jft-n4',
            title: 'JFT N4',
            description: 'For workers in 14 specific industries in SSW. We are here to guide you across 4 key industries...',
            backgroundImage: './programcard3.png',
            hasReadMore: true
        }
    ];

    // Touch/Mouse event handlers for mobile swipe
    const handleStart = (clientX: number) => {
        if (!sliderRef.current) return;
        setIsDragging(true);
        setStartX(clientX - sliderRef.current.offsetLeft);
        setScrollLeft(sliderRef.current.scrollLeft);
    };

    const handleMove = (clientX: number) => {
        if (!isDragging || !sliderRef.current) return;
        const x = clientX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleEnd = () => {
        setIsDragging(false);
        if (!sliderRef.current) return;

        // Snap to nearest card
        const cardWidth = 280; // width + gap
        const newIndex = Math.round(sliderRef.current.scrollLeft / cardWidth);

        sliderRef.current.scrollTo({
            left: newIndex * cardWidth,
            behavior: 'smooth'
        });
    };

    // Mouse events
    const handleMouseDown = (e: React.MouseEvent) => handleStart(e.pageX);
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.pageX);
    const handleMouseUp = () => handleEnd();
    const handleMouseLeave = () => handleEnd();

    // Touch events
    const handleTouchStart = (e: React.TouchEvent) => handleStart(e.touches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
    const handleTouchEnd = () => handleEnd();


    return (
        <div className="py-12 bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
            {/* Header with airplane logo */}
            <div className="max-w-6xl mx-auto mb-12">
                <div className="text-center mb-8">

                    <h2 className="text-3xl md:text-4xl font-bold text-primary1 mb-4">
                        OUR PROGRAM
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto">
                        Simple, practical methods to build real Japanese communication skills.
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center justify-center mt-4">
                        <div className="h-0.5 bg-primary4 w-10"></div>
                        <div className="w-4 h-4 rounded-full border-2 border-primary4 bg-white"></div>
                        <div className="h-0.5 bg-primary4 w-10"></div>
                    </div>
                </div>

                <div className="hidden md:flex md:justify-center md:gap-6 mb-8 overflow-x-visible">
                    {cardData.map((card) => (
                        <ProgramCard
                            key={card.id}
                            card={card}
                            className="flex-shrink-0 w-72"
                        />
                    ))}
                </div>
                {/*Mobile Slider */}
                <div className="md:hidden mb-8">
                    <div
                        ref={sliderRef}
                        className="flex gap-4 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-4"
                        style={{
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none'
                        }}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {cardData.map((card) => (
                            <ProgramCard
                                key={card.id}
                                card={card}
                                className="flex-shrink-0 w-64 scroll-snap-align-start"
                            />
                        ))}
                    </div>
                </div>

                {/* More Info Button */}
                <div className="text-center">
                    <button className="border-2 border-primary4 text-primary4 px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                        MORE INFO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProgramSection;