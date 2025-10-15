import hero from "../assets/hero.png";
import { BookOpen, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:pl-1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left text */}
          <div>
            <h1
              className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
            >
              Inovasi Efektif Konservasi Air Tanah dan Cegah Banjir
            </h1>

            <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
              Pipa Resapan Horizontal (PRH) sebagai teknologi tepat guna untuk
              masa depan lingkungan berkelanjutan.
            </p>

            {/* tombol CTA */}
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {/* Tombol Booklet */}
              <a
                href="/Booklet.pdf" // ganti path sesuai lokasi file kamu
                download
                className="flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Lihat Booklet
              </a>

              {/* Tombol WhatsApp */}
              <a
                href="https://wa.me/+6281390294115" // ganti nomor WA
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Hubungi Sekarang
              </a>
            </div>
          </div>

          {/* Right card (kosong, bisa isi gambar atau komponen lain) */}
        </div>
      </div>
    </section>
  );
};
