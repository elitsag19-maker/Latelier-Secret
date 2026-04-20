import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const PromoBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full bg-gradient-to-r from-taupe via-taupe-dark to-taupe text-white"
      data-testid="promo-banner"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-center">
        <div className="flex items-center gap-3">
          <Sparkles size={18} strokeWidth={1.5} className="text-cream shrink-0" />
          <p className="font-sans text-sm sm:text-base tracking-wide">
            Première visite ? <span className="font-bold">15% de rabais</span> sur votre 1<sup>er</sup> soin
          </p>
        </div>
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 bg-white text-taupe px-6 py-2.5 font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-cream transition-colors rounded-none whitespace-nowrap"
          data-testid="promo-banner-cta"
        >
          Réserver maintenant
          <ArrowRight size={16} strokeWidth={1.5} />
        </Link>
      </div>
    </motion.section>
  );
};

export default PromoBanner;
