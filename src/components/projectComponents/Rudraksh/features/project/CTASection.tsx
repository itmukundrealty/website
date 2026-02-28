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
}

export default function CTASection({ title, subtitle, mobImg, deskImg, cta = "Contact Us", link = "/project-enquire" }: ctaprops) {
  const pathname = usePathname();
  const currentProject = pathname?.split('/')[1] || '';
  const validProjects = ["rudraksh", "mathura", "ajanta", "evanna", "kudva", "madhuban", "nandagokul", "nandadeep", "bhargavi", "gokuldham", "mukund-sadhan", "kailash", "ashoka", "kedar"];
  const finalLink = link === "/project-enquire" && validProjects.includes(currentProject) ? `/project-enquire?project=${currentProject}` : link;

  return (
    <section className="relative lg:h-[100vh] h-[95vh] w-full flex items-center  overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {deskImg && <Image src={deskImg} alt="Building" fill className="object-cover brightness-95 hidden lg:block" />}
        {mobImg && <Image src={mobImg} alt="Building" fill className="object-cover brightness-95 lg:hidden object-top" />}
        {/* Gradient Overlay for better text readability */}
        {/* <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent"></div> */}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full lg:h-auto flex flex-col lg:block justify-between pt-12 pb-10 lg:py-0 px-6 lg:px-24 xl:px-54">
        <div className="max-w-full text-left">
          <h2 className="text-4xl lg:text-7xl font-medium text-white mb-4 leading-tight">{title}</h2>
          <p className="text-lg lg:text-4xl font-light text-white/80 mb-10 md:max-w-xl tracking-wide  ">{subtitle}</p>

          {/* Desktop Button */}
          <Link
            href={finalLink}
            className="hidden lg:inline-block bg-white text-[#0097DC] px-10 py-4 text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {cta}
          </Link>
        </div>

        {/* Mobile Button */}
        <div className="w-full lg:hidden">
          <Link
            href={finalLink}
            className="block w-full bg-white text-[#0097DC] py-4 text-center text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
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
