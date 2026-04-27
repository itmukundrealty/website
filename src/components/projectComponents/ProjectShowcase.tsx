'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { ArrowUpRight } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Kedar',
    location: 'Airport Road, Derebail | Mangalore',
    image: '/images/kedarImage/heroMobile.png', // Replace with your actual image path
    link: '/projects/kedar',
  },
  {
    id: 2,
    title: 'Ashoka Business Center',
    location: 'Airport Road, Kapikad | Mangalore',
    image: '/images/ashokaImages/heroMobile.png', // Replace with your actual image path
    link: '/projects/ashoka',
  },
];

export default function ProjectShowcase() {
  // Reusable Card Component for DRY code
  const ProjectCard = ({ project }: { project: any }) => (
    <div className="flex flex-col h-full w-full bg-white p-6 md:p-8 group overflow-hidden border border-gray-100/50">
      <div className="relative w-full aspect-[16/11] overflow-hidden mb-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="text-[28px] md:text-[36px] font-normal text-[#505153] leading-tight mb-2">
          {project.title}
        </h3>
        <p className="text-[#0097DC] font-bold text-[14px] md:text-lg tracking-wide mb-8">
          {project.location}
        </p>
        <div className="mt-auto">
          <Link 
            href={project.link} 
            className="bg-[#0097DC] hover:bg-[#0085C0] text-white text-[15px] font-medium px-8 py-[14px] inline-flex items-center justify-center gap-3 transition-all duration-300 w-full md:w-auto"
          >
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
            Explore the project
          </Link>
        </div>
      </div>
    </div>
  );

  // Reusable Explore Card Component
  const ExploreCard = () => (
    <div className="relative flex flex-col h-full w-full bg-white p-6 md:p-8 group overflow-hidden border border-gray-100/50">
      {/* Corner Decorations */}

      {/* Top Slot - Matches ProjectCard Image Aspect Ratio */}
      <div className="relative w-full aspect-[16/11] overflow-hidden flex items-center justify-center bg-[#f8f8f8] mb-6">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#0097DC 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="relative z-10 w-24 h-24 opacity-20 blur-[0.5px]">
          <Image
            src="/icons/mukund.svg"
            alt="Abstract Shape"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Bottom Slot - Structural Spacing to match ProjectCard height */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-[28px] md:text-[36px] leading-[1.1] text-[#505153] tracking-tight font-normal mb-6">
          Explore <br /> Our Projects
        </h3>
        
        {/* Removed Invisible spacer - flex-grow + mt-auto handles alignment */}

        <div className="mt-auto">
          <Link
            href="/projects"
            className="group/btn inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#0097DC] text-white font-bold text-[15px] hover:bg-[#0085C0] transition-all duration-500 w-full md:w-auto"
          >
            Explore our Projects
            <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:rotate-45" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full mx-auto px-6 md:px-20 py-24 font-sans bg-white">
      
      {/* =========================================
          DESKTOP VIEW (Grid - No Swiper)
          ========================================= */}
      <div className="hidden md:grid grid-cols-3 gap-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <ExploreCard />
      </div>

      {/* =========================================
          MOBILE VIEW (Swiper with Line Pagination)
          ========================================= */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1.1}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          className="pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <ExploreCard />
          </SwiperSlide>
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="custom-pagination flex justify-center gap-2 mt-2"></div>
      </div>
             
    

      <style dangerouslySetInnerHTML={{
        __html: `
          .swiper-wrapper {
            display: flex !important;
          }
          .swiper-slide {
            height: auto !important;
            display: flex !important;
          }
          .custom-pagination .swiper-pagination-bullet {
            width: 32px;
            height: 2px;
            border-radius: 0;
            background-color: #e5e7eb;
            opacity: 1;
            margin: 0 !important;
            transition: all 0.3s ease;
          }
          .custom-pagination .swiper-pagination-bullet-active {
            background-color: #0097DC;
            width: 48px;
          }
        `
      }} />
      
    </div>
  );
}