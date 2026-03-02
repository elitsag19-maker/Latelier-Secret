import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Mail, Phone, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

const SERVICES = [
  { value: 'luxury-facial', label: 'Soin du visage de luxe' },
  { value: 'anti-aging', label: 'Soin du visage anti-âge' },
  { value: 'deep-cleansing', label: 'Nettoyage ultra-pur' },
  { value: 'acne-treatment', label: 'Traitement de l\'acné' },
  { value: 'hydration', label: 'Hydratation extrême' },
  { value: 'radiofrequency', label: 'Radiofréquence' },
  { value: 'microdermabrasion', label: 'Microdermabrasion' },
  { value: 'microneedling', label: 'Microneedling' },
  { value: 'natural-peeling', label: 'Peeling naturel' },
  { value: 'photorejuvenation', label: 'Photorajeunissement' },
  { value: 'laser-hair-removal', label: 'Épilation laser' },
  { value: 'eyelash-extensions', label: 'Extensions de cils' },
  { value: 'lipocavitation', label: 'Lipocavitation' },
];

const TIME_SLOTS = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00'
];

const BookingPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    specialist: '',
    date: '',
    time: '',
    notes: '',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (isSubmitted) {
    return (
      <>
        {/* Hero Banner */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="https://www.lateliersecret.ca/images/slider/2.webp"
              alt="Réservation confirmée"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/50" />
          </div>
          <div className="relative z-10 text-center text-white px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={64} className="mx-auto mb-4 text-green-400" />
              <h1 className="font-serif text-4xl md:text-5xl mb-4">Réservation Confirmée!</h1>
              <p className="text-white/80">Nous vous contacterons sous peu pour confirmer votre rendez-vous.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-cream">
          <div className="max-w-xl mx-auto px-6 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-soft">
              <h2 className="font-serif text-2xl text-charcoal mb-4">Détails de votre réservation</h2>
              <div className="text-left space-y-3 text-charcoal-light mb-8">
                <p><strong>Service:</strong> {SERVICES.find(s => s.value === formData.service)?.label}</p>
                <p><strong>Date:</strong> {formData.date}</p>
                <p><strong>Heure:</strong> {formData.time}</p>
                <p><strong>Nom:</strong> {formData.firstName} {formData.lastName}</p>
              </div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-salmon text-white px-8 py-3 rounded-full font-medium hover:bg-salmon-dark transition-colors"
                data-testid="back-home-btn"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.lateliersecret.ca/images/slider/2.webp"
            alt="Prendre rendez-vous"
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
            data-testid="booking-page-title"
          >
            Prendre Rendez-vous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Réservez votre soin de beauté
          </motion.p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                  step >= s ? 'bg-salmon text-white' : 'bg-stone text-charcoal-light'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`w-20 h-1 ${step > s ? 'bg-salmon' : 'bg-stone'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8 md:p-12">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Personal Info */}
              {step === 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Informations personnelles</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Prénom *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                          placeholder="Votre prénom"
                          data-testid="input-firstname"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Nom de famille *</label>
                      <div className="relative">
                        <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                          placeholder="Votre nom"
                          data-testid="input-lastname"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Adresse courriel *</label>
                      <div className="relative">
                        <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                          placeholder="email@exemple.com"
                          data-testid="input-email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Numéro de téléphone *</label>
                      <div className="relative">
                        <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                          placeholder="+1 438 000 0000"
                          data-testid="input-phone"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Service Selection */}
              {step === 2 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Sélection du service</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Choisir un traitement *</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors bg-white"
                        data-testid="select-service"
                      >
                        <option value="">Sélectionnez un service</option>
                        {SERVICES.map(service => (
                          <option key={service.value} value={service.value}>{service.label}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Spécialiste préféré (optionnel)</label>
                      <select
                        name="specialist"
                        value={formData.specialist}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors bg-white"
                        data-testid="select-specialist"
                      >
                        <option value="">Aucune préférence</option>
                        <option value="anna">Anna S.</option>
                        <option value="elisa">Elisa G.</option>
                      </select>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="font-serif text-2xl text-charcoal mb-6">Date et heure</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Sélectionner une date *</label>
                      <div className="relative">
                        <Calendar size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full pl-12 pr-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors"
                          data-testid="input-date"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-charcoal-light text-sm mb-2">Sélectionner l'heure *</label>
                      <div className="relative">
                        <Clock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-muted" />
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors bg-white"
                          data-testid="select-time"
                        >
                          <option value="">Choisissez l'heure</option>
                          {TIME_SLOTS.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-charcoal-light text-sm mb-2">Notes supplémentaires (optionnel)</label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-stone rounded-lg focus:border-salmon focus:outline-none transition-colors resize-none"
                      placeholder="Exigences particulières ou remarques..."
                      data-testid="input-notes"
                    />
                  </div>

                  <div className="flex items-start gap-3 mb-6">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      id="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 w-5 h-5 text-salmon border-stone rounded focus:ring-salmon"
                      data-testid="checkbox-terms"
                    />
                    <label htmlFor="acceptTerms" className="text-charcoal-light text-sm">
                      J'accepte les termes et conditions. En réservant un rendez-vous, vous acceptez notre 
                      politique d'annulation et notre politique de confidentialité.
                    </label>
                  </div>
                </motion.div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-stone">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex items-center gap-2 text-charcoal hover:text-salmon transition-colors"
                    data-testid="btn-prev"
                  >
                    <ArrowLeft size={18} />
                    Précédent
                  </button>
                ) : (
                  <div />
                )}
                
                {step < 3 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="inline-flex items-center gap-2 bg-salmon text-white px-8 py-3 rounded-full font-medium hover:bg-salmon-dark transition-colors"
                    data-testid="btn-next"
                  >
                    Suivant
                    <ArrowRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting || !formData.acceptTerms}
                    className="inline-flex items-center gap-2 bg-salmon text-white px-8 py-3 rounded-full font-medium hover:bg-salmon-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    data-testid="btn-submit"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
                    {!isSubmitting && <CheckCircle size={18} />}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Side Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-serif text-lg text-charcoal mb-4">Horaires d'ouverture</h3>
              <div className="text-charcoal-light text-sm space-y-2">
                <p>Lundi - Vendredi: 9h00 - 21h00</p>
                <p>Samedi: 10h00 - 18h00</p>
                <p>Dimanche: Fermé</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-soft">
              <h3 className="font-serif text-lg text-charcoal mb-4">Politique d'annulation</h3>
              <ul className="text-charcoal-light text-sm space-y-2">
                <li>• Préavis de 24h requis pour annulation</li>
                <li>• Frais possibles pour annulation tardive</li>
                <li>• No-show: 50% du prix facturé</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookingPage;
