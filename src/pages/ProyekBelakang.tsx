import { MapPin, Building, Calendar, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import img1 from "../assets/gambar prh 1.0.jpg";
import img2 from "../assets/gambar prh 2.0.png";
import img3 from "../assets/gambar prh 3.0.png";
import img4 from "../assets/gambar prh 4.0.png";

const dataPRH = [
  {
    nomer: 1,
    kegiatan:
      "Pengisian Air Tanah dengan PRH untuk Mengurangi Bencana Kekeringan di Kelurahan Jabungan dan Rowosari",
    deskripsi:
      "Program pengisian air tanah melalui instalasi PRH untuk menambah ketersediaan air lokal dan mengurangi risiko kekeringan.",
    lokasi: "Kel. Rowosari & Jabungan, Semarang",
    jumlah: 90,
    sumber: "Pemerintah Kota Semarang",
    gambar: img2,
  },
  {
    nomer: 2,
    kegiatan: "Pembangunan PRH di Kecamatan Gajah Mungkur",
    deskripsi:
      "Pembangunan sistem PRH skala kecamatan untuk konservasi air dan mitigasi limpasan permukaan.",
    lokasi: "Kecamatan Gajah Mungkur, Semarang",
    jumlah: 52,
    sumber: "Dinas Pekerjaan Umum Kota Semarang",
    gambar: img3,
  },
  {
    nomer: 3,
    kegiatan: "Pembangunan PRH di Kecamatan Ngaliyan",
    deskripsi:
      "Penerapan PRH di wilayah pemukiman untuk meningkatkan resapan lokal dan mengurangi banjir genangan.",
    lokasi: "Kelurahan Wonosari / Ngaliyan, Semarang",
    jumlah: 15,
    sumber: "Dinas Perumahan & Kawasan Permukiman Kota Semarang",
    gambar: img4,
  },
  {
    nomer: 4,
    kegiatan: "Pembangunan PRH di Kelurahan Sendangmulyo (Tembalang)",
    deskripsi:
      "Inisiatif pemasangan PRH demi stabilisasi air tanah dan konservasi lingkungan di Tembalang.",
    lokasi: "Kel. Sendangmulyo, Tembalang",
    jumlah: 22,
    sumber: "Dinas Perumahan & Kawasan Permukiman Kota Semarang",
    gambar: img1,
  },
  {
    nomer: 5,
    kegiatan: "Pemasangan PRH di PONPES Nurus Sunnah",
    deskripsi:
      "Solusi PRH untuk menghadapi kekurangan air di lingkungan pondok pesantren.",
    lokasi: "Kel. Jabungan, Semarang",
    jumlah: 6,
    sumber: "Program PKM DRTPM",
    gambar: img2,
  },
];

export default function ImplementasiDetail() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100/30 min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tombol Kembali */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-10 font-medium"
        >
          <ArrowLeft className="w-5 h-5" />
          Kembali
        </button>

        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-16">
          Implementasi PRH
        </h2>

        {/* Timeline Container */}
        <div className="relative flex-col space-y-20 before:absolute before:inset-y-0 before:left-1/2 before:w-1 before:-translate-x-1/2 before:bg-blue-300 hidden md:block" />

        <div className="relative flex flex-col space-y-20">
          {dataPRH.map((item, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Foto */}
              <motion.div
                className="md:w-1/2 w-full"
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={item.gambar}
                    alt={item.kegiatan}
                    className="w-full h-64 sm:h-72 object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white font-bold text-sm px-3 py-1 rounded-full shadow-md">
                    #{item.nomer.toString().padStart(2, "0")}
                  </div>
                </div>
              </motion.div>

              {/* Konten */}
              <div className="md:w-1/2 w-full bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {item.kegiatan}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {item.deskripsi}
                </p>

                <div className="space-y-2 text-sm sm:text-base text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {item.lokasi}
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-500" />
                    {item.sumber}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    Jumlah: {item.jumlah}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
