import React, { useState } from 'react';

export const publicationsData = [
  {
    year: 2025,
    items: [
      {
        venue: 'arXiv',
        title: 'AI-Assisted Multi-Agent Dialogue System',
        authors: 'Onno P Kampman, Ye Sheng Phang, Stanley Han, et al.',
        link: 'https://arxiv.org/abs/2411.18429',
      },
      {
        venue: 'EMNLP',
        title: 'Academics Can Contribute to Domain-Specialized Language Models',
        authors: 'Mark Dredze, Genta Winata, Prabhanjan Kambadur, et al.',
        link: 'https://example.com/emnlp2025.pdf',
      },
    ],
  },
  {
    year: 2024,
    items: [
      {
        venue: 'arXiv',
        title: 'Re-Evaluating Evaluation for Multilingual Summarization',
        authors: 'Jessica Forde, Ruochen Zhang, Lintang Sutawika, et al.',
        link: 'https://arxiv.org/abs/2410.12345',
      },
      {
        venue: 'WMT',
        title: 'MetaMetrics-MT: Tuning Meta-Metrics via Human Preference Calibration',
        authors: 'David Anugraha, Garry Kuwanto, Lucky Susanto, et al.',
        link: 'https://example.com/wmt2024.pdf',
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
  data: YearGroup[];
}

const Publications: React.FC<PublicationsProps> = ({ data }) => {
  const [collapsed, setCollapsed] = useState<Record<number, boolean>>({});

  const toggleYear = (year: number) => {
    setCollapsed(prev => ({
      ...prev,
      [year]: !prev[year],
    }));
  };

  return (
    <section id="publikasi" className="bg-white text-gray-800 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold mb-6 text-center">Publikasi</h2>

      <div className="space-y-8">
        {data.map(group => {
          const isCollapsed = collapsed[group.year] ?? false;
          return (
            <div key={group.year} className="border-t border-gray-200 pt-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleYear(group.year)}
              >
                <h3 className="text-2xl font-semibold text-gray-700">{group.year}</h3>
                <span className="text-xl text-gray-500">{isCollapsed ? '+' : '–'}</span>
              </div>

              <ul className={`${isCollapsed ? 'hidden' : 'mt-4 space-y-2'}`}>
                {group.items.map(item => (
                  <li key={item.title + item.venue} className="flex flex-col">
                    <span className="font-semibold text-indigo-600">{item.venue}</span>
                    <a
                      href={item.link}
                      className="text-indigo-900 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.title}
                    </a>
                    <span className="text-gray-600 text-sm">{item.authors}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>  
  );
};

export default Publications;
