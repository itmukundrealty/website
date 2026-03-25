"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowUpRight, X } from "lucide-react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";

import { Icons } from "./FeatureIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type FeatureItem = {
  icon: keyof typeof Icons;
  label: string;
};

interface FeaturesSectionProps {
  features: FeatureItem[];
  heading: string;
  variant?: "center" | "left";
  completed?: boolean;
  galleryImages?: string[];
  projectLink?: string;
  btnType?: "explore" | "know";
  modalTitle?: string;
  modalPoints?: string[];
}

export default function FeaturesSection({
  features,
  heading,
  variant = "center",
  completed = true,
  galleryImages,
  projectLink = "/project-enquire",
  btnType = "explore",
  modalTitle,
  modalPoints,
}: FeaturesSectionProps) {
  const pathname = usePathname();
  const currentProject = pathname?.split('/')[1] || '';
  const validProjects = [
    "rudraksh", "mathura-residency", "ajanta-business-center", "evanna-homes", 
    "kudva-grandeur", "madhuban-apartments", "nandagokul-apartments", 
    "nandadeep-apartments", "bhargavi-gloria-residency", "gokuldham", 
    "mukund-sadan", "kailash", "ashoka-business-center", "kedar"
  ];
  const finalLink = projectLink === "/project-enquire" && validProjects.includes(currentProject) ? `/project-enquire?project=${currentProject}` : projectLink;

  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchedGalleryImages, setFetchedGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    if (isModalOpen) {
      // Lock background scroll without stopping Lenis entirely
      // (stopping Lenis also kills the modal's internal scroll)
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  useEffect(() => {
    const fetchImages = async () => {
      if (!currentProject) return;
      try {
        const docRef = doc(db, "projectFeatures", currentProject);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().galleryImages && docSnap.data().galleryImages.length > 0) {
          setFetchedGalleryImages(docSnap.data().galleryImages);
        }
      } catch (error) {
        console.error("Error fetching project feature images:", error);
      }
    };
    
    fetchImages();
  }, [currentProject]);

  const GALLERY_IMAGES = fetchedGalleryImages.length > 0 ? fetchedGalleryImages : (galleryImages || []);

  return (
    <section className="py-10 lg:py-32 bg-white font-host">
      <div className=" mx-auto px-6 lg:px-20 xl:px-54 ">
        {/* Header */}
        {variant === "center" ? (
          <h2 className="text-4xl md:text-5xl lg:text-[68px] text-[#424244] font-light lg:text-center text-start  mb-16 lg:mb-28 tracking-tight leading-tight">
            {heading}
          </h2>
        ) : (
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16 lg:mb-28">
            <h2 className="text-4xl md:text-5xl lg:text-[68px] text-[#424244] font-light tracking-tight leading-tight">{heading}</h2>
            {btnType === "explore" ? (
              <Link
                href={finalLink}
                className="group flex items-center justify-center md:justify-start gap-2 px-6 py-5 lg:px-4 lg:py-5 border border-[#0097DC] text-[#0097DC] hover:bg-[#0097DC]/10 transition-colors uppercase tracking-wide font-bold shrink-0 w-full md:w-fit text-[14px]"
              >
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                Explore Now
              </Link>
            ) : (
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center md:justify-start gap-2 px-6 py-5 lg:px-6 lg:py-5 border border-black text-black hover:bg-black/10 transition-colors uppercase tracking-wide font-bold shrink-0 w-full md:w-fit text-[14px]"
              >
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-all duration-300" />
                Know More
              </button>
            )}
          </div>
        )}

        {/* Features Grid */}
        <div className={`grid grid-cols-1  md:grid-cols-4  gap-x-6 gap-y-10 lg:gap-x-12 xl:gap-x-20 lg:gap-y-10 mb-12 ${completed ? "lg:mb-2" : "lg:mb-32"}`}>
          {features.map((item, index) => {
            const Icon = Icons[item.icon];
            // Show all items on medium/large screens (md+).
            // On mobile, show only the first 3 items unless expanded.
            const isHiddenOnMobile = !isExpanded && index > 2;

            return (
              <div
                key={index}
                className={`group flex flex-row items-center gap-4 lg:gap-5 transition-all duration-300 ${isHiddenOnMobile ? "hidden md:flex" : "flex"
                  }`}
              >
                {/* Icon Wrapper */}
                <div className="w-10 h-10 flex items-center justify-center text-[#505153] transition-all duration-500 transform shrink-0">
                  <Icon />
                </div>
                {/* Text Label */}
                <span className="text-[#505153] text-[15px] lg:text-[16px] leading-snug font-normal tracking-wide transition-colors duration-300 group-hover:text-[#424244]">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Read More / Read Less Button (Mobile Only) */}
        <div className="flex justify-start md:hidden mb-20">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#424244] text-[15px] border-b border-[#424244] pb-0.5 hover:text-[#0097DC] hover:border-[#0097DC] transition-colors duration-300"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        {/* Modal */}
        {isModalOpen && btnType === "know" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-10">
            <div className="absolute inset-0 bg-[#000000]/10 " onClick={() => setIsModalOpen(false)} />
            <div data-lenis-prevent className="relative bg-white w-full max-w-[1000px] p-10 md:p-20 lg:p-24 shadow-none max-h-[92vh] overflow-y-auto z-10 transition-all duration-500 ease-out">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 md:top-10 md:right-10 text-gray-400 hover:text-black transition-colors"
                aria-label="Close modal"
              >
                <X className="w-8 h-8 font-light" strokeWidth={1} />
              </button>

              <div className="mb-4 md:mb-6">{modalTitle && (
                <h2 className="text-3xl md:text-4xl lg:text-[45px] text-[#424244] font-light  tracking-tight leading-tight">
                  {modalTitle}
                </h2>
              )}
              <p className="text-[#0097DC] text-xl md:text-4xl lg:text-[30px] font-light leading-relaxed">Specifications</p></div>


              {modalPoints && modalPoints.length > 0 && (
                <ul className="space-y-1.5 md:space-y-2 pb-10">
                  {modalPoints.map((point, index) => (
                    <li key={index} className="flex items-start text-[14px] md:text-[15px] lg:text-[16px] text-[#6b6c6e] font-light leading-relaxed">
                      <span className="mr-3 text-sm mt-0.5">•</span>
                      <span className="">{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* Gallery Slider */}
        {GALLERY_IMAGES.length > 0 && (
          <div className="relative w-full overflow-hidden pb-20 mt-10 lg:mt-20">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={40}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              className="features-swiper w-full aspect-21/9 rounded-sm overflow-visible!"
            >
              {GALLERY_IMAGES.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full rounded-sm overflow-hidden  transition-transform duration-700 hover:scale-[1.02]">
                    <Image src={img} alt={`Project Gallery ${index + 1}`} fill className="object-cover" priority={index === 0} />
                    <div className="absolute inset-0 bg-black/5"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <style jsx global>{`
              .features-swiper .swiper-pagination {
                bottom: -60px !important;
                display: flex !important;
                justify-content: center !important;
                width: 100% !important;
                left: 0 !important;
              }
              .features-swiper .swiper-pagination-bullet {
                width: 50px;
                height: 2px;
                background: #e5e7eb;
                border-radius: 0;
                opacity: 1;
                transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
                margin: 0 8px !important;
                cursor: pointer;
              }
              .features-swiper .swiper-pagination-bullet-active {
                background: #0097dc;
                width: 80px;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
}
