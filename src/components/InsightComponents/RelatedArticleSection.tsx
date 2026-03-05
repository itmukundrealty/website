"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { fetchBlogs, Blog } from "@/lib/api";

interface RelatedArticleSectionProps {
    currentBlogId: string;
}

export default function RelatedArticleSection({ currentBlogId }: RelatedArticleSectionProps) {
    const [articles, setArticles] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRelated = async () => {
            const all = await fetchBlogs();
            // Sort newest first, exclude current blog, take top 2
            const related = all
                .filter((b) => b.id !== currentBlogId)
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .slice(0, 2);
            setArticles(related);
            setLoading(false);
        };
        getRelated();
    }, [currentBlogId]);

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
                        {loading ? (
                            <div className="col-span-2 flex justify-center items-center py-16">
                                <div className="w-8 h-8 border-4 border-[#0097DC] border-t-transparent rounded-full animate-spin" />
                            </div>
                        ) : articles.length === 0 ? (
                            <p className="col-span-2 text-[#505153] text-lg font-light">No related articles found.</p>
                        ) : (
                            articles.map((article) => (
                                <div key={article.id} className="flex flex-col group">
                                    <div className="relative aspect-[1.4/1] w-full mb-10 overflow-hidden">
                                        <Image
                                            src={article.imageUrl || "/images/placeholder.jpg"}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-[1.8rem] md:text-[2.2rem] lg:text-[2rem] leading-[1.2] text-[#505153] font-normal mb-6 tracking-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-[#505153] font-light leading-relaxed text-[16px] md:text-[16px] mb-8 lg:max-w-[95%]">
                                        {article.summary}
                                    </p>
                                    <Link
                                        href={`/insights/${article.id}`}
                                        className="text-[#505153] text-[16px] md:text-[16px] font-normal w-fit border-b border-[#505153]/40 pb-0.5 hover:border-[#0097DC] hover:text-[#0097DC] transition-colors mt-6"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Circular Arrow Button — redirects to blogs page */}
                    <div className="flex-shrink-0 md:pl-4 lg:pl-12">
                        <Link
                            href="/insights"
                            className="p-5 rounded-full border border-[#0097DC] flex items-center justify-center transition-all duration-300 hover:bg-[#0097DC]/10 group "
                        >
                            <ChevronRight className="w-6 h-6 stroke-[0.8] text-[#0097DC] group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}