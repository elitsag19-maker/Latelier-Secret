import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, ArrowRight, Shield, Zap, Clock, Star } from 'lucide-react';

// Service data configuration
const SERVICES_DATA = {
  'laser-hair': {
    title: 'Épilation Laser',
    subtitle: 'Peau lisse et soyeuse',
    description: 'Découvrez la liberté d\'une réduction permanente des poils avec notre traitement d\'épilation laser avancé. Utilisant une technologie de pointe, nous offrons des résultats sûrs, efficaces et durables pour tous les types de peau.',
    image: 'https://www.lateliersecret.ca/images/rfg.jpeg',
    heroImage: 'https://www.lateliersecret.ca/images/services/1.webp',
    metaTitle: 'Épilation Laser LeMoyne | L\'Atelier Secret | Appelez Maintenant',
    metaDescription: 'Services d\'épilation laser à LeMoyne pour une peau lisse et sans poils utilisant une technologie laser avancée et sécuritaire.',
    benefits: [
      'Réduction permanente des poils',
      'Sécuritaire pour tous types de peau',
      'Technologie de refroidissement avancée',
      'Sessions rapides et efficaces'
    ],
    features: [
      { icon: Zap, title: 'Traitement Rapide', description: 'Sessions courtes sans temps de récupération.' },
      { icon: Shield, title: 'Sûr et Efficace', description: 'Sécurité pour tous les types de peau.' },
      { icon: Clock, title: 'Résultats Durables', description: 'Réduction permanente garantie.' }
    ],
    testimonial: {
      text: "J'ai essayé diverses méthodes d'épilation avant, mais le traitement laser chez L'atelier a changé ma vie! Les résultats sont incroyables et le processus est tellement plus confortable que prévu.",
      author: 'Sarah K.',
      role: 'Cliente vérifiée'
    },
    priceLink: '/hair-removal-price'
  },
  'microneedling': {
    title: 'Microneedling',
    subtitle: 'Régénération cutanée',
    description: 'Le microneedling stimule la production naturelle de collagène de votre peau, réduisant les cicatrices, les rides et améliorant la texture générale. Découvrez une peau rajeunie et éclatante.',
    image: 'https://www.lateliersecret.ca/images/services/2%20(1).webp',
    heroImage: 'https://www.lateliersecret.ca/images/services/2%20(1).webp',
    metaTitle: 'Microneedling LeMoyne | L\'Atelier Secret',
    metaDescription: 'Traitement de microneedling professionnel à LeMoyne pour stimuler le collagène et rajeunir votre peau.',
    benefits: [
      'Stimule la production de collagène',
      'Réduit les cicatrices et rides',
      'Améliore la texture de la peau',
      'Résultats naturels progressifs'
    ],
    features: [
      { icon: Zap, title: 'Régénération', description: 'Stimulation naturelle du collagène.' },
      { icon: Shield, title: 'Non-Invasif', description: 'Traitement doux et sécuritaire.' },
      { icon: Clock, title: 'Progressif', description: 'Amélioration visible à chaque session.' }
    ],
    testimonial: {
      text: "Mes cicatrices d'acné ont considérablement diminué après seulement 3 sessions. Ma peau n'a jamais été aussi belle!",
      author: 'Marie L.',
      role: 'Cliente vérifiée'
    },
    priceLink: '/facial-treatments-price'
  },
  'luxury-facial': {
    title: 'Soin du Visage de Luxe',
    subtitle: 'Expérience premium',
    description: 'Offrez-vous un soin du visage de luxe qui nettoie, hydrate et rajeunit votre peau. Nos traitements personnalisés utilisent des produits haut de gamme pour des résultats exceptionnels.',
    image: 'https://www.lateliersecret.ca/images/services/3%20(1).webp',
    heroImage: 'https://www.lateliersecret.ca/images/services/3%20(1).webp',
    metaTitle: 'Soin du Visage de Luxe LeMoyne | L\'Atelier Secret',
    metaDescription: 'Soins du visage de luxe personnalisés à LeMoyne. Nettoyage en profondeur, hydratation et rajeunissement.',
    benefits: [
      'Nettoyage en profondeur',
      'Hydratation intense',
      'Éclat instantané',
      'Produits premium'
    ],
    features: [
      { icon: Zap, title: 'Nettoyage Profond', description: 'Élimination des impuretés.' },
      { icon: Shield, title: 'Hydratation', description: 'Peau repulpée et éclatante.' },
      { icon: Clock, title: 'Relaxation', description: 'Moment de détente absolue.' }
    ],
    testimonial: {
      text: "Un moment de pure détente! Ma peau est transformée, lumineuse et hydratée comme jamais.",
      author: 'Julie M.',
      role: 'Cliente régulière'
    },
    priceLink: '/facial-treatments-price'
  },
  'anti-aging-facial': {
    title: 'Soin Anti-Âge',
    subtitle: 'Soins lumineux',
    description: 'Nos soins anti-âge avancés combattent les signes du vieillissement avec des technologies LED et des actifs puissants. Redécouvrez une peau ferme, lisse et éclatante de jeunesse.',
    image: 'https://www.lateliersecret.ca/images/services/4%20(1).webp',
    heroImage: 'https://www.lateliersecret.ca/images/services/4%20(1).webp',
    metaTitle: 'Soin Anti-Âge LeMoyne | L\'Atelier Secret',
    metaDescription: 'Traitements anti-âge professionnels à LeMoyne. Technologie LED et soins avancés pour une peau rajeunie.',
    benefits: [
      'Réduit les rides et ridules',
      'Raffermit la peau',
      'Technologie LED avancée',
      'Résultats visibles rapidement'
    ],
    features: [
      { icon: Zap, title: 'Anti-Rides', description: 'Réduction visible des rides.' },
      { icon: Shield, title: 'Raffermissant', description: 'Peau plus ferme et tonique.' },
      { icon: Clock, title: 'Technologie LED', description: 'Stimulation cellulaire.' }
    ],
    testimonial: {
      text: "À 50 ans, ma peau n'a jamais été aussi belle. Les soins anti-âge ont vraiment fait la différence!",
      author: 'Nathalie R.',
      role: 'Cliente vérifiée'
    },
    priceLink: '/facial-treatments-price'
  }
};

const ServicePage = () => {
  const { serviceId } = useParams();
  const service = SERVICES_DATA[serviceId];

  if (!service) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-charcoal mb-4">Service non trouvé</h1>
          <Link to="/" className="text-salmon hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.heroImage}
            alt={service.title}
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
            data-testid="service-page-title"
          >
            {service.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            {service.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl overflow-hidden shadow-medium"
            >
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-script text-salmon text-2xl">{service.subtitle}</span>
              <h2 className="font-serif text-4xl text-charcoal mt-2 mb-6">{service.title}</h2>
              <div className="section-divider mb-8" />
              
              <p className="text-charcoal-light text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-4 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-charcoal">
                    <CheckCircle size={20} className="text-salmon flex-shrink-0" strokeWidth={1.5} />
                    {benefit}
                  </li>
                ))}
              </ul>

              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-salmon text-white px-8 py-4 rounded-full font-medium hover:bg-salmon-dark transition-colors btn-lift"
                data-testid="service-book-btn"
              >
                Réserver votre session
                <ArrowRight size={18} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-stone/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white p-8 rounded-2xl shadow-soft"
                data-testid={`feature-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-salmon/10 flex items-center justify-center">
                  <feature.icon size={28} className="text-salmon" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-charcoal mb-2">{feature.title}</h3>
                <p className="text-charcoal-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-10 rounded-2xl shadow-soft border border-gold/10"
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-gold text-gold" />
              ))}
            </div>
            <p className="text-charcoal-light text-lg italic mb-6 leading-relaxed">
              "{service.testimonial.text}"
            </p>
            <p className="font-medium text-charcoal">{service.testimonial.author}</p>
            <p className="text-charcoal-muted text-sm">{service.testimonial.role}</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-salmon">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Prêt(e) à réserver?
          </h2>
          <p className="text-white/80 mb-8">
            Découvrez nos tarifs et forfaits
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-salmon px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
              data-testid="service-cta-book"
            >
              Réserver maintenant
            </Link>
            <Link
              to={service.priceLink}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-salmon transition-colors"
              data-testid="service-cta-prices"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
