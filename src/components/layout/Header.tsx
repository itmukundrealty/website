"use client";
import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

import { PROJECTS_LIST } from "@/data/projects";
import Image from 'next/image';

const PROJECTS = {
  ongoing: PROJECTS_LIST.filter(p => p.type === 'ongoing').map(p => ({
    ...p,
    image: p.id === "rudraksh" ? "/images/LandingPageImg/landmarks/3.png" :
      p.id === "ashoka" ? "/images/LandingPageImg/landmarks/2.png" :
        p.id === "kedar" ? "/images/LandingPageImg/landmarks/1.png" : ""
  })),
  completed: PROJECTS_LIST.filter(p => p.type === 'completed')
};

interface HeaderProps {
  variant?: 'light' | 'dark';
}

const ProjectHeader = ({ variant = 'dark' }: HeaderProps) => {
  const isLight = variant === 'light';
  const pathname = usePathname();
  const activeProject = PROJECTS_LIST.find(p => p.href === pathname);
  const displayProjectName = activeProject ? activeProject.name : "Projects";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileOngoingOpen, setIsMobileOngoingOpen] = useState(true);
  const [isMobileCompletedOpen, setIsMobileCompletedOpen] = useState(false);

  const [hoveredDropdown, setHoveredDropdown] = useState<'ongoing' | 'completed' | null>(null);

  // Find the active project based on the current pathname


  // Determine what to display for the project link

  // Handle Scroll — hide on scroll down, show on scroll up
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (currentScrollY < 20) {
        // At the top — always show
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling DOWN — hide
        setIsVisible(false);
      } else {
        // Scrolling UP — show
        setIsVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}
        `}
      >
        <div className=" mx-auto px-6 md:px-12 md:px-20 flex justify-between items-center bg-transparent">

          {/* Logo Section */}
          <Link href="/" className="z-50 relative">
            <div className="relative w-32 md:w-36 md:w-40 h-auto aspect-[3/1]">
              <Image width={500} height={500} src={isScrolled ? "/icons/logo.svg" : (isLight ? "/logo/whiteLogo.svg" : "/icons/logo.svg")} alt="Mukund Realty" className="object-contain w-full h-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12 xl:gap-16">
            <Link href="/about" className={` hover:text-[#0097DC] text-lg font-light tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#505153]' : (isLight ? 'text-white' : 'text-[#505153]')}`}>About</Link>

            {/* Desktop Ongoing Projects Dropdown */}
            <div
              className="group relative py-4"
              onMouseEnter={() => setHoveredDropdown('ongoing')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link href="/projects?type=ongoing" className={`flex items-center gap-1 group-hover:text-[#0097DC] text-[16px] font-normal tracking-wide transition-colors duration-300 ${activeProject?.type === 'ongoing' ? "text-[#0097DC]" : (isScrolled ? 'text-[#505153]' : (isLight ? 'text-white' : 'text-[#505153]'))}`}>
                Ongoing Projects <ChevronDown size={14} className={`transition-transform duration-300 text-[#0097DC] ${hoveredDropdown === 'ongoing' ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {hoveredDropdown === 'ongoing' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 min-w-[320px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-[100]"
                  >
                    <div className="p-6 flex flex-col gap-1">
                      {PROJECTS.ongoing.map((p, idx) => {
                        const isActive = pathname === p.href;
                        return (
                          <motion.div
                            key={p.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 }}
                          >
                            <Link href={p.href} className="flex gap-4 py-2 px-3 rounded-lg hover:bg-gray-50 transition-all group/item">
                              {/* <div className="relative w-16 h-16 rounded overflow-hidden shadow-sm shrink-0 border border-gray-100">
                                            <Image src={p.image} alt={p.name} fill className="object-cover transition-transform duration-500 group-hover/item:scale-110" />
                                        </div> */}
                              <div className="flex flex-col justify-center">
                                <span className={`text-[15px] font-semibold transition-colors ${isActive ? "text-[#505153]" : "text-[#505153] group-hover/item:text-[#0097DC]"}`}>{p.name}</span>
                              </div>
                            </Link>
                          </motion.div>
                        );
                      })}

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Desktop Completed Projects Dropdown */}
            <div
              className="group relative py-4"
              onMouseEnter={() => setHoveredDropdown('completed')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link href="/projects?type=completed" className={`flex items-center gap-1 group-hover:text-[#0097DC] text-[16px] font-normal tracking-wide transition-colors duration-300 ${activeProject?.type === 'completed' ? "text-[#0097DC]" : (isScrolled ? 'text-[#505153]' : (isLight ? 'text-white' : 'text-[#505153]'))}`}>
                Completed Projects <ChevronDown size={14} className={`transition-transform duration-300 text-[#0097DC] ${hoveredDropdown === 'completed' ? 'rotate-180' : ''}`} />
              </Link>
              <AnimatePresence>
                {hoveredDropdown === 'completed' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] max-w-[85vw] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden z-[100]"
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-2">
                        {PROJECTS.completed.map((p, idx) => {
                          const isActive = pathname === p.href;
                          return (
                            <motion.div
                              key={p.name}
                              initial={{ opacity: 0, y: 5 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.02 }}
                            >
                              <Link
                                href={p.href}
                                className={`flex items-center gap-2 group/comp text-[14px] font-medium transition-all duration-300 py-1.5 px-3 rounded-lg hover:bg-gray-50 ${isActive ? "text-[#0097DC] bg-blue-50/50" : "text-gray-600 hover:text-[#0097DC]"}`}
                              >
                                {/* <div className="w-1.5 h-1.5 rounded-full bg-gray-200 group-hover/comp:bg-[#0097DC] transition-colors" /> */}
                                {p.name}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/insight-lists" className={`hover:text-[#0097DC] text-lg font-light tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#505153]' : (isLight ? 'text-white' : 'text-[#505153]')}`}>Insights</Link>

            <Link href="/contact" className={`hover:text-[#0097DC] text-lg font-light tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#505153]' : (isLight ? 'text-white' : 'text-[#505153]')}`}>Contact</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className={`md:hidden z-50 p-2 -mr-2 ${isScrolled ? 'text-black' : (isLight ? 'text-white' : 'text-black')}`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu strokeWidth={1.5} size={32} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-white z-[60] flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 md:p-12 border-b border-gray-50">
              <div className="w-32">
                <Image width={500} height={500} src="/icons/logo.svg" alt="Mukund Realty" className="w-full object-contain" />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -mr-2 text-black hover:bg-gray-50 rounded-full transition-colors"
              >
                <X strokeWidth={1.5} size={32} />
              </button>
            </div>

            {/* Mobile Navigation Content */}
            <div className="flex-1 overflow-y-auto bg-white px-6 md:px-12 py-8">
              <div className="flex flex-col space-y-0">

                {/* About */}
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[22px] text-[#505153] font-light py-5 border-b border-gray-100 flex justify-between items-center group"
                >
                  About
                </Link>

                {/* Ongoing Projects Mobile Accordion */}
                <div className="border-b border-gray-100">
                  <div className={`w-full flex justify-between items-center text-[22px] font-light py-5 ${activeProject?.type === 'ongoing' ? "text-[#0097DC]" : "text-[#505153]"}`}>
                    <Link href="/projects?type=ongoing" onClick={() => setIsMobileMenuOpen(false)}>
                      Ongoing Projects
                    </Link>
                    <button
                      onClick={() => setIsMobileOngoingOpen(!isMobileOngoingOpen)}
                      className="p-2 -mr-2"
                    >
                      <ChevronDown
                        size={24}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 ${isMobileOngoingOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isMobileOngoingOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-4 space-y-4">
                          <div className="flex flex-col gap-4">
                            {PROJECTS.ongoing.map(p => {
                              const isActive = pathname === p.href;
                              return (
                                <Link
                                  key={p.name}
                                  href={p.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`text-[16px] font-light transition-colors ${isActive ? "text-[#0097DC]" : "text-gray-600 hover:text-black"}`}
                                >
                                  {p.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Completed Projects Mobile Accordion */}
                <div className="border-b border-gray-100">
                  <div className={`w-full flex justify-between items-center text-[22px] font-light py-5 ${activeProject?.type === 'completed' ? "text-[#0097DC]" : "text-[#505153]"}`}>
                    <Link href="/projects?type=completed" onClick={() => setIsMobileMenuOpen(false)}>
                      Completed Projects
                    </Link>
                    <button
                      onClick={() => setIsMobileCompletedOpen(!isMobileCompletedOpen)}
                      className="p-2 -mr-2"
                    >
                      <ChevronDown
                        size={24}
                        strokeWidth={1.5}
                        className={`transition-transform duration-300 ${isMobileCompletedOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                  </div>
                  <AnimatePresence>
                    {isMobileCompletedOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-4 space-y-4">
                          <div className="flex flex-col gap-4">
                            {PROJECTS.completed.map(p => {
                              const isActive = pathname === p.href;
                              return (
                                <Link
                                  key={p.name}
                                  href={p.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className={`text-[16px] font-light transition-colors ${isActive ? "text-[#0097DC]" : "text-gray-600 hover:text-black"}`}
                                >
                                  {p.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Insights */}
                <Link
                  href="/insight-lists"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[22px] text-[#505153] font-light py-5 border-b border-gray-100 flex justify-between items-center"
                >
                  Insights
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[22px] text-[#505153] font-light py-5 border-b border-gray-100 flex justify-between items-center"
                >
                  Contact
                </Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectHeader;