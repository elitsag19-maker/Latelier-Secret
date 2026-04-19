import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { 
    name: 'Soins', 
    path: '/soins',
    clickable: true,
    children: [
      { name: 'Épilation au Laser', path: '/epilation-laser' },
      { name: 'Facial de Luxe', path: '/facial-de-luxe' },
      { name: 'Soin Anti-Âge', path: '/soin-anti-age' },
      { name: 'Irrégularités Pigmentaires', path: '/irregularites-pigmentaires' },
      { name: 'Facial Désincrustant', path: '/facial-desincrustant' },
      { name: 'Peeling au Charbon', path: '/peeling-charbon' },
      { name: 'Peeling aux Algues', path: '/peeling-algues' },
      { name: 'Traitement Raffermissant', path: '/traitement-raffermissant' },
      { name: 'Microdermabrasion', path: '/microdermabrasion' },
      { name: 'Microneedling', path: '/microneedling' },
      { name: 'Soin Silhouette', path: '/soin-silhouette' },
      { name: 'Soin Lumineux', path: '/soin-lumineux' },
    ]
  },
  { 
    name: 'Tarifs', 
    path: '/pricing',
    children: [
      { name: 'Épilation', path: '/hair-removal-price' },
      { name: 'Soins Visage', path: '/facial-treatments-price' },
      { name: 'Extensions Cils', path: '/eyelash-extensions-price' },
      { name: 'Soins Corps', path: '/body-care-price' },
    ]
  },
  { 
    name: 'Académie', 
    path: '/formations',
    clickable: true,
    children: [
      { name: 'Esthétique Avancé', path: '/aesthetic-advance' },
      { name: 'Esthétique Débutant', path: '/aesthetic-beginner' },
      { name: 'Esthétique Intermédiaire', path: '/aesthetic-beginner-plus' },
      { name: 'Extensions Cils Classique', path: '/eyelash-extension' },
      { name: 'Extensions Cils Volume', path: '/eyelash-extension-volume' },
      { name: 'Rehaussement de Cils', path: '/classic-volume-lifting' },
    ]
  },
  { name: 'Contactez-nous', path: '/contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-taupe text-white py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
          <a 
            href="mailto:info@lateliersecret.ca" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            data-testid="header-email-link"
          >
            <Mail size={14} strokeWidth={1.5} />
            info@lateliersecret.ca
          </a>
          <a 
            href="tel:+14388822165" 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            data-testid="header-phone-link"
          >
            <Phone size={14} strokeWidth={1.5} />
            +1 438 882 2165
          </a>
        </div>
      </div>

      {/* Main Header */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-soft' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" data-testid="header-logo">
              <img 
                src="https://customer-assets.emergentagent.com/job_atelier-optimize/artifacts/yv5svp3c_L%27atelier%20Secret%20%283%20x%202.5%20in%29_20260302_233222_0000.png" 
                alt="L'atelier Secret" 
                className="h-16 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <div 
                  key={item.path}
                  className="relative"
                  onMouseEnter={() => item.children && setOpenDropdown(item.path)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.clickable || !item.children ? item.path : '#'}
                    onClick={(e) => !item.clickable && item.children && e.preventDefault()}
                    className={`flex items-center gap-1 font-sans text-sm tracking-wide uppercase transition-colors ${
                      location.pathname === item.path || item.children?.some(c => c.path === location.pathname)
                        ? 'text-taupe-dark'
                        : 'text-taupe hover:text-taupe-dark'
                    }`}
                    data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                    {item.children && <ChevronDown size={14} strokeWidth={1.5} />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <AnimatePresence>
                      {openDropdown === item.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-none shadow-medium py-2 border border-stone"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-taupe hover:text-taupe-dark hover:bg-stone/30 transition-colors"
                              data-testid={`nav-dropdown-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                to="/booking"
                className="bg-taupe text-white px-6 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium hover:bg-taupe-dark transition-colors"
                data-testid="header-book-btn"
              >
                Réserver maintenant
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-taupe"
              data-testid="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-stone/30"
            >
              <nav className="max-w-7xl mx-auto px-6 py-4 space-y-2">
                {NAV_ITEMS.map((item) => (
                  <div key={item.path}>
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between">
                          <Link
                            to={item.clickable ? item.path : '#'}
                            onClick={(e) => !item.clickable && e.preventDefault()}
                            className="flex-grow py-3 text-taupe font-sans uppercase text-sm tracking-wide"
                            data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                            className="p-3 text-taupe"
                          >
                            <ChevronDown 
                              size={16} 
                              className={`transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`}
                            />
                          </button>
                        </div>
                        <AnimatePresence>
                          {openDropdown === item.path && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-1"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.path}
                                  to={child.path}
                                  className="block py-2 text-taupe-light text-sm hover:text-taupe transition-colors"
                                  data-testid={`mobile-nav-dropdown-${child.name.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                  {child.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        className="block py-3 text-taupe font-sans uppercase text-sm tracking-wide hover:text-taupe-dark transition-colors"
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/booking"
                  className="block w-full bg-taupe text-white text-center px-6 py-3 rounded-none font-sans text-sm uppercase tracking-wider font-medium mt-4"
                  data-testid="mobile-book-btn"
                >
                  Réserver maintenant
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
