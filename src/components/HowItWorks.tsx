import { FileText, CheckCircle, Briefcase, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();
  
  const icons = [FileText, CheckCircle, Briefcase, TrendingUp];

  return (
    <section className="py-20 bg-kaukaz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-kaukaz-milk">
            {t('howItWorks.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[0, 1, 2, 3].map((index) => {
            const Icon = icons[index];
            return (
              <div
                key={index}
                className="relative bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-2xl p-6 hover:border-kaukaz-accent transition-all hover:bg-kaukaz-white/10"
              >
                <div className="absolute -top-4 -left-4 bg-kaukaz-accent text-kaukaz-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="mb-4">
                  <Icon size={40} className="text-kaukaz-accent" />
                </div>
                <h3 className="text-xl font-bold text-kaukaz-white mb-3">
                  {t(`howItWorks.steps.${index}.title`)}
                </h3>
                <p className="text-kaukaz-milk/80">
                  {t(`howItWorks.steps.${index}.description`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
