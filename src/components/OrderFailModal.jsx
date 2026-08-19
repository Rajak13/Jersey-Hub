import React from 'react';
import { AlertCircle, RefreshCw, X } from 'lucide-react';

export default function OrderFailModal({ errorMessage, onRetry, onClose }) {
  if (!errorMessage) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-fade-in font-body">
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl border border-black/[0.06] p-6 text-center flex flex-col items-center">
        
        {/* Fail Icon */}
        <div className="w-12 h-12 rounded-full bg-red-50 text-[#C51D34] flex items-center justify-center mb-4">
          <AlertCircle className="w-6 h-6" />
        </div>

        <span className="text-[11px] font-medium text-[#C51D34] font-heading tracking-wide mb-1 uppercase">
          Transaction status
        </span>

        <h2 className="font-display font-normal text-2xl text-[#1A1A1A] tracking-tight mb-2">
          Unable to place order
        </h2>

        <p className="text-[12px] text-[#666666] max-w-xs mb-6 leading-relaxed">
          {errorMessage}
        </p>

        {/* Action Buttons */}
        <div className="w-full flex gap-2.5 font-heading">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-2.5 rounded-full border border-black/15 hover:bg-[#FAFAF8] text-[#1A1A1A] text-xs font-medium cursor-pointer transition-colors"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={onRetry}
            className="flex-1 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-[#333333] text-white text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Try again</span>
          </button>
        </div>

      </div>
    </div>
  );
}
