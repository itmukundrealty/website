"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import StyledMap from "@/components/common/Shared/StyledMap";

const PROJECTS_DATA = [
    // Ongoing

    {
        id: "ashoka",
        name: "Ashoka Business Center",
        label: "Commercial",
        location: "Airport Road, Kapikad, Mangalore",
        image: "/images/LandingPageImg/landmarks/2.png",
        slug: "/ashoka-business-center",
        type: "ongoing" as const,
        markerIcon: "/icons/mapIcons/ashokaIcon.svg", // Replace with correct logo paths if different
        mapLocation: { id: 1, lat: 12.896349626252785, lng: 74.8419397766051 }
    },
    {
        id: "rudraksh",
        name: "Rudraksh",
        label: "Residential",
        location: "Behind Infosys, Kottara, Mangalore",
        image: "/images/LandingPageImg/landmarks/3.png",
        slug: "/rudraksh",
        type: "ongoing" as const,
        markerIcon: "/icons/mapIcon.svg", // Replace with correct logo paths if different
        mapLocation: { id: 2, lat: 12.905064469533924, lng: 74.83753653922163 }
    },
    {
        id: "kedar",
        name: "Kedar",
        label: "Residential",
        location: "Bejai Main Road, Derebail, Mangalore",
        image: "/images/LandingPageImg/landmarks/1.png",
        slug: "/kedar",
        type: "ongoing" as const,
        markerIcon: "/icons/mapIcons/kedarIcon.svg", // Replace with correct logo paths if different
        mapLocation: { id: 3, lat: 12.909096133143487, lng: 74.8506202547441 }
    },
    // Completed
    {
        id: "mathura",
        name: "Mathura Residency",
        label: "Residential",
        location: "Derebail, Mangalore",
        image: "/images/mathuraImages/heroDesk.png",
        slug: "/mathura-residency",
        type: "completed" as const,
        mapLocation: { id: 4, lat: 12.9144958, lng: 74.8357808 },
        markerIcon: "/icons/mapIcons/mathuraIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "ajanta",
        name: "Ajanta Business Center",
        label: "Commercial",
        location: "Kapikad, Mangalore",
        image: "/images/ajantaImages/heroDesk.png",
        slug: "/ajanta-business-center",
        type: "completed" as const,
        mapLocation: { id: 5, lat: 12.8690, lng: 74.8422 },
        markerIcon: "/icons/mapIcons/ajantaIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "evanna",
        name: "Evanna Homes",
        label: "Residential",
        location: "Near Infosys, Kottara, Mangalore",
        image: "/images/evannaImages/heroDesk.png",
        slug: "/evanna-homes",
        type: "completed" as const,
        mapLocation: { id: 6, lat: 12.8820, lng: 74.8395 },
        markerIcon: "/icons/mapIcons/evannaIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "kudva",
        name: "Kudva's Grandeur",
        label: "Residential",
        location: "Surathkal, Mangalore",
        image: "/images/kudvaImages/heroDesk.png",
        slug: "/kudva-grandeur",
        type: "completed" as const,
        mapLocation: { id: 7, lat: 12.9010, lng: 74.8310 },
        markerIcon: "/icons/mapIcons/kudvaIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "madhuban",
        name: "Madhuban Apartments",
        label: "Residential",
        location: "Kottara Chowki, Mangalore",
        image: "/images/madhubanImages/heroDesk.png",
        slug: "/madhuban-apartments",
        type: "completed" as const,
        mapLocation: { id: 8, lat: 12.8760, lng: 74.8470 },
        markerIcon: "/icons/mapIcons/madhubanIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "nandagokul",
        name: "Nandagokul Apartments",
        label: "Residential",
        location: "Bejai, Mangalore",
        image: "/images/nandagokulImages/heroDesk.png",
        slug: "/nandagokul-apartments",
        type: "completed" as const,
        mapLocation: { id: 9, lat: 12.8930, lng: 74.8340 },
        markerIcon: "/icons/mapIcons/nandagokulIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "nandadeep",
        name: "Nandadeep Apartments",
        label: "Residential",
        location: "Urwa, Mangalore",
        image: "/images/nandeepImages/heroDesk.png",
        slug: "/nandadeep-apartments",
        type: "completed" as const,
        mapLocation: { id: 10, lat: 12.8870, lng: 74.8420 },
        markerIcon: "/icons/mapIcons/nandadeepIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "bhargavi",
        name: "Bhargavi Gloria Residency",
        label: "Residential",
        location: "Kuntikana, Mangalore",
        image: "/images/bhargaviImages/heroDesk.png",
        slug: "/bhargavi-gloria-residency",
        type: "completed" as const,
        markerIcon: "/icons/mapIcons/bhargaviIcon.svg", // Replace with correct logo paths if different

        mapLocation: { id: 11, lat: 12.9050, lng: 74.8260 }
    },
    {
        id: "gokuldham",
        name: "Gokuldham",
        label: "Residential",
        location: "Mannagudda Apartments, Mangalore ",
        image: "/images/gokuldhamImages/heroDesk.png",
        slug: "/gokuldham",
        type: "completed" as const,
        mapLocation: { id: 12, lat: 12.8960, lng: 74.8500 },
        markerIcon: "/icons/mapIcons/gokuldamIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "mukund-sadhan",
        name: "Mukund Sadan",
        label: "Residential",
        location: "Dongerkery, Mangalore",
        image: "/images/mukundSadanImages/heroDesk.png",
        slug: "/mukund-sadan",
        type: "completed" as const,
        mapLocation: { id: 13, lat: 12.9080, lng: 74.8380 },
        markerIcon: "/icons/mapIcons/sadanIcon.svg", // Replace with correct logo paths if different

    },
    {
        id: "kailash",
        name: "Kailash",
        label: "Residential",
        location: "Kottara Chowki, Mangalore",
        image: "/images/kailashImages/heroDesk.png",
        slug: "/kailash",
        type: "completed" as const,
        mapLocation: { id: 14, lat: 12.8790, lng: 74.8350 },
        markerIcon: "/icons/mapIcons/kailashIcon.svg", // Replace with correct logo paths if different

    },
];

import { useSearchParams, useRouter, usePathname } from "next/navigation";

interface ProjectsMapSectionProps {
    // filterType removed as we will read it internally
}

export default function ProjectsMapSection() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const typeParam = searchParams.get("type");
    const filterType = (typeParam === "completed" || typeParam === "ongoing") ? typeParam : "ongoing";

    const displayProjects = PROJECTS_DATA.filter((p) => p.type === filterType);

    const handleToggle = (type: "ongoing" | "completed") => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("type", type);
        router.push(`${pathname}?${params.toString()}`, { scroll: false });
    };

    const [activeProject, setActiveProject] = useState(displayProjects[0] || PROJECTS_DATA[0]);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (displayProjects.length > 0) {
            setActiveProject(displayProjects[0]);
        }
    }, [filterType]);

    const mapLocations = displayProjects.map(p => ({
        ...p.mapLocation,
        mapLink: p.slug,
        name: p.name,
        markerIcon: p.markerIcon || "/icons/mapIcon.svg"
    }));

    return (
        <section className="relative w-full bg-[#e5e5e5]">
            {/* Project Type Toggle - Sticky within this section */}
            <div className="absolute inset-y-0 right-0 z-[40] pointer-events-none w-full">
                <div className="sticky top-28 px-6 md:px-12 flex justify-end pointer-events-auto">
                    <div className="bg-white/60 backdrop-blur-2xl p-1.5 rounded-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-1">
                        {(["ongoing", "completed"] as const).map((type) => (
                            <button
                                key={type}
                                onClick={() => handleToggle(type)}
                                className={`relative px-8 py-3 rounded-xl text-[12px] md:text-[13px] font-bold uppercase tracking-[0.15em] transition-all duration-500 group ${filterType === type
                                    ? "text-white"
                                    : "text-[#505153]/50 hover:text-[#505153]"
                                    }`}
                            >
                                {filterType === type && (
                                    <motion.div
                                        layoutId="active-pill-modern"
                                        className="absolute inset-0 bg-gradient-to-r from-[#0097DC] to-[#007BB5] rounded-xl shadow-[0_8px_20px_rgba(0,151,220,0.25)]"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {type === "ongoing" && (
                                        <span className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${filterType === type ? "bg-white" : "bg-[#0097DC] animate-pulse"}`} />
                                    )}
                                    {type === "completed" && (
                                        <CheckCircle2 className={`w-3.5 h-3.5 transition-colors duration-500 ${filterType === type ? "text-white" : "text-[#505153]/30"}`} />
                                    )}
                                    {type}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Made the Map 'sticky' to the top of the screen so it freezes while scrolling */}
            <div className="sticky top-0 z-0 h-screen w-full">
                <StyledMap
                    activePoints={[activeProject?.mapLocation?.id]}
                    center={activeProject ? { lat: activeProject.mapLocation.lat, lng: activeProject.mapLocation.lng } : { lat: 12.9144, lng: 74.8357 }} // Fallback center
                    zoom={14}
                    locations={isMobile ? [] : mapLocations}
                    hideMainIcon={true}
                    renderAsMarkers={true}
                />
            </div>

            {/* 3. Replaced inner scrolling with a negative top margin to pull this content OVER the sticky map */}
            <div className="relative z-10 w-full max-w-[550px] -mt-[100vh] px-6 md:px-12 py-32 lg:ml-10 xl:ml-32 pb-[20vh]">
                <div className="flex flex-col gap-20">
                    {displayProjects.map((project) => (
                        <Link
                            href={project.slug}
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
                                {project.label && (
                                    <span className="text-[#0097DC] text-[12px] font-bold tracking-[0.2em] mb-3 uppercase block">
                                        {project.label}
                                    </span>
                                )}
                                <h3 className="text-[28px] md:text-[34px] font-normal text-[#505153] leading-tight mb-2">
                                    {project.name}
                                </h3>
                                <p className="text-[#505153]/60 font-medium text-[14px] md:text-lg tracking-wide">
                                    {project.location}
                                </p>

                                <div className="mt-8 flex justify-start w-full">
                                    <Link
                                        href={project.slug}
                                        className="bg-[#0097DC] hover:bg-[#0085C0] transition-colors text-white text-[15px] font-medium px-8 py-[14px] flex items-center justify-center gap-3  transition-all duration-300  w-full md:w-auto  "
                                    >
                                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                                        Explore the Project
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </section>
    );
}
