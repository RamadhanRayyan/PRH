import {
  Users,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="logo"
                    className="h-12 w-12 text-white"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    CV. Rekayasa Nusa Mandiri
                  </h3>
                  <p className="text-sm text-gray-400">
                    Inovasi Teknologi Pipa Resapan
                  </p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Solusi inovatif untuk konservasi air tanah dan penanggulangan
                banjir melalui teknologi Pipa Resapan Horizontal (PRH).
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Menu</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#beranda"
                    className="hover:text-white transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang-kami"
                    className="hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#produk"
                    className="hover:text-white transition-colors"
                  >
                    Produk
                  </a>
                </li>
                <li>
                  <a
                    href="#implementasi"
                    className="hover:text-white transition-colors"
                  >
                    Implementasi
                  </a>
                </li>
                <li>
                  <a
                    href="#galeri"
                    className="hover:text-white transition-colors"
                  >
                    Galeri
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="hover:text-white transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/piparesapanhorisontal_prh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://bit.ly/piparesapanhorisontal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </a>
                <a
                  href="https://www.tiktok.com/@piparesapanhorisontal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <Users className="h-5 w-5" />
                </a>
                <a
                  href="https://piparesapanhorisontal.blogspot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 CV. Rekayasa Nusa Mandiri. Semua hak dilindungi. |
              Teknologi Pipa Resapan Horizontal untuk Masa Depan Berkelanjutan
            </p>
          </div>
        </div>
      </footer>
  )
}
