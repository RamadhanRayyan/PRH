import {
  MapPin,
  Award,
  Calendar,
  Building,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Products } from "./components/Products";
import { Testimoni } from "./components/Testimoni";
import { Gallery } from "./components/Gallery";
import { Socialmedia } from "./components/Socialmedia";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import TimelinePRH from "./components/Timeline";

function App() {

  

  

  return (
    <div className="min-h-screen bg-white">
      
      <Navbar />

      {/* Hero Section */}
      <Hero/>
      {/* Tentang Kami */}
      <About/>
      {/* Produk Unggulan */}
      <Products/>
      {/* Implementasi & Proyek */}
      <section id="implementasi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementasi & Proyek
            </h2>
            <p className="text-xl text-gray-600">
              Track Record Pemasangan PRH di Berbagai Wilayah
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Total Proyek", value: "11+", icon: Building },
              { label: "Unit Terpasang", value: "300+", icon: Award },
              { label: "Wilayah Terlayani", value: "11+", icon: MapPin },
              { label: "Tahun Pengalaman", value: "3+", icon: Calendar },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tombol Lihat Detail */}
          <div className="text-center mt-12">
            <Link
              to="/implementasi-detail"
              className="inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
            >
              Lihat Detail Implementasi
            </Link>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <Testimoni/>
      {/* Timeline */}
      <TimelinePRH/>
      {/* Galeri */}
      <Gallery/>
      {/* Media Sosial & Publikasi */}
      <Socialmedia/>
      {/* Kontak */}
      <Contact/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
export default App;
