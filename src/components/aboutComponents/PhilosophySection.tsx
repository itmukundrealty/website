'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PhilosophySectionProps {
    heading: React.ReactNode;
    description: React.ReactNode;
    imageSrc: string;
}

export default function PhilosophySection({ heading, description, imageSrc }: PhilosophySectionProps) {
    return (
        <section className="bg-white pt-2 pb-16 md:py-27">

            {/* Outer spacing */}
            <div
                className="
                    max-w-full
                    mx-auto
                    px-6 lg:px-20 xl:px-54
                    
                "
            >
                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-12
                        gap-y-6
                        md:gap-y-0
                        items-center
                        min-h-[260px]
                    "
                >

                    {/* Left Graphic */}
                    <div className="col-span-1 md:col-span-6 relative flex justify-center md:justify-start hidden lg:block">

                        {/* Blur Glow */}


                        {/* Logo / Shape Image */}
                        <div className="relative md:ml-8 ">
                            <Image
                                src={imageSrc}
                                alt="Philosophy Mark"
                                width={180}
                                height={120}
                                className="opacity-90 blur-sm -rotate-30"
                                priority
                            />
                        </div>
                    </div>


                    {/* Right Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
                            col-span-1
                            md:col-span-5
                            md:col-start-8
                            w-full
                            md:max-w-lg
                            text-left
                        "
                    >
                        <p
                            className="
                                text-lg
                                leading-[1.6]
                                text-[#505153]
                                mb-5
                            "
                        >
                            {heading}
                        </p>

                        <p
                            className="
                                text-lg
                                leading-[1.6]
                                font-light
                                text-[#505153]
                            "
                        >
                            {description}
                        </p>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}