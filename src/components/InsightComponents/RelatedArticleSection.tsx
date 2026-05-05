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
        <section className="bg-white pt-24 pb-16 md:pt-3 md:pb-12 font-host">
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
                            className="p-5 flex items-center justify-center transition-all duration-300  group "
                        >
                           <svg className='w-16 h-16' width="51" height="51" viewBox="0 0 81 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M45.2197 22.1055C44.3358 21.0448 42.7594 20.9015 41.6987 21.7854C40.638 22.6694 40.4947 24.2458 41.3786 25.3065L43.2991 23.706L45.2197 22.1055ZM57.294 40.4999L59.2146 42.1004C59.9872 41.1732 59.9872 39.8266 59.2146 38.8994L57.294 40.4999ZM41.3786 55.6933C40.4946 56.754 40.638 58.3304 41.6987 59.2143C42.7593 60.0983 44.3358 59.9549 45.2197 58.8943L43.2991 57.2938L41.3786 55.6933ZM23.7062 37.9999C22.3255 37.9999 21.2062 39.1192 21.2062 40.4999C21.2062 41.8806 22.3255 42.9999 23.7062 42.9999L23.7062 40.4999L23.7062 37.9999ZM43.2991 23.706L41.3786 25.3065L55.3735 42.1004L57.294 40.4999L59.2146 38.8994L45.2197 22.1055L43.2991 23.706ZM57.294 40.4999L55.3735 38.8994L41.3786 55.6933L43.2991 57.2938L45.2197 58.8943L59.2146 42.1004L57.294 40.4999ZM57.294 40.4999L57.294 37.9999L23.7062 37.9999L23.7062 40.4999L23.7062 42.9999L57.294 42.9999L57.294 40.4999ZM67.3701 67.3701L65.6023 65.6023C51.7387 79.4659 29.2613 79.4659 15.3977 65.6023L13.63 67.3701L11.8622 69.1378C27.6784 84.9541 53.3216 84.9541 69.1378 69.1378L67.3701 67.3701ZM13.63 67.3701L15.3977 65.6023C1.53413 51.7387 1.53413 29.2613 15.3977 15.3977L13.63 13.63L11.8622 11.8622C-3.95403 27.6784 -3.95403 53.3216 11.8622 69.1378L13.63 67.3701ZM13.63 13.63L15.3977 15.3977C29.2613 1.53412 51.7387 1.53412 65.6023 15.3977L67.3701 13.63L69.1378 11.8622C53.3216 -3.95404 27.6784 -3.95404 11.8622 11.8622L13.63 13.63ZM67.3701 13.63L65.6023 15.3977C79.4659 29.2613 79.4659 51.7387 65.6023 65.6023L67.3701 67.3701L69.1378 69.1378C84.9541 53.3216 84.9541 27.6784 69.1378 11.8622L67.3701 13.63Z" fill="#505153"/>
</svg>

                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}