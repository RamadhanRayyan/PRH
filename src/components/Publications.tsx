import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import { ArrowLeft } from "lucide-react";

export const publicationsData = [
  {
    year: 2020,
    items: [
      {
        venue: "FDGBI",
        title: "Analisa Kebutuhan Pipa Resapan Horisontal Akibat Perubahan Tataguna Lahan",
        authors: "-",
        link: "-",
      },
    ],
  },
  {
    year: 2019,
    items: [
      {
        venue: "TSUS",
        title: "Kinerja Pipa Resapan Sebagai Pendukung Konservasi Air",
        authors: "Edy Susilo, Diah Setyati Setyati Budiningrum.",
        link: "https://journals.usm.ac.id/index.php/teknika/article/view/1806 ",
      },
    ],
  },
  {
    year: 2018,
    items: [
      {
        venue: "EDP",
        title: "Field performance of shallow recharge well",
        authors: "EDP Sciences",
        link: "https://doi.org/10.1051/matecconf/201819505006",
      },
    ],
  },
];

type Publication = {
  venue: string;
  title: string;
  authors: string;
  link: string;
};

type YearGroup = {
  year: number;
  items: Publication[];
};

interface PublicationsProps {
  data?: YearGroup[];
}

export const Publications: React.FC<PublicationsProps> = ({ data }) => {
  const navigate = useNavigate();
  const localData = data ?? publicationsData;
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});

  const toggleYear = (year: number) => {
    setCollapsed((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <>
      <Navbar />
      <section
        id="publikasi"
        className="min-h-screen bg-white text-gray-800 px-6 py-16 pt-28"
      >
        <div className="max-w-4xl mx-auto">
          {/* Tombol Kembali */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-8 font-medium"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali
          </button>

          <h2 className="text-4xl font-bold mb-10 text-center text-gray-900">
            Publikasi
          </h2>

          <div className="space-y-12">
            {localData.map((group) => {
              const isCollapsed = collapsed[group.year] ?? false;
              return (
                <div key={group.year}>
                  <div
                    className="flex justify-between items-center cursor-pointer border-b border-gray-300 pb-2"
                    onClick={() => toggleYear(group.year)}
                  >
                    <h3 className="text-2xl font-semibold text-blue-600">
                      {group.year}
                    </h3>
                    <span className="text-xl text-gray-500">
                      {isCollapsed ? "+" : "–"}
                    </span>
                  </div>

                  <div
                    className={`transition-all duration-300 ${
                      isCollapsed ? "hidden" : "mt-6 space-y-6"
                    }`}
                  >
                    {group.items.map((item, index) => (
                      <div
                        key={item.title + index}
                        className="flex gap-4 items-start bg-gray-100 p-5 rounded-xl hover:bg-blue-50 transition-colors shadow-sm"
                      >
                        <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                          {item.venue}
                        </span>

                        <div className="flex-1">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-lg font-semibold text-blue-700 hover:underline"
                          >
                            {item.title}
                          </a>
                          <p className="text-gray-600 text-sm mt-1">
                            {item.authors}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Publications;
