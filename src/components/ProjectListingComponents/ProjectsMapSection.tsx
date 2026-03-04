"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import StyledMap from "@/components/common/Shared/StyledMap";

const PROJECTS_DATA = [
    // Ongoing

    {
        id: "ashoka",
        name: "Ashoka Business Center",
        location: "Airport Road , Kapikad , Mangalore",
        image: "/images/LandingPageImg/landmarks/2.png",
        slug: "/ashoka-business-center",
        type: "ongoing" as const,
        markerIcon: "/icons/mapIcons/ashokaIcon.svg", // Replace with correct logo paths if different
        mapLocation: { id: 0, lat: 12.896349626252785, lng: 74.8419397766051 }
    },
    {
        id: "rudraksh",
        name: "Rudraksh",
        location: "Behind Infosys, Kottara | Mangalore",
        image: "/images/LandingPageImg/landmarks/3.png",
        slug: "/rudraksh",
        type: "ongoing" as const,
        markerIcon: "/icons/mapIcon.svg", // Replace with correct logo paths if different
        mapLocation: { id: 1, lat: 12.905064469533924, lng: 74.83753653922163 }
    },
    {
        id: "kedar",
        name: "Kedar",
        location: "Bejai Main Road , Derebail , Mangalore",
        image: "/images/LandingPageImg/landmarks/1.png",
        slug: "/kedar",
        type: "ongoing" as const,
        markerIcon: "/icons/mapIcons/kedarIcon.svg", // Replace with correct logo paths if different
        mapLocation: { id: 2, lat: 12.909096133143487, lng: 74.8506202547441 }
    },
    // Completed
    {
        id: "mathura",
        name: "Mathura Residency",
        location: "Derebail, Mangalore",
        image: "/images/mathuraImages/heroDesk.png",
        slug: "/mathura-residency",
        type: "completed" as const,
        mapLocation: { id: 3, lat: 12.9144958, lng: 74.8357808 },
        markerIcon: "/icons/mapIcons/mathuraIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "ajanta",
        name: "Ajanta Business Center",
        location: "Kapikad Mangalore ",
        image: "/images/ajantaImages/heroDesk.png",
        slug: "/ajanta-business-center",
        type: "completed" as const,
        mapLocation: { id: 4, lat: 12.8690, lng: 74.8422 },
        markerIcon: "/icons/mapIcons/ajantaIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "evanna",
        name: "Evanna Homes",
        location: "Near Infosys , Kottara , Mangalore ",
        image: "/images/evannaImages/heroDesk.png",
        slug: "/evanna-homes",
        type: "completed" as const,
        mapLocation: { id: 5, lat: 12.8820, lng: 74.8395 },
        markerIcon: "/icons/mapIcons/evannaIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "kudva",
        name: "Kudva's Grandeur",
        location: "Surathkal Mangalore",
        image: "/images/kudvaImages/heroDesk.png",
        slug: "/kudva-grandeur",
        type: "completed" as const,
        mapLocation: { id: 6, lat: 12.9010, lng: 74.8310 },
        markerIcon: "/icons/mapIcons/kudvaIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "madhuban",
        name: "Madhuban Apartments",
        location: "Kottara Chowki , Mangalore",
        image: "/images/madhubanImages/heroDesk.png",
        slug: "/madhuban-apartments",
        type: "completed" as const,
        mapLocation: { id: 7, lat: 12.8760, lng: 74.8470 },
        markerIcon: "/icons/mapIcons/madhubanIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "nandagokul",
        name: "Nandagokul Apartments",
        location: " Bejai , Mangalore",
        image: "/images/nandagokulImages/heroDesk.png",
        slug: "/nandagokul-apartments",
        type: "completed" as const,
        mapLocation: { id: 8, lat: 12.8930, lng: 74.8340 },
        markerIcon: "/icons/mapIcons/nandagokulIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "nandadeep",
        name: "Nandadeep Apartments",
        location: "Urwa , Mangalore",
        image: "/images/nandeepImages/heroDesk.png",
        slug: "/nandadeep-apartments",
        type: "completed" as const,
        mapLocation: { id: 9, lat: 12.8870, lng: 74.8420 },
        markerIcon: "/icons/mapIcons/nandadeepIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "bhargavi",
        name: "Bhargavi Gloria Residency",
        location: "Kuntikana , Mangalore ",
        image: "/images/bhargaviImages/heroDesk.png",
        slug: "/bhargavi-gloria-residency",
        type: "completed" as const,
        markerIcon: "/icons/mapIcons/bhargaviIcon.svg", // Replace with correct logo paths if different

        mapLocation: { id: 10, lat: 12.9050, lng: 74.8260 }
    },
    {
        id: "gokuldham",
        name: "Gokuldham",
        location: "Mannagudda Apartments, Mangalore ",
        image: "/images/gokuldhamImages/heroDesk.png",
        slug: "/gokuldham",
        type: "completed" as const,
        mapLocation: { id: 11, lat: 12.8960, lng: 74.8500 },
        markerIcon: "/icons/mapIcons/gokuldamIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "mukund-sadhan",
        name: "Mukund Sadan",
        location: "Dongerkery, Mangalore",
        image: "/images/mukundSadanImages/heroDesk.png",
        slug: "/mukund-sadan",
        type: "completed" as const,
        mapLocation: { id: 12, lat: 12.9080, lng: 74.8380 },
        markerIcon: "/icons/mapIcons/sadanIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "kailash",
        name: "Kailash",
        location: "Kottara Chowki, Mangalore",
        image: "/images/kailashImages/heroDesk.png",
        slug: "/kailash",
        type: "completed" as const,
        mapLocation: { id: 13, lat: 12.8790, lng: 74.8350 },
        markerIcon: "/icons/mapIcons/kailashIcon.svg", // Replace with correct logo paths if different

    },
];

export default function ProjectsMapSection() {
    const [activeProject, setActiveProject] = useState(PROJECTS_DATA[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const mapLocations = PROJECTS_DATA.map(p => ({
        ...p.mapLocation,
        mapLink: p.slug,
        name: p.name,
        markerIcon: p.markerIcon || "/icons/mapIcon.svg"
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
                    locations={isMobile ? [] : mapLocations}
                    hideMainIcon={true}
                    renderAsMarkers={true}
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
                                <p className="text-[#0097DC] font-bold text-[14px] md:text-lg tracking-wide">
                                    {project.location}
                                </p>

                                <div className="mt-8 flex justify-start w-full">
                                    <Link
                                        href={project.slug}
                                        className="flex items-center justify-center gap-3 border border-[#0097DC] text-[#0097DC] px-6 py-4 bg-white font-medium hover:bg-[#0097DC] hover:text-white transition-all duration-300 text-[14px] md:text-[15px] w-full md:w-auto inline-flex "
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