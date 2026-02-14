"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
    {
        id: 1,
        image: "/images/LandingPageImg/crafted/1.png",
        title: "Driven by Intent",
        description: "With unwavering integrity and transparency, Mukund commits to the long-term well-being of our communities.",
        stat: "13+ Years",
        statDesc: "of established expertise, with a history of trusted outcomes.",
        theme: "light",
        boxColor: "bg-[#E8F6FC]/80 "
    },
    {
        id: 2,
        image: "/images/LandingPageImg/crafted/2.png",
        title: "Spaces That Nurture Life",
        description: "Creating environments where families and relationships truly thrive.",
        stat: "500+ Clients Served",
        statDesc: "served with care, with 80% referrals from existing clients",
        theme: "dark",
        boxColor: "bg-[#37A0D0]/80 "
    },
    {
        id: 3,
        image: "/images/LandingPageImg/crafted/3.png",
        title: "Spaces That Reflect Vision",
        description: "Be it residences or workplaces, every project transforms vision into remarkable spaces.",
        stat: "100% Compliance",
        statDesc: "across all projects, with 2+ Million Sq. Ft. thoughtfully developed",
        theme: "dark",
        boxColor: "bg-[#37A0D0]/80 "
    }
];

export default function CraftedForMomentsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const activeContent = slides[currentSlide];

    return (
        <section className="lg:py-24 py-12 bg-white overflow-hidden relative mt-12 md:mt-16 lg:mt-0 ">
            {/* Background Decorative Blurs */}
            {/* <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div> */}
            {/* <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div> */}

            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-start lg:mb-20 mb-12 gap-8">
                    <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] text-slate-800 leading-[1.1]">
                        <span className=" font-light text-[#505153] block mb-1">Crafted For</span>
                        <span className="text-[#505153] font-medium  ">Life&apos;s Finest Moments</span>
                    </h2>
                    <p className="max-w-xs text-lg lg:text-lg font-light text-[#505153] leading-relaxed md:text-left pt-2">
                        Every project is shaped by a vision that elevates the everyday into something extraordinary.
                    </p>
                </div>

                {/* Carousel Area */}
                <div className="relative">
                    <div className="relative h-[400px] md:h-[500px] w-full md:w-[65%] overflow-hidden">
                        {/* Image */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeContent.id}
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.7 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <Image
                                    src={activeContent.image}
                                    alt={activeContent.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Overlay Box */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeContent.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className={`
                                relative -mt-24 mx-auto md:mt-0 
                                md:absolute md:top-[50%] md:right-0 md:bottom-auto md:left-auto md:translate-y-0
                                w-[90%] md:w-[45%] lg:w-[40%]
                                p-6 md:p-12 
                                ${activeContent.boxColor}
                                z-20
                                shadow-sm
                            `}
                        >
                            <div className={`space-y-4 md:space-y-8  ${activeContent.theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>

                                <div>
                                    <h3 className={`text-2xl md:text-3xl font-normal mb-4 leading-tight ${activeContent.theme === 'dark' ? 'text-white' : 'text-[#505153]'}`}>
                                        {activeContent.title}
                                    </h3>
                                    <p className={`text-lg lg:text-lg font-light  leading-relaxed ${activeContent.theme === 'dark' ? 'text-white' : 'text-[#505153]'}`}>
                                        {activeContent.description}
                                    </p>
                                </div>

                                <div className="pt-2">
                                    <div className={`text-3xl md:text-5xl font-medium mb-2 ${activeContent.theme === 'dark' ? 'text-white' : 'text-[#505153]'}`}>
                                        {activeContent.stat}
                                    </div>
                                    <p className={`text-lg lg:text-lg font-light ${activeContent.theme === 'dark' ? 'text-white' : 'text-[#505153]'}`}>
                                        {activeContent.statDesc}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Navigation Controls */}
                <div className="mt-8 md:mt-12 flex items-center justify-center relative">
                    {/* Indicators */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex gap-3">
                        {slides.map((_, index) => (
                            <div
                                key={index}
                                className={`h-0.5 transition-all duration-300 ${index === currentSlide ? 'w-8 bg-blue-400' : 'w-4 bg-gray-200'}`}
                            />
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pl-0 md:pr-12">
                        <button
                            onClick={prevSlide}
                            className="w-12 h-12 rounded-full border border-blue-200 flex items-center justify-center text-blue-400 hover:border-blue-500 hover:text-blue-500 transition-colors bg-white"
                        >
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="w-12 h-12 rounded-full border border-blue-400 flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-colors bg-white"
                        >
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

            </div>
               <div className="absolute -bottom-20 -left-40 pointer-events-none z-0 hidden lg:block">
                    <Image
                      src="/icons/mukund.svg"
                      alt="Mukund Abstract Shape"
                      width={250}
                      height={250}
                      className=" object-contain blur-lg -rotate-45"
                    />
                  </div>
                  <div className="absolute top-4 -right-15 pointer-events-none z-0">
                    <Image
                      src="/icons/mukund.svg"
                      alt="Mukund Abstract Shape"
                      width={150}
                      height={150}
                      className=" object-contain blur-sm -rotate-45"
                    />
                  </div>
        </section>
    );
}