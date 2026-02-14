"use client";

import { useState } from "react";
import Image from "next/image";
import { Briefcase, HeartPulse, ShoppingCart } from "lucide-react";

/* -----------------------------------
   Icons
----------------------------------- */

const RoadIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4 22V2" />
        <path d="M20 22V2" />
        <path d="M12 22v-4" />
        <path d="M12 14v-4" />
        <path d="M12 6V2" />
    </svg>
);

/* -----------------------------------
   Types
----------------------------------- */

type SectionKey =
    | "city"
    | "it"
    | "education"
    | "essentials";

/* -----------------------------------
   Circle Positions (indices 0-17)
----------------------------------- */

const CIRCLES = [
    { cx: 1187.51, cy: 512.5 },    // 0
    { cx: 1282.5, cy: 615.133 },  // 1: active in IT
    { cx: 1200.51, cy: 374.676 }, // 2: active in Education
    { cx: 1370.5, cy: 463.57 },   // 3: active in City
    { cx: 1316.5, cy: 547.226 },  // 4
    { cx: 1370.5, cy: 603.633 },  // 5: active in IT/Edu
    { cx: 1536.5, cy: 752.262 },  // 6
    { cx: 1530.5, cy: 940.176 },  // 7: active in Essentials
    { cx: 1271, cy: 928.676 },    // 8: active in Essentials
    { cx: 1246.5, cy: 859.301 },  // 9: active in Essentials
    { cx: 1120.5, cy: 776.262 },  // 10
    { cx: 1097.5, cy: 671.699 },  // 11
    { cx: 1299.5, cy: 683.199 },  // 12: active in Essentials
    { cx: 1258, cy: 718.699 },    // 13: active in Essentials
    { cx: 1258, cy: 763.762 },    // 14: active in Essentials
    { cx: 1188.5, cy: 222.676 },  // 15: active in City/Essentials
    { cx: 1311, cy: 208.301 },    // 16: active in City/Essentials
    { cx: 1223.51, cy: 511.57 },  // 17: active in City
];

/* -----------------------------------
   Active Circles Per Section
----------------------------------- */

const SECTION_POINTS: Record<SectionKey, number[]> = {
    city: [],
    it: [0, 2, 10, 12, 14],
    education: [1, 5],
    essentials: [17, 3, 16, 15],
};

/* -----------------------------------
   Sections
----------------------------------- */

const SECTIONS = [
    { key: "city", title: "City & Highway Access", icon: RoadIcon },
    { key: "it", title: "IT & Employment Zones", icon: Briefcase },
    { key: "education", title: "Education & Healthcare", icon: HeartPulse },
    { key: "essentials", title: "Everyday Essentials", icon: ShoppingCart },
];

/* -----------------------------------
   Component
----------------------------------- */

export default function StrategicMap() {
    const [activeSection, setActiveSection] =
        useState<SectionKey>("city");

    const activePoints = SECTION_POINTS[activeSection];

    return (
        <section className="relative h-[100vh] w-full overflow-hidden bg-white">
            {/* 1. BACKGROUND IMAGE */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/projectImages/bgImg.png"
                    alt="Map Background"
                    fill
                    priority
                    className="object-cover"
                />
            </div>

            {/* 2. SVG OVERLAY */}
            <div className="absolute inset-0 z-10 pointer-events-none">
                <svg
                    viewBox="0 0 1728 1048"
                    className="h-full w-full object-cover pointer-events-auto"
                    preserveAspectRatio="xMidYMid slice"
                >
                    {/* ---- Center Pin Backdrop ---- */}
                    <path
                        d="M1224.42 425.719C1221.08 422.982 1217.17 421.021 1212.98 419.977C1208.78 418.934 1204.41 418.833 1200.18 419.684C1194.73 420.801 1189.72 423.459 1185.74 427.343C1181.76 431.228 1178.98 436.173 1177.74 441.592C1176.49 447.01 1176.83 452.672 1178.71 457.904C1180.59 463.136 1183.94 467.717 1188.35 471.102C1193.38 474.788 1197.67 479.399 1200.98 484.69L1203.24 488.441C1203.52 488.917 1203.93 489.311 1204.41 489.585C1204.9 489.859 1205.44 490.003 1206 490.003C1206.55 490.003 1207.1 489.859 1207.58 489.585C1208.07 489.311 1208.47 488.917 1208.76 488.441L1210.92 484.838C1213.8 479.771 1217.74 475.377 1222.45 471.949C1226.15 469.405 1229.21 466.036 1231.38 462.109C1233.55 458.181 1234.78 453.803 1234.97 449.318C1235.16 444.834 1234.31 440.366 1232.48 436.268C1230.65 432.17 1227.89 428.553 1224.42 425.703L1224.42 425.719Z"
                        fill="#0097DC"
                    />
                    {/* ---- White Tree Logo inside Pin ---- */}
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1206.69 434.313C1207.01 434.65 1207.36 434.961 1207.65 435.326C1208.62 436.521 1209.17 437.917 1209.42 439.423C1209.83 441.924 1209.38 444.306 1208.3 446.579C1207.94 447.327 1207.59 448.075 1207.25 448.814C1206.66 450.055 1206.77 451.269 1207.39 452.455C1207.47 452.601 1207.54 452.748 1207.63 452.93C1207.96 452.565 1208.27 452.209 1208.6 451.871C1209.69 450.74 1211.05 450.156 1212.58 449.864C1213.83 449.626 1215.05 449.289 1216.15 448.614C1217.1 448.03 1217.95 447.326 1218.7 446.487C1218.52 446.779 1218.34 447.08 1218.15 447.372C1217.35 448.559 1216.37 449.58 1215.18 450.374C1214.39 450.894 1213.51 451.132 1212.61 451.342C1209.99 451.963 1208.53 453.761 1207.78 456.225C1207.35 457.621 1207.38 459.027 1207.97 460.396C1208.56 461.783 1209.58 462.558 1211.1 462.741C1213.34 463.014 1215.51 463.571 1217.52 464.648C1218.32 465.077 1219.06 465.597 1219.82 466.072C1219.8 466.108 1219.79 466.136 1219.77 466.172C1219.24 465.944 1218.71 465.707 1218.17 465.497C1216.34 464.758 1214.45 464.265 1212.45 464.366C1210.53 464.457 1208.79 465.087 1207.19 466.109C1206.22 466.72 1205.35 467.468 1204.43 468.153C1204.37 468.198 1204.31 468.244 1204.24 468.253C1203.14 468.326 1202.04 468.39 1200.94 468.454C1200.92 468.454 1200.91 468.436 1200.92 468.445C1202.25 467.642 1203.58 466.83 1204.92 466.027C1206.27 465.215 1207.68 464.52 1209.16 463.982C1209.38 463.9 1209.61 463.836 1209.83 463.69C1209.48 463.708 1209.13 463.717 1208.78 463.763C1206.95 463.991 1205.28 464.685 1203.66 465.525C1202.21 466.273 1200.77 467.058 1199.18 467.514C1197.73 467.934 1196.24 468.016 1194.74 467.934C1193.53 467.861 1192.33 467.66 1191.12 467.514C1191.09 467.514 1191.07 467.496 1191.05 467.413C1191.71 467.413 1192.38 467.441 1193.05 467.413C1194.74 467.34 1196.36 466.975 1197.95 466.418C1199.21 465.98 1200.45 465.488 1201.61 464.813C1201.99 464.594 1202.23 464.283 1202.25 463.799C1199.04 465.086 1195.81 466.172 1192.34 466.328C1191.23 466.373 1190.12 466.328 1189.01 466.273C1189.82 466.154 1190.62 466.053 1191.41 465.916C1193.29 465.588 1195.12 465.059 1196.92 464.42C1198.22 463.964 1199.53 463.499 1200.82 462.988C1202.67 462.267 1203.68 460.843 1204 458.926C1204.23 457.548 1204.05 456.206 1203.31 454.993C1202.56 453.761 1201.39 453.131 1200.04 452.829C1198.1 452.391 1196.18 452.529 1194.28 453.049C1193.32 453.314 1192.38 453.642 1191.43 453.934C1191.42 453.934 1191.4 453.915 1191.4 453.915L1191.38 453.888C1191.74 453.614 1192.09 453.295 1192.48 453.067C1194.3 452.008 1196.25 451.416 1198.35 451.333C1200.23 451.26 1202.02 451.589 1203.65 452.693C1203.68 452.547 1203.71 452.419 1203.73 452.3C1203.96 450.977 1203.78 449.69 1203.38 448.44C1202.94 447.071 1202.42 445.72 1201.95 444.361C1201.54 443.193 1201.18 442.015 1201.07 440.783C1200.94 439.359 1201.13 437.991 1201.9 436.741C1202.09 436.43 1202.3 436.138 1202.51 435.828C1202.55 435.846 1202.59 435.864 1202.63 435.891C1202.6 435.991 1202.57 436.101 1202.54 436.202C1202.28 437.005 1201.95 437.789 1201.79 438.611C1201.49 440.126 1201.79 441.595 1202.45 442.964C1202.99 444.096 1203.65 445.182 1204.25 446.295C1204.56 446.87 1204.87 447.454 1205.2 448.102C1205.6 447.527 1205.98 446.98 1206.34 446.414C1207.08 445.255 1207.65 444.014 1208.07 442.7C1208.64 440.911 1208.54 439.122 1208.94 437.379C1208.58 436.348 1208.1 435.362 1207.69 434.313Z"
                        fill="white"
                    />

                    {/* ---- POI Circles ---- */}

                    {CIRCLES.map((point, index) => {
                        const isActive =
                            activePoints.includes(index);

                        return (
                            <circle
                                key={index}
                                cx={point.cx}
                                cy={point.cy}
                                r="11.5"
                                fill="#0097DC"
                                opacity={isActive ? 1 : 0.5}
                                className="transition-opacity duration-300"
                            />
                        );
                    })}
                </svg>
            </div>

            {/* 3. LEFT INFO PANEL */}
            <div className="relative z-20 flex h-full items-center px-6 lg:px-20 pointer-events-none">
                <div className="pointer-events-auto w-full max-w-[450px] bg-[#0097DC] text-white p-12 ">
                    <h2 className="text-[44px] font-thin mb-10 leading-[1.1]">
                        Strategically <br />
                        <span className="font-semibold">Connected</span>
                    </h2>

                    <div className="space-y-6">
                        {SECTIONS.map((item) => {
                            const Icon = item.icon;
                            const isActive = activeSection === item.key;
                            return (
                                <button
                                    key={item.key}
                                    onClick={() =>
                                        setActiveSection(
                                            item.key as SectionKey
                                        )
                                    }
                                    className={`w-full text-left flex items-center gap-5 text-xl transition-all duration-300 group
                  ${isActive
                                            ? "opacity-100 font-medium"
                                            : "opacity-60 hover:opacity-100 font-light"
                                        }`}
                                >
                                    <Icon className={`w-7 h-7 ${isActive ? "stroke-[2px]" : "stroke-[1.5px]"}`} />
                                    <span>{item.title}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
