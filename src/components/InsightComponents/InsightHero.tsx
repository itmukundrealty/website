"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { fetchBlogs, Blog } from "@/lib/api";

export default function InsightHero() {
    const [latestBlog, setLatestBlog] = useState<Blog | null>(null);

    useEffect(() => {
        const getLatest = async () => {
            const data = await fetchBlogs();
            if (data.length === 0) return;
            const sorted = data
                .slice()
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            setLatestBlog(sorted[0]);
        };
        getLatest();
    }, []);

    // Format date like "DATE 16 JAN 2026"
    const formattedDate = latestBlog
        ? `DATE ${new Date(latestBlog.createdAt).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).toUpperCase()}`
        : "";

    return (
        <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">

                    {/* Left Content */}
                    <div className="flex-1 md:pr-12 lg:pr-24 flex flex-col justify-center">
                        <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[1.05] font-medium text-[#191919] mb-12 tracking-tight">
                            What&apos;s New<br />at Mukund
                        </h1>

                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-[#888888] font-light mb-6">
                                {formattedDate || "\u00a0"}
                            </span>

                            <h2 className="text-[#555555] text-[1.35rem] md:text-[1.5rem] leading-relaxed font-normal mb-8 max-w-[450px]">
                                {latestBlog
                                    ? latestBlog.title.split(" ").slice(0, 8).join(" ") +
                                    (latestBlog.title.split(" ").length > 8 ? "..." : "")
                                    : "Loading..."}
                            </h2>

                            {latestBlog && (

                                <Link
                                    href={`/insights/${latestBlog.id}`}
                                    className="group flex items-center gap-1.5 text-[#00A3E0] font-semibold hover:text-[#008CBE] transition-colors w-fit pt-1"
                                >
                                    <ArrowUpRight className="w-[17px] h-[17px] group-hover:rotate-45 transition-transform duration-300" strokeWidth={2} />
                                    <span className="text-[16px]">Read More</span>
                                </Link>
                            )}
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full max-w-[500px] md:max-w-none mx-auto md:mx-0">
                        <div className="relative w-full aspect-[4/4.5] md:aspect-[4/4] max-w-[580px] ml-auto bg-gray-100">
                            {latestBlog?.imageUrl ? (
                                <img
                                    src={latestBlog.imageUrl}
                                    alt={latestBlog.title}
                                    className="w-full h-full object-cover absolute inset-0"
                                />
                            ) : (
                                <Image
                                    src="/images/InsightHero.png"
                                    alt="Speaker at Event"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
