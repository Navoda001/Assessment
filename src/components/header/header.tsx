import React, { useState, useEffect } from 'react';
import { Mail, Phone, User } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";
import { FiPhoneCall } from 'react-icons/fi';
import { LuSearch } from 'react-icons/lu';
import RegisterComponent from '../register/register';

// Types
interface ContactInfoProps {
  icon: React.ReactNode;
  text: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

// Components
const ContactInfo: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{text}</span>
  </div>
);

const ContactInfo2: React.FC<ContactInfoProps> = ({ icon, text }) => (
  <div className="flex items-center gap-2 border-r-2 border-white/50 pr-4">
    {icon}
    <span>{text}</span>
  </div>
);

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive = false, onClick }) => (
  <a
    href={href}
    className={`text-gray-700 hover:text-primary5 font-medium py-2 relative transition-colors duration-300 ${isActive ? 'text-primary4 border-b-3 border-primary4' : ''
      }`}
    onClick={onClick}
  >
    {children}
  </a>
);

// Mobile Menu
const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen,
  onClose,
  activeIndex,
  setActiveIndex }) => {
  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'About School', href: '#' },
    { name: 'Course', href: '#' },
    { name: 'To Japan', href: '#' },
    { name: 'Support', href: '#' }
  ];

  return (
    <nav className={`mobile-menu absolute top-full left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 ${isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
      <div className="px-6 py-4">
        <ul className="pt-8 space-y-4">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                href={item.href}
                isActive={activeIndex === index}
                onClick={() => {
                  setActiveIndex(index);
                  onClose();
                }}
              >
                <span className="block py-3 border-b border-neutral2">
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Header
const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [registerMenuOpen, setRegisterMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-toggle')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const topBarContacts = [
    { icon: <Mail size={14} />, text: 'lankalandy.jp@gmail.com' },
    { icon: <FaWhatsapp size={18} color="white" />, text: '+94776999756' },
    { icon: <Phone size={14} />, text: '0341-2283070' }
  ];

  const topBarContacts2 = [
    { icon: <ReactCountryFlag countryCode="JP" svg style={{ width: '20px', height: '20px' }} />, text: 'No 15 Lefton Lane, Japan 11500' },
    { icon: <ReactCountryFlag countryCode="LK" svg style={{ width: '20px', height: '20px' }} />, text: 'No 15 Lefton Lane, Negombo 11500' }
  ];

  const navigationItems = [
    { name: 'Home', href: '#' },
    { name: 'About School', href: '#' },
    { name: 'Course', href: '#' },
    { name: 'Service', href: '#' },
    { name: 'To Japan', href: '#' },
    { name: 'News', href: '#' }
  ];

  const handleRegisterClick = () => {
    setRegisterMenuOpen(true);
  };

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="hidden md:block bg-primary4 text-white py-0">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center flex-wrap gap-2 text-sm">
            <div className="flex items-center gap-6 flex-wrap">
              {topBarContacts.map((contact, index) => (
                <ContactInfo
                  key={index}
                  icon={contact.icon}
                  text={contact.text}
                />
              ))}
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              {topBarContacts2.map((contact, index) => (
                <ContactInfo2
                  key={index}
                  icon={contact.icon}
                  text={contact.text}
                />
              ))}
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-1  text-s "
                role="button"
              >
                <span className='rounded-full bg-white/20 border border-white/30 p-2 hover:bg-white/30'>
                  <User size={15} />
                </span>
                <span onClick={handleRegisterClick}>Register</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg relative">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3 md:px-15 gap-3">
            {/* Logo */}
            <div className="flex items-center ">
              <img src="./logo.png" alt="logo" className='w-[98px] h-[63px]' />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <NavLink
                      href={item.href}
                      isActive={activeIndex === index}
                      onClick={() => setActiveIndex(index)}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>

            </nav>

            <div className="hidden md:flex items-center gap-8" >

              <a
                href="#"
                className="text-primary4 border-2 border-primary4 px-6 py-3 rounded-full font-medium hover:scale-105 hover:shadow-lg transition-transform duration-300"
                role="button"
              >
                CONTACT US
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className='md:hidden flex flex-row items-center gap-6 '>
              <div className=' border-l-1 pl-5 pr-0  py-2 border-neutral1'>
                <LuSearch size={18} color="black" />
              </div>
              <div className=' border-l-1 pl-5 pr-0 py-2 border-neutral1'>
                <FiPhoneCall size={18} color="black" />
              </div>
              <div>
                <button
                  className="md:hidden mobile-menu-toggle p-2"
                  onClick={toggleMobileMenu}
                  aria-label="Toggle mobile menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  <div className="relative w-6 h-5">
                    <span
                      className={`absolute top-0 left-0 w-8 h-0.5 pb-1 rounded-xl bg-primary4 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                        }`}
                    />
                    <span
                      className={`absolute top-2 left-0 w-8 h-0.5 pb-1 rounded-xl bg-primary4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                        }`}
                    />
                    <span
                      className={`absolute top-4 left-0 w-8 h-0.5  pb-1 rounded-xl bg-primary4 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                        }`}
                    />
                  </div>
                </button>
              </div>
            </div>


            {/* Mobile Menu */}
            <MobileMenu
              isOpen={isMobileMenuOpen}
              onClose={closeMobileMenu}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </div>
        </div>
      </header>

      {registerMenuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-center items-center bg-black/50 overflow-auto"
          onClick={() => setRegisterMenuOpen(false)}
        >
          <div
            className="bg-white rounded-lg w-full max-w-lg max-h-[96vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <RegisterComponent />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default Header;