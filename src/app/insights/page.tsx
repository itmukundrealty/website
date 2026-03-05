"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchBlogs, Blog } from "@/lib/api";

export default function BlogListingPage() {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlogs = async () => {
            const data = await fetchBlogs();
            setBlogs(data);
            setLoading(false);
        };
        getBlogs();
    }, []);

    return (
        <>
            <Header />

            <section className="mx-auto py-16 px-6 md:px-12 lg:px-20 xl:px-54 font-sans bg-white">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight font-normal text-gray-900 mb-14 tracking-tight mt-20">
                    Insights
                </h2>

                {/* Grid Container */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-8 h-8 border-4 border-[#0097DC] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : blogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">
                        {blogs.map((blog, index) => {
                            const isFirstCol = index % 3 === 0;
                            const isMiddleCol = index % 3 === 1;
                            const isLastCol = index % 3 === 2;
                            const isLastItem = index === blogs.length - 1;

                            let colStyles = "";
                            if (isFirstCol) colStyles = `pr-8 ${!isLastItem ? "md:border-r border-gray-200" : ""}`;
                            if (isMiddleCol) colStyles = `px-8 ${!isLastItem ? "md:border-r border-gray-200" : ""}`;
                            if (isLastCol) colStyles = "pl-8";

                            return (
                                <div key={blog.id} className={`flex flex-col ${colStyles}`}>
                                    {/* Image Container */}
                                    <div className="w-full h-[320px] mb-5 bg-gray-100 overflow-hidden">
                                        <img
                                            src={blog.imageUrl || "/images/placeholder.jpg"}
                                            alt={blog.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-lg md:text-[1.5rem] text-[#505153] leading-snug font-normal pr-2 mb-3">
                                        {blog.title}
                                    </h3>

                                    {/* Link */}
                                    <Link
                                        href={`/insights/${blog.id}`}
                                        className="text-[16px] text-[#505153] underline decoration-[#505153] underline-offset-[3px] hover:text-[#0097DC] hover:decoration-[#0097DC] transition-colors mt-auto self-start"
                                    >
                                        Read More
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-24">
                        <h3 className="text-2xl text-[#505153] font-light">No blogs found. Check back later!</h3>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}
