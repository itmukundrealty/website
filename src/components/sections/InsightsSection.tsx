"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { fetchBlogs, Blog } from "@/lib/api";
import { usePathname } from "next/navigation";

interface InsightsSectionProps {
    initialBlogs?: Blog[];
}

export default function InsightsSection({ initialBlogs }: InsightsSectionProps = {}) {
    const [blogs, setBlogs] = useState<Blog[]>(() => {
        if (initialBlogs && initialBlogs.length > 0) {
            return initialBlogs
                .slice()
                .sort((a, b) => {
                    const timeA = new Date(a.date || a.createdAt || 0).getTime();
                    const timeB = new Date(b.date || b.createdAt || 0).getTime();
                    return timeB - timeA;
                })
                .slice(0, 3);
        }
        return [];
    });
    const [isLoading, setIsLoading] = useState(!initialBlogs || initialBlogs.length === 0);
    const pathname = usePathname();

    const viewMoreHref = pathname === "/insight-lists" ? "/insights" : "/insight-lists";

    useEffect(() => {
        if (initialBlogs && initialBlogs.length > 0) {
            setIsLoading(false);
            return;
        }
        let isMounted = true;
        const getBlogs = async () => {
            try {
                const data = await fetchBlogs();
                if (!isMounted) return;
                // Sort by date or createdAt descending and take the latest 3
                const sorted = data
                    .slice()
                    .sort((a, b) => {
                        const timeA = new Date(a.date || a.createdAt || 0).getTime();
                        const timeB = new Date(b.date || b.createdAt || 0).getTime();
                        return timeB - timeA;
                    });
                setBlogs(sorted.slice(0, 3));
            } catch (error) {
                console.error("Error loading insights:", error);
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };
        getBlogs();
        return () => {
            isMounted = false;
        };
    }, [initialBlogs]);

    if (!isLoading && blogs.length === 0) {
        return null;
    }

    return (
        <section className="py-12 md:py-24 bg-white relative">
            <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                <div className="absolute -top-20 -left-40 pointer-events-none z-0 hidden md:block">
                    <Image
                        src="/icons/mukund.svg"
                        alt="Mukund Abstract Shape"
                        width={250}
                        height={250}
                        className="object-contain blur-lg -rotate-45"
                    />
                </div>

                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex justify-between items-center mb-10 md:mb-16"
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl text-[#505153] tracking-tight">Insights</h2>
                    <Link href="/insights" className="hidden md:flex items-center gap-2 group text-[#0C9CDE] transition-colors duration-300">
                        <span className="text-[16px]">View more</span>
                        <div className="w-6 h-6 rounded-full border border-[#0C9CDE] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </Link>
                </motion.div>

                {/* Content Grid */}
                <div className="flex flex-col md:flex-row gap-y-12 md:gap-0 relative">
                    {isLoading ? (
                        [0, 1, 2].map((idx) => (
                            <React.Fragment key={`skeleton-${idx}`}>
                                <div className="flex-1 flex flex-col md:px-8 lg:px-12 first:pl-0 last:pr-0 animate-pulse">
                                    <div className="mb-6 min-h-[180px] flex flex-col">
                                        <div className="h-7 bg-slate-200 rounded w-3/4 mb-4"></div>
                                        <div className="h-4 bg-slate-100 rounded w-full mb-2"></div>
                                        <div className="h-4 bg-slate-100 rounded w-5/6 mb-6"></div>
                                        <div className="mt-auto">
                                            <div className="h-4 bg-slate-200 rounded w-20"></div>
                                        </div>
                                    </div>
                                    <div className="relative h-64 md:h-72 w-full bg-slate-200 rounded overflow-hidden mt-2"></div>
                                </div>
                                {idx < 2 && (
                                    <div className="hidden md:block w-[1px] self-stretch bg-slate-200"></div>
                                )}
                            </React.Fragment>
                        ))
                    ) : (
                        blogs.slice(0, 3).map((blog, index) => (
                            <React.Fragment key={blog.id}>
                                <Link 
                                    href={`/insights/${blog.id}`} 
                                    className="flex-1 flex flex-col md:px-8 lg:px-12 first:pl-0 last:pr-0 group cursor-pointer"
                                >
                                    <div className="mb-6 min-h-[180px] flex flex-col">
                                        <h3 className="text-xl md:text-2xl font-normal text-[#505153]/80 mb-4 leading-tight line-clamp-2 group-hover:text-[#0C9CDE] transition-colors">
                                            {blog.title}
                                        </h3>
                                        <p className="text-[#505153] font-light leading-relaxed text-sm md:text-base mb-6 line-clamp-3">
                                            {blog.summary}
                                        </p>
                                        <div className="mt-auto">
                                            <span className="inline-block text-[#505153] font-medium border-b border-[#505153] group-hover:text-[#0C9CDE] group-hover:border-[#0C9CDE] transition-colors pb-0.5">
                                                Read More
                                            </span>
                                        </div>
                                    </div>
                                    <div className="relative h-64 md:h-72 w-full overflow-hidden mt-2">
                                        <Image
                                            width={600}
                                            height={400}
                                            src={blog.imageUrl || `/images/LandingPageImg/insights/${(index % 2) + 1}.png`}
                                            alt={blog.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </Link>
                                {/* Vertical Divider for Desktop */}
                                {index < 2 && (
                                    <div className="hidden md:block w-[1px] self-stretch bg-slate-200"></div>
                                )}
                            </React.Fragment>
                        ))
                    )}
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
