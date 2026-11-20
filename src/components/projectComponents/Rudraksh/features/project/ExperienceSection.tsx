"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { Autoplay, EffectFade } from 'swiper/modules';
import { fetchTestimonials, Testimonial, DEFAULT_TESTIMONIALS } from "@/lib/api";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function getYouTubeEmbedWithApi(src: string): string {
    if (!src) return '';
    try {
        const url = new URL(src);
        url.searchParams.set('enablejsapi', '1');
        return url.toString();
    } catch {
        const joinChar = src.includes('?') ? '&' : '?';
        return `${src}${joinChar}enablejsapi=1`;
    }
}

interface ExperienceSectionProps {
    titlePart1: string;
    titlePart2: string;
    description: string;
    accentColor?: string;
    titlePart2Light?: boolean;
}

export default function ExperienceSection({
    titlePart1 = "Built on",
    titlePart2 = "Real Experiences",
    description = "Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time.",
    accentColor = "#0097DC",
    titlePart2Light = false
}: ExperienceSectionProps) {
    const [testimonials, setTestimonials] = useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperClass | null>(null);

    const iframeRefs = useRef<Map<string | number, HTMLIFrameElement>>(new Map());
    const playerInstances = useRef<Map<string | number, any>>(new Map());
    const isVideoPlayingRef = useRef<boolean>(false);

    const pauseAllVideos = useCallback(() => {
        iframeRefs.current.forEach((iframe) => {
            try {
                iframe?.contentWindow?.postMessage(
                    JSON.stringify({ event: 'command', func: 'pauseVideo', args: [] }),
                    '*'
                );
            } catch {}
        });

        playerInstances.current.forEach((player) => {
            try {
                if (typeof player?.pauseVideo === 'function') {
                    player.pauseVideo();
                }
            } catch {}
        });

        isVideoPlayingRef.current = false;
    }, []);

    const onVideoStateChange = useCallback((isPlaying: boolean) => {
        isVideoPlayingRef.current = isPlaying;
        const swiper = swiperRef.current;
        if (!swiper || !swiper.autoplay) return;

        if (isPlaying) {
            swiper.autoplay.stop();
        } else {
            swiper.autoplay.start();
        }
    }, []);

    // Listen to postMessage from YouTube iframe
    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (
                typeof event.origin === 'string' &&
                !event.origin.includes('youtube.com') &&
                !event.origin.includes('youtube-nocookie.com')
            ) {
                return;
            }

            let data = event.data;
            if (typeof data === 'string') {
                try {
                    data = JSON.parse(data);
                } catch {
                    return;
                }
            }

            if (!data) return;

            if (data.event === 'initialDelivery' || data.event === 'onReady') {
                iframeRefs.current.forEach((iframe) => {
                    try {
                        iframe?.contentWindow?.postMessage(
                            JSON.stringify({ event: 'listening' }),
                            '*'
                        );
                    } catch {}
                });
            }

            let playerState: number | undefined;

            if (data.event === 'onStateChange' && typeof data.info === 'number') {
                playerState = data.info;
            } else if (
                data.event === 'infoDelivery' &&
                data.info &&
                typeof data.info.playerState === 'number'
            ) {
                playerState = data.info.playerState;
            }

            if (playerState !== undefined) {
                if (playerState === 1 || playerState === 3) {
                    onVideoStateChange(true);
                } else if (playerState === 0 || playerState === 2) {
                    onVideoStateChange(false);
                }
            }
        };

        window.addEventListener('message', handleMessage);
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, [onVideoStateChange]);

    // Load YouTube IFrame API and hook into players for official event delivery
    useEffect(() => {
        if (typeof window !== 'undefined' && !(window as any).YT) {
            const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]');
            if (!existingScript) {
                const tag = document.createElement('script');
                tag.src = 'https://www.youtube.com/iframe_api';
                const firstScriptTag = document.getElementsByTagName('script')[0];
                firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
            }
        }

        const initPlayers = () => {
            const YT = (window as any).YT;
            if (!YT || !YT.Player) return;

            iframeRefs.current.forEach((iframe, id) => {
                if (!iframe || playerInstances.current.has(id)) return;

                try {
                    const player = new YT.Player(iframe, {
                        events: {
                            onStateChange: (event: any) => {
                                const state = event.data;
                                if (state === 1 || state === 3) {
                                    onVideoStateChange(true);
                                } else if (state === 0 || state === 2) {
                                    onVideoStateChange(false);
                                }
                            },
                        },
                    });
                    playerInstances.current.set(id, player);
                } catch {}
            });
        };

        if ((window as any).YT && (window as any).YT.Player) {
            initPlayers();
        } else if (typeof window !== 'undefined') {
            const prevHandler = (window as any).onYouTubeIframeAPIReady;
            (window as any).onYouTubeIframeAPIReady = () => {
                if (typeof prevHandler === 'function') prevHandler();
                initPlayers();
            };
        }
    }, [testimonials, onVideoStateChange]);

    // Detect click into iframe via window blur for instantaneous pause before buffering
    useEffect(() => {
        const handleBlur = () => {
            setTimeout(() => {
                const activeEl = document.activeElement;
                if (activeEl && activeEl.tagName === 'IFRAME') {
                    let isOurIframe = false;
                    iframeRefs.current.forEach((iframe) => {
                        if (iframe === activeEl) isOurIframe = true;
                    });
                    if (isOurIframe) {
                        onVideoStateChange(true);
                    }
                }
            }, 50);
        };

        window.addEventListener('blur', handleBlur);
        return () => {
            window.removeEventListener('blur', handleBlur);
        };
    }, [onVideoStateChange]);

    useEffect(() => {
        let isMounted = true;
        fetchTestimonials().then((data) => {
            if (isMounted && data && data.length > 0) {
                setTestimonials(data);
            }
        }).catch((err) => {
            console.error("Error loading testimonials in Rudraksh ExperienceSection:", err);
        });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <section className="py-24 bg-white relative overflow-hidden font-sans">
            <div className=" mx-auto px-6 md:px-20 xl:px-54 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                    {/* --- Left Content (Title & Pagination) --- */}
                    <div className="md:col-span-5 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h2 className="text-4xl md:text-5xl text-[#1E1E1E] leading-tight font-light mb-2">
                                {titlePart1}
                            </h2>
                            <h2 className={`text-4xl md:text-5xl text-[#1E1E1E] leading-tight ${titlePart2Light ? 'font-light' : 'font-medium'}`}>
                                {titlePart2}
                            </h2>
                        </motion.div>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="text-base text-gray-500 leading-relaxed font-light max-w-sm"
                        >
                            {description}
                        </motion.p>

                        {/* Custom Pagination Container (Desktop) */}
                        <div className="hidden md:flex flex-col gap-8 justify-start pt-8">
                            <div className="flex gap-2 justify-start">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            swiperRef.current?.slideTo(index);
                                            pauseAllVideos();
                                        }}
                                        className={`h-1 transition-all duration-300 ${activeIndex === index ? "w-10" : "w-5 bg-[#e5e7eb]"
                                            }`}
                                        style={{ backgroundColor: activeIndex === index ? accentColor : undefined }}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => {
                                        swiperRef.current?.slidePrev();
                                        pauseAllVideos();
                                    }}
                                    disabled={activeIndex === 0}
                                    className={`p-2 rounded-full border border-gray-200 transition-all duration-300 group ${
                                        activeIndex === 0 
                                        ? 'opacity-30 cursor-not-allowed' 
                                        : 'text-[#505153] hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)] hover:text-white cursor-pointer'
                                    }`}
                                    style={{
                                        ['--hover-bg' as any]: accentColor,
                                        ['--hover-border' as any]: accentColor
                                    }}
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft size={20} strokeWidth={1.5} />
                                </button>
                                <button 
                                    onClick={() => {
                                        swiperRef.current?.slideNext();
                                        pauseAllVideos();
                                    }}
                                    disabled={activeIndex === testimonials.length - 1}
                                    className={`p-2 rounded-full border border-gray-200 transition-all duration-300 group ${
                                        activeIndex === testimonials.length - 1 
                                        ? 'opacity-30 cursor-not-allowed' 
                                        : 'text-[#505153] hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)] hover:text-white cursor-pointer'
                                    }`}
                                    style={{
                                        ['--hover-bg' as any]: accentColor,
                                        ['--hover-border' as any]: accentColor
                                    }}
                                    aria-label="Next slide"
                                >
                                    <ChevronRight size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* --- Right Content (Swiper) --- */}
                    <div className="md:col-span-7 relative pl-0 md:pl-10">
                        <Swiper
                            modules={[Autoplay, EffectFade]}
                            spaceBetween={30}
                            slidesPerView={1}
                            effect={'fade'}
                            fadeEffect={{ crossFade: true }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            onSlideChange={(swiper) => {
                                setActiveIndex(swiper.activeIndex);
                                pauseAllVideos();
                                swiper.autoplay?.start();
                            }}
                            className="w-full !overflow-visible"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className="flex flex-col gap-6">
                                        {/* Video/Image Container - NOW IFRAME */}
                                        <div className="relative h-[30vh] md:h-[55vh] w-full overflow-hidden bg-gray-100 group">
                                            <iframe
                                                ref={(el) => {
                                                    if (el) {
                                                        iframeRefs.current.set(item.id, el);
                                                    } else {
                                                        iframeRefs.current.delete(item.id);
                                                    }
                                                }}
                                                id={`yt-player-proj-${item.id}`}
                                                src={getYouTubeEmbedWithApi(item.iframeSrc)}
                                                title={item.name}
                                                className="w-full h-full object-cover border-0"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                allowFullScreen
                                                loading="lazy"
                                                referrerPolicy="no-referrer-when-downgrade"
                                                onLoad={(e) => {
                                                    try {
                                                        e.currentTarget.contentWindow?.postMessage(
                                                            JSON.stringify({ event: 'listening' }),
                                                            '*'
                                                        );
                                                    } catch {}
                                                }}
                                            />
                                        </div>

                                        {/* Text Content */}
                                        <div className="text-left space-y-1 relative pl-2">
                                            <h3 className="text-xl md:text-3xl text-[#1E1E1E] font-light">
                                                {item.name}
                                            </h3>
                                            <p className="font-medium text-sm md:text-base" style={{ color: accentColor }}>
                                                {item.role}
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Pagination Container (Mobile) */}
                        <div className="flex md:hidden flex-col items-center gap-6 justify-center pt-8">
                            <div className="flex gap-2 justify-center">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            swiperRef.current?.slideTo(index);
                                            pauseAllVideos();
                                        }}
                                        className={`h-1 transition-all duration-300 ${activeIndex === index ? "w-10" : "w-5 bg-[#e5e7eb]"
                                            }`}
                                        style={{ backgroundColor: activeIndex === index ? accentColor : undefined }}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                            {/* Navigation Arrows */}
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => {
                                        swiperRef.current?.slidePrev();
                                        pauseAllVideos();
                                    }}
                                    disabled={activeIndex === 0}
                                    className={`p-2 rounded-full border border-gray-200 transition-all duration-300 group ${
                                        activeIndex === 0 
                                        ? 'opacity-30 cursor-not-allowed' 
                                        : 'text-[#505153] hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)] hover:text-white cursor-pointer'
                                    }`}
                                    style={{
                                        ['--hover-bg' as any]: accentColor,
                                        ['--hover-border' as any]: accentColor
                                    }}
                                    aria-label="Previous slide"
                                >
                                    <ChevronLeft size={20} strokeWidth={1.5} />
                                </button>
                                <button 
                                    onClick={() => {
                                        swiperRef.current?.slideNext();
                                        pauseAllVideos();
                                    }}
                                    disabled={activeIndex === testimonials.length - 1}
                                    className={`p-2 rounded-full border border-gray-200 transition-all duration-300 group ${
                                        activeIndex === testimonials.length - 1 
                                        ? 'opacity-30 cursor-not-allowed' 
                                        : 'text-[#505153] hover:bg-[var(--hover-bg)] hover:border-[var(--hover-border)] hover:text-white cursor-pointer'
                                    }`}
                                    style={{
                                        ['--hover-bg' as any]: accentColor,
                                        ['--hover-border' as any]: accentColor
                                    }}
                                    aria-label="Next slide"
                                >
                                    <ChevronRight size={20} strokeWidth={1.5} />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
