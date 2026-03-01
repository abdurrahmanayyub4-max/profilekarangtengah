import { Users, Target, History } from 'lucide-react'
import type { PerangkatDesa } from '@/types'

export default function Pemerintahan() {
  const perangkat: PerangkatDesa[] = [
    { nama: "Sarwanto", jabatan: "KEPALA PADUKUHAN" },
    { nama: "Giyanto", jabatan: "KETUA RW" },
    { nama: "Dwi Handung P", jabatan: "KARANG TARUNA SUB UNIT" },
    { nama: "Suyono", jabatan: "LPMP" },
    { nama: "Surahmad", jabatan: "LPMP" },
    { nama: "Arisno", jabatan: "LPMP" },
    { nama: "Arisno", jabatan: "KETUA RT 1" },
    { nama: "Syahirto", jabatan: "KETUA RT 2" },
    { nama: "Budi Utomo", jabatan: "KETUA RT 3" },
    { nama: "Wajib P", jabatan: "LINMAS" },
    { nama: "Sugeng P", jabatan: "LINMAS" },
    { nama: "Sarmanta ", jabatan: "Ta'MIR MASJID" },
    { nama: "Sudarti", jabatan: "KELOMPOK WANITA TANI" },
    { nama: "Siyarto", jabatan: "SEKSI SENI DAN BUDAYA" },
  ];


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Pemerintahan Padukuhan Karangtengah
        </h2>
        <p className="text-gray-600 text-lg">
          Struktur pemerintahan yang transparan dan akuntabel untuk melayani
          seluruh masyarakat Padukuhan Karangtengah dengan profesional dan
          integritas tinggi.
        </p>
      </div>

      {/* Sejarah & Visi Misi */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <History className="text-green-700 mr-3" size={28} />
            <h3 className="text-xl font-semibold text-green-700">
              Deskripsi Singkat
            </h3>
          </div>
          <p className="text-gray-700 mb-4 text-justify">
            Padukuhan Karangtengah merupakan salah satu padukuhan di Kalurahan Dadapayu, Kapanewon Semanu, Kabupaten Gunungkidul, Daerah Istimewa Yogyakarta, berjarak sekitar 16 km dari Kota Wonosari. Luas wilayahnya ±125 hektar yang didominasi persawahan, hutan, dan perkebunan.
          </p>
          <p className="text-gray-700 mb-4 text-justify">
            Jumlah penduduk tercatat 351 jiwa yang tersebar dalam 3 RT dan 1 RW. Secara geografis, wilayah ini berbatasan dengan Padukuhan Kauman dan Kalurahan Dadapayu (utara), Padukuhan Nogosari (barat), Padukuhan Sembuku dan Kalurahan Dadapayu (selatan), serta Padukuhan Ploso, Kalurahan Petir (timur).
          </p>
          <p className="text-gray-700 text-justify">
            Potensi utama Karangtengah berada pada sektor pertanian dengan komoditas padi, jagung, kedelai, ketela, dan kacang tanah. Sektor peternakan juga berkembang, meliputi sapi, kambing, dan ayam. Selain itu, kesenian tradisional seperti karawitan, ketoprak dan jathilan masih aktif dilestarikan masyarakat sebagai bagian dari identitas budaya lokal.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Target className="text-green-700 mr-3" size={28} />
            <h3 className="text-xl font-semibold text-green-700">
              Visi & Misi
            </h3>
          </div>
          <div className="mb-4">
            <p className="font-semibold text-gray-800 mb-1">Visi:</p>
            <p className="text-gray-700 text-sm">
              "MENUJU DADAPAYU MANDIRI DAN SEJAHTERA"
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-800 mb-2">Misi:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• Pemerintah yang bersih transparan bertanggungjawab</li>
              <li>• Mewujudkan kehidupan yang demokratis dengan mengedepankan musyawarah mufakat</li>
              <li>• Terpenuhinya akses layanan dasar Pendidikan, Kesehatan, Sarana, dan Prasarana</li>
              <li>• Pengembangan ekonomi kerakyatan</li>
              <li>• Optimalisasi peran BUMDesa</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Struktur Organisasi */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-green-700">
          Struktur Organisasi Pemerintahan
        </h3>
        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg shadow-md mb-6">
          <p className="text-gray-700">
            Struktur organisasi pemerintahan Padukuhan Karangtengah disusun
            berdasarkan Peraturan Menteri Dalam Negeri dengan prinsip efisiensi,
            efektivitas, dan profesionalisme dalam memberikan pelayanan kepada
            masyarakat. Setiap unit memiliki tanggung jawab yang jelas dan
            akuntabilitas yang tinggi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perangkat.map((person, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-green-600"
            >
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-700" size={40} />
              </div>
              <h4 className="text-lg font-semibold text-center mb-2 text-gray-800">
                {person.nama}
              </h4>
              <p className="text-center text-gray-600 text-sm font-medium">
                {person.jabatan}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}