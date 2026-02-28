"use client";

import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import { Job } from "@/data/jobs";
import ApplyModal from "./ApplyModal";

interface JobCardProps {
    title: string;
    type: string;
    description: string;
    color: string;
    slug: string;
    i: number;
    progress: MotionValue<number>;
    range: number[];
    targetScale: number;
    onApply: () => void;
}

const JobCard = ({ title, type, description, color, slug, i, progress, range, targetScale, onApply }: JobCardProps) => {
    const container = useRef(null);
    const scale = useTransform(progress, range, [1, targetScale]);
    // transform backward -5 when it reaches the pinned point
    const rotateX = useTransform(progress, range, [0, -5]);

    return (
        <div ref={container} className="h-[90vh] flex items-center justify-center sticky top-0 [perspective:1000px] px-0 md:px-0 pointer-events-none">
            <motion.div
                style={{
                    scale,
                    rotateX,
                    top: `calc(10vh + ${i * 80}px)`, // increased top offset so the titles of previous cards stay visible when stacked
                    backgroundColor: color,
                }}
                className="relative h-[450px] md:h-[70vh] w-full max-w-full mx-auto overflow-hidden origin-top text-white pointer-events-auto"
            >
                <div className="flex flex-col justify-between h-full p-8 md:p-12 lg:p-16">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-medium mb-1 md:mb-2 tracking-tight leading-tight">{title}</h2>
                        <p className="text-base md:text-lg font-normal mb-6 md:mb-8 tracking-wide text-white/90">{type}</p>

                        <p className="text-sm md:text-base font-light leading-relaxed mb-auto opacity-90 max-w-4xl">
                            {description}
                        </p>
                    </div>

                    <div className="flex items-center gap-6 mt-auto self-end">
                        <Link href={`/careers/${slug}`}>
                            <button className="text-sm md:text-base underline underline-offset-4 font-light hover:text-white/80 transition-colors">
                                Read More
                            </button>
                        </Link>
                        <button onClick={onApply} className="border border-white px-6 py-2 pb-2.5 text-sm md:text-base font-medium hover:bg-white hover:text-[#0097DC] transition-colors">
                            Apply Now
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

// import { jobs } from "@/data/jobs";

interface CareerOpportunitiesProps {
    jobs: Job[];
}

export default function CareerOpportunities({ jobs }: CareerOpportunitiesProps) {
    const container = useRef(null);
    const [modalData, setModalData] = useState({ isOpen: false, jobTitle: "" });
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <div ref={container} className="relative pb-[20vh] bg-white px-6 lg:px-20 xl:px-52 pt-30">

            <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-0 mb-12 md:mb-0">
                <div className="w-full md:w-auto">
                    <h3 className="text-4xl md:text-6xl"><span className="font-light text-[#505153]">A Future</span></h3>
                    <h2 className="text-4xl md:text-6xl text-[#505153] font-medium mt-2">Worth Building</h2>
                </div>
            </div>

            {jobs.map((job, i) => {
                const targetScale = 1 - ((jobs.length - i) * 0.04);
                return (
                    <JobCard
                        key={i}
                        i={i}
                        {...job}
                        progress={scrollYProgress}
                        range={[i * 0.33, 1]}
                        targetScale={targetScale}
                        onApply={() => setModalData({ isOpen: true, jobTitle: job.title })}
                    />
                );
            })}

            <ApplyModal
                isOpen={modalData.isOpen}
                onClose={() => setModalData({ isOpen: false, jobTitle: "" })}
                jobTitle={modalData.jobTitle}
            />
        </div>
    );
}