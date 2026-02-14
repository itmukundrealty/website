"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FaqSectionProps {
    faqData: FAQItem[];
}

export default function FaqSection({ faqData }: FaqSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);
    const [showAll, setShowAll] = useState(false);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const visibleFaqs = showAll ? faqData : faqData.slice(0, 4);

    return (
        <section className="w-full  bg-white px-6 md:px-12 lg:px-20 xl:px-54 py-16 md:py-24 ">
            <div className="mx-auto max-w-full">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-start">
                        <h2 className="text-4xl lg:text-6xl leading-[1.1] text-[#505153]  ">
                            <span className="font-normal block">Frequently Asked</span>
                            <span className="font-normal block">Questions</span>
                        </h2>
                        <p className="mt-6 max-w-[280px] text-lg leading-relaxed font-thin text-[#505153]">
                            Got questions? We&apos;ve got answers no jargon, just direct clarity
                        </p>
                    </div>

                    {/* RIGHT SIDE - Accordion */}
                    <div className="w-full">
                        <div className="divide-y divide-[#d4d4d4]">
                            {visibleFaqs.map((faq, index) => (
                                <div key={index} className="py-5 first:pt-0">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="flex w-full items-center justify-between text-left group"
                                    >
                                        <span className="text-lg font-medium text-[#505153] group-hover:text-[#2b2b2b]">
                                            {faq.question}
                                        </span>
                                        <span className="ml-4 text-[#7a7a7a]">
                                            {openIndex === index ? (
                                                <ChevronUp size={20} color="#1e88c8" />
                                            ) : (
                                                <ChevronDown size={20} />
                                            )}
                                        </span>
                                    </button>
                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <p className="pt-3 text-lg leading-relaxed font-thin text-[#505153]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="border-b border-[#2b2b2b] pb-[1px] text-[14px] font-medium text-[#2b2b2b] hover:opacity-70"
                            >
                                {showAll ? "View Less" : "View More"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
