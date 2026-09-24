function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-gray-400 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} Alphacent Inc. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="/privacy.html" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <a href="/terms.html" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </a>
            <a href="/cookies.html" className="text-gray-400 hover:text-gray-300 transition-colors">
              Cookies
            </a>
            <a href="/refund.html" className="text-gray-400 hover:text-gray-300 transition-colors">
              Refunds
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-600">
          <p>Alphacent Inc, San Francisco, CA, USA</p>
          <p>EIN: 83-2916421</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;