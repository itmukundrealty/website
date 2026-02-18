"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight } from "lucide-react";

import { Icons } from "./FeatureIcons";

export type FeatureItem = {
    icon: keyof typeof Icons;
    label: string;
};

interface FeaturesSectionProps {
    features: FeatureItem[];
    heading: string;
    variant?: "center" | "left";
}


const GALLERY_IMAGES = [
    "/images/rudrakshImages/10.webp",
    "/images/rudrakshImages/11.webp",
    "/images/rudrakshImages/12.webp",
    "/images/rudrakshImages/13.webp",
    "/images/rudrakshImages/14.webp",
    "/images/rudrakshImages/15.webp",
];

export default function FeaturesSection({ features, heading, variant = "center" }: FeaturesSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <section className="py-20 lg:py-32 bg-white font-host">
            <div className=" mx-auto px-6 lg:px-20 xl:px-54 ">
                {/* Header */}
                {variant === "center" ? (
                    <h2 className="text-4xl md:text-5xl lg:text-[68px] text-[#424244] font-light text-center mb-16 lg:mb-28 tracking-tight leading-tight">
                        {heading}
                    </h2>
                ) : (
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 lg:mb-28">
                        <h2 className="text-4xl md:text-5xl lg:text-[68px] text-[#424244] font-light tracking-tight leading-tight">
                            {heading}
                        </h2>
                        <button className="flex items-center gap-2 px-4 py-5 border border-[#0097DC] text-[#0097DC] hover:bg-[#0097DC]/10 transition-colors uppercase tracking-widest text-sm font-medium shrink-0">
                            <ArrowUpRight className="w-5 h-5 hover:rotate-45 transition-all duration-300" />
                            Explore Now
                        </button>
                    </div>
                )}

                {/* Features Grid */}
                <div className="grid grid-cols-1  md:grid-cols-4  gap-x-6 gap-y-10 lg:gap-x-12 xl:gap-x-20 lg:gap-y-16 mb-12 lg:mb-28">
                    {features.map((item, index) => {
                        const Icon = Icons[item.icon];
                        // Show all items on medium/large screens (md+).
                        // On mobile, show only the first 3 items unless expanded.
                        const isHiddenOnMobile = !isExpanded && index > 2;

                        return (
                            <div
                                key={index}
                                className={`group flex flex-row items-center gap-4 lg:gap-5 transition-all duration-300 ${isHiddenOnMobile ? "hidden md:flex" : "flex"
                                    }`}
                            >
                                {/* Icon Wrapper */}
                                <div className="w-10 h-10 flex items-center justify-center text-[#505153] group-hover:text-[#0097DC] transition-all duration-500 transform group-hover:scale-110 shrink-0">
                                    <Icon  />
                                </div>
                                {/* Text Label */}
                                <span className="text-[#505153] text-[15px] lg:text-[16px] leading-snug font-normal tracking-wide transition-colors duration-300 group-hover:text-[#424244]">
                                    {item.label}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* Read More / Read Less Button (Mobile Only) */}
                <div className="flex justify-start md:hidden mb-20">
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-[#424244] text-[15px] border-b border-[#424244] pb-0.5 hover:text-[#0097DC] hover:border-[#0097DC] transition-colors duration-300"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                </div>

                {/* Gallery Slider */}
                <div className="relative w-full overflow-hidden pb-20">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={40}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 6000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        className="features-swiper w-full aspect-21/9 rounded-sm overflow-visible!"
                    >
                        {GALLERY_IMAGES.map((img, index) => (
                            <SwiperSlide key={index}>
                                <div className="relative w-full h-full rounded-sm overflow-hidden  transition-transform duration-700 hover:scale-[1.02]">
                                    <Image
                                        src={img}
                                        alt={`Project Gallery ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                    <div className="absolute inset-0 bg-black/5"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <style jsx global>{`
            .features-swiper .swiper-pagination {
              bottom: -60px !important;
              display: flex !important;
              justify-content: center !important;
              width: 100% !important;
              left: 0 !important;
            }
            .features-swiper .swiper-pagination-bullet {
              width: 50px;
              height: 2px;
              background: #E5E7EB;
              border-radius: 0;
              opacity: 1;
              transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
              margin: 0 8px !important;
              cursor: pointer;
            }
            .features-swiper .swiper-pagination-bullet-active {
              background: #0097DC;
              width: 80px;
            }
          `}</style>
                </div>
            </div>
        </section>
    );
}
