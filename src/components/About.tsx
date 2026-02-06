import { Target, Award, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const scrollToContacts = () => {
    const element = document.getElementById('contacts');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-kaukaz-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-kaukaz-black/70 max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-kaukaz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={32} className="text-kaukaz-accent" />
            </div>
            <h3 className="text-2xl font-bold text-kaukaz-black mb-3">{t('about.mission.title')}</h3>
            <p className="text-kaukaz-black/70">
              {t('about.mission.description')}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-kaukaz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-kaukaz-accent" />
            </div>
            <h3 className="text-2xl font-bold text-kaukaz-black mb-3">{t('about.commitment.title')}</h3>
            <p className="text-kaukaz-black/70">
              {t('about.commitment.description')}
            </p>
          </div>

          <div className="text-center">
            <div className="bg-kaukaz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-kaukaz-accent" />
            </div>
            <h3 className="text-2xl font-bold text-kaukaz-black mb-3">{t('about.community.title')}</h3>
            <p className="text-kaukaz-black/70">
              {t('about.community.description')}
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-kaukaz-black to-kaukaz-black/90 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-kaukaz-white mb-4">
            {t('about.cta.title')}
          </h3>
          <p className="text-xl text-kaukaz-milk mb-8 max-w-3xl mx-auto">
            {t('about.cta.description')}
          </p>
          <button 
            onClick={scrollToContacts}
            className="bg-kaukaz-accent hover:bg-kaukaz-accent/90 text-kaukaz-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105"
          >
            {t('about.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
