import { Link } from 'react-scroll';

function Hero() {
  return (
    <section id="home" className="pt-16 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            We build and fix websites and tech setups for small businesses.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            Alphacent Inc helps companies get online with proper websites, custom domains, 
            business email, Google Business profiles, and ongoing support. Based in San Francisco.
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="inline-block bg-gray-900 text-white font-medium py-3 px-6 rounded hover:bg-gray-800 transition-colors"
          >
            Book a free consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;