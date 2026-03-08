import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Soins data configuration
const SOINS_DATA = {
  'epilation-laser': {
    title: 'ÉPILATION LASER',
    subtitle: 'Réduction progressive et durable de la pilosité',
    heroImage: 'https://static.wixstatic.com/media/9426a1_dbc406d1496a4ec5a3a4899459a57be8~mv2.jpg/v1/crop/x_422,y_0,w_1120,h_1071/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/a-girl-is-happy-with-Laser-Hair-removal-services-in-Vancouver.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_e3c8fd3d4e7745d284836d9fa5055ac0~mv2.webp/v1/fill/w_600,h_485,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_e3c8fd3d4e7745d284836d9fa5055ac0~mv2.webp',
    questionTitle: "QU'EST-CE QUE LE LASER DIOD?",
    description: `Le laser diode est une technologie utilisée en soins esthétiques qui émet un faisceau lumineux par impulsion. Cette lumière est dirigée vers la zone ciblée afin de réduire progressivement la repousse des poils. Le faisceau vise spécifiquement le follicule pileux, tout en préservant les tissus environnants, ce qui permet une approche localisée, confortable et non invasive.

Chez L'Atelier Secret, nous utilisons une technologie esthétique reconnue pour sa précision et son efficacité dans le cadre de soins non médicaux. Nos séances sont adaptées à chaque client·e en fonction de son type de peau, de la zone traitée et du cycle de repousse du poil. L'objectif est d'offrir une expérience sécuritaire, agréable et axée sur l'amélioration progressive de l'apparence de la pilosité.

Le nombre de séances nécessaires peut varier selon plusieurs facteurs, dont la densité des poils et la réponse individuelle de la peau.`,
    costTitle: "COMBIEN COÛTE UN SOIN D'ÉPILATION LASER?",
    costDescription: "Les tarifs varient selon les zones à traiter, le nombre de séances et le forfait choisi. Lors d'une rencontre avec une technicienne en soins esthétiques, vous bénéficierez d'une évaluation gratuite et sans engagement, qui permettra de déterminer le plan de soin le plus adapté à vos objectifs. Chaque personne étant unique, nos recommandations sont personnalisées en fonction de vos besoins et de votre type de peau.",
    zonesTitle: "ZONES TRAITABLES PAR ÉPILATION LASER",
    zonesDescription: `Toutes les zones du corps et du visage peuvent faire l'objet d'un soin d'épilation au laser à des fins esthétiques.

Certaines zones sont toutefois plus populaires que d'autres. Chez les femmes, il s'agit notamment des aisselles, des aines, du bikini intégral, des jambes, des bras et de la lèvre supérieure. Chez les hommes, le thorax, le dos et la barbe sont les plus souvent demandés. Il est possible de cibler plusieurs zones au cours d'une même séance, ce qui optimise le temps tout en maintenant l'efficacité du soin.

En moyenne, de 6 à 10 séances espacées peuvent être nécessaires pour obtenir une réduction significative et durable de la pilosité. Le rasage est autorisé entre les rendez-vous, et il est recommandé de raser la zone concernée 24 heures avant chaque séance.`,
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE D'ÉPILATION LASER",
    procedure: [
      "Rasage de la zone traitée",
      "Marquage de la zone à traiter",
      "Application du gel protecteur",
      "Protection adéquate pour les yeux",
      "Réglage des paramètres de la machine d'épilation laser",
      "Début du traitement",
      "Nettoyage et application de produits adaptés"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_2f89400d83b4432286f5121ff2581568~mv2.webp/v1/fill/w_483,h_322,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_2f89400d83b4432286f5121ff2581568~mv2.webp',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'microneedling': {
    title: 'MICRONEEDLING',
    subtitle: 'Pour une peau de meilleur aspect',
    heroImage: 'https://static.wixstatic.com/media/9426a1_630e0e5a864a40bfae3fd88b92a965e6~mv2.png/v1/fill/w_420,h_553,al_c,lg_1,q_85,enc_avif,quality_auto/showImageResized_edited_edited.png',
    mainImage: 'https://static.wixstatic.com/media/9426a1_38a2314696464f0b9ad743718b6e45ad~mv2.jpg/v1/fill/w_540,h_542,al_c,lg_1,q_80,enc_avif,quality_auto/626c616e636869722d7065617562ce4352.jpg',
    questionTitle: "QU'EST-CE QUE LE MICRONEEDLING?",
    description: `Le Microneedling est une technique innovante qui repose sur l'utilisation de micro-aiguilles pour stimuler la régénération cutanée en profondeur. À l'aide d'un dispositif équipé de fines aiguilles, ce traitement crée des micro-perforations à la surface de la peau, déclenchant ainsi un processus naturel de guérison. Ces micro-perforations sont réalisées de manière contrôlée et précise, à différentes profondeurs selon la zone traitée.

Le Microneedling favorise la production de collagène et d'élastine, des fibres essentielles au maintien de la fermeté et de l'élasticité de la peau. Ce traitement permet également d'améliorer la perméabilité de la peau aux produits de soin appliqués après la séance, optimisant ainsi leur efficacité.

Sans nécessiter de temps de récupération prolongé, le Microneedling aide à réduire l'apparence des rides, des cicatrices, des vergetures et des taches pigmentaires causées par le soleil. Il améliore également la texture de la peau, la rendant plus lisse, plus ferme et plus lumineuse.

Les résultats sont généralement visibles de 4 à 6 semaines après la procédure, avec une amélioration continue au fil des traitements. Pour des résultats optimaux, il est recommandé de suivre plusieurs séances de manière régulière et d'associer le Microneedling à d'autres soins de la peau.`,
    benefitsTitle: "POURQUOI CHOISIR LE MICRONEEDLING?",
    benefits: [
      "Une stimulation douce de la peau favorisant un effet tonifiant naturel.",
      "Une peau d'apparence plus lisse et plus ferme dès les premières séances.",
      "Une amélioration progressive de l'uniformité du teint et de la texture cutanée.",
      "Une solution esthétique pour atténuer l'apparence d'irrégularités superficielles.",
      "Un soin rapide, avec peu ou pas de temps de récupération.",
      "Une meilleure absorption des sérums et soins appliqués après la séance.",
      "Convient à tous les types de peau et à plusieurs zones du visage et du corps.",
      "Une technique esthétique non invasive, réalisée avec précaution."
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_aa6d7437594f4167976b306c9367e1aa~mv2.png/v1/fill/w_435,h_493,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design.png',
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE MICRONEEDLING",
    procedure: [
      "Évaluation personnalisée",
      "Nettoyage et désinfection de la peau",
      "Application d'un gel anesthésiant (facultatif)",
      "Application d'un sérum personnalisé",
      "Soin par Microneedling",
      "Masque calmante",
      "Luminothérapie",
      "Nettoyage et sérum post-traitement"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_e8dd768d0e394116befbf3e7a17f41f0~mv2.png/v1/fill/w_475,h_477,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/1.png',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'soin-silhouette': {
    title: 'SOIN SILHOUETTE',
    subtitle: 'Affinement Visuel',
    heroImage: 'https://static.wixstatic.com/media/9426a1_f45957c9984348b8a170040a952b448f~mv2.webp/v1/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/plan-body-1.webp',
    mainImage: 'https://static.wixstatic.com/media/9426a1_ab0cf06e55df46978fdd4d934a7b06f8~mv2.webp/v1/fill/w_552,h_504,al_c,lg_1,q_80,enc_avif,quality_auto/Ultrasound-Cavitation-body-contouring_1024x1024_2x.webp',
    questionTitle: "QU'EST-CE QUE LA LIPOCAVITATION?",
    description: `La lipocavitation est une technique esthétique non invasive qui utilise une combinaison d'ultrasons et de radiofréquence pour améliorer l'apparence de certaines zones du corps. Ce soin est reconnu pour contribuer à une silhouette visuellement plus harmonieuse, en ciblant les zones où la peau peut sembler moins lisse ou plus dense.

Sans chirurgie ni éviction sociale, la lipocavitation est appréciée par les personnes souhaitant un soin esthétique de raffermissement et de remodelage corporel. Les résultats sont progressifs et varient selon chaque personne. Pour compléter l'expérience, nous incluons un soin de drainage esthétique, qui favorise une sensation de légèreté et un meilleur confort corporel après la séance.`,
    costTitle: "COMBIEN COÛTE UNE SÉANCE DE LIPOCAVITATION?",
    costDescription: "Les tarifs varient en fonction des zones ciblées, du forfait choisi et du mode de paiement. Lors d'une rencontre avec une technicienne en soins esthétiques, vous bénéficierez d'une consultation gratuite et sans engagement pour établir un plan adapté à vos objectifs. Chaque personne ayant des besoins uniques, nos soins sont toujours personnalisés afin d'offrir une expérience sur mesure.",
    zonesTitle: "ZONES CIBLÉES PAR LA LIPOCAVITATION",
    zonesDescription: `La lipocavitation est une technologie esthétique qui peut être appliquée sur plusieurs zones du corps, selon les besoins et les objectifs de chaque personne.

Certaines zones sont particulièrement populaires, notamment les cuisses, le ventre, les bras et les fessiers. Lors d'une séance, il est possible de cibler plusieurs régions du corps, ce qui permet d'optimiser le temps sans compromettre la qualité du soin.

En général, une série de 5 à 10 séances espacées est recommandée pour observer une amélioration progressive de l'apparence de la silhouette. Le nombre exact de séances peut varier selon les besoins de la personne et la zone visée.`,
    procedureTitle: "LE DÉROULEMENT D'UNE SÉANCE DE LIPOCAVITATION",
    procedure: [
      "Réchauffement des zones ciblées – préparation de la peau à l'aide de mouvements circulaires ou de chaleur douce",
      "Réglage personnalisé de l'appareil de lipocavitation – selon la zone et les besoins esthétiques",
      "Application par radiofréquence – utilisée à des fins esthétiques pour améliorer la texture de la peau",
      "Application par ultrasons – ciblant les zones souhaitées pour une apparence plus harmonieuse",
      "Application d'un gel protecteur – pour optimiser le confort et la diffusion du soin",
      "Massage esthétique de type drainage – pour favoriser une sensation de légèreté après la séance",
      "Nettoyage final et application de produits adaptés – hydratation et soin protecteur"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_c8648ee10ce14d3bb35bd383c0ecbcaf~mv2.webp/v1/fill/w_483,h_399,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Woman-getting-an-anti-cellulite-lase-treatment-at-the-spa-1296x728-header.webp',
    disclaimer: "Ce soin est effectué à des fins esthétiques uniquement. Les paramètres sont ajustés pour offrir une expérience sécuritaire et adaptée à chaque type de peau."
  },
  'soin-lumineux': {
    title: 'SOIN LUMINEUX',
    subtitle: 'PICO LASER',
    heroImage: 'https://static.wixstatic.com/media/9426a1_eca629e46cc74efdb3ecfe0c137af72a~mv2.jpg/v1/fill/w_528,h_505,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/instagram-bg-0_4.jpg',
    mainImage: 'https://static.wixstatic.com/media/9426a1_97c8451f3e9e4a0a81b9da22542ad807~mv2.jpeg/v1/fill/w_540,h_430,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/female-cosmetologist-is-performing-forehead-photor-2022-09-02-17-06-20-utc.jpeg',
    introDescription: "Le soin de photorajeunissement est une technique esthétique non invasive qui utilise la lumière pour améliorer l'apparence de la peau. Il contribue à raviver l'éclat du teint, à unifier la texture cutanée et à offrir une peau d'apparence plus lumineuse, lisse et reposée.",
    questionTitle: "QU'EST-CE QUE LE PICO LASER?",
    description: `Le Pico Laser est une technologie esthétique avancée qui émet des impulsions ultra-courtes, mesurées en picosecondes (soit un trillionième de seconde). Grâce à ses longueurs d'onde spécifiques, cette technologie est utilisée à des fins esthétiques pour améliorer l'apparence de la peau, notamment en unifiant le teint, en affinant la texture cutanée et en atténuant certaines irrégularités pigmentaires superficielles.

Ce soin est non invasif et convient à différents types de peau. Il est particulièrement apprécié pour ses résultats visibles et progressifs dans le cadre d'une routine esthétique personnalisée.`,
    benefitsTitle: "POURQUOI CHOISIR LE PHOTORAJEUNISSEMENT?",
    benefits: [
      "Une amélioration progressive de l'apparence de la peau",
      "Une peau d'apparence plus lumineuse et un teint visiblement unifié",
      "Une technologie esthétique non invasive, sans chirurgie",
      "Des résultats observables chez plusieurs client·es selon le type de peau",
      "Convient aux peaux jeunes comme aux peaux matures",
      "Cible les irrégularités pigmentaires superficielles et le teint irrégulier"
    ],
    benefitsImage: 'https://static.wixstatic.com/media/9426a1_1206c62242db4510872e7acc4fc78e77~mv2.webp/v1/fill/w_435,h_493,al_c,lg_1,q_80,enc_avif,quality_auto/showImageResized.webp',
    procedureTitle: "DÉROULEMENT D'UNE SÉANCE DE PHOTORAJEUNISSEMENT",
    procedure: [
      "Nettoyage de la peau",
      "Observation visuelle de la peau pour adapter le soin",
      "Port de lunettes de protection",
      "Réglage personnalisé de l'appareil de photorajeunissement (Pico Laser)",
      "Déroulement de la séance sur les zones ciblées",
      "Application d'un masque adapté selon les besoins de la peau",
      "Nettoyage final de la zone traitée",
      "Application d'une crème apaisante et hydratante"
    ],
    procedureImage: 'https://static.wixstatic.com/media/9426a1_946a88a056c949b5b2e16beca48ef48d~mv2.jpg/v1/crop/x_825,y_0,w_1675,h_1406/fill/w_402,h_337,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/9426a1_946a88a056c949b5b2e16beca48ef48d~mv2.jpg',
    disclaimer: "Ce soin est offert à des fins esthétiques uniquement. Il ne remplace pas une consultation médicale ni un traitement dermatologique."
  }
};

const SoinPage = ({ soinId: propSoinId }) => {
  const pathSoinId = window.location.pathname.replace('/', '').replace('.php', '');
  const soinId = propSoinId || pathSoinId;
  const soin = SOINS_DATA[soinId];

  if (!soin) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-taupe mb-4">Soin non trouvé</h1>
          <Link to="/" className="text-taupe hover:underline">Retour à l'accueil</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-taupe-light text-lg mb-2">{soin.subtitle}</p>
              <h1 className="font-serif text-4xl md:text-5xl text-taupe font-light uppercase tracking-wide mb-8" data-testid="soin-page-title">
                {soin.title}
              </h1>
              
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
                data-testid="soin-consultation-btn"
              >
                Consultation Gratuite
              </Link>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-none overflow-hidden shadow-medium"
            >
              <img 
                src={soin.heroImage}
                alt={soin.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-stone/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src={soin.mainImage}
                alt={soin.questionTitle}
                className="w-full h-auto rounded-none shadow-medium"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {soin.introDescription && (
                <p className="text-taupe text-lg leading-relaxed mb-8 font-serif">
                  {soin.introDescription}
                </p>
              )}
              
              <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6">
                {soin.questionTitle}
              </h2>
              <div className="text-taupe-light leading-relaxed whitespace-pre-line">
                {soin.description}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl text-taupe font-light mb-6">VOUS AVEZ DES DOUTES?</h2>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-taupe text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
          >
            Consultation Gratuite
          </Link>
        </div>
      </section>

      {/* Cost or Benefits Section */}
      {(soin.costTitle || soin.benefitsTitle) && (
        <section className="py-16 bg-stone/20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6">
                  {soin.costTitle || soin.benefitsTitle}
                </h2>
                
                {soin.costDescription && (
                  <p className="text-taupe-light leading-relaxed mb-6">{soin.costDescription}</p>
                )}
                
                {soin.benefits && (
                  <ul className="space-y-3">
                    {soin.benefits.map((benefit, i) => (
                      <li key={i} className="text-taupe-light leading-relaxed flex items-start gap-2">
                        <span className="text-taupe mt-1">•</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>

              {/* Image */}
              {soin.benefitsImage && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <img 
                    src={soin.benefitsImage}
                    alt={soin.benefitsTitle}
                    className="w-full h-auto rounded-none shadow-medium"
                  />
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Zones Section */}
      {soin.zonesTitle && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6 text-center">
              {soin.zonesTitle}
            </h2>
            <p className="text-taupe-light leading-relaxed whitespace-pre-line text-center">
              {soin.zonesDescription}
            </p>
          </div>
        </section>
      )}

      {/* Procedure Section */}
      <section className="py-16 bg-stone/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-2xl text-taupe font-light uppercase tracking-wide mb-6">
                {soin.procedureTitle}
              </h2>
              <ul className="space-y-3">
                {soin.procedure.map((step, i) => (
                  <li key={i} className="text-taupe-light leading-relaxed flex items-start gap-2">
                    <span className="text-taupe mt-1">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src={soin.procedureImage}
                alt={soin.procedureTitle}
                className="w-full h-auto rounded-none shadow-medium"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-taupe-light text-sm leading-relaxed">
            {soin.disclaimer}
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-taupe">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
            VOUS DÉSIREZ PRENDRE UN RENDEZ-VOUS?
          </h2>
          <p className="text-white/80 mb-8">N'hésitez plus, contactez-nous</p>
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
              Nous Contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoinPage;
