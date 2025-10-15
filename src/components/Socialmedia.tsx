
import {
  Users,
  Instagram,
  Youtube,
  ExternalLink,

} from "lucide-react";

export const Socialmedia = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Media Sosial & Publikasi
            </h2>
            <p className="text-xl text-gray-600">
              Ikuti perkembangan terbaru dan akses e-catalogue kami
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Instagram",
                icon: Instagram,
                color: "from-pink-500 to-purple-600",
                handle: "@piparesapanhorisontal_prh",
                url: "https://www.instagram.com/piparesapanhorisontal_prh/",
              },
              {
                name: "TikTok",
                icon: Users,
                color: "from-black to-gray-800",
                handle: "@piparesapanhorisontal",
                url: "https://www.tiktok.com/@piparesapanhorisontal",
              },
              {
                name: "YouTube",
                icon: Youtube,
                color: "from-red-500 to-red-600",
                handle: "Pipa Resapan Horizontal",
                url: "https://bit.ly/piparesapanhorisontal",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div
                  className={`bg-gradient-to-r ${social.color} rounded-2xl p-6 text-white text-center transform group-hover:scale-105 transition-transform duration-300 cursor-pointer`}
                >
                  <social.icon className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">{social.name}</h3>
                  <p className="text-sm opacity-90">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
  )
}
