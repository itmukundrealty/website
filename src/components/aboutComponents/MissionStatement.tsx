'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MissionStatementProps {
    text: React.ReactNode;
    imageSrc: string;
}

export default function MissionStatement({ text, imageSrc }: MissionStatementProps) {
    return (
        <section className="relative pt-14 pb-6 md:py-28 overflow-hidden bg-white">

            {/* Main Container */}
            <div className="relative max-w-full mx-auto px-6 lg:px-20 xl:px-54">

                {/* Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-[60vw] md:w-1/2"
                >
                    <h2
                        className="
                            text-2xl
                            md:text-4xl
                            lg:text-5xl
                            leading-[1.3]
                            font-thin
                            text-[#505153]
                        "
                    >
                        {text}
                    </h2>
                </motion.div>
            </div>


            {/* Right SVG (Absolute) */}
            <div
                className="
                    absolute
                    right-0
                    top-[60%] md:top-1/2
                    -translate-y-1/2
                    w-[100px]
                    md:w-[320px]
                    lg:w-[400px]
                    opacity-100
                    pointer-events-none
                "
            >
                <Image
                    src={imageSrc}
                    alt="Mission Graphic"
                    width={400}
                    height={400}
                    className="w-full h-auto object-contain -rotate-20 blur-lg"
                    priority
                />
            </div>

        </section>
    );
}