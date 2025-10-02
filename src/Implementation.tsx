import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Import asset
import bgImage from "./assets/Pipa_L.png";
import img1 from "./assets/gambar prh 3.0.png";
import img2 from "./assets/gambar prh 2.0.png";
import img3 from "./assets/gambar prh 5.0.png";
import img4 from "./assets/gambar prh 4.0.png";

export default function ImplementasiPRH() {
  const data = {
    totalProyek: 11,
    totalUnit: 340,
    wilayah: ["Kota Semarang", "Kota Pekalongan"],
    pengalaman: 3,
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay biar teks kebaca */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Konten di atas background */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-white">
        {/* Judul */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-up"
        >
          Implementasi Program Pipa Resapan Horizontal (PRH)
        </h1>

        {/* Grid Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold text-gray-900">Total Proyek</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{data.totalProyek}</p>
          </div>
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold text-gray-900">Unit Terpasang</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">{data.totalUnit}</p>
          </div>
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold text-gray-900">Wilayah Terlayani</h2>
            <ul className="mt-3 space-y-1">
              {data.wilayah.map((w, idx) => (
                <li key={idx} className="text-lg font-medium text-blue-600">
                  {w}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-xl font-semibold text-gray-900">Pengalaman</h2>
            <p className="text-3xl font-bold text-blue-600 mt-2">
              {data.pengalaman} Tahun
            </p>
          </div>
        </div>

        {/* Deskripsi */}
        <div
          className="bg-white/0 backdrop-blur-md rounded-2xl p-6 md:p-8 mb-12 shadow-lg"
          data-aos="fade-up"
        >
          <p className="text-gray-100 leading-relaxed text-justify">
            Pipa Resapan Horizontal (PRH) merupakan teknologi sederhana yang
            berfungsi mengurangi limpasan air hujan sekaligus meningkatkan
            ketersediaan air tanah. PRH efektif diterapkan pada wilayah rawan
            banjir maupun kekeringan dengan cara meresapkan air permukaan ke
            dalam tanah. Hingga saat ini, telah dipasang{" "}
            <span className="font-semibold text-blue-300">{data.totalUnit} unit</span>{" "}
            PRH di berbagai lokasi strategis, khususnya di{" "}
            <span className="font-semibold text-blue-300">
              {data.wilayah.join(", ")}
            </span>
            , melalui dukungan pemerintah daerah, perguruan tinggi, dan lembaga
            terkait. Program ini terbukti membantu mitigasi banjir, konservasi
            air, serta mendukung keberlanjutan lingkungan.
          </p>
        </div>

        {/* Galeri Gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[img1, img2, img3, img4].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`PRH ${idx + 1}`}
              className="w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            />
          ))}
        </div>

        {/* Tombol Back */}
        <div className="flex justify-center">
          <Link
            to="/"
            className="mt-12 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
