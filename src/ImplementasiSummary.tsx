import { Link } from "react-router-dom";
import { Building, Award, MapPin, Calendar } from "lucide-react";

export default function ImplementasiSummary() {
  return (
    <section
      id="implementasi"
      className="bg-gradient-to-b from-gray-100 to-gray-100 py-20 min-h-screen"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-900 mb-3">
          Implementasi & Proyek
        </h2>
        <p className="text-gray-600 mb-10">
          Track Record Pemasangan PRH di Berbagai Wilayah
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
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

        <Link
          to="/implementasi-detail"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
        >
          Lihat Detail Implementasi
        </Link>
      </div>
    </section>
  );
}
