"use client";

import React, { useEffect, useState, use, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchBlogById, Blog } from "@/lib/api";
import RelatedArticleSection from "@/components/InsightComponents/RelatedArticleSection";

interface BlogDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = use(params);
    const router = useRouter();
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [toc, setToc] = useState<{ id: string; title: string; level: number }[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const getBlog = async () => {
            const data = await fetchBlogById(id);
            setBlog(data);
            setLoading(false);
        };
        getBlog();
    }, [id]);

    useEffect(() => {
        if (!blog || !contentRef.current) return;
        
        // Find all headings inside the content
        const headings = contentRef.current.querySelectorAll('h2, h3, h4');
        const generatedToc: { id: string; title: string; level: number }[] = [];
        
        headings.forEach((heading, index) => {
            const textContent = heading.textContent?.trim();
            if (!textContent) return;
            
            // Create a safe, URL-friendly ID based on the heading text
            const safeId = textContent.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
            const headingId = heading.id || `heading-${safeId}-${index}`;
            heading.id = headingId;
            
            generatedToc.push({
                id: headingId,
                title: textContent,
                level: Number(heading.tagName.charAt(1))
            });
        });
        
        requestAnimationFrame(() => {
            setToc(generatedToc);
        });
    }, [blog]);

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
                    <Link href="/insights" className="text-[#0097DC] hover:underline">Back to Blogs</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const displayDate = blog.date || blog.createdAt;
    const createdDate = new Date(displayDate);
    const formattedDate = createdDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    // Estimate read time (~200 words/min)
    const wordCount = blog.content?.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length || 0;
    // const readTime = Math.max(1, Math.ceil(wordCount / 200));

    // Fallback to backend TOC if no headings found in content
    const displayToc = toc.length > 0 
        ? toc 
        : (blog.tableOfContents || []).map((item: { title: string } | string, idx: number) => ({
            id: `fallback-${idx}`,
            title: typeof item === 'string' ? item : item.title,
            level: 2
          }));

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-24 md:pt-32 pb-24">
                {/* ── TOP HEADER SECTION ── */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 mb-10">
                    {/* Go Back */}
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-3 group mb-10"
                    >
                        <div className="w-10 h-10 rounded-full border border-[#505153] group-hover:border-[#0097DC] flex items-center justify-center transition-colors shrink-0">
                            <ChevronLeft className="w-5 h-5 text-[#505153] group-hover:text-[#0097DC]" />
                        </div>
                        <span className="text-[15px] text-[#505153] font-normal group-hover:text-[#0097DC] transition-colors">
                            Go Back
                        </span>
                    </button>

                    {/* Title */}
                    <h1
                        style={{ fontSize: "clamp(2rem, 4vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#2d2d2d" }}
                        className="mb-6 font-medium"
                    >
                        {blog.title}
                    </h1>

                    {/* Date + Source Row */}
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#aaa]">
                                DATE
                            </span>
                            <span className="text-[15px] font-medium text-[#2d2d2d]">
                                {formattedDate}
                            </span>
                        </div>
                        {blog.source && (
                            <>
                                <span className="text-[#ccc]">·</span>
                                <span className="text-[15px] font-medium text-[#0097DC]">
                                    {blog.source}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* ── TWO-COLUMN LAYOUT ── */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* LEFT: Blog Content (scrollable) */}
                        <div className="flex-1 min-w-0 order-2 lg:order-1" style={{ overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                            <div
                                ref={contentRef}
                                className="blog-content prose prose-lg max-w-none text-[#505153] font-light leading-relaxed"
                                style={{ maxWidth: '100%', overflow: 'hidden' }}
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </div>

                        {/* RIGHT: Sticky Sidebar (Image + TOC) */}
                        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 order-1 lg:order-2">
                            <div className="lg:sticky lg:top-[120px]">
                                {/* Cover Image */}
                                {blog.imageUrl && (
                                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm mb-8">
                                        <Image
                                            src={blog.imageUrl}
                                            alt={blog.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Table of Contents Card */}
                                {displayToc.length > 0 && (
                                    <div className="bg-[#f8f9fa] border border-[#e8eaed] rounded-sm p-6">
                                        <h3 className="text-[20px] font-semibold text-[#2d2d2d] mb-5 pb-4 border-b border-[#e0e0e0]">
                                            Table of content
                                        </h3>
                                        <ol className="space-y-3">
                                            {displayToc.map((item, index) => (
                                                <li key={index} className="flex gap-3">
                                                    <span className="text-[15px] font-medium text-[#505153] shrink-0 mt-[2px]">
                                                        {index + 1}.
                                                    </span>
                                                    <button 
                                                        onClick={() => {
                                                            if (item.id.startsWith('fallback-')) return;
                                                            const el = document.getElementById(item.id);
                                                            if (el) {
                                                                const yOffset = -120; // Offset for sticky header
                                                                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                                                                window.scrollTo({top: y, behavior: 'smooth'});
                                                            }
                                                        }}
                                                        className={`text-[15px] font-normal leading-snug text-left transition-colors ${
                                                            item.id.startsWith('fallback-') 
                                                                ? 'text-[#505153]' 
                                                                : 'text-[#505153] hover:text-[#0097DC] cursor-pointer'
                                                        }`}
                                                    >
                                                        {item.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <RelatedArticleSection currentBlogId={id} />
            <Footer blogTitle={blog.title} />

            <style jsx global>{`
                /* ── Blog Content Typography ── */
                .blog-content p {
                    font-size: 18px;
                    margin-bottom: 1rem;
                    line-height: 1.8;
                    color: #505153;
                    font-weight: 300;
                }
                .blog-content h1 {
                    font-size: 32px;
                    color: #2d2d2d;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    line-height: 1.3;
                }
                .blog-content h2 {
                    font-size: 26px;
                    color: #2d2d2d;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    line-height: 1.3;
                }
                .blog-content h3 {
                    font-size: 22px;
                    color: #2d2d2d;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    font-weight: 600;
                    line-height: 1.3;
                }
                .blog-content img {
                    border-radius: 4px;
                    margin: 1.5rem 0;
                    max-width: 100%;
                    height: auto;
                }
                .blog-content a {
                    color: #0097DC;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .blog-content blockquote {
                    border-left: 4px solid #0097DC;
                    padding-left: 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #666;
                }
                .blog-content ul, .blog-content ol {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                    font-size: 18px;
                    color: #505153;
                }
                .blog-content li {
                    margin-bottom: 0.5rem;
                    line-height: 1.7;
                    font-weight: 300;
                }
                .blog-content strong {
                    font-weight: 600;
                    color: #2d2d2d;
                }

                /* ── Reset any Unlayer wrapper styles on legacy content ── */
                .blog-content,
                .blog-content * {
                    max-width: 100% !important;
                    box-sizing: border-box !important;
                    overflow-wrap: break-word !important;
                    word-break: break-word !important;
                }
                .blog-content body,
                .blog-content center,
                .blog-content > div,
                .blog-content > div > div {
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .blog-content table {
                    width: 100% !important;
                    max-width: 100% !important;
                    table-layout: fixed !important;
                }
                .blog-content td {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    overflow-wrap: break-word !important;
                    word-break: break-word !important;
                }

                /* Enforce minimum 18px on all text inside blog content */
                .blog-content span,
                .blog-content div,
                .blog-content p,
                .blog-content li {
                    font-size: max(18px, inherit) !important;
                }
            `}</style>
        </div>
    );
}
