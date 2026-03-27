import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Phone } from 'lucide-react';

const BookingPage = () => {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1609535904959-aaa9d01fb5a4?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxzcGElMjBhcHBvaW50bWVudCUyMGJvb2tpbmclMjByZWxheGF0aW9uJTIwd29tYW4lMjBiZWlnZSUyMGVsZWdhbnR8ZW58MHx8fHwxNzczNzE3MzU0fDA&ixlib=rb-4.1.0&q=85"
            alt="Prendre rendez-vous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-taupe/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl"
            data-testid="booking-page-title"
          >
            Prendre<br />Rendez-vous
          </motion.h1>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl text-taupe mb-6">
                Réservez votre moment de bien-être
              </h2>
              <p className="text-taupe-light text-lg leading-relaxed mb-8">
                Utilisez notre système de réservation en ligne pour planifier votre prochain rendez-vous. 
                Choisissez le service, la date et l'heure qui vous conviennent le mieux.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4 text-taupe">
                  <div className="w-12 h-12 bg-taupe/10 rounded-full flex items-center justify-center">
                    <MapPin size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">Adresse</p>
                    <p className="text-taupe-light text-sm">2475 rue Saint-Georges, Lemoyne, QC J4R 2T4</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-taupe">
                  <div className="w-12 h-12 bg-taupe/10 rounded-full flex items-center justify-center">
                    <Phone size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <p className="text-taupe-light text-sm">+1 438 882 2165</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-taupe">
                  <div className="w-12 h-12 bg-taupe/10 rounded-full flex items-center justify-center">
                    <Clock size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">Heures d'ouverture</p>
                    <p className="text-taupe-light text-sm">Lun - Sam: 9h00 - 19h00</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-taupe">
                  <div className="w-12 h-12 bg-taupe/10 rounded-full flex items-center justify-center">
                    <Calendar size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="font-medium">Consultation gratuite</p>
                    <p className="text-taupe-light text-sm">Première consultation sans engagement</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-white p-6 rounded-lg shadow-soft">
                <h3 className="font-serif text-xl text-taupe mb-3">Politique d'annulation</h3>
                <p className="text-taupe-light text-sm leading-relaxed">
                  Veuillez nous prévenir au moins 24 heures à l'avance si vous devez annuler ou reporter votre rendez-vous. 
                  Les annulations tardives peuvent entraîner des frais.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Go Rendez-vous Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-medium"
            >
              <h3 className="font-serif text-2xl text-taupe mb-6 text-center">
                Réserver maintenant
              </h3>
              
              <p className="text-taupe-light text-center mb-8">
                Cliquez sur le bouton ci-dessous pour accéder à notre système de réservation en ligne
              </p>

              {/* Go Rendez-vous Button Widget */}
              <div className="flex justify-center mb-8">
                <a 
                  href="https://www.gorendezvous.com/BookingWidget/?companyId=138849&buttons-color=%23ffffff&buttons-backgroundColor=%230088CC&source=WebSite&sourcedetails=massage-demo.preview.emergentagent.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
                  data-testid="gorendezvous-widget"
                >
                  <Calendar size={18} />
                  Prendre un rendez-vous
                </a>
              </div>

              {/* Or call us */}
              <div className="text-center">
                <p className="text-taupe-light text-sm mb-4">Ou appelez-nous directement</p>
                <a 
                  href="tel:+14388822165"
                  className="inline-flex items-center justify-center gap-2 border-2 border-taupe text-taupe px-6 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe hover:text-white transition-colors"
                >
                  <Phone size={16} />
                  +1 438 882 2165
                </a>
              </div>

              {/* Benefits */}
              <div className="mt-10 pt-8 border-t border-stone">
                <h4 className="font-serif text-lg text-taupe mb-4 text-center">Pourquoi réserver en ligne?</h4>
                <ul className="space-y-3">
                  {[
                    "Disponibilité en temps réel",
                    "Confirmation instantanée",
                    "Rappels automatiques par courriel",
                    "Modification facile de votre rendez-vous"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-taupe-light text-sm">
                      <span className="w-2 h-2 bg-taupe rounded-full flex-shrink-0"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl text-taupe mb-4">Nous trouver</h2>
            <p className="text-taupe-light">2475 rue Saint-Georges, Lemoyne, QC J4R 2T4</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-medium h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.5!2d-73.5!3d45.53!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s2475%20rue%20Saint-Georges%2C%20Lemoyne%2C%20QC%20J4R%202T4!5e0!3m2!1sfr!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="L'atelier Secret Location"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
