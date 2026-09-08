import React from 'react';
import { ORDER_WORKFLOW, PARADISE_INFO } from '../data/paradiseData';
import { 
  MessageSquareText, 
  FileCheck, 
  CreditCard, 
  Cpu, 
  PackageCheck, 
  Truck,
  ArrowRight,
  Workflow
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  MessageSquareText: <MessageSquareText className="w-5 h-5 text-blue-600" />,
  FileCheck: <FileCheck className="w-5 h-5 text-blue-600" />,
  CreditCard: <CreditCard className="w-5 h-5 text-blue-600" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600" />,
  PackageCheck: <PackageCheck className="w-5 h-5 text-blue-600" />,
  Truck: <Truck className="w-5 h-5 text-blue-600" />
};

export const WorkflowSection: React.FC = () => {
  return (
    <section id="alur" className="py-20 bg-slate-50/60 border-b border-blue-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 text-red-700 text-xs font-black uppercase tracking-wider border border-red-200">
            <Workflow className="w-3.5 h-3.5 text-red-600" />
            <span>Mudah, Rapi &amp; Transparan</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Alur Pemesanan di Paradise Sablon
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Hanya 6 langkah praktis dari konsultasi hingga pakaian siap dikenakan untuk acara penting Anda.
          </p>
        </div>

        {/* 6 Steps Grid with White base, Blue borders & Red accents */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ORDER_WORKFLOW.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-2xl p-6 border-2 border-blue-100 hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shadow-xs">
                    {iconMap[item.icon] || <FileCheck className="w-5 h-5 text-blue-600" />}
                  </div>
                  <span className="font-mono text-2xl font-black text-red-600">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-black text-slate-950 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-blue-50 flex items-center gap-1.5 text-xs text-blue-700 font-bold">
                <span>Tahap {item.step}</span>
                <ArrowRight className="w-3.5 h-3.5 text-red-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Direct Start Action */}
        <div className="mt-14 text-center">
          <a
            href={`https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Mas/Mbak Paradise Sablon, saya ingin mulai konsultasi langkah 1 untuk bikin kaos/seragam...')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black text-sm sm:text-base shadow-lg shadow-blue-600/25 transition-all"
          >
            <span>Mulai Konsultasi Langkah 1 Sekarang</span>
            <ArrowRight className="w-5 h-5 text-red-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
