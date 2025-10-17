import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (id: string) => {
    if (id === "#tentangkami") {
      navigate("/about");
    } else if (id === "#publikasi") {
      // khusus Publikasi → pindah ke halaman /publikasi
      navigate("/publikasi");
    } else {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id.replace("#", "") } });
      } else {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { name: "Beranda", id: "#beranda" },
    { name: "Tentang Kami", id: "#tentangkami" },
    { name: "Produk", id: "#produk" },
    { name: "Proyek", id: "#proyek" },
    { name: "Publikasi", id: "#publikasi" }, // ← tambahan di sini
    { name: "Kontak", id: "#kontak" },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-3"
            >
              <img src={logo} className="h-10 w-10" alt="Logo" />
              <div className="text-start">
                <h1 className="text-xl font-bold text-gray-800">
                  CV. Rekayasa Nusa Mandiri
                </h1>
                <p className="text-sm text-gray-600">
                  Pipa Resapan Horisontal
                </p>
              </div>
            </button>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2 px-4 text-left"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
