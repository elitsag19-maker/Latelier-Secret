import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
              src="https://www.lateliersecret.ca/images/cropped-Logo-Latelier-Secret_edited.avif" 
              alt="L'atelier Secret" 
              className="h-16 w-auto brightness-0 invert"
            />
            <p className="text-stone/80 text-sm leading-relaxed">
              Centre esthétique professionnel spécialisé dans les soins de beauté avancés. 
              Votre beauté, notre passion.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/lateliersecret" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salmon transition-colors"
                data-testid="footer-instagram"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a 
                href="https://www.facebook.com/lateliersecret" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-salmon transition-colors"
                data-testid="footer-facebook"
                aria-label="Facebook"
              >
                <Facebook size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { name: 'Accueil', path: '/' },
                { name: 'À propos', path: '/about' },
                { name: 'Épilation Laser', path: '/laser-hair' },
                { name: 'Soins du Visage', path: '/luxury-facial' },
                { name: 'Galerie', path: '/gallery' },
                { name: 'Réserver', path: '/booking' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-stone/70 hover:text-salmon transition-colors text-sm"
                    data-testid={`footer-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg mb-6">Nos Services</h4>
            <ul className="space-y-3">
              {[
                { name: 'Épilation Laser', path: '/hair-removal-price' },
                { name: 'Microneedling', path: '/microneedling' },
                { name: 'Soins Anti-Âge', path: '/anti-aging-facial' },
                { name: 'Extensions Cils', path: '/eyelash-extensions-price' },
                { name: 'Soins Corps', path: '/body-care-price' },
                { name: 'Formations', path: '/aesthetic-advance' },
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-stone/70 hover:text-salmon transition-colors text-sm"
                    data-testid={`footer-service-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - NAP for Local SEO */}
          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <address className="not-italic space-y-4">
              {/* Location - Critical for Local SEO */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-salmon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin size={14} className="text-salmon" strokeWidth={1.5} />
                </div>
                <div className="text-sm text-stone/80">
                  <p className="font-medium text-white" data-testid="footer-business-name">L'atelier Secret</p>
                  <p data-testid="footer-address">2475 Saint-Georges Street</p>
                  <p>LeMoyne, QC J4R 2T4</p>
                </div>
              </div>

              {/* Phone - Critical for Local SEO */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-salmon/20 flex items-center justify-center flex-shrink-0">
                  <Phone size={14} className="text-salmon" strokeWidth={1.5} />
                </div>
                <a 
                  href="tel:+14388822165" 
                  className="text-sm text-stone/80 hover:text-salmon transition-colors"
                  data-testid="footer-phone"
                >
                  +1 438 882 2165
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-salmon/20 flex items-center justify-center flex-shrink-0">
                  <Mail size={14} className="text-salmon" strokeWidth={1.5} />
                </div>
                <a 
                  href="mailto:info@lateliersecret.ca" 
                  className="text-sm text-stone/80 hover:text-salmon transition-colors"
                  data-testid="footer-email"
                >
                  info@lateliersecret.ca
                </a>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-salmon/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock size={14} className="text-salmon" strokeWidth={1.5} />
                </div>
                <div className="text-sm text-stone/80">
                  <p>Lun - Ven: 9h00 - 21h00</p>
                  <p>Samedi: 10h00 - 18h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone/60">
            <p data-testid="footer-copyright">
              © {currentYear} L'atelier Secret. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-salmon transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="hover:text-salmon transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
