import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SPORTS_CONFIG as FALLBACK_SPORTS } from '../data/sportsData';

export default function HeroSection({ activeSport, sportsCatalog, onSelectSport, onExploreClick }) {
  const catalog = sportsCatalog || FALLBACK_SPORTS;
  const currentSport = catalog[activeSport] || catalog.football || FALLBACK_SPORTS.football;

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] gap-8 lg:gap-10 items-stretch pt-2 pb-8 sm:pb-12 px-2 sm:px-4 md:px-6 relative z-10 font-body">
      
      {/* ============ LEFT EDITORIAL COLUMN ============ */}
      <div className="flex flex-col justify-between h-full min-h-0 sm:min-h-[600px] lg:min-h-[640px] pt-2 sm:pt-4">
        <div>
          {/* Quiet category label */}
          <span className="text-[10px] sm:text-[11px] font-medium text-[#888888] tracking-wide mb-3 sm:mb-5 block font-heading">
            {currentSport.badge} — {currentSport.provenance}
          </span>

          {/* Main Hero Headline */}
          <h1 className="font-display font-normal text-4xl sm:text-6xl md:text-7xl xl:text-[80px] leading-[0.94] tracking-tight text-[#1A1A1A] flex flex-col select-none">
            {currentSport.heroTitle.map((word, idx) => (
              <span 
                key={`${activeSport}-${idx}`} 
                className="block animate-fade-in"
                style={{ animationDelay: `${idx * 40}ms` }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#666666] leading-relaxed max-w-[380px] mt-4 sm:mt-6 mb-6 sm:mb-8 font-normal">
            {currentSport.heroSub}
          </p>

          {/* CTA Button */}
          <div className="mb-6 sm:mb-0">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#333333] text-white rounded-full pl-5 sm:pl-6 pr-2 py-1.5 sm:py-2 transition-colors cursor-pointer group"
            >
              <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                Explore collection
              </span>
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" strokeWidth={2} />
              </span>
            </button>
          </div>
        </div>

        {/* Promo Card */}
        <div className="hidden sm:flex w-full max-w-[520px] h-[260px] lg:h-[297px] min-h-[260px] lg:min-h-[297px] max-h-[297px] bg-white rounded-2xl overflow-hidden items-stretch border border-black/[0.06] mt-6 lg:mt-auto shrink-0 select-none">
          {/* Left Image */}
          <div className="w-[55%] h-full relative overflow-hidden shrink-0">
            <img 
              src={currentSport.promo.image} 
              alt="Promo showcase kit" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
          
          {/* Right Details */}
          <div className="w-[45%] h-full p-5 lg:p-6 flex flex-col justify-between overflow-hidden">
            <div>
              <h2 className="font-heading font-semibold text-xs sm:text-sm leading-tight text-[#1A1A1A] mb-1.5">
                {currentSport.promo.heading}
              </h2>
              <p className="text-[11px] lg:text-[12px] text-[#888888] leading-relaxed line-clamp-3">
                {currentSport.promo.subtext}
              </p>
            </div>

            <button
              type="button"
              onClick={onExploreClick}
              className="mt-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full border border-black/15 hover:bg-[#1A1A1A] hover:text-white text-[11px] lg:text-[12px] font-medium text-[#1A1A1A] transition-all self-start cursor-pointer"
            >
              {currentSport.promo.buttonText}
            </button>
          </div>
        </div>

      </div>

      {/* ============ RIGHT HERO VISUAL ============ */}
      <div className="relative w-full h-full flex items-center justify-center lg:justify-end mt-4 lg:mt-0">
        <div className="relative w-full max-w-[780px] aspect-[780/828] select-none">
          
          {/* SVG Frame with Exact Boolean Subtract Mask from Figma */}
          <svg 
            className="w-full h-full block overflow-visible" 
            viewBox="0 0 780 828" 
            preserveAspectRatio="xMidYMid meet" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="figmaHeroClip">
                <path d="M630.846 0C650.374 0 664 27.9729 664 47.5C664 84.7792 694.221 115 731.5 115C751.187 115 780 128.877 780 148.564V766C780 800.242 752.242 828 718 828H182C147.758 828 120 800.242 120 766V572C120 538.863 93.1371 512 60 512C26.8629 512 0 485.137 0 452V62C0 27.7583 27.7584 0 62 0H630.846Z" />
              </clipPath>
            </defs>

            <g clipPath="url(#figmaHeroClip)">
              <rect width="780" height="828" fill="#E8E7E4" />
              
              {/* Stacked Images for Seamless Crossfade */}
              {Object.keys(catalog).map((sportKey) => {
                const isCurrent = activeSport === sportKey;
                return (
                  <image 
                    key={sportKey}
                    href={catalog[sportKey].heroImage} 
                    x="-15" 
                    y="-20" 
                    width="810" 
                    height="890" 
                    preserveAspectRatio="xMidYMid slice"
                    style={{
                      opacity: isCurrent ? 1 : 0,
                      transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  />
                );
              })}
            </g>
          </svg>

          {/* Top-Right Arrow Circle */}
          <button 
            type="button"
            onClick={onExploreClick}
            className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center z-20 transition-transform duration-200 hover:rotate-45 cursor-pointer group border border-black/[0.06] shadow-xs"
            aria-label="View Collection"
          >
            <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#1A1A1A]" strokeWidth={1.8} />
          </button>

          {/* Lower-Left Sport Selector Balls */}
          <div 
            className="absolute left-[12px] bottom-[12px] flex flex-col gap-1.5 sm:gap-2 z-20"
            role="tablist"
            aria-label="Choose Sport Category"
          >
            {Object.keys(catalog).map((sportKey) => {
              const sport = catalog[sportKey];
              const isActive = activeSport === sportKey;
              return (
                <button
                  key={sportKey}
                  type="button"
                  onClick={() => onSelectSport(sportKey)}
                  className={`w-14 h-14 sm:w-16 sm:h-16 md:w-[74px] md:h-[74px] rounded-full overflow-hidden border-[2.5px] sm:border-[3px] transition-all duration-200 cursor-pointer shadow-xs ${
                    isActive 
                      ? 'border-[#1A1A1A] scale-105 opacity-100 ring-2 ring-white/80' 
                      : 'border-transparent opacity-75 hover:opacity-100'
                  }`}
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`${sport.name} jerseys`}
                >
                  <img 
                    src={sport.ballImage} 
                    alt={sport.name} 
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
}
