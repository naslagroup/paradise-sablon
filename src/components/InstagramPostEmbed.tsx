import React, { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from './InstagramIcon';

interface InstagramPostEmbedProps {
  postUrl?: string;
  className?: string;
}

export const InstagramPostEmbed: React.FC<InstagramPostEmbedProps> = ({
  postUrl = 'https://www.instagram.com/p/DZMpV4SkUCJ/',
  className = ''
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to trigger Instagram embed processor
    const processInstagramEmbed = () => {
      const instgrm = (window as unknown as { instgrm?: { Embeds?: { process: () => void } } }).instgrm;
      if (instgrm?.Embeds?.process) {
        instgrm.Embeds.process();
      }
    };

    // Ensure embed.js script exists
    const scriptId = 'instagram-embed-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      script.onload = () => {
        processInstagramEmbed();
      };
      document.body.appendChild(script);
    } else {
      processInstagramEmbed();
    }

    // Schedule retries in case DOM rendering takes a moment
    const t1 = setTimeout(processInstagramEmbed, 300);
    const t2 = setTimeout(processInstagramEmbed, 1000);
    const t3 = setTimeout(processInstagramEmbed, 2500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [postUrl]);

  // Exact Instagram blockquote provided by user
  const blockquoteHtml = `
    <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="${postUrl}?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style="background:#FFF; border:0; border-radius:12px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 0 auto; max-width:540px; min-width:280px; padding:0; width:100%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
      <div style="padding:16px;">
        <a href="${postUrl}?utm_source=ig_embed&amp;utm_campaign=loading" style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank" rel="noopener noreferrer">
          <div style="display: flex; flex-direction: row; align-items: center;">
            <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
            <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
              <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
              <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
            </div>
          </div>
          <div style="padding: 19% 0;"></div>
          <div style="display:block; height:50px; margin:0 auto 12px; width:50px;">
            <svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg">
              <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#E1306C">
                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101"></path>
                </g>
              </g>
            </svg>
          </div>
          <div style="padding-top: 8px;">
            <div style="color:#2563eb; font-family:sans-serif; font-size:14px; font-weight:700; line-height:18px;">
              Lihat postingan ini di Instagram
            </div>
          </div>
          <div style="padding: 12.5% 0;"></div>
        </a>
        <p style="color:#64748b; font-family:sans-serif; font-size:13px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;">
          <a href="${postUrl}?utm_source=ig_embed&amp;utm_campaign=loading" style="color:#2563eb; font-family:sans-serif; font-size:13px; font-weight:600; text-decoration:none;" target="_blank" rel="noopener noreferrer">
            Sebuah kiriman dibagikan oleh VENDOR KAOS JAWA TENGAH | SABLON KAOS (@paradise.sablon)
          </a>
        </p>
      </div>
    </blockquote>
  `;

  return (
    <div className={`w-full ${className}`}>
      {/* Top Header Card Info */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-blue-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 text-white flex items-center justify-center shadow-xs">
            <InstagramIcon className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-black text-slate-900 leading-none">@paradise.sablon</p>
            <p className="text-[10px] text-blue-700 font-semibold">Postingan Resmi Workshop</p>
          </div>
        </div>

        <a
          href={postUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-bold text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-2.5 py-1 rounded-lg border border-red-200 transition-colors"
        >
          <span>Buka di IG</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Embedded Container */}
      <div
        ref={containerRef}
        className="w-full flex justify-center items-center overflow-x-auto min-h-[460px] bg-slate-50/70 rounded-xl p-1"
        dangerouslySetInnerHTML={{ __html: blockquoteHtml }}
      />
    </div>
  );
};
