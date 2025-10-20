import { useNavigate, useLocation } from "react-router-dom";
import { Users, Instagram, Youtube, ExternalLink } from "lucide-react";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (targetId: string) => {
    // Jika menu menuju halaman lain
    if (targetId === "tentangkami") {
      navigate("/about");
      return;
    }
    if (targetId === "publikasi") {
      navigate("/publikasi");
      return;
    }

    // Kalau menu scroll ke section di halaman utama
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: targetId } });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const menuItems = [
    { id: "beranda", label: "Beranda" },
    { id: "tentangkami", label: "Tentang Kami" },
    { id: "produk", label: "Produk" },
    { id: "proyek", label: "Proyek" },
    { id: "publikasi", label: "Publikasi" },
    { id: "kontak", label: "Kontak" },
  ];

  return (
    <footer className="relative z-50 bg-gray-900 text-white py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Logo */}
          <div className="flex flex-col items-start text-left">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-14 h-14 bg-gray-50 rounded-lg flex items-center justify-center">
                <a href="#beranda">
                  <img src="/logo.png" alt="logo" className="h-12 w-12 object-contain cursor-pointer" />
                </a>
              </div>
              <div>
                <h3 className="text-lg font-bold">CV. Rekayasa Nusa Mandiri</h3>
                <p className="text-sm text-gray-400">Inovasi Teknologi Pipa Resapan</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Solusi inovatif untuk konservasi air tanah dan penanggulangan banjir
              melalui teknologi Pipa Resapan Horisontal (PRH).
            </p>
          </div>

          {/* Menu */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-gray-400">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Sosial Media */}
          <div className="text-left">
            <h4 className="text-lg font-semibold mb-4">Ikuti Kami</h4>
            <div className="flex space-x-4 flex-wrap">
              <a
                href="https://www.instagram.com/piparesapanhorisontal_prh/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://bit.ly/piparesapanhorisontal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@piparesapanhorisontal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <Users className="h-5 w-5" />
              </a>
              <a
                href="https://piparesapanhorisontal.blogspot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          © 2025 CV. Rekayasa Nusa Mandiri. Semua hak dilindungi. | 
          Teknologi Pipa Resapan Horisontal untuk Masa Depan Berkelanjutan
        </div>
      </div>
    </footer>
  );
};
