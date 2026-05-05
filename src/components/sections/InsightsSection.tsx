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
            // Sort by createdAt descending and take the latest 3
            const sorted = data
                .slice()
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setBlogs(sorted.slice(0, 3));
        };
        getBlogs();
    }, []);

    return (
        <section className="py-12 md:py-24 bg-white relative">
            <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                <div className="absolute -top-20 -left-40 pointer-events-none z-0 hidden md:block">
                    <Image
                        src="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mukund.svg"
                        alt="Mukund Abstract Shape"
                        width={250}
                        height={250}
                        className="object-contain blur-lg -rotate-45"
                    />
                </div>

                {/* Header */}
                <div className="flex justify-between items-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl text-[#505153] tracking-tight">Insights</h2>
                    <Link href="/insights" className="hidden md:flex items-center gap-2 group text-[#505153] hover:text-[#0C9CDE] transition-colors duration-300">
                        <span className="text-[16px]">View more</span>
                        <div className="w-6 h-6 rounded-full border border-[#505153] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-y-12 md:gap-0 relative">
                    {blogs.slice(0, 3).map((blog, index) => (
                        <React.Fragment key={blog.id}>
                            <div className="flex-1 flex flex-col md:px-8 lg:px-12 first:pl-0 last:pr-0">
                                <div className="mb-6 min-h-[180px] flex flex-col">
                                    <h3 className="text-xl md:text-2xl font-normal text-[#505153]/80 mb-4 leading-tight line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-[#505153] font-light leading-relaxed text-sm md:text-base mb-6 line-clamp-3">
                                        {blog.summary}
                                    </p>
                                    <div className="mt-auto">
                                        <Link href={`/insights/${blog.id}`} className="inline-block text-[#505153] font-medium border-b border-[#505153] hover:text-[#0C9CDE] hover:border-[#0C9CDE] transition-colors pb-0.5">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                                <div className="relative h-64 md:h-72 w-full overflow-hidden mt-2">
                                    <Image
                                        width={600}
                                        height={400}
                                        src={blog.imageUrl || `https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/LandingPageImg/insights/${(index % 2) + 1}.png`}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                    />
                                </div>
                            </div>
                            {/* Vertical Divider for Desktop */}
                            {index < 2 && (
                                <div className="hidden md:block w-[1px] self-stretch bg-slate-200"></div>
                            )}
                        </React.Fragment>
                    ))}
                </div>

                <Link href={viewMoreHref} className="flex items-center justify-center mt-12 gap-2 group text-[#505153] hover:text-[#0C9CDE] transition-colors duration-300 md:hidden">
                    <span className="text-[16px]">View more</span>
                    <div className="w-5 h-5 rounded-full border border-[#505153] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2 transition-colors">
                        <ChevronRight className="w-3 h-3" />
                    </div>
                </Link>
            </div>
        </section>
    );
}
