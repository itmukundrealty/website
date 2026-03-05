"use client";
import React, { useState, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// --- Data ---
const testimonials = [
    {
        id: 1,
        thumbnail: "",
        videoUrl: "#", // Placeholder
        iframeSrc: "https://www.youtube.com/embed/R9MQVfJkNfI",
        name: "Dr. Prajwal K Rao & Dr. Shruthi J's",
        role: "Proud Owner at Kailash High Living Luxury Apartments"
    },
    {
        id: 2,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/YTbDJpuQIvw?si=vBjMx8zK1Nx8SQxK",
        name: "Prajwal & Poornima",
        role: "Residents at Mukund Sadan"
    },
    {
        id: 3,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/i1FvfPn_AyY",
        name: "Ajay Shenava & Anusha Shenava",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 4,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/0Kr2E7fPxcY",
        name: "Mr. Nagraj Nayak",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 5,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/OaiUlvvu1pU",
        name: "Dinesh Kumar",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 6,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/mwlgn3Cuq68",
        name: "Mr. Jaggannath Bhandary",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 7,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/DOoumWd6iJw",
        name: "Dr. Prashanth Bhat",
        role: "Residents at Mukund Sadan"
    },
    {
        id: 8,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/FPvLjrtQZUI",
        name: "Mr. Vasuki Ganapati Shanbhag",
        role: "Residents at Mukund Sadan"
    },
    {
        id: 9,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/6tDa2MZunhY?si=tRelWm7-61QH0l__",
        name: "Subhashini",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 10,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/Rb1AN7Jn2H4?si=SUxSQaqYAe6xThc0",
        name: "Dr. Devadas Kapikad",
        role: "Residents at Mukund Sadan"
    },

];


interface ExperienceSectionProps {
    titlePart1: string;
    titlePart2: string;
    description: string;
}

export default function ExperienceSection({
    titlePart1 = "Built on",
    titlePart2 = "Real Experiences",
    description = "Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time."
}: ExperienceSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className=" mx-auto px-6 lg:px-20 xl:px-54 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* --- Left Content (Title & Pagination) --- */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-5xl text-[#505153] leading-tight font-light mb-2">
                                {titlePart1}
                            </h2>
                            <h2 className="text-4xl md:text-5xl text-[#505153] leading-tight font-medium">
                                {titlePart2}
                            </h2>
                        </div>

                        <p className="text-[#505153] font-light text-lg leading-relaxed max-w-sm">
                            {description}
                        </p>

                        {/* Custom Pagination Container (Desktop) */}
                        <div className="hidden lg:flex gap-2 pt-4">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => swiperRef.current?.slideTo(index)}
                                    className={`h-[4px]  transition-all duration-300 ${activeIndex === index ? "w-12 bg-[#0097DC]" : "w-6 bg-[#e5e7eb]"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* --- Right Content (Swiper) --- */}
                    <div className="lg:col-span-7 relative pl-0 lg:pl-10">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            spaceBetween={30}
                            slidesPerView={1}
                            effect={'fade'}
                            fadeEffect={{ crossFade: true }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            className="w-full !overflow-visible"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col gap-6">
                                        {/* Video/Image Container - NOW IFRAME */}
                                        <div className="relative h-[30vh] md:h-[40vh] lg:h-[55vh] w-full overflow-hidden bg-gray-100 group">
                                            <iframe
                                                src={item.iframeSrc}
                                                title={item.name}
                                                className="w-full h-full object-cover border-0"
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="text-left space-y-1 relative pl-2">
                                            <h3 className="text-xl md:text-3xl text-[#505153] font-light">
                                                {item.name}
                                            </h3>
                                            <p className="text-[#0097DC] font-medium text-sm md:text-base">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination Container (Mobile) */}
                        <div className="flex lg:hidden justify-center gap-2 pt-8">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => swiperRef.current?.slideTo(index)}
                                    className={`h-1 transition-all duration-300 ${activeIndex === index ? "w-10 bg-[#0097DC]" : "w-5 bg-[#e5e7eb]"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
