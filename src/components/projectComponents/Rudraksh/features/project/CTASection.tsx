"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CTASection() {
    return (
        <section className="relative h-[100vh] w-full flex items-center  overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/rudrakshImages/image.png"
                    alt="Rudraksh Building"
                    fill
                    className="object-cover brightness-95 hidden lg:block"
                />
                <Image
                    src="/images/rudrakshImages/ctaBg.webp"
                    alt="Rudraksh Building"
                    fill
                    className="object-cover brightness-95 lg:hidden"
                />
                {/* Gradient Overlay for better text readability */}
                {/* <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent"></div> */}
            </div>

            {/* Content */}
            <div className="px-6 lg:px-24 xl:px-54 relative z-10">
                <div className="max-w-full text-left">
                    <h2 className="text-5xl lg:text-7xl font-medium text-white mb-4 leading-tight">
                        Where Luxury <br />
                        Finds Form
                    </h2>
                    <p className="text-3xl lg:text-4xl font-thin text-white/90 mb-10 tracking-wide">
                        Built for Enduring Value
                    </p>

                    <Link href="/project-enquire?project=rudraksh" className="bg-white text-[#0097DC] px-10 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
                        Contact Us
                    </Link>
                </div>

            </div>

            {/* Bottom bar decorative */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20"></div>
        </section>
    );
}
