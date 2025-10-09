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
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero />
      {/* Tentang Kami */}
      <About />
      {/* Produk Unggulan */}
      <Products />
      {/* Implementasi & Proyek */}
      <ImplementasiSummary />
      {/* Testimoni */}
      <Testimoni />
      {/* Galeri */}
      <Gallery />
      {/* Media Sosial & Publikasi */}
      <Socialmedia />
      {/* Kontak */}
      <Contact />
      {/* Footer */}
      <Footer />
    </div>
  );
}
export default App;
