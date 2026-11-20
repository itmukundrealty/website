"use client";

import React from "react";

export function getLenis() {
  return null;
}

export function disableLenis() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }
}

export function enableLenis() {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }
}

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return <>{children}</>;
}

