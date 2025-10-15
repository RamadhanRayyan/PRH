import {
  Wallet,
  Wrench,
  Home,
  Droplets,
  CloudRain,
  PlusCircle,
} from "lucide-react";

const reasons = [
  {
    icon: Wallet,
    title: "Harga Terjangkau",
    desc: "Harga lebih murah dibanding alternatif lain.",
  },
  {
    icon: Wrench,
    title: "Mudah Dibuat & Dirawat",
    desc: "Pembuatan & perawatan mudah tanpa peralatan khusus.",
  },
  {
    icon: Home,
    title: "Hemat Lahan",
    desc: "Tidak membutuhkan lahan luas untuk pemasangan.",
  },
  {
    icon: Droplets,
    title: "Efektif Walau Air Dangkal",
    desc: "Tetap bekerja efektif walau muka air tanah dangkal.",
  },
  {
    icon: CloudRain,
    title: "Atasi Banjir & Genangan",
    desc: "Mengatasi banjir dan genangan air di area rumah maupun perkotaan.",
  },
  {
    icon: PlusCircle,
    title: "Tambah Ketersediaan Air",
    desc: "Menambah cadangan air tanah untuk kebutuhan jangka panjang.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Mengapa Harus Memilih Kami?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-xl">
          Kami menghadirkan solusi pengelolaan air tanah yang modern melalui{" "}
          <span className="font-bold text-blue-600">
            Pipa Resapan Horizontal
          </span>{" "}
          — sistem inovatif yang efisien, hemat lahan, dan ramah lingkungan.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition"
              >
                <Icon className="text-blue-500 w-10 h-10 mb-3 mx-auto" />
                <h3 className="font-semibold text-lg mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
