import { useEffect } from 'react';

const GoRendezVousWidget = () => {
  useEffect(() => {
    // Load Go Rendez-vous script
    const existingScript = document.getElementById('gorendezvous-bookingwidget-script');
    if (existingScript) {
      existingScript.parentNode.removeChild(existingScript);
    }
    
    const script = document.createElement('script');
    script.id = 'gorendezvous-bookingwidget-script';
    script.src = `https://www.gorendezvous.com/Scripts/gorendezvous.bookingWidgetV2.min.js?v=${Math.floor(new Date().getTime() / (1000 * 60 * 30)) * (1000 * 60 * 30)}`;
    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.getElementById('gorendezvous-bookingwidget-script');
      if (scriptToRemove) {
        scriptToRemove.parentNode.removeChild(scriptToRemove);
      }
    };
  }, []);

  return (
    <div 
      data-professionalpagename="ElitsaG" 
      data-bookingwidgeturlparams="companyId=138849" 
      data-language="fr" 
      data-label="Prendre un rendez-vous" 
      data-url="https://www.gorendezvous.com/" 
      className="gorendezvous-button" 
      data-buttoncolor="inverse" 
      data-width="280px" 
      data-height="50px"
      data-testid="gorendezvous-widget"
    >
      <a 
        href="https://www.gorendezvous.com/ElitsaG" 
        target="GOrendezvous"
        className="inline-flex items-center justify-center bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
      >
        Prendre un rendez-vous
      </a>
    </div>
  );
};

export default GoRendezVousWidget;
