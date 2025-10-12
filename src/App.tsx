import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimoni } from "./components/Testimoni";
import { Gallery } from "./components/Gallery";
import { Socialmedia } from "./components/Socialmedia";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ImplementasiSummary from "./ImplementasiSummary";

function App() {
  const location = useLocation();

  // 💡 Tambahkan efek ini untuk auto-scroll dari Navbar
  useEffect(() => {
  if (location.state?.scrollTo) {
    setTimeout(() => {
      const section = document.querySelector(`#${location.state.scrollTo}`);
      if (section) {
        const offset = 10; // 👉 tinggi navbar kamu (px)
        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
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
      <About />
      <Products />
      <ImplementasiSummary />
      <Testimoni />
      <Gallery />
      <Socialmedia />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
