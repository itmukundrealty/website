"use client";
import React, { useState, useRef } from 'react';

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Play } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


// --- Data ---
const testimonials = [
    {
        id: 1,
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2FDOoumWd6iJw-HD.jpg?alt=media&token=f8699aab-8b60-42bf-a4e1-212dc6256bf8",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/Portfolios%2FDr._Prashanth_Bhat_-_Embracing_serenity_in_Retirement_at_Kailash_High_living_luxury_apartments._1080P.mp4?alt=media&token=d466db88-d05c-4706-b158-db8416bd2f5c", // Placeholder
        name: "Dr. Prashanth Bhat",
        role: "Proud Owner at Kailash High Living Luxury Apartments"
    },
    {
        id: 2,
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2FR9MQVfJkNfI-HD.jpg?alt=media&token=992cac5e-6d52-4842-970e-78bdf74a23f2",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/Portfolios%2FLuxury_Living_Dr._Prajwal_K_Rao_Dr._Shruthi_J_s_Journey_at_Kailash_High_Living_Luxury_Homes_1080P.mp4?alt=media&token=59aa0de9-43cc-4240-9d8f-e975fc6e7650",
        name: "Dr. Prajwal K Rao & Dr. Shruthi J's",
        role: "Residents at Mukund Villas"
    },
    {
        id: 3,
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Fi1FvfPn_AyY-HD.jpg?alt=media&token=71f2e4a6-1350-4113-a8e2-f80f8abf575e",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/Portfolios%2FShenavas_Dream_home_experience_at_Kailash_High_Living_Luxury_home._1080P.mp4?alt=media&token=2f67da37-499b-49ab-b297-d020849a7c41",
        name: "Ajay Shenava & Anusha Shenava",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 4,
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2F0Kr2E7fPxcY-HD.jpg?alt=media&token=90b64e90-7a50-4157-b1bb-d4b4968e144c",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/Portfolios%2FKailash_Luxury_Apartments_-_Customer_Testimonial_1080P.mp4?alt=media&token=0fcef84b-b649-4c45-8e81-7bf248b7b17a",
        name: "Mr. Nagraj Nayak",
        role: "Residents at Mukund Villas"
    },
    {
        id: 5,
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2FWgVckaoq5No-HQ.jpg?alt=media&token=fe772f19-d0be-4d61-b100-2c48f7c3e203",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/Portfolios%2FNagaraj%20Bhat%20%20Proud%20Owner%20at%20%20of%20his%20flat%20at%20Nandadeep%20by%20Nirmaan%20Homes.mp4?alt=media&token=a989323b-7528-494c-8f0f-0e6d3ce0d9e6",
        name: "Nagaraj Bhat",
        role: "Proud Owner at Nandadeep by Mukund MGM Realty"
    },
    {
        id: 6,
        thumbnail: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2FmPJszdjJdb8-HD.jpg?alt=media&token=e9d4eb0b-1e91-4a4e-8534-d929dda5bffa",
        videoUrl: "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/Portfolios%2FSatish_Honnagatte_is_the_proud_owner_of_his_flat_in_Nandadeep_by_Nirmaan_Homes_1080P.mp4?alt=media&token=e5ebfad2-f0a8-43c2-9b0a-54236dec72b9",
        name: "Satish Honnagatte",
        role: "Proud Owner at Nandadeep by Mukund MGM Realty"
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
    const [playingId, setPlayingId] = useState<number | null>(null);
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
                                    className={`h-1.5 rounded-sm transition-all duration-300 ${activeIndex === index ? "w-12 bg-[#0097DC]" : "w-12 bg-[#e5e7eb]"
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* --- Right Content (Swiper) --- */}
                    <div className="lg:col-span-7 relative pl-0 lg:pl-10">
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            modules={[Autoplay, EffectFade]}
                            spaceBetween={30}
                            slidesPerView={1}
                            effect={'fade'}
                            fadeEffect={{ crossFade: true }}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                                setPlayingId(null);
                                swiperRef.current?.autoplay?.start();
                            }}
                            className="w-full overflow-visible!"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col gap-6">

                                        {/* Video/Image Container */}
                                        <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden shadow-xl rounded-sm bg-gray-100 group">
                                            {playingId !== item.id ? (
                                                <>
                                                    <Image
                                                        src={item.thumbnail}
                                                        alt={item.name}
                                                        fill
                                                        className="object-cover cursor-pointer"
                                                        onClick={() => setPlayingId(item.id)}
                                                    />

                                                    {/* Play Button Overlay */}
                                                    <div
                                                        onClick={() => setPlayingId(item.id)}
                                                        className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition cursor-pointer"
                                                    >
                                                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/60 group-hover:scale-105 transition-transform">
                                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <video
                                                    src={item.videoUrl}
                                                    controls
                                                    autoPlay
                                                    className="w-full h-full object-cover"
                                                    onPlay={() => swiperRef.current?.autoplay?.stop()}
                                                    onEnded={() => {
                                                        setPlayingId(null);
                                                        swiperRef.current?.autoplay?.start();
                                                    }}
                                                />
                                            )}
                                        </div>

                                        {/* Text */}
                                        <div className="text-left space-y-1 relative pl-2">
                                            <h3 className="text-2xl md:text-3xl text-[#505153] font-light">
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
                                    className={`h-1 transition-all duration-300 ${activeIndex === index ? "w-10 bg-[#0097DC]" : "w-10 bg-[#e5e7eb]"
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
