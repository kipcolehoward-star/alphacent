import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', to: 'home' },
    { label: 'Services', to: 'services' },
    { label: 'Process', to: 'process' },
    { label: 'Contact', to: 'contact' },
    { label: 'Privacy', to: 'privacy', href: '/privacy.html' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">Alphacent</span>
            <span className="text-sm text-gray-500">.inc</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.href ? (
                <a
                  key={item.to}
                  href={item.href}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.to}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-700 hover:text-gray-900 transition-colors font-medium text-sm cursor-pointer"
                  activeClass="text-gray-900"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <button
            className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-6 h-0.5 bg-gray-700 mb-1 transition-all"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 py-4 bg-white shadow-lg' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {navItems.map((item) => (
            item.href ? (
              <a
                key={item.to}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium py-2 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            )
          ))}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="bg-gray-900 text-white font-medium py-3 px-6 rounded text-center"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;