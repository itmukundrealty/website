"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronUp, Send, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FooterProps {
    blogTitle?: string;
}

export default function Footer({ blogTitle }: FooterProps = {}) {
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
    const pathname = usePathname();

    const getBreadcrumbs = () => {
        if (pathname === "/") return <span>HOMEPAGE</span>;
        const segments = pathname.split("/").filter(Boolean);
        return (
            <>
                <Link href="/" className="hover:text-blue-500 transition-colors uppercase">HOME</Link>
                {segments.map((segment, index) => {
                    let displayText = segment.replace(/-/g, " ").toUpperCase();
                    if (index === segments.length - 1 && blogTitle) {
                        const words = blogTitle.split(" ");
                        displayText = words.slice(0, 3).join(" ") + (words.length > 3 ? "..." : "");
                        displayText = displayText.toUpperCase();
                    }
                    return (
                        <span key={index}>
                            <span className="mx-1">{'>'}</span>
                            {displayText}
                        </span>
                    );
                })}
            </>
        );
    };

    const quickLinks = [
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        // { name: "Media Centre", href: "/media-centre" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ];

    const ongoingProjects = [
        { name: "Rudraksh", href: "/rudraksh" },
        { name: "Ashoka Business Centre", href: "/ashoka-business-center" },
        { name: "Kedar", href: "/kedar" },
    ];

    const completedProjects = [
        { name: "Nandadeep Apartments", href: "/nandadeep-apartments" },
        { name: "Mathura Residency", href: "/mathura-residency" },
        { name: "Nandagokul Apartments", href: "/nandagokul-apartments" },
        { name: "Gokuldham", href: "/gokuldham" },
        { name: "Ajanta Business Center", href: "/ajanta-business-center" },
        { name: "Evanna Homes", href: "/evanna-homes" },
        { name: "Kudva's Grandeur", href: "/kudva-grandeur" },
        { name: "Madhuban Apartments", href: "/madhuban-apartments" },
        { name: "Bhargavi Gloria Residency", href: "/bhargavi-gloria-residency" },
        { name: "Mukund Sadan", href: "/mukund-sadan" },
        { name: "Kailash", href: "/kailash" },
    ];

    const socials = [
        { name: "Facebook", href: "https://www.facebook.com/mukundmgmrealty" },
        { name: "Instagram", href: "https://www.instagram.com/mukund_realty" },
        { name: "WhatsApp", href: "https://wa.me/917090933700" }
    ];

    const [mobileOngoingOpen, setMobileOngoingOpen] = useState(true);
    const [mobileCompletedOpen, setMobileCompletedOpen] = useState(false);

    return (
        <footer className="w-full bg-white font-sans text-[#4A4A4A] pt-10 md:pt-16">
            <div className=" mx-auto px-6 md:px-20 lg:px-20">

                {/* DESKTOP VIEW (md and up) */}
                <div className="hidden md:block">
                    {/* Breadcrumb Section */}
                    <div className="w-full border-b border-slate-200 pb-4 mb-16">
                        <p className="text-[11px] text-slate-400 uppercase tracking-[0.2em] font-normal">
                            {getBreadcrumbs()}
                        </p>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-8 mb-16 lg:mb-24">

                        {/* Column 1: Logo & Contact */}
                        <div className="md:col-span-12 lg:col-span-4 flex flex-col">
                            <Link href="/" className="mb-8 md:mb-10">
                                <Image src="/icons/logo.svg" alt="Mukund Realty" width={220} height={80} className="object-contain" />
                            </Link>

                            <div className="space-y-6 md:space-y-5 lg:pl-1 mt-2">
                                <div className="flex gap-4 md:gap-5 items-start">
                                    <Image src="/icons/locationIcon.svg" alt="Location" width={18} height={18} className="text-[#009FE3] mt-7 shrink-0 " />
                                    <p className="text-[14px] leading-relaxed max-w-[280px] text-[#1a1a1a]">
                                        Suprabhath Building,<br />
                                        1st Floor Bejai Kapikad Road,<br />
                                        Mangalore - 575 004, India
                                    </p>
                                </div>
                                <div className="flex gap-4 md:gap-5 items-center">
                                    <Phone size={18} className="text-[#009FE3] shrink-0" strokeWidth={1.5} />
                                    <Link href="tel:+917090933700" className="text-[14px] text-[#1a1a1a] hover:text-[#009FE3] transition-colors">
                                        +91 70909 33700
                                    </Link>
                                </div>
                                <div className="flex gap-4 md:gap-5 items-center">
                                    <Mail size={18} className="text-[#009FE3] shrink-0" strokeWidth={1.5} />
                                    <Link href="mailto:sales@mukundmgmrealty.com" className="text-[14px] text-[#1a1a1a] hover:text-[#009FE3] transition-colors">
                                        sales@mukundmgmrealty.com
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="md:col-span-4 lg:col-span-2 space-y-6 pt-2 lg:pt-1">
                            <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal">QUICK LINKS</h2>
                            <ul className="space-y-3.5 text-[14px]">
                                {quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#1a1a1a] hover:text-[#009FE3] transition-colors">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3: Ongoing Projects */}
                        <div className="md:col-span-4 lg:col-span-3 space-y-6 pt-2 lg:pt-1">
                            <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal">ONGOING PROJECTS</h2>
                            <ul className="space-y-3.5 text-[14px]">
                                {ongoingProjects.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#1a1a1a] hover:text-[#009FE3] transition-colors">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 4: Completed Projects */}
                        <div className="md:col-span-4 lg:col-span-3 space-y-6 pt-2 lg:pt-1">
                            <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal">COMPLETED PROJECTS</h2>
                            <ul className="grid grid-cols-1 gap-y-3.5 text-[14px]">
                                {completedProjects.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#1a1a1a] hover:text-[#009FE3] transition-colors">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Socials Row */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 mb-8 pt-4 pb-2">
                        <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal">SOCIALS</h2>
                        <div className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-2">
                            {socials.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[14px] text-[#1a1a1a] hover:text-[#009FE3] transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* MOBILE VIEW (only visible below md) */}
                <div className="md:hidden flex flex-col items-center">
                    {/* Logo centered */}
                    <div className="mb-10 w-full flex justify-center">
                        <Link href="/">
                            <Image src="/icons/logo.svg" alt="Mukund Realty" width={180} height={60} className="object-contain" />
                        </Link>
                    </div>

                    {/* Horizontal line + Breadcrumb */}
                    <div className="w-full border-y border-slate-100 py-4 mb-10 text-center">
                        <p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-normal">
                            {getBreadcrumbs()}
                        </p>
                    </div>

                    {/* Quick Links & Socials Grid */}
                    <div className="grid grid-cols-2 w-full gap-x-8 mb-12">
                        <div>
                            <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal mb-5">QUICK LINKS</h2>
                            <ul className="space-y-3 text-[13px]">
                                {quickLinks.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#333] hover:text-[#009FE3] transition-colors">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal mb-5">SOCIALS</h2>
                            <ul className="space-y-3 text-[13px]">
                                {socials.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-[#333] hover:text-[#009FE3] transition-colors">{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Ongoing Projects Accordion */}
                    <div className="w-full border-t border-slate-100 py-4">
                        <button
                            onClick={() => setMobileOngoingOpen(!mobileOngoingOpen)}
                            className="w-full flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest"
                        >
                            ONGOING PROJECTS
                            <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${mobileOngoingOpen ? '' : 'rotate-180'}`} />
                        </button>
                        <AnimatePresence>
                            {mobileOngoingOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mt-4 space-y-3"
                                >
                                    {ongoingProjects.map(p => (
                                        <Link key={p.name} href={p.href} className="block text-[13px] text-[#333]">{p.name}</Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Completed Projects Accordion */}
                    <div className="w-full border-y border-slate-100 py-4 mb-14">
                        <button
                            onClick={() => setMobileCompletedOpen(!mobileCompletedOpen)}
                            className="w-full flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest"
                        >
                            COMPLETED PROJECTS
                            <ChevronUp className={`w-4 h-4 transition-transform duration-300 ${mobileCompletedOpen ? '' : 'rotate-180'}`} />
                        </button>
                        <AnimatePresence>
                            {mobileCompletedOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mt-4 grid grid-cols-1 gap-y-3"
                                >
                                    {completedProjects.map(p => (
                                        <Link key={p.name} href={p.href} className="block text-[13px] text-[#333] whitespace-nowrap overflow-hidden text-ellipsis">{p.name}</Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Get In Touch Mobile */}
                    <div className="w-full flex flex-col items-center mb-16 px-4">
                        <h2 className="text-[11px] text-slate-500 uppercase tracking-widest font-normal mb-8">GET IN TOUCH</h2>
                        <div className="space-y-6 w-full max-w-[320px]">
                            <div className="flex gap-5 items-start">
                                    <Image src="/icons/locationIcon.svg" alt="Location" width={18} height={18} className="text-[#009FE3] mt-7 shrink-0 " />
                                <p className="text-[13px] leading-relaxed text-[#1a1a1a]">
                                    Suprabhath Building, 1st Floor Bejai Kapikad Road, Mangalore - 575 004, India
                                </p>
                            </div>
                            <div className="flex gap-5 items-center">
                                <Phone size={18} className="text-[#009FE3] shrink-0" />
                                <Link href="tel:+917090933700" className="text-[13px] text-[#1a1a1a]">+91 70909 33700</Link>
                            </div>
                            <div className="flex gap-5 items-center">
                                <Mail size={18} className="text-[#009FE3] shrink-0" />
                                <Link href="mailto:sales@mukundmgmrealty.com" className="text-[13px] text-[#1a1a1a]">sales@mukundmgmrealty.com</Link>
                            </div>
                        </div>
                    </div>

                    {/* Static Ongoing Projects List at the very bottom */}
                    <div className="w-full border-t border-slate-100 pt-10 pb-6 text-center hidden md:block">
                        <h2 className="text-[11px] text-slate-400 uppercase tracking-widest font-normal mb-6">ONGOING PROJECTS</h2>
                        <div className="flex flex-col gap-4">
                            {ongoingProjects.map((p) => (
                                <Link key={p.name} href={p.href} className="text-[13px] text-[#333]">{p.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom (Universal for now, but centered on mobile) */}
                <div className="relative pt-10 pb-8 border-t border-slate-200">
                    {/* Scroll Button */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <button
                            aria-label="Scroll to top"
                            onClick={scrollToTop}
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#009FE3] bg-white flex items-center justify-center text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-all duration-300 group shadow-sm"
                        >
                            <ChevronUp size={24} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-[11px] text-slate-400 text-center md:text-left">
                        <div className="order-3 md:order-1 text-[9px] md:text-[11px]">
                            <p>All Rights Reserved. Copyright © 2026-27, Mukund MGM Realty</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 md:gap-2 order-2 md:order-2">
                            <div className="flex justify-center gap-2">
                                <Link href="/disclaimers" className="hover:text-[#009FE3] transition-colors whitespace-nowrap">Legal Disclaimers</Link>
                                <span className="opacity-30">|</span>
                                <Link href="/terms-of-service" className="hover:text-[#009FE3] transition-colors whitespace-nowrap">Terms of Service</Link>
                            </div>
                            <div className="md:hidden mt-1 opacity-60">All Rights Reserved.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom accent bar */}
            {/* <div className="w-full h-1.5 md:h-2 bg-[#009FE3]"></div> */}
        </footer>
    );
}