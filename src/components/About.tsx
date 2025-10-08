import { Typewriter } from 'react-simple-typewriter';
import tentangkami from '../assets/fotobareng.png';

export const About = () => {
  return (
    <section id="tentang-kami" className="pt-20 pb-10 bg-white">
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
        </div>
      </section>
  )
}
