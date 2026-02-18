import React from "react";
import Image from "next/image";

// --- Types ---
type LogoItem = {
    id: string;
    src: string;
    alt: string;
};

// --- Logos (PNG Sources) ---
// Top Row: 1 to 6
const TopLogos: LogoItem[] = [
    { id: "logo-1", src: "/images/ashokaImages/partners/1.png", alt: "Partner 1" },
    { id: "logo-2", src: "/images/ashokaImages/partners/2.png", alt: "Partner 2" },
    { id: "logo-3", src: "/images/ashokaImages/partners/3.png", alt: "Partner 3" },
    { id: "logo-4", src: "/images/ashokaImages/partners/4.png", alt: "Partner 4" },
    { id: "logo-5", src: "/images/ashokaImages/partners/5.png", alt: "Partner 5" },
    { id: "logo-6", src: "/images/ashokaImages/partners/6.png", alt: "Partner 6" },
];

// Bottom Row: 7 to 12
const BottomLogos: LogoItem[] = [
    { id: "logo-7", src: "/images/ashokaImages/partners/7.png", alt: "Partner 7" },
    { id: "logo-8", src: "/images/ashokaImages/partners/8.png", alt: "Partner 8" },
    { id: "logo-9", src: "/images/ashokaImages/partners/9.png", alt: "Partner 9" },
    { id: "logo-10", src: "/images/ashokaImages/partners/10.png", alt: "Partner 10" },
    { id: "logo-11", src: "/images/ashokaImages/partners/11.png", alt: "Partner 11" },
    { id: "logo-12", src: "/images/ashokaImages/partners/12.png", alt: "Partner 12" },
];


export default function PartnerSection() {
    return (
        <section className="w-full bg-[white] pt-[80px] lg:py-[100px] overflow-hidden">
            {/* --- Top Row: Scroll Right --- */}
            <div className="w-full flex overflow-hidden mb-12 lg:mb-16">
                <div className="flex animate-scroll-right w-max will-change-transform">
                    {/* Double the logos for seamless loop - Tripling to ensure screen coverage and smooth loop */}
                    {[...TopLogos, ...TopLogos, ...TopLogos, ...TopLogos, ...TopLogos, ...TopLogos].map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="mx-0 lg:mx-8 flex items-center justify-center min-w-[200px] relative h-[45px] lg:h-[65px]">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={180}
                                height={70}
                                className="object-contain h-full w-auto grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* --- Center Content --- */}
            <div className="container mx-auto px-4 max-w-[1000px] text-center mb-12 lg:mb-16">
                <h2 className="text-[36px] md:text-[48px] lg:text-[54px] font-normal text-[#4A4A4A] mb-3 tracking-wide leading-tight">
                    Partners with Leading Brands.
                </h2>
                <p className="text-[15px] md:text-[17px] lg:text-[19px] font-light text-[#9E9E9E] max-w-2xl mx-auto leading-relaxed">
                    We create spaces tailored to the needs of established firms to fast-growing startups.
                </p>
            </div>

            {/* --- Bottom Row: Scroll Left --- */}
            <div className="w-full flex overflow-hidden">
                <div className="flex animate-scroll-left w-max will-change-transform">
                    {/* Double the logos for seamless loop */}
                    {[...BottomLogos, ...BottomLogos, ...BottomLogos, ...BottomLogos, ...BottomLogos, ...BottomLogos].map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="mx-0 lg:mx-8 flex items-center justify-center min-w-[200px] relative h-[45px] lg:h-[65px]">
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={180}
                                height={70}
                                className="object-contain h-full w-auto grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}