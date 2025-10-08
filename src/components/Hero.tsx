import hero from '../assets/hero.png'

export const Hero = () => {
  return (
    <section
        id="beranda"
        className="relative h-screen bg-cover bg-center flex items-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        {/* overlay */}
        <div className="absolute inset-0 bg-black/25"></div>

        {/* content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:pl-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left text */}
            <div>
              <h1
                className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
              >
                Solusi Inovatif untuk
                <span className="text-blue-500"> Konservasi Air Tanah</span> dan
                <span className="text-teal-500"> Penanggulangan Banjir</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed">
                CV. Rekayasa Nusa Mandiri mempersembahkan Pipa Resapan
                Horizontal (PRH) sebagai teknologi tepat guna untuk masa depan
                lingkungan berkelanjutan.
              </p>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                {/* tombol CTA */}
              </div>
            </div>

            {/* Right card */}
          </div>
        </div>
      </section>
  )
}
