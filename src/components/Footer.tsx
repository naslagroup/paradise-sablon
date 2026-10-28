import React from 'react';
import { PARADISE_INFO } from '../data/paradiseData';
import { MapPin, Phone, ArrowUp, Heart, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { ParadiseLogo } from './ParadiseLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-blue-100 text-xs border-t-4 border-red-600">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <ParadiseLogo className="w-12 h-12 rounded-xl shadow-md border border-blue-400/30" />
              <div>
                <span className="font-black text-lg tracking-tight text-white block leading-none">
                  PARADISE
                </span>
                <span className="text-xs text-red-300 font-bold tracking-wide">
                  Sablon &amp; Konveksi Toroh
                </span>
              </div>
            </div>

            <p className="text-blue-100/90 text-xs leading-relaxed max-w-sm">
              {PARADISE_INFO.shortDesc}
            </p>

            <div className="pt-2 space-y-2 text-xs">
              <div className="flex items-start gap-2 text-white">
                <MapPin className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span className="text-blue-100">{PARADISE_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <Phone className="w-4 h-4 text-red-400 shrink-0" />
                <span className="text-blue-100">{PARADISE_INFO.whatsappNumber}</span>
              </div>

              <div className="flex items-center gap-2 text-white">
                <InstagramIcon className="w-4 h-4 text-red-400 shrink-0" />
                <div className="flex items-center gap-2 text-blue-100 flex-wrap">
                  <a
                    href={PARADISE_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {PARADISE_INFO.instagramHandle}
                  </a>
                  <span className="text-blue-300">•</span>
                  <a
                    href={PARADISE_INFO.instagramIndustriesUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {PARADISE_INFO.instagramIndustriesHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-black text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="#layanan" className="hover:text-white hover:underline transition-colors">
                  Katalog Layanan &amp; Produk
                </a>
              </li>
              <li>
                <a href="#bahan" className="hover:text-white hover:underline transition-colors">
                  Panduan Bahan &amp; Sablon
                </a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-white hover:underline transition-colors font-bold text-red-300">
                  Kalkulator Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#portofolio" className="hover:text-white hover:underline transition-colors">
                  Galeri Hasil Produksi
                </a>
              </li>
              <li>
                <a href="#ukuran" className="hover:text-white hover:underline transition-colors">
                  Size Chart Standar
                </a>
              </li>
              <li>
                <a href="#alur" className="hover:text-white hover:underline transition-colors">
                  Alur Pemesanan
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-white hover:underline transition-colors">
                  Lokasi Workshop &amp; Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours & Map Link (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-black text-white text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              Jam Buka &amp; Layanan
            </h4>

            <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-800 space-y-2">
              <p className="text-blue-100 font-medium">
                • <strong className="text-white">Workshop Offline:</strong><br />
                {PARADISE_INFO.operatingHours.workshop}
              </p>
              <p className="text-blue-100 font-medium pt-1">
                • <strong className="text-white">Layanan Online:</strong><br />
                {PARADISE_INFO.operatingHours.onlineConsultation}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <a
                href={PARADISE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Buka Google Maps</span>
              </a>

              <a
                href={PARADISE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-800 hover:bg-blue-700 text-white text-xs font-bold transition-colors border border-blue-600"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>Instagram @paradise.sablon</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Back to Top */}
      <div className="bg-blue-950 border-t border-blue-800/80 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-blue-200">
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-2 text-center sm:text-left">
            <p>
              &copy; {currentYear} {PARADISE_INFO.name}. Hak Cipta Dilindungi. Krenekan, Tunggak, Kec. Toroh, Kab. Grobogan.
            </p>
            <span className="hidden sm:inline text-blue-400">•</span>
            <p className="text-blue-200">
              Created by{' '}
              <a
                href="https://ahmad.shofinasla.workers.dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-semibold underline underline-offset-2 hover:text-red-400 transition-colors"
              >
                Ahmad Shofi Nasla
              </a>
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-blue-200 hover:text-white font-bold transition-colors cursor-pointer shrink-0"
          >
            <span>Kembali ke Atas</span>
            <ArrowUp className="w-3.5 h-3.5 text-red-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};
