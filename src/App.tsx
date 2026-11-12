/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  PhoneCall, 
  Copy, 
  Check, 
  ExternalLink, 
  Ticket, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Share2, 
  Info,
  Clock,
  Smartphone,
  CheckCircle2,
  AlertCircle,
  QrCode,
  Settings,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

// Official WhatsApp vector icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.42C8.92 7.42 8.71 7.49 8.52 7.7C8.33 7.91 7.78 8.42 7.78 9.48C7.78 10.54 8.55 11.56 8.66 11.71C8.77 11.86 10.15 14.07 12.33 14.94C14.13 15.66 14.5 15.52 14.92 15.48C15.34 15.44 16.27 14.93 16.47 14.37C16.67 13.81 16.67 13.33 16.61 13.23C16.55 13.13 16.39 13.07 16.14 12.95C15.89 12.83 14.66 12.22 14.43 12.14C14.2 12.06 14.03 12.02 13.87 12.27C13.71 12.52 13.24 13.07 13.1 13.23C12.96 13.39 12.82 13.41 12.57 13.29C12.32 13.17 11.52 12.9 10.57 12.05C9.83 11.39 9.33 10.57 9.18 10.32C9.03 10.07 9.16 9.94 9.28 9.82C9.39 9.71 9.53 9.53 9.66 9.38C9.79 9.23 9.83 9.12 9.91 8.96C9.99 8.8 9.95 8.66 9.89 8.54C9.83 8.42 9.35 7.24 9.15 6.76C8.95 6.29 8.76 6.36 8.61 6.36C8.47 6.36 8.31 6.35 8.15 6.35L9.11 7.42Z" />
    </svg>
  );
}

export default function App() {
  // Primary constants from user prompt
  const WHATSAPP_NUMBER = "+256758748743";
  const WHATSAPP_CLEAN_NUMBER = "256758748743";
  const DRAFT_MESSAGE = "I have booked a ticket Sir";
  const MOMO_DIAL_CODE = "*165*3#";
  const MOMO_TEL_URI = "tel:*165*3%23";
  const BOOKING_FEE = "5,000 UGX";

  // State
  const [merchantCode, setMerchantCode] = useState<string>(() => {
    return localStorage.getItem("jacks_trade_merchant_code") || "639201";
  });
  const [isEditingCode, setIsEditingCode] = useState(false);
  const [tempMerchantCode, setTempMerchantCode] = useState(merchantCode);
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [ticketId] = useState(() => `JT-${Math.floor(1000 + Math.random() * 9000)}`);
  const [hasClickedWhatsApp, setHasClickedWhatsApp] = useState(false);
  const [showFaq, setShowFaq] = useState(false);
  const [includeTicketInMsg, setIncludeTicketInMsg] = useState(false);

  // Computed WhatsApp Link
  const computedDraftText = includeTicketInMsg 
    ? `${DRAFT_MESSAGE} (Ref: ${ticketId})`
    : DRAFT_MESSAGE;
  const whatsappUrl = `https://wa.me/${WHATSAPP_CLEAN_NUMBER}?text=${encodeURIComponent(computedDraftText)}`;

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSaveMerchantCode = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = tempMerchantCode.trim() || "639201";
    setMerchantCode(clean);
    localStorage.setItem("jacks_trade_merchant_code", clean);
    setIsEditingCode(false);
  };

  return (
    <div className="min-h-screen bg-[#0b1120] text-slate-100 flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/60 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              <TrendingUp className="w-5 h-5 text-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-white flex items-center gap-1.5">
                Jack's Trade
              </span>
              <span className="text-[11px] block font-mono text-amber-400/90 tracking-wide uppercase">
                Early Access Pass
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 hover:bg-emerald-500/20 transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-400" />
              <span className="hidden sm:inline">WhatsApp Help:</span>
              <span className="font-mono">{WHATSAPP_NUMBER}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 flex flex-col items-center">
        
        {/* Verification banner alert when user clicked WhatsApp */}
        {hasClickedWhatsApp && (
          <div className="w-full max-w-xl mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 flex items-start gap-3 shadow-lg shadow-emerald-950/40 animate-in fade-in slide-in-from-top-2 duration-300">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <p className="font-semibold text-emerald-300">WhatsApp Chat Launched!</p>
              <p className="text-emerald-300/80 mt-0.5">
                Press send in WhatsApp to submit your message: <strong className="text-white">"{computedDraftText}"</strong>. If you made the 5,000 UGX payment, you can also paste your MTN MoMo transaction SMS as proof.
              </p>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-4xl items-start">
          
          {/* Main Booking Card (Left / Center) */}
          <div className="lg:col-span-7 bg-[#1e293b] border border-slate-700/80 rounded-2xl p-6 sm:p-8 text-center shadow-2xl shadow-black/60 relative overflow-hidden">
            {/* Subtle radial decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Launch Status Badge */}
            <div className="inline-flex items-center gap-1.5 bg-amber-400/10 text-amber-400 border border-amber-400/25 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Upcoming Launch</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              Jack's Trade
            </h1>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-md mx-auto">
              Reserve your early-access spot for the upcoming Jack's Trade app before public release.
            </p>

            {/* Merchant Payment Box */}
            <div className="bg-[#0f172a] border border-dashed border-amber-400/70 rounded-xl p-5 mb-6 text-center relative group">
              <div className="flex items-center justify-between mb-1.5 px-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Smartphone className="w-3 h-3 text-amber-400" />
                  MTN MoMo Merchant Code
                </span>
                <button
                  onClick={() => {
                    setTempMerchantCode(merchantCode);
                    setIsEditingCode(!isEditingCode);
                  }}
                  className="text-[11px] text-amber-400/80 hover:text-amber-300 flex items-center gap-1 transition-colors"
                  title="Change Merchant Code"
                >
                  <Settings className="w-3 h-3" />
                  <span>{isEditingCode ? "Cancel" : "Edit Code"}</span>
                </button>
              </div>

              {isEditingCode ? (
                <form onSubmit={handleSaveMerchantCode} className="my-2 flex gap-2">
                  <input
                    type="text"
                    value={tempMerchantCode}
                    onChange={(e) => setTempMerchantCode(e.target.value)}
                    placeholder="Enter Merchant Code"
                    className="flex-1 bg-slate-900 border border-amber-400/50 rounded-lg px-3 py-1.5 text-amber-300 font-mono text-center font-bold text-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="px-4 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold rounded-lg text-xs"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <div className="flex items-center justify-center gap-3 my-1">
                  <span className="font-mono text-2xl sm:text-3xl font-black text-amber-300 tracking-wider">
                    {merchantCode}
                  </span>
                  <button
                    onClick={() => handleCopy(merchantCode, 'merchant')}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1"
                    title="Copy Merchant Code"
                  >
                    {copiedType === 'merchant' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4 text-amber-400" />
                    )}
                    <span className="text-[10px] font-medium hidden sm:inline">
                      {copiedType === 'merchant' ? 'Copied' : 'Copy'}
                    </span>
                  </button>
                </div>
              )}

              <div className="inline-block mt-1 font-semibold text-xs sm:text-sm text-slate-200 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60">
                Booking Fee: <span className="text-amber-400 font-bold">{BOOKING_FEE}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {/* Step 1: Dial MoMo Pay directly */}
              <div className="relative">
                <a 
                  href={MOMO_DIAL_CODE ? MOMO_TEL_URI : "#"}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl font-bold text-sm sm:text-base bg-amber-400 hover:bg-amber-300 active:scale-[0.98] text-slate-950 shadow-lg shadow-amber-400/20 transition-all cursor-pointer"
                >
                  <PhoneCall className="w-5 h-5 text-slate-950 shrink-0" />
                  <span>Book Upcoming Jack's Trade</span>
                  <span className="text-xs bg-slate-950/15 px-2 py-0.5 rounded font-mono font-normal">
                    {MOMO_DIAL_CODE}
                  </span>
                </a>
              </div>

              {/* Step 2: Send payment confirmation on WhatsApp */}
              <div className="relative">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setHasClickedWhatsApp(true)}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 px-5 rounded-xl font-bold text-sm sm:text-base bg-[#22c55e] hover:bg-[#16a34a] active:scale-[0.98] text-white shadow-lg shadow-emerald-500/25 transition-all group cursor-pointer"
                >
                  <WhatsAppIcon className="w-5 h-5 text-white shrink-0 group-hover:scale-110 transition-transform" />
                  <span>Confirm Payment on WhatsApp</span>
                  <ExternalLink className="w-4 h-4 opacity-75 shrink-0" />
                </a>
              </div>
            </div>

            {/* Instructional Note */}
            <p className="text-xs text-slate-400 mt-4 leading-relaxed">
              Tap <strong className="text-amber-300">"Book"</strong> to dial <code className="bg-slate-800 px-1.5 py-0.5 rounded text-amber-400 font-mono">*165*3#</code>, enter the Merchant Code <strong className="text-white font-mono">{merchantCode}</strong>, then tap <strong className="text-emerald-400">Confirm Payment on WhatsApp</strong>.
            </p>

            {/* Quick copy bar for USSD and WhatsApp Number */}
            <div className="mt-5 pt-4 border-t border-slate-700/60 flex items-center justify-center gap-4 text-xs text-slate-400">
              <button 
                onClick={() => handleCopy(MOMO_DIAL_CODE, 'ussd')}
                className="hover:text-amber-300 flex items-center gap-1 transition-colors"
              >
                {copiedType === 'ussd' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'ussd' ? 'USSD Copied' : 'Copy USSD (*165*3#)'}</span>
              </button>
              <span className="text-slate-600">·</span>
              <button 
                onClick={() => handleCopy(WHATSAPP_NUMBER, 'number')}
                className="hover:text-emerald-400 flex items-center gap-1 transition-colors"
              >
                {copiedType === 'number' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedType === 'number' ? 'Number Copied' : `Copy ${WHATSAPP_NUMBER}`}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Ticket Preview & WhatsApp Message Inspector */}
          <div className="lg:col-span-5 space-y-5 w-full">
            
            {/* VIP Ticket Pass Card */}
            <div className="bg-gradient-to-b from-slate-800/90 to-slate-900 border border-amber-400/30 rounded-2xl p-5 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-700/70">
                <div className="flex items-center gap-2">
                  <Ticket className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    VIP Early Access Pass
                  </span>
                </div>
                <span className="font-mono text-xs text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                  {ticketId}
                </span>
              </div>

              <div className="py-4 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Release Stage</span>
                  <span className="text-white font-semibold">Priority Beta Batch #1</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Fee Required</span>
                  <span className="text-amber-400 font-mono font-bold">5,000 UGX</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Payment Channel</span>
                  <span className="text-slate-200">MTN MoMo Pay (*165*3#)</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">Confirmation</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <WhatsAppIcon className="w-3.5 h-3.5" /> WhatsApp Instant
                  </span>
                </div>
              </div>

              {/* Barcode Graphic simulation */}
              <div className="pt-3 border-t border-dashed border-slate-700/80 flex flex-col items-center">
                <div className="h-9 w-full max-w-[240px] flex items-center justify-between opacity-80 px-2">
                  {[4,2,6,1,3,5,2,4,7,2,3,5,1,4,6,2,5,3,4,2,7,1,3,5,2].map((height, i) => (
                    <div 
                      key={i} 
                      className="bg-amber-300/80 rounded-[1px]" 
                      style={{ width: (i % 3 === 0 ? '3px' : '1.5px'), height: `${height * 4 + 8}px` }} 
                    />
                  ))}
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-1.5 tracking-widest">
                  JACKS-TRADE-2026-EARLY-ACCESS
                </span>
              </div>
            </div>

            {/* WhatsApp Live Draft Preview Box */}
            <div className="bg-[#111c2e] border border-slate-700/80 rounded-2xl p-5 shadow-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <WhatsAppIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white">WhatsApp Draft Message</h3>
                    <p className="text-[11px] text-slate-400 font-mono">Recipient: {WHATSAPP_NUMBER}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleCopy(computedDraftText, 'draft')}
                  className="text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
                  title="Copy Message Text"
                >
                  {copiedType === 'draft' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copiedType === 'draft' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              {/* Chat bubble simulator */}
              <div className="bg-[#0b141a] rounded-xl p-3 border border-slate-800 relative">
                <div className="text-[11px] text-slate-500 mb-1 flex items-center justify-between">
                  <span>Chat with Jack's Trade</span>
                  <span className="text-[10px] text-emerald-500 font-mono">Verified Admin</span>
                </div>
                
                {/* Outgoing Message Bubble */}
                <div className="flex justify-end mt-2">
                  <div className="bg-[#005c4b] text-emerald-50 text-xs sm:text-sm px-3.5 py-2 rounded-2xl rounded-tr-xs shadow max-w-[90%]">
                    <p className="font-medium">{computedDraftText}</p>
                    <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-200/70 mt-1 font-mono">
                      <span>Just now</span>
                      <span>✓✓</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Optional reference toggle */}
              <div className="mt-3 flex items-center justify-between text-xs text-slate-400">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={includeTicketInMsg}
                    onChange={(e) => setIncludeTicketInMsg(e.target.checked)}
                    className="rounded border-slate-700 bg-slate-900 text-emerald-500 focus:ring-emerald-400"
                  />
                  <span>Attach Pass ID ({ticketId})</span>
                </label>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>Open Chat</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Step-by-Step FAQ accordion */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
              <button 
                onClick={() => setShowFaq(!showFaq)}
                className="w-full flex items-center justify-between text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-amber-400" />
                  How early access booking works
                </span>
                {showFaq ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {showFaq && (
                <div className="mt-3 pt-3 border-t border-slate-800/80 space-y-2.5 text-xs text-slate-400">
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold shrink-0 text-[11px]">1</span>
                    <p><strong className="text-slate-200">Dial *165*3#</strong>: This opens MTN MoMo Pay on your Ugandan SIM card.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-amber-400 flex items-center justify-center font-bold shrink-0 text-[11px]">2</span>
                    <p><strong className="text-slate-200">Enter Merchant Code</strong>: Provide <code className="text-amber-300 font-mono">{merchantCode}</code> and confirm payment of 5,000 UGX.</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-slate-800 text-emerald-400 flex items-center justify-center font-bold shrink-0 text-[11px]">3</span>
                    <p><strong className="text-slate-200">Notify WhatsApp</strong>: Click the button to send <strong className="text-white">"{DRAFT_MESSAGE}"</strong> to <strong className="text-emerald-400 font-mono">{WHATSAPP_NUMBER}</strong> for ticket issuance.</p>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>

      </main>

      {/* Floating WhatsApp Quick Action Button (Bottom Right) */}
      <aside aria-label="WhatsApp Support Link" className="fixed bottom-5 right-5 z-50">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setHasClickedWhatsApp(true)}
          className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl shadow-emerald-950/80 transition-all border border-emerald-400/40"
          title={`Chat with ${WHATSAPP_NUMBER}`}
        >
          <WhatsAppIcon className="w-6 h-6 shrink-0 group-hover:rotate-12 transition-transform" />
          <div className="text-left hidden sm:block">
            <div className="text-[11px] font-bold tracking-tight uppercase leading-none">Chat on WhatsApp</div>
            <div className="text-xs font-mono opacity-90">{WHATSAPP_NUMBER}</div>
          </div>
        </a>
      </aside>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-900/40 py-6 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Jack's Trade. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
            <span>Support: {WHATSAPP_NUMBER}</span>
            <span>·</span>
            <span>MTN MoMo Pay: *165*3#</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
