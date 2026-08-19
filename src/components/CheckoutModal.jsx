import React, { useState } from 'react';
import { ArrowLeft, Lock, ShieldCheck } from 'lucide-react';
import { PAYMENT_METHODS } from '../data/sportsData';

export default function CheckoutModal({ isOpen, onClose, checkoutSummary, cartItems, onOrderComplete, onOrderFail }) {
  if (!isOpen || !checkoutSummary) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    province: 'Bagmati Province',
    city: 'Kathmandu',
    streetAddress: '',
    deliveryNotes: ''
  });

  const [selectedPayment, setSelectedPayment] = useState('esewa');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.phone.trim() || formData.phone.length < 9) errors.phone = 'Valid Nepal phone number is required';
    if (!formData.streetAddress.trim()) errors.streetAddress = 'Delivery address is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      const orderNumber = 'JH-' + Math.floor(100000 + Math.random() * 900000);
      onOrderComplete({
        orderNumber,
        customer: formData,
        paymentMethod: selectedPayment,
        summary: checkoutSummary,
        items: cartItems,
        date: new Date().toLocaleDateString('en-US', { dateStyle: 'medium' })
      });
    }, 1400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in overflow-y-auto font-body">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden border border-black/[0.06] shadow-2xl my-8">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-black/[0.06] flex items-center justify-between font-heading">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-[#666666] hover:text-[#1A1A1A] hover:border-black/25 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <h2 className="font-semibold text-lg text-[#1A1A1A]">
              Checkout & delivery
            </h2>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] text-[#666666] font-medium">
            <Lock className="w-3.5 h-3.5 text-emerald-600" />
            <span>256-bit Secure</span>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Form Details */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h3 className="font-heading font-medium text-xs text-[#888888] uppercase tracking-wider mb-4">
                Shipping details
              </h3>

              <div className="space-y-4 font-heading">
                <div>
                  <label className="text-[11px] font-medium text-[#666666] block mb-1">Full name *</label>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Suman Shrestha"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAF8] border text-xs font-medium outline-none transition-colors ${
                      formErrors.fullName ? 'border-[#C51D34]' : 'border-black/[0.06] focus:border-[#1A1A1A]'
                    }`}
                  />
                  {formErrors.fullName && <span className="text-[10px] text-[#C51D34] block mt-0.5">{formErrors.fullName}</span>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-medium text-[#666666] block mb-1">Mobile number *</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="98XXXXXXXX"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAF8] border text-xs font-medium outline-none transition-colors ${
                        formErrors.phone ? 'border-[#C51D34]' : 'border-black/[0.06] focus:border-[#1A1A1A]'
                      }`}
                    />
                    {formErrors.phone && <span className="text-[10px] text-[#C51D34] block mt-0.5">{formErrors.phone}</span>}
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#666666] block mb-1">Email (optional)</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="suman@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAF8] border border-black/[0.06] text-xs font-medium outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-medium text-[#666666] block mb-1">Province</label>
                    <select
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAF8] border border-black/[0.06] text-xs font-medium outline-none focus:border-[#1A1A1A] cursor-pointer text-[#1A1A1A]"
                    >
                      <option>Bagmati Province</option>
                      <option>Gandaki Province</option>
                      <option>Koshi Province</option>
                      <option>Madhesh Province</option>
                      <option>Lumbini Province</option>
                      <option>Karnali Province</option>
                      <option>Sudurpashchim Province</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-medium text-[#666666] block mb-1">City / District *</label>
                    <input
                      type="text"
                      name="city"
                      placeholder="Kathmandu / Pokhara"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAF8] border border-black/[0.06] text-xs font-medium outline-none focus:border-[#1A1A1A]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#666666] block mb-1">Street address / Landmark *</label>
                  <input
                    type="text"
                    name="streetAddress"
                    placeholder="New Baneshwor, Ward 10"
                    value={formData.streetAddress}
                    onChange={handleInputChange}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAF8] border text-xs font-medium outline-none transition-colors ${
                      formErrors.streetAddress ? 'border-[#C51D34]' : 'border-black/[0.06] focus:border-[#1A1A1A]'
                    }`}
                  />
                  {formErrors.streetAddress && <span className="text-[10px] text-[#C51D34] block mt-0.5">{formErrors.streetAddress}</span>}
                </div>
              </div>
            </div>

            {/* Payment Selector */}
            <div>
              <h3 className="font-heading font-medium text-xs text-[#888888] uppercase tracking-wider mb-3">
                Payment method
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-heading">
                {PAYMENT_METHODS.map((pm) => (
                  <label
                    key={pm.id}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-colors flex flex-col justify-between ${
                      selectedPayment === pm.id
                        ? 'bg-[#FAFAF8] border-[#1A1A1A]'
                        : 'bg-white border-black/[0.06] hover:bg-[#FAFAF8]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={pm.id}
                          checked={selectedPayment === pm.id}
                          onChange={() => setSelectedPayment(pm.id)}
                          className="accent-[#1A1A1A]"
                        />
                        <span className="text-xs font-medium text-[#1A1A1A]">{pm.name}</span>
                      </div>
                      <span className="text-[9px] font-medium px-2 py-0.5 rounded bg-black/[0.04] text-[#666666]">
                        {pm.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#888888] pl-5 leading-tight font-body">
                      {pm.description}
                    </p>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Review */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#FAFAF8] p-6 rounded-xl border border-black/[0.06] font-heading">
            <div>
              <h3 className="font-medium text-xs text-[#888888] uppercase tracking-wider pb-3 border-b border-black/[0.06] mb-4">
                Order review
              </h3>

              {/* Items */}
              <div className="space-y-3 max-h-48 overflow-y-auto no-scrollbar pr-1 mb-4">
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs py-1">
                    <div className="flex items-center gap-2 truncate pr-2">
                      <span className="font-medium text-[#888888]">{item.quantity}x</span>
                      <div className="truncate">
                        <span className="text-[#1A1A1A] font-medium block truncate">{item.jersey.name}</span>
                        <span className="text-[10px] text-[#888888]">Size {item.size}</span>
                      </div>
                    </div>
                    <span className="font-medium text-[#1A1A1A] shrink-0">
                      रू {((item.jersey.price + (item.customization?.customFee || 0)) * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2 text-xs text-[#666666] pt-3 border-t border-black/[0.06]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1A1A1A]">रू {checkoutSummary.subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-[#003893]">{checkoutSummary.deliveryFee === 0 ? 'FREE' : `रू ${checkoutSummary.deliveryFee}`}</span>
                </div>
                {checkoutSummary.discountAmount > 0 && (
                  <div className="flex justify-between text-[#C51D34]">
                    <span>Discount</span>
                    <span>-रू {checkoutSummary.discountAmount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-semibold text-[#1A1A1A] pt-3 border-t border-black/[0.06]">
                  <span>Total</span>
                  <span>रू {checkoutSummary.finalTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Place Order CTA */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full py-3.5 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer disabled:opacity-60"
              >
                {isProcessing ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <span>Place order • रू {checkoutSummary.finalTotal.toLocaleString()}</span>
                )}
              </button>
            </div>

          </div>

        </form>

      </div>
    </div>
  );
}
