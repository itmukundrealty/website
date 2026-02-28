"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroGrid() {
    return (
        <section className="pt-32 pb-12 md:pt-28 md:pb-20 w-full max-w-full mx-auto px-6 lg:px-20 xl:px-54">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-left md:text-center mb-8 md:mb-12"
            >
                <p className="text-3xl md:text-6xl text-[#505153] mb-2 font-light">
                    13+ Years of
                </p>

                <h1 className="text-3xl md:text-6xl text-[#505153] leading-tight">
                    Shaping Remarkable <br className="block md:hidden" /> Spaces
                </h1>
            </motion.div>


            {/* Image Grid (Desktop) */}
            <div
                className="
                    hidden
                    md:grid
                    grid-cols-[1fr_1.4fr_1fr]
                    gap-4
                    h-[180px]
                    md:h-[300px]
                "
            >

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="relative w-full h-full overflow-hidden "
                >
                    <Image
                        src="/images/aboutImages/heroImg/1.png"
                        alt="Hero 1"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>


                {/* Center (Wider) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative w-full h-full overflow-hidden "
                >
                    <Image
                        src="/images/aboutImages/heroImg/2.png"
                        alt="Hero 2"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>


                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="relative w-full h-full overflow-hidden "
                >
                    <Image
                        src="/images/aboutImages/heroImg/3.png"
                        alt="Hero 3"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

            </div>

            {/* Mobile Carousel */}
            <div className="block md:hidden w-[calc(100%+48px)] -mx-6 h-[250px]">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides={false}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="w-full h-full"
                >
                    <SwiperSlide className="relative w-full h-full overflow-hidden">
                        <Image
                            src="/images/aboutImages/heroImg/1.png"
                            alt="Hero 1"
                            fill
                            className="object-cover"
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full overflow-hidden">
                        <Image
                            src="/images/aboutImages/heroImg/2.png"
                            alt="Hero 2"
                            fill
                            className="object-cover"
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide className="relative w-full h-full overflow-hidden">
                        <Image
                            src="/images/aboutImages/heroImg/3.png"
                            alt="Hero 3"
                            fill
                            className="object-cover"
                            priority
                        />
                    </SwiperSlide>
                </Swiper>
            </div>

        </section>
    );
}