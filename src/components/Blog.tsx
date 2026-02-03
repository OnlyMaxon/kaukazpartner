import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const posts = [
    {
      title: 'How to Maximize Your Earnings as an Uber Driver in Warsaw',
      excerpt: 'Learn the best strategies, peak hours, and locations to increase your income as a ride-sharing driver in the capital.',
      date: '2026-01-28',
      category: 'Driver Tips',
    },
    {
      title: 'Complete Guide to Legal Taxi Work in Poland',
      excerpt: 'Everything you need to know about requirements, licenses, and regulations for working legally as a taxi driver.',
      date: '2026-01-25',
      category: 'Legal Guide',
    },
    {
      title: 'Courier Work: Wolt vs Glovo vs Uber - Which is Best?',
      excerpt: 'A detailed comparison of the top courier platforms in Warsaw, including earnings, flexibility, and support.',
      date: '2026-01-20',
      category: 'Courier Tips',
    },
    {
      title: 'Car Rental vs. Own Vehicle: What Makes More Sense?',
      excerpt: 'Calculate the real costs and benefits of renting versus using your own car for ride-sharing and delivery work.',
      date: '2026-01-15',
      category: 'Finance',
    },
  ];

  return (
    <section id="blog" className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-xl text-kaukaz-black/70">
            Tips, guides, and insights for drivers and couriers
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-kaukaz-white border border-kaukaz-accent/20 rounded-xl p-6 hover:border-kaukaz-accent transition-all hover:shadow-lg group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-kaukaz-accent/10 text-kaukaz-accent px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
                <div className="flex items-center gap-2 text-kaukaz-black/60 text-sm">
                  <Calendar size={16} />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </div>
              </div>
              <h3 className="text-xl font-bold text-kaukaz-black mb-3 group-hover:text-kaukaz-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-kaukaz-black/70 mb-4">{post.excerpt}</p>
              <button className="flex items-center gap-2 text-kaukaz-accent font-semibold group-hover:gap-3 transition-all">
                Read More
                <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
