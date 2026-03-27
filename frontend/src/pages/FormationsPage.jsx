import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Users } from 'lucide-react';

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

const FORMATIONS_LIST = [
  {
    title: "Esthétique Débutant",
    description: "Initiation aux fondamentaux de l'esthétique pour démarrer votre carrière dans le domaine de la beauté.",
    image: "https://customer-assets.emergentagent.com/job_70aebdef-865f-4706-8678-353e85a52623/artifacts/dewok1cx_pexels-arina-krasnikova-6663369.jpg",
    link: "/aesthetic-beginner",
    duration: "Formation initiale",
    level: "Débutant"
  },
  {
    title: "Esthétique Intermédiaire",
    description: "Approfondissez vos connaissances de base avec des techniques supplémentaires pour vous démarquer.",
    image: "https://customer-assets.emergentagent.com/job_70aebdef-865f-4706-8678-353e85a52623/artifacts/paxffd6c_pexels-arina-krasnikova-6663374.jpg",
    link: "/aesthetic-beginner-plus",
    duration: "Formation intermédiaire",
    level: "Intermédiaire"
  },
  {
    title: "Esthétique Avancé",
    description: "Formation complète pour maîtriser les techniques esthétiques avancées et développer votre expertise professionnelle.",
    image: "https://customer-assets.emergentagent.com/job_70aebdef-865f-4706-8678-353e85a52623/artifacts/7hojczl6_Untitled%20design%20%284%29.png",
    link: "/aesthetic-advance",
    duration: "Formation complète",
    level: "Avancé"
  },
  {
    title: "Extensions de Cils Classique",
    description: "Apprenez les techniques professionnelles d'extension de cils classique pour créer des regards sublimes et naturels.",
    image: "https://images.pexels.com/photos/5128235/pexels-photo-5128235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "/eyelash-extension",
    duration: "Formation spécialisée",
    level: "Tous niveaux"
  },
  {
    title: "Extensions de Cils Volume",
    description: "Maîtrisez les techniques avancées d'extension de cils volume pour des regards intenses et glamour.",
    image: "https://images.pexels.com/photos/5128220/pexels-photo-5128220.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    link: "/eyelash-extension-volume",
    duration: "Formation spécialisée",
    level: "Tous niveaux"
  },
  {
    title: "Rehaussement de Cils",
    description: "Maîtrisez l'art du rehaussement de cils (Lash Lift) pour offrir un regard naturellement sublimé.",
    image: "https://www.lateliersecret.ca/images/vfsdv.jpeg",
    link: "/classic-volume-lifting",
    duration: "Formation spécialisée",
    level: "Tous niveaux"
  }
];

const FormationsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl text-taupe font-light uppercase tracking-wide mb-6"
            data-testid="formations-page-title"
          >
            Nos Formations
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-taupe-light text-lg max-w-2xl mx-auto"
          >
            Développez vos compétences avec nos formations professionnelles en esthétique. 
            Que vous soyez débutant ou professionnel, nous avons la formation adaptée à vos objectifs.
          </motion.p>
          <div className="section-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-stone/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-taupe/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-taupe" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-taupe mb-2">Certification</h3>
              <p className="text-taupe-light text-sm">Obtenez une certification reconnue à la fin de chaque formation</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-taupe/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-taupe" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-taupe mb-2">Petits Groupes</h3>
              <p className="text-taupe-light text-sm">Formation en petits groupes pour un apprentissage personnalisé</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-taupe/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-taupe" size={28} strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-xl text-taupe mb-2">Pratique Intensive</h3>
              <p className="text-taupe-light text-sm">80% de pratique pour maîtriser les techniques rapidement</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {FORMATIONS_LIST.map((formation, index) => (
              <motion.div
                key={formation.link}
                variants={fadeInUp}
                className="group"
              >
                <Link 
                  to={formation.link}
                  className="block bg-white rounded-none overflow-hidden shadow-soft hover:shadow-medium transition-shadow border border-stone h-full"
                  data-testid={`formation-card-${index}`}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={formation.image} 
                      alt={formation.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      <span className="text-xs bg-stone/50 text-taupe px-2 py-1 rounded-none uppercase tracking-wider">
                        {formation.level}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-taupe mb-2 font-normal">
                      {formation.title}
                    </h3>
                    <p className="text-taupe-light text-sm mb-4 leading-relaxed">
                      {formation.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-taupe text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                      En savoir plus <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-taupe">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
            PRÊT À DÉVELOPPER VOS COMPÉTENCES?
          </h2>
          <p className="text-white/80 mb-8">Contactez-nous pour plus d'informations sur nos formations</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14388822165"
              className="inline-flex items-center justify-center gap-2 bg-white text-taupe px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-stone transition-colors"
            >
              Téléphoner
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-taupe transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormationsPage;
