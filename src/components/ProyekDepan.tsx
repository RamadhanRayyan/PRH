import { Link } from "react-router-dom";
import { Building, Award, MapPin, Calendar, ArrowRight } from "lucide-react";
import ImplementasiProses from "./ImplementasiProses";
import img2 from "../assets/Bringin.3 AA.jpeg"
import img3 from "../assets/01. J1 Drptm B.jpeg";
import img4 from "../assets/J.16A.jpeg"

export default function ImplementasiSummary() {
  const projects = [
    {
      image: img4,
      title: "Pemasangan PRH - Gedung Pemerintahan",
      description:
        "Implementasi sistem PRH di gedung pemerintahan dengan total 90 unit terpasang, meningkatkan peresapan air.",
      lokasi: "Kel. Rowosari & Jabungan, Semarang",
      jumlah: 90,
      sumber: "Pemerintah Kota Semarang",
    },
    {
      image: img3,
      title: "Pemasangan PRH - PONPES Nurus Sunnah",
      description:
        "Instalasi PRH di PONPES Nurus Sunnah untuk mendukung manajemen air berkelanjutan dengan sistem pemantauan otomatis.",
      lokasi: "Kelurahan Jabungan, Banyumanik",
      jumlah: 6,
      sumber: "Program PKM DRTPM",
    },
    {
      image: img2,
      title: "Pemasangan PRH - Perumahan Warga",
      description:
        "Penerapan sistem PRH di perumahan warga yang meningkatkan efisiensi penggunaan air serta meminimalisir kebocoran distribusi.",
      lokasi: "Kelurahan Wonosari, Ngaliyan",
      jumlah: 15,
      sumber: "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
    },
  ];

  return (
    <>
    <div className="h-20 bg-[#0F5E99]" id="proyek"></div>
    <section
      id="proyek"
      className="bg-[#0F5E99] pt-10 min-h-screen shadow-md"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-400 mb-3">Pemasangan PRH</h2>
        <p className="text-xl text-white mb-10">
          Track Record Pemasangan PRH di Berbagai Wilayah
        </p>

        {/* Statistik */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <Building className="w-10 h-10 text-blue-600" />,
              title: "Total Proyek",
              value: "11+",
            },
            {
              icon: <Award className="w-10 h-10 text-blue-600" />,
              title: "Unit Terpasang",
              value: "300+",
            },
            {
              icon: <MapPin className="w-10 h-10 text-blue-600" />,
              title: "Wilayah Terlayani",
              value: "11+",
            },
            {
              icon: <Calendar className="w-10 h-10 text-blue-600" />,
              title: "Tahun Pengalaman",
              value: "3+",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-sm border border-blue-100 hover:shadow-md transition"
            >
              <div className="flex flex-col items-center gap-3">
                {item.icon}
                <h3 className="text-3xl font-bold text-gray-900">
                  {item.value}
                </h3>
                <p className="text-gray-600">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Judul */}
        <div className="text-center mb-6">
          <h3 className="text-4xl font-bold text-yellow-400 mb-2">
            Implementasi Pemasangan PRH
          </h3>
          <p className="text-white text-xl">
            Beberapa proyek unggulan yang telah kami selesaikan.
          </p>
        </div>

        {/* Grid 3 Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold text-gray-900">Lokasi:</span>{" "}
                    {project.lokasi}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">
                      Jumlah Unit PRH:
                    </span>{" "}
                    {project.jumlah}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">
                      Sumber Dana:
                    </span>{" "}
                    {project.sumber}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10">
          <Link
            to="/implementasi-detail"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-sm rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Lihat Implementasi Pemasangan PRH Lainnya{" "}
            <ArrowRight className="w-5 h-5 inline-block" />
          </Link>
        </div>
      </div>

      {/* Proses Implementasi */}
      <div className="mt-16">
        <ImplementasiProses />
      </div>
    </section>
    </>
  );
}
