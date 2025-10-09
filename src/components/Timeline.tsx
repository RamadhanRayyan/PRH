import { useRef, useEffect, useState } from "react";
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
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const touchCheck = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touchCheck);
  }, []);

  const scrollByCard = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.querySelector(".timeline-card");
    if (!card) return;

    const cardWidth = (card as HTMLElement).offsetWidth + 16;
    container.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-blue-100 to-white py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <h2 className="text-2xl sm:text-4xl font-bold text-center mb-10 sm:mb-12 text-gray-800">
          Timeline Kegiatan PRH Kota Semarang
        </h2>

        {/* Fade shadow kiri-kanan */}
        <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-blue-100 via-blue-100/70 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-blue-100 via-blue-100/70 to-transparent pointer-events-none z-10" />

        {/* Tombol panah (non-touch only) */}
        {!isTouch && (
          <>
            <button
              onClick={() => scrollByCard("left")}
              className="absolute left-3 sm:left-4 md:left-6 lg:left-10 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-600 active:scale-95 z-20 transition-all"
            >
              <ChevronLeft size={18} className="sm:size-6" />
            </button>
            <button
              onClick={() => scrollByCard("right")}
              className="absolute right-3 sm:right-4 md:right-6 lg:right-10 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-blue-600 active:scale-95 z-20 transition-all"
            >
              <ChevronRight size={18} className="sm:size-6" />
            </button>
          </>
        )}

        {/* Timeline scrollable */}
        <div
          ref={scrollRef}
          className={`flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth px-2 sm:px-4 snap-x snap-mandatory ${
            isTouch ? "scrollbar-thin scrollbar-thumb-blue-400/40" : "scrollbar-hide"
          }`}
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="timeline-card min-w-[230px] sm:min-w-[280px] lg:min-w-[300px] bg-white rounded-2xl shadow-md p-4 sm:p-6 border-t-4 border-blue-500 flex-shrink-0 snap-center hover:shadow-xl transition-all duration-300"
            >
              <p className="text-blue-500 font-semibold mb-1 text-sm sm:text-base">
                {item.date}
              </p>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-gray-700 text-xs sm:text-sm mb-1">
                <span className="font-medium">Lokasi:</span> {item.location}
              </p>
              <p className="text-gray-700 text-xs sm:text-sm mb-1">
                <span className="font-medium">Jumlah PRH:</span> {item.jumlah}
              </p>
              <p className="text-gray-700 text-xs sm:text-sm">
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
