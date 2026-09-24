function Contact() {
  return (
    <section id="contact" className="section-padding bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in touch</h2>
          <p className="text-gray-400 max-w-2xl">
            Have a project in mind? Send me a message and I'll get back within one business day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Email</h3>
              <p>hello@alphacent.inc</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Phone</h3>
              <p>+1 (415) 555-0123</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Based in</h3>
              <p>San Francisco, CA</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-400 mb-1">Hours</h3>
              <p>Monday–Friday, 9am–5pm PST</p>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500"
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-1">Budget range</label>
              <select
                id="budget"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500"
              >
                <option value="">Select budget</option>
                <option value="under-2000">Under $2,000</option>
                <option value="2000-5000">$2,000–$5,000</option>
                <option value="5000-10000">$5,000–$10,000</option>
                <option value="over-10000">Over $10,000</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Project details *</label>
              <textarea
                id="message"
                rows="5"
                required
                placeholder="What do you need help with? What's your timeline?"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500 resize-none"
              ></textarea>
            </div>

            <div className="flex items-start">
              <input type="checkbox" id="consent" required className="mt-1 mr-3" />
              <label htmlFor="consent" className="text-sm text-gray-400">
                I agree to be contacted about my inquiry. <a href="/privacy.html" className="text-gray-300 underline">Privacy policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-100 text-gray-900 font-medium py-3 px-6 rounded hover:bg-gray-200 transition-colors text-center"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;