import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimoni } from "./components/Testimoni";
import { Socialmedia } from "./components/Socialmedia";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ImplementasiSummary from "./components/ProyekDepan";
import Publications, { publicationsData } from "./components/Publications"; // ✅ import data
import WhyChooseUs from "./components/Reason";

function App() {
  const location = useLocation();

  // 💡 Auto-scroll dari Navbar
  useEffect(() => {
    if (location.state?.scrollTo) {
      setTimeout(() => {
        const section = document.querySelector(`#${location.state.scrollTo}`);
        if (section) {
          const offset = 120; // tinggi navbar (px)
          const elementPosition =
            section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Products />
      <ImplementasiSummary />
      <Testimoni />
      <Publications data={publicationsData} /> {/* ✅ gunakan data */}
      <Socialmedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
