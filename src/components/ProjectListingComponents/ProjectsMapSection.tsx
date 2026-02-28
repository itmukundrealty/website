"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import StyledMap from "@/components/common/Shared/StyledMap";

const PROJECTS_DATA = [
    // ... keep your existing PROJECTS_DATA array exactly the same
    {
        id: "ashoka",
        name: "Ashoka Business Center",
        location: "Airport Road, Kapikad | Mangalore",
        image: "/images/LandingPageImg/landmarks/2.png",
        slug: "/ashoka",
        mapLocation: { id: 0, lat: 12.904891658303564, lng: 74.83737591311836 }
    },
    {
        id: "rudraksh",
        name: "Rudraksh",
        location: "Behind Infosys, Kottara | Mangalore",
        image: "/images/LandingPageImg/landmarks/3.png",
        slug: "/rudraksh",
        mapLocation: { id: 1, lat: 12.8993521, lng: 74.8460278 }
    },
    {
        id: "mathura",
        name: "Mathura",
        location: "Kottara Chowki | Mangalore",
        image: "/images/LandingPageImg/landmarks/1.png",
        slug: "/mathura",
        mapLocation: { id: 2, lat: 12.9144958, lng: 74.8357808 }
    }
];

export default function ProjectsMapSection() {
    const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);

    const mapLocations = PROJECTS_DATA.map(p => ({
        ...p.mapLocation,
        mapLink: p.slug
    }));

    return (
        /* 1. Removed h-screen and overflow-hidden to let the section size itself to the content */
        <section className="relative w-full bg-[#e5e5e5]">
            
            {/* 2. Made the Map 'sticky' to the top of the screen so it freezes while scrolling */}
            <div className="sticky top-0 z-0 h-screen w-full">
                <StyledMap
                    activePoints={[activeProject.mapLocation.id]}
                    center={{ lat: activeProject.mapLocation.lat, lng: activeProject.mapLocation.lng }}
                    zoom={14}
                    locations={mapLocations}
                />
            </div>

            {/* 3. Replaced inner scrolling with a negative top margin to pull this content OVER the sticky map */}
            <div className="relative z-10 w-full max-w-[550px] -mt-[100vh] px-6 md:px-12 py-32 lg:ml-10 xl:ml-32 pb-[20vh]">
                <div className="flex flex-col gap-32">
                    {PROJECTS_DATA.map((project) => (
                        <div
                            key={project.id}
                            className="flex flex-col w-full cursor-pointer group"
                            onClick={() => setActiveProject(project)}
                            onMouseEnter={() => setActiveProject(project)}
                        >
                            {/* Image */}
                            <div className="w-full relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Text Block */}
                            <div className="bg-white p-6 md:p-8 transition-shadow duration-500">
                                <h3 className="text-[28px] md:text-[34px] font-normal text-[#505153] leading-tight mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-[#0097DC] font-bold text-[14px] md:text-[15px] tracking-wide">
                                    {project.location}
                                </p>

                                <div className="mt-8 flex justify-end">
                                    <Link
                                        href={project.slug}
                                        className="flex items-center justify-center gap-3 border border-[#0097DC] text-[#0097DC] px-6 py-4 bg-white font-medium hover:bg-[#0097DC] hover:text-white transition-all duration-300 text-[14px] md:text-[15px] w-auto inline-flex shadow-sm"
                                    >
                                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        Explore the Project
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}