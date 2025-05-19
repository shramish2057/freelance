import React from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { InlineWidget } from 'react-calendly';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t('contact.form.title')}
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.subject')}
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 w-full flex items-center justify-center"
              >
                {t('contact.form.send')} <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{t('contact.info.phone')}</p>
                    <p className="text-gray-900">+49 177 9572891</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{t('contact.info.email')}</p>
                    <p className="text-gray-900">shramish4@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{t('contact.info.location')}</p>
                    <p className="text-gray-900">Germany</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('contact.connect.title')}
                </h4>
                <div className="flex space-x-4">
                  <a 
                    href="https://linkedin.com/in/ShramishKafle" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#0A66C2] text-white p-3 rounded-full hover:bg-opacity-90 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a 
                    href="https://github.com/shramish2057" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-[#24292e] text-white p-3 rounded-full hover:bg-opacity-90 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-primary-50 rounded-lg p-8 border border-primary-100">
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {t('contact.consultation.title')}
              </h4>
              <p className="text-gray-700 mb-6">
                {t('contact.consultation.description')}
              </p>
              <div className="calendly-inline-widget" style={{ minWidth: '320px', height: '700px' }}>
                <InlineWidget
                  url="https://calendly.com/shramish4/30min"
                  styles={{ height: '700px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;