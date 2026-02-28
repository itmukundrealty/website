"use client";
import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { Play } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// --- Data ---
// --- Data ---
const testimonials = [
    {
        id: 1,
        thumbnail: "",
        videoUrl: "#", // Placeholder
        iframeSrc: "https://www.youtube.com/embed/R9MQVfJkNfI",
        name: "Dr. Prajwal K Rao & Dr. Shruthi J's",
        role: "Proud Owner at Kailash High Living Luxury Apartments"
    },
    {
        id: 2,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/DOoumWd6iJw",
        name: "Dr.Devadas Kapikad",
        role: "Residents at Mukund Villas"
    },
    {
        id: 3,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/i1FvfPn_AyY",
        name: "Harish Sherigar",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 4,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/0Kr2E7fPxcY",
        name: "Mr.Nagraj Nayak",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 5,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/OaiUlvvu1pU",
        name: "Dinesh Kumar",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 6,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/mwlgn3Cuq68",
        name: "Mr.Jaggannath Bhandary",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 7,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/DOoumWd6iJw",
        name: "Dr Prashanth Bhat",
        role: "Residents at Mukund Villas"
    },
    {
        id: 8,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/FPvLjrtQZUI",
        name: "Mr. Vasuki Ganapati Shanbhag",
        role: "Residents at Mukund Villas"
    },
    {
        id: 9,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/6tDa2MZunhY?si=tRelWm7-61QH0l__",
        name: "Subhashini",
        role: "Investor in Mukund Commercial Spaces"
    },
    {
        id: 10,
        thumbnail: "",
        videoUrl: "#",
        iframeSrc: "https://www.youtube.com/embed/i1FvfPn_AyY",
        name: "Ajay Shenava & Anusha Shenava",
        role: "Residents at Mukund Villas"
    },

];

export default function ExperienceStandardSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [swiperRef, setSwiperRef] = useState<any>(null);

    const paginationDots = (
        <div className="flex gap-2 flex-wrap justify-center lg:justify-start">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => swiperRef?.slideTo(index)}
                    className={`h-[2px] transition-all duration-300 ${activeIndex === index ? 'w-[20px] md:w-[40px] bg-[#3DADFF]' : 'w-[20px] md:w-[40px] bg-[#e5e7eb]'
                        }`}
                    aria-label={`Go to slide ${index + 1}`}
                />
            ))}
        </div>
    );

    return (
        <section className="lg:py-24 bg-white relative overflow-hidden font-sans ">
            {/* --- Background SVG Lines --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Top center dots */}
                <div className="absolute top-10 left-1/3 -translate-x-1/3 grid grid-cols-12 gap-4 opacity-20">
                    {Array.from({ length: 36 }).map((_, i) => (
                        <div key={i} className="w-1 h-1 bg-gray-300 rounded-full" />
                    ))}
                </div>

                {/* Right side curve lines - Specific SVG provided by user */}
                <svg className="absolute top-1/2 -right-1 -translate-y-1/2 lg:h-[100%] h-[100%] lg:w-auto w-[80%] text-gray-200/60 pointer-events-none z-0" viewBox="0 0 1140 710" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M530.434 1423.73C430.299 1423.73 336.993 1369.86 286.93 1283.15L38.5509 852.959C-11.5114 766.249 -11.5225 658.507 38.5509 571.786L286.919 141.592C336.993 54.8714 430.299 1 530.434 1H1027.17C1127.31 1 1220.62 54.8714 1270.69 141.603L1519.05 571.775C1569.13 658.495 1569.13 766.238 1519.05 852.959L1270.69 1283.14C1220.62 1369.86 1127.31 1423.73 1027.17 1423.73H530.434Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M530.435 1318.09C467.923 1318.09 409.677 1284.46 378.415 1230.33L130.047 800.143C98.7971 746.005 98.786 678.752 130.047 624.603L378.415 194.42C409.677 140.282 467.923 106.645 530.435 106.645H1027.17C1089.68 106.645 1147.94 140.282 1179.19 194.42L1427.56 624.603C1458.82 678.741 1458.82 746.005 1427.56 800.143L1179.19 1230.33C1147.94 1284.46 1089.68 1318.09 1027.17 1318.09H530.435Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M1076 226.979L1347.76 697.674C1353.01 706.769 1353.01 717.974 1347.76 727.069L1076 1197.76C1070.75 1206.86 1061.05 1212.46 1050.55 1212.46H507.035C496.53 1212.46 486.835 1206.86 481.582 1197.76L209.826 727.069C204.574 717.974 204.574 706.769 209.826 697.674L481.582 226.979C486.835 217.884 496.53 212.287 507.035 212.287H1050.55C1061.05 212.287 1070.75 217.884 1076 226.979Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M551.067 1106.8L323.344 712.367L551.067 317.932H1006.53L1234.26 712.367L1006.53 1106.8H551.067Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M612.058 1001.16L445.324 712.367L612.058 423.576H945.537L1112.27 712.367L945.537 1001.16H612.058Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M531.212 1424.51C431.077 1424.51 337.771 1370.64 287.708 1283.93L39.34 853.737C-10.7224 767.027 -10.7335 659.285 39.34 572.564L287.708 142.381C337.771 55.6605 431.077 1.78906 531.212 1.78906H1027.95C1128.08 1.78906 1221.4 55.6605 1271.46 142.392L1519.83 572.564C1569.91 659.285 1569.91 767.027 1519.83 853.748L1271.46 1283.93C1221.4 1370.65 1128.08 1424.52 1027.95 1424.52H531.212V1424.51Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M531.212 1318.88C468.701 1318.88 410.454 1285.25 379.193 1231.11L130.825 800.93C99.5745 746.792 99.5634 679.539 130.825 625.39L379.193 195.207C410.454 141.069 468.701 107.432 531.212 107.432H1027.95C1090.46 107.432 1148.72 141.069 1179.97 195.207L1428.34 625.39C1459.6 679.528 1459.6 746.792 1428.34 800.93L1179.97 1231.11C1148.72 1285.25 1090.46 1318.88 1027.95 1318.88H531.212Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M1076.79 227.768L1348.54 698.463C1353.8 707.558 1353.8 718.763 1348.54 727.859L1076.79 1198.55C1071.54 1207.65 1061.84 1213.25 1051.34 1213.25H507.824C497.319 1213.25 487.624 1207.65 482.371 1198.55L210.615 727.859C205.363 718.763 205.363 707.558 210.615 698.463L482.371 227.768C487.624 218.673 497.319 213.076 507.824 213.076H1051.34C1061.84 213.076 1071.54 218.673 1076.79 227.768Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M551.856 1107.59L324.121 713.155L551.856 318.709H1007.31L1235.04 713.144L1007.31 1107.59H551.856Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                    <path d="M612.847 1001.95L446.113 713.156L612.847 424.354H946.314L1113.06 713.145L946.326 1001.95H612.847Z" stroke="currentColor" strokeWidth="1" strokeMiterlimit="10" />
                </svg>
                {/* Bottom linear gradient */}
                <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-white to-transparent z-10"></div>

                {/* Blue Feature Shape (Bottom Right) */}

            </div>


            <div className=" mx-auto px-6 lg:px-20 xl:px-54 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* --- Left Content (Title & Pagination) --- */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-light text-[#505153] mb-2">
                                Experiences that
                            </h2>
                            <h2 className="text-4xl md:text-6xl font-medium text-[#505153] leading-tight ">
                                Set the Standard
                            </h2>
                        </div>

                        <p className="text-lg lg:text-lg font-light text-[#505153]/90  max-w-sm">
                            Testimonials from those who appreciate the uncompromising Mukund standard.
                        </p>

                        {/* DESKTOP PAGINATION: Hidden on mobile, visible on LG */}
                        <div className="hidden lg:block pt-4 cursor-pointer">
                            {paginationDots}
                        </div>
                    </div>

                    {/* --- Right Content (Swiper) --- */}
                    <div className="lg:col-span-7 relative pl-0 lg:pl-10">

                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            spaceBetween={30}
                            slidesPerView={1}
                            effect={'fade'}
                            fadeEffect={{ crossFade: true }}
                            onSwiper={setSwiperRef}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                            className="w-full !overflow-visible"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col gap-6">
                                        {/* Video/Image Container - NOW IFRAME */}
                                        <div className="relative h-[30vh] md:h-[40vh] lg:h-[55vh] w-full overflow-hidden bg-gray-100 group">
                                            <iframe
                                                src={item.iframeSrc}
                                                title={item.name}
                                                className="w-full h-full object-cover border-0"
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="text-left space-y-1 relative pl-2">
                                            <h3 className="text-xl md:text-3xl text-[#505153] font-light">
                                                {item.name}
                                            </h3>
                                            <p className="text-[#0097DC] font-medium text-sm md:text-base">
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* MOBILE PAGINATION: Visible on mobile, hidden on LG */}
                        <div className="flex lg:hidden pt-4 justify-center cursor-pointer">
                            {paginationDots}
                        </div>

                    </div>


                </div>
            </div>
            
        </section>
    );
}