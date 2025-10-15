import { motion } from "framer-motion";

const reasons = [
  {
    icon: "💰",
    title: "Harga Terjangkau",
    desc: "Harga lebih murah dibanding alternatif lain.",
  },
  {
    icon: "🛠️",
    title: "Mudah Dibuat & Dirawat",
    desc: "Pembuatan & perawatan mudah tanpa peralatan khusus.",
  },
  {
    icon: "🏡",
    title: "Hemat Lahan",
    desc: "Tidak membutuhkan lahan luas untuk pemasangan.",
  },
  {
    icon: "💧",
    title: "Efektif Walau Air Dangkal",
    desc: "Tetap bekerja efektif walau muka air tanah dangkal.",
  },

  // Manfaat
  {
    icon: "🌊",
    title: "Atasi Banjir & Genangan",
    desc: "Mengatasi banjir dan genangan air di area rumah maupun perkotaan.",
  },
  {
    icon: "💦",
    title: "Tambah Ketersediaan Air",
    desc: "Menambah cadangan air tanah untuk kebutuhan jangka panjang.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50" id="why-choose-us">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Mengapa Harus Memilih Kami?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 max-w-2xl mx-auto mb-10 text-xl"
        >
          Kami menghadirkan solusi pengelolaan air tanah yang modern melalui{" "}
          <span className="font-bold text-blue-600">
            Pipa Resapan Horizontal
          </span>{" "}
          — sistem inovatif yang efisien, hemat lahan, dan ramah lingkungan.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
            >
              <div className="text-blue-500 text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
