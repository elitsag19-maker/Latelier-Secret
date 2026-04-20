import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Phone, CheckCircle, Sparkles } from 'lucide-react';
import PromoBanner from '../components/PromoBanner';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Hero Section
const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-white">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://customer-assets.emergentagent.com/job_atelier-optimize/artifacts/2e5l4b4o_Screenshot_20260301_234621_Wix.jpg"
        alt="L'atelier Secret - Beauté naturelle"
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/40 to-transparent" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
      <div className="max-w-xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 font-light"
          style={{ color: '#3D2B1F' }}
          data-testid="hero-title"
        >
          Exprimez votre beauté naturelle.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <Link
            to="/booking"
            className="inline-flex items-center justify-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
            data-testid="hero-book-btn"
          >
            Consultation Gratuite
          </Link>
          <Link
            to="/formations"
            className="inline-flex items-center justify-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
            data-testid="hero-formations-btn"
          >
            Formations
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// Services Section
const ServicesSection = () => {
  const services = [
    {
      title: "ÉPILATION AU LASER",
      description: "Découvrir",
      image: "https://static.wixstatic.com/media/9426a1_b941e26d1d9e46d38f15c68cfd693de9~mv2.jpg/v1/crop/x_0,y_85,w_481,h_680/fill/w_239,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/epilation-laser-1_edited.jpg",
      link: "/epilation-laser"
    },
    {
      title: "FACIAL DE LUXE",
      description: "Découvrir",
      image: "https://static.wixstatic.com/media/11062b_017f998d03a44d5494c1f4eb4a9fcace~mv2.jpg/v1/fill/w_239,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gros%20plan%20sur%20les%20soins%20de%20la%20peau.jpg",
      link: "/facial-de-luxe"
    },
    {
      title: "SOIN SILHOUETTE",
      description: "Découvrir",
      image: "https://static.wixstatic.com/media/9426a1_c5d12f25e9034182857cfb8f7b9cbd2a~mv2.webp/v1/fill/w_239,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC7619.webp",
      link: "/soin-silhouette"
    },
    {
      title: "MICRODERMABRASION",
      description: "Découvrir",
      image: "https://static.wixstatic.com/media/11062b_6dfa28682dbf4247930028a218950e64~mv2.jpg/v1/crop/x_2019,y_0,w_2658,h_2543/fill/w_239,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gros%20plan%20sur%20le%20visage%20d'une%20femme.jpg",
      link: "/microdermabrasion"
    },
    {
      title: "PEELING AU CHARBON",
      description: "Découvrir",
      image: "https://static.wixstatic.com/media/11062b_c08353118ce849f98c46f9788443b1fe~mv2.jpg/v1/crop/x_0,y_147,w_5000,h_3038/fill/w_300,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Traitement%20facial%20au%20laser.jpg",
      link: "/peeling-charbon"
    },
    {
      title: "PEELING AUX ALGUES",
      description: "Découvrir",
      image: "https://static.wixstatic.com/media/da88f0575401483fb62f625d9b0033cb.jpg/v1/fill/w_239,h_338,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Femme.jpg",
      link: "/peeling-algues"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-taupe font-light uppercase tracking-wide" data-testid="services-title">
            Nos Soins Les Plus Populaires
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeInUp}
              className="group"
            >
              <Link 
                to={service.link}
                className="block bg-white rounded-none overflow-hidden shadow-soft hover:shadow-medium transition-shadow card-hover"
                data-testid={`service-card-${index}`}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-lg text-taupe mb-2 font-normal tracking-wide">{service.title}</h3>
                  <p className="text-taupe-light text-sm uppercase tracking-wider group-hover:text-taupe transition-colors">{service.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Services Link */}
        <div className="text-center mt-12">
          <p className="text-taupe-light mb-4">Et 6 autres soins disponibles</p>
          <Link
            to="/soins"
            className="inline-flex items-center gap-2 border-2 border-taupe text-taupe px-8 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe hover:text-white transition-colors"
            data-testid="view-all-services-btn"
          >
            Voir tous nos soins
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => (
  <section className="py-24 bg-stone/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[3/4] rounded-none overflow-hidden shadow-medium">
            <img 
              src="https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="L'atelier Secret - Centre esthétique"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Stats Card */}
          <div className="absolute -bottom-8 -right-8 bg-white rounded-none shadow-medium p-6 hidden md:block">
            <div className="text-center">
              <span className="font-serif text-4xl text-taupe">15+</span>
              <p className="text-taupe-light text-sm mt-1">Années d'expérience</p>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="font-serif text-3xl md:text-4xl text-taupe mb-6 font-light uppercase tracking-wide" data-testid="about-title">
            À Propos de Nous
          </h2>
          <div className="section-divider mb-8" />
          
          <p className="text-taupe text-lg leading-relaxed mb-6">
            L'atelier Secret est un centre esthétique professionnel basé sur la Rive Sud de Montréal, 
            spécialisé dans les traitements de soins de la peau avancés tels que 
            l'épilation laser, le microneedling, les soins du visage et les soins 
            de beauté personnalisés.
          </p>
          
          <p className="text-taupe-light leading-relaxed mb-8">
            Nous offrons une expérience haut de gamme et personnalisée axée sur 
            des résultats à long terme et le bien-être de nos clients.
          </p>

          <ul className="space-y-4 mb-8">
            {[
              "Esthéticiennes professionnelles et certifiées",
              "Équipement et techniques modernes",
              "Satisfaction 100% garantie"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-taupe">
                <CheckCircle size={20} className="text-taupe flex-shrink-0" strokeWidth={1.5} />
                {item}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
            data-testid="about-learn-more-btn"
          >
            En savoir plus
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </motion.div>
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mitali Ray",
      role: "Cliente fidèle",
      text: "J'ai été impressionnée par l'urgence de faire. Savoir ne suffit pas; nous devons appliquer. Être disposé ne suffit pas; nous devons faire.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "Designer",
      text: "Le service était exceptionnel. Le personnel était professionnel et attentif. Je recommande vivement leurs soins de beauté.",
      rating: 5
    },
    {
      name: "Emma Davis",
      role: "Artiste",
      text: "Des résultats incroyables de leurs soins du visage. L'atmosphère est relaxante et le personnel est très compétent.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-taupe font-light uppercase tracking-wide" data-testid="testimonials-title">
            Ce que disent nos clientes
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-stone/30 p-8 rounded-none border border-taupe/10"
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-taupe text-taupe" />
                ))}
              </div>
              <p className="text-taupe mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-medium text-taupe">{testimonial.name}</p>
                <p className="text-taupe-light text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing Preview Section
const PricingSection = () => {
  const packages = [
    {
      title: "Épilation Laser",
      price: "55",
      features: ["Peau lisse et résultats durables", "Sécuritaire pour tous types de peau", "Séances rapides et efficaces"],
      link: "/hair-removal-price",
      popular: true
    },
    {
      title: "Soins du Visage",
      price: "115",
      features: ["Nettoyage en profondeur", "Hydratation et éclat du teint", "Taches, rides, acné et plus"],
      link: "/facial-treatments-price",
      popular: false
    },
    {
      title: "Extensions Cils",
      price: "55",
      features: ["Look naturel ou dramatique", "Tenue longue durée garantie", "Rehausse vos yeux instantanément"],
      link: "/eyelash-extensions-price",
      popular: false
    },
    {
      title: "Soins Corps",
      price: "75",
      features: ["Sculptez et tonifiez votre corps", "Traitements non-invasifs", "Résultats visibles dès la 1ère séance"],
      link: "/body-care-price",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-stone/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-taupe font-light uppercase tracking-wide" data-testid="pricing-title">
            Forfaits
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-none p-8 bg-white shadow-soft border border-stone flex flex-col h-full"
              data-testid={`pricing-card-${index}`}
            >
              {pkg.popular && (
                <span className="absolute top-4 right-4 bg-taupe text-white text-xs px-3 py-1 rounded-none uppercase tracking-wider">
                  Populaire
                </span>
              )}
              
              <h3 className="font-serif text-xl mb-2 font-normal text-taupe">
                {pkg.title}
              </h3>
              <p className="text-sm mb-4 text-taupe-light">
                À partir de
              </p>
              <div className="mb-6">
                <span className="font-serif text-5xl text-taupe">
                  ${pkg.price}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-taupe-light">
                    <CheckCircle size={16} className="flex-shrink-0 mt-0.5 text-taupe" strokeWidth={1.5} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                to={pkg.link}
                className="block text-center py-3 rounded-none font-medium uppercase text-sm tracking-wider transition-colors bg-taupe text-white hover:bg-taupe-dark mt-auto"
              >
                Voir plus
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => (
  <section className="relative py-32 overflow-hidden">
    <div className="absolute inset-0">
      <img 
        src="https://images.pexels.com/photos/12115016/pexels-photo-12115016.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Book appointment"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-white/70" />
    </div>

    <div className="relative max-w-4xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm p-12 md:p-16 rounded-none shadow-medium"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-taupe mb-4 font-light uppercase tracking-wide" data-testid="cta-title">
          Réservez Maintenant
        </h2>
        <p className="text-taupe-light text-xl mb-8">
          Consultation gratuite
        </p>
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 bg-taupe text-white px-10 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
          data-testid="cta-book-btn"
        >
          Demander une consultation
          <ArrowRight size={18} strokeWidth={1.5} />
        </Link>
      </motion.div>
    </div>
  </section>
);

// Academy Section
const AcademySection = () => {
  const courses = [
    {
      title: "Esthétique",
      image: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      link: "/aesthetic-advance"
    },
    {
      title: "Extensions de cils",
      image: "https://customer-assets.emergentagent.com/job_70aebdef-865f-4706-8678-353e85a52623/artifacts/te61xztg_pexels-n-voitkevich-5128224.jpg",
      link: "/eyelash-extension"
    },
    {
      title: "Rehaussement de cils",
      image: "https://customer-assets.emergentagent.com/job_70aebdef-865f-4706-8678-353e85a52623/artifacts/p22niw3z_Copy%20of%20MICRONEEDLING_20260419_230634_0002.png",
      link: "/classic-volume-lifting"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-taupe font-light uppercase tracking-wide" data-testid="academy-title">
            Nos Formations
          </h2>
          <div className="section-divider mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link 
                to={course.link}
                className="group block bg-white rounded-none overflow-hidden shadow-soft hover:shadow-medium transition-shadow border border-stone"
                data-testid={`course-card-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-serif text-xl text-taupe group-hover:text-taupe-dark transition-colors font-normal">
                    {course.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-taupe text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Voir plus <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/formations"
            className="inline-flex items-center gap-2 border-2 border-taupe text-taupe px-8 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe hover:text-white transition-colors"
            data-testid="view-all-courses-btn"
          >
            Voir toutes les formations
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
};

// Main Home Page Component
const HomePage = () => {
  return (
    <>
      <PromoBanner />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <AcademySection />
      <CTASection />
    </>
  );
};

export default HomePage;
