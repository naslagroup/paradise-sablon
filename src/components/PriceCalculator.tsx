import React, { useState, useMemo } from 'react';
import { PARADISE_INFO } from '../data/paradiseData';
import { Calculator, MessageCircle, Info, Check, ArrowRight, RefreshCw } from 'lucide-react';

interface ProductOption {
  id: string;
  name: string;
  basePrice: number;
  materials: { name: string; priceAdd: number }[];
  printOptions: { name: string; priceAdd: number }[];
  defaultLeadTime: string;
  minQty: number;
}

const PRODUCTS_CONFIG: ProductOption[] = [
  {
    id: 'kaos',
    name: 'Kaos Oblong (T-Shirt Distro)',
    basePrice: 38000,
    materials: [
      { name: 'Cotton Combed 30s Reaktif (Favorit)', priceAdd: 0 },
      { name: 'Cotton Combed 24s (Lebih Tebal)', priceAdd: 4000 },
      { name: 'Cotton Combed 20s (Ekstra Tebal)', priceAdd: 7000 },
      { name: 'Cotton Bamboo (Super Lembut & Dingin)', priceAdd: 12000 }
    ],
    printOptions: [
      { name: 'Sablon Plastisol Oil-Based (Standar Distro)', priceAdd: 7000 },
      { name: 'Sablon DTF Full Color (Gradasi & Foto)', priceAdd: 8000 },
      { name: 'Sablon Rubber Matsui Waterbase', priceAdd: 5000 }
    ],
    defaultLeadTime: '4 - 7 hari kerja',
    minQty: 12
  },
  {
    id: 'polo',
    name: 'Kaos Polo Berkerah (Wangki)',
    basePrice: 55000,
    materials: [
      { name: 'Lacoste Pique CVC (Halus & Adem)', priceAdd: 0 },
      { name: 'Lacoste Katun Pique Premium', priceAdd: 8000 },
      { name: 'Pique Hexagon', priceAdd: 4000 }
    ],
    printOptions: [
      { name: 'Bordir Komputer Logo Dada & Punggung', priceAdd: 10000 },
      { name: 'Sablon Plastisol / DTF', priceAdd: 8000 }
    ],
    defaultLeadTime: '5 - 8 hari kerja',
    minQty: 12
  },
  {
    id: 'kemeja',
    name: 'Kemeja PDH / PDL / Seragam Kerja',
    basePrice: 75000,
    materials: [
      { name: 'American Drill 1919 (Standar)', priceAdd: 0 },
      { name: 'Japan Drill Original (Tebal Awet)', priceAdd: 12000 },
      { name: 'Nagata Drill', priceAdd: 15000 },
      { name: 'Tropical Drill (Adem Dingin)', priceAdd: 10000 }
    ],
    printOptions: [
      { name: 'Bordir Komputer Presisi 3 Titik', priceAdd: 12000 },
      { name: 'Bordir Komputer Lengkap (Dada, Lengan, Belakang)', priceAdd: 18000 }
    ],
    defaultLeadTime: '7 - 12 hari kerja',
    minQty: 12
  },
  {
    id: 'hoodie',
    name: 'Hoodie / Jumper / Crewneck Jaket',
    basePrice: 95000,
    materials: [
      { name: 'Cotton Fleece Taiwan (Bulu Lembut)', priceAdd: 0 },
      { name: 'Baby Terry Katun', priceAdd: 5000 },
      { name: 'Taslan Waterproof (Jaket Windbreaker)', priceAdd: 10000 }
    ],
    printOptions: [
      { name: 'Sablon Plastisol Depan/Belakang', priceAdd: 12000 },
      { name: 'Sablon DTF Full Color', priceAdd: 14000 },
      { name: 'Bordir Komputer Logo', priceAdd: 12000 }
    ],
    defaultLeadTime: '7 - 10 hari kerja',
    minQty: 12
  },
  {
    id: 'jersey',
    name: 'Jersey Olahraga / Futsal Full Sublimasi',
    basePrice: 70000,
    materials: [
      { name: 'Dryfit Milano (Serat Zigzag Halus)', priceAdd: 0 },
      { name: 'Dryfit Benzema (Segi Enam Lembut)', priceAdd: 3000 },
      { name: 'Dryfit Brazil (Elastis & Dingin)', priceAdd: 5000 }
    ],
    printOptions: [
      { name: 'Sublimasi Fullprint (Bebas Warna & Nama/No)', priceAdd: 0 }
    ],
    defaultLeadTime: '5 - 8 hari kerja',
    minQty: 6
  }
];

export const PriceCalculator: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('kaos');
  const [selectedMaterialIndex, setSelectedMaterialIndex] = useState<number>(0);
  const [selectedPrintIndex, setSelectedPrintIndex] = useState<number>(0);
  const [spotsCount, setSpotsCount] = useState<number>(2); // 1 = 1 titik, 2 = 2 titik (depan+belakang), 3 = 3+ titik
  const [quantity, setQuantity] = useState<number>(24);

  const currentProduct = useMemo(() => {
    return PRODUCTS_CONFIG.find(p => p.id === selectedProductId) || PRODUCTS_CONFIG[0];
  }, [selectedProductId]);

  const selectedMaterial = currentProduct.materials[selectedMaterialIndex] || currentProduct.materials[0];
  const selectedPrint = currentProduct.printOptions[selectedPrintIndex] || currentProduct.printOptions[0];

  // Calculation logic with quantity tiers
  const calculation = useMemo(() => {
    let unitPrice = currentProduct.basePrice + selectedMaterial.priceAdd + selectedPrint.priceAdd;

    // Spots modifier
    if (spotsCount === 1) {
      unitPrice -= 3000;
    } else if (spotsCount === 3) {
      unitPrice += 5000;
    }

    // Volume discount tier
    let discountPercent = 0;
    let tierLabel = 'Harga Standar (12-23 pcs)';

    if (quantity >= 200) {
      discountPercent = 0.12;
      tierLabel = 'Diskon Super Grosir 12% (200+ pcs)';
    } else if (quantity >= 100) {
      discountPercent = 0.09;
      tierLabel = 'Diskon Partai 9% (100-199 pcs)';
    } else if (quantity >= 50) {
      discountPercent = 0.06;
      tierLabel = 'Diskon Komunitas 6% (50-99 pcs)';
    } else if (quantity >= 24) {
      discountPercent = 0.03;
      tierLabel = 'Diskon Lusinan 3% (24-49 pcs)';
    }

    const discountedUnit = Math.round((unitPrice * (1 - discountPercent)) / 500) * 500;
    const totalPrice = discountedUnit * quantity;

    return {
      unitPrice: discountedUnit,
      rawUnit: unitPrice,
      totalPrice,
      discountPercent,
      tierLabel
    };
  }, [currentProduct, selectedMaterial, selectedPrint, spotsCount, quantity]);

  const formatRupiah = (num: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(num);
  };

  const spotsLabel = spotsCount === 1 ? '1 Titik (Dada / Belakang)' : spotsCount === 2 ? '2 Titik (Dada Depan + Punggung A3)' : '3+ Titik (Depan, Belakang & Lengan)';

  const generateWhatsAppQuote = () => {
    const message = `Halo Paradise Sablon & Konveksi!
Saya baru saja melakukan simulasi estimasi di website:

*Rincian Pesanan:*
- Produk: ${currentProduct.name}
- Pilihan Bahan: ${selectedMaterial.name}
- Teknik Cetak: ${selectedPrint.name}
- Titik Cetak: ${spotsLabel}
- Jumlah: ${quantity} pcs
- Tier: ${calculation.tierLabel}

*Estimasi Biaya:*
- Harga per pcs: ~${formatRupiah(calculation.unitPrice)}
- Estimasi Total: ~${formatRupiah(calculation.totalPrice)}
- Estimasi Pengerjaan: ${currentProduct.defaultLeadTime}

Saya ingin berkonsultasi lebih lanjut dan mengirimkan desain. Mohon konfirmasinya ya Mas/Mbak. Terima kasih!`;

    const url = `https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleProductChange = (id: string) => {
    setSelectedProductId(id);
    setSelectedMaterialIndex(0);
    setSelectedPrintIndex(0);
  };

  return (
    <section id="kalkulator" className="py-20 bg-white border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-red-600" />
            <span>Kalkulator Estimasi Biaya</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Simulasi Harga Pesanan Transparan
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hitung perkiraan biaya produksi kaos, polo, kemeja, atau jaket Anda dalam hitungan detik. Tanpa biaya tersembunyi, langsung dari workshop tangan pertama di Toroh.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-blue-100 shadow-lg">
          {/* Left / Input Controls (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* 1. Select Product Type */}
            <div>
              <label className="block text-xs font-black text-blue-950 uppercase tracking-wider mb-2.5">
                1. Pilih Jenis Pakaian
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {PRODUCTS_CONFIG.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => handleProductChange(prod.id)}
                    className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-bold transition-all ${
                      selectedProductId === prod.id
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm'
                        : 'bg-white text-slate-800 border-blue-100 hover:border-blue-300 hover:bg-blue-50/40'
                    }`}
                  >
                    {prod.name.split('(')[0]}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Select Fabric Material */}
            <div>
              <label className="block text-xs font-black text-blue-950 uppercase tracking-wider mb-2.5">
                2. Pilih Bahan Kain
              </label>
              <div className="space-y-2">
                {currentProduct.materials.map((mat, idx) => (
                  <label
                    key={idx}
                    onClick={() => setSelectedMaterialIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                      selectedMaterialIndex === idx
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 text-blue-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedMaterialIndex === idx
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {selectedMaterialIndex === idx && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span>{mat.name}</span>
                    </div>
                    {mat.priceAdd > 0 && (
                      <span className="text-xs text-red-600 font-bold">
                        +{formatRupiah(mat.priceAdd)}
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* 3. Select Printing Method */}
            <div>
              <label className="block text-xs font-black text-blue-950 uppercase tracking-wider mb-2.5">
                3. Pilihan Teknik Cetak / Sablon / Bordir
              </label>
              <div className="space-y-2">
                {currentProduct.printOptions.map((prn, idx) => (
                  <label
                    key={idx}
                    onClick={() => setSelectedPrintIndex(idx)}
                    className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                      selectedPrintIndex === idx
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20 text-blue-950 font-bold'
                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedPrintIndex === idx
                            ? 'border-blue-600 bg-blue-600 text-white'
                            : 'border-slate-300'
                        }`}
                      >
                        {selectedPrintIndex === idx && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span>{prn.name}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* 4. Number of Print Spots */}
            <div>
              <label className="block text-xs font-black text-blue-950 uppercase tracking-wider mb-2.5">
                4. Jumlah Titik Sablon / Bordir
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { value: 1, label: '1 Titik', desc: 'Dada kecil atau punggung' },
                  { value: 2, label: '2 Titik', desc: 'Dada + Punggung A3' },
                  { value: 3, label: '3+ Titik', desc: 'Dada + Punggung + Lengan' }
                ].map((spot) => (
                  <button
                    key={spot.value}
                    onClick={() => setSpotsCount(spot.value)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      spotsCount === spot.value
                        ? 'bg-blue-50 border-blue-600 ring-2 ring-blue-600/20'
                        : 'bg-white border-slate-200 hover:border-blue-200'
                    }`}
                  >
                    <p className={`text-xs font-bold ${spotsCount === spot.value ? 'text-blue-900' : 'text-slate-800'}`}>
                      {spot.label}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{spot.desc}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Quantity Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black text-blue-950 uppercase tracking-wider">
                  5. Jumlah Pesanan (Quantity)
                </label>
                <span className="text-sm font-black text-white bg-red-600 px-3 py-0.5 rounded-full shadow-xs">
                  {quantity} Pcs
                </span>
              </div>

              <input
                type="range"
                min={currentProduct.minQty}
                max={500}
                step={currentProduct.minQty}
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-blue-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
              />

              <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1.5 font-semibold">
                <span>Min: {currentProduct.minQty} pcs</span>
                <span>50 pcs</span>
                <span>100 pcs</span>
                <span>200 pcs</span>
                <span>500+ pcs</span>
              </div>

              {/* Quick Select Preset Buttons */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {[12, 24, 50, 100, 200, 300].map((preset) => (
                  <button
                    key={preset}
                    onClick={() => setQuantity(preset)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-all ${
                      quantity === preset
                        ? 'bg-blue-600 text-white border-blue-700 shadow-xs'
                        : 'bg-white text-slate-700 border-blue-200 hover:bg-blue-50'
                    }`}
                  >
                    {preset} pcs
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right / Live Quote Summary Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-7 border-2 border-blue-600 shadow-md flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                <h3 className="font-black text-base text-slate-950">
                  Ringkasan Estimasi
                </h3>
                <span className="text-xs bg-red-50 text-red-700 border border-red-200 font-bold px-2 py-0.5 rounded-full">
                  Harga Tangan Pertama
                </span>
              </div>

              {/* Selected Attributes Table */}
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 font-medium">Item:</span>
                  <span className="font-bold text-slate-900 text-right max-w-[200px]">
                    {currentProduct.name}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 font-medium">Bahan:</span>
                  <span className="font-bold text-slate-900 text-right max-w-[200px]">
                    {selectedMaterial.name}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 font-medium">Teknik Cetak:</span>
                  <span className="font-bold text-slate-900 text-right max-w-[200px]">
                    {selectedPrint.name}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 font-medium">Titik Sablon:</span>
                  <span className="font-bold text-slate-900 text-right">
                    {spotsLabel}
                  </span>
                </div>
                <div className="flex items-start justify-between">
                  <span className="text-slate-500 font-medium">Jumlah:</span>
                  <span className="font-black text-blue-700">
                    {quantity} Pcs
                  </span>
                </div>
                <div className="flex items-start justify-between pt-1 border-t border-slate-100">
                  <span className="text-slate-500 font-medium">Tier Diskon:</span>
                  <span className="font-bold text-blue-700 text-right">
                    {calculation.tierLabel}
                  </span>
                </div>
              </div>

              {/* Price Calculation Box with Blue background and Red total highlight */}
              <div className="p-4 rounded-xl bg-blue-50/80 border border-blue-200 space-y-2">
                <div className="flex items-baseline justify-between">
                  <span className="text-xs text-blue-900 font-semibold">
                    Estimasi per Pcs:
                  </span>
                  <span className="text-lg font-black text-blue-950">
                    ~{formatRupiah(calculation.unitPrice)}
                  </span>
                </div>

                <div className="pt-2 border-t border-blue-200 flex items-baseline justify-between">
                  <div>
                    <span className="text-xs text-slate-800 font-bold block">
                      Total Estimasi:
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">
                      (Belum termasuk ongkir luar Grobogan)
                    </span>
                  </div>
                  <span className="text-2xl font-black text-red-600">
                    ~{formatRupiah(calculation.totalPrice)}
                  </span>
                </div>
              </div>

              {/* Lead time & QC Guarantee Note */}
              <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-blue-100">
                <div className="flex items-center gap-1.5 text-blue-950 font-bold">
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>Estimasi Produksi: {currentProduct.defaultLeadTime}</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Termasuk: Free mockup desain digital, steam setrika uap, dan bungkus plastik per pcs.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Quote Button */}
            <div className="space-y-2">
              <button
                onClick={generateWhatsAppQuote}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-black text-sm shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Kirim Rincian Ini ke WhatsApp</span>
              </button>

              <p className="text-[11px] text-center text-slate-500">
                Data simulasi akan otomatis terformat rapi saat membuka chat WhatsApp dengan Paradise Sablon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
