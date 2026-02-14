"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Circle } from "lucide-react";

export default function InsightsSection() {
    return (
        <section className="py-24 bg-white relative">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="absolute -top-20 -left-40 pointer-events-none z-0">
                    <Image
                        src="/icons/mukund.svg"
                        alt="Mukund Abstract Shape"
                        width={250}
                        height={250}
                        className=" object-contain blur-lg -rotate-45"
                    />
                </div>
                {/* Header */}
                <div className="flex justify-between items-center mb-16">
                    <h2 className="text-5xl md:text-6xl  text-slate-800 tracking-tight">Insights</h2>
                    <Link href="#" className="flex items-center gap-2 group text-slate-600 hover:text-slate-900 transition-colors">
                        <span className="text-lg">View more</span>
                        <div className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-900 transition-colors">
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-0">

                    {/* Left Column */}
                    <div className="flex-1 md:pr-12 lg:pr-22 flex flex-col">
                        <div className="mb-8 md:min-h-[220px]">
                            <h3 className="text-2xl md:text-3xl font-normal text-slate-600 mb-6 leading-tight">
                                Mukund Realty title sponsors Den Den 2026 international open-sea swim at Tannirbhavi
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
                                Mangaluru is set to host the third edition of Den Den, an international open-sea swimming championship organised by the Mangalore Surf Club at Tannirbhavi Beach on January 26.
                            </p>
                            <Link href="#" className="inline-block text-slate-600 font-medium border-b border-slate-600 hover:text-slate-900 hover:border-slate-900 transition-colors pb-0.5">
                                Read More
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-80 w-full overflow-hidden mt-auto">
                            <Image
                                src="/images/LandingPageImg/insights/1.png"
                                alt="Surfer at Tannirbhavi"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-slate-300 mx-0"></div>

                    {/* Right Column */}
                    <div className="flex-1 md:pl-12 lg:pl-22 flex flex-col pt-12 md:pt-0 border-t md:border-t-0 border-slate-200 mt-12 md:mt-0">
                        <div className="mb-8 md:min-h-[220px]">
                            <h3 className="text-2xl md:text-3xl font-normal text-slate-600 mb-6 leading-tight">
                                Vertex Managed Workspace Wins Prestigious "Excellence in Co-Working and Enterprise Office Space" Award at ET Now Business Conclave 2025
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-sm md:text-base mb-6">
                                In a landmark achievement for Mangaluru's business community, Vertex Managed Workspace has been honored with the "Excellence in Co-Working and Enterprise Office Space" Award
                            </p>
                            <Link href="#" className="inline-flex items-center gap-2 group">
                                <span className="text-slate-600 font-medium border-b border-slate-600 group-hover:text-slate-900 group-hover:border-slate-900 transition-colors pb-0.5">
                                    Read More
                                </span>
                            </Link>
                        </div>
                        <div className="relative h-64 md:h-80 w-full overflow-hidden mt-auto">
                            <Image
                                src="/images/LandingPageImg/insights/2.png"
                                alt="Award Ceremony"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
