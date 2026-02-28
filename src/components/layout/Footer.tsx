"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronUp, Send, Phone, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const pathname = usePathname();

  const getBreadcrumbs = () => {
    if (pathname === "/") return <span>HOMEPAGE</span>;

    const segments = pathname.split("/").filter(Boolean);

    return (
      <>
        <Link href="/" className="hover:text-blue-500 transition-colors">HOME</Link>
        {segments.map((segment, index) => {
          // Determine the path for this segment (optional, if we want clickable breadcrumbs)
          // For now, adhering to user request for text display, but making previous steps clickable is good UX.
          // However, user just asked for text "show as home and that corresponding page".
          // I'll keep it simple: Text only, like the design, or maybe Home is clickable.

          return (
            <span key={index}>
              <span className="mx-1">{'>'}</span>
              {segment.replace(/-/g, " ").toUpperCase()}
            </span>
          );
        })}
      </>
    );
  };

  const quickLinks = [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/careers" },
     { name: "Projects", href: "/projects" },
      { name: "Media Center", href: "/" },

  ];
  const socials = [
    { name: "Facebook", href: "https://www.facebook.com/mukundmgmrealty" },
    { name: "Instagram", href: "https://www.instagram.com/mukund_mgm_realty" },
    { name: "WhatsApp", href: "https://www.whatsapp.com/channel/0029VaEoD6l2phHFAQlRli1m" } // Using the phone number from the Get In Touch section
  ];
  const projects = [
    { name: "Rudraksh", href: "/rudraksh" } ,
    { name: "Kedar", href: "/kedar" },
    { name: "Ashoka Buisness Center", href: "/ashoka" }
  ];

  return (
    <footer className="w-full bg-white font-sans text-[#333333] ">
      <div className="max-w-full mx-auto px-6 lg:px-20 xl:px-54">

        {/* 1. Logo & Breadcrumb Section */}
        <div className="flex flex-col items-center lg:items-start pt-10 lg:pt-12">
          {/* Logo - Center on mobile, Hidden on desktop (moved to grid) */}
          <div className="lg:hidden mb-10">
            <Image src="/icons/mobileLogo.svg" alt="Mukund Realty" width={160} height={60} className="w-40 h-auto" />
          </div>

          {/* Breadcrumb / Label */}
          <div className="w-full border-y lg:border-y-0 lg:border-b border-slate-200 py-4 lg:pb-6">
            <p className="text-[11px] text-slate-500 uppercase tracking-[0.2em] font-normal text-left">
              {getBreadcrumbs()}
            </p>
          </div>
        </div>

        {/* 2. Main Content Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-y-12 gap-x-8 py-12 lg:py-16">

          {/* Get In Touch */}
          <div className="col-span-2 lg:col-span-4 order-3 lg:order-1 space-y-6 lg:space-y-8 border-t lg:border-none border-slate-200 pt-10 lg:pt-0">
            <h4 className="text-[12px] lg:text-[11px] text-slate-500 uppercase tracking-widest font-normal text-center lg:text-left">
              GET IN TOUCH
            </h4>
            <ul className="space-y-3 text-[16px] leading-relaxed font-light text-black">
              <li className="flex gap-4 lg:gap-5 items-start justify-center lg:justify-start">
                <Image src='/icons/locationIcon.svg' className="w-5 h-5 " height={20} width={20} alt="location" />
                <span className="text-center lg:text-left">Suprabhath Building, 1st Floor<br />Bejai Kapikad Road<br />Mangalore – 575 004, India</span>
              </li>
              <li className="flex gap-4 lg:gap-5 items-center justify-center lg:justify-start">
                <Image src='/icons/phoneIcon.svg' className="w-5 h-5 " height={20} width={20} alt="phone" />
                <span className="hover:text-[#009FE3] transition-colors cursor-pointer">+91 70909 33700</span>
              </li>
              <li className="flex gap-4 lg:gap-5 items-center justify-center lg:justify-start">
                <Image src='/icons/emailIcon.svg' className="w-5 h-5 " height={24} width={24} alt="mail" />
                <span className="hover:text-[#009FE3] transition-colors cursor-pointer break-all">sales@mukundmgmrealty.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-3 order-1 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <h4 className="text-[12px] lg:text-[11px] text-slate-500 uppercase tracking-widest font-normal">QUICK LINKS</h4>
            <ul className="grid grid-cols-1 gap-2 text-[16px] text-[#000000] font-light">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#009FE3] transition-colors block w-full lg:w-fit">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-3 space-y-6 lg:space-y-8 text-center lg:text-left">
            <h4 className="text-[12px] lg:text-[11px] text-slate-500 uppercase tracking-widest font-normal">SOCIALS</h4>
            <ul className="space-y-2 text-[16px] text-[black] font-light">
              {socials.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#009FE3] transition-colors block w-full lg:w-fit">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desktop Logo */}
          <div className="hidden lg:flex lg:col-span-3 order-4 justify-end items-start pt-2">
            <Image src="/icons/logo.svg" alt="Mukund Realty" width={180} height={60} className="object-contain" />
          </div>
        </div>

        {/* 3. Ongoing Projects Section */}
        <div className="py-10 lg:py-0 lg:mt-12 border-t lg:border-t-0 border-slate-200">
          <div className="flex flex-col lg:flex-row items-center lg:items-center gap-6 lg:gap-16">
            <h4 className="text-[12px] lg:text-[14px] text-[#505153] uppercase  font-light shrink-0">
              ONGOING PROJECTS
            </h4>
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-16 text-[16px] text-[black] font-light text-center lg:text-left">
              {projects.map((p) => (
                <Link key={p.name} href={p.href} className="hover:text-[#009FE3] transition-colors cursor-pointer">{p.name}</Link>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Footer Bottom (Line + Button + Legal) */}
        <div className="relative mt-12 lg:mt-20">
          <div className="w-full h-px bg-slate-200 absolute top-0 left-0"></div>

          {/* Scroll Button */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white px-3">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#009FE3] bg-white flex items-center justify-center text-[#009FE3] hover:bg-[#009FE3] hover:text-white transition-all duration-300 group"
            >
              <ChevronUp size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="py-10 flex flex-col lg:flex-row justify-between items-center gap-6 text-[10px] lg:text-[12px] text-slate-500 tracking-wide text-center">
            <div className="order-2 lg:order-1">
              <p>All Rights Reserved. Copyright © 2026–27, Mukund MGM Realty</p>
            </div>

            <div className="flex gap-2 order-1 lg:order-2 uppercase lg:capitalize">
              <Link href="/privacy-policy" className="hover:text-[#009FE3] transition-colors">Legal Disclaimers</Link>
              {/* <span>|</span> */}
              {/* <Link href="#" className="hover:text-[#009FE3] transition-colors">Terms of Service</Link> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}