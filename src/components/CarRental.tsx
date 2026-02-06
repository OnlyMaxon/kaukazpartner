import { Car, Shield, Wrench, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function CarRental() {
  const { t } = useLanguage();
  
  const features = [
    { icon: Car, key: 'fleet' },
    { icon: Shield, key: 'insurance' },
    { icon: Wrench, key: 'maintenance' },
    { icon: Clock, key: 'terms' },
  ];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rental" className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            {t('carRental.title')}
          </h2>
          <p className="text-xl text-kaukaz-black/70 max-w-3xl mx-auto">
            {t('carRental.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-kaukaz-white border border-kaukaz-accent/20 rounded-xl p-6 hover:border-kaukaz-accent transition-all hover:shadow-lg"
            >
              <div className="bg-kaukaz-accent/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <feature.icon size={24} className="text-kaukaz-accent" />
              </div>
              <h3 className="text-xl font-bold text-kaukaz-black mb-2">
                {t(`carRental.features.${feature.key}.title`)}
              </h3>
              <p className="text-kaukaz-black/70">
                {t(`carRental.features.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-kaukaz-accent/10 to-kaukaz-accent/5 border-2 border-kaukaz-accent rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-kaukaz-black mb-4">
            {t('carRental.offer.title')}
          </h3>
          <p className="text-kaukaz-black/80 mb-6">
            {t('carRental.offer.description')}
          </p>
          <button 
            onClick={scrollToContacts}
            className="bg-kaukaz-accent hover:bg-kaukaz-accent/90 text-kaukaz-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            {t('carRental.offer.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}
