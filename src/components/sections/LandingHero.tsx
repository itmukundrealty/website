"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

// --- Types ---
interface CarouselItem {
    id: number;
    image: string;
}

// --- Sample Data (Placeholders) ---
const SAMPLE_ITEMS: CarouselItem[] = [
    { id: 1, image: "/images/LandingPageImg/hero/1.png" },
    { id: 2, image: "/images/LandingPageImg/hero/2.png" },
    { id: 3, image: "/images/LandingPageImg/hero/3.png" },
    { id: 4, image: "/images/LandingPageImg/hero/4.png" },
    { id: 5, image: "/images/LandingPageImg/hero/5.png" },
    { id: 6, image: "/images/LandingPageImg/hero/6.png" },
    { id: 7, image: "/images/LandingPageImg/hero/1.png" },
    { id: 8, image: "/images/LandingPageImg/hero/2.png" },



];

export default function LandingHeroSection() {
    return (
        <div className="w-full bg-white overflow-hidden flex flex-col">

            {/* --- Section 1: Text Left / Carousel Right --- */}
            <section className="relative w-full lg:min-h-[90vh] xl:min-h-[80vh]  flex flex-col lg:flex-row items-center md:gap-30 lg2:gap-0 py-20 lg:py-0">

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-1/1 px-8 lg:pl-20 z-10 flex flex-col justify-center mt-12 lg:mt-0">
                    <div className="flex items-center gap-4 mb-6">

                        {/* Vertical line/Label if needed */}
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl  font-light tracking-tight text-[#505153] leading-[1.1]">
                        <span className="font-light text-[#505153]">The <br className="lg:hidden" /> Foundation of</span>  <br className="" />

                        <span className="font-medium text-[#505153]">Every Great Future</span>
                    </h1>
                </div>

                {/* Right Side: The 3D Carousel */}
                <div className="w-full lg:w-1/2 h-[350px] lg:h-[100vh] lg2:h-[70vh] relative flex items-center justify-center perspective-container overflow-visible ms-[22vh] ">
                    {/* Reduced radius to 350 for smaller look */}
                    <InfiniteCircularCarousel items={SAMPLE_ITEMS} radius={350} mobileRadius={180} mobileItemCount={5} duration={30} />
                </div>

            </section>

            {/* --- Section 2: Carousel Left / Text Right --- */}
            <section className="relative w-full lg:min-h-[90vh] xl:min-h-[80vh]  flex flex-col-reverse lg:flex-row md:gap-36 items-center py-0 lg:py-0">

                {/* Left Side: The 3D Carousel */}
                <div className="w-full lg:w-1/2 h-[350px] lg:h-[600px] relative flex items-center justify-center perspective-container overflow-visible z-0  -ms-[22vh]">
                    <InfiniteCircularCarousel items={SAMPLE_ITEMS} radius={350} mobileRadius={180} mobileItemCount={5} duration={30} clockwise={true} />
                </div>

                {/* Right Side: Text Content */}
                <div className="w-full lg:w-1/2 px-8 lg:pl-12 lg:pr-20 z-10 flex flex-col justify-center mb-12 lg:mb-0">
                    <div className="max-w-lg">
                        <p className="text-lg lg:text-lg font-light text-[#505153] leading-relaxed mb-8">
                            Since 2012, <span className="font-medium text-[#505153]">Mukund Realty</span> has been committed to creating thoughtfully built residential and commercial spaces rooted in integrity, precision and long-term value. Our approach blends disciplined planning with purposeful design, resulting in spaces that inspire confidence and lasting relevance.
                        </p>

                        <Link href="/about" className="inline-flex items-center text-[#0097DC] font-semibold hover:text-[#0097DC] transition-colors group">
                            <span className="mr-2 group-hover:rotate-45 transition-transform duration-300"><svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.46206 1.49928L15.6005 1.49911M15.6005 1.49911L15.6005 13.4649M15.6005 1.49911L1.5 15.5996" stroke="#0097DC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            </span>
                            Learn More about Mukund Reality
                        </Link>
                    </div>
                </div>

            </section>

        </div>
    );
}

// --- The Carousel Component ---

function InfiniteCircularCarousel({
    items,
    radius,
    mobileRadius,
    mobileItemCount, // Add explicit mobileItemCount prop
    duration = 30,
    clockwise = true
}: {
    items: CarouselItem[];
    radius: number;
    mobileRadius?: number;
    mobileItemCount?: number; // Optional prop type
    duration?: number;
    clockwise?: boolean;
}) {
    const controls = useAnimation();
    const [currentRadius, setCurrentRadius] = useState(radius);
    const [displayItems, setDisplayItems] = useState(items);

    // Total degrees per item - based on currently displayed items
    const angleStep = 360 / displayItems.length;

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth < 1024; // lg breakpoint is 1024px

            // Handle Radius
            if (mobileRadius && isMobile) {
                setCurrentRadius(mobileRadius);
            } else {
                setCurrentRadius(radius);
            }

            // Handle Item Count
            if (mobileItemCount && isMobile) {
                setDisplayItems(items.slice(0, mobileItemCount));
            } else {
                setDisplayItems(items);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [radius, mobileRadius, mobileItemCount, items]);

    useEffect(() => {
        // Continuous rotation loop
        // To rotate single direction, we just animate rotateY from 0 to 360
        // If we want "single direction" regardless of previous state, just loop 0 -> 360
        controls.start({
            rotateY: clockwise ? 360 : -360,
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [controls, duration, clockwise]);

    return (
        <div className="relative flex items-center justify-center">
            <div
                style={{
                    perspective: "1200px",
                    transformStyle: "preserve-3d",
                }}
                className="relative flex items-center justify-center"
            >
                <div
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "rotateZ(-20deg) rotateX(0deg)", // Fixed static tilt
                    }}
                    className="relative flex items-center justify-center"
                >
                    <motion.div
                        animate={controls}
                        style={{
                            transformStyle: "preserve-3d",
                            // Only rotateY (spin) is handled here
                        }}
                        className="relative flex items-center justify-center"
                    >
                        {displayItems.map((item, index) => {
                            const theta = index * angleStep;
                            return (
                                <CarouselCard
                                    key={item.id}
                                    item={item}
                                    angle={theta}
                                    radius={currentRadius} // Use dynamic radius
                                />
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

function CarouselCard({
    item,
    angle,
    radius,
}: {
    item: CarouselItem;
    angle: number;
    radius: number;
}) {
    return (
        <motion.div
            className="absolute md:w-[280px] w-[250px] md:h-[250px] h-[180px]  overflow-hidden "
            style={{
                // 1. Rotate around Y axis to angle
                // 2. Push out by radius
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
            }}
        >
            <img
                src={item.image}
                alt="Workspace design"
                className="w-full h-full object-cover pointer-events-none object-top"
            />
        </motion.div>
    );
}