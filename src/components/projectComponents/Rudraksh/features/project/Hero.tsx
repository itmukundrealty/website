"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import OrientationLock from "@/components/common/OrientationLock";
import { PROJECTS_LIST } from "@/data/projects";
import { Menu, X, ArrowUpRight } from "lucide-react";

// Define the expected props (you can replace `any` with your specific types later)
interface ProjectHeroProps {
  HERO_MARKERS: any[];
  floorData: any[];
  FLOOR_PATHS: any[];
  FLOOR_PATHS_VIEWBOX: string;
  heroImageDesktop: string;
  heroImageMobile: string;
  projectLink?: string;
  projectName?: string;
  hideAmenities?: boolean;
  amenitiesTarget?: string;
  title?: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  pdfPath?: string;
  exploreTitle?: string | React.ReactNode;
  exploreSubtitle?: string | React.ReactNode;
  accentColor?: string;
  btnAccentColor?: string;
  view360Url?: string;
}

export function ProjectHero({
  HERO_MARKERS,
  floorData,
  FLOOR_PATHS,
  FLOOR_PATHS_VIEWBOX,
  heroImageDesktop,
  heroImageMobile,
  projectLink = "/project-enquire",
  projectName = "Rudraksh",
  hideAmenities = false,
  amenitiesTarget = "#amenities",
  title,
  subtitle,
  pdfPath,
  exploreTitle = "Click to Explore",
  exploreSubtitle = "Our Floors",
  accentColor = "#0097DC",
  btnAccentColor = "#0097DC",
  view360Url,
}: ProjectHeroProps) {
  const pathname = usePathname();
  const currentPath = pathname?.split("/")[1] || "";

  const handleDownload = () => {
    if (pdfPath) {
      const link = document.createElement("a");
      link.href = pdfPath;
      link.download = pdfPath.split("/").pop() || "floor-plan.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [hoveredWing, setHoveredWing] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [selectedWing, setSelectedWing] = useState<string | null>(null);
  const [planHoveredIndex, setPlanHoveredIndex] = useState<number | null>(null);
  const [planSelectedIndex, setPlanSelectedIndex] = useState<number | null>(null);
  const [showUnitDetails, setShowUnitDetails] = useState(false);
  const [isZoomedOut, setIsZoomedOut] = useState(false);
  const [hoveredMarkerIndex, setHoveredMarkerIndex] = useState<number | null>(null);
  const [terraceType, setTerraceType] = useState<"upper" | "lower">("lower");

  // Mouse tracking for floating label
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    const isOpen = selectedIndex !== null;
    // Dispatch global event for NewHeader to listen to without prop drilling through Page
    window.dispatchEvent(new CustomEvent("floorExplorerToggle", { detail: { isOpen } }));
  }, [selectedIndex]);

  const lenis = useLenis();

  const currentFloor = selectedIndex !== null ? floorData[selectedIndex] : null;

  // Filter units by selected wing
  const currentFilteredUnits = currentFloor
    ? currentFloor.units.filter((u: any) => {
      if (currentFloor.title === "Terrace Floor" && projectName === "Rudraksh") {
        return u.details.terraceType === terraceType;
      }
      if (!selectedWing) return true;
      return u.details.floor?.includes(`Wing ${selectedWing}`);
    })
    : [];

  const currentUnit = currentFloor && planSelectedIndex !== null ? currentFloor.units[planSelectedIndex] : null;

  const handleUnitClick = (index: number) => {
    setPlanSelectedIndex(index);
    setShowUnitDetails(true);
  };

  return (
    // 1. Removed h-[100vh] from the main section
    <section className="relative w-full h-[100vh] overflow-hidden bg-black">
      <OrientationLock />
      {/* 2. BACKGROUND LAYER: Full height */}
      <div className="relative w-full h-full z-0">
        <div className="hidden md:block w-full h-full">
          {/* 3. Use fill and object-cover to cover the 100vh area */}
          <Image
            src={isZoomedOut ? heroImageDesktop : heroImageDesktop}
            alt="Mukund Realty Project"
            fill
            className="object-cover  transition-all duration-1000"
            priority
          />
        </div>
        <div className="block md:hidden w-full h-full relative">
          {/* Mobile image also covers */}
          <Image src={heroImageMobile} alt="Mukund Realty Project Mobile" fill className="object-cover object-bottom" priority />
          {/* Mobile Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 z-0" />
        </div>
      </div>

      {/* Mobile Hero Content Overlay */}
      <div className="absolute inset-0 z-10 flex md:hidden flex-col justify-between px-6 py-16 pointer-events-none">
        {/* Top: Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center w-full mt-12"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl text-white tracking-tight font-medium leading-tight">
              {title || projectName}
            </h1>
            {subtitle && (
              <h2 className="text-2xl text-white tracking-tight font-light leading-snug">
                {subtitle}
              </h2>
            )}
          </div>
        </motion.div>

        {/* Bottom: Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-full flex flex-col gap-3 pointer-events-auto"
        >
          {pdfPath && (
            <button
              onClick={handleDownload}
              className="w-full py-4 border bg-transparent hover:bg-white text-white hover:text-[var(--btn-accent)] font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm shadow-lg transition-colors"
              style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
            >
              Download Floor Plan
              <ArrowUpRight className="w-5 h-5" />
            </button>
          )}
          {view360Url && (
            <Link
              href={view360Url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 border bg-transparent hover:bg-white text-white hover:text-[var(--btn-accent)] font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm shadow-lg transition-colors hidden md:block"
              style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
            >
              360° View
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          )}
          <Link href={finalLink} className="w-full">
            <button
              className="w-full text-white py-4 font-bold uppercase tracking-wide flex items-center justify-center gap-2 text-sm shadow-lg hover:opacity-90 transition-opacity bg-[var(--btn-accent)]"
              style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
            >
              Enquire Now
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </Link>
        </motion.div>
      </div>

      {/* 4. HERO TEXT CONTENT (Desktop) */}
      <div className="absolute inset-0 z-10 hidden md:flex items-start justify-end px-12 md:px-24 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-right pointer-events-auto mt-20 md:mt-28 xl:mt-40 flex flex-col items-end"
        >
          <h1 className="text-5xl text-white tracking-tight font-medium mb-4 md:text-6xl">{exploreTitle}</h1>
          <h2 className="text-5xl text-white tracking-tight font-thin md:text-4xl">{exploreSubtitle}</h2>

          {/* DESKTOP BUTTONS */}
          <div className="flex flex-wrap items-center justify-end gap-4 mt-8 pointer-events-auto">
            {pdfPath && (
              <button
                onClick={handleDownload}
                className="px-8 py-2 border text-sm font-medium text-center tracking-wide transition-all duration-300 uppercase border-white hover:opacity-80 bg-white text-[var(--btn-accent)]"
                style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
              >
                Download <br /> Floor Plans
              </button>
            )}
            {view360Url && (
              <Link
                href={view360Url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4.5 border text-sm font-medium tracking-wide transition-all duration-300 uppercase flex items-center gap-2 border-white text-white hover:bg-white hover:text-[var(--btn-accent)]"
                style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
              >
                360° View
                <ArrowUpRight size={18} />
              </Link>
            )}
            <Link
              href={finalLink}
              className="bg-[var(--btn-accent)] hover:opacity-90 text-white px-6 py-4.5 text-sm font-medium tracking-wide transition-all duration-300 uppercase flex items-center gap-2"
              style={{ "--btn-accent": btnAccentColor || "#0097DC" } as React.CSSProperties}
            >
              Enquire Now
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 5. SVG OVERLAY: Match image scaling */}
      <div
        className={`absolute inset-0 z-10 pointer-events-none transition-opacity duration-700 hidden md:block ${isZoomedOut ? "opacity-0" : "opacity-100"}`}
      >
        {/* FIX ADDED: 
            1. Changed preserveAspectRatio to 'xMidYMid slice' to match the background Image center alignment.
            2. Changed className to 'pointer-events-none' so the SVG box doesn't block background interactions.
        */}
        <svg viewBox={FLOOR_PATHS_VIEWBOX} className="h-full w-full object-cover pointer-events-none" preserveAspectRatio="xMidYMid slice">
          <g className="transition-colors duration-300">
            {FLOOR_PATHS.map((floor, i) => {
              const isHovered = hoveredIndex === floor.id && hoveredWing === (floor.wing || null);
              const isSelected = selectedIndex === floor.id && selectedWing === (floor.wing || null);
              const shouldHighlight = isHovered || isSelected;

              return (
                <path
                  key={`${floor.id}-${floor.wing || 'all'}-${i}`}
                  d={floor.d}
                  transform={floor.transform || undefined}
                  className="cursor-pointer transition-all duration-300 pointer-events-auto"
                  style={{
                    fill: shouldHighlight ? accentColor : "rgba(255, 255, 255, 0)",
                    fillOpacity: shouldHighlight ? 0.8 : 0
                  }}
                  onMouseEnter={() => { setHoveredIndex(floor.id); setHoveredWing(floor.wing || null); }}
                  onMouseLeave={() => { setHoveredIndex(null); setHoveredWing(null); }}
                  onClick={() => { setSelectedIndex(floor.id); setSelectedWing(floor.wing || null); }}
                />
              );
            })}
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
      <div className="absolute z-50 bottom-10 right-10 hidden md:block">
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

      {/* FLOATING HOVER LABEL */}
      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            style={{
              left: cursorXSpring,
              top: cursorYSpring,
              translateX: "-50%",
              translateY: "-150%",
              backgroundColor: accentColor,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="fixed z-[60] pointer-events-none px-4 py-2 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-xl backdrop-blur-md bg-opacity-90 flex items-center gap-2 whitespace-nowrap"
          >
            <div className="w-1 h-1 rounded-full bg-white animate-pulse" />
            Click to Explore {hoveredWing ? `Wing ${hoveredWing}` : ""}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. MARKER TOOLTIPS */}
      <AnimatePresence>
        {hoveredMarkerIndex !== null && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute bottom-8 right-28 z-30 items-center justify-center  px-6 py-3 rounded-lg shadow-xl  pointer-events-auto hidden md:flex"
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
            className="absolute bottom-5 right-28 z-30 w-80 min-h-[300px]  flex-col justify-between bg-white px-8 py-4 shadow-2xl pointer-events-auto hidden md:flex"
          >
            <div>
              <h3 className="mb-2 text-xl font-medium text-[#505153]">
                {floorData[hoveredIndex].title} {hoveredWing ? `- Wing ${hoveredWing}` : ""}
              </h3>
              <ul className="mb-8 space-y-2">
                {floorData[hoveredIndex].features.map((feature: any, idx: number) => (
                  <li key={idx} className="text-base font-light text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => { setSelectedIndex(hoveredIndex); setSelectedWing(hoveredWing); }}
              className="flex w-full items-center justify-end border-t border-gray-100 pt-6 text-md font-semibold transition-opacity hover:opacity-80"
              style={{ color: accentColor }}
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
              onClick={() => { setSelectedIndex(null); setSelectedWing(null); }}
              className="absolute inset-0 z-40 bg-black/20"
            />
            {/* The Sidebar Itself */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 z-50 h-full w-full md:w-[50%] bg-white shadow-2xl"
            >
              <div className="relative flex h-full flex-col">
                {/* Header */}
                <ProjectHeader
                  projectLink={finalLink}
                  projectName={projectName}
                  onClose={() => { setSelectedIndex(null); setSelectedWing(null); }}
                  hideAmenities={hideAmenities}
                  amenitiesTarget={amenitiesTarget}
                  accentColor={accentColor}
                />

                {/* SVG Map */}
                <div className="flex-1 flex items-center justify-center min-h-0 relative px-8 pt-8 pb-4 w-full">
                  <div className="relative h-full w-full">
                    {/* UPDATED: Use currentFloor.viewBoxWingA/B or fallback to viewBox */}
                    <svg
                      viewBox={
                        (selectedWing === "A" && currentFloor.viewBoxWingA) ||
                        (selectedWing === "B" && currentFloor.viewBoxWingB) ||
                        currentFloor.viewBox || "0 0 754 769"
                      }
                      preserveAspectRatio="xMidYMid meet"
                      className="absolute inset-0 h-full w-full pointer-events-auto "
                    >
                      <g className="transition-all duration-300">
                        {currentFilteredUnits.map((unit: any, index: number) => {
                          // Find original index for handling clicks correctly
                          const originalIndex = currentFloor.units.findIndex((u: any) => u.id === unit.id);
                          return (
                            <path
                              key={unit.id}
                              d={unit.path}
                              transform={unit.transform || undefined}
                              className="cursor-pointer transition-all duration-200 ease-in-out"
                              style={{
                                fill: planHoveredIndex === originalIndex ? accentColor : "transparent",
                                fillOpacity: planHoveredIndex === originalIndex ? 0.9 : 0,
                                stroke: planHoveredIndex === originalIndex ? accentColor : "transparent",
                                strokeWidth: planHoveredIndex === originalIndex ? 2 : 0
                              }}
                              onMouseEnter={() => setPlanHoveredIndex(originalIndex)}
                              onMouseLeave={() => setPlanHoveredIndex(null)}
                              onClick={() => handleUnitClick(originalIndex)}
                              pointerEvents="all"
                            />
                          );
                        })}
                      </g>
                    </svg>

                    {(
                      currentFloor.title === "Terrace Floor" && projectName === "Rudraksh"
                        ? (terraceType === "upper" ? currentFloor.upperPlanImage : currentFloor.lowerPlanImage)
                        : (selectedWing === "A" && currentFloor.planImageWingA) ||
                        (selectedWing === "B" && currentFloor.planImageWingB) ||
                        currentFloor.planImage
                    ) && (
                        <Image
                          width={500}
                          height={500}
                          src={
                            currentFloor.title === "Terrace Floor" && projectName === "Rudraksh"
                              ? (terraceType === "upper" ? currentFloor.upperPlanImage : currentFloor.lowerPlanImage)
                              : (selectedWing === "A" && currentFloor.planImageWingA) ||
                              (selectedWing === "B" && currentFloor.planImageWingB) ||
                              currentFloor.planImage
                          }
                          alt={`${currentFloor.title} Plan`}
                          className="absolute inset-0 h-full w-full object-contain select-none mix-blend-multiply pointer-events-none z-0"
                        />
                      )}
                  </div>
                </div>

                {/* Sidebar Footer (Text + Compass) */}
                <div className="mt-auto flex flex-col items-start px-8 pb-5 shrink-0 gap-3">
                  {currentFloor.title === "Terrace Floor" && projectName === "Rudraksh" && (
                    <div className="bg-white/60 backdrop-blur-2xl p-1.5 border shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-center gap-1 pointer-events-auto" style={{ borderColor: `${accentColor}33` }}>
                      {(["lower", "upper"] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => setTerraceType(type)}
                          className={`relative px-6 py-2 md:px-8 md:py-2.5 text-[11px] md:text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-500 group ${terraceType === type
                            ? "text-white"
                            : "text-[#505153]/60 hover:text-[#505153]"
                            }`}
                        >
                          {terraceType === type && (
                            <motion.div
                              layoutId="active-terrace-pill"
                              className="absolute inset-0"
                              style={{ backgroundColor: accentColor }}
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center gap-2">
                            {type}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="w-full flex items-center justify-between">
                    <h2 className="text-4xl md:text-2xl font-light tracking-wide" style={{ color: accentColor }}>
                      {currentFloor.title === "Terrace Floor" && projectName === "Rudraksh"
                        ? (terraceType === "upper" ? "Upper Terrace Floor" : "Terrace Floor")
                        : `${currentFloor.title}${selectedWing ? ` - Wing ${selectedWing}` : ""}`}

                    </h2>
                    <a
                      href={currentFloor?.pdfPath}
                      download="FLOOR PLAN"
                      className="flex items-center gap-3 text-sm font-semibold hover:opacity-70 transition-opacity"
                      style={{ color: accentColor }}
                    >
                      Download Floorplan
                      <Compass accentColor={accentColor} />
                    </a>
                  </div>
                </div>

                {/* Floating Close Button */}
                <motion.button
                  onClick={() => { setSelectedIndex(null); setSelectedWing(null); }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className="absolute left-0 top-1/2 z-50 h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-2xl transition-transform hover:scale-105 active:scale-95 hidden md:flex"
                  style={{ backgroundColor: accentColor }}
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
            className="absolute inset-0 z-[60] flex flex-col md:flex-row bg-white"
          >
            {/* LEFT PANEL: The "Expanded" part (Accent Color) */}
            <div className="w-full md:w-[50%] text-white px-8 md:px-12 py-5 flex flex-col justify-between relative" style={{ backgroundColor: accentColor }}>
              <div className="mb-8 mt-1">
                <Link href="/" className="flex items-center z-50 relative">
                  <div className="relative w-48 h-12 md:w-56 md:h-14 transition-opacity duration-300">
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
                    className="flex items-center gap-2 text-sm font-medium hover:opacity-80 cursor-pointer transition-opacity group"
                  >
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Go Back
                  </button>
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <p className="text-lg font-light opacity-90">{currentFloor?.title}</p>
                      <h1 className="text-3xl md:text-4xl md:text-6xl font-normal leading-tight tracking-tight">
                        {currentUnit?.details.number}
                      </h1>
                    </div>

                    <ul className="space-y-2 text-lg font-light opacity-90">
                      {currentUnit?.details.rooms && <li>{currentUnit?.details.rooms} Bedrooms</li>}
                      {currentUnit.details.washrooms && <li>{currentUnit.details.washrooms} Washrooms</li>}
                      {currentUnit.details.type && <li>{currentUnit.details.type}</li>}
                      {currentUnit.details.balcony === true ? (
                        <li>Balcony</li>
                      ) : (
                        currentUnit.details.balconySqft && currentUnit.details.balconySqft !== "0" && (
                          <li>Balcony Area: {currentUnit.details.balconySqft} sq.ft.</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="">
                  <div className="mb-8">
                    {currentUnit.details.sqft && (
                      <>
                        <p className="text-sm font-light opacity-80">Total Sale Area</p>
                        <p className="text-4xl font-normal">{currentUnit.details.sqft} sq. ft.</p>
                      </>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                    <Link href={finalLink} className="w-full sm:w-auto">
                      <button
                        className="bg-white flex items-center gap-2 px-8 py-3 font-semibold text-sm hover:bg-gray-100 transition-colors w-full"
                        style={{ color: accentColor }}
                      >
                        <svg width="10" height="10" viewBox="0 0 20 20" fill="none">
                          <path
                            d="M3.74036 1.50016L17.6005 1.49996M17.6005 1.49996L17.6005 15.163M17.6005 1.49996L1.5 17.6005"
                            stroke={accentColor}
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
              <ProjectHeader
                projectLink={finalLink}
                projectName={projectName}
                onClose={() => setShowUnitDetails(false)}
                hideAmenities={hideAmenities}
                amenitiesTarget={amenitiesTarget}
                accentColor={accentColor}
              />

              {/* Unit Image (Different from sidebar) */}
              <div className="flex-1 flex items-center justify-center min-h-0 relative w-full px-8 pt-8 pb-4">
                <div className="relative w-full h-full max-w-4xl max-h-[60vh]">
                  <Image
                    width={500}
                    height={500}
                    src={currentUnit?.unitImage}
                    alt={`Unit ${currentUnit?.details.number}`}
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
              </div>
              {/* Compass ONLY (No text footer) */}
              <div className="mt-auto flex items-end justify-end px-8 pb-5 shrink-0">
                <div className="flex items-center gap-3 text-sm font-semibold" style={{ color: accentColor }}>
                  <Compass accentColor={accentColor} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const PROJECTS = {
  ongoing: PROJECTS_LIST.filter((p) => p.type === "ongoing").map((p) => ({ name: p.name, href: p.href })),
  completed: PROJECTS_LIST.filter((p) => p.type === "completed").map((p) => ({ name: p.name, href: p.href })),
};

// 1. The Header Component (Redesigned)
const ProjectHeader = ({
  projectLink,
  projectName,
  onClose,
  hideAmenities,
  amenitiesTarget = "#amenities",
  accentColor = "#0097DC"
}: {
  projectLink: string;
  projectName: string;
  onClose?: () => void;
  hideAmenities?: boolean;
  amenitiesTarget?: string;
  accentColor?: string;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    ...(!hideAmenities ? [{ label: "Amenities", href: amenitiesTarget }] : []),
    { label: "Location", href: "#location" },
  ];

  const handleLinkClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#") || href === "/") {
      e.preventDefault();
      onClose?.(); // Close the explorer/modal

      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const id = href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <div className="relative z-[100] shrink-0 bg-white">
      <div className="flex items-center justify-between px-8 py-6 border-b border-gray-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-2 px-5 py-2 border text-sm font-medium transition-all duration-300 uppercase tracking-widest"
          style={{
            borderColor: accentColor,
            color: isMenuOpen ? "white" : accentColor,
            backgroundColor: isMenuOpen ? accentColor : "transparent"
          }}
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          Menu
        </button>

        <Link href={projectLink}>
          <button
            className="text-white px-6 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 uppercase flex items-center gap-2"
            style={{ backgroundColor: accentColor }}
          >
            Enquire Now
            <ArrowUpRight size={18} />
          </button>
        </Link>
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-full bg-white shadow-xl overflow-hidden border-b border-gray-100"
          >
            <nav className="flex flex-col py-8 px-8 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-2xl text-[#505153] font-light transition-colors duration-300 py-3 border-b border-gray-50 last:border-0 hover:text-[var(--accent-color)]"
                  style={{ "--accent-color": accentColor } as React.CSSProperties}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// 2. The Compass Component (The "N" Circle)
const Compass = ({ accentColor = "#0097DC" }: { accentColor?: string }) => (
  <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      opacity="0.8"
      d="M21.7942 30.8097V21.2182H23.0274L28.0561 28.7681V21.2182H29.2893V30.8097H28.0561L23.0274 23.2461V30.8097H21.7942Z"
      fill={accentColor}
    />
    <circle cx="25.8093" cy="25.8093" r="17.75" transform="rotate(134.898 25.8093 25.8093)" stroke={accentColor} />
    <line x1="31.6313" y1="19.2583" x2="38.1604" y2="12.7059" stroke={accentColor} />
  </svg>
);