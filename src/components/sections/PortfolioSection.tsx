"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="relative w-full h-[60vh] xl:h-[40vh] bg-white overflow-hidden flex items-center justify-center">

      {/* Container for Dots (Left Side) - Adjusted to fade out */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[70%] pointer-events-none hidden md:block">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#cbd5e1 1.5px, transparent 1.5px)",
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Blue Feature Shape (Bottom Right) */}
      <div className="absolute top-20 md:bottom-10 right-2 pointer-events-none z-0">
        <Image
          src="/icons/mukund.svg"
          alt="Abstract Shape"
          width={150}
          height={150}
          className="opacity-90 h-20 w-20 md:h-40 md:w-40 object-contain blur-sm"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 w-full h-full flex items-center md:justify-end z-10">
        {/* Right Content */}
        <div className="text-left flex flex-col w-full md:w-auto pt-4">
          <h2 className="text-3xl lg:text-6xl leading-[1.1] text-[#505153] tracking-tight font-light">
            Explore
            <span className="font-medium block text-[#505153]">Our Portfolio</span>
          </h2>

          <div className="mt-8 w-full md:w-auto">
            <Link
              href="/projects"
              className="group flex w-full justify-center md:inline-flex md:w-auto items-center gap-3 px-4 py-3 md:px-6 md:py-5 border border-[#0097DC] text-[#0097DC] font-bold text-[16px] hover:bg-[#0097DC]/10 transition-colors duration-300"
            >
              Explore our Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45 transition-all duration-300" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
