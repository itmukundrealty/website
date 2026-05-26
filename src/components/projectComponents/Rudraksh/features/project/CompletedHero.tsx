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
    projectLink?: string;
    view360Url?: string;
}

export function CompletedHero({
    desktopImage,
    mobileImage,
    title,
    subtitle,
    variant = "topRight",
    mobileVariant = "center",
    pdfPath,
    projectLink = "/project-enquire",
    view360Url,
}: CompletedHeroProps) {
    const desktopStyles = {
        topRight: {
            container: "lg:items-start lg:justify-end",
            text: "lg:text-right",
            textMargin: "lg:mt-28 xl:mt-40",
            buttonAlign: "lg:justify-end"
        },
        center: {
            container: "lg:items-end lg:justify-start lg:pb-20",
            text: "lg:text-left w-full",
            textMargin: "",
            buttonAlign: "lg:justify-end"
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
            container: "items-end justify-start pb-16",
            text: "text-left w-full",
            textMargin: "",
            buttonAlign: "justify-end"
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
                {/* Desktop image */}
                <div className="hidden lg:block h-full w-full">
                    <Image
                        src={desktopImage}
                        alt="Hero Background"
                        fill
                        className="object-cover transition-all duration-1000"
                        priority
                    />
                </div>
                {/* Mobile image */}
                <div className="block lg:hidden h-full w-full relative">
                    <Image
                        src={mobileImage}
                        alt="Hero Background Mobile"
                        fill
                        className="object-cover object-bottom"
                        priority
                    />
                    {/* Mobile gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0" />
                </div>
            </div>

            {/* ===================== MOBILE LAYOUT (hidden on lg+) ===================== */}
            <div className="absolute inset-0 z-10 flex lg:hidden flex-col justify-between px-6 py-16 pointer-events-none">
                {/* Top: Title (Center Aligned) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-center mt-12"
                >
                    <h1 className="text-4xl text-white tracking-tight font-medium leading-tight">
                        {title}
                    </h1>
                    {subtitle && (
                        <h2 className="text-2xl text-white/80 tracking-tight font-light mt-1">
                            {subtitle}
                        </h2>
                    )}
                </motion.div>

                {/* Bottom: Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="w-full flex flex-col gap-3 pointer-events-auto"
                >
                    <Link href={projectLink} className="w-full">
                        <button className="w-full bg-white text-[#0097DC] py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm shadow-lg">
                            Enquire Now
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    </Link>
                    {view360Url && (
                        <Link href={view360Url} target="_blank" rel="noopener noreferrer" className="w-full">
                            <button className="w-full bg-white text-[#0097DC] py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm shadow-lg">
                                360° View
                                <ArrowUpRight className="w-5 h-5" />
                            </button>
                        </Link>
                    )}
                    {pdfPath && (
                        <button
                            onClick={handleDownload}
                            className="w-full bg-[#0097DC] text-white py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm shadow-lg cursor-pointer"
                        >
                            Download Floor Plans
                            <ArrowUpRight className="w-5 h-5" />
                        </button>
                    )}
                </motion.div>
            </div>

            {/* ===================== DESKTOP LAYOUT (hidden on mobile) ===================== */}
            <div className={`relative z-10 hidden lg:flex h-full px-12 lg:px-24 pointer-events-none ${containerClasses}`}>
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className={`pointer-events-auto ${textClasses}`}
                >
                    <div className={variant === 'center' ? "flex flex-col lg:flex-col items-start lg:items-end justify-between gap-8 w-full" : ""}>
                        <div className="flex flex-col gap-2">
                            <h1 className={`text-4xl text-white tracking-tight font-medium lg:text-7xl ${variant === 'center' ? 'mb-0' : 'mb-4'}`}>
                                {title}
                            </h1>
                            {variant === 'center' && subtitle && (
                                <h2 className="text-5xl text-white tracking-tight font-light lg:text-7xl">
                                    {subtitle}
                                </h2>
                            )}
                        </div>

                        {variant === 'center' && (pdfPath || view360Url) && (
                            <div className="flex flex-row flex-wrap items-center justify-start lg:justify-end gap-4 w-full md:w-auto mb-2">
                                {view360Url && (
                                    <Link
                                        href={view360Url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-center gap-2 px-6 py-5 bg-white text-[#0097DC] hover:bg-white/80 transition-colors uppercase tracking-wide font-bold w-full md:w-fit text-[14px] cursor-pointer"
                                    >
                                        360° View
                                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                                    </Link>
                                )}
                                {pdfPath && (
                                    <button
                                        onClick={handleDownload}
                                        className="group flex items-center justify-center gap-2 px-6 py-5 bg-white text-[#0097DC] hover:bg-white/80 transition-colors uppercase tracking-wide font-bold w-full md:w-fit text-[14px] cursor-pointer"
                                    >
                                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                                        Download Floor Plans
                                    </button>
                                )}
                            </div>
                        )}
                    </div>

                    {variant !== 'center' && (
                        <h2 className="text-5xl text-white tracking-tight font-light lg:text-7xl">
                            {subtitle}
                        </h2>
                    )}

                    {variant !== 'center' && (pdfPath || view360Url) && (
                        <motion.div
                            className={`flex flex-col sm:flex-row flex-wrap gap-4 w-full mt-8 ${buttonAlignClasses}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                        >
                            {view360Url && (
                                <Link
                                    href={view360Url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center md:justify-start gap-2 px-6 py-5 md:px-6 md:py-6 bg-white text-[#0097DC] hover:bg-white/80 transition-colors uppercase tracking-wide font-bold shrink-0 w-full md:w-fit text-[14px] cursor-pointer"
                                >
                                    360° View
                                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                                </Link>
                            )}
                            {pdfPath && (
                                <button
                                    onClick={handleDownload}
                                    className="group flex items-center justify-center md:justify-start gap-2 px-6 py-5 md:px-6 md:py-6 bg-white text-[#0097DC] hover:bg-white/80 transition-colors uppercase tracking-wide font-bold shrink-0 w-full md:w-fit text-[14px] cursor-pointer"
                                >
                                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                                    Download Floor Plans
                                </button>
                            )}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
