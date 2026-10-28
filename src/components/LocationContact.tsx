import React, { useState } from 'react';
import { PARADISE_INFO } from '../data/paradiseData';
import { InstagramIcon } from './InstagramIcon';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Navigation, 
  Send, 
  MessageCircle,
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';

export const LocationContact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    productType: 'Kaos Sablon',
    quantity: '24',
    notes: ''
  });

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(PARADISE_INFO.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Paradise Sablon & Konveksi!
Saya mengirim formulir kontak dari website:

*Nama:* ${formData.name}
*No. WhatsApp:* ${formData.phone}
*Kebutuhan:* ${formData.productType}
*Estimasi Jumlah:* ${formData.quantity} pcs
*Catatan:* ${formData.notes || '-'}

Mohon informasi ketersediaan & jadwal produksinya ya. Terima kasih!`;

    const url = `https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="lokasi" className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Alamat &amp; Kontak Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Kunjungi Workshop Paradise Sablon
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kami menyambut Anda untuk berkonsultasi langsung, melihat sampel bahan kain, dan mengecek hasil sablon di workshop kami di Kecamatan Toroh, Grobogan.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Contact Cards & Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 mt-1 shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-black text-slate-950 text-base">
                    Alamat Workshop
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {PARADISE_INFO.address}
                  </p>
                  <p className="text-xs text-slate-500">
                    Google Plus Code: <strong className="text-blue-700 font-mono font-bold">{PARADISE_INFO.plusCode}</strong>
                  </p>
                </div>
              </div>

              {/* Action buttons for address */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-blue-100">
                <a
                  href={PARADISE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black transition-colors shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 text-red-200" />
                  <span>Petunjuk Arah Maps</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border-2 border-blue-200 text-slate-800 text-xs font-bold transition-colors"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-red-600" />
                      <span className="text-red-700">Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-blue-600" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Direct Contacts & Socials Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Paradise Sablon, saya ingin bertanya tentang pemesanan...')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:col-span-2 bg-white hover:bg-blue-50/50 border-2 border-blue-100 hover:border-blue-600 p-3.5 rounded-2xl transition-all group flex items-center justify-between shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-wider text-red-600">
                      WhatsApp Chat
                    </p>
                    <p className="text-xs sm:text-sm font-black text-slate-950 group-hover:text-blue-700">
                      {PARADISE_INFO.whatsappNumber}
                    </p>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  Chat WA &rarr;
                </span>
              </a>

              {/* Instagram Sablon Card */}
              <a
                href={PARADISE_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-blue-50/50 border-2 border-blue-100 hover:border-blue-600 p-3.5 rounded-2xl transition-all group flex items-center gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-wider text-red-600 truncate">
                    Instagram Sablon
                  </p>
                  <p className="text-xs sm:text-sm font-black text-slate-950 group-hover:text-blue-700 truncate">
                    {PARADISE_INFO.instagramHandle}
                  </p>
                </div>
              </a>

              {/* Instagram Industries Card */}
              <a
                href={PARADISE_INFO.instagramIndustriesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-blue-50/50 border-2 border-blue-100 hover:border-blue-600 p-3.5 rounded-2xl transition-all group flex items-center gap-3 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <InstagramIcon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-wider text-red-600 truncate">
                    Instagram Industries
                  </p>
                  <p className="text-xs sm:text-sm font-black text-slate-950 group-hover:text-blue-700 truncate">
                    {PARADISE_INFO.instagramIndustriesHandle}
                  </p>
                </div>
              </a>
            </div>

            {/* Operating Hours Card */}
            <div className="bg-white rounded-2xl p-5 border-2 border-blue-100 space-y-2 text-xs shadow-xs">
              <div className="flex items-center gap-2 text-slate-950 font-black">
                <Clock className="w-4 h-4 text-red-600" />
                <span>Jam Operasional Workshop &amp; Layanan:</span>
              </div>
              <div className="space-y-1 text-slate-600 pl-6 font-medium">
                <p>• <strong className="text-blue-950">Kunjungan Workshop:</strong> {PARADISE_INFO.operatingHours.workshop}</p>
                <p>• <strong className="text-blue-950">Konsultasi Online (WhatsApp):</strong> {PARADISE_INFO.operatingHours.onlineConsultation}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed & Quick Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Interactive Map Frame with Blue border */}
            <div className="bg-white rounded-2xl border-2 border-blue-100 overflow-hidden shadow-sm">
              <div className="p-3.5 bg-blue-50/70 border-b border-blue-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                  <span className="font-black text-blue-950">Peta Lokasi Paradise Sablon &amp; Konveksi</span>
                </div>
                <a
                  href={PARADISE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-bold"
                >
                  <span>Buka di Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map Iframe */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] lg:aspect-[16/9] w-full bg-slate-100">
                <iframe
                  title="Peta Lokasi Paradise Sablon & Konveksi Toroh Grobogan"
                  src={PARADISE_INFO.googleMapsEmbedQuery}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <div className="p-3 bg-white text-xs text-slate-600 flex flex-wrap items-center justify-between gap-2 border-t border-blue-100">
                <span className="font-semibold text-slate-700">Titik: Paradise Sablon &amp; Konveksi, Toroh, Grobogan</span>
                <a
                  href={PARADISE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:text-red-600 font-bold inline-flex items-center gap-1"
                >
                  <span>Buka Titik Maps Resmi</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Quick Contact / Inquiry Form with White base and Blue borders */}
            <div className="bg-white rounded-2xl p-6 border-2 border-blue-100 shadow-sm space-y-4">
              <div className="space-y-1">
                <h3 className="font-black text-slate-950 text-base">
                  Kirim Pesan Penawaran Cepat
                </h3>
                <p className="text-xs text-slate-600">
                  Isi formulir ringkas di bawah ini, dan sistem akan langsung menghubungkan Anda ke WhatsApp kami dengan format rapi.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-blue-950 mb-1">
                      Nama Anda / Komunitas
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi (Ketua Panitia)"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border-2 border-blue-100 bg-white focus:outline-none focus:border-blue-600 text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-blue-950 mb-1">
                      No. WhatsApp Anda
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Contoh: 081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border-2 border-blue-100 bg-white focus:outline-none focus:border-blue-600 text-slate-900"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-blue-950 mb-1">
                      Rencana Produk
                    </label>
                    <select
                      value={formData.productType}
                      onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border-2 border-blue-100 bg-white focus:outline-none focus:border-blue-600 text-slate-900"
                    >
                      <option value="Kaos Sablon Distro">Kaos Sablon Distro (Plastisol / DTF)</option>
                      <option value="Kaos Polo Berkerah">Kaos Polo Berkerah (Wangki)</option>
                      <option value="Kemeja Seragam PDH/PDL">Kemeja Seragam PDH/PDL Bordir</option>
                      <option value="Hoodie / Jaket Angkatan">Hoodie / Jaket Angkatan</option>
                      <option value="Jersey Printing Olahraga">Jersey Printing Olahraga</option>
                      <option value="Merchandise / Totebag">Merchandise / Totebag</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-blue-950 mb-1">
                      Estimasi Jumlah (Pcs)
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="24"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full text-xs p-2.5 rounded-xl border-2 border-blue-100 bg-white focus:outline-none focus:border-blue-600 text-slate-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-blue-950 mb-1">
                    Catatan Khusus / Desain (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Butuh untuk acara reuni tanggal 25 bulan depan, warna kaos navy sablon emas..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-xs p-2.5 rounded-xl border-2 border-blue-100 bg-white focus:outline-none focus:border-blue-600 text-slate-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Kirim Formulir Langsung ke WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
