import { CheckCircle2, DollarSign, Calendar, Users, FileCheck, HeadphonesIcon } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Stable Income',
      description: 'Earn competitive rates with consistent work opportunities in Warsaw',
    },
    {
      icon: FileCheck,
      title: 'Fully Legal',
      description: 'All work is 100% official and compliant with Polish regulations',
    },
    {
      icon: Calendar,
      title: 'Start Anytime',
      description: 'Begin working immediately - no waiting periods or complicated delays',
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a network of drivers and couriers who help each other succeed',
    },
    {
      icon: HeadphonesIcon,
      title: '24/7 Support',
      description: 'Round-the-clock assistance for any questions or issues you encounter',
    },
    {
      icon: CheckCircle2,
      title: 'No Hidden Fees',
      description: 'Transparent pricing and clear terms - what you see is what you get',
    },
  ];

  return (
    <section className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            Why Choose Kaukaz Partner?
          </h2>
          <p className="text-xl text-kaukaz-black/70">
            We provide everything you need for successful work in Poland
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-kaukaz-white border border-kaukaz-accent/20 rounded-xl p-6 hover:border-kaukaz-accent transition-all hover:shadow-lg"
            >
              <div className="bg-kaukaz-accent/10 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <benefit.icon size={28} className="text-kaukaz-accent" />
              </div>
              <h3 className="text-xl font-bold text-kaukaz-black mb-3">{benefit.title}</h3>
              <p className="text-kaukaz-black/70">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
