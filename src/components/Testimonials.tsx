import React from 'react';
import { TESTIMONIALS } from '../data/paradiseData';
import { Star, Quote, HeartHandshake } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50/50 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-red-600" />
            <span>Pengalaman Pelanggan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Apa Kata Mereka Tentang Paradise Sablon?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kepuasan hasil cetak, kerapian jahitan, dan komunikasi yang bersahabat adalah prioritas utama setiap pesanan.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testi, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm flex flex-col justify-between space-y-4 hover:border-blue-600 transition-colors"
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(testi.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-blue-200" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed">
                  &ldquo;{testi.quote}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-blue-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-black text-slate-950">{testi.name}</h4>
                  <p className="text-[11px] text-slate-500">{testi.role}</p>
                </div>
                <span className="text-[10px] bg-blue-50 border border-blue-200 font-bold px-2 py-0.5 rounded text-blue-900">
                  {testi.order}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
