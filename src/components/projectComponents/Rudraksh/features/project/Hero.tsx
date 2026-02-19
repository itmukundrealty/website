"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";

// Define the expected props (you can replace `any` with your specific types later)
interface ProjectHeroProps {
  HERO_MARKERS: any[];
  floorData: any[];
  FLOOR_PATHS: any[];
  FLOOR_PATHS_VIEWBOX: string;
  heroImageDesktop: string;
  heroImageMobile: string;
}

export function ProjectHero({ HERO_MARKERS, floorData, FLOOR_PATHS, FLOOR_PATHS_VIEWBOX, heroImageDesktop, heroImageMobile }: ProjectHeroProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [planHoveredIndex, setPlanHoveredIndex] = useState<number | null>(null);
  const [planSelectedIndex, setPlanSelectedIndex] = useState<number | null>(null);
  const [showUnitDetails, setShowUnitDetails] = useState(false);
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState<number | null>(null);

  const lenis = useLenis();

  const currentFloor = selectedIndex !== null ? floorData[selectedIndex] : null;
  const currentUnit = currentFloor && planSelectedIndex !== null ? currentFloor.units[planSelectedIndex] : null;

  // --- Opaque/Transparent Fix: Using /60 for transparency ---
  const getPlanFillClass = (index: number) => {
    // This makes the fill 60% opaque so you can see the image under it
    if (planHoveredIndex === index) return "fill-[#0097DC]/90 stroke-[#0097DC] stroke-2";
    return "fill-transparent stroke-none";
  };

  const handleUnitClick = (index: number) => {
    setPlanSelectedIndex(index);
    setShowUnitDetails(true);
  };

  // --- Building Overlay Fix: Keep selected floor filled ---
  const getBuildingPathClass = (index: number) => {
    // FIX ADDED: 'pointer-events-auto' added here so the specific path captures clicks
    const baseClasses = "cursor-pointer transition-colors duration-300 pointer-events-auto";

    // If this floor is currently selected (sidebar is open), keep it filled
    if (selectedIndex === index) {
      return `${baseClasses} fill-[#003a53]/80`;
    }

    // FIX ADDED: Changed 'fill-transparent' to 'fill-white/0'. 
    // This looks identical (invisible), but ensures the browser registers the click.
    return `${baseClasses} fill-white/0 hover:fill-[#003a53]/80`;
  };


  return (
    // 1. Removed h-[100vh] from the main section
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      {/* 2. BACKGROUND LAYER: Full height */}
      <div className="relative w-full h-full z-0">
        <div className="hidden lg:block w-full h-full">
          {/* 3. Use fill and object-cover to cover the 100vh area */}
          <Image
            src={isZoomedOut ? heroImageDesktop : heroImageDesktop}
            alt="Mukund Realty Project"
            fill
            className="object-cover  transition-all duration-1000"
            priority
          />
        </div>
        <div className="block lg:hidden w-full h-full">
          {/* Mobile image also covers */}
          <Image src={heroImageMobile} alt="Mukund Realty Project Mobile" fill className="object-cover object-bottom" priority />
        </div>
      </div>

      {/* 4. HERO TEXT CONTENT */}
      <div className="absolute inset-0 z-10 hidden lg:flex items-start justify-end px-12 lg:px-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-right pointer-events-auto mt-20 lg:mt-28 xl:mt-40"
        >
          <h1 className="text-5xl text-white tracking-tight font-medium mb-4 lg:text-7xl">Click to Explore</h1>
          <h2 className="text-5xl text-white tracking-tight font-thin lg:text-7xl">Our Floors</h2>
        </motion.div>
      </div>

      {/* 5. SVG OVERLAY: Match image scaling */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 hidden lg:block ${isZoomedOut ? "opacity-0" : "opacity-100"}`}
      >
        {/* FIX ADDED: 
            1. Changed preserveAspectRatio to 'xMidYMid slice' to match the background Image center alignment.
            2. Changed className to 'pointer-events-none' so the SVG box doesn't block background interactions.
        */}
        <svg viewBox={FLOOR_PATHS_VIEWBOX} className="h-full w-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
          <g className="transition-colors duration-300">
            {FLOOR_PATHS.map((floor) => (
              <path
                key={floor.id}
                d={floor.d}
                className={getBuildingPathClass(floor.id)}
                onMouseEnter={() => setHoveredIndex(floor.id)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setSelectedIndex(floor.id)}
              />
            ))}
          </g>

          {/* INTERACTIVE MARKERS */}
          {HERO_MARKERS.map((marker, index) => (
            <g
              key={`marker-${index}`}
              // FIX ADDED: Added pointer-events-auto so markers are clickable
              className="cursor-pointer group pointer-events-auto"
              onMouseEnter={() => setHoveredMarkerIndex(index)}
              onMouseLeave={() => setHoveredMarkerIndex(null)}
            >
              {marker.markerElements}
            </g>
          ))}
        </svg>
      </div>

      {/* ... Rest of your component (tooltips, modals, sidebars) remains exactly the same! ... */}
      <div className="absolute z-50 bottom-10 right-10 hidden lg:block">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            opacity="0.8"
            d="M15.6088 24.9668V15.3753H17.5271L21.8707 21.8838V15.3753H23.789V24.9668H21.8707L17.5271 18.4857V24.9668H15.6088Z"
            fill="white"
          />
          <circle cx="19.9664" cy="19.9659" r="17.75" transform="rotate(-84.3208 19.9664 19.9659)" stroke="white" />
          <line x1="9.16806" y1="5.57379" x2="15.0294" y2="12.7297" stroke="white" />
        </svg>
      </div>

      {/* 4. MARKER TOOLTIPS */}
      <AnimatePresence>
        {hoveredMarkerIndex !== null && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-8 right-28 z-30 items-center justify-center  px-6 py-3 rounded-lg shadow-xl  pointer-events-auto hidden lg:flex"
          >
            <span className="text-2xl font-semibold text-white tracking-wide uppercase whitespace-nowrap">
              {HERO_MARKERS[hoveredMarkerIndex].label}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. HOVER CARD */}
      <AnimatePresence>
        {hoveredIndex !== null && floorData[hoveredIndex] && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="absolute bottom-5 right-28 z-30 w-80 min-h-[300px] flex flex-col justify-between bg-white px-8 py-4 shadow-2xl pointer-events-auto hidden lg:flex"
          >
            <div>
              <h3 className="mb-2 text-xl font-medium text-[#505153]">{floorData[hoveredIndex].title}</h3>
              <ul className="mb-8 space-y-2">
                {floorData[hoveredIndex].features.map((feature: any, idx: number) => (
                  <li key={idx} className="text-base font-light text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => setSelectedIndex(hoveredIndex)}
              className="flex w-full items-center justify-end border-t border-gray-100 pt-6 text-md font-semibold text-[#0097DC] transition-opacity hover:opacity-80"
            >
              Click to Explore
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. SIDEBAR (FLOOR PLAN) - Z-INDEX 50 */}
      <AnimatePresence>
        {selectedIndex !== null && currentFloor && (
          <>
            {/* Dark Overlay for the Left Side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedIndex(null)}
              className="absolute inset-0 z-40 bg-black/20"
            />
            {/* The Sidebar Itself */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 z-50 h-full w-full lg:w-[50%] bg-white shadow-2xl"
            >
              <div className="relative flex h-full flex-col">
                {/* Header */}
                <ProjectHeader />

                {/* SVG Map */}
                <div className="flex-1 flex items-center justify-center min-h-0 relative w-full">
                  <div className="relative h-full w-full">
                    {/* UPDATED: Use currentFloor.viewBox instead of hardcoded value */}
                    <svg
                      viewBox={currentFloor.viewBox || "0 0 754 769"}
                      preserveAspectRatio="xMidYMid meet"
                      className="absolute inset-0 h-full w-full pointer-events-auto "
                    >
                      <g className="transition-all duration-300">
                        {currentFloor.units.map((unit: any, index: number) => (
                          <path
                            key={unit.id}
                            d={unit.path}
                            className={`cursor-pointer transition-colors duration-200 ease-in-out ${getPlanFillClass(index)}`}
                            onMouseEnter={() => setPlanHoveredIndex(index)}
                            onMouseLeave={() => setPlanHoveredIndex(null)}
                            onClick={() => handleUnitClick(index)}
                            pointerEvents="all"
                          />
                        ))}
                      </g>
                    </svg>
                    {currentFloor.planImage && (
                      <img
                        src={currentFloor.planImage}
                        alt={`${currentFloor.title} Plan`}
                        className="absolute inset-0 h-full w-full object-contain select-none mix-blend-multiply pointer-events-none z-0"
                      />
                    )}
                  </div>
                </div>

                {/* Sidebar Footer (Text + Compass) */}
                <div className="mt-auto flex items-center justify-between px-8 py-5 shrink-0">
                  <h2 className="text-4xl lg:text-2xl font-light text-[#0097DC] tracking-wide">{currentFloor.title}</h2>
                  <a
                    href={currentFloor?.pdfPath}
                    download="FLOOR PLAN"
                    className="flex items-center gap-3 text-sm font-semibold text-[#0097DC] hover:opacity-70 transition-opacity"
                  >
                    Download Floorplan
                    <Compass />
                  </a>
                </div>

                {/* Floating Close Button */}
                <motion.button
                  onClick={() => setSelectedIndex(null)}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-0 top-1/2 z-50 flex  h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#0097DC] text-white shadow-2xl transition-transform hover:scale-105 active:scale-95 hidden lg:flex"
                >
                  <svg width="30" height="30" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.5 1.50001L1.5 33.5M33.5 33.5L1.5 1.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 6. UNIT MODAL (FULL SCREEN) - Z-INDEX 60 */}
      <AnimatePresence>
        {showUnitDetails && currentUnit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[60] flex flex-col lg:flex-row bg-white"
          >
            {/* LEFT PANEL: The "Expanded" part (Blue) */}
            <div className="w-full lg:w-[50%] bg-[#0097DC] text-white px-8 lg:px-12 py-5 flex flex-col justify-between relative">
              <div className="mb-8 mt-1">
                <Link href="/" className="flex items-center z-50 relative">
                  <div className="relative w-48 h-12 lg:w-56 lg:h-14 transition-opacity duration-300">
                    <Image src={"/logo/whiteLogo.svg"} alt="Mukund Realty" fill className="object-contain" priority />
                  </div>
                </Link>
              </div>

              {/* Back Button: Closes Modal, reveals Sidebar underneath */}
              <div className="flex flex-col justify-between h-full">
                {/* TOP SECTION */}
                <div>
                  <button
                    onClick={() => setShowUnitDetails(false)}
                    className="flex items-center gap-2 text-sm font-medium hover:opacity-80 cursor-pointer transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                  </button>
                </div>
                <div>
                  <div className="space-y-3">
                    <div>
                      <p className="text-lg font-light opacity-90">{currentFloor?.title}</p>
                      <h1 className="text-6xl mt-2">{currentUnit?.details.number}</h1>
                    </div>

                    <ul className="space-y-2 text-lg font-light opacity-90">
                      <li>{currentUnit?.details.rooms} Bedrooms</li>
                      <li>{currentUnit.details.washrooms} Washrooms</li>
                      <li>{currentUnit.details.type}</li>
                      <li>Balcony ({currentUnit.details.sqft} sq.ft.)</li>
                    </ul>
                  </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="">
                  <div className="mb-8">
                    <p className="text-sm font-light opacity-80">Total Sale Area</p>
                    <p className="text-4xl font-normal">{currentUnit.details.sqft} sq. ft.</p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link href="/project-enquire?project=rudraksh" className="w-full sm:w-auto">
                      <button className="bg-white flex items-center gap-2 text-[#0097DC] px-8 py-3 font-semibold text-sm hover:bg-gray-100 transition-colors w-full">
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M3.74036 1.50016L17.6005 1.49996M17.6005 1.49996L17.6005 15.163M17.6005 1.49996L1.5 17.6005"
                            stroke="#0097DC"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Enquire Now
                      </button>
                    </Link>

                    <a
                      href={currentFloor?.pdfPath}
                      download="FLOOR PLAN"
                      className="text-white font-medium text-sm hover:underline w-full sm:w-auto text-center sm:text-left cursor-pointer"
                    >
                      Download Floorplan
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT PANEL: Replaces the Sidebar (White) */}
            <div className="flex-1 bg-white relative flex flex-col h-full shadow-2xl">
              {/* Header (Same as sidebar) */}
              <ProjectHeader />

              {/* Unit Image (Different from sidebar) */}
              <div className="flex-1 flex items-center justify-center min-h-0 relative w-full p-8">
                <div className="relative w-full h-full max-w-4xl max-h-[70vh]">
                  <img
                    src={currentUnit?.unitImage}
                    alt={`Unit ${currentUnit?.details.number}`}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              </div>
              {/* Compass ONLY (No text footer) */}
              <div className="mt-auto flex items-end justify-end px-8 py-5 shrink-0">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#0097DC]">
                  <Compass />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// 1. The Header Component (Exactly the same in both)
const ProjectHeader = () => (
  <div className="flex items-center justify-end gap-20 text-sm font-light text-gray-500 shrink-0 px-10 pt-10">
    <button className="hover:text-black transition-colors">About</button>
    <button className="flex items-center gap-1 text-[#0097DC] font-medium">
      Rudraksh
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    <button className="hover:text-black transition-colors">Insights</button>
    <Link href="/project-enquire?project=rudraksh" className="hover:text-black transition-colors">
      Contact
    </Link>
  </div>
);

// 2. The Compass Component (The "N" Circle)
const Compass = () => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.8"
      d="M21.7942 30.8097V21.2182H23.0274L28.0561 28.7681V21.2182H29.2893V30.8097H28.0561L23.0274 23.2461V30.8097H21.7942Z"
      fill="#0097DC"
    />
    <circle cx="25.8093" cy="25.8093" r="17.75" transform="rotate(134.898 25.8093 25.8093)" stroke="#0097DC" />
    <line x1="31.6313" y1="19.2583" x2="38.1604" y2="12.7059" stroke="#0097DC" />
  </svg>
);