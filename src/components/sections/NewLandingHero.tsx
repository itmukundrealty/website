"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/landingPage/hero1.png",
    mobileImage: "/landingPage/mobHero1.png",
    heading: "A Higher Way to Live",
    subheading: "Luxury Homes at Rudraksh",
    desc: "Mangalore's First Apartment with a 24/7 Cloud Kitchen near Infosys, Kottara Mangaluru",
    href: "/rudraksh",
    projectSlug: "rudraksh"
  },
  {
    id: 2,
    image: "/landingPage/hero2.png",
    mobileImage: "/landingPage/mobHero2.png",
    heading: "Modern Business, Perfected",
    subheading: <> Commercial Workspaces at <br /> Ashoka Business Center </>,
    desc: <>Mangalore’s Premier Business Centre with World-Class Infrastructure and a Refined, <br /> Contemporary Work Environment</>,
    href: "/ashoka-business-center",
    projectSlug: "ashoka-business-center"
  },
  {
    id: 3,
    image: "/landingPage/hero3.png",
    mobileImage: "/landingPage/mobHero3.png",
    heading: "A Life of Luxury Awaits",
    subheading: "Luxury Living, Defined at Kedar",
    desc: "Mangalore’s Premier Business Centre with World-Class Infrastructure and a Refined, Contemporary Work Environment",
    href: "/kedar",
    projectSlug: "kedar"
  },
];

export default function NewLandingHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-end justify-start overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Desktop Background Image */}
          <div className="hidden md:block absolute inset-0 w-full h-full">
            <Image
              src={slides[currentIndex].image}
              alt="Hero Background"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Mobile Background Image */}
          <div className="block md:hidden absolute inset-0 w-full h-full">
            <Image
              src={slides[currentIndex].mobileImage}
              alt="Hero Background Mobile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Gradient Overlays */}
          <div className="block md:hidden absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-[1]" />
          <div className="absolute top-0 inset-0 bg-gradient-to-b from-black/60 via-black/20 h-[50vh] to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 w-full mx-auto px-6 md:px-12 md:px-20 pb-12 md:pb-12 flex flex-col h-full justify-between pt-32 md:pt-40">
        {/* Top Section: Heading, Subheading */}
        <div className="w-full md:max-w-[60%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h1 className="text-white text-center md:text-left text-[28px] md:text-[56px] lg:text-[62px] leading-tight font-normal w-fit mx-auto md:mx-0">
                {slides[currentIndex].heading}
              </h1>
              <p className="text-white text-center md:text-left text-[18px] md:text-[24px] lg:text-[32px] font-light leading-tight md:mt-2 mb-0 md:mb-10 w-fit mx-auto md:mx-0">
                {slides[currentIndex].subheading}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons for Desktop */}
          <div className="hidden md:flex flex-wrap items-center gap-4">
            <Link href={`/project-enquire?project=${slides[currentIndex].projectSlug}`}>
              <button className="bg-[#0097DC] hover:bg-[#0085C0] transition-colors text-white text-[15px] font-medium px-8 py-[14px] flex items-center justify-center min-w-[160px]">
                Enquire Now
              </button>
            </Link>
            <Link href={slides[currentIndex].href}>
              <button className="bg-white hover:bg-gray-50 transition-colors text-[#0097DC] text-[15px] font-medium px-6 py-[14px] flex items-center justify-center gap-2 min-w-[160px] group">
                <ArrowUpRight className="w-[18px] h-[18px] mb-[1px] group-hover:rotate-45 transition-all duration-300 ease-in-out" strokeWidth={2.5} />
                View Project
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Section: Description and Indicators */}
        <div className="w-full md:max-w-[60%]">
          <div className="flex flex-col gap-6">
            {/* Buttons for Mobile */}
            <div className="flex md:hidden flex-col gap-3 w-full mb-2">
              <Link href={`/project-enquire?project=${slides[currentIndex].projectSlug}`} className="w-full">
                <button className="w-full bg-[#0097DC] text-white text-[16px] font-medium py-[16px] flex items-center justify-center">
                  Enquire Now
                </button>
              </Link>
              <Link href={slides[currentIndex].href} className="w-full">
                <button className="w-full bg-white text-[#0097DC] text-[16px] font-medium py-[16px] flex items-center justify-center">
                  View Project
                </button>
              </Link>
            </div>

            <AnimatePresence mode="wait">
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-white/80 text-[14px] md:text-[16px] font-light w-full md:w-[450px] hidden md:block"
              >
                {slides[currentIndex].desc}
              </motion.p>
            </AnimatePresence>
            <div className="flex items-center justify-center md:justify-start gap-3">
              {slides.map((_, index) => (
                <button 
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`relative h-[4px] transition-all duration-500 ease-in-out before:absolute before:-inset-y-4 before:inset-x-0 before:content-[''] ${index === currentIndex ? "w-16 bg-white" : "w-12 bg-white/30 hover:bg-white/50"}`} 
                    aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}