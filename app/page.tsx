import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import Image from "next/image";
import {
  MapPin,
  CheckCircle,
  TrendingUp,
  Shield,
  Leaf,
  Target,
  Heart,
  Users,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VideoSection />

      {/* Sambutan Kepala Dukuh - Enhanced Design */}
      <div className="relative bg-gradient-to-br from-green-700 via-emerald-600 to-green-800 py-20 overflow-hidden">
        {/* Decorative Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Left Section - Profile Image Placeholder */}
              <div className="lg:col-span-1 bg-gradient-to-br from-green-100 to-emerald-50 p-8 flex flex-col items-center justify-center">
                <div className="w-40 h-40 bg-gradient-to-br from-green-600 to-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-xl">
                  <Users className="text-white" size={80} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  Sarwanto
                </h3>
                <p className="text-green-700 font-semibold text-center mb-2">
                  Kepala Padukuhan Karangtengah
                </p>
                <div className="w-20 h-1 bg-green-600 rounded-full"></div>
              </div>

              {/* Right Section - Message */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-1 w-12 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"></div>
                  <h4 className="text-xl font-bold text-gray-800">Sambutan</h4>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="italic text-gray-600">
                    "Assalamu'alaikum Warahmatullahi Wabarakatuh,
                  </p>

                  <p>
                    Dengan penuh syukur atas berkah dan rahmat Allah SWT, saya
                    menyambut Anda semua yang telah berkunjung ke portal resmi
                    Padukuhan Karangtengah. Kami berkomitmen untuk terus
                    mengembangkan padukuhan dengan menjaga nilai-nilai
                    kebersamaan dan kearifan lokal.
                  </p>

                  <p>
                    Mari bersama-sama membangun Padukuhan Karangtengah yang
                    lebih maju, sejahtera, dan berkelanjutan.
                  </p>

                  <p className="font-semibold italic text-gray-800">
                    Wassalamu'alaikum Warahmatullahi Wabarakatuh"
                  </p>
                </div>

                {/* Decorative Quote Mark */}
                <div className="mt-6 flex justify-end">
                  <div className="text-6xl text-green-200 font-serif leading-none">
                    "
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profil Desa Content - Enhanced */}
      <div className="bg-gradient-to-b from-white to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-4">
              <Leaf className="text-green-700" size={20} />
              <span className="text-sm font-semibold text-green-800">
                Tentang Kami
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Profil Padukuhan Karangtengah
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Sejarah Desa */}
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-3 rounded-xl">
                  <MapPin className="text-green-700" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-green-800">
                  Deskripsi Padukuhan
                </h3>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Padukuhan Karangtengah merupakan salah satu padukuhan yang
                  terletak di Kalurahan Dadapayu, Kapanewon Semanu, Kabupaten
                  Gunungkidul, Daerah Istimewa Yogyakarta. Secara geografis,
                  padukuhan ini berjarak kurang lebih 16 kilometer dari pusat
                  Kota Wonosari, ibu kota Kabupaten Gunungkidul. Padukuhan
                  Karangtengah memiliki luas wilayah sekitar 125 hektar, dengan
                  sebagian besar wilayahnya berupa lahan persawahan, hutan, dan
                  perkebunan yang menjadi sumber utama mata pencaharian
                  masyarakat.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                    <p className="text-3xl font-bold text-green-700">351</p>
                    <p className="text-sm text-gray-600">Jiwa</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                    <p className="text-3xl font-bold text-green-700">3 RT</p>
                    <p className="text-sm text-gray-600">Rukun Tetangga</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl text-center border border-green-200">
                    <p className="text-3xl font-bold text-green-700">1 RW</p>
                    <p className="text-sm text-gray-600">Rukun Warga</p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Jumlah penduduk Padukuhan Karangtengah tercatat sebanyak 351
                  jiwa yang tersebar dalam 3 RT dan 1 RW. Secara administratif
                  dan geografis, Padukuhan Karangtengah berbatasan dengan
                  beberapa wilayah, yaitu: sebelah utara berbatasan dengan
                  Padukuhan Kauman dan Kalurahan Dadapayu, sebelah barat
                  berbatasan dengan Padukuhan Nogosari Kalurahan Dadapayu,
                  sebelah selatan berbatasan dengan Padukuhan Sembuku dan
                  Kalurahan Dadapayu, serta sebelah timur berbatasan dengan
                  Padukuhan Ploso Kalurahan Petir.
                </p>

                {/* Potensi Highlights */}
                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Leaf className="text-amber-700" size={24} />
                      <h4 className="font-bold text-amber-900">
                        Potensi Pertanian
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Komoditas: Padi, jagung, kedelai, ketela, kacang tanah
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <Heart className="text-blue-700" size={24} />
                      <h4 className="font-bold text-blue-900">
                        Potensi Peternakan
                      </h4>
                    </div>
                    <p className="text-sm text-gray-700">
                      Ternak: Sapi, kambing, ayam, dan ternak lainnya
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Dari segi potensi wilayah, Padukuhan Karangtengah memiliki
                  sektor pertanian sebagai potensi utama. Komoditas yang
                  dibudidayakan masyarakat antara lain padi, jagung, kedelai,
                  ketela, serta kacang tanah. Selain pertanian, sektor
                  peternakan juga berkembang cukup baik. Masyarakat setempat
                  banyak yang beternak sapi, kambing, ayam, dan ternak lainnya
                  sebagai upaya meningkatkan perekonomian keluarga.
                </p>

                <p className="text-gray-700 leading-relaxed mb-4">
                  Tidak hanya memiliki potensi ekonomi, Padukuhan Karangtengah
                  juga kaya akan potensi budaya. Kesenian tradisional seperti
                  karawitan, ketoprak dan jathilan masih dilestarikan
                  oleh masyarakat sebagai bagian dari identitas dan warisan
                  budaya lokal.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Dengan potensi sumber daya alam, ekonomi, dan budaya yang
                  dimiliki, Padukuhan Karangtengah memiliki peluang yang besar
                  untuk terus berkembang secara berkelanjutan, baik dari sektor
                  pertanian, peternakan, maupun pelestarian budaya masyarakat.
                </p>
              </div>
            </div>

            {/* Visi dan Misi - Enhanced */}
            <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-green-200">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white p-3 rounded-xl shadow-md">
                  <Target className="text-green-700" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-green-800">
                  Visi dan Misi
                </h3>
              </div>

              {/* Visi */}
              <div className="bg-white p-6 rounded-2xl shadow-md mb-6 border-l-4 border-green-600">
                <h4 className="font-bold text-xl mb-3 text-gray-900">
                  Visi Pemerintah Desa Dadapayu
                </h4>
                <p className="text-2xl font-bold text-green-700 italic">
                  "MENUJU DADAPAYU MANDIRI DAN SEJAHTERA"
                </p>
              </div>

              {/* Misi */}
              <div className="bg-white p-6 rounded-2xl shadow-md">
                <h4 className="font-bold text-xl mb-5 text-gray-900">Misi</h4>
                <ul className="space-y-4">
                  {[
                    "Pemerintah yang bersih transparan bertanggungjawab",
                    "Mewujudkan kehidupan yang demokratis dengan mengedepankan musyawarah mufakat",
                    "Terpenuhinya akses layanan dasar Pendidikan, Kesehatan, Sarana, dan Prasarana",
                    "Pengembangan ekonomi kerakyatan",
                    "Optimalisasi peran BUMDesa",
                  ].map((misi, idx) => (
                    <li key={idx} className="flex items-start group">
                      <div className="bg-green-100 group-hover:bg-green-200 p-2 rounded-lg mr-4 flex-shrink-0 transition-colors">
                        <CheckCircle className="text-green-700" size={20} />
                      </div>
                      <span className="text-gray-700 pt-1.5">{misi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kontak Content - Enhanced */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <MapPin className="text-blue-700" size={20} />
              <span className="text-sm font-semibold text-blue-800">
                Lokasi
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Lokasi</h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto"></div>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="font-bold text-xl mb-4 text-gray-900">
              Lokasi Padukuhan Karangtengah
            </h3>
            <div className="relative pb-[75%] h-0 overflow-hidden rounded-2xl shadow-xl border border-gray-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7900.802425060408!2d110.70140218389666!3d-8.060493747294016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bb72d31208ac3%3A0xadd4da23a6182953!2sBALAI%20PADUKUHAN%20KARANG%20TENGAH!5e0!3m2!1sid!2sid!4v1772124649896!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 bg-green-50 p-3 rounded-xl">
              <MapPin className="text-green-600" size={18} />
              <p>Tekan pin untuk mendapatkan arah menuju kantor Padukuhan</p>
            </div>

            {/* address bar below map */}
            <div className="mt-6 bg-gray-300 p-4 rounded-lg text-center">
              <p className="text-red-600 font-semibold">
                WPQ4+RP2, karangtengah, RT.1/rw5, Dadapayu, Semanu, Gunungkidul,
                Yogyakarta 55123
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
