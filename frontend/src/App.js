import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Layout
import Layout from "./components/Layout/Layout";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ServicePage from "./pages/ServicePage";
import PricingPage from "./pages/PricingPage";
import AcademyPage from "./pages/AcademyPage";
import SoinPage from "./pages/SoinPage";

// Service page wrapper - extracts serviceId from URL
const ServicePageWrapper = ({ serviceId: propServiceId }) => {
  const location = useLocation();
  const pathServiceId = location.pathname.replace('/', '').replace('.php', '');
  return <ServicePage serviceId={propServiceId || pathServiceId} />;
};

// Pricing page wrapper
const PricingPageWrapper = ({ pricingId: propPricingId }) => {
  const location = useLocation();
  const pathPricingId = location.pathname.replace('/', '').replace('.php', '');
  return <PricingPage pricingId={propPricingId || pathPricingId} />;
};

// Academy page wrapper
const AcademyPageWrapper = ({ courseId: propCourseId }) => {
  const location = useLocation();
  const pathCourseId = location.pathname.replace('/', '').replace('.php', '');
  return <AcademyPage courseId={propCourseId || pathCourseId} />;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// 404 Page
const NotFoundPage = () => (
  <div className="min-h-screen bg-cream flex items-center justify-center px-6">
    <div className="text-center">
      <h1 className="font-serif text-6xl text-charcoal mb-4">404</h1>
      <p className="text-charcoal-light text-lg mb-8">Page non trouvée</p>
      <a 
        href="/" 
        className="inline-flex items-center gap-2 bg-salmon text-white px-8 py-3 rounded-full font-medium hover:bg-salmon-dark transition-colors"
        data-testid="404-home-btn"
      >
        Retour à l'accueil
      </a>
    </div>
  </div>
);

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about.php" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking.php" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact.php" element={<ContactPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery.php" element={<GalleryPage />} />
          
          {/* Soins Pages (New) */}
          <Route path="/epilation-laser" element={<SoinPage />} />
          <Route path="/facial-de-luxe" element={<SoinPage />} />
          <Route path="/soin-anti-age" element={<SoinPage />} />
          <Route path="/irregularites-pigmentaires" element={<SoinPage />} />
          <Route path="/facial-desincrustant" element={<SoinPage />} />
          <Route path="/peeling-charbon" element={<SoinPage />} />
          <Route path="/peeling-algues" element={<SoinPage />} />
          <Route path="/traitement-raffermissant" element={<SoinPage />} />
          <Route path="/microdermabrasion" element={<SoinPage />} />
          <Route path="/microneedling" element={<SoinPage />} />
          <Route path="/soin-silhouette" element={<SoinPage />} />
          <Route path="/soin-lumineux" element={<SoinPage />} />
          
          {/* Legacy Service Pages (redirects) */}
          <Route path="/laser-hair" element={<SoinPage soinId="epilation-laser" />} />
          <Route path="/laser-hair.php" element={<SoinPage soinId="epilation-laser" />} />
          <Route path="/microneedling" element={<ServicePageWrapper />} />
          <Route path="/micronnedling.php" element={<SoinPage soinId="microneedling" />} />
          <Route path="/luxury-facial" element={<SoinPage soinId="soin-lumineux" />} />
          <Route path="/luxury-facial.php" element={<SoinPage soinId="soin-lumineux" />} />
          <Route path="/anti-aging-facial" element={<SoinPage soinId="soin-lumineux" />} />
          <Route path="/anti-aging-facial.php" element={<SoinPage soinId="soin-lumineux" />} />
          
          {/* Pricing Pages */}
          <Route path="/hair-removal-price" element={<PricingPageWrapper />} />
          <Route path="/hair-removal-price.php" element={<PricingPageWrapper />} />
          <Route path="/facial-treatments-price" element={<PricingPageWrapper />} />
          <Route path="/facial-treatments-price.php" element={<PricingPageWrapper />} />
          <Route path="/eyelash-extensions-price" element={<PricingPageWrapper />} />
          <Route path="/eyelash-extensions-price.php" element={<PricingPageWrapper />} />
          <Route path="/body-care-price" element={<PricingPageWrapper />} />
          <Route path="/body-care-price.php" element={<PricingPageWrapper />} />
          
          {/* Academy Pages */}
          <Route path="/aesthetic-advance" element={<AcademyPageWrapper />} />
          <Route path="/aesthetic-advance.php" element={<AcademyPageWrapper />} />
          <Route path="/aesthetic-beginner" element={<AcademyPageWrapper />} />
          <Route path="/aesthetic-beginner.php" element={<AcademyPageWrapper />} />
          <Route path="/aesthetic-beginner-plus" element={<AcademyPageWrapper />} />
          <Route path="/aesthetic-beginner-plus.php" element={<AcademyPageWrapper />} />
          <Route path="/eyelash-extension" element={<AcademyPageWrapper />} />
          <Route path="/eyelash-extension.php" element={<AcademyPageWrapper />} />
          <Route path="/classic-volume-lifting" element={<AcademyPageWrapper />} />
          <Route path="/classic-volume-lifting.php" element={<AcademyPageWrapper />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
