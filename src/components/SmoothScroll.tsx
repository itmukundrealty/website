"use client";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

// --- Global Instance Management ---
let lenisInstance: Lenis | null = null;

export function getLenis() {
  return lenisInstance;
}

export function disableLenis(lenis?: Lenis) {
  // 1. Stop Lenis logic if it exists
  const targetLenis = lenis || lenisInstance;
  if (targetLenis) {
    targetLenis.stop();
  }

  // 2. ALWAYS lock CSS (This fixes your issue)
  document.body.style.overflow = "hidden";
  document.documentElement.style.overflow = "hidden";
  document.documentElement.setAttribute("data-lenis-prevent", "true");
}

export function enableLenis(lenis?: Lenis) {
  // 1. Start Lenis logic if it exists
  const targetLenis = lenis || lenisInstance;
  if (targetLenis) {
    targetLenis.start();
  }

  // 2. ALWAYS unlock CSS
  document.body.style.overflow = "";
  document.documentElement.style.overflow = "";
  document.documentElement.removeAttribute("data-lenis-prevent");
}

// --- Component ---
interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    // Sync ref to global variable
    if (lenisRef.current?.lenis) {
      lenisInstance = lenisRef.current.lenis;
    }
    return () => {
      lenisInstance = null;
    };
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
