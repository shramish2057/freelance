import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, position, company }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
      <div className="mb-6">
        <svg className="h-8 w-8 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-lg text-gray-700 italic">{quote}</p>
      </div>
      <div>
        <p className="font-bold text-gray-900">{name}</p>
        <p className="text-gray-600">{position}, {company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote: "Shramish brought tremendous energy and structure to our DevOps transition. His AWS knowledge and Terraform setups saved us hundreds of hours.",
      name: "Federico Magno",
      position: "CEO",
      company: "MHP (Porsche)"
    },
    {
      quote: "He was very motivated and showed a high degree of initiative and willingness to perform. He completed all tasks independently, extremely carefully and well thought out.",
      name: "Robert Heinecke",
      position: "CEO",
      company: "Breeze Technologies"
    },
    {
      quote: "Shramish convinced us with his comprehensive, versatile and very good specialist knowledge, which he always used safely and in a goal-oriented manner in practice.",
      name: "Markus Wambach",
      position: "COO",
      company: "MHP (Porsche)"
    }
  ];

  const next = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
              />
            ))}
          </div>
          
          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <div className="relative">
              <Testimonial
                quote={testimonials[currentIndex].quote}
                name={testimonials[currentIndex].name}
                position={testimonials[currentIndex].position}
                company={testimonials[currentIndex].company}
              />
              
              <div className="flex justify-center mt-6 space-x-4">
                <button 
                  onClick={prev}
                  className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={next}
                  className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 transition-colors duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              
              <div className="flex justify-center mt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 w-2 rounded-full mx-1 ${
                      currentIndex === index ? 'bg-white' : 'bg-primary-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;