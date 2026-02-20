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
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import Link from "next/link";

const GALLERY_IMAGES = [
    "/images/kedarImage/ft1.png",
    "/images/kedarImage/ft2.png",
    "/images/kedarImage/ft3.png",
    "/images/kedarImage/ft4.png",
    "/images/kedarImage/ft5.png",
    "/images/kedarImage/ft6.png",
];
import Footer from "@/components/layout/Footer";
import { FLOOR_PATHS_VIEWBOX, HERO_MARKERS } from "@/utils/floorMapKedar";
import { floorData } from "@/utils/floorMapKedar";
import { FLOOR_PATHS } from "@/utils/floorMapKedar";


const FEATURES: FeatureItem[] = [
    { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
    { icon: "GamesArea", label: "Indoor & Outdoor Games Area" },
    { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },
    { icon: "Reflexology", label: "Walking Path with Reflexology" },
    { icon: "LeisureAreas", label: "Tree Court" },
    { icon: "ChildrenPlay", label: "Kid’s Play Area" },
    { icon: "BadmintonCourt", label: "Badminton Court" },
    { icon: "OpenTheatre", label: "Open Air Theatre" },
    { icon: "OpenLibrary", label: "Library" },
    { icon: "WellnessClub", label: "Meditation Pavilion" },
    { icon: "Indoor", label: "Recreational Space" },
    { icon: "Visitorslounge", label: "Visitor Lounge" },
    { icon: "SolarPanels", label: "Solar Electric Power Panels" },
    { icon: "Generators", label: "24×7 Backup Generators" },
    { icon: "SewageTreatment", label: "Sewage Water Treatment Plant" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },

];

const MAP_DATA = [
    {
        key: "city",
        title: "City Road Access",
        icon: "/icons/cityIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Schools & Hospitals",
        icon: "/icons/educationIcon.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Business Hubs",
        icon: "/icons/itIcon.svg",
        points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Lifestyle Conveniences",
        icon: "/icons/everydayIcon.svg",
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
        label: "Elevated Living",
        description: "More than just homes, Kedar offers a refined living experience shaped by comfort, privacy, and thoughtful design that supports everyday ease and long term well being.",
        imageSrc: "/images/kedarImage/liv1.png"
    },
    {
        id: "kitchen",
        label: "Panoramic Views",
        description: "Designed to rise above its surroundings, the residences enjoy expansive views of greenery and the city beyond, creating a sense of openness and quiet retreat.",
        imageSrc: "/images/kedarImage/liv2.png"
    },
    {
        id: "rooftop",
        label: "Thoughtful Design",
        description: "Every home is planned with clarity and balance, combining functional layouts, natural light, and refined detailing to support modern lifestyles.",
        imageSrc: "/images/kedarImage/liv3.png"
    },
    {
        id: "location",
        label: "Connected Yet Serene",
        description: "Strategically located to offer city accessibility while remaining removed from noise and congestion, allowing residents to enjoy calm living without compromise.",
        imageSrc: "/images/kedarImage/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Rooftop Infinity Swimming Pool",
        subtitle: "",
        image: "/images/kedarImage/am1.png",
    },
    {
        id: "wellness",
        label: "Open Air Gymnasium",
        subtitle: "",
        image: "/images/kedarImage/am2.png",
    },
    {
        id: "lobby",
        label: "Indoor & Outdoor Recreation",
        subtitle: "",
        image: "/images/kedarImage/am3.png",
    },
    {
        id: "pool",
        label: "Kids Play Area",
        subtitle: "",
        image: "/images/kedarImage/am4.png",
    },
    {
        id: "gym",
        label: "Outdoor Badminton Court",
        subtitle: "",
        image: "/images/kedarImage/am5.png",
    },
    {
        id: "sky-deck",
        label: "Spacious Visitor’s Lounge",
        subtitle: "",
        image: "/images/kedarImage/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <ProjectHero FLOOR_PATHS={FLOOR_PATHS} FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX} HERO_MARKERS={HERO_MARKERS} floorData={floorData} heroImageDesktop="/images/kedarImage/hero.png" heroImageMobile="/images/kedarImage/heroMobile.png" />
                <ProjectHighLiving data={SECTION_DATA} />
                <HighlivingSection
                    heading="Redefining the Essence of Living"
                    description="Introducing Kedar, a contemporary residential address shaped by Mukund MGM Realty’s long-standing approach to quality and value. Thoughtfully planned duplex residences offer generous layouts, refined interiors, and a sense of openness that supports both everyday comfort and special moments. With carefully selected amenities and a location at the heart of Mangalore, Kedar brings homes that feel considered and easy to live in for years to come."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                />
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Designed for Everyday Work" completed={false} galleryImages={GALLERY_IMAGES} />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Built on" titlePart2="Real Experiences" description="Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time." />
                <CTASection title={<>The Home You’ve Been  <br /> Looking For</>} subtitle="DSpacious homes built for everyday living." mobImg="/images/ctaimages/keradDesk.png" deskImg="/images/ctaimages/kedarDesk.png" />
                <Footer />
            </div>
        </>
    );
}