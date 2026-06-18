import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { useState } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Sections/Footer";
import FeaturedShowcase from "./Sections/FeaturedShowcase";
import ShowcaseModal from "./Sections/ShowcaseModal";
import Hero from "./Sections/Hero";
import ProductStripe from "./Sections/ProductStripe";
import PremiumReelsSection from "./Sections/PremiumReelsSection";
import CollectionPage from "./Sections/CollectionPage";
import AboutSection from "./Sections/AboutSection";
function App() {
  const [showReel, setShowReel] = useState(false);

  return (
    <BrowserRouter>

      <Navbar />
      
      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />

              <ProductStripe />

              <FeaturedShowcase
                onOpen={() => setShowReel(true)}
              />

              <ShowcaseModal
                isOpen={showReel}
                onClose={() => setShowReel(false)}
              />

              <PremiumReelsSection />
               <AboutSection />
              
            </>
          }
        />

        {/* COLLECTION PAGE */}
        <Route
          path="/collection"
          element={<CollectionPage />}
        />

        {/* REELS PAGE */}
        <Route
          path="/reels"
          element={<PremiumReelsSection />}
        />

      </Routes>
<Footer />
    </BrowserRouter>
  );
}

export default App;