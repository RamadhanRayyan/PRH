import {  useState } from "react";
import { ChevronRight, Award, TrendingUp } from 'lucide-react';
import patenT from "../assets/paten T.png";
import patenR from "../assets/paten R.png";
import patenL from "../assets/paten L.png";
import PRL from "../assets/Pipa_L.png";
import PRR from "../assets/Pipa_R.png";
import PRT from "../assets/Pipa_T.png";


export const Products = () => {const products = [
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

  const [] = useState<
    (typeof products)[0] | null
  >(null);
  return (
    <section id="produk" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-xl text-gray-600">
              Pipa Resapan Horizontal (PRH) - Teknologi Inovatif untuk
              Lingkungan
            </p>
          </div>

          {/* Produk Cards */}
          {/* Produk Cards */}
          <div className="p-8">
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
                      <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
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
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-3 left-0 right-0 flex justify-center pb-6">
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Tambahan Sertifikat */}
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Sertifikat Paten
            </h3>
            <p className="text-gray-600">
              Inovasi PRH sudah mendapatkan perlindungan hukum melalui paten
              sederhana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <img
              src={patenT}
              alt="Sertifikat Paten PRH Tipe T"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={patenR}
              alt="Sertifikat Paten PRH Radial"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={patenL}
              alt="Sertifikat Paten PRH Tipe L"
              className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Manfaat & Keunggulan */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="h-8 w-8 text-green-600 mr-3" />
                Manfaat PRH
              </h3>
              <ul className="space-y-4">
                {[
                  "Mengatasi banjir & genangan air",
                  "Menambah ketersediaan air tanah",
                  "Mengurangi intrusi air laut",
                  "Menjaga keseimbangan ekosistem",
                ].map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
                Keunggulan PRH
              </h3>
              <ul className="space-y-4">
                {[
                  "Harga lebih murah dibanding alternatif lain",
                  "Pembuatan & perawatan mudah",
                  "Tidak membutuhkan lahan luas",
                  "Tetap efektif walau muka air tanah dangkal",
                ].map((advantage, index) => (
                  <li
                    key={index}
                    className="flex items-center text-lg text-gray-700"
                  >
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                    <span>{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
  )
}
