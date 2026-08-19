import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Check } from 'lucide-react';
import { SPORTS_CONFIG as FALLBACK_SPORTS } from '../data/sportsData';

export default function JerseyCarousel({ activeSport, sportsCatalog, onQuickView, onAddToCart }) {
  const catalog = sportsCatalog || FALLBACK_SPORTS;
  const currentSport = catalog[activeSport] || catalog.football || FALLBACK_SPORTS.football;
  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [addedItemMap, setAddedItemMap] = useState({});
  const carouselRef = useRef(null);

  // Filter jerseys by category
  const filteredJerseys = selectedCategory === 'All'
    ? currentSport.jerseys
    : currentSport.jerseys.filter(j => j.category === selectedCategory);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleQuickAdd = (jersey) => {
    const size = selectedSizes[jersey.id] || 'L';
    onAddToCart(jersey, size);
    
    setAddedItemMap(prev => ({ ...prev, [jersey.id]: true }));
    setTimeout(() => {
      setAddedItemMap(prev => ({ ...prev, [jersey.id]: false }));
    }, 1400);
  };

  return (
    <section id="collection" className="w-full py-16 px-2 sm:px-4 md:px-6 relative z-20 font-body">
      
      {/* Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8">
        <h2 className="font-display font-normal text-3xl sm:text-4xl lg:text-[42px] text-[#1A1A1A] tracking-tight leading-tight">
          {currentSport.name} collection
        </h2>

        {/* Category Filters + Navigation Arrows */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {currentSport.categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#1A1A1A] text-white'
                    : 'text-[#888888] hover:text-[#1A1A1A] hover:bg-black/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="hidden sm:flex items-center gap-1.5 ml-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#888888] hover:text-[#1A1A1A] hover:border-black/25 transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-black/10 flex items-center justify-center text-[#888888] hover:text-[#1A1A1A] hover:border-black/25 transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Cards Filmstrip */}
      <div 
        ref={carouselRef}
        className="flex gap-5 overflow-x-auto no-scrollbar pb-4 scroll-smooth snap-x snap-mandatory"
      >
        {filteredJerseys.map((jersey) => {
          const isAdded = addedItemMap[jersey.id];

          return (
            <article
              key={jersey.id}
              className="w-[280px] sm:w-[320px] shrink-0 bg-white rounded-2xl overflow-hidden border border-black/[0.06] flex flex-col snap-start group select-none"
            >
              {/* Product Image */}
              <div 
                className="relative w-full aspect-square bg-[#F7F7F5] flex items-center justify-center overflow-hidden cursor-pointer"
                onClick={() => onQuickView(jersey)}
              >
                <img 
                  src={jersey.image} 
                  alt={jersey.name} 
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Product Info */}
              <div className="p-4 pt-3.5 flex flex-col gap-1.5 flex-1">
                <span className="text-[11px] font-medium text-[#999999] uppercase tracking-wide font-heading">
                  {jersey.team}
                </span>

                <h3 
                  className="font-heading font-semibold text-[14px] text-[#1A1A1A] leading-snug line-clamp-2 min-h-[40px] cursor-pointer hover:text-[#C51D34] transition-colors"
                  onClick={() => onQuickView(jersey)}
                >
                  {jersey.name}
                </h3>

                {/* Price + Action Row */}
                <div className="flex items-center justify-between mt-auto pt-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-[15px] font-semibold text-[#1A1A1A] font-heading">
                      रू {jersey.price.toLocaleString()}
                    </span>
                    {jersey.originalPrice && (
                      <span className="text-[12px] text-[#BBBBBB] line-through font-heading">
                        रू {jersey.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => handleQuickAdd(jersey)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                      isAdded 
                        ? 'bg-emerald-600 text-white' 
                        : 'border border-black/15 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]'
                    }`}
                    aria-label="Add to cart"
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
