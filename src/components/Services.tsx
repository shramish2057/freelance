import React from 'react';
import { Cloud, Cog, Server, FileCode, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, icon, items }) => {
  return (
    <div className="bg-white rounded-lg shadow-md transition-all duration-300 hover:shadow-xl p-6 border border-gray-100">
      <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center text-primary-600 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary-600 mr-2 mt-1">•</span>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      key: 'cloud',
      icon: <Cloud className="h-7 w-7" />,
    },
    {
      key: 'cicd',
      icon: <Cog className="h-7 w-7" />,
    },
    {
      key: 'kubernetes',
      icon: <Server className="h-7 w-7" />,
    },
    {
      key: 'iac',
      icon: <FileCode className="h-7 w-7" />,
    },
    {
      key: 'coaching',
      icon: <Users className="h-7 w-7" />,
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ key, icon }) => (
            <ServiceCard
              key={key}
              title={t(`services.items.${key}.title`)}
              description={t(`services.items.${key}.description`)}
              icon={icon}
              items={t(`services.items.${key}.items`, { returnObjects: true })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;