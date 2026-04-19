import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Clock, Award, Users, CheckCircle } from 'lucide-react';

// Academy courses data
const COURSES_DATA = {
  'aesthetic-advance': {
    title: 'Cours Avancé d\'Esthétique',
    subtitle: 'Formation Professionnelle',
    description: 'Rejoignez notre programme de perfectionnement et devenez un leader dans le secteur de l\'esthétique. Formation intensive de 12 semaines pour une certification avancée.',
    heroImage: 'https://www.lateliersecret.ca/images/Aesthetic%20BeginnerPlusCourse.png',
    duration: '12 semaines',
    hours: '30 heures/semaine',
    certification: 'Certification avancée',
    maxStudents: '5 élèves max',
    modules: [
      {
        title: 'Procédures Avancées',
        items: ['Analyse cutanée avancée', 'Équipement spécialisé', 'Techniques de pointe']
      },
      {
        title: 'Gestion d\'Entreprise',
        items: ['Gestion clientèle', 'Marketing digital', 'Opérations commerciales']
      }
    ]
  },
  'aesthetic-beginner': {
    title: 'Cours Esthétique Débutant',
    subtitle: 'Formation Initiale',
    description: 'Commencez votre carrière dans l\'esthétique avec notre formation complète pour débutants. Apprenez les fondamentaux des soins de beauté.',
    heroImage: 'https://www.lateliersecret.ca/images/kbndg.jpeg',
    duration: '8 semaines',
    hours: '20 heures/semaine',
    certification: 'Certification débutant',
    maxStudents: '8 élèves max',
    modules: [
      {
        title: 'Fondamentaux',
        items: ['Anatomie de la peau', 'Hygiène et sécurité', 'Produits cosmétiques']
      },
      {
        title: 'Techniques de Base',
        items: ['Soins du visage de base', 'Épilation', 'Manucure/pédicure']
      }
    ]
  },
  'aesthetic-beginner-plus': {
    title: 'Cours Esthétique Débutant Plus',
    subtitle: 'Formation Intermédiaire',
    description: 'Perfectionnez vos compétences de base avec notre programme intermédiaire. Idéal pour ceux qui veulent approfondir leurs connaissances.',
    heroImage: 'https://www.lateliersecret.ca/images/AESTHETIC.png',
    duration: '10 semaines',
    hours: '25 heures/semaine',
    certification: 'Certification intermédiaire',
    maxStudents: '6 élèves max',
    modules: [
      {
        title: 'Soins Avancés',
        items: ['Soins anti-âge', 'Traitements spécialisés', 'Protocoles personnalisés']
      },
      {
        title: 'Pratique Professionnelle',
        items: ['Service client', 'Consultation', 'Vente de produits']
      }
    ]
  },
  'eyelash-extension': {
    title: 'Formation Extensions Cils Classique',
    subtitle: 'Spécialisation Regard',
    description: 'Maîtrisez l\'art des extensions de cils avec notre formation spécialisée. Techniques classiques pour sublimer le regard de vos clientes.',
    heroImage: 'https://www.lateliersecret.ca/images/2.png',
    duration: '4 semaines',
    hours: '15 heures/semaine',
    certification: 'Certification extensions cils classique',
    maxStudents: '4 élèves max',
    modules: [
      {
        title: 'Techniques Classiques',
        items: ['Extension classique 1:1', 'Cartographie des yeux', 'Choix des courbures']
      },
      {
        title: 'Pratique',
        items: ['Pose sur modèle', 'Retouches', 'Dépose sécuritaire']
      }
    ]
  },
  'eyelash-extension-volume': {
    title: 'Formation Extensions Cils Volume',
    subtitle: 'Technique Volume Russe',
    description: 'Perfectionnez vos compétences avec la technique du volume russe. Apprenez à créer des bouquets de cils pour un regard intense et glamour.',
    heroImage: 'https://www.lateliersecret.ca/images/2.png',
    duration: '3 semaines',
    hours: '12 heures/semaine',
    certification: 'Certification volume russe',
    maxStudents: '4 élèves max',
    modules: [
      {
        title: 'Techniques Volume',
        items: ['Volume russe 2D-6D', 'Méga volume', 'Création de bouquets']
      },
      {
        title: 'Pratique Avancée',
        items: ['Pose sur modèle', 'Techniques de remplissage', 'Entretien et conseils']
      }
    ]
  },
  'classic-volume-lifting': {
    title: 'Formation Lash Lift',
    subtitle: 'Rehaussement de Cils',
    description: 'Apprenez la technique du lash lift pour offrir à vos clientes des cils naturellement sublimés. Formation pratique et certifiante.',
    heroImage: 'https://www.lateliersecret.ca/images/vfsdv.jpeg',
    duration: '2 semaines',
    hours: '10 heures/semaine',
    certification: 'Certification lash lift',
    maxStudents: '4 élèves max',
    modules: [
      {
        title: 'Technique Lash Lift',
        items: ['Préparation', 'Application', 'Temps de pose']
      },
      {
        title: 'Finitions',
        items: ['Teinture', 'Entretien', 'Conseils clients']
      }
    ]
  }
};

const AcademyPage = ({ courseId: propCourseId }) => {
  const params = useParams();
  const courseId = propCourseId || params.courseId;
  const course = COURSES_DATA[courseId];

  if (!course) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-charcoal mb-4">Formation non trouvée</h1>
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
            src={course.heroImage}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 text-center text-white px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-6xl mb-4"
            data-testid="academy-page-title"
          >
            {course.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            {course.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 bg-stone/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Clock, label: 'Durée', value: course.duration },
              { icon: Clock, label: 'Heures', value: course.hours },
              { icon: Award, label: 'Certification', value: course.certification },
              { icon: Users, label: 'Groupe', value: course.maxStudents },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-soft text-center"
                data-testid={`course-info-${index}`}
              >
                <item.icon size={28} className="mx-auto text-salmon mb-2" strokeWidth={1.5} />
                <p className="text-charcoal-muted text-sm">{item.label}</p>
                <p className="font-medium text-charcoal">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-script text-salmon text-2xl">Structure du programme</span>
            <h2 className="font-serif text-3xl text-charcoal mt-2">Aperçu du cours</h2>
            <div className="section-divider mx-auto mt-6" />
          </div>

          <p className="text-charcoal-light text-lg leading-relaxed text-center mb-12">
            {course.description}
          </p>

          {/* Modules */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {course.modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-soft"
                data-testid={`module-${index}`}
              >
                <h3 className="font-serif text-xl text-charcoal mb-4">{module.title}</h3>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-charcoal-light">
                      <CheckCircle size={18} className="text-salmon flex-shrink-0" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-salmon">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Faites progresser votre carrière
          </h2>
          <p className="text-white/80 mb-8">
            Places limitées. Inscrivez-vous dès maintenant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 bg-white text-salmon px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
              data-testid="academy-enroll-btn"
            >
              Inscrivez-vous maintenant
              <ArrowRight size={18} strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-salmon transition-colors"
              data-testid="academy-info-btn"
            >
              Demande d'informations
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default AcademyPage;
