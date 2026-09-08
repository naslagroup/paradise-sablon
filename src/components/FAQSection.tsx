import React, { useState } from 'react';
import { FAQS, PARADISE_INFO } from '../data/paradiseData';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-black uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-red-600" />
            <span>Pertanyaan Populer</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            Jawaban seputar pemesanan, minimal order, pengerjaan, dan pengiriman di Paradise Sablon.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border-2 border-blue-100 overflow-hidden transition-all hover:border-blue-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-xs sm:text-sm text-slate-950 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-red-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-50 bg-blue-50/30">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-8 text-center text-xs text-slate-600 font-medium">
          Punya pertanyaan lain yang belum terjawab?{' '}
          <a
            href={`https://wa.me/${PARADISE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Paradise Sablon, saya ingin bertanya hal lain terkait pesanan...')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 font-black hover:underline inline-flex items-center gap-1 ml-1"
          >
            <span>Tanyakan langsung via WhatsApp</span>
            <MessageCircle className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};
