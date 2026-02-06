import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-kaukaz-black border-t border-kaukaz-accent/20 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-kaukaz-accent mb-2">Kaukaz Partner</h3>
          <p className="text-kaukaz-milk/80 mb-4">
            {t('footer.tagline')}
          </p>
          <p className="text-kaukaz-milk/60 text-sm">
            © {new Date().getFullYear()} Kaukaz Partner. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
