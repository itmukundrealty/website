'use client';

import { useState } from 'react';
import StyledMap from '@/components/common/Shared/StyledMap';
import Image from 'next/image';

/* -----------------------------------
   Types
----------------------------------- */
export type MapSectionItem = {
    key: string;
    title: string;
    icon: string;
    points: number[];
    viewport: { center: { lat: number, lng: number }, zoom: number };
};

export interface MapSectionProps {
    data: MapSectionItem[];
}

export default function MapSection({ data }: MapSectionProps) {
    // Initialize active section with the first item's key, or an empty string if data is empty
    const [activeSection, setActiveSection] = useState<string>(data[0]?.key || "");

    const activeItem = data.find(item => item.key === activeSection) || data[0];
    const activePoints = activeItem?.points || [];
    const { center, zoom } = activeItem?.viewport || { center: { lat: 0, lng: 0 }, zoom: 1 };

    if (!data || data.length === 0) return null;

    return (
        <section className="relative h-screen w-full bg-white overflow-hidden">
            {/* FULL SCREEN MAP BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-0">
                <StyledMap
                    activePoints={activePoints}
                    highlightHighway={activeSection === "city"}
                    center={center}
                    zoom={zoom}
                />
            </div>

            {/* BLUE BOX OVERLAY (Desktop) */}
            <div className="hidden lg:flex absolute z-10 top-1/2 left-[10%] -translate-y-1/2">
                <div className="bg-[#0097DC] text-white p-14 w-[450px] shadow-xl">
                    <h2 className="text-[52px] font-thin mb-12 leading-[1.1]">
                        Strategically <br />
                        <span className="font-semibold">Connected</span>
                    </h2>

                    <div className="space-y-7">
                        {data.map((item) => {
                            const isActive = activeSection === item.key;
                            return (
                                <button
                                    key={item.key}
                                    onClick={() => setActiveSection(item.key)}
                                    className={`w-full text-left flex items-center gap-5 text-[19px] transition-all duration-300 group
                                        ${isActive
                                            ? "opacity-100 font-medium"
                                            : "opacity-70 hover:opacity-100 font-light"
                                        }`}
                                >
                                    <div
                                        className={`relative w-8 h-8 flex items-center justify-center transition-all duration-300 ${isActive ? "scale-110" : "scale-100"}`}
                                        style={{
                                            filter: isActive
                                                ? "drop-shadow(0.5px 0 0 #ffffff) drop-shadow(-0.5px 0 0 #ffffff) drop-shadow(0 0.5px 0 #ffffff) drop-shadow(0 -0.5px 0 #ffffff)"
                                                : "none"
                                        }}
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <span>{item.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* MOBILE OVERLAY (Simplified bottom bar) */}
            <div className="lg:hidden absolute bottom-0 left-0 right-0 p-2 bg-[#0097DC] text-white z-20">
                <div className="grid grid-cols-4 gap-2">
                    {data.map((item) => {
                        const isActive = activeSection === item.key;
                        return (
                            <button
                                key={item.key}
                                onClick={() => setActiveSection(item.key)}
                                className={`flex flex-col items-center justify-center gap-1 p-2 rounded ${isActive ? "bg-white/20" : ""}`}
                            >
                                <div className="relative w-6 h-6">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="text-[10px] text-center leading-tight">{item.title}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}