import { ArrowRight, CheckCircle, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-kaukaz-black pt-20 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-72 h-72 bg-kaukaz-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-kaukaz-accent rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-kaukaz-accent/10 border border-kaukaz-accent/30 rounded-full">
          <Users size={16} className="text-kaukaz-accent" />
          <span className="text-sm font-medium text-kaukaz-accent">{t('trustSignal')}</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-kaukaz-white mb-6 leading-tight">
          {t('heroTitle')}
          <span className="block text-kaukaz-accent">Earn Legally</span>
        </h1>

        <p className="text-lg md:text-xl text-kaukaz-milk mb-8 max-w-3xl mx-auto leading-relaxed">
          {t('heroSubtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('work')}
            className="group px-8 py-4 bg-kaukaz-accent text-kaukaz-black font-bold rounded-lg hover:bg-kaukaz-white transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
          >
            {t('startWorking')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('rental')}
            className="px-8 py-4 border-2 border-kaukaz-accent text-kaukaz-accent font-bold rounded-lg hover:bg-kaukaz-accent hover:text-kaukaz-black transition-all duration-300"
          >
            {t('learnMore')}
          </button>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-8 border-t border-kaukaz-accent/20">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle size={24} className="text-kaukaz-accent" />
            </div>
            <p className="text-sm text-kaukaz-milk">Official & Legal</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle size={24} className="text-kaukaz-accent" />
            </div>
            <p className="text-sm text-kaukaz-milk">Flexible Schedule</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <CheckCircle size={24} className="text-kaukaz-accent" />
            </div>
            <p className="text-sm text-kaukaz-milk">24/7 Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
