import { useState, useEffect } from 'react';

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-100 py-4 px-4 md:px-8 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm max-w-2xl">
          <p>
            We use cookies to understand site performance and improve your experience. 
            No third-party tracking. No advertising cookies. 
            <a href="/cookies" className="text-gray-300 underline ml-1">Cookie Policy</a>
          </p>
        </div>
        <div className="flex gap-3">
          <button
            onClick={decline}
            className="text-sm px-4 py-2 border border-gray-600 rounded hover:border-gray-500 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="text-sm px-4 py-2 bg-gray-100 text-gray-900 rounded hover:bg-gray-200 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;