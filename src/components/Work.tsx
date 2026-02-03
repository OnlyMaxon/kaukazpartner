import { Car, Package } from 'lucide-react';

export default function Work() {
  const driverOptions = ['Uber', 'Bolt', 'FreeNow'];
  const courierOptions = ['Wolt', 'Glovo', 'Uber'];

  return (
    <section id="work" className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            Work Opportunities
          </h2>
          <p className="text-xl text-kaukaz-black/70">
            Choose your path to stable income
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-kaukaz-white border-2 border-kaukaz-accent/20 rounded-2xl p-8 hover:border-kaukaz-accent transition-all hover:shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kaukaz-accent/10 p-4 rounded-full">
                <Car size={32} className="text-kaukaz-accent" />
              </div>
              <h3 className="text-3xl font-bold text-kaukaz-black">Driver</h3>
            </div>
            <p className="text-kaukaz-black/70 mb-6">
              Become an official taxi driver in Warsaw with full legal support and competitive earnings.
            </p>
            <div className="space-y-3">
              {driverOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-3 p-4 bg-kaukaz-accent/5 rounded-lg border border-kaukaz-accent/20"
                >
                  <div className="w-2 h-2 bg-kaukaz-accent rounded-full"></div>
                  <span className="text-kaukaz-black font-semibold">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-kaukaz-white border-2 border-kaukaz-accent/20 rounded-2xl p-8 hover:border-kaukaz-accent transition-all hover:shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-kaukaz-accent/10 p-4 rounded-full">
                <Package size={32} className="text-kaukaz-accent" />
              </div>
              <h3 className="text-3xl font-bold text-kaukaz-black">Courier</h3>
            </div>
            <p className="text-kaukaz-black/70 mb-6">
              Join the delivery industry with flexible hours and consistent earnings in Warsaw.
            </p>
            <div className="space-y-3">
              {courierOptions.map((option) => (
                <div
                  key={option}
                  className="flex items-center gap-3 p-4 bg-kaukaz-accent/5 rounded-lg border border-kaukaz-accent/20"
                >
                  <div className="w-2 h-2 bg-kaukaz-accent rounded-full"></div>
                  <span className="text-kaukaz-black font-semibold">{option}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
