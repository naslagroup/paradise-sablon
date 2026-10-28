import React from 'react';
import { MessageCircle, Calculator, MapPin, ShieldCheck, Sparkles, CheckCircle2, Clock, Award, Zap } from 'lucide-react';
import { PARADISE_INFO } from '../data/paradiseData';
import { InstagramPostEmbed } from './InstagramPostEmbed';

export const Hero: React.FC = () => {
  const waLink = `https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Paradise Sablon & Konveksi, saya tertarik untuk memesan sablon/konveksi. Mohon info pricelist & konsultasi...')}`;

  return (
    <section className="relative pt-32 pb-16 md:pt-38 md:pb-24 overflow-hidden bg-white">
      {/* Background Subtle Gradient & Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-100/40 rounded-full blur-3xl -z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Authenticity Pill with Red Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-bold tracking-wide shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Toroh, Grobogan, Jawa Tengah</span>
              <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
              <span className="text-blue-900 font-extrabold uppercase text-[10px] tracking-wider">Produsen Tangan Pertama</span>
            </div>

            {/* Main Headline with Blue & Red Highlights */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
                Pusat Sablon Kaos &amp; Konveksi Resmi di <span className="text-blue-600 underline decoration-red-500 decoration-wavy decoration-2">Grobogan</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Wujudkan kaos distro premium, kemeja PDH/PDL, polo bordir komputer, jaket hoodie, dan jersey olahraga dengan sablon 
                <strong className="text-blue-900 font-bold"> Plastisol oil-based &amp; DTF tajam</strong>, jahitan rantai standar distro, serta garansi langsung dari workshop kami di Toroh.
              </p>
            </div>

            {/* Quick Feature Checklist with Blue & Red Touches */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>100% Katun Combed</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Sablon Plastisol &amp; DTF</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <Zap className="w-4 h-4 text-red-600 shrink-0" />
                <span>Gratis Mockup Desain</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Jahitan Rantai Distro</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <Zap className="w-4 h-4 text-red-600 shrink-0" />
                <span>Garansi Kualitas Cacat</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-800 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Kirim Seluruh Indonesia</span>
              </div>
            </div>

            {/* Call to Action Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all transform active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Konsultasi WhatsApp Sekarang</span>
              </a>

              <a
                href="#kalkulator"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-blue-50 text-blue-900 font-black text-sm sm:text-base border-2 border-blue-600 shadow-sm transition-all"
              >
                <Calculator className="w-4 h-4 text-red-600" />
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Verified Address Micro Banner */}
            <div className="pt-2 flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-50 border border-blue-200 text-xs text-slate-700">
              <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-blue-950">
                  Workshop Paradise Sablon &amp; Konveksi Toroh:
                </p>
                <p className="text-slate-600 mt-0.5">
                  {PARADISE_INFO.address} (Plus Code: <span className="font-mono font-black text-blue-700">{PARADISE_INFO.plusCode}</span>)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workshop Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Card with Blue outline and White base */}
              <div className="relative rounded-2xl bg-white p-3.5 sm:p-4 shadow-xl border-2 border-blue-600/30">
                {/* Instagram Live Post Embed replacing previous placeholder image */}
                <InstagramPostEmbed postUrl="https://www.instagram.com/p/DZMpV4SkUCJ/" />

                {/* Sub-cards / Value Highlights */}
                <div className="grid grid-cols-2 gap-2.5 mt-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-blue-950 leading-tight">Plastisol Oil-Based</p>
                      <p className="text-[10px] text-blue-700 font-medium">Standar Distro Premium</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-red-50 border border-red-200 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-red-950 leading-tight">Garansi Jahitan</p>
                      <p className="text-[10px] text-red-700 font-medium">QC Teliti Sebelum Kirim</p>
                    </div>
                  </div>
                </div>

                {/* Mini Testimonial Quote */}
                <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 italic">
                  &ldquo;Bahan adem, sablon plastisol tebal gak gampang pecah. Langganan bikin seragam komunitas di Grobogan.&rdquo;
                  <span className="block mt-1 text-[11px] font-bold text-blue-900 not-italic">
                    — Pelanggan Setia Paradise Sablon Toroh
                  </span>
                </div>
              </div>

              {/* Floating Speed Badge with Red Lightning */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl border-2 border-blue-600 px-3.5 py-2 flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Pengerjaan Workshop</p>
                  <p className="text-xs font-black text-blue-950">4 - 7 Hari Kerja</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlight Stats Bar with Blue & Red Accents */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-white border-2 border-blue-100 shadow-md">
          <div className="text-center p-2 border-r last:border-r-0 border-blue-100">
            <div className="text-2xl sm:text-3xl font-black text-blue-700">5.000+</div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">Pcs Kaos &amp; Seragam Terproduksi</div>
          </div>
          <div className="text-center p-2 border-r last:border-r-0 border-blue-100">
            <div className="text-2xl sm:text-3xl font-black text-slate-900">100%</div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">Katun Combed Asli &amp; Reaktif</div>
          </div>
          <div className="text-center p-2 border-r last:border-r-0 border-blue-100">
            <div className="text-2xl sm:text-3xl font-black text-red-600">100%</div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">Tangan Pertama (Workshop Toroh)</div>
          </div>
          <div className="text-center p-2">
            <div className="text-2xl sm:text-3xl font-black text-blue-700">12 Pcs</div>
            <div className="text-xs font-bold text-slate-700 mt-0.5">Minimal Order (Bisa Satuan DTF)</div>
          </div>
        </div>
      </div>
    </section>
  );
};
