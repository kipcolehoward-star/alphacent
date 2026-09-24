function Process() {
  const steps = [
    {
      number: '01',
      title: 'Consultation',
      description: 'We discuss your goals, budget, and timeline. No pressure, just honest advice.',
    },
    {
      number: '02',
      title: 'Proposal',
      description: 'I send a clear written proposal with the scope, timeline, and cost.',
    },
    {
      number: '03',
      title: 'Build',
      description: 'I build the solution and share progress regularly. You review and approve at each step.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'We go live together. I handle the technical details and provide documentation.',
    },
  ];

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-gray-600 max-w-2xl">
            My process is straightforward. I work with a small number of clients 
            each month to ensure quality and attention to detail.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="w-16 h-16 bg-gray-900 text-white rounded flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-xl font-bold">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            <strong className="text-gray-900">Note:</strong> I work with a limited number of 
            clients each month. Book a consultation to check availability.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Process;