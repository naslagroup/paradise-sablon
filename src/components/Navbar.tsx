import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, MapPin, Phone, Sparkles } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';
import { ParadiseLogo } from './ParadiseLogo';
import { PARADISE_INFO } from '../data/paradiseData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = `https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Paradise Sablon & Konveksi, saya ingin konsultasi pemesanan kaos/seragam...')}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Notice - Clean Blue Header Bar with Red Pulsing Accent */}
      <div className="bg-blue-900 text-white text-xs py-1.5 px-4 border-b border-blue-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 font-semibold text-white">
              <span className="inline-block w-2 h-2 rounded-full bg-red-500 animate-pulse ring-2 ring-red-400/40"></span>
              <span>Workshop Buka</span>
              <span className="hidden sm:inline text-blue-200 font-normal">Toroh, Grobogan, Jawa Tengah</span>
            </span>
            <span className="hidden md:inline px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-600 text-white shadow-xs">
              Menerima Pesanan Partai &amp; Satuan
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={PARADISE_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-blue-100 hover:text-white transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-300" />
              <span className="hidden sm:inline">{PARADISE_INFO.instagramHandle}</span>
            </a>
            <a 
              href={waLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white bg-blue-800/80 hover:bg-blue-700 px-2.5 py-0.5 rounded-full transition-colors font-medium border border-blue-700"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              <span>{PARADISE_INFO.whatsappNumber}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav 
        className={`transition-all duration-200 ${
          isScrolled 
            ? 'bg-white/98 backdrop-blur-md shadow-md border-b border-blue-100 py-2.5' 
            : 'bg-white/95 backdrop-blur-sm border-b border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo with uploaded Paradise Logo */}
          <a href="#" className="flex items-center group">
            <ParadiseLogo size="md" showText={true} />
          </a>

          {/* Desktop Nav Links - Clean white base with blue hover & red badge */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
            <a href="#layanan" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600">
              Layanan
            </a>
            <a href="#bahan" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600">
              Bahan &amp; Sablon
            </a>
            <a href="#kalkulator" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600 flex items-center gap-1.5">
              <span>Kalkulator Biaya</span>
              <span className="text-[10px] bg-red-600 text-white font-black px-1.5 py-0.2 rounded-full shadow-xs">
                SIMULASI
              </span>
            </a>
            <a href="#portofolio" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600">
              Portofolio
            </a>
            <a href="#ukuran" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600">
              Size Chart
            </a>
            <a href="#alur" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600">
              Alur Order
            </a>
            <a href="#lokasi" className="hover:text-blue-600 transition-colors py-1 border-b-2 border-transparent hover:border-blue-600 flex items-center gap-1 text-blue-700 font-bold">
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Lokasi</span>
            </a>
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={PARADISE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-lg text-blue-800 bg-blue-50 hover:bg-blue-100 transition-colors border border-blue-200"
              title="Lihat rute Google Maps"
            >
              <MapPin className="w-3.5 h-3.5 text-red-600" />
              <span>Google Maps</span>
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-extrabold rounded-lg text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-all shadow-md shadow-blue-600/20"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-blue-50 hover:text-blue-600 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-blue-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-slate-800">
              <a 
                href="#layanan" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-100"
              >
                Layanan Produk
              </a>
              <a 
                href="#bahan" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-100"
              >
                Bahan &amp; Sablon
              </a>
              <a 
                href="#kalkulator" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-800 font-bold border border-blue-200 flex items-center justify-between"
              >
                <span>Kalkulator Biaya</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
              </a>
              <a 
                href="#portofolio" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-100"
              >
                Hasil Produksi
              </a>
              <a 
                href="#ukuran" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-100"
              >
                Size Chart
              </a>
              <a 
                href="#alur" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50 hover:text-blue-700 border border-slate-100"
              >
                Alur Pemesanan
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={PARADISE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-blue-50 text-blue-900 text-sm font-bold hover:bg-blue-100 border border-blue-200"
              >
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Buka Rute di Google Maps</span>
              </a>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 rounded-lg bg-blue-600 text-white text-sm font-extrabold hover:bg-blue-700 shadow-md shadow-blue-600/20"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Konsultasi WhatsApp (+62 895-3134-2018)</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

