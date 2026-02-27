"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const PROJECTS = {
  ongoing: [
    { name: "Rudraksh", href: "/rudraksh" }
  ],
  completed: [
    { name: "Mathura Residency", href: "/mathura" },
    { name: "Ajanta Business Center", href: "/ajanta" },
    { name: "Evanna Homes", href: "/evanna" },
    { name: "Kudva's Grandeur", href: "/kudva" },
    { name: "Madhuban Apartments", href: "/madhuban" },
    { name: "Nandagokul Apartments", href: "/nandagokul" },
    { name: "Nandadeep Apartments", href: "/nandadeep" },
    { name: "Bhargavi Gloria Residency", href: "/bhargavi" },
    { name: "Gokuldham", href: "/gokuldham" },
    { name: "Mukund Sadan", href: "/mukund-sadhan" },
    { name: "Kailash", href: "/kailash" }
  ]
};

const ProjectHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false); // Default closed

  // Handle Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // Trigger earlier for smoother feel
    };
    window.addEventListener('scroll', handleScroll);
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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
          }`}
      >
        <div className="max-w-[1920px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center bg-transparent">

          {/* Logo Section */}
          <Link href="/" className="z-50 relative">
            <div className="relative w-32 md:w-36 lg:w-40 h-auto aspect-[3/1]">
              <img src={isScrolled ? "/icons/logo.svg" : "/icons/logo.svg"} alt="Mukund Realty" className="object-contain w-full h-full" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12 xl:gap-16">
            <Link href="/about" className={` hover:text-[#0097DC] text-lg font-thin tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#505153]' : 'text-[#505153]'}`}>About</Link>

            {/* Desktop Dropdown */}
            <div className="group relative py-4">
              <button className={`flex items-center gap-1  group-hover:text-[#0097DC] text-lg font-thin tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#505153]' : 'text-[#505153]'}`}>
                Projects <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-gray-400 group-hover:text-[#0097DC]" />
              </button>

              {/* Dropdown Content */}
              <div className="absolute top-full right-0 mt-2 min-w-[50vw] bg-white/95 backdrop-blur-sm  p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-[100] border border-gray-100">
                <div className="flex gap-12">
                  {/* Ongoing Column */}
                  <div className="w-[200px] shrink-0">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-semibold border-b pb-2">Ongoing</h3>
                    <div className="flex flex-col gap-3">
                      {PROJECTS.ongoing.map(p => (
                        <Link key={p.name} href={p.href} className="group/item flex items-center justify-between transition-colors duration-300">
                          <span className="text-lg text-[#505153] group-hover/item:text-[#0097DC] transition-colors whitespace-nowrap font-medium">{p.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Completed Column */}
                  <div className="flex-1 border-l border-gray-100 pl-12">
                    <h3 className="text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-6 font-semibold border-b pb-2">Completed</h3>
                    <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                      {PROJECTS.completed.map(p => (
                        <Link key={p.name} href={p.href} className="block text-[15px] text-gray-600 hover:text-[#0097DC] transition-colors hover:translate-x-1 duration-200">{p.name}</Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <Link href="/insights" className="text-[#333333] hover:text-black text-lg font-medium tracking-wide transition-colors duration-300">Insights</Link> */}

            <Link href="/project-enquire?project=rudraksh" className={`hover:text-[#0097DC] text-lg font-thin tracking-wide transition-colors duration-300 ${isScrolled ? 'text-[#505153]' : 'text-[#505153]'}`}>Contact</Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden z-50 p-2 -mr-2 text-black"
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
                <img src="/icons/logo.svg" alt="Mukund Realty" className="w-full object-contain" />
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

                {/* Projects Accordion */}
                <div className="border-b border-gray-100">
                  <button
                    onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                    className="w-full flex justify-between items-center text-[22px] text-[#505153] font-light py-5"
                  >
                    Projects
                    <ChevronDown
                      size={24}
                      strokeWidth={1.5}
                      className={`transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileProjectsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-8 pl-2 space-y-8">

                          {/* Ongoing Projects Mobile Section */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              {/* <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">Ongoing Projects</span> */}
                              {/* <div className="h-[1px] w-full bg-gray-200"></div> */}
                            </div>
                            <div className="flex flex-col gap-3 pl-1">
                              {PROJECTS.ongoing.map(p => (
                                <Link
                                  key={p.name}
                                  href={p.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-[16px] text-gray-600 font-light hover:text-black transition-colors"
                                >
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Completed Projects Mobile Section */}
                          <div className="space-y-4">
                            <div className="flex items-center gap-4">
                              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap">Completed Projects</span>
                              <div className="h-[1px] w-full bg-gray-200"></div>
                            </div>
                            <div className="flex flex-col gap-3 pl-1">
                              {PROJECTS.completed.map(p => (
                                <Link
                                  key={p.name}
                                  href={p.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-[16px] text-gray-600 font-light hover:text-black transition-colors"
                                >
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Insights */}
                {/* <Link
                  href="/insights"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-[22px] text-[#505153] font-light py-5 border-b border-gray-100 flex justify-between items-center"
                >
                  Insights
                </Link> */}

                {/* Contact */}
                <Link
                  href="/project-enquire?project=rudraksh"
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