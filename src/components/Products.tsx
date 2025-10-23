import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";
import PRL from "../assets/Pipa_L.png";
import PRR from "../assets/Pipa_R.png";
import PRT from "../assets/Pipa_T.png";

export const Products = () => {
  const products = [
    {
      type: "PRH Tipe T",
      id: "IDS000006551",
      description: "Ideal untuk area dengan aliran air dari multiple direction",
      image: PRT,
      features: [
        "Aliran multi-arah",
        "Kapasitas besar",
        "Cocok untuk area luas",
      ],
    },
    {
      type: "PRH Tipe L",
      id: "IDS000006552",
      description: "Cocok untuk sudut area dan space terbatas",
      image: PRL,
      features: ["Efisien untuk sudut", "Instalasi mudah", "Hemat ruang"],
    },
    {
      type: "PRH Radial",
      id: "IDS000006553",
      description: "Solusi optimal untuk area terbuka dengan distribusi radial",
      image: PRR,
      features: [
        "Distribusi radial",
        "Optimal untuk lahan terbuka",
        "Perawatan sederhana",
      ],
    },
  ];

  const [] = useState<(typeof products)[0] | null>(null);
  return (
    <section id="produk" className="py-20 bg-[#0F5E99] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">
            Produk Unggulan
          </h2>
          <p className="text-xl text-white">
            Pipa Resapan Horisontal (PRH) - Teknologi Inovatif untuk Lingkungan
          </p>
        </div>

        {/* Produk Cards */}
        {/* Produk Cards */}
        <div className="px-5">
          {/* Grid Produk */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <div
                key={index}
                className="group w-full h-80 [perspective:1000px]"
              >
                {/* Container Flip */}
                <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* FRONT SIDE */}
                  <div className="absolute inset-0 bg-white rounded-2xl shadow-lg overflow-hidden [backface-visibility:hidden] [transform:rotateY(0deg)]">
                    <div className="bg-gradient-to-r from-blue-600 to-yellow-600 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {product.type}
                      </h3>
                      <p className="text-blue-100">ID: {product.id}</p>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600">{product.description}</p>
                    </div>
                    <div className="pl-5">
                      <ul className="space-y-2">
                        {product.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-center text-gray-700"
                          >
                            <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  {/* BACK SIDE */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <img
                      src={product.image}
                      alt={product.type}
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                    <div className="absolute bottom-3 left-0 right-0 flex justify-center pb-6"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Temukan Produk PRH di E-Katalog
            </h3>
            <p className="text-gray-600 mb-6">
              Jelajahi produk terbaik kami di E-Katalog Resmi PRH.
              Klik sekarang dan temukan solusi terbaik untuk kebutuhan Anda!
            </p>
            <a
              href="https://katalog.inaproc.id/rekayasa-nusa-mandiri/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-yellow-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Lihat E-Katalog
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
