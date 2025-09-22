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
            title: 'Learn',
            description: 'Learn Japanese in Lanka  Landy (6 months, 1 day a  week or more)',
            isActive: true
        },
        {
            id: 2,
            title: 'Passed JFT',
            description: 'Learn Japanese in Lanka  Landy (6 months, 1 day a  week or more)',
            isActive: false
        },
        {
            id: 3,
            title: 'Skill Education',
            description: 'Learn Japanese in Lanka  Landy (6 months, 1 day a  week or more)',
            isActive: true
        },
        {
            id: 4,
            title: 'Skill Test Passed',
            description: 'Learn Japanese in Lanka  Landy (6 months, 1 day a  week or more)',
            isActive: false
        }
    ];

    const handleMoreInfo = () => {
        console.log('More info clicked');
    };

    const mobileSteps = [steps[0], steps[1], steps[3], steps[2]];

    return (
        <div className={`bg-gradient-to-br from-gray-50 to-gray-100 py-8 md:py-16 px-4 ${className}`}>
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">ENROLLMENT</h1>
                    <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto px-4">
                        Simple, practical methods to build real Japanese communication skills.
                    </p>
                    {/* Decorative divider */}
                    <div className="flex items-center justify-center mt-4">
                        <div className="h-0.5 bg-primary4 w-10"></div>
                        <div className="w-4 h-4 rounded-full border-2 border-primary4 bg-white"></div>
                        <div className="h-0.5 bg-primary4 w-10"></div>
                    </div>
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
                                {mobileSteps.map((step,) => (
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
                                                <h3 className="text-sm font-semibold text-primary1 leading-tight">
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