import React from 'react';

interface ParadiseLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const ParadiseLogo: React.FC<ParadiseLogoProps> = ({ 
  className = "", 
  size = 'md',
  showText = true 
}) => {
  const sizeMap = {
    sm: "w-8 h-8",
    md: "w-11 h-11",
    lg: "w-16 h-16",
    xl: "w-24 h-24 sm:w-28 sm:h-28"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`relative ${sizeMap[size]} rounded-full overflow-hidden bg-white shadow-md border-2 border-blue-600 shrink-0 p-0.5 group transition-transform duration-200 hover:scale-105`}>
        <img 
          src="/logo.jpg" 
          alt="Paradise Sablon & Konveksi Logo" 
          className="w-full h-full object-contain rounded-full"
          onError={(e) => {
            // Fallback inline SVG if image doesn't load
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span className="font-black text-lg sm:text-xl tracking-tighter text-blue-900">
              PARADISE<span className="text-red-600">.</span>
            </span>
            <span className="px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wider bg-red-600 text-white rounded-md shadow-xs">
              ORIGINAL
            </span>
          </div>
          <span className="text-[11px] font-bold text-blue-700 tracking-wide">
            Sablon &amp; Konveksi Toroh
          </span>
        </div>
      )}
    </div>
  );
};
