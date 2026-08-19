import React from 'react';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer className="w-full pt-16 pb-10 px-4 sm:px-8 text-xs text-neutral-400 relative z-20 font-body bg-[#111111]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Col 1: Brand */}
        <div className="space-y-3 md:col-span-1">
          <div className="flex items-center gap-2.5">
            <img src="images/logo.webp" alt="Logo" className="w-7 h-7 object-contain brightness-125" />
            <span className="font-heading font-medium text-xs text-white uppercase tracking-wider">Jersey Hub Nepal</span>
          </div>
          <p className="text-neutral-400 leading-relaxed text-[12px]">
            Premier sportswear and jersey destination in Nepal. Club, national, and retro kits delivered nationwide.
          </p>
        </div>

        {/* Col 2: Categories */}
        <div className="space-y-2 font-heading">
          <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-3">Archives</h4>
          <ul className="space-y-2 text-[12px] text-neutral-400">
            <li><a href="#collection" className="hover:text-white transition-colors">Football Matchwear</a></li>
            <li><a href="#collection" className="hover:text-white transition-colors">Nepal Rhinos Cricket</a></li>
            <li><a href="#collection" className="hover:text-white transition-colors">NBA Classics</a></li>
            <li><a href="#jersey-lab" className="hover:text-white transition-colors">Custom Printing Studio</a></li>
          </ul>
        </div>

        {/* Col 3: Contact */}
        <div className="space-y-2 font-heading">
          <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider mb-3">Information</h4>
          <ul className="space-y-2 text-[12px] text-neutral-400">
            <li>Kathmandu Hub, Bagmati, Nepal</li>
            <li>+977 9801234567</li>
            <li>orders@jerseyhubnepal.com</li>
          </ul>
        </div>

        {/* Col 4: Payments & Store Manager Link */}
        <div className="space-y-3 font-heading">
          <h4 className="text-[11px] font-semibold text-white uppercase tracking-wider">Payment Options</h4>
          <div className="flex flex-wrap gap-1.5 text-[10px] text-neutral-300 mb-3">
            <span className="px-2.5 py-1 rounded bg-[#222222] border border-white/10">eSewa</span>
            <span className="px-2.5 py-1 rounded bg-[#222222] border border-white/10">Khalti</span>
            <span className="px-2.5 py-1 rounded bg-[#222222] border border-white/10 text-white">Fonepay QR</span>
            <span className="px-2.5 py-1 rounded bg-[#222222] border border-white/10 text-white">COD</span>
          </div>

          {/* Discrete Store Owner Admin Trigger */}
          {onOpenAdmin && (
            <button
              type="button"
              onClick={onOpenAdmin}
              className="text-[11px] text-neutral-500 hover:text-white underline transition-colors cursor-pointer block pt-2"
            >
              Store Owner Portal Login →
            </button>
          )}
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
        <div className="font-heading">
          © {new Date().getFullYear()} Jersey Hub Nepal. All rights reserved.
        </div>

        {/* Nantio Mark */}
        <a 
          href="https://nantio.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[11px] text-neutral-400 hover:text-white transition-colors"
        >
          <span>Crafted by</span>
          <span className="font-nantio text-xs tracking-widest uppercase font-bold text-white">NANTIO</span>
        </a>
      </div>
    </footer>
  );
}
