import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const timelineData = [
  {
    date: "Kegiatan 1",
    title: "Kajian TKPRD Kota Semarang",
    location: "Kota Semarang",
    jumlah: "10 PRH",
    sumber: "Dinas Tata Ruang Kota Semarang",
  },
  {
    date: "Kegiatan 2",
    title: "Pemasangan Air Tanah dengan PRH untuk Mengurangi Kekeringan",
    location: "Kelurahan Rowosari dan Jabungan, Semarang",
    jumlah: "90 PRH",
    sumber: "Pemerintah Kota Semarang",
  },
  {
    date: "Kegiatan 3",
    title: "Pembangunan PRH di Kecamatan Gajah Mungkur",
    location: "Kecamatan Gajah Mungkur, Semarang",
    jumlah: "52 PRH",
    sumber: "Dinas Pekerjaan Umum Kota Semarang",
  },
  {
    date: "Kegiatan 4",
    title: "Pembangunan PRH di Kecamatan Ngaliyan",
    location: "Kelurahan Wonosari, Semarang",
    jumlah: "15 PRH",
    sumber: "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
  },
  {
    date: "Kegiatan 5",
    title: "Pembangunan PRH di Kelurahan Sendangmulyo Kecamatan Tembalang",
    location: "Kelurahan Sendangmulyo, Semarang",
    jumlah: "22 PRH",
    sumber: "Dinas Perumahan dan Kawasan Pemukiman Kota Semarang",
  },
  {
    date: "Kegiatan 6",
    title: "Pemasangan PRH di PONPES Nurus Sunnah untuk Mengatasi Kekurangan Air",
    location: "Kelurahan Jabungan, Semarang",
    jumlah: "6 PRH",
    sumber: "Program PKM DRTPM",
  },
  {
    date: "Kegiatan 7",
    title: "Pemasangan PRH di Kecamatan Tirto Pekalongan",
    location: "Kecamatan Tirto, Pekalongan",
    jumlah: "2 PRH",
    sumber: "BAPPEDA Kota Pekalongan",
  },
  {
    date: "Kegiatan 8",
    title: "Pemasangan PRH di Kawasan Simpang Lima Semarang",
    location: "Kelurahan Simpang Lima, Semarang",
    jumlah: "57 PRH",
    sumber: "Program Matching Fund 2023 Dinas PUPR",
  },
  {
    date: "Kegiatan 9",
    title: "Pemasangan PRH di daerah Aliran Sungai Bringin Semarang",
    location: "Kecamatan Ngaliyan, Semarang",
    jumlah: "12 PRH",
    sumber: "Program Penelitian USM 2023",
  },
  {
    date: "Kegiatan 10",
    title: "Pemasangan PRH di Kelurahan Jabungan",
    location: "Kelurahan Jabungan, Semarang",
    jumlah: "10 PRH",
    sumber: "Program PKM DRTPM 2024",
  },
  {
    date: "Kegiatan 11",
    title: "Peran Serta Universitas Semarang dalam Pengelolaan Zero Delta Q",
    location: "Universitas Semarang",
    jumlah: "57 PRH",
    sumber: "Universitas Semarang",
  },
];

const TimelinePRH = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Timeline Kegiatan PRH Kota Semarang
        </h2>

        {/* Tombol navigasi */}
        <button
          onClick={scrollLeft}
          className="hidden sm:flex absolute left-4 sm:left-10 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 z-10"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={scrollRight}
          className="hidden sm:flex absolute right-4 sm:right-10 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 z-10"
        >
          <ChevronRight size={22} />
        </button>

        {/* Timeline horizontal */}
        <div
          ref={scrollRef}
          className="flex gap-6 sm:gap-8 overflow-x-hidden scroll-smooth"
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="min-w-[85%] sm:min-w-[300px] md:min-w-[350px] lg:min-w-[400px] bg-white rounded-2xl shadow-md p-6 border-t-4 border-blue-500 flex-shrink-0"
            >
              <p className="text-blue-500 font-semibold mb-1">{item.date}</p>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-medium">Lokasi:</span> {item.location}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-medium">Jumlah PRH:</span> {item.jumlah}
              </p>
              <p className="text-gray-700 text-sm sm:text-base">
                <span className="font-medium">Sumber Dana:</span> {item.sumber}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelinePRH;
