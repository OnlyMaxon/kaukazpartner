import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contacts() {
  return (
    <section id="contacts" className="py-20 bg-kaukaz-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-kaukaz-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-kaukaz-milk">
            Ready to start your journey? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-kaukaz-white mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full">
                  <MapPin size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Location</h4>
                  <p className="text-kaukaz-milk/80">Warsaw, Poland</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full">
                  <Phone size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Phone</h4>
                  <p className="text-kaukaz-milk/80">+48 XXX XXX XXX</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full">
                  <Mail size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Email</h4>
                  <p className="text-kaukaz-milk/80">info@kaukazpartner.pl</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-kaukaz-accent/10 p-3 rounded-full">
                  <Clock size={24} className="text-kaukaz-accent" />
                </div>
                <div>
                  <h4 className="text-kaukaz-white font-semibold mb-1">Working Hours</h4>
                  <p className="text-kaukaz-milk/80">Monday - Sunday: 9:00 - 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-kaukaz-white mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white focus:border-kaukaz-accent focus:outline-none transition-colors">
                  <option value="">I'm interested in...</option>
                  <option value="driver">Driver Position</option>
                  <option value="courier">Courier Position</option>
                  <option value="rental">Car Rental</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-kaukaz-white/5 border border-kaukaz-accent/20 rounded-lg text-kaukaz-white placeholder-kaukaz-milk/50 focus:border-kaukaz-accent focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-kaukaz-accent hover:bg-kaukaz-accent/90 text-kaukaz-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
