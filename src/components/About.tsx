import { Typewriter } from "react-simple-typewriter";
import tentangkami from "../assets/fotobareng.png";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import patenT from "../assets/paten T.png";
import patenR from "../assets/paten R.png";
import patenL from "../assets/paten L.png";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const About = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <section id="tentang-kami" className="pt-36 pb-10 bg-[#0F5E99]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-600 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4">
              Tentang Kami
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              <Typewriter
                words={[
                  "CV. Rekayasa Nusa Mandiri adalah perusahaan yang bergerak di bidang inovasi teknologi lingkungan dan infrastruktur. Kami berkomitmen menghadirkan solusi cerdas untuk konservasi air tanah, pengendalian banjir, dan keberlanjutan lingkungan.",
                ]}
                cursorBlinking={true}
                cursorStyle="|"
                typeSpeed={8}
                deleteSpeed={0}
                delaySpeed={1000}
              />
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
            {/* Isi tambahan kalau ada */}
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

      <div className="p-14 bg-[#0F5E99]">
        {/* Tambahan Sertifikat */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-yellow-400 mb-4">
            Sertifikat Paten
          </h3>
          <p className="text-white text-xl">
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
      </div>

      <Footer />
    </>
  );
};
