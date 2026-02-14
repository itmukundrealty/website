'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhilosophySection() {
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
                                src="/icons/mukund.svg"
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
                            <span className="font-medium">At Mukund Realty, we build with responsibility,
                                integrity, and long term intent, guiding every
                                decision from planning through execution.</span> <span className="font-thin">We
                            believe real estate is about shaping environments
                            that serve people, businesses, and communities
                            with purpose.</span>
                        </p>

                        <p
                            className="
                                text-lg
                                leading-[1.6]
                                font-thin
                                text-[#505153]
                            "
                        >
                            Through disciplined processes, collaborative
                            teams, and a focus on function and transparency,
                            we deliver spaces that perform reliably and create
                            lasting value.
                        </p>
                    </motion.div>

                </div>
            </div>

        </section>
    );
}