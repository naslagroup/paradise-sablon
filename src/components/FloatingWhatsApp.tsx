import React, { useState, useEffect } from 'react';
import { MessageCircle, X, MapPin } from 'lucide-react';
import { PARADISE_INFO } from '../data/paradiseData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setHasScrolled(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultWaLink = `https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Admin Paradise Sablon & Konveksi, saya ingin konsultasi pesanan...')}`;

  if (!hasScrolled) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Popover Bubble */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border-2 border-blue-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-blue-600 p-4 text-white flex items-start justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse"></span>
                <p className="font-bold text-xs">Customer Service</p>
              </div>
              <p className="text-sm font-black">{PARADISE_INFO.name}</p>
              <p className="text-[11px] text-blue-100">Toroh, Grobogan, Jawa Tengah</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 rounded-lg"
              aria-label="Tutup popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="p-4 bg-slate-50 text-xs text-slate-700 space-y-3">
            <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-xs space-y-1">
              <p className="font-bold text-blue-950">👋 Halo kak!</p>
              <p className="text-slate-600 leading-relaxed">
                Ada yang bisa kami bantu seputar sablon kaos, seragam, polo, hoodie, atau kalkulasi harga?
              </p>
              <span className="text-[10px] text-red-600 font-bold block text-right">Online</span>
            </div>

            <div className="space-y-2">
              <a
                href={defaultWaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-xs transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Mulai Chat WhatsApp</span>
              </a>

              <a
                href={PARADISE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white hover:bg-blue-50 text-blue-950 border border-blue-200 font-bold text-xs transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-red-600" />
                <span>Lihat Google Maps Workshop</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform active:scale-95 cursor-pointer border-2 border-white"
        aria-label="Buka WhatsApp Chat"
      >
        <div className="relative">
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
        <span className="hidden sm:inline font-black text-xs pr-1">
          Chat WhatsApp
        </span>
      </button>
    </div>
  );
};
