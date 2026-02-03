import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do I need my own car to start working?',
      answer: 'No! We offer car rental services with flexible terms. You can start working immediately with one of our well-maintained vehicles.',
    },
    {
      question: 'Is everything legal and official?',
      answer: 'Absolutely. We ensure all work is 100% compliant with Polish law. You will work officially as a taxi driver or courier with proper documentation.',
    },
    {
      question: 'How quickly can I start earning?',
      answer: 'You can start working within a few days after completing the verification process and onboarding. We help expedite all necessary paperwork.',
    },
    {
      question: 'What documents do I need?',
      answer: 'You will need a valid ID, driver\'s license, and legal right to work in Poland. We will guide you through the complete requirements during application.',
    },
    {
      question: 'Can I work for multiple platforms?',
      answer: 'Yes! Many of our partners work for multiple platforms simultaneously (Uber, Bolt, FreeNow, Wolt, Glovo) to maximize their earnings.',
    },
    {
      question: 'What support do you provide?',
      answer: 'We offer 24/7 support, help with documentation, platform onboarding, car rental, maintenance assistance, and a community of experienced drivers.',
    },
    {
      question: 'Are there any hidden fees?',
      answer: 'No. We believe in transparency. All costs and terms are clearly explained upfront with no hidden charges.',
    },
    {
      question: 'Can I start working part-time?',
      answer: 'Absolutely! You have complete flexibility to work as much or as little as you want. Many partners start part-time and transition to full-time.',
    },
  ];

  return (
    <section className="py-20 bg-kaukaz-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-kaukaz-milk">
            Everything you need to know about working with us
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
