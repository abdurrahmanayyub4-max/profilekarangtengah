import Image from "next/image";
import {
  Leaf,
  Heart,
  Music,
  TrendingUp,
  Target,
  Award,
  ChevronRight,
  Sprout,
  Wheat,
  Egg,
  Milk,
} from "lucide-react";

export default function PotensiDesa() {
  return (
    <div className="bg-gradient-to-b from-white via-amber-50 to-green-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-green-800 py-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <TrendingUp className="text-white" size={20} />
            <span className="text-sm font-semibold text-white">
              Potensi Unggulan
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Potensi Padukuhan Karangtengah
          </h1>
          <div className="h-1.5 w-32 bg-white/80 rounded-full mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
            Kekayaan alam, ekonomi, dan budaya yang menjadi fondasi pembangunan
            berkelanjutan
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Potensi Pertanian - Featured Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <Leaf className="text-green-700" size={20} />
              <span className="text-sm font-semibold text-green-800">
                Sektor Utama
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Potensi Pertanian
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left - Image */}
            <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop"
                alt="Pertanian Padukuhan Karangtengah"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Lahan Produktif
                </h3>
                <p className="text-white/90">
                  Sebagian besar wilayah berupa lahan persawahan, hutan, dan
                  perkebunan
                </p>
              </div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Dari segi potensi wilayah, Padukuhan Karangtengah memiliki{" "}
                  <span className="font-bold text-green-700">
                    sektor pertanian sebagai potensi utama
                  </span>
                  . Sebagian besar wilayahnya berupa lahan persawahan, hutan,
                  dan perkebunan yang menjadi sumber utama mata pencaharian
                  masyarakat.
                </p>
              </div>

              {/* Komoditas Cards */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-xl shadow-md">
                    <Wheat className="text-green-700" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Komoditas Utama
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { name: "Padi", icon: "🌾" },
                    { name: "Jagung", icon: "🌽" },
                    { name: "Kedelai", icon: "🫘" },
                    { name: "Ketela", icon: "🥔" },
                    { name: "Kacang Tanah", icon: "🥜" },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-3"
                    >
                      <span className="text-3xl">{item.icon}</span>
                      <span className="font-semibold text-gray-800">
                        {item.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Potensi Peternakan */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full mb-4">
              <Heart className="text-amber-700" size={20} />
              <span className="text-sm font-semibold text-amber-800">
                Ekonomi Keluarga
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Potensi Peternakan
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-amber-600 to-orange-500 rounded-full mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Left - Content */}
            <div className="lg:order-2 relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=600&fit=crop"
                alt="Peternakan Padukuhan Karangtengah"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Peternakan Berkembang
                </h3>
                <p className="text-white/90">
                  Meningkatkan perekonomian keluarga melalui sektor peternakan
                </p>
              </div>
            </div>

            {/* Right - Cards */}
            <div className="lg:order-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-amber-600">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Selain pertanian,{" "}
                  <span className="font-bold text-amber-700">
                    sektor peternakan juga berkembang cukup baik
                  </span>
                  . Masyarakat setempat banyak yang beternak sapi, kambing,
                  ayam, dan ternak lainnya sebagai upaya meningkatkan
                  perekonomian keluarga.
                </p>
              </div>

              {/* Ternak Cards */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border-2 border-amber-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-2 rounded-xl shadow-md">
                    <Milk className="text-amber-700" size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">
                    Jenis Ternak
                  </h4>
                </div>
                <div className="space-y-3">
                  {[
                    {
                      name: "Sapi",
                      icon: "🐄",
                      desc: "Sumber daging dan susu",
                    },
                    {
                      name: "Kambing",
                      icon: "🐐",
                      desc: "Ternak potong dan perah",
                    },
                    { name: "Ayam", icon: "🐔", desc: "Petelur dan pedaging" },
                    {
                      name: "Ternak Lainnya",
                      icon: "🦆",
                      desc: "Bebek, itik, dan unggas",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
                    >
                      <span className="text-4xl">{item.icon}</span>
                      <div>
                        <p className="font-semibold text-gray-800">
                          {item.name}
                        </p>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Potensi Budaya */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-4">
              <Music className="text-purple-700" size={20} />
              <span className="text-sm font-semibold text-purple-800">
                Warisan Budaya
              </span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Potensi Budaya
            </h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mx-auto"></div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50 p-8 lg:p-12 rounded-3xl shadow-xl border-2 border-purple-200">
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Tidak hanya memiliki potensi ekonomi, Padukuhan Karangtengah
                  juga{" "}
                  <span className="font-bold text-purple-700">
                    kaya akan potensi budaya
                  </span>
                  . Kesenian tradisional masih dilestarikan oleh masyarakat
                  sebagai bagian dari identitas dan warisan budaya lokal.
                </p>
                <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-purple-200">
                  <div className="flex items-center gap-3 mb-4">
                    <Music className="text-purple-700" size={28} />
                    <h4 className="text-xl font-bold text-gray-900">
                      Kesenian Tradisional
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Dilestarikan sebagai identitas dan warisan budaya lokal
                  </p>
                </div>
              </div>

              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&h=600&fit=crop"
                  alt="Budaya Padukuhan Karangtengah"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Kesenian Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Karawitan",
                  icon: "🎵",
                  desc: "Musik gamelan tradisional Jawa",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  name: "Ketoprak",
                  icon: "🎭",
                  desc: "Drama tradisional rakyat Jawa",
                  color: "from-pink-500 to-pink-600",
                },
                {
                  name: "Jathilan",
                  icon: "🐴",
                  desc: "Tarian kuda kepang tradisional",
                  color: "from-rose-500 to-rose-600",
                },
               
              ].map((item, idx) => (
                <div key={idx} className="group">
                  <div
                    className={`bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white`}
                  >
                    <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h5 className="font-bold text-xl mb-2">{item.name}</h5>
                    <p className="text-sm text-white/90">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
