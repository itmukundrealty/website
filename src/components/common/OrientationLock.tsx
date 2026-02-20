"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OrientationLock() {
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Logic to target Tablets ONLY:
      // standard iPads: 768px - 1024px
      // iPad Pro 12.9: 1024px width in portrait
      // Mobile phones usually < 768px width
      // Desktops usually > 1024px width OR are landscape

      const width = window.innerWidth;
      const height = window.innerHeight;
      const isPortrait = height > width;

      // Match Tablet Width Range (inclusive of common tablet sizes)
      // Min: 768px (iPad Mini/Air vertical)
      // Max: 1025px (iPad Pro vertical / larger tablets)
      const isTabletWidth = width >= 768 && width <= 1025;

      // Show overlay ONLY if it's a tablet in portrait mode
      if (isTabletWidth && isPortrait) {
        setShowOverlay(true);
      } else {
        setShowOverlay(false);
      }
    };

    // Check on mount
    checkOrientation();

    // Check on resize (rotation triggers resize)
    window.addEventListener("resize", checkOrientation);
    return () => window.removeEventListener("resize", checkOrientation);
  }, []);

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#1a2b25] px-6 text-center">
      <motion.div
        animate={{ rotate: 90 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
          ease: "easeInOut",
          repeatDelay: 0.5,
        }}
        className="mb-8"
      >
        {/* Smartphone/Tablet Icon */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e5e5e5" // Light grey/white
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      </motion.div>

      <h2 className="text-xl font-medium tracking-widest text-[#e5e5e5] uppercase">Please rotate your device</h2>
      <p className="mt-4 text-sm text-[#e5e5e5]/60 tracking-wider uppercase">to landscape mode</p>
    </div>
  );
}
