"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HighlivingSectionProps {
    heading: string;
    description: string;
    imageSrc: string;
    videoSrc: string;
}

export default function HighlivingSection({ heading, description, imageSrc, videoSrc }: HighlivingSectionProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section className="py-24 bg-white font-sans">
            <div className=" mx-auto px-6 lg:px-20 xl:px-54">
                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#505153] font-light leading-tight">
                        {heading}
                    </h2>

                    <button className="flex items-center gap-2 px-4 py-5 border border-[#0097DC] text-[#0097DC] hover:bg-[#0097DC]/10 transition-colors uppercase tracking-widest text-sm font-medium">
                        <ArrowUpRight className="w-5 h-5 hover:rotate-45 transition-all duration-300" />
                        Enquire Now
                    </button>
                </div>

                {/* Description */}
                <div className="max-w-full mb-12">
                
                </div>

                {/* Video/Image Container */}
                <div className="relative w-full aspect-video md:aspect-21/9 rounded-sm overflow-hidden shadow-2xl bg-gray-100 group">
                    {!isPlaying ? (
                        <>
                            <Image
                                src={imageSrc}
                                alt={heading}
                                fill
                                className="object-cover cursor-pointer"
                                onClick={() => setIsPlaying(true)}
                                priority
                            />
                            {/* Play Button Overlay */}
                            <div
                                onClick={() => setIsPlaying(true)}
                                className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
                            >
                                <div className="w-20 h-20 rounded-full backdrop-blur-sm flex items-center justify-center ">
                                    <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" d="M74.8802 0C33.5887 0 0 33.592 0 74.8802C0 116.168 33.5887 149.76 74.8802 149.76C116.172 149.76 149.76 116.168 149.76 74.8802C149.76 33.592 116.172 0 74.8802 0ZM104.648 77.5036L60.9683 105.584C60.4564 105.916 59.8652 106.08 59.2802 106.08C58.7684 106.08 58.2504 105.952 57.7873 105.7C56.7817 105.151 56.1601 104.103 56.1601 102.96V46.8001C56.1601 45.6576 56.7817 44.6093 57.7873 44.0608C58.7745 43.5186 60.0115 43.5519 60.9683 44.1767L104.648 72.2568C105.538 72.8295 106.08 73.8199 106.08 74.8802C106.08 75.9405 105.538 76.9306 104.648 77.5036Z" fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <video
                            src={videoSrc}
                            controls
                            autoPlay
                            className="w-full h-full object-cover"
                            onEnded={() => setIsPlaying(false)}
                        />
                    )}
                </div>
            </div>
        </section>
    );
}