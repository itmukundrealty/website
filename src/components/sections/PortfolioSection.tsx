"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function PortfolioSection() {
  return (
    <section className="relative w-full h-[60vh] xl:h-[40vh] bg-white overflow-hidden flex items-center justify-center">

      {/* Container for Dots (Left Side) - Adjusted to fade out */}
      <div className="absolute top-0 bottom-0 left-[10%] w-[70%] pointer-events-none">
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
      <div className="absolute bottom-10 right-2 pointer-events-none z-0">
        <Image
          src="/icons/mukund.svg"
          alt="Abstract Shape"
          width={150}
          height={150}
          className="opacity-90 object-contain blur-sm"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-20 w-full h-full flex items-center justify-end z-10">
        {/* Right Content */}
        <div className="text-left flex flex-col  pt-4">
          <h2 className="text-[52px] leading-[1.1] text-[#333333] tracking-tight font-light">
            Explore
            <span className="font-semibold block text-[#333333]">Our Portfolio</span>
          </h2>

          <div className="mt-8">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 px-6 py-5 border border-[#38bdf8] text-[#0ea5e9] font-bold text-[15px] hover:bg-[#bae6fd]/10 transition-colors duration-300"
            >
              Explore our projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45 transition-all duration-300" strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
