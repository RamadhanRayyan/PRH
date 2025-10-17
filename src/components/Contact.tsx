import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Kontak Kami</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Hubungi Kami untuk Kerjasama & Pemesanan PRH
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            Informasi Perusahaan
          </h3>

          {/* Baris Social Media */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 text-center">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/rekayasanusamandiri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start space-x-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                <p className="text-gray-600">@rekayasanusamandiri</p>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@rekayasanusamandiri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start space-x-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <div className="bg-blue-600 p-3 rounded-lg flex items-center justify-center flex-shrink-0">
                <SiTiktok className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">TikTok</h4>
                <p className="text-gray-600">@rekayasanusamandiri</p>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@rekayasanusamandiri"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-start space-x-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <Youtube className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">YouTube</h4>
                <p className="text-gray-600">Rekayasa Nusa Mandiri</p>
              </div>
            </a>
          </div>

          {/* Baris Kontak */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Alamat */}
            <a
              href="https://www.google.com/maps?q=Jl.+Bulusan+Utara+Raya,+Kec.+Tembalang,+Kota+Semarang,+Jawa+Tengah,+Indonesia+50277"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">Alamat Kantor</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  Jl. Bulusan Utara Raya, Kec. Tembalang, Kota Semarang
                  <br />
                  Jawa Tengah, Indonesia 50277
                </p>
              </div>
            </a>

            {/* Telepon */}
            <a
              href="https://wa.me/6281390294115?text=Halo%20min%2C%20saya%20tertarik%20dengan%20produk%20Pipa%20Resapan%20Horizontal%20(PRH)"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">Telepon / WhatsApp</h4>
                <p className="text-gray-600 text-sm sm:text-base">+62 813 9029 4115</p>
              </div>
            </a>

            {/* Email */}
            <a
              href="mailto:rekayasanusamandiri@gmail.com"
              className="flex items-start space-x-4 p-4 rounded-xl hover:shadow-xl hover:scale-105 transition-transform bg-white"
            >
              <div className="bg-blue-600 p-3 rounded-lg flex-shrink-0">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  rekayasanusamandiri@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Tombol WhatsApp Floating */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/6281227277133?text=Halo%20min%2C%20saya%20tertarik%20dengan%20produk%20*Pipa%20Resapan%20Horizontal%20(PRH)*.%0ABoleh%20saya%20tahu%20lebih%20detail?%20Terima%20kasih"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 overflow-visible"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.01 2.004c-5.509 0-9.98 4.468-9.98 9.977 0 1.759.463 3.477 1.343 5l-1.421 5.2 5.331-1.396c1.46.801 3.11 1.22 4.727 1.22 5.509 0 9.99-4.471 9.99-9.98 0-5.51-4.481-9.98-9.99-9.98zm0 18.143c-1.392 0-2.754-.352-3.973-1.02l-.285-.158-3.163.829.848-3.1-.183-.318c-.797-1.273-1.219-2.733-1.219-4.224 0-4.486 3.645-8.13 8.13-8.13s8.13 3.645 8.13 8.13-3.645 8.13-8.13 8.13z"/>
            </svg>
            <span
              className="absolute inset-0 rounded-full bg-green-400 opacity-40 z-0"
              style={{ animation: "pulseWave 1.5s ease-in-out infinite", animationDelay: "0.3s" }}
            ></span>
          </a>

          <style>{`
            @keyframes pulseWave {
              0% { transform: scale(1); opacity: 0.4; }
              50% { transform: scale(1.7); opacity: 0.1; }
              100% { transform: scale(1); opacity: 0.4; }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
};
