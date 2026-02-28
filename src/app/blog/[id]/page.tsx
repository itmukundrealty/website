"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchBlogById, Blog } from "@/lib/api";

interface BlogDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = use(params);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getBlog = async () => {
            const data = await fetchBlogById(id);
            setBlog(data);
            setLoading(false);
        };
        getBlog();
    }, [id]);

    if (loading) {
        return (
            <div className="bg-white min-h-screen">
                <Header />
                <div className="flex justify-center items-center h-[70vh]">
                    <div className="w-8 h-8 border-4 border-[#0097DC] border-t-transparent rounded-full animate-spin"></div>
                </div>
                <Footer />
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="bg-white min-h-screen">
                <Header />
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <h1 className="text-3xl text-[#505153] mb-4">Blog not found</h1>
                    <Link href="/blog" className="text-[#0097DC] hover:underline">Back to Blogs</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const createdDate = new Date(blog.createdAt);
    const formattedDate = createdDate.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedTime = createdDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-24 md:pt-32 pb-24">
                {/* Header Section */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 mb-12">
                    {/* Go Back Section */}
                    <div className="mb-8 md:mb-12">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 group text-[#505153] hover:text-[#0097DC] transition-colors"
                        >
                            <div className="w-10 h-10 rounded-full border border-[#505153] group-hover:border-[#0097DC] flex items-center justify-center transition-colors">
                                <ArrowLeft className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-medium tracking-tight">Go back to blogs</span>
                        </Link>
                    </div>

                    {/* Date and Time Section */}
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-[#505153]/60">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#0097DC]" />
                            <span className="text-sm font-medium uppercase tracking-widest">{formattedDate}</span>
                        </div>
                        <div className="w-1 h-1 rounded-full bg-gray-300 hidden sm:block"></div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#0097DC]" />
                            <span className="text-sm font-medium uppercase tracking-widest">{formattedTime}</span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl text-[#505153] leading-[1.1] mb-8 tracking-tight font-normal">
                        {blog.title}
                    </h1>

                    {/* Summary */}
                    <p className="text-xl md:text-2xl text-[#505153]/80 font-light max-w-4xl leading-relaxed italic border-l-4 border-[#0097DC] pl-6 py-2">
                        {blog.summary}
                    </p>
                </div>

                {/* Main Feature Image */}
                <div className="w-full h-[50vh] md:h-[70vh] relative mb-16 md:mb-24 overflow-hidden">
                    <Image
                        src={blog.imageUrl || "/images/placeholder.jpg"}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content Section */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 max-w-screen-xl">
                    <div
                        className="blog-content prose prose-lg md:prose-xl max-w-none text-[#505153] font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                .blog-content p {
                    margin-bottom: 2rem;
                    line-height: 1.8;
                }
                .blog-content h1, .blog-content h2, .blog-content h3 {
                    color: #505153;
                    margin-top: 3rem;
                    margin-bottom: 1.5rem;
                    font-weight: 500;
                    line-height: 1.2;
                }
                .blog-content img {
                    border-radius: 0.5rem;
                    margin: 3rem auto;
                    max-width: 100%;
                }
                .blog-content a {
                    color: #0097DC;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .blog-content blockquote {
                    border-left: 4px solid #0097DC;
                    padding-left: 1.5rem;
                    margin: 2rem 0;
                    font-style: italic;
                    color: #505153/80;
                }
                .blog-content ul, .blog-content ol {
                    margin: 2rem 0;
                    padding-left: 1.5rem;
                }
                .blog-content li {
                    margin-bottom: 0.75rem;
                }
            `}</style>
        </div>
    );
}
