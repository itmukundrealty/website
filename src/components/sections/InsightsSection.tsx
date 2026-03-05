"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { fetchBlogs, Blog } from "@/lib/api";
import { usePathname } from "next/navigation";

export default function InsightsSection() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const pathname = usePathname();

    const viewMoreHref = pathname === "/insight-lists" ? "/insights" : "/insight-lists";


    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogs();
            // Sort by createdAt descending and take the latest 2
            const sorted = data
                .slice()
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setBlogs(sorted.slice(0, 2));
        };
        getBlogs();
    }, []);

    const leftBlog = blogs[0];
    const rightBlog = blogs[1];

    return (
        <section className="py-12 md:p  y-24 bg-white relative">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                <div className="absolute -top-20 -left-40 pointer-events-none z-0 hidden md:block">
                    <Image
                        src="/icons/mukund.svg"
                        alt="Mukund Abstract Shape"
                        width={250}
                        height={250}
                        className=" object-contain blur-lg -rotate-45"
                    />
                </div>
                {/* Header */}
                    <div className="flex justify-between items-center mb-0 md:mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl  text-[#505153] tracking-tight">Insights</h2>
                    <Link href="/insights" className="hidden md:flex items-center gap-2 group text-[#505153] hover:text-[#0C9CDE] transition-colors duration-300" >
                        <span className="text-[16px] md:text-[16px]">View more</span>
                        <div className="md:w-6 md:h-6 w-5 h-5 rounded-full border border-[#505153] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2 transition-colors">
                            <ChevronRight className="md:w-4 md:h-4 w-3 h-3" />
                        </div>
                    </Link>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-0">

                    {/* Left Column */}
                    <div className="flex-1 md:pr-12 lg:pr-22 flex flex-col">
                        <div className="mb-8 md:min-h-[220px]">
                            <h3 className="text-2xl md:text-3xl font-normal text-[#505153]/80 mb-6 leading-tight">
                                {leftBlog ? leftBlog.title : "Loading..."}
                            </h3>
                            <p className="text-[#505153] font-light leading-relaxed text-sm md:text-lg mb-6">
                                {leftBlog ? leftBlog.summary : ""}
                            </p>
                            {leftBlog && (
                                <Link href={`/insights/${leftBlog.id}`} className="inline-block text-[#505153] font-medium border-b border-[#505153] hover:text-[#0C9CDE] hover:border-[#0C9CDE] transition-colors pb-0.5">
                                    Read More
                                </Link>
                            )}
                        </div>
                        <div className="relative h-64 md:h-80 w-full overflow-hidden mt-auto">
                            {leftBlog ? (
                                <img
                                    src={leftBlog.imageUrl || "/images/LandingPageImg/insights/1.png"}
                                    alt={leftBlog.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src="/images/LandingPageImg/insights/1.png"
                                    alt="Insight"
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>

                    {/* Vertical Divider */}
                    <div className="hidden md:block w-px bg-slate-300 mx-0"></div>

                    {/* Right Column */}
                    <div className="flex-1 md:pl-12 lg:pl-22 flex flex-col pt-12 md:pt-0 border-t md:border-t-0 border-slate-200 mt-12 md:mt-0">
                        <div className="mb-8 md:min-h-[220px]">
                            <h3 className="text-2xl md:text-3xl font-normal text-[#505153]/80 mb-6 leading-tight">
                                {rightBlog ? rightBlog.title : "Loading..."}
                            </h3>
                            <p className="text-[#505153] font-light leading-relaxed text-sm  md:text-lg mb-6">
                                {rightBlog ? rightBlog.summary : ""}
                            </p>
                            {rightBlog && (
                                <Link href={`/insights/${rightBlog.id}`} className="inline-flex items-center gap-2 group">
                                    <span className="text-[#505153]  font-medium border-b border-[#505153] group-hover:text-[#0C9CDE] group-hover:border-[#0C9CDE] transition-colors pb-0.5">
                                        Read More
                                    </span>
                                </Link>
                            )}
                        </div>
                        <div className="relative h-64 md:h-80 w-full overflow-hidden mt-auto">
                            {rightBlog ? (
                                <img
                                    src={rightBlog.imageUrl || "/images/LandingPageImg/insights/2.png"}
                                    alt={rightBlog.title}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <Image
                                    src="/images/LandingPageImg/insights/2.png"
                                    alt="Insight"
                                    fill
                                    className="object-cover"
                                />
                            )}
                        </div>
                    </div>
<Link href={viewMoreHref} className="flex items-end justify-center  mt-12 gap-2 group text-[#505153] hover:text-[#0C9CDE]  transition-colors duration-300 md:hidden block">
                        <span className="text-[16px] md:text-lg">View more</span>
                        <div className="md:w-6 md:h-6 w-5 h-5 rounded-full border border-[#505153] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2  transition-colors ">
                            <ChevronRight className="md:w-4 md:h-4 w-3 h-3" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
