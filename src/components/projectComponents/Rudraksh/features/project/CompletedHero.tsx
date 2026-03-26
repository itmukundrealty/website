"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface CompletedHeroProps {
    desktopImage: string;
    mobileImage: string;
    title: string | ReactNode;
    subtitle: string | ReactNode;
    variant?: "topRight" | "center" | "rightCentered";
    mobileVariant?: "topRight" | "center";
    pdfPath?: string;
}

export function CompletedHero({
    desktopImage,
    mobileImage,
    title,
    subtitle,
    variant = "topRight",
    mobileVariant = "center",
    pdfPath,
}: CompletedHeroProps) {
    const desktopStyles = {
        topRight: {
            container: "lg:items-start lg:justify-end",
            text: "lg:text-right",
            textMargin: "lg:mt-28 xl:mt-40",
            buttonAlign: "lg:justify-end"
        },
        center: {
            container: "lg:items-start lg:justify-center",
            text: "lg:text-center",
            textMargin: "lg:mt-28 xl:mt-40",
            buttonAlign: "lg:justify-center"
        },
        rightCentered: {
            container: "lg:items-center lg:justify-end",
            text: "lg:text-right",
            textMargin: "",
            buttonAlign: "lg:justify-end"
        },
    };

    const mobileStyles = {
        topRight: {
            container: "items-start justify-end",
            text: "text-right",
            textMargin: "mt-24 lg:mt-0",
            buttonAlign: "justify-end"
        },
        center: {
            container: "items-start justify-center",
            text: "text-center",
            textMargin: "mt-24 lg:mt-0",
            buttonAlign: "justify-center"
        },
    };

    const { container: desktopContainer, text: desktopText, textMargin: desktopMargin, buttonAlign: desktopButtonAlign } = desktopStyles[variant];
    const { container: mobileContainer, text: mobileText, textMargin: mobileMargin, buttonAlign: mobileButtonAlign } = mobileStyles[mobileVariant];

    const containerClasses = `${mobileContainer} ${desktopContainer}`;
    const textClasses = `${mobileText} ${mobileMargin} ${desktopText} ${desktopMargin}`;
    const buttonAlignClasses = `${mobileButtonAlign} ${desktopButtonAlign}`;

    const handleDownload = () => {
        if (pdfPath) {
            const link = document.createElement("a");
            link.href = pdfPath;
            link.download = pdfPath.split("/").pop() || "floor-plan.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <section className="relative h-[100vh] w-full overflow-hidden bg-black">
            {/* 1. BACKGROUND LAYER */}
            <div className="absolute inset-0 z-0">
                <div className="hidden lg:block h-full w-full">
                    <Image
                        src={desktopImage}
                        alt="Hero Background"
                        fill
                        className="object-cover transition-all duration-1000"
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
                    <div className={variant === 'center' ? "flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-18 mb-4" : ""}>
                        <h1 className={`text-4xl text-white tracking-tight font-medium lg:text-7xl ${variant === 'center' ? 'mb-0' : 'mb-4'}`}>
                            {title}
                        </h1>
                        {variant === 'center' && pdfPath && (
                            <button
                                onClick={handleDownload}
                                className="group flex items-center justify-center gap-2 px-6 py-5 bg-white text-[#0097DC] hover:bg-white/80 transition-colors uppercase tracking-wide font-bold w-full md:w-fit text-[14px]"
                            >
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                                Download Floor Plans
                            </button>
                        )}
                    </div>

                    <h2 className="text-5xl text-white tracking-tight font-light lg:text-7xl">
                        {subtitle}
                    </h2>
                    
                    {variant !== 'center' && pdfPath && (
                        <motion.div 
                            className={`flex w-full mt-8 ${buttonAlignClasses}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            <button
                                onClick={handleDownload}
                                className="group flex items-center justify-center md:justify-start gap-2 px-6 py-5 md:px-6 md:py-6 bg-white text-[#0097DC] hover:bg-white/80 transition-colors uppercase tracking-wide font-bold shrink-0 w-full md:w-fit text-[14px]"
                            >
                                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                                Download Floor Plans
                            </button>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
