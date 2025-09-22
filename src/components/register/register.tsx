import React, { useState } from 'react';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    mobileNumber: string;
    nicNumber: string;
    dateOfBirth: string;
    gender: string;
    qualifications: string;
}

const RegisterComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        nicNumber: '',
        dateOfBirth: '',
        gender: '',
        qualifications: '',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
    };

    return (
        <div className="max-w-2xl mx-auto py-3 px-8 bg-white rounded-4xl shadow-lg">
            <div className='mb-6'>
                <h2 className="text-2xl font-bold text-primary4 mb-1 ">Register Now</h2>
                <div className="h-1 bg-primary4 w-15 rounded-4xl"></div>
            </div>

            <div className="space-y-3">
                {/* First Name and Last Name Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Last Name
                        </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Email and Mobile Number Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mobile Number
                        </label>
                            <input
                                type="tel"
                                name="mobileNumber"
                                value={formData.mobileNumber}
                                onChange={handleInputChange}
                                className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent"
                            />
                    </div>
                </div>

                {/* NIC Number and Date of Birth Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            NIC Number
                        </label>
                        <input
                            type="text"
                            name="nicNumber"
                            value={formData.nicNumber}
                            onChange={handleInputChange}
                            placeholder="Enter your NIC number"
                            className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Date of Birth
                        </label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            placeholder="mm/dd/yyyy"
                            className="w-full pl-16 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent"
                        />
                    </div>
                </div>

                {/* Gender */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                    </label>
                    <div className="relative w-full md:w-1/2">
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral1 focus:border-transparent appearance-none bg-white pr-10"
                        >
                            <option value="">Select an option</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Qualifications */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Qualifications
                    </label>
                    <textarea
                        name="qualifications"
                        value={formData.qualifications}
                        onChange={handleInputChange}
                        placeholder="Enter your educations here"
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-none"
                    />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-primary2 to-primary3 text-white font-medium py-3 px-18 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RegisterComponent;