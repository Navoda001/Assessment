import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <footer className="bg-primary1 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              ABOUT US
              <div className="w-12 h-0.5 bg-primary4 mt-2"></div>
            </h3>
            <p className="text-white leading-relaxed">
              Dear students, Welcome to Lanka Landy Japanese Language School. It is your 
              gateway to learn Japanese language and culture. Whether you are new to 
              Japanese language learning or have already studied Japanese, we will support 
              you step by step.
            </p>
            
            {/* Logo */}
            <div className="mt-6">
              <div className="relative w-20 h-20">
                <img src="./logo.png" alt="logo" />
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              QUICK LINKS
              <div className="w-12 h-0.5 bg-primary4 mt-2"></div>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Home
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  About School
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Information
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Course
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  To Japan
                </a>
              </div>
              <div className="space-y-3">
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Support
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Road Map
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Company Profile
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Privacy policy
                </a>
                <a href="#" className="block text-white hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">
              CONTACT US
              <div className="w-12 h-0.5 bg-primary4 mt-2"></div>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  No 15 Lefton Lane, Japan 11500
                </span>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-white">
                  No 15 Lefton Lane, Negombo 11500
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a href="tel:+94776909756" className="text-white hover:text-white transition-colors">
                  +94776909756
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a href="tel:0341285070" className="text-white hover:text-white transition-colors">
                  0341285070
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a href="mailto:lankalandy.jpn@gmail.com" className="text-white hover:text-white transition-colors">
                  lankalandy.jpn@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;