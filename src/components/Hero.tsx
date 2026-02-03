import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-kaukaz-black via-kaukaz-black to-kaukaz-accent/10 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-kaukaz-white mb-6">
          Welcome to <span className="text-kaukaz-accent">Kaukaz Partner</span>
        </h1>
        <p className="text-xl md:text-2xl text-kaukaz-milk mb-4">
          Job Offers & Stable Income in Warsaw, Poland
        </p>
        <p className="text-lg md:text-xl text-kaukaz-white/80 mb-12 max-w-3xl mx-auto">
          Official taxi driver and courier opportunities. Start working anytime with full legal support.
        </p>
        <button
          onClick={scrollToWork}
          className="inline-flex items-center gap-2 bg-kaukaz-accent hover:bg-kaukaz-accent/90 text-kaukaz-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105"
        >
          Get Started
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
