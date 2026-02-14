"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Link from "next/link";

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "24x7 Cloud Kitchen",
        subtitle: "THE FIRST OF IT'S KIND IN MANGALURU",
        image: "/images/rudrakshImages/2.webp",
    },
    {
        id: "wellness",
        label: "Wellness Club",
        subtitle: "",
        image: "/images/rudrakshImages/6.webp",
    },
    {
        id: "lobby",
        label: "Grand Entrance Lobby",
        subtitle: "",
        image: "/images/rudrakshImages/7.webp",
    },
    {
        id: "pool",
        label: "People Spaces",
        subtitle: "",
        image: "/images/rudrakshImages/8.webp",
    },
    {
        id: "gym",
        label: "Fitness & Activity Zones",
        subtitle: "",
        image: "/images/rudrakshImages/9.webp",
    },
    {
        id: "sky-deck",
        label: "Rooftop Infinity\nSwimming Pool",
        subtitle: "",
        image: "/images/rudrakshImages/3.webp",
    }
];

export default function AmenitiesSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const desktopSwiperRef = useRef<any>(null);
    const mobileSwiperRef = useRef<any>(null);

    const handleSlideChange = (swiper: any) => {
        const newIndex = swiper.realIndex;
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
            if (swiper === desktopSwiperRef.current && mobileSwiperRef.current) {
                if (mobileSwiperRef.current.realIndex !== newIndex) {
                    mobileSwiperRef.current.slideToLoop(newIndex);
                }
            } else if (swiper === mobileSwiperRef.current && desktopSwiperRef.current) {
                if (desktopSwiperRef.current.realIndex !== newIndex) {
                    desktopSwiperRef.current.slideToLoop(newIndex);
                }
            }
        }
    };

    const handlePrev = () => {
        if (desktopSwiperRef.current) desktopSwiperRef.current.slidePrev();
        else if (mobileSwiperRef.current) mobileSwiperRef.current.slidePrev();
    };

    const handleNext = () => {
        if (desktopSwiperRef.current) desktopSwiperRef.current.slideNext();
        else if (mobileSwiperRef.current) mobileSwiperRef.current.slideNext();
    };

    const currentAmenity = AMENITIES_DATA[activeIndex] || AMENITIES_DATA[0];

    return (
        <section className="relative bg-white font-host overflow-hidden lg:min-h-[90vh] flex flex-col">
            {/* --- Desktop Flush Image --- */}
            <div className="hidden lg:block lg:absolute lg:right-0 lg:top-0 lg:w-1/2 lg:h-full z-0">
                <Swiper
                    onSwiper={(swiper) => (desktopSwiperRef.current = swiper)}
                    modules={[Navigation, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect={'fade'}
                    fadeEffect={{ crossFade: true }}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    onSlideChange={handleSlideChange}
                    className="w-full h-full"
                >
                    {AMENITIES_DATA.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className="relative w-full h-full">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* --- Content --- */}
            <div className="w-full px-6 lg:px-20 xl:px-54 relative z-10 flex-1 flex flex-col justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-12">
                    <div className="lg:col-span-6 py-12 lg:py-0">
                        {/* I removed space-y-8 lg:space-y-12 from this parent 
                           and used flex-col with explicit justification to control spacing better 
                        */}
                        <div className="flex flex-col h-full justify-center gap-8 lg:gap-12">
                            
                            <div className="space-y-6 lg:space-y-8">
                                <div className="space-y-4">
                                    <span className="text-gray-400 text-[10px] tracking-[0.4em] uppercase font-bold block">
                                        Amenities
                                    </span>
                                    
                                    {/* FIX: Added a fixed min-height container.
                                      lg:min-h-[320px] reserves space for ~3 lines of large text + subtitle.
                                      justify-center keeps it vertically centered in that reserved space.
                                      items-start keeps text aligned left.
                                    */}
                                    <div className="flex flex-col justify-center items-start min-h-[150px] lg:min-h-[320px] gap-4">
                                        <h2 className="text-5xl lg:text-6xl  text-[#424244] font-light leading-[1.1] max-w-md whitespace-pre-line">
                                            {currentAmenity.label}
                                        </h2>
                                        
                                        {/* The subtitle is conditionally rendered or always reserves space 
                                          to prevent jump if subtitle is empty 
                                        */}
                                        <p className="text-[#0097DC] text-[13px] font-bold tracking-widest uppercase min-h-[20px]">
                                            {currentAmenity.subtitle}
                                        </p>
                                    </div>
                                </div>

                                <Link href="/project-enquire" className="group flex items-center gap-3 px-6 py-3 lg:px-6 lg:py-5 border border-[#0097DC]/30 text-[#0097DC]  hover:bg-[#0097DC] hover:text-white duration-300 transition-all uppercase tracking-widest text-[11px] font-bold w-fit">
                                    <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                                    Enquire Now
                                </Link>
                            </div>

                            {/* --- Mobile Image --- */}
                            <div className="lg:hidden w-full h-[50vh] relative rounded-sm overflow-hidden">
                                <div className="absolute inset-0 bg-gray-100 animate-pulse" />
                                <Swiper
                                    onSwiper={(swiper) => (mobileSwiperRef.current = swiper)}
                                    modules={[Navigation, Autoplay, EffectFade]}
                                    effect={'fade'}
                                    fadeEffect={{ crossFade: true }}
                                    loop={true}
                                    onSlideChange={handleSlideChange}
                                    className="w-full h-full"
                                >
                                    {AMENITIES_DATA.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={item.image}
                                                    alt={item.label}
                                                    fill
                                                    className="object-cover"
                                                    priority
                                                />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Controls Container */}
                            <div className="flex items-center gap-12 pt-4">
                                <div className="text-gray-400 text-sm font-medium tracking-widest min-w-[70px]">
                                    {String(activeIndex + 1).padStart(2, '0')} {"—"} {String(AMENITIES_DATA.length).padStart(2, '0')}
                                </div>

                                <div className="flex gap-4">
                                    <button
                                        onClick={handlePrev}
                                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 hover:border-[#0097DC] hover:text-[#0097DC] transition-all bg-white"
                                    >
                                        <ArrowLeft className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                                    </button>
                                    <button
                                        onClick={handleNext}
                                        className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#0097DC] flex items-center justify-center text-[#0097DC] hover:bg-[#0097DC] hover:text-white transition-all bg-white"
                                    >
                                        <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6" strokeWidth={1.5} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}