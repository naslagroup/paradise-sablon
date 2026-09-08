import React from 'react';
import { SERVICES_DATA, PARADISE_INFO } from '../data/paradiseData';
import { Check, Clock, PackageCheck, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  return (
    <section id="layanan" className="py-20 bg-white border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-red-600" />
            <span>Katalog Produk &amp; Layanan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Produk Sablon &amp; Konveksi Paradise Toroh
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Dari kaos event puluhan ribu pcs, kaos distro brand lokal, seragam kantor formal, hingga jaket angkatan sekolah. Dikerjakan dengan standar mutu terjamin.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES_DATA.map((service) => {
            const productWaLink = `https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent(
              `Halo Paradise Sablon & Konveksi, saya ingin bertanya dan memesan produk: *${service.title}* (${service.category}). Mohon info detailnya.`
            )}`;

            return (
              <div
                key={service.id}
                className="group flex flex-col bg-white rounded-2xl border-2 border-blue-100 hover:border-blue-600 hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Product Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b border-blue-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-xs font-bold text-blue-900 shadow-xs border border-blue-100">
                    {service.category}
                  </div>
                  <div className="absolute top-3 right-3 bg-red-600 text-white px-2.5 py-1 rounded-md text-[11px] font-black shadow-xs tracking-wide">
                    {service.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-blue-950/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-white text-xs font-bold border border-blue-700/50">
                    Mulai {service.startingPrice} <span className="text-[10px] text-blue-200 font-normal">/ pcs</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-950 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Material & Print Tags */}
                    <div className="mt-4 pt-3 border-t border-blue-100 space-y-2">
                      <div>
                        <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block mb-1">
                          Pilihan Bahan:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.materials.map((mat, i) => (
                            <span
                              key={i}
                              className="text-[11px] bg-blue-50/70 border border-blue-200 px-2 py-0.5 rounded text-blue-950 font-medium"
                            >
                              {mat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-1">
                        <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider block mb-1">
                          Teknik Cetak:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.printTypes.map((pt, i) => (
                            <span
                              key={i}
                              className="text-[11px] bg-red-50 border border-red-200 px-2 py-0.5 rounded text-red-700 font-semibold"
                            >
                              {pt}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="mt-4 space-y-1.5">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Production Meta & Action */}
                  <div className="pt-4 border-t border-blue-100 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <PackageCheck className="w-3.5 h-3.5 text-blue-600" />
                        Min. {service.minOrder}
                      </span>
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-red-600" />
                        {service.leadTime}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={productWaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 fill-white" />
                        <span>Pesan Produk Ini</span>
                      </a>
                      <a
                        href="#kalkulator"
                        className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-700 hover:text-blue-900 transition-colors"
                        title="Simulasikan di kalkulator"
                      >
                        <ArrowRight className="w-4 h-4 text-red-600" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom Order Callout Box with Blue bottom background and Red button */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-800 to-blue-950 text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border-t-4 border-red-600">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
              Punya Desain Custom atau Butuh Contoh Sampel Kain?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
              Jangan ragu berkonsultasi langsung. Anda juga bisa datang langsung ke workshop kami di Krenekan, Tunggak, Toroh untuk melihat katalog kain, warna sampel, dan hasil sablon real.
            </p>
          </div>
          <a
            href={`https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Mas/Mbak Paradise Sablon, saya ingin konsultasi desain & jadwal visit ke workshop di Toroh.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-sm shrink-0 transition-all shadow-lg shadow-red-600/30"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Tanya Admin Paradise Sablon</span>
          </a>
        </div>
      </div>
    </section>
  );
};
