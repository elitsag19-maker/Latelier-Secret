import { BrowserRouter, Routes, Route } from "react-router-dom";
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

// Scroll to top on route change
const ScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

function App() {
  return (
    <BrowserRouter>
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
          
          {/* Service Pages - Dynamic routing */}
          <Route path="/:serviceId" element={<ServicePageWrapper />} />
          
          {/* Legacy PHP routes - redirect support */}
          <Route path="/laser-hair.php" element={<ServicePageWrapper serviceId="laser-hair" />} />
          <Route path="/micronnedling.php" element={<ServicePageWrapper serviceId="microneedling" />} />
          <Route path="/luxury-facial.php" element={<ServicePageWrapper serviceId="luxury-facial" />} />
          <Route path="/anti-aging-facial.php" element={<ServicePageWrapper serviceId="anti-aging-facial" />} />
          <Route path="/hair-removal-price.php" element={<PricingPageWrapper pricingId="hair-removal-price" />} />
          <Route path="/facial-treatments-price.php" element={<PricingPageWrapper pricingId="facial-treatments-price" />} />
          <Route path="/eyelash-extensions-price.php" element={<PricingPageWrapper pricingId="eyelash-extensions-price" />} />
          <Route path="/body-care-price.php" element={<PricingPageWrapper pricingId="body-care-price" />} />
          <Route path="/aesthetic-advance.php" element={<AcademyPageWrapper courseId="aesthetic-advance" />} />
          <Route path="/aesthetic-beginner.php" element={<AcademyPageWrapper courseId="aesthetic-beginner" />} />
          <Route path="/aesthetic-beginner-plus.php" element={<AcademyPageWrapper courseId="aesthetic-beginner-plus" />} />
          <Route path="/eyelash-extension.php" element={<AcademyPageWrapper courseId="eyelash-extension" />} />
          <Route path="/classic-volume-lifting.php" element={<AcademyPageWrapper courseId="classic-volume-lifting" />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
