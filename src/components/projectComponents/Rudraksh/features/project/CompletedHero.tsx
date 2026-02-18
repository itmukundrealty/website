"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ReactNode } from "react";

export interface CompletedHeroProps {
    desktopImage: string;
    mobileImage: string;
    title: string | ReactNode;
    subtitle: string | ReactNode;
    variant?: "topRight" | "center" | "rightCentered";
    mobileVariant?: "topRight" | "center";
}

export function CompletedHero({
    desktopImage,
    mobileImage,
    title,
    subtitle,
    variant = "topRight",
    mobileVariant = "center",
}: CompletedHeroProps) {
    const desktopStyles = {
        topRight: {
            container: "lg:items-start lg:justify-end",
            text: "lg:text-right",
            textMargin: "lg:mt-28 xl:mt-40",
        },
        center: {
            container: "lg:items-start lg:justify-center",
            text: "lg:text-center",
            textMargin: "lg:mt-28 xl:mt-40",
        },
        rightCentered: {
            container: "lg:items-center lg:justify-end",
            text: "lg:text-right",
            textMargin: "",
        },
    };

    const mobileStyles = {
        topRight: {
            container: "items-start justify-end",
            text: "text-right",
            textMargin: "mt-24 lg:mt-0",
        },
        center: {
            container: "items-start justify-center",
            text: "text-center",
            textMargin: "mt-24 lg:mt-0",
        },
    };

    const { container: desktopContainer, text: desktopText, textMargin: desktopMargin } = desktopStyles[variant];
    const { container: mobileContainer, text: mobileText, textMargin: mobileMargin } = mobileStyles[mobileVariant];

    const containerClasses = `${mobileContainer} ${desktopContainer}`;
    const textClasses = `${mobileText} ${mobileMargin} ${desktopText} ${desktopMargin}`;

    return (
        <section className="relative h-[100vh] w-full overflow-hidden bg-black">
            {/* 1. BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                <div className="hidden lg:block h-full w-full">
                    <Image
                        src={desktopImage}
                        alt="Hero Background"
                        fill
                        className="object-fill transition-all duration-1000"
                        priority
                    />
                </div>
                <div className="block lg:hidden h-full w-full">
                    <Image
                        src={mobileImage}
                        alt="Hero Background Mobile"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* 2. HERO TEXT CONTENT */}
            <div className={`relative z-10 flex h-full px-12 lg:px-24 pointer-events-none ${containerClasses}`}>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`pointer-events-auto ${textClasses}`}
                >
                    <h1 className="text-4xl text-white tracking-tight font-medium mb-4 lg:text-7xl">
                        {title}
                    </h1>
                    <h2 className="text-5xl text-white tracking-tight font-thin lg:text-7xl">
                        {subtitle}
                    </h2>
                </motion.div>
            </div>
        </section>
    );
}
