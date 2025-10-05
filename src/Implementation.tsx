import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import { Typewriter } from "react-simple-typewriter";

// Import asset
import bgImage from "./assets/Pipa_L.png";
import img1 from "./assets/gambar prh 3.0.png";
import img2 from "./assets/gambar prh 2.0.png";
import img3 from "./assets/gambar prh 5.0.png";
import img4 from "./assets/gambar prh 4.0.png";
import background from "./assets/background.png"

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
      className="relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Konten utama */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 text-white text-center">
        
        {/* Judul */}
        <h1
          className="text-lg sm:text-2xl md:text-4xl font-bold mb-6 leading-snug"
          data-aos="fade-up"
        >
          Implementasi Program Pipa Resapan Horizontal (PRH)
        </h1>

        {/* Grid Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-4 sm:p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              Total Proyek
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mt-1">
              <CountUp end={data.totalProyek} duration={3.5} />
            </p>
          </div>

          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-4 sm:p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              Unit Terpasang
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mt-1">
              <CountUp end={data.totalUnit} duration={3.5} />
            </p>
          </div>

          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-4 sm:p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              Wilayah Terlayani
            </h2>
            <ul className="mt-2 space-y-1">
              {data.wilayah.map((w, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm md:text-base font-bold text-blue-600"
                >
                  {w}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow p-4 sm:p-6 text-center"
            data-aos="fade-up"
          >
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">
              Pengalaman
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mt-1">
              <CountUp end={data.pengalaman} duration={3.5} /> Tahun
            </p>
          </div>
        </div>

        {/* Deskripsi */}
        <div
  className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 md:p-8 mb-6 shadow-lg"
  data-aos="fade-up"
>
  <p className="text-gray-100 leading-relaxed text-justify text-xs sm:text-sm md:text-base">
    <Typewriter
      words={[
        `Pipa Resapan Horizontal (PRH) merupakan teknologi sederhana yang berfungsi mengurangi limpasan air hujan sekaligus meningkatkan ketersediaan air tanah. PRH efektif diterapkan pada wilayah rawan banjir maupun kekeringan dengan cara meresapkan air permukaan ke dalam tanah. Hingga saat ini, telah dipasang ${data.totalUnit} unit PRH di berbagai lokasi strategis, khususnya di ${data.wilayah.join(", ")}, melalui dukungan pemerintah daerah, perguruan tinggi, dan lembaga terkait. Program ini terbukti membantu mitigasi banjir, konservasi air, serta mendukung keberlanjutan lingkungan. Dengan pengalaman lebih dari ${data.pengalaman} tahun, kami berkomitmen untuk terus mengembangkan dan memperluas implementasi PRH demi masa depan yang lebih hijau dan berkelanjutan.`,
      ]}
      cursorBlinking={true}
      cursorStyle="|"
      typeSpeed={10}
      deleteSpeed={0}
      delaySpeed={1000}
    />
  </p>
</div>

        {/* Galeri Gambar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-4">
          {[img1, img2, img3, img4].map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`PRH ${idx + 1}`}
              className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              data-aos="fade-up"
            />
          ))}
        </div>

        {/* Tombol Back */}
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base font-semibold rounded-xl shadow hover:bg-blue-700 transition"
          >
            ← Kembali
          </Link>
        </div>
      </div>
    </div>
  );
}
