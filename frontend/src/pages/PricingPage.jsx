import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';

// Pricing data configuration
const PRICING_DATA = {
  'hair-removal-price': {
    title: 'Tarifs',
    subtitle: 'Épilation au Laser',
    description: 'Obtenez une peau lisse et sans poils grâce à nos services professionnels d\'épilation au laser.',
    heroImage: 'https://www.lateliersecret.ca/images/fgbhg.png',
    prices: [
      { area: 'Aisselles', price: '55$' },
      { area: 'Bikini intégral', price: '145$' },
      { area: 'Bikini échancré', price: '125$' },
      { area: 'Jambes complètes', price: '295$' },
      { area: 'Demi-jambes', price: '165$' },
      { area: 'Cuisses', price: '175$' },
      { area: 'Bras complets', price: '175$' },
      { area: 'Avant-bras', price: '125$' },
      { area: 'Épaules', price: '75$' },
      { area: 'Mains', price: '75$' },
      { area: 'Dos complet', price: '225$' },
      { area: 'Haut du dos', price: '135$' },
      { area: 'Lombaires', price: '125$' },
      { area: 'Ventre', price: '165$' },
      { area: 'Poitrine', price: '175$' },
      { area: 'Fesses', price: '95$' },
      { area: 'Interglutéal', price: '55$' },
      { area: 'Aréoles', price: '45$' },
      { area: 'Visage complet', price: '165$' },
      { area: 'Cou', price: '65$' },
      { area: 'Favoris', price: '45$' },
      { area: 'Lèvre supérieure', price: '45$' },
      { area: 'Menton + Lèvre', price: '80$' },
      { area: 'Zone barbe', price: '115$' },
    ],
    promotions: [
      { discount: '15%', description: 'Pour 2 zones' },
      { discount: '20%', description: 'Pour 3 zones' },
      { discount: '25%', description: 'Pour 4 zones ou plus' },
    ]
  },
  'facial-treatments-price': {
    title: 'Tarifs Soins du Visage',
    subtitle: 'Soins Faciaux',
    description: 'Découvrez nos soins du visage haut de gamme pour révéler votre beauté naturelle.',
    heroImage: 'https://www.lateliersecret.ca/images/services/3%20(1).webp',
    prices: [
      { area: 'Soin de luxe', price: '115$' },
      { area: 'Soin anti-âge', price: '145$' },
      { area: 'Nettoyage ultra-pur', price: '95$' },
      { area: 'Traitement acné', price: '125$' },
      { area: 'Hydratation extrême', price: '105$' },
      { area: 'Radiofréquence', price: '175$' },
      { area: 'Microdermabrasion', price: '135$' },
      { area: 'Microneedling', price: '195$' },
      { area: 'Peeling naturel', price: '115$' },
      { area: 'Photorajeunissement', price: '165$' },
      { area: 'Peeling charbon', price: '95$' },
      { area: 'Irrégularités pigmentaires', price: '145$' },
      { area: 'Raffermissement', price: '185$' },
    ],
    promotions: [
      { discount: '10%', description: 'Forfait 3 séances' },
      { discount: '15%', description: 'Forfait 6 séances' },
      { discount: '20%', description: 'Forfait 10 séances' },
    ]
  },
  'eyelash-extensions-price': {
    title: 'Tarifs',
    subtitle: 'Extensions de Cils',
    description: 'Un service unique, professionnel et fait sur mesure',
    heroImage: 'https://www.lateliersecret.ca/images/2.png',
    hideNossTarifs: true,
    prices: [
      { area: 'Pose Classique', price: '135$' },
      { area: 'Pose Hybride', price: '155$' },
      { area: 'Pose Volume', price: '175$' },
      { area: 'Remplissage 1 semaine', price: '55$' },
      { area: 'Remplissage 2 semaines', price: '65$' },
      { area: 'Remplissage 3 semaines', price: '75$' },
      { area: 'Rehaussement de cils', price: '165$' },
      { area: 'Rehaussement de cils + teinture', price: '175$' },
    ],
    promotions: [
      { discount: '10%', description: 'Nouveau client' },
      { discount: 'Gratuit', description: 'Retouche avec forfait mensuel' },
    ]
  },
  'body-care-price': {
    title: 'Tarifs',
    subtitle: 'Soins Corporels',
    description: 'Sculptez et tonifiez votre corps avec nos traitements non-invasifs.',
    heroImage: 'https://www.lateliersecret.ca/images/slider/4.webp',
    hideNossTarifs: true,
    prices: [
      { area: 'Lipocavitation (1 zone)', price: '75$' },
      { area: 'Lipocavitation (2 zones)', price: '125$' },
      { area: 'Lipocavitation (3 zones)', price: '165$' },
      { area: 'Radiofréquence corps', price: '95$' },
      { area: 'Drainage lymphatique', price: '85$' },
      { area: 'Enveloppement minceur', price: '115$' },
      { area: 'Massage sculptant', price: '95$' },
      { area: 'Forfait corps complet', price: '225$' },
    ],
    promotions: [
      { discount: '15%', description: 'Forfait 5 séances' },
      { discount: '25%', description: 'Forfait 10 séances' },
    ]
  }
};

const PricingPage = ({ pricingId: propPricingId }) => {
  const params = useParams();
  const pricingId = propPricingId || params.pricingId;
  const pricing = PRICING_DATA[pricingId];

  if (!pricing) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-charcoal mb-4">Page non trouvée</h1>
          <Link to="/" className="text-salmon hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={pricing.heroImage}
            alt={pricing.title}
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
            data-testid="pricing-page-title"
          >
            {pricing.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            {pricing.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Pricing List */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            {pricing.subtitle && !pricing.hideNossTarifs && (
              <span className="font-script text-salmon text-2xl">Nos tarifs</span>
            )}
            {pricing.subtitle && (
              <h2 className="font-serif text-3xl text-charcoal mt-2">{pricing.subtitle}</h2>
            )}
            <p className="text-charcoal-light mt-4">{pricing.description}</p>
            <div className="section-divider mx-auto mt-6" />
          </div>

          {/* Promotions - Now before price list */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden mb-12">
            <div className="p-6 bg-gold/10 border-b border-gold/20">
              <h3 className="font-serif text-xl text-charcoal">Promotions</h3>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricing.promotions.map((promo, index) => (
                <motion.div
                  key={promo.description}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center p-6 bg-cream rounded-xl"
                  data-testid={`promo-${index}`}
                >
                  <span className="font-serif text-3xl text-salmon">{promo.discount}</span>
                  <p className="text-charcoal-light mt-2">{promo.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Price List */}
          <div className="bg-white rounded-2xl shadow-soft overflow-hidden">
            <div className="p-6 bg-salmon/5 border-b border-stone">
              <h3 className="font-serif text-xl text-charcoal">Liste des prix</h3>
            </div>
            <div className="divide-y divide-stone">
              {pricing.prices.map((item, index) => (
                <motion.div
                  key={item.area}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className="flex justify-between items-center p-4 hover:bg-cream/50 transition-colors"
                  data-testid={`price-item-${index}`}
                >
                  <span className="text-charcoal">{item.area}</span>
                  <span className="font-medium text-salmon">{item.price}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-salmon">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Prêt(e) à réserver votre soin?
          </h2>
          <p className="text-white/80 mb-8">
            Découvrez nos soins haut de gamme et révélez votre beauté naturelle.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-salmon px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
            data-testid="pricing-book-btn"
          >
            Prendre rendez-vous
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default PricingPage;
