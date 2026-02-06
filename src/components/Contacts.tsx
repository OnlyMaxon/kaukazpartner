import { Mail, Phone, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import config from '../data/config.json';

export default function Contacts() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Send to Web3Forms (free service, no backend needed)
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY', // Replace with your key from web3forms.com
          subject: `New Application from ${formData.name} - Kaukaz Partner`,
          from_name: 'Kaukaz Partner Website',
          ...formData,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch {
      // Fallback: open email client
      const mailtoLink = `mailto:${config.company.email}?subject=New Application - ${formData.interest}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AInterest: ${formData.interest}%0AMessage: ${formData.message}`;
      window.location.href = mailtoLink;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacts" className="py-20 bg-kaukaz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            {t('contacts.title')}
          </h2>
          <p className="text-lg text-kaukaz-milk">
            {t('contacts.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-kaukaz-white mb-8">{t('contacts.info.title')}</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <MapPin size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">{t('contacts.info.location.title')}</h4>
                  <p className="text-kaukaz-milk/80">{t('contacts.info.location.value')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <Phone size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">{t('contacts.info.phone.title')}</h4>
                  <a href={`tel:${config.company.phone}`} className="text-kaukaz-milk/80 hover:text-kaukaz-accent transition-colors">
                    {config.company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <Mail size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">{t('contacts.info.email.title')}</h4>
                  <a href={`mailto:${config.company.email}`} className="text-kaukaz-milk/80 hover:text-kaukaz-accent transition-colors">
                    {config.company.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <Clock size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">{t('contacts.info.hours.title')}</h4>
                  <p className="text-kaukaz-milk/80">{t('contacts.info.hours.value')}</p>
                  <p className="text-sm text-kaukaz-accent mt-2">{t('contacts.info.hours.support')}</p>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={`https://wa.me/${config.company.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  WhatsApp
                </a>
                <a
                  href={`https://t.me/${config.company.telegram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <MessageCircle size={20} />
                  Telegram
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-kaukaz-white mb-8">{t('contacts.form.title')}</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <CheckCircle size={48} className="text-kaukaz-accent mb-4" />
                <h4 className="text-2xl font-bold text-kaukaz-white mb-2">{t('contacts.form.success.title')}</h4>
                <p className="text-kaukaz-milk/80">{t('contacts.form.success.message')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-lg">
                    {error}
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    placeholder={t('contacts.form.name')}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder={t('contacts.form.email')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder={t('contacts.form.phone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white focus:border-kaukaz-accent focus:outline-none transition-colors"
                    required
                  >
                    <option value="">{t('contacts.form.interest')}</option>
                    <option value="driver">{t('contacts.form.options.driver')}</option>
                    <option value="courier">{t('contacts.form.options.courier')}</option>
                    <option value="rental">{t('contacts.form.options.rental')}</option>
                    <option value="other">{t('contacts.form.options.other')}</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder={t('contacts.form.message')}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-kaukaz-accent hover:bg-kaukaz-white text-kaukaz-black hover:text-kaukaz-black py-3 rounded-lg font-bold transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? '...' : t('contacts.form.submit')}
                </button>
                <p className="text-xs text-kaukaz-milk/50 text-center">{t('contacts.form.privacy')}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
