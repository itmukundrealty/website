"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchAnnouncementById, Blog as Announcement } from "@/lib/api";

/** Decode common HTML entities so TOC titles display as plain readable text. */
function decodeHtmlEntities(str: string): string {
    return str
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
        .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
        .replace(/ {2,}/g, ' ')
        .trim();
}

/** Extract headings (h1–h4) from an HTML string and return TOC items. */
function extractTocFromHtml(html: string): { id: string; title: string; level: number }[] {
    const items: { id: string; title: string; level: number }[] = [];
    const regex = /<(h[1-4])[^>]*>([\s\S]*?)<\/\1>/gi;
    let match;
    let index = 0;
    while ((match = regex.exec(html)) !== null) {
        const level = Number(match[1].charAt(1));
        const raw = match[2].replace(/<[^>]*>/g, '');
        const title = decodeHtmlEntities(raw);
        if (!title) continue;
        const safeId = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        const id = `heading-${safeId}-${index++}`;
        items.push({ id, title, level });
    }
    return items;
}

/**
 * Stamp the same IDs used by the TOC onto the matching heading tags in the HTML
 */
function addHeadingIds(html: string, toc: { id: string; title: string; level: number }[]): string {
    let tocIndex = 0;
    return html.replace(/<(h[1-4])([^>]*)>([\s\S]*?)<\/\1>/gi, (fullMatch, tag, attrs, inner) => {
        const title = inner.replace(/<[^>]*>/g, '').trim();
        if (!title || tocIndex >= toc.length) return fullMatch;
        const cleanAttrs = attrs.replace(/\s*id="[^"]*"/gi, '');
        const id = toc[tocIndex++].id;
        return `<${tag}${cleanAttrs} id="${id}">${inner}</${tag}>`;
    });
}

/** Clean up Unlayer inline styles that might break layout */
const sanitizeUnlayerHtml = (html: string): string => {
    return html
        .replace(/(<[^>]+style\s*=\s*["'][^"']*)max-width\s*:\s*[^;;"']+;?\s*/gi, '$1')
        .replace(/(<[^>]+style\s*=\s*["'][^"']*)width\s*:\s*\d+px\s*;?\s*/gi, '$1')
        .replace(/(<div[^>]+id=["']?u_body["']?[^>]+style\s*=\s*["'][^"']*)padding\s*:\s*[^;;"']+;?\s*/gi, '$1')
        .replace(/(<div[^>]+id=["']?u_body["'][^>]+style\s*=\s*["'][^"']*)background-color\s*:\s*[^;;"']+;?\s*/gi, '$1');
};

interface AnnouncementDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function AnnouncementDetailPage({ params }: AnnouncementDetailPageProps) {
    const { id } = use(params);
    const router = useRouter();
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);
    const [loading, setLoading] = useState(true);
    const [toc, setToc] = useState<{ id: string; title: string; level: number }[]>([]);

    useEffect(() => {
        const getAnnouncement = async () => {
            const data = await fetchAnnouncementById(id);
            setAnnouncement(data);
            if (data?.content) {
                setToc(extractTocFromHtml(data.content));
            }
            setLoading(false);
        };
        getAnnouncement();
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

    if (!announcement) {
        return (
            <div className="bg-white min-h-screen">
                <Header />
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <h1 className="text-3xl text-[#505153] mb-4">Announcement not found</h1>
                    <Link href="/company-announcements" className="text-[#0097DC] hover:underline">Back to Announcements</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const displayDate = announcement.date || announcement.createdAt;
    const createdDate = new Date(displayDate);
    const formattedDate = createdDate.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

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
                        {announcement.title}
                    </h1>

                    {/* Date Row */}
                    <div className="flex items-center gap-4 flex-wrap">
                        <div className="flex items-center gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#aaa]">
                             DATE
                            </span>
                            <span className="text-[15px] font-medium text-[#2d2d2d]">
                                {formattedDate}
                            </span>
                             {announcement.customLinkUrl && (
                                    <div className="  transition-shadow mx-4">
                                        <h3 className="text-[16px] font-semibold text-[#2D2D2D] ">
                                            Source Link : <span className="text-[#0097DC] font-medium cursor-pointer hover:text-[#0097DC]/60 ">   <a
                                            href={announcement.customLinkUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className=" text-[#0097DC] hover:text-[#0097DC]/60  font-medium   rounded-sm transition-colors  "
                                        >
                                           Click Here
                                        </a></span>
                                        </h3>
                                      
                                    </div>
                                )}
                            
                            
                        </div>
                        {announcement.source && (
                            <>
                                <span className="text-[#ccc]">·</span>
                                <span className="text-[15px] font-medium text-[#0097DC]">
                                    {announcement.source}
                                </span>
                            </>
                        )}
                    </div>
                </div>

                {/* ── TWO-COLUMN LAYOUT ── */}
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                        {/* LEFT: Content */}
                        <div className="flex-1 min-w-0 order-2 lg:order-1" style={{ overflowWrap: 'break-word', wordBreak: 'normal' }}>
                            <div
                                id="announcement-content-body"
                                className="announcement-content prose prose-lg max-w-none text-[#505153] font-light leading-relaxed"
                                style={{ maxWidth: '100%', overflow: 'hidden' }}
                                dangerouslySetInnerHTML={{ 
                                    __html: addHeadingIds(sanitizeUnlayerHtml(announcement.content), toc) 
                                }}
                            />
                        </div>

                        {/* RIGHT: Sticky Sidebar */}
                        <div className="w-full lg:w-[380px] xl:w-[420px] shrink-0 order-1 lg:order-2">
                            <div className="lg:sticky lg:top-[120px]">
                                {/* Cover Image */}
                                {announcement.imageUrl && (
                                    <div className="w-full aspect-[4/3] relative overflow-hidden rounded-sm mb-8">
                                        <Image
                                            src={announcement.imageUrl}
                                            alt={announcement.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}

                                {/* Table of Contents */}
                                {toc.length > 0 && (
                                    <div className="bg-[#f8f9fa] border border-[#e8eaed] rounded-sm p-6">
                                        <h3 className="text-[20px] font-semibold text-[#2d2d2d] mb-5 pb-4 border-b border-[#e0e0e0]">
                                            Table of Contents
                                        </h3>
                                        <ol className="space-y-3">
                                            {toc.map((item, index) => (
                                                <li key={item.id} className="flex gap-3" style={{ paddingLeft: item.level > 2 ? `${(item.level - 2) * 12}px` : undefined }}>
                                                    <span className="text-[15px] font-medium text-[#505153] shrink-0 mt-[2px]">
                                                        {index + 1}.
                                                    </span>
                                                    <button
                                                        onClick={() => {
                                                            const el = document.getElementById(item.id);
                                                            if (el) {
                                                                const yOffset = -120;
                                                                const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
                                                                window.scrollTo({ top: y, behavior: 'smooth' });
                                                            }
                                                        }}
                                                        className="text-[15px] font-normal leading-snug text-left text-[#505153] hover:text-[#0097DC] transition-colors cursor-pointer"
                                                    >
                                                        {item.title}
                                                    </button>
                                                </li>
                                            ))}
                                        </ol>
                                    </div>
                                )}

                                {/* Custom Redirect Link Section */}
                               
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                .announcement-content p {
                    font-size: 18px;
                    margin-bottom: 1rem;
                    line-height: 1.8;
                    color: #505153;
                    font-weight: 300;
                }
                .announcement-content h1 {
                    font-size: 32px;
                    color: #2d2d2d;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    line-height: 1.3;
                }
                .announcement-content h2 {
                    font-size: 26px;
                    color: #2d2d2d;
                    margin-top: 2.5rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                    line-height: 1.3;
                }
                .announcement-content h3 {
                    font-size: 22px;
                    color: #2d2d2d;
                    margin-top: 2rem;
                    margin-bottom: 0.75rem;
                    font-weight: 600;
                    line-height: 1.3;
                }
                .announcement-content img {
                    border-radius: 4px;
                    margin: 1.5rem 0;
                    max-width: 100%;
                    height: auto;
                }
                .announcement-content a {
                    color: #0097DC;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .announcement-content blockquote {
                    border-left: 4px solid #0097DC;
                    padding-left: 1.5rem;
                    margin: 1.5rem 0;
                    font-style: italic;
                    color: #666;
                }
                .announcement-content ul, .announcement-content ol {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                    font-size: 18px;
                    color: #505153;
                }
                .announcement-content li {
                    margin-bottom: 0.5rem;
                    line-height: 1.7;
                    font-weight: 300;
                }
                .announcement-content strong {
                    font-weight: 600;
                    color: #2d2d2d;
                }

                .announcement-content,
                .announcement-content * {
                    max-width: 100% !important;
                    box-sizing: border-box !important;
                    overflow-wrap: break-word !important;
                    word-break: normal !important;
                    hyphens: none !important;
                }
                .announcement-content body,
                .announcement-content center,
                .announcement-content > div,
                .announcement-content > div > div {
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .announcement-content table {
                    width: 100% !important;
                    max-width: 100% !important;
                    table-layout: fixed !important;
                }
                .announcement-content td {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                    overflow-wrap: break-word !important;
                    word-break: normal !important;
                }
                .announcement-content span,
                .announcement-content div,
                .announcement-content p,
                .announcement-content li {
                    font-size: max(18px, inherit) !important;
                }
            `}</style>
        </div>
    );
}
