import React, { useState } from 'react';
import { PORTFOLIO_ITEMS, PortfolioItem, PARADISE_INFO } from '../data/paradiseData';
import { Tag, Users, Shield, MessageCircle, X, ExternalLink, Sparkles } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalItem, setActiveModalItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Portofolio' },
    { id: 'kaos', label: 'Kaos & Sablon' },
    { id: 'kemeja', label: 'Kemeja & PDH' },
    { id: 'polo', label: 'Polo Shirt' },
    { id: 'hoodie', label: 'Hoodie & Jaket' },
    { id: 'jersey', label: 'Jersey Olahraga' }
  ];

  const filteredItems = selectedCategory === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="portofolio" className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Galeri Produksi Real</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Hasil Produksi Paradise Sablon Toroh
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kepercayaan ratusan komunitas, panitia acara, sekolah, dan perusahaan di Grobogan dan sekitarnya. Foto real tanpa manipulasi.
          </p>

          {/* Filter Pills with Blue & Red Styling */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 border-2 border-blue-100 hover:border-blue-300 hover:bg-blue-50/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="group bg-white rounded-2xl border-2 border-blue-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden border-b border-blue-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-blue-950/85 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-bold border border-blue-700/50">
                  {item.categoryLabel}
                </div>
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-blue-950 px-2.5 py-0.5 rounded text-[11px] font-black flex items-center gap-1 shadow-sm border border-blue-100">
                  <Tag className="w-3 h-3 text-red-600" />
                  <span>{item.quantity}</span>
                </div>
              </div>

              {/* Card Meta */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <p className="text-xs font-black text-red-600 mb-1">
                    {item.client}
                  </p>
                  <h3 className="text-base font-black text-slate-950 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-2 text-xs text-slate-600 space-y-1">
                    <p><strong className="text-blue-950">Teknik:</strong> {item.technique}</p>
                    <p><strong className="text-blue-950">Bahan:</strong> {item.material}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-blue-100 flex items-center justify-between text-xs text-blue-700 font-bold group-hover:text-red-600 transition-colors">
                  <span>Lihat Detail Spesifikasi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Popup */}
        {activeModalItem && (
          <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border-2 border-blue-600 animate-in fade-in zoom-in duration-200">
              <div className="relative aspect-[16/10] bg-slate-900">
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-3 left-3 bg-red-600 text-white px-3 py-1 rounded-md text-xs font-black">
                  {activeModalItem.categoryLabel}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wide">
                    {activeModalItem.client}
                  </span>
                  <h3 className="text-lg font-black text-slate-950 mt-0.5">
                    {activeModalItem.title}
                  </h3>
                </div>

                <div className="bg-blue-50/70 rounded-xl p-3.5 space-y-2 text-xs text-slate-700 border border-blue-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Bahan Utama:</span>
                    <span className="font-bold text-blue-950">{activeModalItem.material}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Teknik Sablon / Bordir:</span>
                    <span className="font-bold text-blue-950">{activeModalItem.technique}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Jumlah Pesanan:</span>
                    <span className="font-bold text-blue-950">{activeModalItem.quantity}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent(
                      `Halo Paradise Sablon, saya melihat hasil produksi "${activeModalItem.title}" di website dan ingin membuat pesanan dengan model & bahan serupa.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition-colors shadow-md shadow-blue-600/20"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Pesan Model Serupa via WA</span>
                  </a>
                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

