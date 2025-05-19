import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link } from './Link';
import { useTranslation } from 'react-i18next';
import { LanguageSwitch } from './LanguageSwitch';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'services', label: t('nav.services') },
    { key: 'portfolio', label: t('nav.portfolio') },
    { key: 'about', label: t('nav.about') },
    { key: 'contact', label: t('nav.contact') }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          href="/" 
          className={`font-bold text-xl ${
            isScrolled ? 'text-primary-700' : 'text-white'
          }`}
        >
          Shramish Kafle
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ key, label }) => (
            <Link
              key={key}
              href={`/#${key}`}
              className={`font-medium transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-primary-600' 
                  : 'text-white hover:text-primary-200'
              }`}
            >
              {label}
            </Link>
          ))}
          <LanguageSwitch />
          <Link 
            href="/#contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-300 flex items-center"
          >
            {t('nav.letsTalk')} <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          ) : (
            <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
          )}
        </button>
      </div>
      
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          {navItems.map(({ key, label }) => (
            <Link
              key={key}
              href={`/#${key}`}
              className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <div className="flex justify-center">
            <LanguageSwitch />
          </div>
          <Link 
            href="/#contact" 
            className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-300 text-center flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.letsTalk')} <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;