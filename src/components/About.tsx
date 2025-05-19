import React from 'react';
import { Award, Code, GraduationCap, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('about.title')}
            </h2>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {t('about.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                  <Award className="h-6 w-6 text-primary-600 mr-2" />
                  {t('about.sections.certifications')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>AWS Certified DevOps Engineer Professional</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Microsoft Azure - Developer Associate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Kubernetes Certified Application Developer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>HashiCorp Certified Terraform Associate</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                  <Code className="h-6 w-6 text-primary-600 mr-2" />
                  {t('about.sections.expertise')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Cloud Platforms: AWS, Azure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Container Orchestration: Docker, Kubernetes</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>CI/CD: GitLab, Jenkins, ArgoCD</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>IaC: Terraform, Ansible, AWS CDK</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Monitoring: Prometheus, Grafana, Loki</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                  <GraduationCap className="h-6 w-6 text-primary-600 mr-2" />
                  {t('about.sections.education')}
                </h3>
                <div className="mb-3">
                  <h4 className="font-semibold text-gray-900">Jacobs University Bremen</h4>
                  <p className="text-gray-700">Bachelor of Science in Computer Science</p>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Scientific Assistant in Software Engineering</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>Mentored students at AWSCloudHack</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="flex items-center text-xl font-bold text-gray-900 mb-4">
                  <Languages className="h-6 w-6 text-primary-600 mr-2" />
                  {t('about.sections.languages')}
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>English - Fluent</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">•</span>
                    <span>German - Fluent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;