import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://static.wixstatic.com/media/9426a1_b941e26d1d9e46d38f15c68cfd693de9~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/epilation-laser-1_edited.jpg', alt: 'Épilation au laser' },
  { src: 'https://static.wixstatic.com/media/11062b_017f998d03a44d5494c1f4eb4a9fcace~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/Gros%20plan%20sur%20les%20soins%20de%20la%20peau.jpg', alt: 'Soins de la peau' },
  { src: 'https://static.wixstatic.com/media/9426a1_c5d12f25e9034182857cfb8f7b9cbd2a~mv2.webp/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/DSC7619.webp', alt: 'Soin silhouette' },
  { src: 'https://static.wixstatic.com/media/11062b_6dfa28682dbf4247930028a218950e64~mv2.jpg/v1/crop/x_2019,y_0,w_2658,h_2543/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/Gros%20plan%20sur%20le%20visage%20d%27une%20femme.jpg', alt: 'Microdermabrasion' },
  { src: 'https://static.wixstatic.com/media/11062b_c08353118ce849f98c46f9788443b1fe~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/Traitement%20facial%20au%20laser.jpg', alt: 'Traitement facial au laser' },
  { src: 'https://static.wixstatic.com/media/da88f0575401483fb62f625d9b0033cb.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/Femme.jpg', alt: 'Peeling aux algues' },
  { src: 'https://static.wixstatic.com/media/9426a1_f45957c9984348b8a170040a952b448f~mv2.webp/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/plan-body-1.webp', alt: 'Soins corporels' },
  { src: 'https://static.wixstatic.com/media/11062b_3bc3b147c0304c37b1d90a705c95e64d~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/Soin%20du%20visage%20relaxant.jpg', alt: 'Soin du visage relaxant' },
  { src: 'https://static.wixstatic.com/media/9426a1_43e9cd6a316c45d8a45460da787e57aa~mv2.jpg/v1/fill/w_1000,h_1000,al_c,q_85,enc_avif,quality_auto/Natural%20Beauty_edited.jpg', alt: 'Beauté naturelle' },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://static.wixstatic.com/media/11062b_c08353118ce849f98c46f9788443b1fe~mv2.jpg/v1/fill/w_1920,h_800,al_c,q_85,enc_avif,quality_auto/Traitement%20facial%20au%20laser.jpg"
            alt="Notre Galerie"
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
            data-testid="gallery-page-title"
          >
            Notre Galerie
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Découvrez nos réalisations
          </motion.p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image)}
                data-testid={`gallery-image-${index}`}
              >
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white hover:text-salmon transition-colors"
            data-testid="lightbox-close"
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-salmon">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Prêt(e) pour votre transformation?
          </h2>
          <p className="text-white/80 mb-8">
            Commencez votre parcours beauté dès aujourd'hui
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 bg-white text-salmon px-8 py-4 rounded-full font-medium hover:bg-cream transition-colors"
            data-testid="gallery-book-btn"
          >
            Prendre rendez-vous
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
