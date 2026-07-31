"use client";
import React, { useState, useEffect } from "react";
import Script from "next/script";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function CookieConsentModal() {
  const [showBanner, setShowBanner] = useState(false);
  const [consentChoice, setConsentChoice] = useState<string | null>(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("mukund_cookie_consent");
    if (!savedConsent) {
      setShowBanner(true);
    } else {
      setConsentChoice(savedConsent);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("mukund_cookie_consent", "accepted");
    setConsentChoice("accepted");
    setShowBanner(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("mukund_cookie_consent", "necessary");
    setConsentChoice("necessary");
    setShowBanner(false);
  };

  const handleClose = () => {
    localStorage.setItem("mukund_cookie_consent", "necessary");
    setConsentChoice("necessary");
    setShowBanner(false);
  };

  // Microsoft Clarity ID can be set via env var or defaults to a placeholder
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID || "vqgg3ms8f4";

  return (
    <>
      {/* Conditionally inject Microsoft Clarity script if and only if accepted */}
      {consentChoice === "accepted" && (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}

      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] w-[calc(100%-2rem)] max-w-[480px] bg-white p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-gray-100 flex flex-col gap-6"
            style={{ fontFamily: "var(--font-host-grotesk), sans-serif" }}
          >
            {/* Header and Close Button */}
            <div className="flex justify-between items-start">
              <h2 className="text-[22px] md:text-[24px] font-semibold text-[#1a1a1a] leading-tight font-sans">
                Cookie Policy
              </h2>
              <button
                onClick={handleClose}
                aria-label="Close Cookie Banner"
                className="text-gray-400 hover:text-gray-600 transition-colors p-1 cursor-pointer text-xl"
              >
                <X size={20} />
              </button>
            </div>

            {/* Description */}
            <p className="text-[14px] leading-relaxed text-[#505153] font-sans">
              We use cookies to give you the best experience on our website. By continuing, you&apos;re agreeing to our use of cookies. For more information read our{" "}
              <Link href="/privacy-policy" className="underline hover:text-[#0097DC] transition-colors">
                Privacy Policy
              </Link>
              .
            </p>

            {/* Actions (Side by Side) */}
            <div className="flex flex-row gap-4 items-center mt-2">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-none text-center cursor-pointer transition-colors duration-300 bg-[#0097DC] text-white hover:bg-[#0085C0]"
              >
                Accept All
              </button>
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 py-3 text-xs md:text-sm font-bold uppercase tracking-wider rounded-none text-center cursor-pointer transition-colors duration-300 bg-transparent border border-[#0097DC] text-[#0097DC] hover:bg-[#0097DC]/5"
              >
                Accept Necessary
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
