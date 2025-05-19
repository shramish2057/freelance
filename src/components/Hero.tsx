import React from 'react';
import { ChevronRight, Download } from 'lucide-react';
import { Link } from './Link';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-gray-900 via-primary-900 to-gray-900"
    >
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent" />
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary-300 font-semibold mb-3 animate-fadeIn">
              {t('hero.role')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeInUp animation-delay-200">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-400">
              <Link 
                href="/#contact" 
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center"
              >
                {t('hero.cta.work')} <ChevronRight className="ml-1 h-5 w-5" />
              </Link>
              <div className="relative group">
                <button 
                  className="bg-gray-800 hover:bg-gray-700 text-white font-medium px-6 py-3 rounded-md transition-all duration-300 flex items-center"
                >
                  {t('hero.cta.cv')} <Download className="ml-1 h-5 w-5" />
                </button>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a 
                    href="/cv-shramish-kafle-en.pdf" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    download
                  >
                    {t('hero.cta.cvEnglish')}
                  </a>
                  <a 
                    href="/cv-shramish-kafle-de.pdf" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    download
                  >
                    {t('hero.cta.cvGerman')}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 animate-fadeInUp animation-delay-600">
              <p className="text-gray-400 mb-2 text-sm">{t('hero.workedWith')}</p>
              <div className="flex flex-wrap gap-6 items-center">
                <span className="text-white font-medium">Porsche</span>
                <span className="text-white font-medium">MHP</span>
                <span className="text-white font-medium">KSB</span>
                <span className="text-white font-medium">Breeze Technologies</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-primary-600 shadow-xl">
              <img
                src="/profile-photo.jpeg"
                alt="Shramish Kafle"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;