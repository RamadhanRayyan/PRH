import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ir. Edy Susilo, MT",
    title: "Ketua Yayasan Islam Nurus Sunnah",
    message:
      "Pipa Resapan Horizontal (PRH) ini sangat membantu dalam konservasi air tanah. Air hujan kini bisa terserap kembali, bukan terbuang percuma.",
    color: "bg-blue-500",
    initial: "E",
  },
  {
    name: "Dr.Eng. Adi Wibowo, S.Si., M.Kom",
    title: "Dosen Teknik Lingkungan",
    message:
      "Solusi yang cerdas untuk mengurangi genangan air di perkotaan. PRH bukan hanya efisien, tapi juga ramah lingkungan.",
    color: "bg-red-500",
    initial: "A",
  },
  {
    name: "Budi Santoso",
    title: "Pengusaha Properti",
    message:
      "Saya sudah menggunakan PRH di beberapa proyek. Hasilnya luar biasa! Area banjir kini menjadi lebih kering dan stabil.",
    color: "bg-green-500",
    initial: "B",
  },
  {
    name: "Kevin Prakoso",
    title: "Mahasiswa Teknik Sipil",
    message:
      "PRH membuat saya sadar pentingnya rekayasa air. Sistemnya sederhana, tapi efeknya besar bagi lingkungan dan masyarakat.",
    color: "bg-yellow-500",
    initial: "K",
  },
  {
    name: "Izzul Fairuz Mahendra",
    title: "Desainer NUSA Boarding School",
    message:
      "Pipa Resapan Horizontal ini adalah inovasi lokal yang keren. Tidak hanya bermanfaat, tapi juga memperindah tata ruang kota.",
    color: "bg-purple-500",
    initial: "I",
  },
];

export const Testimoni = () => {
  // kasih tipe biar VS Code paham itu div
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // fix tipe direction dan scrollRef
  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 350;
    const leftValue = direction === "left" ? -scrollAmount : scrollAmount;

    container.scrollBy({
      left: leftValue,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = scrollRef.current;
    if (!container) return;

    const isAtStart = container.scrollLeft <= 0;
    const isAtEnd =
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 5;

    setShowLeft(!isAtStart);
    setShowRight(!isAtEnd);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    handleScroll(); // cek posisi awal
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="testimoni" className="py-16 bg-gray-50 relative">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-4">
          Testimoni
        </h2>
        <p className="text-gray-600 text-lg text-center mb-10">
          Pendapat mereka tentang PRH (Pipa Resapan Horizontal) untuk konservasi
          air dan penanggulangan banjir
        </p>

        {/* Tombol panah kiri */}
        {showLeft && (
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
        )}

        {/* Wrapper scroll */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 md:px-0"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[280px] md:min-w-[320px] bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center snap-start border border-gray-100"
            >
              <div
                className={`w-14 h-14 ${item.color} text-white rounded-full flex items-center justify-center text-xl font-bold mb-4`}
              >
                {item.initial}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{item.title}</p>
              <p className="text-gray-700 italic leading-relaxed">
                “{item.message}”
              </p>
            </div>
          ))}
        </div>

        {/* Tombol panah kanan */}
        {showRight && (
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-lg p-3 rounded-full hover:bg-gray-100 transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        )}
      </div>
    </section>
  );
};
