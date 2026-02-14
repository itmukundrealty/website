import Image from 'next/image';
import React from 'react';

const TeamGroupSection = () => {
  return (
    <section className="bg-white overflow-hidden font-sans py-20">
      {/* Top Section: Full-bleed left image */}
      <div className="grid grid-cols-1 md:grid-cols-2  ">
        <div className="w-full">
          <Image
            src="/images/aboutImages/team.png"
            alt="Our Team"
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block"></div> {/* Empty right side as requested */}
      </div>

      {/* Bottom Section: Content with SVG background */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[500px] items-center">

        {/* Abstract SVG / Blur element at bottom left */}
        <div className="absolute lg:bottom-0 lg:-left-40 -right-10 bottom-0   pointer-events-none">
          <Image
            src="/icons/mukund.svg"
            alt="Blur"
            width={500}
            height={500}
            className="object-cover lg:w-64 lg:h-64 w-32 h-32 blur-xl -rotate-45"
          />
        </div>

        {/* Empty left spacer for text alignment */}
        <div className="hidden md:block"></div>

        {/* Text Content Area */}
        <div className="px-8 md:px-16 py-20 max-w-3xl">
          <h2 className="text-4xl md:text-5xl text-[#505153] leading-tight mb-8">
            <span className="font-thin ">The Minds that</span> <br />
            <span className="font-bold">Shape Every Space</span>
          </h2>

          <div className="space-y-6 text-[#505153] leading-relaxed text-lg">
            <p>
              From vision to delivery, our experienced teams approach every project
              with clarity and intent, shaping spaces designed for real everyday use and
              long-term relevance.
            </p>
            <p>
              Through disciplined execution and thoughtful oversight, we create
              environments that perform with consistency while building relationships
              rooted in confidence and trust.
            </p>
          </div>

          {/* <a
            href="#join"
            className="inline-flex items-center mt-10 text-[#0097DC] font-semibold hover:text-[#0097DC] transition-colors"
          >
            <span className="mr-2 hover:rotate-45 transition-all duration-300"><svg width="12" height="12" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.46206 1.49928L15.6005 1.49911M15.6005 1.49911L15.6005 13.4649M15.6005 1.49911L1.5 15.5996" stroke="#0097DC" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            </span> Join Our Team
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default TeamGroupSection;