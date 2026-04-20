import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PromoBanner = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="relative w-full overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #2a2420 0%, #3d2f26 50%, #2a2420 100%)',
      }}
      data-testid="promo-banner"
    >
      {/* Shimmer overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(120deg, transparent 30%, rgba(212, 180, 131, 0.18) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
        animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      />

      {/* Top + bottom gold accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4b483] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4b483] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-10 text-center">
        <div className="flex items-center gap-4">
          <span
            className="hidden sm:inline-block h-px w-10"
            style={{ background: 'linear-gradient(to right, transparent, #d4b483)' }}
          />
          <p className="font-serif text-white text-base sm:text-lg md:text-xl tracking-[0.02em]">
            Première visite&nbsp;?{' '}
            <span
              className="font-bold"
              style={{
                color: '#e8c99a',
                textShadow: '0 0 20px rgba(212, 180, 131, 0.35)',
                letterSpacing: '0.04em',
              }}
            >
              15% de rabais
            </span>{' '}
            <span className="font-light">sur votre 1<sup>er</sup> soin</span>
          </p>
          <span
            className="hidden sm:inline-block h-px w-10"
            style={{ background: 'linear-gradient(to left, transparent, #d4b483)' }}
          />
        </div>

        <Link
          to="/booking"
          className="group relative inline-flex items-center gap-2.5 px-7 py-3 font-sans text-xs sm:text-sm uppercase tracking-[0.18em] font-semibold transition-all duration-300 rounded-none whitespace-nowrap overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #e8c99a 0%, #d4b483 100%)',
            color: '#2a2420',
            boxShadow: '0 4px 20px rgba(212, 180, 131, 0.35)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 30px rgba(232, 201, 154, 0.6)';
            e.currentTarget.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(212, 180, 131, 0.35)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
          data-testid="promo-banner-cta"
        >
          <span className="relative z-10">Réserver maintenant</span>
          <ArrowRight
            size={16}
            strokeWidth={2}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.section>
  );
};

export default PromoBanner;
