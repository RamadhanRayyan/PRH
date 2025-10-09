import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Beranda", id: "#beranda" },
    { name: "Tentang Kami", id: "#tentang-kami" },
    { name: "Produk", id: "#produk" },
    { name: "Implementasi", id: "#implementasi" }, // ⬅️ diarahkan ke summary
    { name: "Galeri", id: "#galeri" },
    { name: "Kontak", id: "#kontak" },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo dan Judul */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-white-600 to-white-800 rounded-lg flex items-center justify-center">
              <a href="#beranda">
                <img src={logo} className="h-15 w-15" />
              </a>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">
                CV. Rekayasa Nusa Mandiri
              </h1>
              <p className="text-sm text-gray-600">
                Inovasi Teknologi Pipa Resapan
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScroll(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* Ikon Booklet */}
            <a
              href="/booklet.pdf"
              download
              className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-110"
              title="Download Booklet"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-6 h-6"
              >
                <path d="M416 32H144c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h272c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM144 64h256v320H144V64zm0 384V416h256v32H144zM112 80v336l32-16V96l-32-16z" />
              </svg>
            </a>
          </nav>

          {/* Tombol Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigasi Mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleScroll(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left"
                >
                  {item.name}
                </button>
              ))}

              {/* Tombol Booklet (Mobile) */}
              <a
                href="/booklet.pdf"
                download
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 flex justify-center items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                📘 <span>Booklet</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
