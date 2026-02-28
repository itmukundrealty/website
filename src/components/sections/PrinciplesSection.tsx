"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";


const slides = [
  {
    id: 1,
    title: "Foundations of Trust",
    desc: "At Mukund, integrity means complete transparency and staying true to our word, ensuring every development reflects the trust placed in us.",
    image:
      "/images/LandingPageImg/defining/1.png",
    link: "About Mukund Realty",
  },
  {
    id: 2,
    title: "Holistic Planning",
    desc: "From concept to completion, we apply meticulous attention to detail to ensure every element is executed with accuracy and care.",
    image:
      "/images/LandingPageImg/defining/2.png",
    link: "View our Projects",
  },
  {
    id: 3,
    title: "Design with Purpose",
    desc: "Each Mukund development is shaped by clear intent, prioritizing functional design that serves real needs and stands the test of time.",
    image:
      "/images/LandingPageImg/defining/3.png",
    link: "Explore our insights page",
  },
];

export default function PrinciplesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  const isStart = activeIndex === 0;
  const isEnd = activeIndex === slides.length - 1;

  return (
    <section className="w-full bg-white relative py-12 lg:py-0">
      <h1 className="text-4xl lg:text-6xl font-light mb-6 lg:mb-8 text-center text-[#505153]">Our <span className="text-[#505153] font-medium">Defining Principles</span></h1>


      <div className="max-w-full mx-auto flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0">


        {/* LEFT PANEL */}
        <div className="w-full lg:w-[40%] pt-10 lg:pt-[120px] px-6 lg:pl-[80px] lg:pr-[40px] text-center lg:text-left">

          <h2 className="text-lg text-[#505153] font-semibold mb-2">
            What we live by.
          </h2>

          <p className="text-[17px] leading-[1.7] font-light text-[#505153] max-w-full lg:max-w-xs mx-auto lg:mx-0">
            Every project reflects our core standards,
            focusing on purposeful design that serves
            people, businesses and futures long-term.
          </p>
        </div>

        {/* RIGHT SLIDER */}
        <div className="w-full lg:w-[60%] relative pt-0 lg:pt-[80px]">

          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              }
            }}
            onSwiper={(s) => setSwiper(s)}
            onSlideChange={(s) => setActiveIndex(s.activeIndex)}
            className="pb-[80px] lg:pb-[120px]"
          >
            {slides.map((item, i) => (
              <SwiperSlide key={i}>
                <SlideCard data={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Bottom Gradient */}
          {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-white to-transparent z-10" /> */}

          {/* Progress Line & Navigation */}
          <div className="mt-8 lg:mt-12 flex items-center gap-8 relative z-20 px-6 lg:px-[40px]">
            {/* Progress Bar Track */}
            <div className="h-[1px] bg-gray-200 flex-1 relative">
              <div
                className="h-full bg-[#0097DC] transition-all duration-500 absolute top-0 left-0"
                style={{
                  width: `${((activeIndex + 1) / slides.length) * 100}%`,
                }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => swiper?.slidePrev()}
                disabled={isStart}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition
                ${isStart
                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                    : "border-[#0097DC] text-[#0097DC] hover:bg-[#0097DC]/10"
                  }
              `}
              >
                <ChevronLeft size={22} />
              </button>

              <button
                onClick={() => swiper?.slideNext()}
                disabled={isEnd}
                className={`w-12 h-12 rounded-full border flex items-center justify-center transition
                ${isEnd
                    ? "border-gray-300 text-gray-300 cursor-not-allowed"
                    : "border-[#0097DC] text-[#0097DC] hover:bg-[#0097DC]/10"
                  }
              `}
              >
                <ChevronRight size={22} />
              </button>
            </div>


          </div>
        </div>
      </div>
      <div className="absolute -bottom-20 -left-40 pointer-events-none z-0 hidden lg:block">
        <Image
          src="/icons/mukund.svg"
          alt="Mukund Abstract Shape"
          width={250}
          height={250}
          className=" object-contain blur-lg -rotate-45"
        />
      </div>
      <div className="absolute -top-30 right-0 pointer-events-none z-0">
        <Image
          src="/icons/mukund.svg"
          alt="Mukund Abstract Shape"
          width={150}
          height={150}
          className=" object-contain blur-sm "
        />
      </div>
    </section>
  );
}

/* ------------------------------------------------------- */

function SlideCard({ data }: { data: any }) {
  return (
    <div className="relative h-[50vh] lg:h-[70vh] overflow-hidden">

      {/* Image */}
      <Image
        src={data.image}
        alt={data.title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-white to-transparent z-10" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 px-6 py-5 lg:px-12 lg:py-5 max-w-full lg:max-w-3xl z-20">

        <h3 className="text-[24px] lg:text-[34px] text-[#505153] font-medium mb-2">
          {data.title}
        </h3>

        <p className="text-[14px] lg:text-[17px] text-[#505153] font-light leading-[1.6] mb-5 hidden lg:block">
          {data.desc}
        </p>

        <button className="flex items-center gap-2 text-[#0097DC] font-medium group text-sm lg:text-base">
          <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:rotate-45  transition-all duration-300" />
          <span className="">
            {data.link}
          </span>
        </button>
      </div>
    </div>
  );
}