"use client";
import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { fetchAnnouncements, Blog as Announcement } from '@/lib/api';

export default function CompanySection() {
    const [announcements, setAnnouncements] = useState<Announcement[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getAnnouncements = async () => {
            const data = await fetchAnnouncements();
            // Take the latest 3 announcements
            setAnnouncements(data.slice(0, 3));
            setLoading(false);
        };
        getAnnouncements();
    }, []);

    if (loading) {
        return (
            <div className="bg-white py-24 flex justify-center items-center">
                <div className="w-8 h-8 border-4 border-[#0097DC] border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (announcements.length === 0) {
        return null; // Or some placeholder
    }


    return (
        <section className="bg-white pt-12 pb-16 md:py-24">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                {/* Header */}
                <div className="flex justify-between items-center mb-0 md:mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl  text-[#505153] tracking-tight">Company<br />Announcements</h2>
                    <Link href="/company-announcements" className="hidden md:flex items-center gap-2 group  text-[#0C9CDE] transition-colors duration-300" >
                        <span className="text-[16px] md:text-[16px]">View more</span>
                        <div className="md:w-6 md:h-6 w-5 h-5 rounded-full border border-[#0C9CDE] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2 transition-colors">
                            <ChevronRight className="md:w-4 md:h-4 w-3 h-3" />
                        </div>
                    </Link>
                </div>


                {/* Content Grid */}
                <div className="flex flex-col md:flex-row relative mt-0 md:mt-10">

                    {announcements.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col flex-1 pb-16 pt-12 md:pt-16 ${index === 0 ? 'md:pr-10 lg:pr-14' :
                                index === 1 ? 'md:px-10 lg:px-14 border-t md:border-t-0 md:border-l border-zinc-300' :
                                    'md:pl-10 lg:pl-14 border-t md:border-t-0 md:border-l border-zinc-300'
                                }`}
                        >
                            <h3 className="text-2xl md:text-3xl font-normal text-[#505153]/80 mb-6 leading-tight max-w-[70%] line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-[#505153] font-light leading-relaxed text-sm  md:text-lg mb-6 line-clamp-3">
                                {item.summary}
                            </p>
                            <Link
                                href={`/company-announcements/${item.id}`}
                                className="text-[#505153] text-[16px] font-medium w-fit underline underline-offset-[5px] decoration-1 decoration-zinc-400 hover:text-[#0D9CDE] hover:decoration-[#0D9CDE] transition-colors mb-14"
                            >
                                Read More
                            </Link>
                            <div className="relative w-full aspect-square mt-auto">
                                <Image
                                    src={item.imageUrl || "/images/placeholder.jpg"}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}

                </div>
                <Link href="/insights" className="flex items-center justify-center text-[#0C9CDE]    gap-2 group  transition-colors duration-300 md:hidden block">
                    <span className="text-lg">View more</span>
                    <div className="w-6 h-6 rounded-full border border-[#0C9CDE] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2  transition-colors  ">
                        <ChevronRight className="w-4 h-4" />
                    </div>
                </Link>
            </div>
        </section>
    );
}