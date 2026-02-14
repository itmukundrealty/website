"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

// --- Types ---
interface CarouselItem {
  id: number;
  image: string;
}

// --- Sample Data (Placeholders) ---
const SAMPLE_ITEMS: CarouselItem[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=600&auto=format&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=600&auto=format&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop" },
  { id: 6, image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=600&auto=format&fit=crop" },
];

export default function WorkspaceCarouselSection() {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex flex-col lg:flex-row items-center">
      
      {/* --- Left Side: Text Content --- */}
      <div className="w-full lg:w-1/2 px-8 lg:pl-20 z-10 flex flex-col justify-center mb-12 lg:mb-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-black text-white px-4 py-6 font-bold text-xl writing-vertical-lr rotate-180">
            w.
          </div>
          {/* Vertical line/Label if needed */}
        </div>
        
        <h1 className="text-5xl lg:text-7xl font-thin tracking-tight text-gray-800 leading-[1.1]">
          Designing <br />
          <span className="font-thin">Workspaces</span> that <br />
          unlock <span className="font-medium text-gray-900">What’s Possible</span>
        </h1>
      </div>

      {/* --- Right Side: The 3D Carousel --- */}
      <div className="w-full lg:w-1/2 h-[600px] lg:h-screen relative flex items-center justify-center perspective-container">
        {/* We pass a negative radius to curve it inwards/outwards correctly for the view */}
        <InfiniteCircularCarousel items={SAMPLE_ITEMS} radius={500} />
      </div>

    </section>
  );
}

// --- The Carousel Component ---

function InfiniteCircularCarousel({
  items,
  radius,
}: {
  items: CarouselItem[];
  radius: number;
}) {
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  // Total degrees per item
  const angleStep = 360 / items.length;

  useEffect(() => {
    // Continuous rotation loop
    controls.start({
      rotateY: 360,
      transition: {
        duration: 40, // Adjust speed (higher = slower)
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [controls]);

  return (
    <div className="relative flex items-center justify-center">
      {/* Container for Perspective 
        perspective-origin matches the tilt 
      */}
      <div
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}
        className="relative flex items-center justify-center"
      >
        <motion.div
          animate={controls}
          style={{
            transformStyle: "preserve-3d",
            // This combines the continuous rotation with the static tilt
            rotateZ: -12, // The diagonal tilt seen in screenshot
            rotateX: 5,   // Slight upward tilt
          }}
          className="relative flex items-center justify-center"
        >
          {items.map((item, index) => {
            const theta = index * angleStep;

            return (
              <CarouselCard
                key={item.id}
                item={item}
                angle={theta}
                radius={radius}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

function CarouselCard({
  item,
  angle,
  radius,
}: {
  item: CarouselItem;
  angle: number;
  radius: number;
}) {
  return (
    <motion.div
      className="absolute border-4 border-white bg-white shadow-xl overflow-hidden rounded-xl"
      style={{
        width: "400px",  // Card Width
        height: "260px", // Card Height
        // 1. Rotate around Y axis to angle
        // 2. Push out by radius
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
        // Important: We do NOT counter-rotate (-angle). 
        // In the photo, the cards are fixed to the ring surface.
      }}
    >
      <img
        src={item.image}
        alt="Workspace design"
        className="w-full h-full object-cover pointer-events-none"
      />
      {/* Optional: Slight dark overlay for depth if not focused, 
          though the screenshot looks bright. Removed for fidelity to image. */}
    </motion.div>
  );
}