"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface LandmarkCardProps {
    title: string;
    location: string;
    description1: string;
    description2: string;
    desktopSrc: string;
    mobileSrc: string;
    color: string;
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    isLast: boolean;
    link: string;
}

const LandmarkCard = ({ title, location, description1, description2, desktopSrc, mobileSrc, color, i, progress, range, targetScale, link }: LandmarkCardProps) => {
    const container = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const scale = useTransform(progress, range, [1, targetScale]);
    // transform backward -5 when it reaches the pinned point
    const rotateX = useTransform(progress, range, [0, -5]);

    return (
        <div ref={container} className="h-auto flex items-center justify-center sticky top-0 [perspective:1000px] px-0 md:px-0">
            <motion.div
                style={{
                    scale,
                    rotateX,
                    top: `calc(${isMobile ? "2vh" : "5vh"} + ${i * (isMobile ? 12 : 20)}px)`, 
                }}
                className="relative h-auto md:h-[650px] w-full max-w-full bg-white overflow-hidden origin-top flex flex-col md:flex-row group pb-6 md:pb-0"
            >
                {/* 
                    Image Container
                    On mobile, it sits on top with a fixed height.
                    On desktop, it fills the background.
                */}
                <div className="relative md:absolute md:inset-0 w-full h-[200px] md:h-full z-0">
                    <div className="hidden md:block absolute inset-0 w-full h-full">
                        <Image
                            fill
                            src={desktopSrc}
                            alt={title}
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            priority={i === 0}
                        />
                    </div>
                    <div className="block md:hidden absolute inset-0 w-full h-full">
                        <Image
                            fill
                            src={mobileSrc}
                            alt={title}
                            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            priority={i === 0}
                        />
                    </div>
                </div>

                {/* 
                    Gradient Overlays 
                    Desktop: Covers left side heavily and fades right
                */}
                <div className="hidden md:block absolute top-0 left-0 w-[65%] h-full bg-gradient-to-r from-white from-45% via-white/90 via-60% to-transparent pointer-events-none z-10" />

                {/* Content Container - Below image on mobile, absolute overlay on desktop */}
                <div className="relative md:absolute md:bottom-0 md:left-0 px-0 pt-5 md:p-12 w-full md:w-[40%] md:h-full flex flex-col justify-start md:justify-center z-20 bg-white md:bg-transparent">
                    <h2 className="text-[24px] md:text-[40px] font-normal mb-2 md:mb-3 tracking-tight text-[#505153] leading-tight whitespace-pre-wrap">
                        {title}
                    </h2>
                    <div className="flex items-center gap-2 text-[#0097DC] text-sm md:text-[15px] font-semibold mb-4 md:mb-8 pointer-events-auto">
                        <ArrowUpRight className="w-3.5 h-3.5 md:w-[18px] md:h-[18px]" strokeWidth={2.5} />
                        <span className="tracking-wide">{location}</span>
                    </div>
                    
                    <p className="text-[#505153] text-[17px] md:text-[17px] font-light leading-relaxed mb-3 md:mb-6 pr-4">
                        {description1}
                    </p>
                    <p className="text-[#505153] text-[17px] md:text-[17px] font-light leading-relaxed mb-6 md:mb-12 pr-4">
                        {description2}
                    </p>
                    
                    <div className="pointer-events-auto w-fit">
                        <Link href={link}>
                            <button className="bg-[#0097DC] hover:bg-[#0085C0] transition-colors text-white text-[13px] md:text-[16px] font-medium px-5 py-3 md:px-8 md:py-4 flex items-center justify-center gap-2 min-w-[130px]">
                                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 mb-[1px] group-hover:rotate-45 transition-all duration-300" strokeWidth={2.5} />
                                View Project
                            </button>
                        </Link>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

const projects = [
    {
        title: "Live the Duplex Life\nat Kedar",
        location: "Airport Road, Derebail | Mangalore",
        description1: "Step into elevated living at Kedar, where spacious duplex homes, refined design, and premium amenities come together in the heart of Mangalore. ",
        description2: "Starting at 1.15 Cr, it’s luxury designed for how you truly live.",
        desktopSrc: "/images/LandingPageImg/landmarks/new1.png",
        mobileSrc: "/images/LandingPageImg/landmarks/11.png",
        color: "#EFE8D3",
        link: "/kedar"
    },
    {
        title: "Work Elevated at Ashoka Business Center",
        location: "Airport Road, Kapikad | Mangalore",
        description1: "Step into a refined work environment, where modern design, advanced infrastructure, and premium amenities come together to support the way you work and grow.",
        description2: "Designed for today’s enterprises, it’s a workspace that elevates productivity and presence.",
        desktopSrc: "/images/LandingPageImg/landmarks/new2.png",
        mobileSrc: "/images/LandingPageImg/landmarks/12.png",
        color: "#E1DAD6",
        link: "/ashoka-business-center"
    },
    {
        title: "Experience Better Living at Rudraksh",
        location: "Behind Infosys, Kottara | Mangalore",
        description1: "Step into thoughtfully crafted living at Rudraksh, where smart design, everyday comfort, and well-planned amenities come together to support a balanced lifestyle.",
        description2: "Built for ease and convenience, it’s a home that fits effortlessly into the way you live.",
        desktopSrc: "/images/LandingPageImg/landmarks/new3.png",
        mobileSrc: "/images/LandingPageImg/landmarks/13.png",
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
        <div ref={container} className="relative mb-[10vh] px-6 lg:px-20 xl:px-52 pt-1">

            {/* Header Section from photo */}
            <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12 md:mb-16">
                <div className="w-full md:w-auto">
                    <h3 className="text-4xl md:text-6xl tracking-tight leading-[1.1] "><span className="font-light text-[#505153]">Landmarks Of</span> <br /><span className="font-medium text-[#505153]">Modern Sophistication</span></h3>
                </div>
            </div>

            <div className="relative">
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
        </div>
    );
}