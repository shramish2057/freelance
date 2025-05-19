import React from 'react';
import { useTranslation } from 'react-i18next';

interface CaseStudyProps {
  title: string;
  company: string;
  problem: string;
  solution: string;
  result: string;
  technologies: string[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ 
  title, 
  company, 
  problem, 
  solution, 
  result, 
  technologies 
}) => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl">
      <div className="bg-primary-700 p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-primary-100">{company}</p>
      </div>
      <div className="p-6">
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">{t('portfolio.problem')}</h4>
          <p className="text-gray-700">{problem}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">{t('portfolio.solution')}</h4>
          <p className="text-gray-700">{solution}</p>
        </div>
        <div className="mb-4">
          <h4 className="font-semibold text-gray-900 mb-2">{t('portfolio.result')}</h4>
          <p className="text-gray-700">{result}</p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-2">{t('portfolio.technologies')}</h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-primary-50 text-primary-700 text-sm px-2 py-1 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      title: t('portfolio.cases.notificationCenter.title'),
      company: t('portfolio.cases.notificationCenter.company'),
      problem: t('portfolio.cases.notificationCenter.problem'),
      solution: t('portfolio.cases.notificationCenter.solution'),
      result: t('portfolio.cases.notificationCenter.result'),
      technologies: ["AWS", "Kubernetes", "Docker", "Scala", "ArgoCD", "GitLab CI/CD"]
    },
    {
      title: t('portfolio.cases.awsMigration.title'),
      company: t('portfolio.cases.awsMigration.company'),
      problem: t('portfolio.cases.awsMigration.problem'),
      solution: t('portfolio.cases.awsMigration.solution'),
      result: t('portfolio.cases.awsMigration.result'),
      technologies: ["AWS", "Terraform", "GitLab CI/CD", "IAM", "Security Hardening", "Cost Optimization"]
    },
    {
      title: t('portfolio.cases.fleetexecutor.title'),
      company: t('portfolio.cases.fleetexecutor.company'),
      problem: t('portfolio.cases.fleetexecutor.problem'),
      solution: t('portfolio.cases.fleetexecutor.solution'),
      result: t('portfolio.cases.fleetexecutor.result'),
      technologies: ["React", "Redux", "AWS", "GitLab CI/CD", "SQS", "Real-time Processing"]
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              title={caseStudy.title}
              company={caseStudy.company}
              problem={caseStudy.problem}
              solution={caseStudy.solution}
              result={caseStudy.result}
              technologies={caseStudy.technologies}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolio.openSource.title')}</h3>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
            <h4 className="text-xl font-bold text-gray-900 mb-2">
              {t('portfolio.openSource.devDash.title')}
            </h4>
            <p className="text-gray-700 mb-4">
              {t('portfolio.openSource.devDash.description')}
            </p>
            <a 
              href="https://github.com/shramish2057" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-800 font-medium inline-flex items-center"
            >
              {t('portfolio.openSource.devDash.viewOnGithub')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;