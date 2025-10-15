import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export const Contact = () => {
  return (
    <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kontak Kami
            </h2>
            <p className="text-xl text-gray-600">
              Hubungi Kami untuk Kerjasama & Pemesanan PRH
            </p>
          </div>

          <div className="gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center justify-center">
                Informasi Perusahaan
              </h3>

              {/* responsif */}
              <div className="flex flex-col md:flex-row items-stretch md:items-start justify-center gap-8">
                {/* alamat */}
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Alamat Kantor
                    </h4>
                    <p className="text-gray-600">
                      Jl.Bulusan Utara Raya Kec.Tembalang Kota Semarang
                      <br />
                      Jawa Tengah, Indonesia 50277
                    </p>
                  </div>
                </div>

                {/* telepon */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Telepon / WhatsApp
                    </h4>
                    <p className="text-gray-600">+62 813 9029 4115</p>
                  </div>
                </div>

                {/* email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-600">
                      rekayasanusamandiri@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tombol WhatsApp Floating dengan efek gelombang forever */}
          <div className="fixed bottom-6 right-6 z-50">
            <a
              href="https://wa.me/+6281227277133"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 overflow-visible"
            >
              {/* WhatsApp Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.01 2.004c-5.509 0-9.98 4.468-9.98 9.977 0 1.759.463 3.477 1.343 5l-1.421 5.2 5.331-1.396c1.46.801 3.11 1.22 4.727 1.22 5.509 0 9.99-4.471 9.99-9.98 0-5.51-4.481-9.98-9.99-9.98zm0 18.143c-1.392 0-2.754-.352-3.973-1.02l-.285-.158-3.163.829.848-3.1-.183-.318c-.797-1.273-1.219-2.733-1.219-4.224 0-4.486 3.645-8.13 8.13-8.13s8.13 3.645 8.13 8.13-3.645 8.13-8.13 8.13zm4.555-6.16c-.249-.125-1.473-.727-1.701-.809-.228-.084-.394-.125-.56.125s-.64.808-.785.974c-.145.166-.289.188-.537.063-.249-.125-1.051-.387-2.002-1.234-.74-.659-1.239-1.472-1.384-1.721-.145-.25-.016-.385.109-.51.112-.111.249-.289.373-.434.125-.145.166-.249.249-.415.083-.166.042-.312-.021-.437-.062-.125-.56-1.35-.767-1.85-.202-.486-.408-.42-.56-.428l-.478-.008c-.166 0-.437.063-.665.312-.228.25-.873.85-.873 2.071 0 1.22.895 2.397 1.021 2.563.125.166 1.759 2.688 4.264 3.77.596.257 1.061.411 1.424.527.598.19 1.14.163 1.57.099.479-.072 1.473-.601 1.68-1.182.207-.582.207-1.082.145-1.182-.061-.104-.227-.166-.476-.291z" />
              </svg>

              {/* Efek gelombang */}
              <span
                className="absolute inset-0 rounded-full bg-green-400 opacity-40 z-0"
                style={{
                  animation: "pulseWave 1.5s ease-in-out infinite",
                }}
              ></span>
            </a>

            {/* Animasi keyframes */}
            <style>
              {`
      @keyframes pulseWave {
        0% {
          transform: scale(1);
          opacity: 0.4;
        }
        50% {
          transform: scale(1.7);
          opacity: 0.1;
        }
        100% {
          transform: scale(1);
          opacity: 0.4;
        }
      }
    `}
            </style>
          </div>
        </div>
      </section>
  )
}
