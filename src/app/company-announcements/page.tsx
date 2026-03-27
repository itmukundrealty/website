"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { fetchAnnouncements, Blog as Announcement } from "@/lib/api";
import Image from "next/image";

const CompanyAnnouncementsPage = () => {
    const router = useRouter();
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAnnouncements = async () => {
            const data = await fetchAnnouncements();
            setAnnouncements(data);
            setLoading(false);
        };
        getAnnouncements();
    }, []);

    return (
        <>
            <Header />

            <section className="mx-auto py-16 px-6 md:px-12 lg:px-20 xl:px-54 font-sans bg-white">
                {/* Back Button */}
                <div className="mt-20">
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 text-[#505153] hover:text-[#0097DC] transition-colors group"
                    >
                        <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="text-sm font-medium uppercase tracking-wider">Back</span>
                    </button>
                </div>

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl leading-tight font-normal text-[#505153] mb-14 tracking-tight mt-20">
                    Company Announcements
                </h2>

                {/* Grid Container */}
                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="w-8 h-8 border-4 border-[#0097DC] border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : announcements.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16">
                        {announcements.map((item, index) => {
                            // Determine position to apply correct borders and padding based on the column
                            const isFirstCol = index % 3 === 0;
                            const isMiddleCol = index % 3 === 1;
                            const isLastCol = index % 3 === 2;
                            const isLastItem = index === announcements.length - 1;

                            let colStyles = "";
                            if (isFirstCol) colStyles = `pr-8 ${!isLastItem ? "md:border-r border-gray-200" : ""}`;
                            if (isMiddleCol) colStyles = `px-8 ${!isLastItem ? "md:border-r border-gray-200" : ""}`;
                            if (isLastCol) colStyles = "pl-8";

                            return (
                                <div key={item.id} className={`flex flex-col ${colStyles}`}>
                                    {/* Image Container */}
                                    <div className="w-full h-[320px] mb-5 bg-gray-100 overflow-hidden">
                                        <Image
                                            width={500}
                                            height={500}
                                            src={item.imageUrl || "/images/placeholder.jpg"}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Content */}
                                    <h3 className="text-lg md:text-[1.5rem] text-[#505153] leading-snug font-normal pr-2 mb-3 line-clamp-2">
                                        {item.title}
                                    </h3>

                                    {/* Link */}
                                    <Link
                                        href={`/company-announcements/${item.id}`}
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
                        <h3 className="text-2xl text-[#505153] font-light">No announcements found. Check back later!</h3>
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
};

export default CompanyAnnouncementsPage;