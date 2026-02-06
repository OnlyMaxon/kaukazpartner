import { Calendar, ArrowRight } from 'lucide-react';
import { useLanguage, type Language } from '../context/LanguageContext';
import blogData from '../data/blog.json';

export default function Blog() {
  const { t, language } = useLanguage();
  const posts = blogData[language as Language];

  return (
    <section id="blog" className="py-20 bg-kaukaz-milk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-black mb-4">
            {t('blog.title')}
          </h2>
          <p className="text-xl text-kaukaz-black/70">
            {t('blog.subtitle')}
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
                  {new Date(post.date).toLocaleDateString(language === 'ru' ? 'ru-RU' : language === 'pl' ? 'pl-PL' : 'en-US', {
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
                {t('blog.readMore')}
                <ArrowRight size={18} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
