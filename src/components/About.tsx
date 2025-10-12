import { Typewriter } from 'react-simple-typewriter';
import tentangkami from '../assets/fotobareng.png';
import { Award, TrendingUp } from 'lucide-react';


export const About = () => {
  return (
    <section id="tentang-kami" className="pt-20 pb-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              <Typewriter
                words={[
                  "CV. Rekayasa Nusa Mandiri adalah perusahaan yang bergerak di bidang inovasi teknologi lingkungan dan infrastruktur. Kami berkomitmen menghadirkan solusi cerdas untuk konservasi air tanah, pengendalian banjir, dan keberlanjutan lingkungan.",
                ]}
                cursorBlinking={true}
                cursorStyle="|"
                typeSpeed={20}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
            {/* isi tambahan kalau ada */}
          </div>

          {/* Foto lebih rapet atas-bawah */}
          <div className="w-full flex justify-center">
            <img
              src={tentangkami}
              alt="tentangKami"
              className="max-w-3xl w-full h-auto object-contain rounded-2xl shadow-md"
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
