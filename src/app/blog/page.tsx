"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <div className="bg-white min-h-screen">
            <Header />

            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-gray-100">
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl text-[#505153] tracking-tight mb-8">
                        Our Blogs
                    </h1>
                    <p className="text-[#505153] text-lg max-w-2xl font-light leading-relaxed">
                        Stay updated with the latest insights, trends, and stories from Mukund Realty.
                        Discover our perspective on architecture, lifestyle, and urban development.
                    </p>
                </div>
            </section>

            {/* Blogs Grid */}
            <section className="py-24">
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="w-8 h-8 border-4 border-[#0097DC] border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
                            {blogs.map((blog, index) => (
                                <div key={blog.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:mt-12' : ''}`}>
                                    <div className="relative aspect-[16/10] overflow-hidden mb-8 group">
                                        <Image
                                            src={blog.imageUrl || "/images/placeholder.jpg"}
                                            alt={blog.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <Link
                                            href={`/blog/${blog.id}`}
                                            className="absolute inset-0 z-10"
                                            aria-label={`Read ${blog.title}`}
                                        />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-[11px] uppercase tracking-widest text-[#0097DC] font-bold">
                                                {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                            </span>
                                            <div className="h-px flex-1 bg-gray-100"></div>
                                        </div>
                                        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#505153] mb-6 font-normal leading-tight">
                                            {blog.title}
                                        </h2>
                                        <p className="text-[#505153] font-light leading-relaxed mb-8 line-clamp-3">
                                            {blog.summary}
                                        </p>
                                        <Link
                                            href={`/blog/${blog.id}`}
                                            className="inline-flex items-center gap-2 group text-[#505153] hover:text-[#0097DC] transition-colors self-start"
                                        >
                                            <span className="text-lg font-medium border-b border-[#505153] group-hover:border-[#0097DC] transition-colors pb-0.5">
                                                Read More
                                            </span>
                                            <div className="w-8 h-8 rounded-full border border-[#505153] group-hover:border-[#0097DC] flex items-center justify-center transition-colors">
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24">
                            <h3 className="text-2xl text-[#505153] font-light">No blogs found. Check back later!</h3>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
