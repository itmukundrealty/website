'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function QuoteBanner() {
  return (
    <section className="relative w-full bg-[#009FE3] overflow-hidden">

      {/* Section Padding */}
      <div className="relative max-w-full mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-36">


        {/* Left Cloud */}
        <div
          className="
            absolute
            top-6
            left-6
            md:top-10
            md:left-12
            lg:top-16
            lg:left-20
            w-[70px]
            md:w-[110px]
            lg:w-[140px]
            opacity-90
          "
        >
          <Image
            src="/icons/mukundWhite.svg"
            alt="Decor Left"
            width={140}
            height={100}
            className="w-full h-auto blur-lg"
            priority
          />
        </div>


        {/* Right Cloud */}
        <div
          className="
            absolute
            bottom-4
            right-4
            md:bottom-8
            md:right-10
            lg:bottom-14
            lg:right-16
            w-[90px]
            md:w-[140px]
            lg:w-[180px]
            opacity-90
          "
        >
          <Image
            src="/icons/mukundWhite.svg"
            alt="Decor Right"
            width={180}
            height={120}
            className="w-full h-auto blur-lg"
            priority
          />
        </div>


        {/* Quote Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative z-10 w-fit max-w-[90%] mx-auto"
        >
          <h2
            className="
              text-white
              font-light
              leading-[1.25]

              text-2xl
              sm:text-3xl
              md:text-6xl
              lg:text-6xl
              xl:text-8xl
              text-left
            "
          >
            “That’s what makes our work matter… <br />

            spaces shaped by individuals <br />

            <span className="font-medium">
              who take responsibility, together.
            </span>”
          </h2>
        </motion.div>


      </div>
    </section>
  );
}