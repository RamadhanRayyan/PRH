import { useState, useEffect } from "react";
import { User } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Ir. Edy Susilo, MT",
    title: "Ketua Yayasan Islam Nurus Sunnah",
    message:
      "Bagus.",
  },
  {
    name: "Dr.Eng. Adi Wibowo, S.Si., M.Kom",
    title: "Wali Murid SD Islam Nurus Sunnah",
    message:
      "Keren banget! CV. Rekayasa Nusa Mandiri sangat membantu dalam mempersiapkan generasi yang menguasai lingkungan.",
  },
  {
    name: "Izzul Fairuz Mahendra",
    title: "Designer NUSA Boarding School 2025",
    message: "Hey bung, hari yang cerah!",
  },
  {
    name: "Muhammad Ramadhan Rayyan",
    title: "Programmer NUSA Boarding School 2025",
    message: "Bagus banget.",
  },
  {
    name: "Rayhan Iqbal Habibi",
    title: "Pengajar NUSA Boarding School 2025",
    message: "Jaga kesehatan, jangan lupa bahagia.",
  },
  {
    name: "Dr. Ubay Al-Atsary",
    title: "Profesor Islam Nurus Sunnah",
    message:
      "Akhir dari sesuatu. Adalah awal bagi cerita baru",
  },
];

export const Testimoni = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide tiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const item = testimonials[currentIndex];

  return (
    <section id="testimoni" className="py-10 bg-gray-50 relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Testimoni</h2>
        <p className="text-gray-600 text-xl mb-8">
          Apa kata mereka tentang CV. Rekayasa Nusa Mandiri
        </p>

        {/* Card Testimoni */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-md p-4 sm:p-5 md:p-6 transition-all duration-700 ease-in-out">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center">
              <User className="w-6 h-6" />
            </div>
          </div>
          <p className="text-gray-700 italic text-lg mb-3 leading-relaxed">
            “{item.message}”
          </p>
          <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
          <p className="text-sm text-gray-600">{item.title}</p>
        </div>

        {/* Dots indikator */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-blue-600 scale-110"
                  : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};
