"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";


const slides = [
  {
    id: 1,
    title: "Foundations of Trust",
    desc: "At Mukund, integrity means complete transparency and staying true to our word, ensuring every development reflects the trust placed in us.",
    image:
      "/images/LandingPageImg/defining/1.png",
    link: "About Mukund Realty",
  },
  // {
  //   id: 2,
  //   title: "Quality Commitment",
  //   desc: "Every project reflects our core standards, focusing on purposeful design that serves people, businesses and futures long-term.",
  //   image:
  //     "/images/LandingPageImg/defining/2.png",
  //   link: "View Projects",
  // },
  // {
  //   id: 3,
  //   title: "Customer First",
  //   desc: "We build spaces that adapt to lifestyles and deliver comfort through innovation and care.",
  //   image:
  //     "/images/LandingPageImg/defining/3.png",
  //   link: "Learn More",
  // },
];

export default function PrinciplesSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  const isStart = activeIndex === 0;
  const isEnd = activeIndex === slides.length - 1;

  return (
    <section className="w-full bg-white relative py-12 lg:py-0">
      <h1 className="text-4xl lg:text-6xl  mb-6 lg:mb-8 text-center text-[#505153]"><span className="font-thin">Our</span> <span className="font-medium">Defining Principles</span></h1>


      <div className="max-w-full mx-auto flex flex-col lg:flex-row lg:space-x-12 space-y-10 lg:space-y-0">


        {/* LEFT PANEL */}
        <div className="w-full lg:w-[40%] xl:w-[60%] pt-10 lg:pt-[120px] px-6 lg:pl-[80px] xl:pl-[200px] lg:pr-[40px] text-left">

          <h2 className="text-lg text-[#505153] font-semibold mb-2">
            What we live by.
          </h2>

          <p className=" leading-[1.7] text-lg lg:text-lg font-light text-[#505153]/90 max-w-full lg:max-w-xs mx-auto lg:mx-0">
            Every project reflects our core standards,
            focusing on purposeful design that serves
            people, businesses and futures long-term.
          </p>
        </div>

        {/* RIGHT SLIDER (COMMENTED OUT) */}
        {/* <div className="w-full lg:w-[80%]  xl:w-[100%] relative pt-0 lg:pt-[80px]">

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            breakpoints={{
                0: {
                slidesPerView: 1.11,
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

          <div className="mt-8 lg:mt-12 flex items-center gap-8 relative z-20 px-6 lg:px-[40px]">
          </div>
        </div> */}

        {/* RIGHT SLIDER (New Implementation) */}
        <div className="w-full lg:w-[80%] xl:w-[100%] relative pt-0 lg:pt-[80px] px-6 lg:pr-20 xl:pr-52">
          <div className="relative w-full h-[50vh] lg:h-[70vh] xl:h-[50vh] overflow-hidden ">
            <Image
              src="/images/LandingPageImg/defining/1.png"
              alt="Foundations of Trust"
              fill
              className="object-cover "
              priority
            />

            {/* Overlay */}
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-white to-transparent z-10" />

            {/* Content */}
            <div className="absolute  bottom-0 lg:bottom-10 left-0 px-6 py-5 lg:px-12 lg:py-5 max-w-full lg:max-w-4xl z-20">
              <h3 className="text-[24px] lg:text-[34px] text-[#505153] font-medium mb-2">
                Foundations of Trust
              </h3>
              <p className="text-[16px] lg:text-[20px] text-[#505153] font-light mb-2">At Mukund, integrity means complete transparency and staying true to our word.</p>
              <button className="flex items-center gap-2 text-[#0097DC] font-semibold group text-sm lg:text-base">
                <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:rotate-45 transition-all duration-300" />
                <span className="">
                  About Mukund Realty
                </span>
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
    <div className="relative h-[50vh] lg:h-[70vh] xl:h-[50vh] overflow-hidden">

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

        {/* <p className="text-[14px] lg:text-[17px] text-[#505153] font-light leading-[1.6] mb-5 hidden lg:block">
          {data.desc}
        </p> */}

        <button  className="flex items-center gap-2 text-[#0097DC] font-medium group text-sm lg:text-base">
          <ArrowUpRight className="w-5 h-5 lg:w-6 lg:h-6 transition-transform group-hover:rotate-45  transition-all duration-300" />
          <Link href="/about" className="">
            {data.link}
          </Link>
        </button>
      </div>
    </div>
  );
}
