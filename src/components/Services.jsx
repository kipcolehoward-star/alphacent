function Services() {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom websites built with modern standards. Fast, secure, and easy to update.',
      details: ['Responsive design', 'SEO-friendly', 'Content management', 'Analytics setup'],
    },
    {
      title: 'Domain & Email Setup',
      description: 'Custom business domains and professional email addresses for your team.',
      details: ['Domain registration', 'Email configuration', 'DNS management', 'SPF/DKIM records'],
    },
    {
      title: 'Google Business Profile',
      description: 'Get your business listed on Google Search and Maps with proper verification.',
      details: ['Profile setup', 'Local SEO optimization', 'Review management', 'Performance tracking'],
    },
    {
      title: 'Tech Support & Maintenance',
      description: 'Ongoing support for your website, hosting, and business tech stack.',
      details: ['Monthly maintenance plans', 'Security updates', 'Performance monitoring', 'Troubleshooting'],
    },
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-gray-600 max-w-2xl">
            I help small businesses and startups with their technology needs. 
            Everything from building your first website to setting up professional email and 
            getting found on Google.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="border-t pt-8">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;