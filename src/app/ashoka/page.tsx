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
import PartnerSection from "@/components/projectComponents/ashoka/PartnerSection";
import { HERO_MARKERS } from "@/utils/floorMapAshoka.js";
import { floorData } from "@/utils/floorMapAshoka.js";
import { FLOOR_PATHS } from "@/utils/floorMapAshoka.js";
import { FLOOR_PATHS_VIEWBOX } from "@/utils/floorMapAshoka.js";

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
        title: "Regional & City Access",
        icon: "/icons/regionalIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Workforce",
        icon: "/icons/workForceIcon.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Commercial Proximity",
        icon: "/icons/commercial.svg",
        points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Digital Infrastructure",
        icon: "/icons/digitalIcon.svg",
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
        label: "Green Workspaces",
        description: "It's more than just a workspace; it's a world unto itself. We craft a comfortable, secure and professional environment tailored to meet the needs of a diverse range of corporate businesses, surrounded by lush greenery and the beauty of Mother Nature in full bloom.",
        imageSrc: "/images/rudrakshImages/1.webp"
    },
    {
        id: "kitchen",
        label: "Smart Tech",
        description: "Harnessing contemporary, intelligent technology enables us to streamline daily tasks, enhancing productivity and efficiency swiftly. What were once manual and time-consuming activities can now be efficiently accomplished through digital tools, self-automated systems and app management.",
        imageSrc: "/images/rudrakshImages/2.webp"
    },
    {
        id: "rooftop",
        label: "Sustainability",
        description: "Embrace sustainability through our comprehensive and energy-conscious ecosystem, crafted to mitigate our environmental footprint. Designed with sustainable systems that support responsible water and energy use.",
        imageSrc: "/images/rudrakshImages/3.webp"
    },
    {
        id: "location",
        label: "Efficiency",
        description: "Immerse yourself in the global community by embracing a fusion of modern sophistication and natural allure. Our workspace culture celebrates local ethnic artistry, harnessing its power to spark creativity, alleviate stress and cultivate a vibrant positive atmosphere.",
        imageSrc: "/images/rudrakshImages/4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Curated Workspaces",
        subtitle: "",
        image: "/images/rudrakshImages/2.webp",
    },
    {
        id: "wellness",
        label: "Recreational Zones",
        subtitle: "",
        image: "/images/rudrakshImages/6.webp",
    },
    {
        id: "lobby",
        label: "On Call Training/ Board Rooms",
        subtitle: "",
        image: "/images/rudrakshImages/7.webp",
    },
    {
        id: "pool",
        label: "Designated Ares for Customer / Client Service",
        subtitle: "",
        image: "/images/rudrakshImages/8.webp",
    },
    {
        id: "gym",
        label: "Auditorium & Banquet Hall",
        subtitle: "",
        image: "/images/rudrakshImages/9.webp",
    },
    {
        id: "sky-deck",
        label: "3 Tier Secured Parking",
        subtitle: "",
        image: "/images/rudrakshImages/3.webp",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <ProjectHero FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX} HERO_MARKERS={HERO_MARKERS} floorData={floorData} FLOOR_PATHS={FLOOR_PATHS} heroImageDesktop="/images/ashokaImages/hero.png" heroImageMobile="/images/ashokaImages/heroMobile.png" />
                <ProjectHighLiving data={SECTION_DATA} />
                <HighlivingSection
                    heading="Spaces That Empower Business"
                    description="Welcome to Ashoka Business Center, a commercial space created with the needs of modern businesses in mind. Every detail is planned to enhance efficiency, functionality and comfort. The development provides dependable infrastructure, smooth connectivity, and thoughtfully designed amenities. It is a place where productivity meets clarity and where businesses can operate confidently today and in the future."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                />
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Designed for Everyday Work" completed={false} />

                <MapSection data={MAP_DATA} />
                <PartnerSection />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>The Workspace <br /> You Deserve</>} subtitle="Thoughtfully planned spaces built for lasting value" mobImg="/images/rudrakshImages/ctaBg.webp" deskImg="/images/rudrakshImages/image.png" />
                <Footer />
            </div>
        </>
    );
}