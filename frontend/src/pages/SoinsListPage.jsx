import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

const SOINS_LIST = [
  {
    title: "Épilation au Laser",
    description: "Réduction progressive et durable de la pilosité",
    image: "https://static.wixstatic.com/media/9426a1_b941e26d1d9e46d38f15c68cfd693de9~mv2.jpg/v1/crop/x_0,y_85,w_481,h_680/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/epilation-laser-1_edited.jpg",
    link: "/epilation-laser"
  },
  {
    title: "Facial de Luxe",
    description: "Rituel cabine unique pour une peau lumineuse",
    image: "https://static.wixstatic.com/media/11062b_017f998d03a44d5494c1f4eb4a9fcace~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gros%20plan%20sur%20les%20soins%20de%20la%20peau.jpg",
    link: "/facial-de-luxe"
  },
  {
    title: "Soin Anti-Âge",
    description: "Soin Sothys pour une peau visiblement plus jeune",
    image: "https://static.wixstatic.com/media/9426a1_c45128d5bd5a485f843d9d9b936b06ff~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/prix-lifting-visage-dubai-1.jpg",
    link: "/soin-anti-age"
  },
  {
    title: "Irrégularités Pigmentaires",
    description: "Pour un teint uniforme et lumineux",
    image: "https://static.wixstatic.com/media/9426a1_e5d99015cdec4706b3f52512a012b16f~mv2.jpg/v1/crop/x_236,y_0,w_479,h_499/fill/w_300,h_400,al_c,lg_1,q_80,enc_avif,quality_auto/eviter-taches-brunes-au-soleil-e1148043245d9085e6deae6e4ef0a27f.jpg",
    link: "/irregularites-pigmentaires"
  },
  {
    title: "Facial Désincrustant",
    description: "Pour peaux à imperfections et tendance acnéique",
    image: "https://static.wixstatic.com/media/9426a1_881f72f3647e485bace581e6ab558d66~mv2.webp/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled-design-2022-12-07T114715_938.webp",
    link: "/facial-desincrustant"
  },
  {
    title: "Peeling au Charbon",
    description: "Soin détoxifiant pour purifier la peau",
    image: "https://static.wixstatic.com/media/9426a1_b4d51e128ae74eac8fc0965706e4ca34~mv2.png/v1/crop/x_0,y_275,w_1920,h_1999/fill/w_300,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/mayagi_a_medium_shot_portrait_of_a_35_yo.png",
    link: "/peeling-charbon"
  },
  {
    title: "Peeling aux Algues",
    description: "Exfoliation naturelle aux nutriments marins",
    image: "https://static.wixstatic.com/media/da88f0575401483fb62f625d9b0033cb.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Femme.jpg",
    link: "/peeling-algues"
  },
  {
    title: "Traitement Raffermissant",
    description: "Soin à la lumière LED pour une peau tonique",
    image: "https://static.wixstatic.com/media/9426a1_a5d06b721a534c1ba46748fa5d85b741~mv2.jpg/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/shutterstock-1456053788_edited_edited_jp.jpg",
    link: "/traitement-raffermissant"
  },
  {
    title: "Microdermabrasion",
    description: "Exfoliation pour un teint net et unifié",
    image: "https://static.wixstatic.com/media/11062b_6dfa28682dbf4247930028a218950e64~mv2.jpg/v1/crop/x_2019,y_0,w_2658,h_2543/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Gros%20plan%20sur%20le%20visage%20d'une%20femme.jpg",
    link: "/microdermabrasion"
  },
  {
    title: "Microneedling",
    description: "Pour une peau de meilleur aspect",
    image: "https://static.wixstatic.com/media/9426a1_daea62aba2824a9fa898bddb1f50be1b~mv2.jpg/v1/crop/x_365,y_0,w_652,h_922/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/woman-getting-microneedling-treatment.jpg",
    link: "/microneedling"
  },
  {
    title: "Soin Silhouette",
    description: "Affinement visuel par lipocavitation",
    image: "https://static.wixstatic.com/media/9426a1_c5d12f25e9034182857cfb8f7b9cbd2a~mv2.webp/v1/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/DSC7619.webp",
    link: "/soin-silhouette"
  },
  {
    title: "Soin Lumineux",
    description: "Photorajeunissement au Pico Laser",
    image: "https://static.wixstatic.com/media/9426a1_60ba364326264fc386aa90813f664f2b~mv2.jpg/v1/crop/x_717,y_0,w_869,h_1229/fill/w_300,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/reju-femme.jpg",
    link: "/soin-lumineux"
  }
];

const SoinsListPage = () => {
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
            data-testid="soins-page-title"
          >
            Nos Soins
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-taupe-light text-lg max-w-2xl mx-auto"
          >
            Découvrez notre gamme complète de soins esthétiques, conçus pour révéler votre beauté naturelle et vous offrir une expérience de bien-être incomparable.
          </motion.p>
          <div className="section-divider mx-auto mt-8" />
        </div>
      </section>

      {/* Soins Grid */}
      <section className="py-16 bg-stone/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {SOINS_LIST.map((soin, index) => (
              <motion.div
                key={soin.link}
                variants={fadeInUp}
                className="group"
              >
                <Link 
                  to={soin.link}
                  className="block bg-white rounded-none overflow-hidden shadow-soft hover:shadow-medium transition-shadow h-full"
                  data-testid={`soin-card-${index}`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img 
                      src={soin.image} 
                      alt={soin.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-lg text-taupe mb-2 font-normal tracking-wide">
                      {soin.title}
                    </h3>
                    <p className="text-taupe-light text-sm mb-4">
                      {soin.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-taupe text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                      Découvrir <ArrowRight size={14} />
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
            VOUS DÉSIREZ PRENDRE UN RENDEZ-VOUS?
          </h2>
          <p className="text-white/80 mb-8">N'hésitez plus, contactez-nous pour une consultation gratuite</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+14388822165"
              className="inline-flex items-center justify-center gap-2 bg-white text-taupe px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-stone transition-colors"
            >
              Téléphoner
            </a>
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-white hover:text-taupe transition-colors"
            >
              Réserver maintenant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SoinsListPage;
