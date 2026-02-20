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
// import PartnerSection from "@/components/projectComponents/Ashoka/PartnerSection";
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import Footer from "@/components/layout/Footer";
import { CompletedHero } from "@/components/projectComponents/Rudraksh/features/project/CompletedHero";

const FEATURES: FeatureItem[] = [
    { icon: "CarParking", label: "Two-Level Parking" },
    { icon: "Bag", label: "Luxury Retail Spaces" },
    { icon: "FineDining", label: "Fine Dining Zones" },
    { icon: "Generators", label: "24x7 Power Back-up" },
    { icon: "LaptopGraph", label: "Managed Workspace" },
    { icon: "Escalator", label: "Escalator Connectivity" },
    { icon: "Management", label: "24×7 Facility Management" },
    { icon: "ModernRestroom", label: "Modern Restroom Facilities" },
    { icon: "Visitorslounge", label: "Premium Business Lounge" },
    { icon: "Security", label: "Round-o-clock Security" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "Firesafety", label: "Fire Safety System" },
    { icon: "AmbientLighting", label: "Smart Ambient Lighting" },



];

const MAP_DATA = [
    {
        key: "city",
        title: "City Connectivity",
        icon: "/icons/cityIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Economic Hub",
        icon: "/icons/businessIcon.svg",
        points: [49, 50],
        viewport: {
            center: { lat: 13.0036, lng: 74.7994 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Industrial Catchment",
        icon: "/icons/industrialIcon.svg",
        points: [51, 52, 53, 54, 55],
        viewport: {
            center: { lat: 13.0000, lng: 74.8000 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Port & Airport Reach",
        icon: "/icons/portIcon.svg",
        points: [56],
        viewport: {
            center: { lat: 13.0204, lng: 74.7921 },
            zoom: 14
        }
    },
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Spacious Interiors",
        description: "Designed with openness and flexibility in mind, the interiors offer expansive layouts that adapt seamlessly to diverse business needs. Every space is planned to enhance functionality, comfort, and an elevated professional presence.",
        imageSrc: "/images/kudvaImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Commercial Spaces",
        description: "Versatile retail and office environments thoughtfully structured to support productivity, customer engagement, and long-term growth. The design fosters visibility, accessibility, and operational efficiency.",
        imageSrc: "/images/kudvaImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Strategic Layout",
        description: "Thoughtfully planned floor configurations that enhance visibility, movement, and functional efficiency. Designed to support seamless circulation and optimal space utilization, the layout ensures a smooth experience for businesses and visitors alike while maximizing commercial potential.",
        imageSrc: "/images/kudvaImages/liv3.png"
    },
    {
        id: "location",
        label: "Professional Ecosystem",
        description: "A dynamic setting that brings together retail, offices, and lifestyle establishments, creating an environment that encourages collaboration, steady footfall, and sustainable business success.",
        imageSrc: "/images/kudvaImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Retail Boutiques",
        subtitle: "",
        image: "/images/kudvaImages/am1.png",
    },
    {
        id: "wellness",
        label: "Dining Experiences",
        subtitle: "",
        image: "/images/kudvaImages/am2.png",
    },
    {
        id: "lobby",
        label: "Entertainment Spaces",
        subtitle: "",
        image: "/images/kudvaImages/am3.png",
    },
    {
        id: "pool",
        label: "Business Suites",
        subtitle: "",
        image: "/images/kudvaImages/am4.png",
    },
    {
        id: "gym",
        label: "Ample Parking",
        subtitle: "",
        image: "/images/kudvaImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "Spacious Interiors",
        subtitle: "",
        image: "/images/kudvaImages/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <CompletedHero title={<>Kudva's Grandeur</>} mobileVariant="topRight" subtitle="" variant="rightCentered" desktopImage="/images/kudvaImages/heroDesk.png" mobileImage="/images/kudvaImages/heroMobile.png" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Refined Commercial Living"
                    description= "Greetings from Kudva's Grandeur, a well-planned business center in Surathkal that unites large, flexible workspaces and thriving business activity under one roof. This complex is designed to accommodate a variety of business needs, from retail and dining to offices and showrooms, and is situated in one of the most vibrant neighborhoods in the area. Business, lifestyle, and daily necessities can all coexist peacefully in Kudva's Grandeur thanks to its spacious interiors that can be customized to meet specific needs, high-quality construction, and thoughtful amenities like plenty of parking and contemporary utilities."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Curated for Commercial Excellence" variant="left" completed={true} />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Elevate Your   <br />Business Presence</>} subtitle="A space designed to amplify your success." mobImg="/images/ctaImages/kudvaMob.png" deskImg="/images/ctaImages/kudvaDesk.png" />
                <Footer />
            </div>
        </>
    );
}