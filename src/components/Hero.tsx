import hero from "../assets/hero.png";
import { BookOpen, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="beranda"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/35"></div>

      {/* content */}
      <div className="relative z-10 w-full max-w-3xl mx-auto px-4 sm:px-6 lg:pl-16">
        {/* Left text */}
        <div className="max-w-5xl">
          <h1
            className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight text-center"
            style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
          >
            Solusi Inovatif untuk
            <span className="text-blue-400"> Konservasi Air Tanah</span> dan
            <span className="text-blue-400"> Penanggulangan Banjir</span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed text-center">
            Pipa Resapan Horizontal (PRH) sebagai teknologi tepat guna untuk
            masa depan lingkungan berkelanjutan.
          </p>

          {/* tombol CTA */}
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 justify-center">
            {/* Tombol Booklet */}
            <a
              href="/Booklet.pdf" // ganti path sesuai lokasi file kamu
              download
              className="flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Lihat Booklet
            </a>

            {/* Tombol WhatsApp */}
            <a
              href="https://wa.me/6281227277133?text=Halo%20min%2C%20saya%20tertarik%20dengan%20produk%20*Pipa%20Resapan%20Horizontal%20(PRH)*.%0ABoleh%20saya%20tahu%20lebih%20detail?%20Terima%20kasih%20" // ganti nomor WA
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Chat Sekarang
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
