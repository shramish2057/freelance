import React from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSwitch: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-md bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-300"
    >
      {i18n.language === 'en' ? 'DE' : 'EN'}
    </button>
  );
};