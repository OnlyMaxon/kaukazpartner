import { Target, Award, Users } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-kaukaz-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            About Kaukaz Partner
          </h2>
          <p className="text-xl text-kaukaz-black/70 max-w-3xl mx-auto">
            Your trusted partner for legal employment opportunities in Warsaw, Poland
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="bg-kaukaz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target size={32} className="text-kaukaz-accent" />
            </div>
            <h3 className="text-2xl font-bold text-kaukaz-black mb-3">Our Mission</h3>
            <p className="text-kaukaz-black/70">
              To provide stable, legal income opportunities for drivers and couriers in Warsaw with full support and transparency.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-kaukaz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-kaukaz-accent" />
            </div>
            <h3 className="text-2xl font-bold text-kaukaz-black mb-3">Our Commitment</h3>
            <p className="text-kaukaz-black/70">
              100% legal operations, official taxi and courier licenses, and complete compliance with Polish regulations.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-kaukaz-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-kaukaz-accent" />
            </div>
            <h3 className="text-2xl font-bold text-kaukaz-black mb-3">Our Community</h3>
            <p className="text-kaukaz-black/70">
              Join hundreds of satisfied drivers and couriers who have built successful careers with our support.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-kaukaz-black to-kaukaz-black/90 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-kaukaz-white mb-4">
            Start Working Anytime in Poland
          </h3>
          <p className="text-xl text-kaukaz-milk mb-8 max-w-3xl mx-auto">
            We handle all the paperwork, provide the necessary support, and help you start earning quickly and legally. Whether you want to be a taxi driver or courier, we make it simple and straightforward.
          </p>
          <button className="bg-kaukaz-accent hover:bg-kaukaz-accent/90 text-kaukaz-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105">
            Join Us Today
          </button>
        </div>
      </div>
    </section>
  );
}
