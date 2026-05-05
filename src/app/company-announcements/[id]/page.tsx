"use client";

import React, { useEffect, useState, use } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { fetchAnnouncementById, Blog as Announcement } from "@/lib/api";

interface AnnouncementDetailPageProps {
    params: Promise<{ id: string }>;
}

export default function AnnouncementDetailPage({ params }: AnnouncementDetailPageProps) {
    const { id } = use(params);
    const router = useRouter();
    const [announcement, setAnnouncement] = useState<Announcement | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAnnouncement = async () => {
            const data = await fetchAnnouncementById(id);
            setAnnouncement(data);
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
                    <button onClick={() => router.push("/company-announcements")} className="text-[#0097DC] hover:underline">Back to Announcements</button>
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

    // Estimate read time (~200 words/min)
    const wordCount = announcement.content?.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length || 0;
    const readTime = Math.max(1, Math.ceil(wordCount / 200));

    const sanitizeUnlayerHtml = (html: string): string => {
        return html
            .replace(/(<[^>]+style\s*=\s*["'][^"']*)max-width\s*:\s*[^;;"']+;?\s*/gi, '$1')
            .replace(/(<[^>]+style\s*=\s*["'][^"']*)width\s*:\s*\d+px\s*;?\s*/gi, '$1')
            .replace(/(<div[^>]+id=["']?u_body["']?[^>]+style\s*=\s*["'][^"']*)padding\s*:\s*[^;;"']+;?\s*/gi, '$1')
            .replace(/(<div[^>]+id=["']?u_body["'][^>]+style\s*=\s*["'][^"']*)background-color\s*:\s*[^;;"']+;?\s*/gi, '$1');
    };

    return (
        <div className="bg-white min-h-screen">
            <Header />

            <main className="pt-24 md:pt-32 pb-24">
                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 mb-12">
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-1 md:py-10 pr-16">
                            <h1
                                style={{ fontSize: "clamp(2rem, 4vw, 3.75rem)", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#2d2d2d" }}
                                className="mb-6 font-medium"
                            >
                                {announcement.title}
                            </h1>
                            <p className="text-lg text-[#999] leading-relaxed font-normal">
                                {announcement.summary}
                            </p>
                        </div>

                        <div className="hidden md:block w-px bg-gray-200 self-stretch mx-0" />

                        <div className="md:min-w-1/4 flex flex-col justify-between py-10 md:pl-10 pr-4">
                            <div className="flex flex-col gap-6 md:gap-6">
                                <div className="flex flex-col gap-4 md:gap-0">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aaa] mb-[5px]">
                                        DATE
                                    </p>
                                    <p className="text-[15px] font-semibold text-[#2d2d2d] leading-tight">
                                        {formattedDate}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 md:gap-0">
                                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#aaa] mb-[5px]">
                                        READ TIME
                                    </p>
                                    <p className="text-[15px] font-semibold text-[#2d2d2d] leading-tight">
                                        {readTime} {readTime === 1 ? "Min" : "Mins"}
                                    </p>
                                </div>
                            </div>

                            <div className="mt-6 md:mt-0">
                                <button
                                    type="button"
                                    onClick={() => router.back()}
                                    className="inline-flex items-center gap-3 group"
                                >
                                    <div className="w-8 h-8 rounded-full border border-[#505153] group-hover:border-[#0097DC] flex items-center justify-center transition-colors shrink-0">
                                        <ChevronLeft className="w-4 h-4 text-[#505153] group-hover:text-[#0097DC]" />
                                    </div>
                                    <span className="text-[15px] text-[#505153] font-normal group-hover:text-[#0097DC] transition-colors">
                                        Go Back
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-auto px-6 md:px-12 lg:px-20 xl:px-54 mt-10 mb-16 md:mb-24">
                    <div className="w-full h-[50vh] md:h-[80vh] relative overflow-hidden">
                        <Image
                            src={announcement.imageUrl || "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/placeholder.jpg"}
                            alt={announcement.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>

                <div className="mx-auto px-20">
                    <div
                        className="announcement-content prose prose-lg md:prose-xl max-w-none text-[#505153] font-light leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: sanitizeUnlayerHtml(announcement.content) }}
                    />
                </div>
            </main>

            <Footer />

            <style jsx global>{`
                .announcement-content body,
                .announcement-content center,
                .announcement-content > div,
                .announcement-content > div > div {
                    max-width: 100% !important;
                    width: 100% !important;
                    padding: 0 !important;
                    margin: 0 !important;
                }
                .announcement-content table {
                    width: 100% !important;
                    max-width: 100% !important;
                }
                .announcement-content td {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }
                .announcement-content p {
                    margin-bottom: 0.75rem;
                    line-height: 1.6;
                }
                .announcement-content h1, .announcement-content h2, .announcement-content h3 {
                    color: #505153;
                    margin-top: 1.5rem;
                    margin-bottom: 0.75rem;
                    font-weight: 500;
                    line-height: 1.2;
                }
                .announcement-content img {
                    border-radius: 0.5rem;
                    margin: 1.5rem auto;
                    max-width: 100%;
                }
                .announcement-content a {
                    color: #0097DC;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
                .announcement-content blockquote {
                    border-left: 4px solid #0097DC;
                    padding-left: 1.5rem;
                    margin: 1rem 0;
                    font-style: italic;
                }
                .announcement-content ul, .announcement-content ol {
                    margin: 1rem 0;
                    padding-left: 1.5rem;
                }
                .announcement-content li {
                    margin-bottom: 0.4rem;
                }
            `}</style>
        </div>
    );
}
