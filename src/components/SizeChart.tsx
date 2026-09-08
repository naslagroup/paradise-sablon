import React, { useState } from 'react';
import { SIZE_CHART } from '../data/paradiseData';
import { Ruler, Check, AlertCircle } from 'lucide-react';

export const SizeChart: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'adult' | 'kids'>('adult');

  return (
    <section id="ukuran" className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <Ruler className="w-3.5 h-3.5 text-red-600" />
            <span>Standar Ukuran Pakaian</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Size Chart Standar Lokal &amp; Distro
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Gunakan panduan tabel ukuran lebar dada dan panjang badan berikut agar seluruh anggota tim atau komunitas Anda mendapatkan ukuran yang pas dan nyaman.
          </p>

          {/* Switcher with Blue & Red Styling */}
          <div className="inline-flex p-1.5 bg-white rounded-xl border-2 border-blue-200 mt-2 shadow-xs">
            <button
              onClick={() => setActiveTab('adult')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'adult'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Ukuran Dewasa (Unisex)
            </button>
            <button
              onClick={() => setActiveTab('kids')}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'kids'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              Ukuran Anak-Anak
            </button>
          </div>
        </div>

        {/* Table Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table */}
          <div className="lg:col-span-8 bg-white rounded-2xl border-2 border-blue-100 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-blue-50/70 border-b border-blue-200 text-blue-950 font-black uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-3.5 px-4 sm:px-6">Size</th>
                    <th className="py-3.5 px-4 sm:px-6">Lebar Dada (cm)</th>
                    <th className="py-3.5 px-4 sm:px-6">Panjang Badan (cm)</th>
                    <th className="py-3.5 px-4 sm:px-6">Lingkar Dada (cm)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-50 text-slate-700">
                  {SIZE_CHART[activeTab].map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                      <td className="py-3 px-4 sm:px-6 font-black text-slate-950">
                        {item.size}
                      </td>
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-800">
                        {item.width} cm
                      </td>
                      <td className="py-3 px-4 sm:px-6 font-semibold text-slate-800">
                        {item.length} cm
                      </td>
                      <td className="py-3 px-4 sm:px-6 text-slate-500 font-medium">
                        {item.chest} cm
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-blue-50/50 border-t border-blue-100 flex items-center gap-2 text-xs text-slate-600">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
              <span>Toleransi perbedaan ukuran jahitan normal: ± 1 - 2 cm karena proses obras &amp; jahit manual.</span>
            </div>
          </div>

          {/* Guide / How to Measure */}
          <div className="lg:col-span-4 bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm space-y-4">
            <h3 className="text-base font-black text-slate-950">
              Tips Mengukur Kaos Sendiri:
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-700 border border-red-200 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <strong className="text-blue-950">Lebar Dada (Width):</strong> Ambil kaos ternyaman Anda di lemari, bentangkan rata di atas lantai/meja, lalu ukur dari jahitan ketiak kiri ke jahitan ketiak kanan.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-700 border border-red-200 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <strong className="text-blue-950">Panjang Badan (Length):</strong> Ukur dari titik pundak tertinggi (samping kerah) lurus ke ujung bawah keliman kaos.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-5 h-5 rounded-full bg-red-50 text-red-700 border border-red-200 flex items-center justify-center font-black text-[10px] shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <strong className="text-blue-950">Ukuran Jumbo (Big Size):</strong> Paradise Sablon melayani ukuran hingga 4XL, 5XL, atau custom panjang lengan sesuai permintaan panitia.
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-blue-100 text-xs font-semibold text-blue-950">
              *Tersedia juga pola raglan, kaos oversize drop-shoulder, dan pola wanita (body fit) jika dibutuhkan.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
