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
import img7 from "../assets/Screenshot 2025-10-20 112152.png";
import img8 from "../assets/SIMPANG.png"
import img9 from "../assets/Bringin.4 AA.jpeg";
import img10 from "../assets/J.16A.jpeg";
import img11 from "../assets/567.jpeg"

// Interface untuk tiap item timeline
interface TimelineItem {
  id: number;
  kegiatan: string;
  deskripsi: string;
  lokasi: string;
  jumlahPRH: number;
  sumberDana: string;
  tanggal: string; // field baru
  image: string;
}

// Data timeline berdasarkan tabel + gambar
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const timelineData: TimelineItem[] = [
  {
    id: 1,
    kegiatan: "Kajian TKPRD Kota Semarang",
    deskripsi:
      "Kajian teknis penerapan PRH di Kota Semarang untuk mendukung perencanaan tata ruang berbasis konservasi air dan lingkungan berkelanjutan.",
    lokasi: "Kota Semarang",
    jumlahPRH: 10,
    sumberDana: "Dinas Tata Ruang Kota Semarang",
    tanggal: "2021",
    image: images[0],
  },
  {
    id: 2,
    kegiatan:
      "Pengisian Air Tanah dengan PRH untuk Mengurangi Bencana Kekeringan di Kelurahan Jabungan dan Rowosari",
    deskripsi:
      "Instalasi PRH di daerah perbukitan untuk menjaga ketersediaan air tanah dan mengurangi risiko kekeringan saat musim kemarau.",
    lokasi: "Kelurahan Rowosari dan Jabungan Kota Semarang",
    jumlahPRH: 90,
    sumberDana: "Pemerintah Kota Semarang",
    tanggal: "2022",
    image: images[1],
  },
  {
    id: 3,
    kegiatan: "Pembangunan PRH di Kecamatan Gajah Mungkur",
    deskripsi:
      "Penerapan PRH di kawasan padat penduduk guna meningkatkan kemampuan tanah dalam menyerap air hujan dan mencegah genangan.",
    lokasi: "Kecamatan Gajah Mungkur Kota Semarang",
    jumlahPRH: 52,
    sumberDana: "Dinas Pekerjaan Umum Kota Semarang",
    tanggal: "2022",
    image: images[2],
  },
  {
    id: 4,
    kegiatan: "Pembangunan PRH di Kecamatan Ngaliyan",
    deskripsi:
      "Instalasi PRH di Kelurahan Wonosari untuk mendukung manajemen air permukaan dan meningkatkan resapan di area pemukiman.",
    lokasi: "Kelurahan Wonosari Kecamatan Ngaliyan Kota Semarang",
    jumlahPRH: 15,
    sumberDana: "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
    tanggal: "2022",
    image: images[3],
  },
  {
    id: 5,
    kegiatan: "Pemasangan PRH di Kelurahan Sendangmulyo Kecamatan Tembalang",
    deskripsi:
      "Program pembangunan PRH di kawasan Tembalang untuk memperkuat sistem drainase alami dan menekan risiko banjir lokal.",
    lokasi: "Kelurahan Sendangmulyo Kecamatan Tembalang Kota Semarang",
    jumlahPRH: 22,
    sumberDana: "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
    tanggal: "2022",
    image: images[4],
  },
  {
    id: 6,
    kegiatan: "Pemasangan PRH di PONPES Nurus Sunnah untuk Mengatasi Kekurangan Air",
    deskripsi:
      "Inisiatif PRH di pesantren untuk menjamin ketersediaan air bersih secara berkelanjutan melalui peningkatan infiltrasi air hujan.",
    lokasi: "Kelurahan Jabungan Kecamatan Banyumanik Kota Semarang",
    jumlahPRH: 6,
    sumberDana: "Program PKM DRTPM",
    tanggal: "2022",
    image: images[5],
  },
  {
    id: 7,
    kegiatan: "Pemasangan PRH di Kecamatan Tirto Pekalongan",
    deskripsi:
      "Pemasangan PRH untuk mengoptimalkan pengelolaan air tanah di wilayah yang rawan genangan musiman.",
    lokasi: "Kelurahan Tirto Kota Pekalongan",
    jumlahPRH: 2,
    sumberDana: "BAPPEDA Kota Pekalongan",
    tanggal: "2022",
    image: images[6],
  },
  {
    id: 8,
    kegiatan: "Pemasangan PRH di Kawasan Simpang Lima Semarang",
    deskripsi:
      "Instalasi PRH di kawasan strategis kota untuk menambah daya resap air dan mengurangi limpasan permukaan di area publik.",
    lokasi: "Mugasari Kota Semarang",
    jumlahPRH: 52,
    sumberDana: "Program Matching Fund dengan mitra DPU Kota Semarang",
    tanggal: "2023",
    image: images[7],
  },
  {
    id: 9,
    kegiatan: "Pemasangan PRH di daerah Aliran Sungai Bringin Semarang",
    deskripsi:
      "Proyek PRH untuk memperkuat konservasi di daerah aliran sungai guna menekan erosi dan banjir bandang.",
    lokasi: "DAS Sungai Bringin Kota Semarang",
    jumlahPRH: 12,
    sumberDana: "Program Penelitian USM",
    tanggal: "2023",
    image: images[8],
  },
  {
    id: 10,
    kegiatan:
      "PKM Mengatasi Kekurangan Air dengan Pipa Resapan Horizontal dan Peningkatan Kompetensi Manajemen Bisnis Budidaya Ikan Dalam Ember (BUDIKDAMBER) Masyarakat di Jabungan Semarang",
    deskripsi:
      "Proyek pengabdian masyarakat yang menggabungkan teknologi PRH dan inovasi sosial untuk memperkuat ketahanan air dan ekonomi lokal.",
    lokasi: "Kelurahan Jabungan Kecamatan Banyumanik Kota Semarang",
    jumlahPRH: 22,
    sumberDana: "Program PKM DRTPM",
    tanggal: "2024",
    image: images[9],
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
    tanggal: "2025",
    image: images[10],
  },
];


const ProyekBelakang: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <section className="bg-[#0F5E99] py-20 px-6 pt-24">
        <div className="max-w-7xl mx-auto mb-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-yellow-400 hover:text-yellow-600 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-yellow-400">
              Timeline Implementasi Pemasangan PRH
            </h1>
            <p className="text-white text-xl mt-4">
              Ringkasan kegiatan pembangunan dan pemasangan PRH
            </p>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-yellow-400 h-full transform -translate-x-1/2"></div>

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
                <div className="md:w-5/12">
                  <img
                    src={item.image}
                    alt={item.kegiatan}
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 text-white font-bold rounded-full items-center justify-center shadow-md z-10">
                  {item.id}
                </div>

                <div className="bg-gray-50 rounded-2xl p-6 md:w-5/12 shadow-lg mt-8 md:mt-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.kegiatan}
                  </h3>
                  <p className="text-sm text-blue-600 mb-3">
                    {item.tanggal}
                  </p>
                  <p className="text-gray-600 mb-4">{item.deskripsi}</p>
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
