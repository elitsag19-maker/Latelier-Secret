import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

const GA_TRACKING_ID = 'G-NJS63QSMP7';

// Initialize Google Analytics
const initializeGA = () => {
  if (typeof window !== 'undefined' && !window.gaInitialized) {
    // Load gtag script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });

    window.gaInitialized = true;
  }
};

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    
    if (consent === null) {
      // Show banner after a short delay
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else if (consent === 'accepted') {
      // User previously accepted, initialize GA
      initializeGA();
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    initializeGA();
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-white rounded-none shadow-xl border border-stone/20">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-taupe/10 rounded-full flex items-center justify-center">
                    <Cookie size={20} className="text-taupe" />
                  </div>
                  <h3 className="font-serif text-xl text-taupe">Utilisation des cookies</h3>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-taupe-light hover:text-taupe transition-colors"
                  aria-label="Fermer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="text-taupe-light text-sm leading-relaxed">
                  Nous utilisons des cookies pour analyser le trafic de notre site et améliorer votre expérience. 
                  En acceptant, vous consentez à l'utilisation de Google Analytics pour collecter des données anonymes 
                  sur votre navigation.
                </p>
                
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-4 p-4 bg-stone/10 rounded-none"
                  >
                    <h4 className="font-medium text-taupe text-sm mb-2">Cookies utilisés :</h4>
                    <ul className="text-taupe-light text-sm space-y-1">
                      <li><strong>_ga</strong> - Identifiant unique pour Google Analytics (2 ans)</li>
                      <li><strong>_gid</strong> - Distinction des utilisateurs (24 heures)</li>
                      <li><strong>_gat</strong> - Limitation du taux de requêtes (1 minute)</li>
                    </ul>
                    <p className="text-taupe-light text-xs mt-3">
                      Conformément à la Loi 25 du Québec sur la protection des renseignements personnels.
                    </p>
                  </motion.div>
                )}
                
                <button
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-taupe text-sm underline mt-2 hover:text-taupe-dark transition-colors"
                >
                  {showDetails ? 'Masquer les détails' : 'En savoir plus'}
                </button>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-taupe text-white px-6 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
                  data-testid="cookie-accept-btn"
                >
                  Accepter
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 border-2 border-taupe text-taupe px-6 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe hover:text-white transition-colors"
                  data-testid="cookie-decline-btn"
                >
                  Refuser
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
