import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Users, Clock, ArrowRight } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { value: "15+", label: "Années d'expérience", icon: Clock },
    { value: "2.5K+", label: "Clientes satisfaites", icon: Users },
    { value: "100%", label: "Spécialistes experts", icon: Award },
    { value: "100%", label: "Satisfaction garantie", icon: CheckCircle },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1609535895148-cf9f5c446290?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNtaWxpbmclMjBzcGElMjByZWxheGVkJTIwYmVhdXR5JTIwc2Fsb24lMjBiZWlnZSUyMHdhcm0lMjB0b25lc3xlbnwwfHx8fDE3NzM1NDA4NDd8MA&ixlib=rb-4.1.0&q=85"
            alt="À propos de L'atelier Secret"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-taupe/40" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl mb-4"
            data-testid="about-page-title"
          >
            À Propos de Nous
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Découvrez L'atelier Secret
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-cream">
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
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img 
                  src="https://images.unsplash.com/photo-1732813316061-b5b0fb1ceeec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NTJ8MHwxfHNlYXJjaHwzfHxlbGVnYW50JTIwd29tZW4lMjBoYXBweSUyMHB1cmUlMjBzb3BoaXN0aWNhdGVkJTIwYmVhdXR5JTIwcG9ydHJhaXQlMjBtaW5pbWFsJTIwYmVpZ2V8ZW58MHx8fHwxNzczNTQxMDQ3fDA&ixlib=rb-4.1.0&q=85"
                  alt="Femme élégante"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="font-script text-salmon text-2xl">Bienvenue chez</span>
              <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-2 mb-6">
                L'atelier Secret Beauty Salon
              </h2>
              <div className="section-divider mb-8" />
              
              <p className="text-charcoal-light text-lg leading-relaxed mb-6">
                Nous sommes dédiés à fournir des services de beauté exceptionnels dans un 
                environnement luxueux et relaxant. Notre équipe de professionnels qualifiés 
                s'engage à sublimer votre beauté naturelle et à garantir votre entière satisfaction.
              </p>
              
              <p className="text-charcoal-light leading-relaxed mb-8">
                Avec des années d'expérience dans l'industrie de la beauté, nous comprenons 
                que chaque cliente est unique. C'est pourquoi nous offrons des traitements 
                personnalisés adaptés à vos besoins et désirs spécifiques.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Esthéticiennes professionnelles et certifiées",
                  "Satisfaction 100% garantie",
                  "Équipement et techniques modernes"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-charcoal">
                    <CheckCircle size={20} className="text-salmon flex-shrink-0" strokeWidth={1.5} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-stone/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-salmon/10 flex items-center justify-center">
                  <stat.icon size={28} className="text-salmon" strokeWidth={1.5} />
                </div>
                <p className="font-serif text-4xl text-charcoal">{stat.value}</p>
                <p className="text-charcoal-light text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-script text-salmon text-2xl">Pourquoi nous choisir</span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-2">
              L'expérience L'Atelier Secret
            </h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Soins Personnalisés",
                description: "Chaque traitement est adapté à vos besoins uniques et préférences, garantissant les meilleurs résultats possibles."
              },
              {
                title: "Produits Premium",
                description: "Nous utilisons uniquement des produits de beauté de haute qualité et des équipements avancés."
              },
              {
                title: "Atmosphère Relaxante",
                description: "Vivez la tranquillité dans notre salon luxueux conçu pour votre confort ultime."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft"
                data-testid={`feature-${index}`}
              >
                <h3 className="font-serif text-xl text-charcoal mb-4">{item.title}</h3>
                <p className="text-charcoal-light leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-salmon">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Prêt(e) à commencer?
          </h2>
          <p className="text-white/80 mb-8">
            Réservez votre rendez-vous aujourd'hui
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-salmon px-8 py-4 rounded-full font-sans font-medium hover:bg-cream transition-colors"
            data-testid="about-book-btn"
          >
            Réserver maintenant
            <ArrowRight size={18} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
