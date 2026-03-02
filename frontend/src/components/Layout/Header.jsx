import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { name: 'Accueil', path: '/' },
  { name: 'À propos', path: '/about' },
  { 
    name: 'Services', 
    path: '/services',
    children: [
      { name: 'Épilation Laser', path: '/laser-hair' },
      { name: 'Microneedling', path: '/microneedling' },
      { name: 'Soin Luxe', path: '/luxury-facial' },
      { name: 'Anti-Âge', path: '/anti-aging-facial' },
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
    path: '/academy',
    children: [
      { name: 'Esthétique Avancé', path: '/aesthetic-advance' },
      { name: 'Esthétique Débutant', path: '/aesthetic-beginner' },
      { name: 'Débutant Plus', path: '/aesthetic-beginner-plus' },
      { name: 'Extensions Cils', path: '/eyelash-extension' },
      { name: 'Lash Lift', path: '/classic-volume-lifting' },
    ]
  },
  { name: 'Galerie', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
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
      <div className="bg-salmon text-white py-2 hidden md:block">
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
            : 'bg-cream'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0" data-testid="header-logo">
              <img 
                src="https://www.lateliersecret.ca/images/cropped-Logo-Latelier-Secret_edited.avif" 
                alt="L'atelier Secret" 
                className="h-14 w-auto"
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
                    to={item.children ? '#' : item.path}
                    onClick={(e) => item.children && e.preventDefault()}
                    className={`flex items-center gap-1 font-sans text-sm tracking-wide transition-colors ${
                      location.pathname === item.path || item.children?.some(c => c.path === location.pathname)
                        ? 'text-salmon'
                        : 'text-charcoal hover:text-salmon'
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
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-medium py-2 border border-stone/50"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-charcoal hover:text-salmon hover:bg-cream/50 transition-colors"
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
                className="bg-salmon text-white px-6 py-3 rounded-full font-sans text-sm font-medium hover:bg-salmon-dark transition-colors btn-lift"
                data-testid="header-book-btn"
              >
                Réserver maintenant
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal"
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
                        <button
                          onClick={() => setOpenDropdown(openDropdown === item.path ? null : item.path)}
                          className="flex items-center justify-between w-full py-3 text-charcoal font-sans"
                          data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {item.name}
                          <ChevronDown 
                            size={16} 
                            className={`transition-transform ${openDropdown === item.path ? 'rotate-180' : ''}`}
                          />
                        </button>
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
                                  className="block py-2 text-charcoal-light text-sm hover:text-salmon transition-colors"
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
                        className="block py-3 text-charcoal font-sans hover:text-salmon transition-colors"
                        data-testid={`mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/booking"
                  className="block w-full bg-salmon text-white text-center px-6 py-3 rounded-full font-sans text-sm font-medium mt-4"
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
