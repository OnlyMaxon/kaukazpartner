import { Car, Package, ArrowRight, DollarSign, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t } = useLanguage();

  const driverOptions = ['Uber', 'Bolt', 'FreeNow'];
  const courierOptions = ['Wolt', 'Glovo', 'Uber'];

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            {t('work')} Opportunities
          </h2>
          <p className="text-lg text-kaukaz-black/70">
            Choose your path to stable income
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group bg-kaukaz-white border-2 border-kaukaz-accent/20 rounded-2xl p-8 hover:border-kaukaz-accent transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kaukaz-accent/10 p-4 rounded-full group-hover:bg-kaukaz-accent group-hover:text-kaukaz-white transition-all">
                <Car size={32} className="text-kaukaz-accent group-hover:text-kaukaz-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-kaukaz-black">{t('driver')}</h3>
                <p className="text-sm text-kaukaz-accent font-semibold">Taxi Services</p>
              </div>
            </div>

            <p className="text-kaukaz-black/70 mb-6">
              Become an official taxi driver in Warsaw with full legal support and competitive earnings.
            </p>

            <div className="flex gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <DollarSign size={18} className="text-kaukaz-accent" />
                <span className="text-kaukaz-black font-medium">Stable Income</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-kaukaz-accent" />
                <span className="text-kaukaz-black font-medium">Flexible Hours</span>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              {driverOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-3 p-3 bg-kaukaz-accent/5 rounded-lg border border-kaukaz-accent/20 hover:border-kaukaz-accent hover:bg-kaukaz-accent/10 transition-all"
                >
                  <div className="w-2 h-2 bg-kaukaz-accent rounded-full"></div>
                  <span className="text-kaukaz-black font-semibold">{option}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContacts}
              className="w-full group/btn px-6 py-3 bg-kaukaz-accent text-kaukaz-black font-bold rounded-lg hover:bg-kaukaz-black hover:text-kaukaz-accent transition-all border-2 border-kaukaz-accent flex items-center justify-center gap-2"
            >
              {t('getStarted')}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="group bg-kaukaz-white border-2 border-kaukaz-accent/20 rounded-2xl p-8 hover:border-kaukaz-accent transition-all duration-300 hover:shadow-2xl hover:scale-105">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kaukaz-accent/10 p-4 rounded-full group-hover:bg-kaukaz-accent group-hover:text-kaukaz-white transition-all">
                <Package size={32} className="text-kaukaz-accent group-hover:text-kaukaz-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-kaukaz-black">{t('courier')}</h3>
                <p className="text-sm text-kaukaz-accent font-semibold">Delivery Services</p>
              </div>
            </div>

            <p className="text-kaukaz-black/70 mb-6">
              Join the delivery industry with flexible hours and consistent earnings in Warsaw.
            </p>

            <div className="flex gap-4 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <DollarSign size={18} className="text-kaukaz-accent" />
                <span className="text-kaukaz-black font-medium">Daily Payouts</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-kaukaz-accent" />
                <span className="text-kaukaz-black font-medium">Work Anytime</span>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              {courierOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-3 p-3 bg-kaukaz-accent/5 rounded-lg border border-kaukaz-accent/20 hover:border-kaukaz-accent hover:bg-kaukaz-accent/10 transition-all"
                >
                  <div className="w-2 h-2 bg-kaukaz-accent rounded-full"></div>
                  <span className="text-kaukaz-black font-semibold">{option}</span>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContacts}
              className="w-full group/btn px-6 py-3 bg-kaukaz-accent text-kaukaz-black font-bold rounded-lg hover:bg-kaukaz-black hover:text-kaukaz-accent transition-all border-2 border-kaukaz-accent flex items-center justify-center gap-2"
            >
              {t('getStarted')}
              <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
