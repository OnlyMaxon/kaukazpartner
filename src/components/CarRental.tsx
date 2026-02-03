import { Car, Shield, Wrench, Clock } from 'lucide-react';

export default function CarRental() {
  const features = [
    {
      icon: Car,
      title: 'Modern Fleet',
      description: 'Well-maintained vehicles suitable for Uber, Bolt, and FreeNow',
    },
    {
      icon: Shield,
      title: 'Full Insurance',
      description: 'Comprehensive insurance coverage included in rental',
    },
    {
      icon: Wrench,
      title: 'Maintenance Included',
      description: '24/7 technical support and regular vehicle maintenance',
    },
    {
      icon: Clock,
      title: 'Flexible Terms',
      description: 'Daily, weekly, or monthly rental options available',
    },
  ];

  return (
    <section id="rental" className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            Car Rental Service
          </h2>
          <p className="text-xl text-kaukaz-black/70 max-w-3xl mx-auto">
            Don't have a car? No problem! Rent a vehicle from us and start working immediately.
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
              <h3 className="text-xl font-bold text-kaukaz-black mb-2">{feature.title}</h3>
              <p className="text-kaukaz-black/70">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-kaukaz-accent/10 to-kaukaz-accent/5 border-2 border-kaukaz-accent rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-kaukaz-black mb-4">
            Special Offer for New Drivers
          </h3>
          <p className="text-kaukaz-black/80 mb-6">
            Get your first week at a discounted rate when you sign up with Kaukaz Partner
          </p>
          <button className="bg-kaukaz-accent hover:bg-kaukaz-accent/90 text-kaukaz-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}
