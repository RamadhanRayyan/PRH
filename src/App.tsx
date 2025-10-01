import React, { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Users,
  Target,
  Lightbulb,
  Award,
  Calendar,
  Building,
  Droplets,
  Shield,
  TrendingUp,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import imeg1 from "./assets/gambar prh 1.0.jpg";
import imeg2 from "./assets/gambar prh 2.0.png";
import imeg3 from "./assets/gambar prh 3.0.png";
import imeg4 from "./assets/gambar prh 4.0.png";
import imeg5 from "./assets/gambar prh 5.0.png";
import logo from "./assets/logo.png";
import patenT from "./assets/paten T.png";
import patenR from "./assets/paten R.png";
import patenL from "./assets/paten L.png";
import hero from "./assets/hero.png";
import PRR from "./assets/Pipa_Radial.png"
import { Image } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      title: "Proses Pembuatan PRH",
      description:
        "Tahap awal pembuatan Pipa Resapan Horizontal dengan material berkualitas",
      gambar: imeg1,
    },
    {
      title: "Persiapan Lahan",
      description: "Survei dan persiapan lokasi untuk pemasangan sistem PRH",
      gambar: imeg2,
    },
    {
      title: "Pemasangan Input Saluran",
      description: "Instalasi saluran input dan talang air untuk sistem PRH",
      gambar: imeg3,
    },
    {
      title: "Hasil Akhir Pemasangan",
      description: "Sistem PRH yang telah terpasang dan siap beroperasi",
      gambar: imeg4,
    },
    {
      title: "Skema Pipa Resapan Horizontal",
      description: "Rangkaian berskala untuk menjaga kinerja optimal PRH",
      gambar: imeg5,
    },
  ];

  const projects = [
    {
      location: "Semarang",
      units: 25,
      funding: "Pemerintah Kota",
      year: "2023",
    },
    { location: "Blora", units: 40, funding: "Dinas PU", year: "2023" },
    { location: "Surakarta", units: 18, funding: "Universitas", year: "2024" },
    {
      location: "Yogyakarta",
      units: 32,
      funding: "Pemerintah Daerah",
      year: "2024",
    },
    { location: "Magelang", units: 22, funding: "Dinas PU", year: "2024" },
  ];

  const products = [
    {
      type: "PRH Tipe T",
      id: "IDS000006551",
      description: "Ideal untuk area dengan aliran air dari multiple direction",
      features: [
        "Kapasitas resapan tinggi",
        "Instalasi mudah",
        "Maintenance minimal",
      ],
    },
    {
      type: "PRH Tipe L",
      id: "IDS000006552",
      description: "Cocok untuk sudut area dan space terbatas",
      features: ["Desain compact", "Efisien space", "Instalasi fleksibel"],
    },
    {
      type: "PRH Radial",
      id: "IDS000006553",
      description: "Solusi optimal untuk area terbuka dengan distribusi radial",
      features: [
        "Coverage area luas",
        "Distribusi merata",
        "Efektivitas maksimal",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-white-600 to-white-800 rounded-lg flex items-center justify-center">
                <img src={logo} className="h-15 w-15 text-white" />
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
            <nav className="hidden md:flex space-x-8">
              {["Beranda", "Tentang Kami", "Produk", "Galeri", "Kontak"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-2">
                {[
                  "Beranda",
                  "Tentang Kami",
                  "Produk",
                  "Galeri",
                  "Kontak",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
  id="beranda"
  className="relative h-screen bg-cover bg-center flex items-center"
  style={{ backgroundImage: `url(${hero})` }}
>
  {/* overlay */}
  <div className="absolute inset-0 bg-black/10"></div>

  {/* content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Left text */}
      <div>
        <h1
  className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
  style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
>
  Solusi Inovatif untuk
  <span className="text-blue-500"> Konservasi Air Tanah</span> dan
  <span className="text-teal-500"> Penanggulangan Banjir</span>
</h1>

        <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
          CV. Rekayasa Nusa Mandiri mempersembahkan Pipa Resapan Horizontal
          (PRH) sebagai teknologi tepat guna untuk masa depan lingkungan
          berkelanjutan.
        </p>
        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
          {/* tombol CTA */}
        </div>
      </div>

      {/* Right card */}
      <div className="relative">
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 text-white transform rotate-2 hover:rotate-0 transition-transform duration-300 shadow-lg">
          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
            <Droplets className="h-16 w-16 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Teknologi PRH</h3>
            <p className="mb-4">
              Pipa Resapan Horizontal untuk solusi banjir dan konservasi air tanah
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>Ramah Lingkungan</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="h-4 w-4 mr-2" />
                <span>Efektif & Efisien</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




      {/* Tentang Kami */}
      <section id="tentang-kami" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              CV. Rekayasa Nusa Mandiri adalah perusahaan yang bergerak di
              bidang inovasi teknologi lingkungan dan infrastruktur. Kami
              berkomitmen menghadirkan solusi cerdas untuk konservasi air tanah,
              pengendalian banjir, dan keberlanjutan lingkungan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          </div>
        </div>
      </section>

      {/* Produk Unggulan */}
      <section id="produk" className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Produk Unggulan
      </h2>
      <p className="text-xl text-gray-600">
        Pipa Resapan Horizontal (PRH) - Teknologi Inovatif untuk Lingkungan
      </p>
    </div>

    {/* Produk Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">{product.type}</h3>
            <p className="text-blue-100">ID: {product.id}</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4">{product.description}</p>
            <ul className="space-y-2">
              {product.features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-gray-700">
                  <ChevronRight className="h-4 w-4 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Tambahan Sertifikat */}
    <div className="text-center mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">Sertifikat Paten</h3>
      <p className="text-gray-600">
        Inovasi PRH sudah mendapatkan perlindungan hukum melalui paten sederhana.
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

    {/* Manfaat & Keunggulan */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Award className="h-8 w-8 text-green-600 mr-3" />
          Manfaat PRH
        </h3>
        <ul className="space-y-4">
          {[
            "Mengatasi banjir & genangan air",
            "Menambah ketersediaan air tanah",
            "Mengurangi intrusi air laut",
            "Menjaga keseimbangan ekosistem",
          ].map((benefit, index) => (
            <li key={index} className="flex items-center text-lg text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <TrendingUp className="h-8 w-8 text-blue-600 mr-3" />
          Keunggulan PRH
        </h3>
        <ul className="space-y-4">
          {[
            "Harga lebih murah dibanding alternatif lain",
            "Pembuatan & perawatan mudah",
            "Tidak membutuhkan lahan luas",
            "Tetap efektif walau muka air tanah dangkal",
          ].map((advantage, index) => (
            <li key={index} className="flex items-center text-lg text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
              <span>{advantage}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>


      {/* Implementasi & Proyek */}
      <section id="implementasi" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementasi & Proyek
            </h2>
            <p className="text-xl text-gray-600">
              Track Record Pemasangan PRH di Berbagai Wilayah
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: "Total Proyek", value: "11+", icon: Building },
              { label: "Unit Terpasang", value: "300+", icon: Award },
              { label: "Wilayah Terlayani", value: "11+", icon: MapPin },
              { label: "Tahun Pengalaman", value: "3+", icon: Calendar },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-6 text-center"
              >
                <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="galeri" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Galeri Pemasangan & Pemeliharaan
            </h2>
            <p className="text-xl text-gray-600">
              Dokumentasi Proses Implementasi PRH
            </p>
          </div>

          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-96 ">
              <img
                src={galleryImages[currentSlide].gambar}
                alt={galleryImages[currentSlide].title}
                className={`w-full h-full ${
                  currentSlide === 4 ? "object-contain" : "object-cover"
                }`}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`text-center ${
                    currentSlide === 4 ? "text-black" : "text-white"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">
                    {galleryImages[currentSlide].title}
                  </h3>
                  <p className="text-lg opacity-90 max-w-md">
                    {galleryImages[currentSlide].description}
                  </p>
                </div>
              </div>
            </div>

            {/* Gallery Navigation */}
            <div className="p-6">
              <div className="flex justify-center space-x-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="mt-4 flex justify-between">
                <button
                  onClick={() =>
                    setCurrentSlide(
                      (prev) =>
                        (prev - 1 + galleryImages.length) % galleryImages.length
                    )
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  ← Sebelumnya
                </button>
                <button
                  onClick={() =>
                    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Selanjutnya →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informasi Wilayah Blora */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Studi Kasus: Kabupaten Blora
            </h2>
            <p className="text-xl text-gray-600">
              Solusi PRH untuk Permasalahan Banjir di Blora
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Permasalahan di Wilayah Blora
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">
                    Curah Hujan Tinggi
                  </span>
                  <span className="text-2xl font-bold text-green-600">
                    97%
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">
                    Dominasi Lahan Sawah
                  </span>
                  <span className="text-2xl font-bold text-orange-600">25%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg">
                  <span className="font-medium text-gray-700">
                    Risiko Banjir
                  </span>
                  <span className="text-2xl font-bold text-red-600">20-30%</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Solusi PRH yang Diterapkan
              </h3>
              <div className="mt-6 p-4 bg-white rounded-lg">
                <p className="text-sm text-gray-600 italic">
                  "Dengan kondisi curah hujan tinggi dan dominasi lahan sawah,
                  Kabupaten Blora sangat membutuhkan teknologi PRH untuk
                  mengurangi limpasan air hujan, mengatasi banjir, dan
                  meningkatkan ketersediaan air tanah."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Sosial & Publikasi */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Media Sosial & Publikasi
            </h2>
            <p className="text-xl text-gray-600">
              Ikuti perkembangan terbaru dan akses e-catalogue kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Instagram",
                icon: Instagram,
                color: "from-pink-500 to-purple-600",
                handle: "@piparesapanhorisontal_prh",
                url: "https://www.instagram.com/piparesapanhorisontal_prh/",
              },
              {
                name: "TikTok",
                icon: Users,
                color: "from-black to-gray-800",
                handle: "@piparesapanhorisontal",
                url: "https://www.tiktok.com/@piparesapanhorisontal",
              },
              {
                name: "YouTube",
                icon: Youtube,
                color: "from-red-500 to-red-600",
                handle: "Pipa Resapan Horizontal",
                url: "https://bit.ly/piparesapanhorisontal",
              },
              {
                name: "Blog",
                icon: ExternalLink,
                color: "from-green-500 to-green-600",
                handle: "Blog Resmi",
                url: "https://piparesapanhorisontal.blogspot.com/",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={`bg-gradient-to-r ${social.color} rounded-2xl p-6 text-white text-center transform group-hover:scale-105 transition-transform duration-300 cursor-pointer`}
                >
                  <social.icon className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <p className="text-sm opacity-90">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                E-Catalogue Resmi
              </h3>
              <p className="text-gray-600 mb-6">
                Akses katalog lengkap produk PRH kami di platform resmi
                pemerintah
              </p>
              <a
                href="https://katalog.inaproc.id/rekayasa-nusa-mandiri/pipa-resapan-horisontal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Lihat E-Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Kontak */}
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

        {/* diubah jadi responsif */}
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
              <p className="text-gray-600">rekayasanusamandiri@gmail.com</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Droplets className="h-6 w-6 text-white" />
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
                    href="#galeri"
                    className="hover:text-white transition-colors"
                  >
                    Galeri
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
    </div>
  );
}

export default App;
