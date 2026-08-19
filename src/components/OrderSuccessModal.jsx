import React, { useEffect } from 'react';
import { Printer, ArrowRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function OrderSuccessModal({ orderDetails, onClose }) {
  if (!orderDetails) return null;

  useEffect(() => {
    // Elegant celebratory confetti
    confetti({
      particleCount: 60,
      spread: 60,
      colors: ['#1A1A1A', '#C51D34', '#003893', '#D9D9D9'],
      origin: { y: 0.6 }
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in font-body">
      <div className="relative w-full max-w-lg bg-white rounded-2xl overflow-hidden shadow-2xl border border-black/[0.06] p-6 sm:p-8 flex flex-col items-center">
        
        {/* Minimal Check Icon */}
        <div className="w-12 h-12 rounded-full bg-[#FAFAF8] text-[#1A1A1A] border border-black/[0.06] flex items-center justify-center mb-4">
          <Check className="w-5 h-5" />
        </div>

        <span className="text-[11px] font-medium text-[#888888] font-heading tracking-wide mb-1">
          Order confirmed
        </span>

        <h2 className="font-display font-normal text-3xl sm:text-4xl text-[#1A1A1A] tracking-tight mb-2 text-center">
          Dhanyabad, {orderDetails.customer.fullName}!
        </h2>

        <p className="text-[13px] text-[#666666] max-w-sm mb-6 text-center leading-relaxed">
          Your matchday kit order has been recorded. Our Kathmandu dispatch team will contact you before delivery.
        </p>

        {/* High-End Printable Receipt */}
        <div className="w-full bg-[#FAFAF8] rounded-xl p-5 border border-black/[0.06] text-left text-xs space-y-3 mb-6 font-heading">
          <div className="flex justify-between border-b border-black/[0.04] pb-2">
            <span className="text-[#888888]">Order reference</span>
            <span className="font-semibold text-[#1A1A1A]">{orderDetails.orderNumber}</span>
          </div>

          <div className="flex justify-between border-b border-black/[0.04] pb-2">
            <span className="text-[#888888]">Destination</span>
            <span className="font-medium text-[#1A1A1A] text-right truncate max-w-[200px]">
              {orderDetails.customer.streetAddress}, {orderDetails.customer.city}
            </span>
          </div>

          <div className="flex justify-between border-b border-black/[0.04] pb-2">
            <span className="text-[#888888]">Payment method</span>
            <span className="font-medium text-[#1A1A1A] uppercase">{orderDetails.paymentMethod}</span>
          </div>

          <div className="flex justify-between font-semibold text-sm text-[#1A1A1A] pt-1">
            <span>Total payable</span>
            <span>रू {orderDetails.summary.finalTotal.toLocaleString()}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-2.5 font-heading">
          <button
            type="button"
            onClick={() => window.print()}
            className="flex-1 py-3 rounded-full border border-black/15 hover:bg-[#FAFAF8] text-[#1A1A1A] text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Print receipt</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Back to store</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
