import { useState } from "react";

import imeg1 from "../assets/gambar prh 1.0.jpg";
import imeg2 from "../assets/gambar prh 2.0.png";
import imeg3 from "../assets/gambar prh 3.0.png";
import imeg4 from "../assets/gambar prh 4.0.png";

export const Gallery = () => {
  const galleryImages = [
    {
      title: "Proses Pembuatan PRH",
      description:
        "Tahap awal pembuatan Pipa Resapan Horizontal dengan material berkualitas",
      gambar: imeg1,
    },
    {
      title: "Persiapan Lahan",
      description: "Survei dan persiapan lokasi untuk pemasangan sistem PRH",
      gambar: imeg2,
    },
    {
      title: "Pemasangan Input Saluran",
      description: "Instalasi saluran input dan talang air untuk sistem PRH",
      gambar: imeg3,
    },
    {
      title: "Hasil Akhir Pemasangan",
      description: "Sistem PRH yang telah terpasang dan siap beroperasi",
      gambar: imeg4,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = galleryImages.length;

  return (
    <section id="galeri" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Galeri Pemasangan & Pemeliharaan
          </h2>
          <p className="text-xl text-gray-600">
            Dokumentasi Proses Implementasi PRH
          </p>
        </div>

        <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={galleryImages[currentSlide].gambar}
              alt={galleryImages[currentSlide].title}
              className="w-full h-full object-cover brightness-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {galleryImages[currentSlide].title}
                </h3>
                <p className="text-lg opacity-90 max-w-md mx-auto">
                  {galleryImages[currentSlide].description}
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Navigation */}
          <div className="p-6">
            {/* Indicator dots */}
            <div className="flex justify-center space-x-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="mt-4 flex justify-between">
              {currentSlide > 0 ? (
                <button
                  onClick={() => setCurrentSlide((prev) => prev - 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  ← Sebelumnya
                </button>
              ) : (
                <div /> // biar layout tetap seimbang
              )}

              {currentSlide < totalSlides - 1 ? (
                <button
                  onClick={() => setCurrentSlide((prev) => prev + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Selanjutnya →
                </button>
              ) : (
                <div />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
