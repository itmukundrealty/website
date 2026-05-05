"use client";

import { useState } from "react";
import Link from "next/link";
import { Job } from "@/data/jobs";
import ApplyModal from "./ApplyModal";
import { ArrowDown, ChevronDown } from "lucide-react";

interface StaticJobCardProps {
    title: string;
    type: string;
    description: string;
    color: string;
    slug: string;
    onApply: () => void;
}

const StaticJobCard = ({ title, type, description, color, slug, onApply }: StaticJobCardProps) => {
    return (
        // make the whole card clickable 
        <Link href={`/careers/${slug}`} className="w-full md:w-auto">
        <div
            style={{ backgroundColor: color }}
            className="flex flex-col justify-between h-full min-h-[280px] md:min-h-[420px] p-4 md:p-8 text-white w-full transition-transform hover:-translate-y-2"
        >
            <div>
                <h2 className="text-lg md:text-2xl font-medium mb-1 tracking-tight leading-tight">{title}</h2>
                <p className="text-[10px] md:text-sm font-normal mb-3 md:mb-4 tracking-wide text-white/90">{type}</p>
                <p className="text-xs md:text-sm font-light leading-relaxed mb-auto opacity-90 line-clamp-3 md:line-clamp-5">
                    {description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-4 md:mt-6 self-start md:self-end w-full">
                <Link href={`/careers/${slug}`} className="w-full md:w-auto">
                    <button className="text-[10px] md:text-sm underline underline-offset-4 font-light hover:text-white/80 transition-colors">
                        Read More
                    </button>
                </Link>
                <button onClick={onApply} className="w-full md:w-auto border border-white px-2 md:px-4 py-1.5 md:py-2 pb-2 md:pb-2.5 text-[10px] md:text-sm font-medium hover:bg-white hover:text-[#0097DC] transition-colors">
                    Apply Now
                </button>
            </div>
        </div>
        </Link>
    );
};

interface NewCardSectionProps {
    jobs: Job[];
}

export default function NewCardSection({ jobs }: NewCardSectionProps) {
    const [modalData, setModalData] = useState({ isOpen: false, jobTitle: "" });
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="relative pb-[20vh] bg-white px-6 lg:px-20 xl:px-52 pt-30">
            <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12 md:mb-0">
                <div className="w-full md:w-auto">
                    <h3 className="text-4xl md:text-6xl"><span className="font-light text-[#505153]">A Future</span></h3>
                    <h2 className="text-4xl md:text-6xl text-[#505153] font-medium mt-2">Worth Building</h2>
                </div>
            </div>

            <div className="mt-12 md:mt-16 w-full mx-auto xl:px-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {jobs.map((job, i) => (
                        <div key={i} className={`${i >= 3 && !showAll ? 'hidden md:block' : 'block'}`}>
                            <StaticJobCard
                                {...job}
                                color="#0097DC"
                                onApply={() => setModalData({ isOpen: true, jobTitle: job.title })}
                            />
                        </div>
                    ))}
                </div>

                {!showAll && jobs.length > 3 && (
                    <div className="mt-12 flex md:hidden justify-center w-full">
                        <button
                            onClick={() => setShowAll(true)}
                            className="text-[#0097DC]  transition-colors text-[15px] font-medium px-8 py-[14px] flex items-center justify-center min-w-[160px]"
                        >
                            View More
                            <ChevronDown className="w-5 h-5 ms-3" />
                        </button>
                    </div>
                )}
            </div>

            <ApplyModal
                isOpen={modalData.isOpen}
                onClose={() => setModalData({ isOpen: false, jobTitle: "" })}
                jobTitle={modalData.jobTitle}
            />
        </div>
    );
}
