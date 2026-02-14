'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { TeamMember, fetchTeamMembers } from '@/lib/api';

// --- Presentational Component: Handles the Animation ---
function TeamScrollAnimation({ members }: { members: TeamMember[] }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Guard clause for empty data needs to be inside or handled before calls that need data
    if (!members || members.length === 0) {
        return null;
    }

    // --- Extended Data for "Infinite" Effect ---
    const loopCount = 6;
    const extendedTeam = Array(loopCount).fill(members).flat().map((member, i) => ({
        ...member,
        uniqueId: `${member.id}-${i}`
    }));

    const originalLength = members.length;

    // --- Scroll Logic ---
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    // Split extended data into two columns for Zig-Zag
    const leftColumnMembers = extendedTeam;
    const rightColumnMembers = extendedTeam;

    // --- Transform Logic ---
    const yEvens = useTransform(scrollYProgress, [0, 1], ["20vh", "-1650vh"]);
    const yOdds = useTransform(scrollYProgress, [0, 1], ["-1650vh", "20vh"]);

    // Controls
    const handleSkipUp = () => {
        const previousSection = targetRef.current?.previousElementSibling as HTMLElement;
        if (previousSection) {
            const top = previousSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleSkipDown = () => {
        const nextSection = targetRef.current?.nextElementSibling as HTMLElement;
        if (nextSection) {
            const top = nextSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: 'smooth' });
        } else {
            if (targetRef.current) {
                const top = targetRef.current.offsetTop + targetRef.current.offsetHeight;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        }
    };

    const activeMember = extendedTeam[activeIndex];

    return (
        <section ref={targetRef} className="relative h-[4500vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden block font-sans">

                {/* --- DESKTOP UI (Hidden on Mobile) --- */}
                <div className="hidden md:flex h-full w-full relative">
                    {/* --- Left Half: Image Columns (Zig-Zag) --- */}
                    <div className="w-1/2 h-full flex justify-center items-center relative overflow-hidden">
                        <div className="flex gap-4 md:gap-8 lg:gap-12 pl-4 md:pl-16">

                            {/* Column A: Left (Moves DOWN - Passive) */}
                            <div className="flex flex-col items-center">
                                <motion.div style={{ y: yOdds }} className="flex flex-col gap-8 md:gap-16">
                                    {leftColumnMembers.map((member) => (
                                        <div
                                            key={member.uniqueId}
                                            className="relative opacity-30 scale-90 transition-all duration-500 ease-out"
                                        >
                                            <div className="w-32 h-32 md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-white/20 relative">
                                                <Image
                                                    src={member.img}
                                                    alt={member.name}
                                                    fill
                                                    className="object-cover "
                                                    loading="eager"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Column B: Right (Moves UP - Active) */}
                            <div className="flex flex-col items-center pt-[15vh]">
                                <motion.div style={{ y: yEvens }} className="flex flex-col gap-8 md:gap-16">
                                    {rightColumnMembers.map((member, idx) => {
                                        const indexInExtended = extendedTeam.findIndex(m => m.uniqueId === member.uniqueId);
                                        const isActive = indexInExtended === activeIndex;

                                        return (
                                            <motion.div
                                                key={member.uniqueId}
                                                className={`relative transition-all duration-500 ease-out
                                                    ${isActive ? 'opacity-100 scale-105 z-10 grayscale-0' : 'opacity-30 scale-90'}`}
                                                onViewportEnter={() => setActiveIndex(indexInExtended)}
                                                viewport={{ margin: "-48% 0px -48% 0px" }}
                                            >
                                                <div className="w-32 h-32 md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-white/20 relative">
                                                    <Image
                                                        src={member.img}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                        loading="eager" // Ensure images invoke network request immediately
                                                        priority={idx < 10} // Prioritize initial set
                                                    />
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            </div>

                        </div>
                    </div>

                    {/* --- Right Half: Fixed Details --- */}
                    <div className="w-1/2 h-full relative z-20">
                        <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-20 pointer-events-none">
                            <AnimatePresence>
                                <motion.div
                                    key={activeMember?.uniqueId || 'empty'}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }} // Slightly smoother
                                    className="absolute top-1/2 left-0 -translate-y-1/2 w-full px-8 md:px-20 flex flex-col items-start"
                                >
                                    <h2 className="text-5xl md:text-7xl text-[#505153] font-bold leading-tight mb-4">
                                        {activeMember?.name}
                                    </h2>
                                    <p className="text-xl md:text-3xl text-[#505153] font-light">
                                        {activeMember?.role}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* --- Controls (Desktop) --- */}
                    <div className="absolute right-8 md:right-16 bottom-16 flex flex-col items-end gap-2 z-50">
                        <div className="font-mono text-2xl flex items-baseline gap-2 text-gray-400">
                            <span className="font-bold text-[#505153] text-3xl">
                                {String((activeIndex % originalLength) + 1).padStart(2, '0')}
                            </span>
                            <span className="text-2xl font-light">–</span>
                            <span className="text-2xl font-light">{originalLength}</span>
                        </div>

                        <div className="flex flex-col items-start mt-4">
                            <button
                                onClick={handleSkipUp}
                                className="text-[#00AEEF] hover:text-[#008CBA] transition-colors mb-2"
                            >
                                <ArrowUp size={16} strokeWidth={3} />
                            </button>
                            <button
                                onClick={handleSkipDown}
                                className="flex items-center gap-2 text-[#00AEEF] hover:text-[#008CBA] transition-colors text-sm font-bold tracking-widest uppercase"
                            >
                                <ArrowDown size={16} strokeWidth={3} />
                                Skip this Section
                            </button>
                        </div>
                    </div>
                </div>

                {/* --- MOBILE UI (Hidden on Desktop) --- */}
                <div className="flex md:hidden h-full w-full justify-center items-center relative overflow-hidden">
                    <motion.div style={{ y: yEvens }} className="flex flex-col gap-12 items-center pt-[10vh]">
                        {extendedTeam.map((member) => {
                            const indexInExtended = extendedTeam.findIndex(m => m.uniqueId === member.uniqueId);
                            const isActive = indexInExtended === activeIndex;

                            return (
                                <motion.div
                                    key={member.uniqueId}
                                    className={`flex flex-col items-center justify-center transition-all duration-500 ease-out
                                        ${isActive ? 'opacity-100 scale-105 z-10' : 'opacity-60 scale-90 blur-[1px]'}`}
                                    onViewportEnter={() => setActiveIndex(indexInExtended)}
                                    viewport={{ margin: "-45% 0px -45% 0px" }}
                                >
                                    <div className="w-64 h-64 rounded-full overflow-hidden relative  mb-6">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="text-center px-4">
                                        <h3 className={`text-3xl font-bold mb-2 transition-colors ${isActive ? 'text-[#505153]' : 'text-gray-300'}`}>
                                            {member.name}
                                        </h3>
                                        <p className={`text-lg font-light transition-colors ${isActive ? 'text-[#505153]' : 'text-gray-300'}`}>
                                            {member.role}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>

                    {/* Mobile Controls */}
                    <div className="absolute right-6 bottom-32 font-mono text-xl flex items-baseline gap-2 text-gray-400 z-50">
                        <span className="font-bold text-[#505153] text-2xl">
                            {String((activeIndex % originalLength) + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xl font-light">–</span>
                        <span className="text-xl font-light">{originalLength}</span>
                    </div>

                    <div className="absolute bottom-0 w-full flex justify-center z-50 pointer-events-none">
                        <div className="relative w-80 h-24 pointer-events-auto">
                            <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-full h-[200%] flex flex-col items-center justify-start pt-8">
                                <button
                                    onClick={handleSkipUp}
                                    className="text-white hover:text-white transition-colors mb-2"
                                >
                                    <ArrowUp size={20} strokeWidth={3} />
                                </button>
                                <button
                                    onClick={handleSkipDown}
                                    className="flex items-center gap-1 text-white hover:text-white transition-colors text-sm uppercase tracking-widest"
                                >
                                    <ArrowDown size={20} className="mb-1" />
                                    Skip this Section
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

// --- Container Component: Handles Data Fetching ---
export default function TeamSelector() {
    const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadTeam = async () => {
            try {
                const data = await fetchTeamMembers();
                setTeamMembers(data);
            } catch (error) {
                console.error("Failed to load team members:", error);
            } finally {
                setLoading(false);
            }
        };

        loadTeam();
    }, []);

    if (loading) {
        // Optional: Add a loading state UI here if desired
        return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
    }

    if (teamMembers.length === 0) {
        return null; // Or some empty state
    }

    return <TeamScrollAnimation members={teamMembers} />;
}