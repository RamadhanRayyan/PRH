import { MapPin, Building, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

import img1 from "../assets/gambar prh 1.0.jpg";
import img2 from "../assets/gambar prh 2.0.png";
import img3 from "../assets/gambar prh 3.0.png";
import img4 from "../assets/gambar prh 4.0.png";

interface PRHItem {
  kegiatan: string;
  deskripsi: string;
  lokasi: string;
  jumlah: number;
  sumber: string;
  gambar: string;
}

const dataPRH: PRHItem[] = [
  {
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
    kegiatan: "Pembangunan PRH di Kecamatan Gajah Mungkur",
    deskripsi:
      "Pembangunan sistem PRH skala kecamatan untuk konservasi air dan mitigasi limpasan permukaan.",
    lokasi: "Kecamatan Gajah Mungkur, Semarang",
    jumlah: 52,
    sumber: "Dinas Pekerjaan Umum Kota Semarang",
    gambar: img3,
  },
  {
    kegiatan: "Pembangunan PRH di Kecamatan Ngaliyan",
    deskripsi:
      "Penerapan PRH di wilayah pemukiman untuk meningkatkan resapan lokal dan mengurangi banjir genangan.",
    lokasi: "Kelurahan Wonosari / Ngaliyan, Semarang",
    jumlah: 15,
    sumber: "Dinas Perumahan & Kawasan Permukiman Kota Semarang",
    gambar: img4,
  },
  {
    kegiatan: "Pembangunan PRH di Kelurahan Sendangmulyo (Tembalang)",
    deskripsi:
      "Inisiatif pemasangan PRH demi stabilisasi air tanah dan konservasi lingkungan di Tembalang.",
    lokasi: "Kel. Sendangmulyo, Tembalang",
    jumlah: 22,
    sumber: "Dinas Perumahan & Kawasan Permukiman Kota Semarang",
    gambar: img1,
  },
  {
    kegiatan: "Pemasangan PRH di PONPES Nurus Sunnah",
    deskripsi:
      "Solusi PRH untuk menghadapi kekurangan air di lingkungan pondok pesantren.",
    lokasi: "Kel. Jabungan, Semarang",
    jumlah: 6,
    sumber: "Program PKM DRTPM",
    gambar: img2,
  },
  {
    kegiatan: "Pemasangan PRH di Kecamatan Tirto (Pekalongan)",
    deskripsi:
      "Kerja sama pemerintah daerah setempat untuk mendukung resapan air permukaan.",
    lokasi: "Kecamatan Tirto, Pekalongan",
    jumlah: 2,
    sumber: "BAPPEDA Kota Pekalongan",
    gambar: img3,
  },
  {
    kegiatan: "Pemasangan PRH di Kawasan Simpang Lima",
    deskripsi:
      "Implementasi PRH di area publik untuk pengelolaan air permukaan skala kota.",
    lokasi: "Kel. Mugassari, Semarang",
    jumlah: 52,
    sumber: "Program Matching Fund 2023",
    gambar: img4,
  },
  {
    kegiatan: "Pemasangan PRH di Daerah Aliran Sungai Bringin",
    deskripsi:
      "Upaya konservasi dan mitigasi banjir dengan PRH pada DAS lokal.",
    lokasi: "Kec. Ngaliyan, Semarang",
    jumlah: 12,
    sumber: "Program Penelitian USM 2023",
    gambar: img1,
  },
  {
    kegiatan: "Pemasangan PRH di Kelurahan Jabungan",
    deskripsi:
      "Pemasangan tambahan PRH untuk memperkuat infrastruktur resapan di Jabungan.",
    lokasi: "Kel. Jabungan, Semarang",
    jumlah: 22,
    sumber: "Program PKM DRTPM 2024",
    gambar: img2,
  },
  {
    kegiatan:
      "Peran Serta Universitas Semarang dalam Penerapan Zero Delta Q dan Pemasangan PRH",
    deskripsi:
      "Kolaborasi akademik untuk evaluasi efektivitas PRH dan pengembangan metode konservasi air.",
    lokasi: "Universitas Semarang",
    jumlah: 57,
    sumber: "Universitas Semarang",
    gambar: img3,
  },
];

export default function ImplementasiDetail() {
  return (
    <div className="bg-gradient-to-br from-blue-500/40 via-blue-100/60 to-white min-h-screen">
      <Navbar />

      <section className="pt-28 pb-20 max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Proyek PRH - Detail
          </h2>
        </div>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-12">
          {dataPRH.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row gap-6 md:items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="absolute -left-[29px] top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900">
                  {item.kegiatan}
                </h3>
                <p className="text-gray-700 mt-2 leading-relaxed">
                  {item.deskripsi}
                </p>
                <div className="mt-3 flex flex-col gap-1 text-sm text-gray-600">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-blue-500" />
                    {item.lokasi}
                  </span>
                  <span className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-500" />
                    {item.sumber}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    Jumlah: {item.jumlah}
                  </span>
                </div>
              </div>
              <motion.div
                className="md:w-64 flex-shrink-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <img
                  src={item.gambar}
                  alt={item.kegiatan}
                  className="w-full h-44 object-cover rounded-2xl shadow-md hover:scale-105 transition-transform"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
