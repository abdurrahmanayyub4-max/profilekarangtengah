import { Building2, Zap, Droplets, Wifi, BookOpen, Heart, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { FasilitasItem } from "@/types";

export default function Fasilitas() {
  const fasilitasData: FasilitasItem[] = [
    {
      kategori: "Keagamaan",
      namaFasilitas: "Masjid Mujahidin",
      icon: BookOpen,
      image: "/fasilitas/masjid-mujahidin.jpg",
      mapLink:
        "https://www.google.com/maps/place/Masjid+Mujahidin/@-8.0614297,110.7058922,18.75z/data=!4m6!3m5!1s0x2e7bb62eaaff9771:0xbefc1ffc2b91063e!8m2!3d-8.0617874!4d110.7061054!16s%2Fg%2F11h9rl5ty1?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Keagamaan",
      namaFasilitas: "Mushola An - Nur",
      icon: BookOpen,
      image: "/fasilitas/mushola-an-nur.jpg",
      mapLink: "https://maps.app.goo.gl/cXY26N1Roxcef3Q96",
    },
    {
      kategori: "Pendidikan",
      namaFasilitas: "SMP Muhammadiyah Semanu",
      icon: BookOpen,
      image: "/fasilitas/smp-muhammadiyah.jpg",
      mapLink:
        "https://www.google.com/maps/place/SMP+Muhammadiyah+Semanu/@-8.0591704,110.7036133,16.25z/data=!4m15!1m8!3m7!1s0x2e7bb631887cab19:0x5027a76e3569100!2sDadapayu,+Kec.+Semanu,+Kabupaten+Gunungkidul,+Daerah+Istimewa+Yogyakarta!3b1!8m2!3d-8.0522445!4d110.694367!16s%2Fg%2F121hfhw1!3m5!1s0x2e7bb62f1e074a77:0x4e81ad711aa4c12e!8m2!3d-8.0594069!4d110.7045001!16s%2Fg%2F1hm234g2g?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Umum & Administrasi",
      namaFasilitas: "Balai Padukuhan Karangtengah",
      icon: Building2,
      image: "/fasilitas/balai-padukuhan.jpg",
      mapLink:
        "https://www.google.com/maps/place/BALAI+PADUKUHAN+KARANG+TENGAH/@-8.0591704,110.7036133,16.25z/data=!4m15!1m8!3m7!1s0x2e7bb631887cab19:0x5027a76e3569100!2sDadapayu,+Kec.+Semanu,+Kabupaten+Gunungkidul,+Daerah+Istimewa+Yogyakarta!3b1!8m2!3d-8.0522445!4d110.694367!16s%2Fg%2F121hfhw1!3m5!1s0x2e7bb72d31208ac3:0xadd4da23a6182953!8m2!3d-8.0604974!4d110.7067662!16s%2Fg%2F11scp6s5lj?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Perdagangan & Usaha",
      namaFasilitas: "Lombok Ijo Puli Tempe Saelan",
      icon: Users,
      image: "/fasilitas/Puli.jpg",
      mapLink:
        "https://www.google.com/maps/place/Lombok+Ijo+Puli+Tempe+Saelan/@-8.0621657,110.7040228,17.92z/data=!4m6!3m5!1s0x2e7bb62ea0053317:0x6af7c79a402fcacd!8m2!3d-8.0620042!4d110.7048255!16s%2Fg%2F11c619z5x9?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Telekomunikasi & Digital",
      namaFasilitas: "BECG Music",
      icon: Wifi,
      image: "/fasilitas/becg-music.jpg",
      mapLink:
        "https://www.google.com/maps/place/Becg+Music/@-8.060805,110.7058276,20z/data=!4m6!3m5!1s0x2e7a595739a98dc5:0xc8a4c055bcefffd6!8m2!3d-8.0608794!4d110.706091!16s%2Fg%2F11qqsm2crh?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Telekomunikasi & Digital",
      namaFasilitas: "Aisha Fotocopy New",
      icon: Wifi,
      image: "/fasilitas/aisha.jpg",
      mapLink:
        "https://www.google.com/maps/place/Aisha+Fotocopy+New/@-8.0617678,110.7049845,17.75z/data=!4m6!3m5!1s0x2e7bb7bd78a21f25:0x54d6e04c1d28604f!8m2!3d-8.0620189!4d110.7066151!16s%2Fg%2F11xrfxy3vt?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Perdagangan & Usaha",
      namaFasilitas: "Nisia Store",
      icon: Building2,
      image: "/fasilitas/Nisia.jpg",
      mapLink:
        "https://www.google.com/maps/place/NISIA+STORE/@-8.0601449,110.7038325,18.5z/data=!4m6!3m5!1s0x2e7bb76b426b039b:0xbe962889e69305d8!8m2!3d-8.0604339!4d110.7048521!16s%2Fg%2F11h045xy04?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      kategori: "Industri & Kerajinan",
      namaFasilitas: "Industri Batu Nisan",
      icon: Building2,
      image: "/fasilitas/industri-batu-nisan.jpg",
      mapLink:
        "https://www.google.com/maps/place/Industri+batu+nisan/@-8.0585163,110.7038077,16.25z/data=!4m6!3m5!1s0x2e7bb738395c8ef9:0x1f105342e453a816!8m2!3d-8.0585307!4d110.7077831!16s%2Fg%2F11pz51gk3w?entry=ttu&g_ep=EgoyMDI2MDIyNC4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-green-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
            <Building2 className="text-blue-700" size={20} />
            <span className="text-sm font-semibold text-blue-800">
              Fasilitas Desa
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Daftar Fasilitas Padukuhan Karangtengah
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Fasilitas publik yang tersedia di Padukuhan Karangtengah untuk mendukung kehidupan berkualitas masyarakat.
          </p>
        </div>

        {/* Fasilitas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fasilitasData.map((fasilitas, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-300 group"
              >
                {/* Foto */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <Image
                    src={fasilitas.image}
                    alt={fasilitas.namaFasilitas}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Kategori dan Nama */}
                <div className="p-4">
                  <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                    {fasilitas.kategori}
                  </p>
                  <p className="font-semibold text-gray-900 text-sm">
                    {fasilitas.namaFasilitas}
                  </p>
                  <div className="mt-3">
                    <Link
                      href={fasilitas.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded-md"
                    >
                      Lihat di Peta
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
