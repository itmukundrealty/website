"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LandmarkCardProps {
    title: string;
    location: string;
    src: string;
    color: string;
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    isLast: boolean;
    link: string;
}

const LandmarkCard = ({ title, location, src, color, i, progress, range, targetScale, link }: LandmarkCardProps) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    // transform backward -5 when it reaches the pinned point
    const rotateX = useTransform(progress, range, [0, -5]);

    return (
        <div ref={container} className="h-auto min-h-[450px] md:min-h-[600px] flex items-center justify-center sticky top-0 [perspective:1000px] px-0 md:px-0">
            {/* when i click on each card i need it to redirect to corresponding link  */}

            <motion.div
                style={{
                    scale,
                    rotateX,
                    top: `calc(5vh + ${i * 20}px)`, // Adjusted top offset for mobile/desktop balance
                }}
                className="relative h-[450px] md:h-[650px] w-full max-w-full bg-white overflow-hidden origin-top group cursor-pointer"
            >
                <Link href={link} className="absolute inset-0 z-20" aria-label={`View details for ${title}`} />
                {/* Full Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        fill
                        src={src}
                        alt={title}
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                </div>

                {/* Light Gradient Overlay for "Modern Sophistication" look */}
                <div className="absolute bottom-0 left-0 w-full h-[60%] md:h-[50%] bg-gradient-to-t from-white via-white/80 to-transparent" />

                {/* Content Overlay - Dark Text on Light Background */}
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full z-10 pointer-events-none">
                    <h2 className="text-3xl md:text-5xl font-normal mb-2 md:mb-3 tracking-tight text-[#505153]  leading-tight">{title}</h2>
                    <div className="flex items-center gap-2 text-[#0097DC] text-md md:text-base  font-semibold">
                        <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        <span className=" tracking-wider text-md">{location}</span>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

const projects = [
    {
        title: "Kedar",
        location: "Hyderabad",
        src: "/images/LandingPageImg/landmarks/1.png",
        color: "#EFE8D3",
        link: "/kedar"
    },
    {
        title: "Ashoka Buisness Center",
        location: "Chennai",
        src: "/images/LandingPageImg/landmarks/2.png",
        color: "#E1DAD6",
        link: "/ashoka"
    },
    {
        title: "Rudraksh",
        location: "Behind Infosys, Kottara | Mangalore ",
        src: "/images/LandingPageImg/landmarks/3.png",
        color: "#F0F0F0",
        link: "/rudraksh"
    }
];

export default function LandmarkSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="relative mb-[10vh] px-6 lg:px-20 xl:px-52 ">

            {/* Header Section from photo */}
            <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12 md:mb-20">
                <div className="w-full md:w-auto">
                    <h3 className="text-3xl md:text-6xl   "><span className="font-light text-[#505153]">Landmarks Of</span></h3>
                    <h2 className="text-3xl md:text-6xl text-[#505153]  mt-2 ">Modern Sophistication</h2>
                </div>

                {/* <Link href="/projects" className="group flex items-center justify-center gap-2 border border-[#0097DC] px-6 py-4 md:py-5 w-auto text-[#0097DC] transition-all duration-300 mb-2 font-bold  text-sm md:text-base  ">
                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:rotate-45 transition-all duration-300 " />
                    Explore our projects
                </Link> */}
            </div>

            {projects.map((project, i) => {
                // Reduced scaling effect slightly to match the subtle depth in photo
                const targetScale = 1 - ((projects.length - i) * 0.04);
                return (
                    <LandmarkCard
                        key={i}
                        i={i}
                        {...project}
                        progress={scrollYProgress}
                        range={[i * 0.33, 1]}
                        targetScale={targetScale}
                        isLast={i === projects.length - 1}
                    />
                );
            })}
        </div>
    );
}