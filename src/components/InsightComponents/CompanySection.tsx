import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function CompanySection() {
    const announcements = [
        {
            id: 1,
            title: "New Project Launch\nAnnounced",
            description: "Expanding our portfolio with a\nthoughtfully planned new\ndevelopment.",
            link: "#",
            image: "/images/ashokaImages/2.webp"
        },
        {
            id: 2,
            title: "Construction\nMilestone Achieved",
            description: "Key phase completed with precision\nand on schedule delivery.",
            link: "#",
            image: "/images/rudrakshImages/1.webp"
        },
        {
            id: 3,
            title: "Strengthening\nCommunity Partnerships",
            description: "Collaborating with local stakeholders\nto build responsibly and sustainably.",
            link: "#",
            image: "/images/LandingPageImg/defining/3.png"
        }
    ];

    return (
        <section className="bg-white pt-24 pb-16 md:py-24">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                {/* Header */}
                <div className="mb-0">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.05] text-[#505153] font-medium tracking-tight">
                        Company<br />Announcements
                    </h2>
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
                                className="text-[#505153] text-[15px] font-medium w-fit underline underline-offset-[5px] decoration-1 decoration-zinc-400 hover:text-[#505153] hover:decoration-[#505153] transition-colors mb-14"
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