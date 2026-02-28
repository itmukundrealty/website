"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RelatedArticleSection() {
    const articles = [
        {
            id: 1,
            title: "Mukund Realty title sponsors Den Den 2026 international open-sea swim at Tannirbhavi",
            description: "Mangaluru is set to host the third edition of Den Den, an international open-sea swimming championship organised by the Mangalore Surf Club at Tannirbhavi Beach on January 26.",
            image: "/images/LandingPageImg/insights/1.png",
            link: "#"
        },
        {
            id: 2,
            title: "Mangaluru: Affordable luxury apartment 'Nanda Deep' inaugurated at Urwa",
            description: "Bhargavi Builders and Nirmaan Homes' project in Urwa proudly inaugurated 'Nanda Deep', a magnificent building on Monday, June 15.",
            image: "/images/LandingPageImg/insights/2.png",
            link: "#"
        }
    ];

    return (
        <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24 font-host">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54 ">
                {/* Header with Borders Matching the Photo exactly */}
                <div className="border-t border-b border-zinc-200 py-12 mb-20">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[0.9] text-[#505153] font-normal tracking-tight">
                        Related Articles
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
                    {/* Articles Grid */}
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-16">
                        {articles.map((article) => (
                            <div key={article.id} className="flex flex-col group">
                                <div className="relative aspect-[1.4/1] w-full mb-10 overflow-hidden">
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <h3 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2.4rem] leading-[1.2] text-[#505153] font-normal mb-6 tracking-tight">
                                    {article.title}
                                </h3>
                                <p className="text-[#505153] font-light leading-relaxed text-[16px] md:text-[18px] mb-8 lg:max-w-[95%]">
                                    {article.description}
                                </p>
                                <Link
                                    href={article.link}
                                    className="text-[#505153] text-[16px] md:text-[18px] font-normal w-fit border-b border-[#505153]/40 pb-0.5 hover:border-[#505153] transition-colors"
                                >
                                    Read More
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Circular Arrow Button - Positioned exactly as in photo */}
                    <div className="flex-shrink-0 md:pl-4 lg:pl-12">
                        <Link
                            href="/insights"
                            className="w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full border border-zinc-400 flex items-center justify-center transition-all duration-300 hover:bg-zinc-50 group shadow-sm"
                        >
                            <ArrowRight className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 stroke-[0.8] text-[#505153] group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}