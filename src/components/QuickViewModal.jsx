import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function QuickViewModal({ jersey, onClose, onAddToCart }) {
  if (!jersey) return null;

  const [selectedSize, setSelectedSize] = useState('L');
  const [customName, setCustomName] = useState('');
  const [customNumber, setCustomNumber] = useState('');
  const [wantsCustomization, setWantsCustomization] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const customPrintFee = wantsCustomization && (customName || customNumber) ? 350 : 0;
  const totalPrice = jersey.price + customPrintFee;

  const handleAdd = () => {
    onAddToCart(jersey, selectedSize, {
      customName: wantsCustomization ? customName.toUpperCase() : '',
      customNumber: wantsCustomization ? customNumber : '',
      customFee: customPrintFee
    });
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in font-body">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl flex flex-col md:flex-row max-h-[90vh] overflow-y-auto no-scrollbar">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white text-[#1A1A1A] border border-black/10 flex items-center justify-center transition-colors hover:bg-[#F5F4F0] cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Jersey Image */}
        <div className="md:w-1/2 p-6 flex items-center justify-center bg-[#F7F7F5] relative">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden flex items-center justify-center">
            <img 
              src={jersey.image} 
              alt={jersey.name} 
              className="w-full h-full object-cover"
            />

            {/* Custom Name / Number Overlay */}
            {wantsCustomization && (customName || customNumber) && (
              <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white font-heading">
                <span className="text-xl font-bold tracking-[0.15em] uppercase drop-shadow-md">
                  {customName || 'YOUR NAME'}
                </span>
                <span className="text-5xl font-black drop-shadow-lg mt-1">
                  {customNumber || '10'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Right: Controls */}
        <div className="md:w-1/2 p-6 sm:p-7 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-medium text-[#999999] uppercase tracking-wide font-heading block mb-1">
              {jersey.team}
            </span>

            <h2 className="font-heading font-semibold text-xl text-[#1A1A1A] leading-snug">
              {jersey.name}
            </h2>

            <p className="text-[12px] text-[#666666] mt-2 leading-relaxed font-normal">
              {jersey.description || 'Authentic matchwear kit with moisture-wicking technology.'}
            </p>

            {/* Size Selector */}
            <div className="my-5">
              <label className="text-[12px] font-medium text-[#888888] block mb-2 font-heading">
                Select size
              </label>
              <div className="flex items-center gap-2">
                {jersey.availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    className={`w-9 h-9 rounded-lg text-[12px] font-medium transition-colors cursor-pointer flex items-center justify-center font-heading ${
                      selectedSize === size
                        ? 'bg-[#1A1A1A] text-white'
                        : 'text-[#666666] hover:bg-[#F5F4F0] border border-black/[0.06]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Name Checkbox */}
            <div className="p-3.5 rounded-xl bg-[#FAFAF8] border border-black/[0.06] mb-4 font-heading">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-[12px] font-medium text-[#1A1A1A]">
                  Add custom name & number <span className="text-[#C51D34]">+रू 350</span>
                </span>
                <input 
                  type="checkbox" 
                  checked={wantsCustomization} 
                  onChange={(e) => setWantsCustomization(e.target.checked)}
                  className="w-4 h-4 rounded accent-[#1A1A1A] cursor-pointer"
                />
              </label>

              {wantsCustomization && (
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-black/[0.04]">
                  <div>
                    <label className="text-[10px] font-medium text-[#888888] block mb-1">Name</label>
                    <input 
                      type="text" 
                      maxLength={14}
                      placeholder="SAGAR"
                      value={customName}
                      onChange={(e) => setCustomName(e.target.value.toUpperCase())}
                      className="w-full px-2.5 py-1.5 text-xs font-medium bg-white border border-black/[0.06] rounded-lg uppercase tracking-wide outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-medium text-[#888888] block mb-1">Number</label>
                    <input 
                      type="number" 
                      min={0}
                      max={99}
                      placeholder="7"
                      value={customNumber}
                      onChange={(e) => setCustomNumber(e.target.value)}
                      className="w-full px-2.5 py-1.5 text-xs font-medium bg-white border border-black/[0.06] rounded-lg outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action */}
          <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between font-heading">
            <div>
              <span className="text-[11px] text-[#999999] block">Total</span>
              <span className="text-xl font-semibold text-[#1A1A1A]">
                रू {totalPrice.toLocaleString()}
              </span>
            </div>

            <button
              type="button"
              onClick={handleAdd}
              disabled={isAdded}
              className={`px-7 py-3 rounded-full text-xs font-medium flex items-center gap-2 transition-colors cursor-pointer ${
                isAdded 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-[#1A1A1A] hover:bg-[#333333] text-white'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added</span>
                </>
              ) : (
                <span>Add to bag</span>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
