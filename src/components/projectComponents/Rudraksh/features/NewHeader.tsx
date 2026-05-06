"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { PROJECTS_LIST } from "@/data/projects";

interface NewHeaderProps {
    projectLink?: string;
    projectName?: string;
    floorPlanPdf?: string;
    hideAmenities?: boolean;
    amenitiesTarget?: string;
    logo?: string;
    scrolledLogo?: string;
    view360Url?: string;
    btnAccentColor?: string;
}

export default function NewHeader({
    projectLink = "/project-enquire",
    projectName = "Rudraksh",
    floorPlanPdf = "/downloadFloorPlan/typical layout.pdf", // Default placeholder
    hideAmenities = false,
    amenitiesTarget = "#amenities",
    logo = "/icons/mukundIcon.svg",
    scrolledLogo = "/icons/logo.svg",
    view360Url,
    btnAccentColor
}: NewHeaderProps) {
    const pathname = usePathname();
    const currentPath = pathname?.split("/")[1] || "";

    const projectMapping: Record<string, string> = {
        rudraksh: "rudraksh",
        "mathura-residency": "mathura",
        "ajanta-business-center": "ajanta",
        "ashoka-business-center": "ashoka",
        "bhargavi-gloria-residency": "bhargavi",
        "evanna-homes": "evanna",
        gokuldham: "gokuldham",
        kailash: "kailash",
        kedar: "kedar",
        "kudva-grandeur": "kudva",
        "madhuban-apartments": "madhuban",
        "mukund-sadan": "mukund-sadhan",
        "nandadeep-apartments": "nandadeep",
        "nandagokul-apartments": "nandagokul",
    };

    const projectKey = projectMapping[currentPath];
    const project = PROJECTS_LIST.find(p => p.id === projectKey);
    const isCompleted = project?.type === 'completed';

    const finalProjectLink = projectLink === "/project-enquire" && projectKey ? `/project-enquire?project=${projectKey}` : projectLink;

    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isExplorerOpen, setIsExplorerOpen] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);

    // Listen for floor explorer toggle events
    useEffect(() => {
        const handleToggle = (e: any) => {
            setIsExplorerOpen(e.detail.isOpen);
        };
        window.addEventListener("floorExplorerToggle", handleToggle);
        return () => window.removeEventListener("floorExplorerToggle", handleToggle);
    }, []);

    // Handle Scroll — hide on scroll down, show on scroll up
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsScrolled(currentScrollY > 20);
            setIsPastHero(currentScrollY > window.innerHeight * 0.9);

            if (currentScrollY < 20) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        ...(!hideAmenities ? [{ label: "Amenities", href: amenitiesTarget }] : []),
        { label: "Location", href: "#location" },
    ];

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith("#")) {
            e.preventDefault();
            const id = href.substring(1);
            if (id === "") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 w-full z-100 transition-all duration-500 ease-in-out
          ${isVisible && !isExplorerOpen ? "translate-y-0" : "-translate-y-full"}
          ${isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"}
          ${isExplorerOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
            >
                <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center bg-transparent">
                    {/* Logo Section */}
                    <Link href="    " className="z-50 relative">
                        <div className="relative w-32 md:w-36 lg:w-40 h-auto aspect-[3/1]">
                            <Image width={500} height={500} src={isScrolled ? scrolledLogo : logo} alt="Mukund Realty" className="object-contain w-full h-full" />
                        </div>
                    </Link>

                    {/* Right Aligned Content Block */}
                    <div className="hidden md:flex items-center gap-8 lg:gap-12 xl:gap-16">
                        {/* Desktop Navigation */}
                        <nav className="flex items-center gap-8 lg:gap-10 xl:gap-16" style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`hover:text-[var(--btn-accent)] text-[15px] lg:text-lg font-light tracking-wide transition-colors duration-300 ${isScrolled ? "text-[#505153]" : "text-white"}`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Buttons Section */}
                        <div className={`flex items-center gap-4 transition-all duration-500 overflow-hidden ${isPastHero ? "opacity-100 max-w-2xl translate-x-0" : "opacity-0 max-w-0 translate-x-10"}`}>
                            {!isCompleted && (
                                <a
                                    href={floorPlanPdf}
                                    download
                                    style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                    className={`px-8 py-2 border text-sm font-medium text-center tracking-wide transition-all duration-300 uppercase
                  ${isScrolled
                                            ? "border-[var(--btn-accent)] text-[var(--btn-accent)] hover:opacity-80"
                                            : "border-white text-white hover:bg-white hover:text-[var(--btn-accent)]"
                                        }`}
                                >
                                    Download <br /> Floor Plans
                                </a>
                            )}
                            {view360Url && (
                                <Link
                                    href={view360Url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                    className={`px-6 py-4.5 border text-sm font-medium tracking-wide transition-all duration-300 uppercase flex items-center gap-2
                  ${isScrolled
                                            ? "border-[var(--btn-accent)] text-[var(--btn-accent)] hover:bg-[var(--btn-accent)] hover:text-white"
                                            : "border-white text-white hover:bg-white hover:text-[var(--btn-accent)]"
                                        }`}
                                >
                                    360° View
                                    <ArrowUpRight size={18} />
                                </Link>
                            )}
                            <Link
                                href={finalProjectLink}
                                style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                className="bg-[var(--btn-accent)] hover:opacity-90 text-white px-6 py-4.5 text-sm font-medium tracking-wide transition-all duration-300 uppercase flex items-center gap-2"
                            >
                                Enquire Now
                                <ArrowUpRight size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button 
                        className={`md:hidden z-50 p-2 -mr-2 transition-colors duration-300 ${isScrolled ? "text-[#505153] hover:text-[var(--btn-accent)]" : "text-white hover:text-[var(--btn-accent)]"}`} 
                        style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu strokeWidth={1.5} size={32} />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white z-[200] flex flex-col"
                    >
                        {/* Mobile Header */}
                        <div className="flex justify-between items-center p-6 border-b border-gray-50">
                            <div className="w-32">
                                <Image width={500} height={500} src={scrolledLogo} alt="Mukund Realty" className="w-full object-contain" />
                            </div>
                            <button 
                                onClick={() => setIsMobileMenuOpen(false)} 
                                className="p-2 -mr-2 text-black hover:text-[var(--btn-accent)] rounded-full transition-colors duration-300"
                                style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                            >
                                <X strokeWidth={1.5} size={32} />
                            </button>
                        </div>

                        {/* Mobile Navigation Content */}
                        <div className="flex-1 overflow-y-auto bg-white px-6 py-8">
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.label}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="text-2xl text-[#505153] hover:text-[var(--btn-accent)] font-light py-4 border-b border-gray-100 flex justify-between items-center transition-colors duration-300"
                                        style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                    >
                                        {link.label}
                                    </Link>
                                ))}

                                <div className="pt-8 flex flex-col gap-4">
                                    {!isCompleted && (
                                        <a
                                            href={floorPlanPdf}
                                            download
                                            style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                            className="w-full py-4 px-8 border border-[var(--btn-accent)] text-[var(--btn-accent)] hover:bg-[var(--btn-accent)] hover:text-white transition-colors text-center font-medium tracking-widest uppercase"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            Download Floor Plans
                                        </a>
                                    )}
                                    {view360Url && (
                                        <Link
                                            href={view360Url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                            className="w-full py-4 border border-[var(--btn-accent)] text-[var(--btn-accent)] hover:bg-[var(--btn-accent)] hover:text-white transition-colors text-center font-medium tracking-widest uppercase flex items-center justify-center gap-2"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            360° View
                                            <ArrowUpRight size={20} />
                                        </Link>
                                    )}
                                    <Link
                                        href={finalProjectLink}
                                        style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
                                        className="w-full py-4 bg-[var(--btn-accent)] text-white hover:opacity-90 transition-opacity text-center font-medium tracking-widest uppercase flex items-center justify-center gap-2"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        Enquire Now
                                        <ArrowUpRight size={20} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}