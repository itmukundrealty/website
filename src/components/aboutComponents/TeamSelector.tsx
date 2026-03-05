'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { TeamMember, fetchTeamMembers } from '@/lib/api';

// --- Presentational Component: Handles the Animation ---
function TeamScrollAnimation({ members }: { members: TeamMember[] }) {
    const targetRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isScrollingRef = useRef(false);
    const frozenOffsetRef = useRef<number | null>(null);
    const prevLatest = useRef(0);

    // ── ALL HOOKS MUST BE CALLED BEFORE ANY EARLY RETURN ──────────────────────
    // Framer-motion hooks
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start start', 'end end'],
    });

    const activeProgress = useMotionValue(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const isScrollingDown = latest > prevLatest.current;
        prevLatest.current = latest;

        if (frozenOffsetRef.current !== null) {
            // We are frozen. Check if user is scrolling down into the section from above
            if (isScrollingDown && latest > 0 && targetRef.current) {
                const sectionTop = targetRef.current.getBoundingClientRect().top + window.scrollY;
                const savedOffset = frozenOffsetRef.current;
                frozenOffsetRef.current = null; // Unfreeze

                // Lock scrolling briefly so trackpad momentum doesn't override the jump
                isScrollingRef.current = true;
                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 500);

                // Instantly restore scroll position so visuals seamlessly continue
                window.scrollTo({ top: sectionTop + savedOffset, behavior: 'auto' });

                // Force the visual progress to instantly align with the restored position 
                // so it doesn't flash back to index 0 while waiting for the next scroll frame.
                // It is important that this line happens, otherwise `latest` evaluates to 0 
                // on the current frame that triggered the unfreeze.
                const sectionHeight = targetRef.current.offsetHeight - window.innerHeight;
                const restoredProgress = savedOffset / sectionHeight;
                activeProgress.set(restoredProgress);

                // Also instantly set the active index to match the restored progress
                // to prevent the counter and name from blinking '01'
                const totalItems = loopCount * members.length;
                let restoredIndex = Math.floor(restoredProgress * totalItems);

                // Keep it in bounds
                if (restoredIndex < 0) restoredIndex = 0;
                if (restoredIndex >= totalItems) restoredIndex = totalItems - 1;

                setActiveIndex(restoredIndex);
            }
        } else {
            activeProgress.set(latest);
        }
    });

    const yEvens = useTransform(activeProgress, [0, 1], ['20vh', '-1650vh']);
    const yOdds = useTransform(activeProgress, [0, 1], ['-1650vh', '20vh']);

    // ── SCROLL-UP JUMP LOGIC ───────────────────────────────────────────────────
    // Registered on document in the capture phase so nothing can swallow it first.
    // When any upward wheel occurs while we're inside this section, jump instantly
    // to the previous section — no scrolling back through all team members.
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            // If a jump is already in flight, eat every wheel event silently
            // (this neutralises trackpad momentum / inertia).
            if (isScrollingRef.current) {
                e.preventDefault();
                e.stopPropagation();
                return;
            }

            if (!targetRef.current) return;

            const section = targetRef.current;
            // getBoundingClientRect is viewport-relative; add scrollY for page-absolute position.
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + section.offsetHeight;
            const currentScroll = window.scrollY;

            // We require the scroll to be >50px past the section top to avoid
            // accidentally triggering while the user is naturally entering the section.
            const isDeepInsideSection =
                currentScroll > sectionTop + 50 &&
                currentScroll < sectionBottom;

            if (e.deltaY < 0 && isDeepInsideSection) {
                e.preventDefault();
                e.stopPropagation();

                // Freeze the visual progress at our current location
                frozenOffsetRef.current = currentScroll - sectionTop;
                isScrollingRef.current = true;

                const previousSection = section.previousElementSibling as HTMLElement | null;
                let targetTop = 0;
                if (previousSection) {
                    // Scroll to the TOP of the previous section
                    targetTop = previousSection.getBoundingClientRect().top + window.scrollY;
                }

                // Smoothly scroll to the previous section
                window.scrollTo({ top: targetTop, behavior: 'smooth' });

                // Hold lock long enough to absorb trackpad momentum and let smooth scroll finish
                setTimeout(() => {
                    isScrollingRef.current = false;
                }, 1000);
            }
        };

        // capture:true → fires before any child listener; passive:false → allows preventDefault
        document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
        return () => document.removeEventListener('wheel', handleWheel, { capture: true });
    }, []); // empty deps — relies only on refs, never stale

    // ── EARLY RETURN (after ALL hooks) ────────────────────────────────────────
    if (!members || members.length === 0) return null;

    // ── DATA ──────────────────────────────────────────────────────────────────
    // Memoize the extended array so `uniqueId`s are completely stable across renders.
    // Otherwise, every time `activeProgress` causes a render or the component remounts,
    // the ids are newly generated, which forces Framer Motion to destroy the 
    // active images and restart layout from index 0.
    const loopCount = 6;
    const extendedTeam = React.useMemo(() => {
        return Array(loopCount).fill(members).flat().map((member, i) => ({
            ...member,
            // Prefixing with 'team-' to ensure no accidental clashes if ids are simple numbers
            uniqueId: `team-${member.id}-${i}`,
        }));
    }, [members]);

    const originalLength = members.length;

    const leftColumnMembers = extendedTeam;
    const rightColumnMembers = extendedTeam;

    // ── BUTTON CONTROLS ───────────────────────────────────────────────────────
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
        } else if (targetRef.current) {
            const top = targetRef.current.offsetTop + targetRef.current.offsetHeight;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    const activeMember = extendedTeam[activeIndex];

    // ── RENDER ────────────────────────────────────────────────────────────────
    return (
        <section ref={targetRef} className="relative h-[4500vh]">
            <div className="sticky top-0 h-screen w-full overflow-hidden block font-sans">

                {/* --- DESKTOP UI (Hidden on Mobile) --- */}
                <div className="hidden md:flex h-full w-full relative">
                    {/* --- Left Half: Image Columns (Zig-Zag) --- */}
                    <div className="w-1/2 h-full flex justify-center items-start relative overflow-hidden">
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
                                                viewport={{ margin: '-48% 0px -48% 0px' }}
                                            >
                                                <div className="w-32 h-32 md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-2 border-white/20 relative">
                                                    <Image
                                                        src={member.img}
                                                        alt={member.name}
                                                        fill
                                                        className="object-cover"
                                                        loading="eager"
                                                        priority={idx < 10}
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
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
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
                            {/* <button
                                onClick={handleSkipUp}
                                className="text-[#00AEEF] hover:text-[#008CBA] transition-colors mb-2"
                            >
                                <ArrowUp size={16} strokeWidth={3} />
                            </button> */}
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
                <div className="flex md:hidden h-full w-full justify-center items-start relative overflow-hidden">
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
                                    viewport={{ margin: '-45% 0px -45% 0px' }}
                                >
                                    <div className="w-64 h-64 rounded-full overflow-hidden relative mb-6">
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
                                {/* <button
                                    onClick={handleSkipUp}
                                    className="text-white hover:text-white transition-colors mb-2"
                                >
                                    <ArrowUp size={20} strokeWidth={3} />
                                </button> */}
                                <button
                                    onClick={handleSkipDown}
                                    className="flex items-center gap-1 text-[#0097DC] hover:text-white transition-colors text-sm font-bold uppercase tracking-widest"
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
                console.error('Failed to load team members:', error);
            } finally {
                setLoading(false);
            }
        };

        loadTeam();
    }, []);

    if (loading) {
        return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
    }

    if (teamMembers.length === 0) {
        return null;
    }

    return <TeamScrollAnimation members={teamMembers} />;
}