"use client";
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export default function DesignedForMatters() {
    return (
        <section className="relative h-[600px] md:h-[700px] xl:h-[100vh] overflow-hidden " >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/LandingPageImg/designedBg.png" // Father and child with blue sky
                    alt="Father and child having fun"
                    fill
                    className="object-cover object-bottom hidden md:block" // Position to show faces clearly
                    priority
                />
                   <Image
                    src="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/LandingPageImg/mobDesignedBg.png" // Father and child with blue sky
                    alt="Father and child having fun"
                    fill
                    className="object-cover object-bottom md:hidden" // Position to show faces clearly
                    priority
                />
            </div>

            {/* Gradient Overlay for Text Readability - subtle left-to-right fade if needed, but keeping it minimal as per ref */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-transparent pointer-events-none" />

            {/* Content Container */}
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54 py-16 lg:py-0 lg:px-20 relative z-10 h-full flex lg:items-center">
                <div className="max-w-2xl text-white">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium mb-6 leading-tight tracking-tight">
                        Designed for <br /> What Matters
                    </h2>
                    <p className="text-white/90 text-lg md:text-3xl xl:text-4xl font-light   mb-10 max-w-xs md:max-w-lg">
                        A commitment to crafting environments for life's most meaningful moments.
                    </p>
                    <button className="px-6 py-3 md:px-6 md:py-4 bg-white text-[#0097DC] font-bold text-lg hover:bg-[#0C9CDE] hover:text-white transition-colors">
                      <Link href="/contact">
                      Contact Us
                      </Link>
                    </button>
                </div>
            </div>
        </section>
    );
}