"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        <section className="w-full  bg-white px-6 md:px-12 md:px-20 xl:px-54 py-16 md:py-24 ">
            <div className="mx-auto max-w-full">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col justify-start">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-[#505153]  ">
                            <span className="font-normal block">Frequently Asked</span>
                            <span className="font-normal block">Questions</span>
                        </h2>
                        <p className="mt-6 max-w-sm text-md md:text-lg leading-relaxed font-light text-[#505153]">
                            Got questions? We&apos;ve got answers no jargon, just direct clarity
                        </p>
                    </div>

                    {/* RIGHT SIDE - Accordion */}
                    <div className="w-full">
                        <div className="divide-y divide-[#d4d4d4]">
                            <AnimatePresence initial={false}>
                                {visibleFaqs.map((faq, index) => (
                                    <motion.div
                                        key={faq.question}
                                        initial={showAll && index >= 4 ? { opacity: 0, height: 0 } : false}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                                        className="py-5 first:pt-0 overflow-hidden"
                                    >
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="flex w-full items-center justify-between text-left group"
                                        >
                                            <span className="text-lg font-medium text-[#505153] group-hover:text-[#2b2b2b] transition-colors duration-300">
                                                {faq.question}
                                            </span>
                                            <span className="ml-4 text-[#7a7a7a]">
                                                <motion.div
                                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <ChevronDown size={20} className={openIndex === index ? "text-[#0097DC]" : ""} />
                                                </motion.div>
                                            </span>
                                        </button>
                                        <AnimatePresence>
                                            {openIndex === index && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-3 text-lg leading-relaxed font-light text-[#505153]">
                                                        {faq.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {faqData.length > 4 && (
                            <motion.div 
                                layout
                                className="mt-8 flex justify-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setShowAll(!showAll)}
                                    className="border-b border-[#2b2b2b] pb-[1px] text-[14px] font-medium text-[#2b2b2b] hover:text-[#0097DC] hover:border-[#0097DC] transition-colors duration-300 ease-in-out cursor-pointer"
                                >
                                    {showAll ? "View Less" : "View More"}
                                </motion.button>
                            </motion.div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
