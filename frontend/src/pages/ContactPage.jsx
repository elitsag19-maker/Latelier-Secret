import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.lateliersecret.ca/images/slider/3.webp"
            alt="Contactez-nous"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/50" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl mb-4"
            data-testid="contact-page-title"
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Nous aimerions avoir de vos nouvelles
          </motion.p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 md:p-10 rounded-2xl shadow-soft"
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="mx-auto mb-4 text-green-500" />
                  <h3 className="font-serif text-2xl text-charcoal mb-2">Message envoyé!</h3>
                  <p className="text-charcoal-light">Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <>
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Envoyez-nous un message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Nom complet *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                        placeholder="Votre nom"
                        data-testid="contact-input-name"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Adresse courriel *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                        placeholder="email@exemple.com"
                        data-testid="contact-input-email"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Téléphone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                        placeholder="+1 438 000 0000"
                        data-testid="contact-input-phone"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors resize-none"
                        placeholder="Votre message..."
                        data-testid="contact-input-message"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-salmon text-white py-4 rounded-full font-medium hover:bg-salmon-dark transition-colors disabled:opacity-50"
                      data-testid="contact-submit-btn"
                    >
                      {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                      {!isSubmitting && <Send size={18} />}
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <span className="font-script text-salmon text-2xl">Pour toute demande</span>
                <h2 className="font-serif text-3xl text-charcoal mt-2">Nos Coordonnées</h2>
              </div>

              <div className="space-y-6">
                {/* Address - NAP Critical for Local SEO */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-salmon/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={22} className="text-salmon" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Notre emplacement</h3>
                    <address className="not-italic text-charcoal-light" data-testid="contact-address">
                      <p className="font-medium text-charcoal">L'atelier Secret</p>
                      <p>2475 Saint-Georges Street</p>
                      <p>LeMoyne, QC J4R 2T4</p>
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-salmon/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={22} className="text-salmon" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Appelez-nous</h3>
                    <a 
                      href="tel:+14388822165" 
                      className="text-charcoal-light hover:text-salmon transition-colors"
                      data-testid="contact-phone"
                    >
                      +1 438 882 2165
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-salmon/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={22} className="text-salmon" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Écrivez-nous</h3>
                    <a 
                      href="mailto:info@lateliersecret.ca" 
                      className="text-charcoal-light hover:text-salmon transition-colors"
                      data-testid="contact-email"
                    >
                      info@lateliersecret.ca
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-soft">
                  <div className="w-12 h-12 rounded-full bg-salmon/10 flex items-center justify-center flex-shrink-0">
                    <Clock size={22} className="text-salmon" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Heures d'ouverture</h3>
                    <div className="text-charcoal-light space-y-1">
                      <p>Lundi - Vendredi: 9h00 - 21h00</p>
                      <p>Samedi: 10h00 - 18h00</p>
                      <p>Dimanche: Fermé</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Book CTA */}
              <div className="bg-salmon p-8 rounded-2xl text-center">
                <h3 className="font-serif text-2xl text-white mb-2">Prêt(e) à réserver?</h3>
                <p className="text-white/80 mb-6">Réservez votre rendez-vous en ligne</p>
                <Link
                  to="/booking"
                  className="inline-block bg-white text-salmon px-8 py-3 rounded-full font-medium hover:bg-cream transition-colors"
                  data-testid="contact-book-btn"
                >
                  Réserver maintenant
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] bg-stone">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.3!2d-73.5078!3d45.5088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMwJzMxLjciTiA3M8KwMzAnMjguMSJX!5e0!3m2!1sen!2sca!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="L'atelier Secret Location"
          className="grayscale"
        />
      </section>
    </>
  );
};

export default ContactPage;
