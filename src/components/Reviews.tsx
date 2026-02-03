import { Star } from 'lucide-react';

export default function Reviews() {
  const reviews = [
    {
      name: 'Dmitry K.',
      role: 'Uber Driver',
      rating: 5,
      text: 'Kaukaz Partner helped me start working legally in Warsaw within a week. Great support and transparent process!',
    },
    {
      name: 'Anna M.',
      role: 'Wolt Courier',
      rating: 5,
      text: 'Finally found a company that actually helps. All documents sorted, started earning immediately. Highly recommend!',
    },
    {
      name: 'Sergei P.',
      role: 'Bolt Driver',
      rating: 5,
      text: 'The car rental service is excellent. Clean cars, fair prices, and 24/7 support. Perfect for newcomers.',
    },
    {
      name: 'Maria L.',
      role: 'Glovo Courier',
      rating: 5,
      text: 'Professional team that really cares. They explained everything clearly and helped me with all paperwork.',
    },
  ];

  return (
    <section className="py-20 bg-kaukaz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            What Our Partners Say
          </h2>
          <p className="text-xl text-kaukaz-milk">
            Real experiences from real people
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-xl p-6 hover:border-kaukaz-accent transition-all hover:bg-kaukaz-white/10"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-kaukaz-accent text-kaukaz-accent" />
                ))}
              </div>
              <p className="text-kaukaz-milk mb-6 italic">"{review.text}"</p>
              <div>
                <p className="text-kaukaz-white font-semibold">{review.name}</p>
                <p className="text-kaukaz-accent text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
