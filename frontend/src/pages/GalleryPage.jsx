import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';

const galleryImages = [
  { src: 'https://www.lateliersecret.ca/images/gallery9.jpeg', alt: 'Galerie 9' },
  { src: 'https://www.lateliersecret.ca/images/gallery8.jpeg', alt: 'Galerie 8' },
  { src: 'https://www.lateliersecret.ca/images/gallery7.jpeg', alt: 'Galerie 7' },
  { src: 'https://www.lateliersecret.ca/images/gallery6.jpeg', alt: 'Galerie 6' },
  { src: 'https://www.lateliersecret.ca/images/gallery5.jpeg', alt: 'Galerie 5' },
  { src: 'https://www.lateliersecret.ca/images/gallery4.jpeg', alt: 'Galerie 4' },
  { src: 'https://www.lateliersecret.ca/images/gallery3.jpeg', alt: 'Galerie 3' },
  { src: 'https://www.lateliersecret.ca/images/gallery2.jpeg', alt: 'Galerie 2' },
  { src: 'https://www.lateliersecret.ca/images/gallery1.jpeg', alt: 'Galerie 1' },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://www.lateliersecret.ca/images/OurGallery.png"
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
