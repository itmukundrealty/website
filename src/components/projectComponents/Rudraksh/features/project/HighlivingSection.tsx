"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface HighlivingSectionProps {
  heading: string;
  description: string;
  imageSrc: string | string[];
  videoSrc: string | string[];
  projectLink?: string;
  video?: boolean;
  btnAccentColor?: string;
}

const VideoItem = ({ image, video, isActive }: { image: string, video: string, isActive: boolean }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isActive && isPlaying) {
      setIsPlaying(false);
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isActive, isPlaying]);

  return (
    <div className="relative w-full h-full bg-gray-100">
      {!isPlaying ? (
        <>
          <Image src={image} alt="Thumbnail" fill className="object-cover cursor-pointer" onClick={() => setIsPlaying(true)} priority />
          {/* Play Button Overlay */}
          <div
            onClick={() => setIsPlaying(true)}
            className="absolute inset-0 flex items-center justify-center bg-black/10 hover:bg-black/20 transition-colors cursor-pointer"
          >
            <div className="w-20 h-20 rounded-full backdrop-blur-sm flex items-center justify-center ">
              <svg width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  opacity="0.5"
                  d="M74.8802 0C33.5887 0 0 33.592 0 74.8802C0 116.168 33.5887 149.76 74.8802 149.76C116.172 149.76 149.76 116.168 149.76 74.8802C149.76 33.592 116.172 0 74.8802 0ZM104.648 77.5036L60.9683 105.584C60.4564 105.916 59.8652 106.08 59.2802 106.08C58.7684 106.08 58.2504 105.952 57.7873 105.7C56.7817 105.151 56.1601 104.103 56.1601 102.96V46.8001C56.1601 45.6576 56.7817 44.6093 57.7873 44.0608C58.7745 43.5186 60.0115 43.5519 60.9683 44.1767L104.648 72.2568C105.538 72.8295 106.08 73.8199 106.08 74.8802C106.08 75.9405 105.538 76.9306 104.648 77.5036Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </>
      ) : (
        <video ref={videoRef} src={video} controls autoPlay className="w-full h-full object-cover" onEnded={() => setIsPlaying(false)} />
      )}
    </div>
  );
};

export default function HighlivingSection({
  heading,
  description,
  imageSrc,
  videoSrc,
  projectLink = "/project-enquire",
  video = true,
  btnAccentColor = "#0097DC"
}: HighlivingSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const pathname = usePathname();
  const currentPath = pathname?.split("/")[1] || "";

  const projectMapping: Record<string, string> = {
    rudraksh: "rudraksh",
    "mathura-residency": "mathura",
    "ajanta-business-center": "ajanta",
    "ashoka-business-center": "ashoka",
    "bhargavi-gloria-residency": "bhargavi",
    "evanna-homes": "evanna",
    gokuldham: "gokuldham",
    kailash: "kailash",
    kedar: "kedar",
    "kudva-grandeur": "kudva",
    "madhuban-apartments": "madhuban",
    "mukund-sadan": "mukund-sadhan",
    "nandadeep-apartments": "nandadeep",
    "nandagokul-apartments": "nandagokul",
  };

  const projectKey = projectMapping[currentPath];
  const finalLink = projectLink === "/project-enquire" && projectKey ? `/project-enquire?project=${projectKey}` : projectLink;

  const videos = Array.isArray(videoSrc) ? videoSrc : [videoSrc];
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && sectionRef.current) {
            const videoElements = sectionRef.current.querySelectorAll("video");
            videoElements.forEach((v) => v.pause());
          }
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="md:pt-24 md:pb-18 py-14 bg-white font-sans">
      <div className="mx-auto px-6 lg:px-20 xl:px-54 flex flex-col md:block">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6 md:mb-18 order-1 md:order-none">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl text-[#1E1E1E] md:text-5xl lg:text-6xl  font-light leading-tight"
          >
            {heading}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="hidden md:flex w-full md:w-fit"
          >
            <Link
              href={finalLink}
              className="group flex items-center justify-center md:justify-start gap-2 px-6 py-5 lg:px-4 lg:py-5 text-white transition-colors uppercase tracking-widest text-[16px] md:text-sm font-bold w-full"
              style={{ backgroundColor: btnAccentColor }}
            >
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
              Enquire Now
            </Link>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className={`max-w-full ${video ? "mb-8 md:mb-12" : "mb-0"} order-3 md:order-none`}
        >
          <p className="text-lg text-[#505153] font-light ">{description}</p>
        </motion.div>

        {/* Video/Image Container */}
        {video && (
          <div className="order-2 md:order-none mb-8 md:mb-0">
            {/* Video wrapper — no overflow hidden so pagination sits outside */}
            <div className="relative w-full aspect-video md:aspect-21/9 overflow-hidden bg-gray-100 group">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={false}
                pagination={videos.length > 1 ? { clickable: true, el: '.highliving-pagination' } : false}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-full"
              >
                {videos.map((vid, idx) => (
                  <SwiperSlide key={idx} className="w-full h-full">
                    <VideoItem image={images[idx] || images[0]} video={vid} isActive={activeIndex === idx} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Pagination rendered outside the video div */}
            {videos.length > 1 && (
              <div className="highliving-pagination flex justify-center mt-16" />
            )}
          </div>
        )}

        {/* Mobile Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="w-full order-4 md:hidden"
        >
          <Link
            href={finalLink}
            className="group flex items-center justify-center gap-2 px-6 py-4 text-white transition-colors uppercase tracking-widest text-[14px] font-bold w-full"
            style={{ backgroundColor: btnAccentColor }}
          >
            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
            Enquire Now
          </Link>
        </motion.div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .highliving-pagination {
          display: flex !important;
          justify-content: center !important;
          width: 100% !important;
        }
        .highliving-pagination .swiper-pagination-bullet {
          width: 50px;
          height: 2px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 0;
          opacity: 1;
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          margin: 0 8px !important;
          cursor: pointer;
          position: relative;
        }
        .highliving-pagination .swiper-pagination-bullet::after {
          content: "";
          position: absolute;
          top: -15px;
          bottom: -15px;
          left: 0;
          right: 0;
        }
        .highliving-pagination .swiper-pagination-bullet-active {
          background: #1E1E1E;
          width: 80px;
        }
      `}} />
    </section>
  );
}