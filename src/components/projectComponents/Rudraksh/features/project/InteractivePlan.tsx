"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import floorData from "@/data/floor-plans.json";

export function ProjectInteractivePlan() {
    const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
    const plan = floorData.plans[0];

    return (
        <section className="bg-[#111] py-24 px-6 lg:px-24 min-h-screen text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-blue-500 font-bold mb-4">Visual Search</h2>
                    <h3 className="text-4xl md:text-5xl font-light">Explore Our Building</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Building Visualization placeholder */}
                    <div className="lg:col-span-8 relative aspect-4/5 md:aspect-video bg-zinc-900 rounded-2xl overflow-hidden border border-white/5 group shadow-2xl">
                        {/* 
                            In a real scenario, this would be an Interactive SVG or 
                            a high-res image with an SVG overlay for hotspots.
                        */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-20 transition-opacity group-hover:opacity-30">
                            <span className="text-xs uppercase tracking-widest">[ Building Visualization ]</span>
                        </div>

                        {/* Interactive Hotspots (Mocked based on items) */}
                        <div className="absolute inset-0">
                            {plan.items.map((item: any) => {
                                if (item.data.ref === "leaf" || item.data.ref === "gym" || item.data.ref === "parking" || item.data.ref === "cutlery") {
                                    return (
                                        <motion.div
                                            key={item.data.ref}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="absolute cursor-pointer"
                                            style={{
                                                left: item.data.ref === "leaf" ? "20%" : item.data.ref === "gym" ? "40%" : item.data.ref === "parking" ? "60%" : "80%",
                                                top: "70%"
                                            }}
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="h-4 w-4 rounded-full bg-white/20 border border-white/40 backdrop-blur-sm animate-ping absolute" />
                                                <div className="h-4 w-4 rounded-full bg-white relative z-10" />
                                                <span className="mt-2 text-[10px] uppercase font-bold tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">
                                                    {item.data.title}
                                                </span>
                                            </div>
                                        </motion.div>
                                    );
                                }
                                return null;
                            })}
                        </div>
                    </div>

                    {/* Floor Selection & Details */}
                    <div className="lg:col-span-4 space-y-8">
                        <div>
                            <h4 className="text-lg font-medium mb-6">Select a Floor</h4>
                            <div className="grid grid-cols-4 gap-3">
                                {["1", "2", "3", "4", "5", "6", "7", "8"].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setSelectedFloor(f)}
                                        className={`h-12 flex items-center justify-center border transition-all duration-300 rounded ${selectedFloor === f
                                            ? "bg-blue-600 border-blue-600 text-white"
                                            : "border-white/10 hover:border-white/30 text-white/50"
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {selectedFloor && (
                                <motion.div
                                    key={selectedFloor}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl backdrop-blur-xl"
                                >
                                    <div className="flex justify-between items-start mb-6">
                                        <h5 className="text-3xl font-light">Floor {selectedFloor}</h5>
                                        <span className="text-xs py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-medium">
                                            Available
                                        </span>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-zinc-500 text-sm">Flats Configuration</span>
                                            <span className="text-lg font-medium">4BR Classic</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-zinc-500 text-sm">Square Area</span>
                                            <span className="text-lg font-medium">214 — 288 m²</span>
                                        </div>
                                        <div className="flex justify-between items-end border-b border-white/5 pb-4">
                                            <span className="text-zinc-500 text-sm">Ceiling Height</span>
                                            <span className="text-lg font-medium">3.4 m</span>
                                        </div>
                                    </div>

                                    <button className="w-full mt-10 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors">
                                        View Details
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {!selectedFloor && (
                            <div className="h-64 flex items-center justify-center text-zinc-600 border border-dashed border-white/10 rounded-2xl italic text-sm">
                                Select a floor to see availability
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
