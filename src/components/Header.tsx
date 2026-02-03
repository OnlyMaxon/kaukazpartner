import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
              className="text-kaukaz-white hover:text-kaukaz-accent transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('rental')}
              className="text-kaukaz-white hover:text-kaukaz-accent transition-colors"
            >
              Car Rental
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-kaukaz-white hover:text-kaukaz-accent transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="text-kaukaz-white hover:text-kaukaz-accent transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="text-kaukaz-white hover:text-kaukaz-accent transition-colors"
            >
              Contacts
            </button>
          </nav>

          <button
            className="md:hidden text-kaukaz-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-kaukaz-black border-t border-kaukaz-accent/20">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('work')}
              className="block w-full text-left text-kaukaz-white hover:text-kaukaz-accent transition-colors py-2"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection('rental')}
              className="block w-full text-left text-kaukaz-white hover:text-kaukaz-accent transition-colors py-2"
            >
              Car Rental
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-kaukaz-white hover:text-kaukaz-accent transition-colors py-2"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('blog')}
              className="block w-full text-left text-kaukaz-white hover:text-kaukaz-accent transition-colors py-2"
            >
              Blog
            </button>
            <button
              onClick={() => scrollToSection('contacts')}
              className="block w-full text-left text-kaukaz-white hover:text-kaukaz-accent transition-colors py-2"
            >
              Contacts
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
