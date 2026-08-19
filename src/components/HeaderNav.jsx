import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function HeaderNav({ activeSport, onSelectSport, cartCount, onOpenCart }) {
  return (
    <header className="w-full flex items-center justify-between py-4 sm:py-5 px-2 sm:px-4 md:px-6 relative z-30 font-heading">
      {/* Brand Logo */}
      <a 
        href="#" 
        className="flex items-center gap-2 sm:gap-3 shrink-0" 
        aria-label="Jersey Hub Nepal"
      >
        <img 
          src="images/logo.webp" 
          alt="Jersey Hub Nepal Logo" 
          className="w-9 h-9 sm:w-11 sm:h-11 object-contain"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-xs sm:text-[13px] tracking-wide text-[#1A1A1A]">Jersey Hub</span>
          <span className="text-[9px] sm:text-[10px] tracking-wider text-[#C51D34] font-medium">Nepal</span>
        </div>
      </a>

      {/* Center Navigation — Mobile-friendly pill tabs */}
      <nav className="inline-flex items-center gap-4 sm:gap-8 text-xs sm:text-[13px] font-medium text-[#666666]">
        <button
          type="button"
          onClick={() => onSelectSport('football')}
          className={`transition-colors cursor-pointer ${
            activeSport === 'football' 
              ? 'text-[#1A1A1A] font-semibold border-b border-[#1A1A1A] pb-0.5' 
              : 'hover:text-[#1A1A1A]'
          }`}
        >
          Football
        </button>

        <button
          type="button"
          onClick={() => onSelectSport('cricket')}
          className={`transition-colors cursor-pointer ${
            activeSport === 'cricket' 
              ? 'text-[#1A1A1A] font-semibold border-b border-[#1A1A1A] pb-0.5' 
              : 'hover:text-[#1A1A1A]'
          }`}
        >
          Cricket
        </button>

        <button
          type="button"
          onClick={() => onSelectSport('basketball')}
          className={`transition-colors cursor-pointer ${
            activeSport === 'basketball' 
              ? 'text-[#1A1A1A] font-semibold border-b border-[#1A1A1A] pb-0.5' 
              : 'hover:text-[#1A1A1A]'
          }`}
        >
          Basketball
        </button>
      </nav>

      {/* Right: Cart Button */}
      <button 
        type="button"
        onClick={onOpenCart}
        className="relative flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#1A1A1A] hover:text-[#C51D34] transition-colors cursor-pointer p-1 shrink-0"
        aria-label="View Shopping Cart"
      >
        <span className="hidden sm:inline">Cart</span>
        <ShoppingBag className="w-5 h-5" strokeWidth={1.6} />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-[#C51D34] text-white text-[9px] sm:text-[10px] font-bold w-4 h-4 sm:w-[18px] sm:h-[18px] rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </header>
  );
}
