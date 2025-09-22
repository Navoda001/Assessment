import React from 'react';
import { Facebook, Youtube, Linkedin } from 'lucide-react';

const FooterSection: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center space-y-6">
                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-neutral2 transition-shadow duration-300 group"
                            aria-label="Facebook"
                        >
                            <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                        </a>

                        <a
                            href="#"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-neutral2 transition-shadow duration-300 group"
                            aria-label="YouTube"
                        >
                            <Youtube className="w-5 h-5 text-gray-600 group-hover:text-red-600 transition-colors duration-300" />
                        </a>

                        <a
                            href="#"
                            className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-neutral2 transition-shadow duration-300 group"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-700 transition-colors duration-300" />
                        </a>
                    </div>

                    {/* Copyright Text */}
                    <div className="text-center">
                        <p className="text-black font-semibold text-sm">
                            Copyright © lankalandy 2025. All rights reserved. Powered by odwely
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;