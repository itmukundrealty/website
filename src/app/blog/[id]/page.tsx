"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchBlogById, Blog } from "@/lib/api";
import RelatedArticleSection from "@/components/InsightComponents/RelatedArticleSection";

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
    const formattedDate = createdDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    // Estimate read time (~200 words/min)
    const wordCount = blog.content?.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length || 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    // Unlayer exports full email HTML with hardcoded max-width/padding on wrapper divs.
    // Strip those inline styles so the content fills the page's px-20 layout naturally.
    const sanitizeUnlayerHtml = (html: string): string => {
        return html
            // Remove max-width from inline styles on any element
            .replace(/(<[^>]+style\s*=\s*["'][^"']*)max-width\s*:\s*[^;;"']+;?\s*/gi, '$1')
            // Remove fixed width (e.g. width:600px) from inline styles, keep 100%
            .replace(/(<[^>]+style\s*=\s*["'][^"']*)width\s*:\s*\d+px\s*;?\s*/gi, '$1')
            // Remove padding from the outermost wrapper div only
            .replace(/(<div[^>]+id=["']?u_body["']?[^>]+style\s*=\s*["'][^"']*)padding\s*:\s*[^;;"']+;?\s*/gi, '$1')
            // Remove background-color override on body/wrapper that conflicts
            .replace(/(<div[^>]+id=["']?u_body["'][^>]+style\s*=\s*["'][^"']*)background-color\s*:\s*[^;;"']+;?\s*/gi, '$1');
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-24 md:pt-32 pb-24">
                {/* ── HEADER SECTION ── */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 mb-12">
                    <div className="flex flex-col md:flex-row">

                        {/* LEFT: Title + Summary */}
                        <div className="flex-1 py-10 pr-16">
                            <h1
                                style={{ fontWeight: 700, fontSize: "clamp(2rem, 4vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#2d2d2d" }}
                                className="mb-6"
                            >
                                {blog.title}
                            </h1>
                            <p className="text-lg text-[#999] leading-relaxed font-normal">
                                {blog.summary}
                            </p>
                        </div>

                        {/* DIVIDER — thin vertical line */}
                        <div className="hidden md:block w-px bg-gray-200 self-stretch mx-0" />

                        {/* RIGHT: Date · Read Time · Go Back */}
                        <div className="md:min-w-1/4 flex flex-col justify-between py-10 pl-10 pr-4">

                            {/* Top group: Date + Read Time */}
                            <div className="flex flex-col gap-6">
                                {/* Date */}
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aaa] mb-[5px]">
                                        DATE
                                    </p>
                                    <p className="text-[15px] font-semibold text-[#2d2d2d] leading-tight">
                                        {formattedDate}
                                    </p>
                                </div>

                                {/* Read Time */}
                                <div>
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aaa] mb-[5px]">
                                        READ TIME
                                    </p>
                                    <p className="text-[15px] font-semibold text-[#2d2d2d] leading-tight">
                                        {readTime} {readTime === 1 ? "Min" : "Mins"}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom: Go Back */}
                            <div>
                                <Link
                                    href="/blog"
                                    className="inline-flex items-center gap-3 group"
                                >
                                    <div className="w-11 h-11 rounded-full border border-[#bbb] group-hover:border-[#505153] flex items-center justify-center transition-colors shrink-0">
                                        <ArrowLeft className="w-4 h-4 text-[#505153]" />
                                    </div>
                                    <span className="text-[15px] text-[#505153] font-normal group-hover:text-[#1a1a1a] transition-colors">
                                        Go Back
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Feature Image */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 mt-10 mb-16 md:mb-24">
                    <div className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden">
                        <Image
                            src={blog.imageUrl || "/images/placeholder.jpg"}
                            alt={blog.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                {/* Content Section */}
                <div className="mx-auto px-20">
                    <div
                        className="blog-content prose prose-lg md:prose-xl max-w-none text-[#505153] font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sanitizeUnlayerHtml(blog.content) }}
                    />
                </div>
            </main>
            <RelatedArticleSection currentBlogId={id} />


            <Footer />

            <style jsx global>{`
                /* ── Reset Unlayer email wrapper styles ── */
                .blog-content body,
                .blog-content center,
                .blog-content > div,
                .blog-content > div > div {
                    max-width: 100% !important;
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .blog-content table {
                    width: 100% !important;
                    max-width: 100% !important;
                }
                .blog-content td {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }

                /* ── Typography ── */
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
