import React from 'react';
import { SPORTS_CONFIG as FALLBACK_SPORTS } from '../data/sportsData';

export default function HeroSection({ activeSport, sportsCatalog, onSelectSport, onExploreClick }) {
  const catalog = sportsCatalog || FALLBACK_SPORTS;
  const currentSport = catalog[activeSport] || catalog.football || FALLBACK_SPORTS.football;

  const sportKeys = Object.keys(catalog);

  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-[480px_1fr] xl:grid-cols-[520px_1fr] gap-8 lg:gap-10 items-start pt-2 pb-8 sm:pb-12 px-2 sm:px-4 md:px-6 relative z-10 font-body">
      
      {/* ============ LEFT EDITORIAL COLUMN ============ */}
      <div className="flex flex-col justify-between h-full min-h-0 sm:min-h-[580px] lg:min-h-[620px] pt-2 sm:pt-4">
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
          <div className="mb-6 sm:mb-0 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onExploreClick}
              className="inline-flex items-center gap-3 bg-[#1A1A1A] hover:bg-[#333333] text-white rounded-full pl-5 sm:pl-6 pr-2 py-1.5 sm:py-2 transition-colors cursor-pointer group"
            >
              <span className="text-xs sm:text-[13px] font-medium tracking-wide">
                Explore collection
              </span>
              <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/15 flex items-center justify-center transition-transform duration-200 group-hover:rotate-45">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Promo Card */}
        <div className="hidden sm:flex w-full max-w-[520px] h-[250px] lg:h-[280px] min-h-[250px] lg:min-h-[280px] max-h-[280px] bg-white rounded-2xl overflow-hidden items-stretch border border-black/[0.06] mt-6 lg:mt-auto shrink-0 select-none">
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

      {/* ============ RIGHT HERO VISUAL (VIEWBOX-LOCKED MATHEMATICAL VECTOR) ============ */}
      <div className="w-full flex items-start justify-center lg:justify-end mt-4 lg:mt-0">
        <div className="relative w-full max-w-[780px] aspect-[780/828] select-none shrink-0">
          
          <svg 
            className="w-full h-full block" 
            viewBox="0 0 780 828" 
            preserveAspectRatio="xMidYMid meet" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Main Figma Boolean Subtract Cutout Mask */}
              <clipPath id="figmaHeroClip">
                <path d="M630.846 0C650.374 0 664 27.9729 664 47.5C664 84.7792 694.221 115 731.5 115C751.187 115 780 128.877 780 148.564V766C780 800.242 752.242 828 718 828H182C147.758 828 120 800.242 120 766V572C120 538.863 93.1371 512 60 512C26.8629 512 0 485.137 0 452V62C0 27.7583 27.7584 0 62 0H630.846Z" />
              </clipPath>

              {/* ClipPaths for 3 Sport Selector Balls (ViewBox Locked) */}
              <clipPath id="ballClip0">
                <circle cx="60" cy="554" r="38" />
              </clipPath>
              <clipPath id="ballClip1">
                <circle cx="60" cy="642" r="38" />
              </clipPath>
              <clipPath id="ballClip2">
                <circle cx="60" cy="730" r="38" />
              </clipPath>
            </defs>

            {/* 1. Main Hero Image Masked inside Figma Vector Shape */}
            <g clipPath="url(#figmaHeroClip)">
              <rect width="780" height="828" fill="#E8E7E4" />
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

            {/* 2. Top-Right Arrow Circle (ViewBox Locked in Top Notch) */}
            <g 
              onClick={onExploreClick} 
              className="cursor-pointer transition-transform hover:scale-105"
              style={{ transformOrigin: '730px 52px' }}
            >
              <circle cx="730" cy="52" r="44" fill="#FFFFFF" stroke="rgba(0,0,0,0.08)" strokeWidth="2" />
              <path 
                d="M718 64L742 40M742 40H722M742 40V60" 
                stroke="#1A1A1A" 
                strokeWidth="4" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              />
            </g>

            {/* 3. Lower-Left 3 Sport Selector Balls (Mathematically ViewBox Locked in Notch) */}
            {sportKeys.map((sportKey, idx) => {
              const sport = catalog[sportKey];
              const isActive = activeSport === sportKey;
              const cy = 554 + idx * 88; // 554, 642, 730
              const clipId = `url(#ballClip${idx})`;

              return (
                <g 
                  key={sportKey}
                  onClick={() => onSelectSport(sportKey)}
                  className="cursor-pointer"
                  style={{ opacity: isActive ? 1 : 0.8 }}
                >
                  {/* Outer Active Ring */}
                  <circle 
                    cx="60" 
                    cy={cy} 
                    r="40" 
                    fill="none" 
                    stroke={isActive ? '#1A1A1A' : 'transparent'} 
                    strokeWidth="4" 
                  />
                  {/* Ball Photo clipped in exact circle */}
                  <image
                    href={sport.ballImage}
                    x="22"
                    y={cy - 38}
                    width="76"
                    height="76"
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={clipId}
                  />
                  {/* White Border Ring */}
                  <circle 
                    cx="60" 
                    cy={cy} 
                    r="38" 
                    fill="none" 
                    stroke="#FFFFFF" 
                    strokeWidth="3" 
                  />
                </g>
              );
            })}

          </svg>

        </div>
      </div>

    </section>
  );
}
