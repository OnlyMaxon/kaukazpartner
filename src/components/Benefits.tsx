import { CheckCircle2, DollarSign, Calendar, Users, FileCheck, HeadphonesIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Benefits() {
  const { t } = useLanguage();
  
  const benefits = [
    { icon: DollarSign, key: 'income' },
    { icon: FileCheck, key: 'legal' },
    { icon: Calendar, key: 'start' },
    { icon: Users, key: 'community' },
    { icon: HeadphonesIcon, key: 'support' },
    { icon: CheckCircle2, key: 'fees' },
  ];

  return (
    <section className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-xl text-kaukaz-black/70">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-kaukaz-white border border-kaukaz-accent/20 rounded-xl p-6 hover:border-kaukaz-accent transition-all hover:shadow-lg"
            >
              <div className="bg-kaukaz-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <benefit.icon size={28} className="text-kaukaz-accent" />
              </div>
              <h3 className="text-xl font-bold text-kaukaz-black mb-3">
                {t(`benefits.items.${benefit.key}.title`)}
              </h3>
              <p className="text-kaukaz-black/70">
                {t(`benefits.items.${benefit.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
