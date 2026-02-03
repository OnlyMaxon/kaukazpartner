import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import HowItWorks from './components/HowItWorks';
import CarRental from './components/CarRental';
import Reviews from './components/Reviews';
import Benefits from './components/Benefits';
import About from './components/About';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-kaukaz-black">
      <Header />
      <Hero />
      <Work />
      <HowItWorks />
      <CarRental />
      <Reviews />
      <Benefits />
      <About />
      <Blog />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
