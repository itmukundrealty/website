import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function CompanySection() {
    const announcements = [
        {
            id: 1,
            title: "New Project Launch\nAnnounced",
            description: "Expanding our portfolio with a\nthoughtfully planned new\ndevelopment.",
            link: "#",
            image: "/images/company11.png"
        },
        {
            id: 2,
            title: "Construction\nMilestone Achieved",
            description: "Key phase completed with precision\nand on schedule delivery.",
            link: "#",
            image: "/images/company12.png"
        },
        {
            id: 3,
            title: "Strengthening\nCommunity Partnerships",
            description: "Collaborating with local stakeholders\nto build responsibly and sustainably.",
            link: "#",
            image: "/images/company13.png"
        }
    ];

    return (
        <section className="bg-white pt-24 pb-16 md:py-24">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                {/* Header */}
                  <div className="flex justify-between items-center mb-16">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl  text-[#505153] tracking-tight">Company<br />Announcements</h2>
                    <Link href="/insights" className="flex items-center gap-2 group text-[#505153] hover:text-[#0C9CDE]  transition-colors duration-300">
                        <span className="text-lg">View more</span>
                        <div className="w-6 h-6 rounded-full border border-[#505153] flex items-center justify-center group-hover:border-[#0C9CDE] group-hover:translate-x-2  transition-colors ">
                            <ChevronRight className="w-4 h-4" />
                        </div>
                    </Link>
                </div>


                {/* Content Grid */}
                <div className="flex flex-col md:flex-row relative mt-8 md:mt-10">

                    {announcements.map((item, index) => (
                        <div
                            key={item.id}
                            className={`flex flex-col flex-1 pb-16 pt-12 md:pt-16 ${index === 0 ? 'md:pr-10 lg:pr-14' :
                                index === 1 ? 'md:px-10 lg:px-14 border-t md:border-t-0 md:border-l border-zinc-300' :
                                    'md:pl-10 lg:pl-14 border-t md:border-t-0 md:border-l border-zinc-300'
                                }`}
                        >
                            <h3 className="text-[1.5rem] md:text-[1.8rem] leading-[1.25] text-[#505153] font-normal mb-5 whitespace-pre-line tracking-tight min-h-[4.5rem]">
                                {item.title}
                            </h3>
                            <p className="text-[#505153] font-light leading-relaxed text-[15px] mb-8 whitespace-pre-line min-h-[4.5rem]">
                                {item.description}
                            </p>
                            <Link
                                href={item.link}
                                className="text-[#505153] text-[15px] font-medium w-fit underline underline-offset-[5px] decoration-1 decoration-zinc-400 hover:text-[#0D9CDE] hover:decoration-[#0D9CDE] transition-colors mb-14"
                            >
                                Read More
                            </Link>
                            <div className="relative w-full aspect-square mt-auto">
                                <Image
                                    src={item.image}
                                    alt={item.title.replace('\n', ' ')}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}