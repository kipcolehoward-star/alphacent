import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;