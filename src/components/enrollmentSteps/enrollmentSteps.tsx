import React from 'react';

interface Step {
    id: number;
    title: string;
    description: string;
    isActive?: boolean;
}

interface EnrollmentStepsProps {
    className?: string;
}

const EnrollmentSteps: React.FC<EnrollmentStepsProps> = ({ className = '' }) => {
    const steps: Step[] = [
        {
            id: 1,
            title: 'Learn Japanese & Pass JFT',
            description: 'Japanese language training (6 months at Lanka Landy). Pass JFT (N4 level exam)',
            isActive: true
        },
        {
            id: 2,
            title: 'Skills Training & Exams',
            description: 'Vocational skills training (1 month). Pass vocational skills test Interview practice & Japanese etiquette',
            isActive: false
        },
        {
            id: 3,
            title: 'Interviews & Contract Signing',
            description: 'Sign contract with host company. Health check & residence permit certificate',
            isActive: true
        },
        {
            id: 4,
            title: 'Visa, Health Check & Departure',
            description: 'Visa approval & Bureau registration. Pre-departure guidance Fly to Japan',
            isActive: false
        }
    ];

    const handleMoreInfo = () => {
        console.log('More info clicked');
    };

    return (
        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-8 md:py-16 px-4 ${className}`}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ENROLLMENT</h1>
                    <div className="w-16 h-0.5 bg-orange-500 mx-auto mb-6"></div>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
                        Simple, practical methods to build real Japanese communication skills.
                    </p>
                </div>

                {/* Steps Container Desktop View*/}
                <div className="relative">
                    <div className="hidden md:block">
                        <div className="absolute top-8 left-0 right-0 border-t-2 border-gray-300 border-dashed"></div>

                        <div className="grid grid-cols-4 gap-4">
                            {steps.map((step,) => (
                                <div key={step.id} className="relative">
                                    <div className="flex flex-col items-center text-center">
                                        <div
                                            className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 relative z-10 transition-all duration-300 hover:scale-110 ${step.isActive
                                                    ? 'bg-primary4 shadow-lg'
                                                    : 'bg-primary2 shadow-md'
                                                }`}
                                        >
                                            {step.id}
                                        </div>

                                        <div className="space-y-3">
                                            <h3 className="text-xl font-semibold text-gray-800">
                                                {step.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/*Mobile view */}
                    <div className="md:hidden">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="absolute top-8 left-3/4  right-1/4 border-t-2 border-gray-300 border-dashed"></div>

                                <div className="absolute top-8 left-1/4 right-1 border-t-2 border-gray-300 border-dashed"></div>

                                <div className="absolute right-1 top-8 bottom-36 border-l-2 border-gray-300 border-dashed transform -translate-x-px"></div>

                                <div className="absolute bottom-36 left-3/4 right-1 border-t-2 border-gray-300 border-dashed"></div>

                                <div className="absolute bottom-36 left-1/4  right-1/4 border-t-2 border-gray-300 border-dashed"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                {steps.map((step,) => (
                                    <div key={step.id} className="relative">
                                        <div className="flex flex-col items-center text-center">
                                            <div
                                                className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10 transition-all duration-300 ${step.isActive
                                                        ? 'bg-primary4 shadow-lg'
                                                        : 'bg-primary2 shadow-md'
                                                    }`}
                                            >
                                                {step.id}
                                            </div>

                                            <div className="space-y-2 px-2">
                                                <h3 className="text-sm font-semibold text-neutral2 leading-tight">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs text-gray-600 leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-8 md:mt-16">
                    <button
                        onClick={handleMoreInfo}
                        className="bg-transparent border-2 border-primary4 text-primary4 px-6 md:px-8 py-2 md:py-3 rounded-full font-medium text-sm md:text-base transition-all transform hover:scale-105 "
                    >
                        MORE INFO
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnrollmentSteps;