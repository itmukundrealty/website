"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";

const metrics = [
  {
    value: "13+",
    label: "years of experience",
  },
  {
    value: "500+",
    label: "happy families",
  },
  {
    value: "13+",
    label: "projects",
  },
];

function CountUp({ value, startAnimation }: { value: string; startAnimation: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState("0");
  const [hasFinished, setHasFinished] = useState(false);

  const numericValue = parseInt(value.replace(/\D/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  useEffect(() => {
    if (startAnimation && !hasFinished) {
      const controls = animate(count, numericValue, {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
        onComplete: () => setHasFinished(true),
      });
      return controls.stop;
    } else if (hasFinished) {
      setDisplayValue(numericValue.toLocaleString());
    }
  }, [startAnimation, count, numericValue, hasFinished]);

  useEffect(() => {
    if (!hasFinished) {
      return rounded.on("change", (latest) => {
        setDisplayValue(latest.toLocaleString());
      });
    }
  }, [rounded, hasFinished]);

  return (
    <span className="flex flex-row items-baseline">
      {displayValue}
      <span className="font-extralight">{suffix}</span>
    </span>
  );
}

export default function MetricSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animatedIndices, setAnimatedIndices] = useState<number[]>([]);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Auto-slide on mobile
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % metrics.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Track animated indices for mobile carousel
  useEffect(() => {
    if (!animatedIndices.includes(activeSlide)) {
      setAnimatedIndices((prev) => [...prev, activeSlide]);
    }
  }, [activeSlide, animatedIndices]);

  return (
    <section ref={containerRef} className="py-12 md:py-20 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center"
            >
              <div className="text-4xl lg:text-5xl font-extralight text-[#505153] leading-tight mb-2">
                <CountUp value={metric.value} startAnimation={isInView} />
              </div>
              <span className="text-[#8E8E8E] text-[15px] md:text-[16px] font-light tracking-tight lowercase">
                {metric.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden flex flex-col items-center">
          <div className="h-[120px] flex items-center justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center text-center absolute"
              >
                <div className="text-[42px] font-extralight text-[#505153] leading-tight">
                  <CountUp 
                    value={metrics[activeSlide].value} 
                    startAnimation={animatedIndices.includes(activeSlide)} 
                  />
                </div>
                <span className="text-[#8E8E8E] text-[15px] font-light tracking-tight lowercase mt-1">
                  {metrics[activeSlide].label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicators */}
          <div className="flex items-center gap-3 mt-12">
            {metrics.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-[4px] transition-all duration-500 ease-in-out ${
                  index === activeSlide ? "w-12 bg-[#0097DC]" : "w-10 bg-gray-200"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}