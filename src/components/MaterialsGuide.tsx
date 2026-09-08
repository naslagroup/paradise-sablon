import React, { useState } from 'react';
import { PRINTING_TECHNIQUES, FABRIC_GUIDE, PARADISE_INFO } from '../data/paradiseData';
import { CheckCircle2, Sparkles, Shirt, Layers, HelpCircle, MessageSquare } from 'lucide-react';

export const MaterialsGuide: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sablon' | 'bahan'>('sablon');

  return (
    <section id="bahan" className="py-20 bg-slate-50/60 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Edukasi &amp; Standar Mutu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Panduan Teknik Sablon &amp; Pilihan Bahan Kain
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Transparansi mutu adalah komitmen Paradise Sablon. Pahami kelebihan tiap jenis tinta sablon dan ketebalan kain katun agar pesanan Anda awet dan sesuai anggaran.
          </p>

          {/* Tab Switcher with Blue & Red Styling */}
          <div className="inline-flex p-1.5 bg-white rounded-xl border-2 border-blue-200 mt-4 shadow-sm">
            <button
              onClick={() => setActiveTab('sablon')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'sablon'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <Sparkles className={`w-4 h-4 ${activeTab === 'sablon' ? 'text-red-300' : 'text-blue-600'}`} />
              <span>Teknik Sablon &amp; Bordir</span>
            </button>
            <button
              onClick={() => setActiveTab('bahan')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'bahan'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-700 hover:text-blue-600'
              }`}
            >
              <Shirt className={`w-4 h-4 ${activeTab === 'bahan' ? 'text-red-300' : 'text-blue-600'}`} />
              <span>Karakteristik Bahan Kain</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Printing Techniques */}
        {activeTab === 'sablon' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PRINTING_TECHNIQUES.map((technique, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm hover:border-blue-600 transition-all space-y-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-black text-slate-950">
                      {technique.name}
                    </h3>
                    <span className="inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded-md bg-red-50 border border-red-200 text-red-700">
                      {technique.badge}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {technique.desc}
                </p>

                <div className="space-y-2 pt-3 border-t border-blue-100">
                  <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block">
                    Keunggulan Utama:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {technique.pros.map((pro, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-1.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{pro}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-50/60 border border-blue-200 text-xs text-slate-700">
                  <strong className="text-blue-950 font-bold">Paling Cocok Untuk:</strong> {technique.bestFor}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Fabric Materials Guide */}
        {activeTab === 'bahan' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FABRIC_GUIDE.map((fabric, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm hover:border-blue-600 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-black text-slate-950">
                      {fabric.name}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
                      <Shirt className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 text-[11px]">
                    <span className="bg-blue-50 text-blue-900 border border-blue-200 px-2 py-0.5 rounded font-bold">
                      {fabric.thickness}
                    </span>
                    <span className="bg-red-50 text-red-700 border border-red-200 px-2 py-0.5 rounded font-bold">
                      {fabric.feel}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {fabric.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-blue-100 text-xs text-slate-700">
                  <span className="font-bold text-blue-950 block mb-1">Rekomendasi Penggunaan:</span>
                  <p>{fabric.usage}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pro Tip Box with Blue frame and Red CTA */}
        <div className="mt-10 p-5 rounded-2xl bg-white border-2 border-blue-600 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-950">
                Masih Ragu Memilih Kombinasi Bahan &amp; Sablon?
              </h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Ceritakan konsep desain atau kebutuhan event Anda ke admin WhatsApp Paradise Sablon (+62 895-3134-2018). Kami siap beri rekomendasi paling tepat dan hemat.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Paradise Sablon, saya mau tanya rekomendasi bahan & sablon yang cocok untuk kebutuhan saya...')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-black shrink-0 transition-all shadow-md shadow-red-600/25"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Konsultasi Sekarang</span>
          </a>
        </div>
      </div>
    </section>
  );
};
