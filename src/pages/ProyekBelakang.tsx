import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/03. Kec. Tembalang B.jpeg";
import img2 from "../assets/J.17B.jpeg";
import img3 from "../assets/G.8 AA.jpeg";
import img4 from "../assets/Bringin.1 AA.jpeg";
import img5 from "../assets/13. Kel. SDGM AA.jpeg";
import img6 from "../assets/01. J1 Drptm B.jpeg";
import img7 from "../assets/J.17B.jpeg";
import img9 from "../assets/Bringin.4 AA.jpeg"
import img10 from "../assets/J.16A.jpeg"

// Interface untuk tiap item timeline
interface TimelineItem {
  id: number;
  kegiatan: string;
  deskripsi: string; // <–– field baru ditambah di sini
  lokasi: string;
  jumlahPRH: number;
  sumberDana: string;
  image: string;
}

// Data timeline berdasarkan tabel + gambar
const images = [img1, img2, img3, img4, img5, img6, img7, img9, img10];

const timelineData: TimelineItem[] = [
  {
    id: 1,
    kegiatan: "Kajian TKPRD Kota Semarang",
    deskripsi:
      "Kajian teknis penerapan PRH di Kota Semarang untuk mendukung perencanaan tata ruang berbasis konservasi air dan lingkungan berkelanjutan.",
    lokasi: "Kota Semarang",
    jumlahPRH: 10,
    sumberDana: "Dinas Tata Ruang Kota Semarang",
    image: images[0],
  },
  {
    id: 2,
    kegiatan:
      "Pengisian Air Tanah dengan PRH untuk Mengurangi Bencana Kekeringan di Kelurahan Jabungan dan Rowosari",
    deskripsi:
      "Instalasi PRH di daerah perbukitan untuk menjaga ketersediaan air tanah dan mengurangi risiko kekeringan saat musim kemarau.",
    lokasi: "Kelurahan Rowosari dan Jabungan Semarang",
    jumlahPRH: 90,
    sumberDana: "Pemerintah Kota Semarang",
    image: images[1],
  },
  {
    id: 3,
    kegiatan: "Pembangunan PRH di Kecamatan Gajah Mungkur",
    deskripsi:
      "Penerapan PRH di kawasan padat penduduk guna meningkatkan kemampuan tanah dalam menyerap air hujan dan mencegah genangan.",
    lokasi: "Kecamatan Gajah Mungkur Semarang",
    jumlahPRH: 52,
    sumberDana: "Dinas Pekerjaan Umum Kota Semarang",
    image: images[2],
  },
  {
    id: 4,
    kegiatan: "Pembangunan PRH di Kecamatan Ngaliyan",
    deskripsi:
      "Instalasi PRH di Kelurahan Wonosari untuk mendukung manajemen air permukaan dan meningkatkan resapan di area pemukiman.",
    lokasi: "Kelurahan Wonosari",
    jumlahPRH: 15,
    sumberDana: "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
    image: images[3],
  },
  {
    id: 5,
    kegiatan: "Pembangunan PRH di Kelurahan Sendangmulyo Kecamatan Tembalang",
    deskripsi:
      "Program pembangunan PRH di kawasan Tembalang untuk memperkuat sistem drainase alami dan menekan risiko banjir lokal.",
    lokasi: "Kelurahan Sendangmulyo Semarang",
    jumlahPRH: 22,
    sumberDana:
      "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
    image: images[4],
  },
  {
    id: 6,
    kegiatan: "Pemasangan PRH di PONPES Nurus Sunnah untuk Mengatasi Kekurangan Air",
    deskripsi:
      "Inisiatif PRH di pesantren untuk menjamin ketersediaan air bersih secara berkelanjutan melalui peningkatan infiltrasi air hujan.",
    lokasi: "Kelurahan Jabungan Semarang",
    jumlahPRH: 6,
    sumberDana: "Program PKM DRTPM",
    image: images[5],
  },
  {
    id: 7,
    kegiatan: "Pemasangan PRH di Kecamatan Tirto Pekalongan",
    deskripsi:
      "Pemasangan PRH untuk mengoptimalkan pengelolaan air tanah di wilayah yang rawan genangan musiman.",
    lokasi: "Kecamatan Tirto Pekalongan",
    jumlahPRH: 2,
    sumberDana: "BAPPEDA Kota Pekalongan",
    image: images[6],
  },
  {
    id: 8,
    kegiatan: "Pemasangan PRH di Kawasan Simpang Lima Semarang",
    deskripsi:
      "Instalasi PRH di kawasan strategis kota untuk menambah daya resap air dan mengurangi limpasan permukaan di area publik.",
    lokasi: "Kelurahan Mugasari Semarang",
    jumlahPRH: 52,
    sumberDana: "Program Matching Fund 2023 dengan mitra DPU",
    image: images[3],
  },
  {
    id: 9,
    kegiatan: "Pemasangan PRH di daerah Aliran Sungai Bringin Semarang",
    deskripsi:
      "Proyek PRH untuk memperkuat konservasi di daerah aliran sungai guna menekan erosi dan banjir bandang.",
    lokasi: "Kecamatan Ngaliyan Semarang",
    jumlahPRH: 12,
    sumberDana: "Program Penelitian USM 2023",
    image: images[7],
  },
  {
    id: 10,
    kegiatan: "Pemasangan PRH di Kelurahan Jabungan",
    deskripsi:
      "Lanjutan pemasangan PRH untuk memperluas area resapan di kawasan rawan kekeringan dan peningkatan cadangan air tanah.",
    lokasi: "Kelurahan Jabungan",
    jumlahPRH: 22,
    sumberDana: "Program PKM DRTPM 2024",
    image: images[8],
  },
  {
    id: 11,
    kegiatan:
      "Peran Serta Universitas Semarang dalam Penerapan Zero Delta Q dan Pengurangan Bencana",
    deskripsi:
      "Implementasi konsep Zero Delta Q melalui PRH di lingkungan kampus sebagai bagian dari riset dan pengabdian masyarakat.",
    lokasi: "Universitas Semarang",
    jumlahPRH: 57,
    sumberDana: "Universitas Semarang",
    image: images[2],
  },
];

const ProyekBelakang: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6 pt-24">
        <div className="max-w-7xl mx-auto mb-12">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          {/* Judul */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">
              Timeline Implementasi PRH
            </h1>
            <p className="text-gray-600 mt-4">
              Ringkasan kegiatan pembangunan dan pemasangan PRH dari awal hingga akhir
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Garis Tengah Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-gray-300 h-full transform -translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-20">
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col md:flex-row items-center md:justify-between relative ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Gambar */}
                <div className="md:w-5/12">
                  <img
                    src={item.image}
                    alt={item.kegiatan}
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                </div>

                {/* Titik di garis tengah */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 text-white font-bold rounded-full items-center justify-center shadow-md z-10">
                  {item.id}
                </div>

                                {/* Konten */}
                <div className="bg-gray-50 rounded-2xl p-6 md:w-5/12 shadow-lg mt-8 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.kegiatan}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.deskripsi}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Lokasi:</strong> {item.lokasi}
                  </p>
                  <p className="text-gray-600 mb-1">
                    <strong>Jumlah PRH:</strong> {item.jumlahPRH}
                  </p>
                  <p className="text-gray-600">
                    <strong>Sumber Dana:</strong> {item.sumberDana}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProyekBelakang;
