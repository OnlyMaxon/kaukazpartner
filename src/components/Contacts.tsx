import { Mail, Phone, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contacts" className="py-20 bg-kaukaz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            {t('contactUs')}
          </h2>
          <p className="text-lg text-kaukaz-milk">
            Ready to start your journey? Connect with us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-kaukaz-white mb-8">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <MapPin size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Location</h4>
                  <p className="text-kaukaz-milk/80">Warsaw, Poland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <Phone size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Phone</h4>
                  <p className="text-kaukaz-milk/80">+48 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <Mail size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Email</h4>
                  <p className="text-kaukaz-milk/80">info@kaukazpartner.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full mt-1">
                  <Clock size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Working Hours</h4>
                  <p className="text-kaukaz-milk/80">Monday - Sunday: 9:00 - 21:00</p>
                  <p className="text-sm text-kaukaz-accent mt-2">24/7 Support Available</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-kaukaz-white mb-8">Start Your Application</h3>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-96 text-center">
                <CheckCircle size={48} className="text-kaukaz-accent mb-4" />
                <h4 className="text-2xl font-bold text-kaukaz-white mb-2">Thank You!</h4>
                <p className="text-kaukaz-milk/80">We'll contact you shortly to discuss your application.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number"
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
                    <option value="">What interests you?</option>
                    <option value="driver">Driver Position</option>
                    <option value="courier">Courier Position</option>
                    <option value="rental">Car Rental</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows={3}
                    placeholder="Tell us about yourself or any questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-kaukaz-accent hover:bg-kaukaz-white text-kaukaz-black hover:text-kaukaz-black py-3 rounded-lg font-bold transition-all transform hover:scale-105 duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit Application
                </button>
                <p className="text-xs text-kaukaz-milk/50 text-center">We respect your privacy. Your data is secure with us.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
