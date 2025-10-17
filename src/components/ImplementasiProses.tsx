import React from "react";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

import img1 from "../assets/gambar prh 1.0.jpg";
import img2 from "../assets/gambar prh 2.0.png";
import img3 from "../assets/gambar prh 3.0.png";
import img4 from "../assets/gambar prh 4.0.png";

// Interface untuk timeline items
interface TimelineItem {
  id: number;
  title: string;
  desc: string;
  image: string;
}

// Data timeline
const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Proses Pembuatan PRH",
    desc: "Tahap awal pembuatan Pipa Resapan Horizontal dengan material berkualitas.",
    image: img1,
  },
  {
    id: 2,
    title: "Persiapan Lahan",
    desc: "Survei dan persiapan lokasi untuk pemasangan sistem PRH.",
    image: img2,
  },
  {
    id: 3,
    title: "Pemasangan Input Saluran",
    desc: "Instalasi saluran input dan talang air untuk sistem PRH.",
    image: img3,
  },
  {
    id: 4,
    title: "Hasil Akhir Pemasangan",
    desc: "Sistem PRH yang telah terpasang dan siap beroperasi.",
    image: img4,
  },
];

const ImplementasiProses: React.FC = () => {

  return (
    <>
      <Navbar />
      <section className="bg-white py-20 px-6 pt-24">
        <div className="max-w-7xl mx-auto mb-12">
          {/* Judul */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900">
              Proses Implementasi PRH
            </h1>
            <p className="text-gray-600 mt-4">
              Proses pemasangan Pipa Resapan Horizontal dari awal hingga versi terbaru.
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
                    alt={item.title}
                    className="rounded-2xl shadow-lg w-full object-cover"
                  />
                </div>

                {/* Titik di garis tengah */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-600 text-white font-bold rounded-full items-center justify-center shadow-md z-10">
                  {item.id}
                </div>

                {/* Teks */}
                <div className="bg-gray-50 rounded-2xl p-6 md:w-5/12 shadow-lg mt-8 md:mt-0">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ImplementasiProses;
