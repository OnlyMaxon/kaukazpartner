import { Menu, X, Globe } from 'lucide-react';
import { useState } from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'English' },
    { code: 'pl', label: 'Polski' },
    { code: 'ru', label: 'Русский' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-kaukaz-black border-b border-kaukaz-accent/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-kaukaz-accent">Kaukaz Partner</h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('work')}
              className="text-kaukaz-milk hover:text-kaukaz-accent transition-colors text-sm font-medium"
            >
              {t('work')}
            </button>
            <button
              onClick={() => scrollToSection('rental')}
              className="text-kaukaz-milk hover:text-kaukaz-accent transition-colors text-sm font-medium"
            >
              {t('carRental')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-kaukaz-milk hover:text-kaukaz-accent transition-colors text-sm font-medium"
            >
              {t('aboutUs')}
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-kaukaz-milk hover:text-kaukaz-accent transition-colors text-sm font-medium"
            >
              {t('blog')}
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-kaukaz-milk hover:text-kaukaz-accent transition-colors text-sm font-medium"
            >
              {t('contacts')}
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-2 text-kaukaz-accent hover:text-kaukaz-milk transition p-2"
              >
                <Globe size={18} />
                <span className="text-xs font-bold uppercase">{language}</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 bg-kaukaz-black border border-kaukaz-accent rounded-lg shadow-xl overflow-hidden w-32">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-xs transition ${
                        language === lang.code
                          ? 'bg-kaukaz-accent text-kaukaz-black font-bold'
                          : 'text-kaukaz-milk hover:bg-kaukaz-accent hover:text-kaukaz-black'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              className="md:hidden text-kaukaz-accent"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-kaukaz-black border-t border-kaukaz-accent/20">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left text-kaukaz-milk hover:text-kaukaz-accent transition-colors py-2 text-sm"
            >
              {t('work')}
            </button>
            <button
              onClick={() => scrollToSection('rental')}
              className="block w-full text-left text-kaukaz-milk hover:text-kaukaz-accent transition-colors py-2 text-sm"
            >
              {t('carRental')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-kaukaz-milk hover:text-kaukaz-accent transition-colors py-2 text-sm"
            >
              {t('aboutUs')}
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left text-kaukaz-milk hover:text-kaukaz-accent transition-colors py-2 text-sm"
            >
              {t('blog')}
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left text-kaukaz-milk hover:text-kaukaz-accent transition-colors py-2 text-sm"
            >
              {t('contacts')}
            </button>

            <div className="border-t border-kaukaz-accent/20 pt-3 mt-3">
              <div className="text-xs text-kaukaz-accent font-bold mb-2">LANGUAGE</div>
              <div className="flex gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setMobileMenuOpen(false);
                    }}
                    className={`px-3 py-1 rounded text-xs font-bold transition ${
                      language === lang.code
                        ? 'bg-kaukaz-accent text-kaukaz-black'
                        : 'bg-kaukaz-milk/20 text-kaukaz-milk hover:bg-kaukaz-accent hover:text-kaukaz-black'
                    }`}
                  >
                    {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
