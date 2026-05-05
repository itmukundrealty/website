"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ctaprops {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  mobImg?: string;
  deskImg?: string;
  cta?: string;
  link?: string;
  accentColor?: string;
}

export default function CTASection({ title, subtitle, mobImg, deskImg, cta = "Contact Us", link = "/project-enquire", accentColor = "#0097DC" }: ctaprops) {
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
  const finalLink = link === "/project-enquire" && projectKey ? `/project-enquire?project=${projectKey}` : link;

  return (
    <section className="relative md:h-[100vh] h-[70vh] w-full flex items-center  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {deskImg && <Image src={deskImg} alt="Building" fill className="object-cover brightness-95 hidden md:block" />}
        {mobImg && <Image src={mobImg} alt="Building" fill className="object-cover brightness-95 md:hidden object-top" />}
        {/* Gradient Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full md:h-auto flex flex-col md:block justify-between pt-12 pb-10 md:py-0 px-6 md:px-24 xl:px-54">
        <div className="max-w-full text-left">
          <h2 className="text-4xl md:text-7xl font-medium text-white mb-4 leading-tight">{title}</h2>
          <p className="text-lg md:text-4xl font-light text-white/80 mb-10 md:max-w-xl tracking-wide  ">{subtitle}</p>

          {/* Desktop Button */}
          <Link
            href={finalLink}
            className="hidden md:inline-block bg-white px-10 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            style={{ color: accentColor }}
          >
            {cta}
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="w-full md:hidden">
          <Link
            href={finalLink}
            className="block w-full bg-white py-4 text-center text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            style={{ color: accentColor }}
          >
            {cta}
          </Link>
        </div>
      </div>

      {/* Bottom bar decorative */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-20"></div>
    </section>
  );
}
