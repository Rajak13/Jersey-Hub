import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { NEPAL_REGIONS } from '../data/sportsData';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onProceedToCheckout }) {
  if (!isOpen) return null;

  const [selectedRegion, setSelectedRegion] = useState(NEPAL_REGIONS[0].id);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponMessage, setCouponMessage] = useState('');

  // Calculations
  const subtotal = cartItems.reduce((acc, item) => {
    const itemTotal = (item.jersey.price + (item.customization?.customFee || 0)) * item.quantity;
    return acc + itemTotal;
  }, 0);

  const activeRegion = NEPAL_REGIONS.find(r => r.id === selectedRegion) || NEPAL_REGIONS[0];
  const deliveryFee = subtotal >= 4000 ? 0 : activeRegion.fee;
  const finalTotal = Math.max(0, subtotal + deliveryFee - discountAmount);

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'NANTIO10' || couponCode.toUpperCase() === 'JERSEYHUB') {
      const discount = Math.round(subtotal * 0.1);
      setDiscountAmount(discount);
      setCouponMessage(`10% discount applied (-रू ${discount.toLocaleString()})`);
    } else {
      setCouponMessage('Invalid code. Try "NANTIO10" or "JERSEYHUB"');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/40 backdrop-blur-xs animate-fade-in font-body">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-6">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-black/[0.06]">
          
          {/* Header */}
          <div className="p-6 border-b border-black/[0.06] flex items-center justify-between font-heading">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-4 h-4 text-[#1A1A1A]" />
              <h2 className="font-semibold text-base text-[#1A1A1A]">
                Your bag ({cartItems.reduce((acc, i) => acc + i.quantity, 0)})
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full hover:bg-[#F5F4F0] text-[#666666] hover:text-[#1A1A1A] flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-14 h-14 rounded-full bg-[#F5F4F0] flex items-center justify-center text-[#999999] mb-4">
                  <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading font-medium text-base text-[#1A1A1A]">Your bag is empty</h3>
                <p className="text-[13px] text-[#888888] max-w-xs mt-1 mb-6">
                  Explore our authentic Football, Cricket, and Basketball kits to find your match day gear.
                </p>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#1A1A1A] text-white font-heading text-[12px] font-medium cursor-pointer hover:bg-[#333333] transition-colors"
                >
                  Start shopping
                </button>
              </div>
            ) : (
              cartItems.map((item, index) => {
                const itemUnitTotal = item.jersey.price + (item.customization?.customFee || 0);

                return (
                  <div 
                    key={`${item.jersey.id}-${item.size}-${index}`}
                    className="p-3.5 bg-[#FAFAF8] rounded-xl border border-black/[0.04] flex gap-3.5 items-center justify-between"
                  >
                    <img 
                      src={item.jersey.image} 
                      alt={item.jersey.name} 
                      className="w-14 h-14 rounded-lg object-cover bg-neutral-100 shrink-0"
                    />

                    <div className="flex-1 min-w-0 font-body">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-[13px] font-medium text-[#1A1A1A] truncate font-heading">{item.jersey.name}</h4>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(index)}
                          className="text-[#999999] hover:text-[#C51D34] transition-colors p-1 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2 text-[11px] text-[#666666] my-1 font-heading">
                        <span>Size: {item.size}</span>
                        {item.customization?.customName && (
                          <span className="text-[#C51D34] font-medium">
                            • {item.customization.customName} #{item.customization.customNumber}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[13px] font-semibold text-[#1A1A1A] font-heading">
                          रू {(itemUnitTotal * item.quantity).toLocaleString()}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 bg-white px-2 py-0.5 rounded-full border border-black/[0.06] font-heading">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                            className="text-xs text-[#666666] hover:text-[#1A1A1A] cursor-pointer p-0.5"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-medium text-[#1A1A1A]">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                            className="text-xs text-[#666666] hover:text-[#1A1A1A] cursor-pointer p-0.5"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 bg-white border-t border-black/[0.06] space-y-3.5">
              
              {/* Delivery Zone Selector */}
              <div className="font-heading">
                <label className="text-[11px] font-medium text-[#888888] block mb-1">
                  Delivery destination (Nepal)
                </label>
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full text-xs font-medium px-3 py-2 rounded-lg bg-[#FAFAF8] border border-black/[0.06] outline-none focus:border-[#1A1A1A] cursor-pointer text-[#1A1A1A]"
                >
                  {NEPAL_REGIONS.map((region) => (
                    <option key={region.id} value={region.id}>
                      {region.name} (रू {subtotal >= 4000 ? 'Free' : region.fee})
                    </option>
                  ))}
                </select>
                {subtotal >= 4000 && (
                  <span className="text-[11px] font-medium text-[#003893] block mt-1">
                    Free nationwide delivery unlocked!
                  </span>
                )}
              </div>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2 font-heading">
                <input
                  type="text"
                  placeholder="Promo code (NANTIO10)"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 px-3 py-1.5 text-xs font-medium uppercase rounded-lg bg-[#FAFAF8] border border-black/[0.06] outline-none focus:border-[#1A1A1A]"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-lg bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading text-xs font-medium cursor-pointer"
                >
                  Apply
                </button>
              </form>
              {couponMessage && (
                <span className="text-[11px] font-medium text-[#C51D34] block -mt-1 font-heading">
                  {couponMessage}
                </span>
              )}

              {/* Price Breakdown */}
              <div className="space-y-1.5 text-xs text-[#666666] pt-2 border-t border-black/[0.04] font-heading">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1A1A1A]">रू {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-[#003893]">{deliveryFee === 0 ? 'FREE' : `रू ${deliveryFee}`}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-[#C51D34]">
                    <span>Discount</span>
                    <span>-रू {discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-semibold text-[#1A1A1A] pt-2 border-t border-black/[0.06]">
                  <span>Total</span>
                  <span>रू {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                type="button"
                onClick={() => onProceedToCheckout({ subtotal, deliveryFee, discountAmount, finalTotal, activeRegion })}
                className="w-full py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Proceed to checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
