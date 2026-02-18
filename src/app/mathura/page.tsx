"use client";
// import MapSection from "@/components/contact/MapSection";
import ProjectHeader from "@/components/projectComponents/Rudraksh/features/Header";
import AmenitiesSection from "@/components/projectComponents/Rudraksh/features/project/AmenitiesSection";
import CTASection from "@/components/projectComponents/Rudraksh/features/project/CTASection";
import ExperienceSection from "@/components/projectComponents/Rudraksh/features/project/ExperienceSection";
import FeaturesSection, { FeatureItem } from "@/components/projectComponents/Rudraksh/features/project/FeaturesSection";
// import { Icons } from "@/components/projectComponents/Rudraksh/features/project/FeatureIcons";
import { ProjectHero } from "@/components/projectComponents/Rudraksh/features/project/Hero";
import ProjectHighLiving from "@/components/projectComponents/Rudraksh/features/project/HighLiving";
import MapSection from "@/components/projectComponents/Rudraksh/MapSection";
// import PartnerSection from "@/c  omponents/projectComponents/Ashoka/PartnerSection";
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import Footer from "@/components/layout/Footer";
import { CompletedHero } from "@/components/projectComponents/Rudraksh/features/project/CompletedHero";

const FEATURES: FeatureItem[] = [
    // { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
    { icon: "ChildrenPlay", label: "Kid’s Play Area" },
    { icon: "Gymnasium", label: "Gymnasium" },
    { icon: "Indoor", label: "Indoor Gaming Zone" },
    { icon: "Drink", label: "Party Hall" },
    { icon: "Firesafety", label: "Fire Safety System" },
    { icon: "Security", label: "Round-o-clock Security" },
    { icon: "Wifi", label: "High Speed Internet" },
    { icon: "Generators", label: "24x7 Power Back-up" },
    { icon: "Solar", label: "Solar Electric Power Panels" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
   
];

const MAP_DATA = [
    {
        key: "city",
        title: "Regional Access",
icon: "/icons/mapLocationIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Growing Infrastructure",
icon: "/icons/infrastrucureIcon.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Commercial Proximity",
icon: "/icons/educationIcon.svg",
        points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Cultural Appeal",
icon: "/icons/culturalIcon.svg",
        points: [32, 33, 34],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Refined Living",
        description: "It's a carefully crafted world of comfort and belonging, not just a place to live. To satisfy the demands of contemporary families, we have created a safe, connected, and hospitable environment. ",
        imageSrc: "/images/mathuraImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Active Wellness",
        description: "Encourage an active and balanced lifestyle through thoughtfully designed wellness spaces. Crafted to support everyday movement and recreation, these amenities promote physical vitality and mental well-being. ",
        imageSrc: "/images/mathuraImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Assured Protection",
        description: "Enjoy complete peace of mind with an integrated security ecosystem featuring advanced surveillance, fire safety, and reliable power backup for a safe, uninterrupted living environment.",
        imageSrc: "/images/mathuraImages/liv3.png"
    },
    {
        id: "location",
        label: "Seamless Ease",
        description: "Experience effortless living through intuitive design and user-friendly features. Our thoughtfully crafted spaces prioritize your comfort and convenience, letting you focus on what truly matters.",
        imageSrc: "/images/mathuraImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Wellness Zone",
        subtitle: "",
        image: "/images/nandagokulImages/am2.png",
    },
    {
        id: "wellness",
        label: "Kids Play Area",
        subtitle: "",
        image: "/images/mathuraImages/am1.png",
    },
    {
        id: "lobby",
        label: "Smart Surveillance",
        subtitle: "",
        image: "/images/mathuraImages/am2.png",
    },
    {
        id: "pool",
        label: "Reliable Backup",
        subtitle: "",
        image: "/images/mathuraImages/am3.png",
    },
    {
        id: "gym",
        label: "Community Spaces",
        subtitle: "",
        image: "/images/mathuraImages/am4.png",
    },
    {
        id: "sky-deck",
        label: "Visitors Lounge",
        subtitle: "",
        image: "/images/mathuraImages/am5.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <CompletedHero desktopImage="/images/mathuraImages/heroDesk.png" mobileImage="/images/mathuraImages/heroMobile.png" title={<>Mathura <br className="hidden lg:block" />Residency</>} subtitle=""  variant="topRight" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Inspired Living Spaces"
                    description="Welcome to Mukund MGM Realty Mathura, a thoughtfully planned residential community created for modern families seeking affordable luxury. Every detail is designed to enhance comfort, functionality, and everyday ease. Spaciously planned homes, dependable infrastructure, and carefully curated amenities come together to create a balanced living environment. From wellness-focused facilities and secure surroundings to inviting common spaces that encourage connection, the development supports both relaxation and active lifestyles."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA}  />
                <FeaturesSection features={FEATURES} heading="Designed for Everyday Work" variant="left" />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Discover Your   <br /> Perfect Home</>} subtitle="A home that reflects your aspirations." mobImg="/images/ctaImages/mathuraDesk.png" deskImg="/images/ctaImages/mathuraMob.png" />
<Footer/>
            </div>
        </>
    );
}