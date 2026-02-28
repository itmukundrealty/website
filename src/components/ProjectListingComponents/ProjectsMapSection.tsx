"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import StyledMap from "@/components/common/Shared/StyledMap";

const PROJECTS_DATA = [
    // Ongoing
    {
        id: "ashoka",
        name: "Ashoka Business Center",
        location: "Airport Road, Kapikad | Mangalore",
        image: "/images/LandingPageImg/landmarks/2.png",
        slug: "/ashoka",
        type: "ongoing" as const,
        mapLocation: { id: 0, lat: 12.904891658303564, lng: 74.83737591311836 }
    },
    {
        id: "rudraksh",
        name: "Rudraksh",
        location: "Behind Infosys, Kottara | Mangalore",
        image: "/images/LandingPageImg/landmarks/3.png",
        slug: "/rudraksh",
        type: "ongoing" as const,
        mapLocation: { id: 1, lat: 12.8993521, lng: 74.8460278 }
    },
    {
        id: "kedar",
        name: "Kedar",
        location: "Mangalore",
        image: "/images/LandingPageImg/landmarks/1.png",
        slug: "/kedar",
        type: "ongoing" as const,
        mapLocation: { id: 2, lat: 12.9141, lng: 74.8560 }
    },
    // Completed
    {
        id: "mathura",
        name: "Mathura Residency",
        location: "Kottara Chowki | Mangalore",
        image: "/images/mathuraImages/heroDesk.png",
        slug: "/mathura",
        type: "completed" as const,
        mapLocation: { id: 3, lat: 12.9144958, lng: 74.8357808 }
    },
    {
        id: "ajanta",
        name: "Ajanta Business Center",
        location: "Mangalore",
        image: "/images/ajantaImages/heroDesk.png",
        slug: "/ajanta",
        type: "completed" as const,
        mapLocation: { id: 4, lat: 12.8690, lng: 74.8422 }
    },
    {
        id: "evanna",
        name: "Evanna Homes",
        location: "Mangalore",
        image: "/images/evannaImages/heroDesk.png",
        slug: "/evanna",
        type: "completed" as const,
        mapLocation: { id: 5, lat: 12.8820, lng: 74.8395 }
    },
    {
        id: "kudva",
        name: "Kudva's Grandeur",
        location: "Mangalore",
        image: "/images/kudvaImages/heroDesk.png",
        slug: "/kudva",
        type: "completed" as const,
        mapLocation: { id: 6, lat: 12.9010, lng: 74.8310 }
    },
    {
        id: "madhuban",
        name: "Madhuban Apartments",
        location: "Mangalore",
        image: "/images/madhubanImages/heroDesk.png",
        slug: "/madhuban",
        type: "completed" as const,
        mapLocation: { id: 7, lat: 12.8760, lng: 74.8470 }
    },
    {
        id: "nandagokul",
        name: "Nandagokul Apartments",
        location: "Mangalore",
        image: "/images/nandagokulImages/heroDesk.png",
        slug: "/nandagokul",
        type: "completed" as const,
        mapLocation: { id: 8, lat: 12.8930, lng: 74.8340 }
    },
    {
        id: "nandadeep",
        name: "Nandadeep Apartments",
        location: "Mangalore",
        image: "/images/nandeepImages/heroDesk.png",
        slug: "/nandadeep",
        type: "completed" as const,
        mapLocation: { id: 9, lat: 12.8870, lng: 74.8420 }
    },
    {
        id: "bhargavi",
        name: "Bhargavi Gloria Residency",
        location: "Mangalore",
        image: "/images/bhargaviImages/heroDesk.png",
        slug: "/bhargavi",
        type: "completed" as const,
        mapLocation: { id: 10, lat: 12.9050, lng: 74.8260 }
    },
    {
        id: "gokuldham",
        name: "Gokuldham",
        location: "Mangalore",
        image: "/images/gokuldhamImages/heroDesk.png",
        slug: "/gokuldham",
        type: "completed" as const,
        mapLocation: { id: 11, lat: 12.8960, lng: 74.8500 }
    },
    {
        id: "mukund-sadhan",
        name: "Mukund Sadan",
        location: "Mangalore",
        image: "/images/mukundSadanImages/heroDesk.png",
        slug: "/mukund-sadhan",
        type: "completed" as const,
        mapLocation: { id: 12, lat: 12.9080, lng: 74.8380 }
    },
    {
        id: "kailash",
        name: "Kailash",
        location: "Mangalore",
        image: "/images/kailashImages/heroDesk.png",
        slug: "/kailash",
        type: "completed" as const,
        mapLocation: { id: 13, lat: 12.8790, lng: 74.8350 }
    },
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
                    hideMainIcon={true}
                />
            </div>

            {/* 3. Replaced inner scrolling with a negative top margin to pull this content OVER the sticky map */}
            <div className="relative z-10 w-full max-w-[550px] -mt-[100vh] px-6 md:px-12 py-32 lg:ml-10 xl:ml-32 pb-[20vh]">
                <div className="flex flex-col gap-20">
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
                                {/* {project.type === "completed" && (
                                    <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-[#2e7d32] text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-sm z-10">
                                        <CheckCircle2 className="w-3.5 h-3.5" />
                                        Completed
                                    </div>
                                )} */}
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