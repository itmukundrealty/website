'use client';

import { useState } from 'react';
import StyledMap from '@/components/common/Shared/StyledMap';
import Image from 'next/image';

/* -----------------------------------
   Types
----------------------------------- */
type MapViewport = { center: { lat: number, lng: number }, zoom: number };

export type MapSectionItem = {
    key: string;
    title: string;
    icon: string;
    points: number[];
    viewport: MapViewport;
};
export interface MapSectionProps {
    data: MapSectionItem[];
    mainMarkerPosition?: { lat: number, lng: number };
    customMarkerImage?: string;
    accentColor?: string;
    boxAccentColor?: string;
}

const DEFAULT_MAP_CENTER = {
    lat: 12.904891658303564,
    lng: 74.83737591311836,
};

const FALLBACK_VIEWPORT: MapViewport = {
    center: { lat: 0, lng: 0 },
    zoom: 1,
};

const PROJECT_FOCUS_ZOOM = 14.5;
const COORDINATE_TOLERANCE = 0.000001;

function isDefaultViewport(viewport?: MapViewport) {
    if (!viewport) return true;

    return (
        Math.abs(viewport.center.lat - DEFAULT_MAP_CENTER.lat) < COORDINATE_TOLERANCE &&
        Math.abs(viewport.center.lng - DEFAULT_MAP_CENTER.lng) < COORDINATE_TOLERANCE &&
        viewport.zoom <= 13.5
    );
}

function getEffectiveViewport(viewport?: MapViewport, mainMarkerPosition?: MapViewport["center"]) {
    if (isDefaultViewport(viewport) && mainMarkerPosition) {
        return {
            center: mainMarkerPosition,
            zoom: PROJECT_FOCUS_ZOOM,
        };
    }

    return viewport || FALLBACK_VIEWPORT;
}

export default function MapSection({
    data,
    mainMarkerPosition,
    customMarkerImage,
    accentColor = "#0097DC",
    boxAccentColor = "#0097DC"
}: MapSectionProps) {
    // Initialize active section with the first item's key, or an empty string if data is empty
    const [activeSection, setActiveSection] = useState<string>(data[0]?.key || "");

    const activeItem = data.find(item => item.key === activeSection) || data[0];
    const activePoints = activeItem?.points || [];
    const { center, zoom } = getEffectiveViewport(activeItem?.viewport, mainMarkerPosition);

    if (!data || data.length === 0) return null;

    // Collect all points defined across all sections
    const allSectionPoints = data.flatMap(item => item.points);

    return (
        <section id="location" className="relative md:h-screen h-[80vh] w-full bg-white overflow-hidden">
            {/* FULL SCREEN MAP BACKGROUND */}
            <div className="absolute inset-0 w-full h-full z-0">
                <StyledMap
                    activePoints={activePoints}
                    allowedPoints={allSectionPoints}
                    highlightHighway={activeSection === "city"}
                    center={center}
                    zoom={zoom}
                    mainMarkerPosition={mainMarkerPosition}
                    customMarkerImage={customMarkerImage}
                    accentColor={accentColor}
                />
            </div>

            {/* BLUE BOX OVERLAY (Desktop) */}
            <div className="hidden md:flex absolute z-10 top-1/2 md:left-5 lg:left-[10%] -translate-y-1/2">
                <div className=" p-14 w-[450px] shadow-xl" style={{ backgroundColor: boxAccentColor }}>
                    <h2 className="text-[52px] text-white font-light mb-12 leading-[1.1]">
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
            <div className="md:hidden absolute bottom-0 left-0 right-0 p-2 text-white z-20" style={{ backgroundColor: boxAccentColor }}>
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
