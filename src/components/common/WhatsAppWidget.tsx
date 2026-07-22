"use client";

import React, { useState, useEffect } from "react";

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://wa.me/917090933700"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed left-6 bottom-6 md:left-8 md:bottom-8 z-50 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      aria-label="Chat on WhatsApp"
    >
      {/* Pulsing Outer Ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping group-hover:animate-none -z-10" />

      {/* WhatsApp SVG Icon */}
      <svg
        viewBox="0 0 24 24"
        className="w-7 h-7 fill-current transition-transform duration-300"
        aria-hidden="true"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.966C16.59 1.988 14.113.965 11.5.965c-5.44 0-9.862 4.37-9.866 9.801-.002 1.84.482 3.636 1.402 5.218l-.927 3.385 3.473-.909zM19.1 14.896c-.369-.185-2.183-1.077-2.522-1.2-.338-.124-.585-.185-.831.185-.246.369-.953 1.2-1.168 1.447-.215.247-.431.277-.8.092-.369-.185-1.558-.574-2.97-1.833-1.098-.98-1.84-2.19-2.055-2.56-.215-.369-.023-.569.162-.753.167-.165.369-.431.554-.646.186-.216.247-.369.369-.615.123-.246.062-.462-.031-.646-.093-.185-.831-2.002-1.139-2.742-.3-.724-.606-.627-.831-.639-.215-.011-.462-.015-.708-.015s-.646.092-.985.462c-.338.369-1.292 1.262-1.292 3.078s1.323 3.57 1.508 3.816c.185.246 2.6 3.97 6.3 5.568.88.38 1.567.607 2.1.779.884.28 1.69.24 2.327.145.71-.107 2.183-.892 2.491-1.754.308-.862.308-1.6.216-1.754-.092-.154-.338-.246-.708-.431z" />
      </svg>

      {/* Premium subtle tooltip */}
      <span className="absolute left-16 bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-md opacity-0 scale-95 origin-left translate-x-2 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
}
