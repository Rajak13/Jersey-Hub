import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { RETRO_ARCHIVES as FALLBACK_ARCHIVES } from '../data/sportsData';

export default function RetroArchive({ sportsCatalog, onAddToCart, onQuickView }) {
  const archives = sportsCatalog?.retroArchives || FALLBACK_ARCHIVES;
  const [addedMap, setAddedMap] = useState({});

  const handleAdd = (item) => {
    onAddToCart({
      id: item.id,
      name: item.title,
      team: item.era,
      price: item.price,
      image: item.image,
      availableSizes: ['S', 'M', 'L', 'XL']
    }, 'L');

    setAddedMap(prev => ({ ...prev, [item.id]: true }));
    setTimeout(() => setAddedMap(prev => ({ ...prev, [item.id]: false })), 1500);
  };

  return (
    <section id="retro-archives" className="w-full py-16 px-2 sm:px-4 md:px-6 relative z-20 font-body">
      
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-[11px] font-medium text-[#999999] tracking-wide block mb-2 font-heading">
          Heritage vault
        </span>
        <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#1A1A1A] tracking-tight leading-tight">
          Retro & concept kits
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {archives.map((item) => {
          const isAdded = addedMap[item.id];

          return (
            <article 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-black/[0.06] flex flex-col select-none"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] bg-[#F7F7F5] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={`${item.title} — ${item.era}`}
                  loading="lazy"
                  decoding="async" 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <span className="text-[10px] font-medium text-[#999999] uppercase tracking-wide font-heading mb-1">
                  {item.era}
                </span>

                <h3 className="font-heading font-semibold text-[15px] text-[#1A1A1A] leading-snug mb-2">
                  {item.title}
                </h3>

                <p className="text-[12px] text-[#888888] leading-relaxed mb-4 flex-1">
                  {item.story || 'Vintage retro throwback edition.'}
                </p>

                {/* Price + Action */}
                <div className="flex items-center justify-between pt-3 border-t border-black/[0.04]">
                  <span className="text-[15px] font-semibold text-[#1A1A1A] font-heading">
                    रू {item.price.toLocaleString()}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleAdd(item)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isAdded 
                        ? 'bg-emerald-600 text-white' 
                        : 'border border-black/15 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]'
                    }`}
                    aria-label={`Add ${item.title} to cart`}
                  >
                    {isAdded ? (
                      <Check className="w-3.5 h-3.5" />
                    ) : (
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

            </article>
          );
        })}
      </div>

    </section>
  );
}
