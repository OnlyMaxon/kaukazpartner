import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage, type Language } from '../context/LanguageContext';
import faqData from '../data/faq.json';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t, language } = useLanguage();
  const faqs = faqData[language as Language];

  return (
    <section className="py-20 bg-kaukaz-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            {t('faq.title')}
          </h2>
          <p className="text-xl text-kaukaz-milk">
            {t('faq.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-xl overflow-hidden hover:border-kaukaz-accent transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="text-lg font-semibold text-kaukaz-white pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-kaukaz-accent flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-kaukaz-milk/80">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
