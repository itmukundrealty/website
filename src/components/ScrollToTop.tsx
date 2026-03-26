"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getLenis } from "./SmoothScroll";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Reset native window scroll
    window.scrollTo(0, 0);

    // 2. Reset Lenis scroll instance if it exists
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname]);

  return null;
}
