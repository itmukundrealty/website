'use client';

import { useState } from 'react';
import StyledMap from '@/components/common/Shared/StyledMap';
import Image from 'next/image';

/* -----------------------------------
   Types
----------------------------------- */
type SectionKey =
    | "city"
    | "it"
    | "education"
    | "essentials";

/* -----------------------------------
   Active Circles Per Section
----------------------------------- */
const SECTION_POINTS: Record<SectionKey, number[]> = {
    city: [0],
    it: [18, 19],
    education: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    essentials: [32, 33, 34],
};

/* -----------------------------------
   Viewports Per Section
----------------------------------- */
const SECTION_VIEWPORTS: Record<SectionKey, { center: { lat: number, lng: number }, zoom: number }> = {
    city: {
        center: { lat: 12.904891658303564, lng: 74.83737591311836 },
        zoom: 14
    },
    it: {
        // Center between Rudraksh and Infosys (taking average lat/lng roughly)
        center: { lat: 12.904891658303564, lng: 74.83737591311836 },
        zoom: 14
    },
    education: {
        center: { lat: 12.904891658303564, lng: 74.83737591311836 },
        zoom: 14
    },
    essentials: {
        center: { lat: 12.904891658303564, lng: 74.83737591311836 },
        zoom: 14
    }
};

/* -----------------------------------
   Sections
----------------------------------- */
const SECTIONS = [
    { key: "city", title: "City & Highway Access", icon: "/icons/cityIcon.svg" },
    { key: "it", title: "IT & Employment Zones", icon: "/icons/itIcon.svg" },
    { key: "education", title: "Education & Healthcare", icon: "/icons/educationIcon.svg" },
    { key: "essentials", title: "Everyday Essentials", icon: "/icons/everydayIcon.svg" },
];

export default function MapSection() {
    const [activeSection, setActiveSection] = useState<SectionKey>("city");
    const activePoints = SECTION_POINTS[activeSection];
    const { center, zoom } = SECTION_VIEWPORTS[activeSection];

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
                        {SECTIONS.map((item) => {
                            const isActive = activeSection === (item.key as SectionKey);
                            return (
                                <button
                                    key={item.key}
                                    onClick={() => setActiveSection(item.key as SectionKey)}
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
            <div className="lg:hidden absolute bottom-0 left-0 right-0 p-4 bg-[#0097DC] text-white z-20">
                <div className="flex overflow-x-auto gap-4 scrollbar-hide">
                    {SECTIONS.map((item) => {
                        const isActive = activeSection === (item.key as SectionKey);
                        return (
                            <button
                                key={item.key}
                                onClick={() => setActiveSection(item.key as SectionKey)}
                                className={`flex-shrink-0 flex items-center gap-2 p-2 rounded whitespace-nowrap ${isActive ? "bg-white/20" : ""}`}
                            >
                                <div className="relative ">
                                    <Image
                                        src={item.icon}
                                        alt={item.title}
                                        fill
                                        className="object-contain w-4 h-4"
                                    />
                                </div>
                                <span className="text-sm">{item.title}</span>
                            </button>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}