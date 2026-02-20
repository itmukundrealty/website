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
import Footer from "@/components/layout/Footer";
import { FLOOR_PATHS_VIEWBOX, HERO_MARKERS } from "@/utils/floorMapKedar";
import { floorData } from "@/utils/floorMapKedar";
import { FLOOR_PATHS } from "@/utils/floorMapKedar";


const FEATURES: FeatureItem[] = [
    { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
    { icon: "GamesArea", label: "Indoor & Outdoor Games Area" },
    { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },
    { icon: "Reflexology", label: "Walking Path with Reflexology" },
    { icon: "LeisureAreas", label: "Landscaped Leisure Areas" },
    { icon: "ChildrenPlay", label: "Children's Play Area" },
    { icon: "JacuzziSauna", label: "Heated Jacuzzi & Timber Sauna" },
    { icon: "GrandLobby", label: "Access Controlled Grand Entrance Lobby" },
    { icon: "OpenLibrary", label: "Open Library" },
    { icon: "WellnessClub", label: "Wellness Club" },
    { icon: "CloudKitchen", label: "24×7 Cloud Kitchen" },
    { icon: "BeautyLounge", label: "Beauty Lounge" },
    { icon: "SolarPanels", label: "Solar Electric Power Panels" },
    { icon: "Generators", label: "24×7 Backup Generators" },
    { icon: "SewageTreatment", label: "Sewage Water Treatment Plant" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "MiniTheatre", label: "Air Conditioned Mini Theatre" },
    { icon: "DanceFloor", label: "Dance / Yoga / Zumba Floor" },
    { icon: "GatheringHall", label: "Residents Gathering Hall" },
    { icon: "FirefightingSystem", label: "State-of-the-art Firefighting System" },
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
icon: "/icons/itIcon.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Business Hubs",
icon: "/icons/educationIcon.svg",
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
        imageSrc: "/images/rudrakshImages/1.webp"
    },
    {
        id: "kitchen",
        label: "Panoramic Views",
        description: "Designed to rise above its surroundings, the residences enjoy expansive views of greenery and the city beyond, creating a sense of openness and quiet retreat.",
        imageSrc: "/images/rudrakshImages/2.webp"
    },
    {
        id: "rooftop",
        label: "Thoughtful Design",
        description: "Every home is planned with clarity and balance, combining functional layouts, natural light, and refined detailing to support modern lifestyles.",
        imageSrc: "/images/rudrakshImages/3.webp"
    },
    {
        id: "location",
        label: "Connected Yet Serene",
        description: "Strategically located to offer city accessibility while remaining removed from noise and congestion, allowing residents to enjoy calm living without compromise.",
        imageSrc: "/images/rudrakshImages/4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Rooftop Infinity Swimming Pool",
        subtitle: "",
        image: "/images/rudrakshImages/2.webp",
    },
    {
        id: "wellness",
        label: "Open Air Gymnasium",
        subtitle: "",
        image: "/images/rudrakshImages/6.webp",
    },
    {
        id: "lobby",
        label: "Indoor & Outdoor Recreation",
        subtitle: "",
        image: "/images/rudrakshImages/7.webp",
    },
    {
        id: "pool",
        label: "Kids Play Area",
        subtitle: "",
        image: "/images/rudrakshImages/8.webp",
    },
    {
        id: "gym",
        label: "Outdoor Badminton Court",
        subtitle: "",
        image: "/images/rudrakshImages/9.webp",
    },
    {
        id: "sky-deck",
        label: "Spacious Visitor’s Lounge",
        subtitle: "",
        image: "/images/rudrakshImages/3.webp",
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
                    heading="Spaces That Empower Business"
                    description="Welcome to Ashoka Business Center, a commercial space created with the needs of modern businesses in mind. Every detail is planned to enhance efficiency, functionality and comfort. The development provides dependable infrastructure, smooth connectivity, and thoughtfully designed amenities. It is a place where productivity meets clarity and where businesses can operate confidently today and in the future."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                />
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Designed for Everyday Work" />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Built on" titlePart2="Real Experiences" description="Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time." />
                <CTASection title={<>The Home You’ve Been  <br /> Looking For</>} subtitle="DSpacious homes built for everyday living." mobImg="/images/rudrakshImages/ctaBg.webp" deskImg="/images/rudrakshImages/image.png" />
<Footer/>
            </div>
        </>
    );
}