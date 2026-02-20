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
import Header from "@/components/layout/Header";


import Footer from "@/components/layout/Footer";
import PartnerSection from "@/components/projectComponents/ashoka/PartnerSection";
import { HERO_MARKERS } from "@/utils/floorMapAshoka.js";
import { floorData } from "@/utils/floorMapAshoka.js";
import { FLOOR_PATHS } from "@/utils/floorMapAshoka.js";
import { FLOOR_PATHS_VIEWBOX } from "@/utils/floorMapAshoka.js";

const FEATURES: FeatureItem[] = [
    { icon: "CarParking", label: "3 Levels of Car Parking" },
    { icon: "Cup", label: "24x7 Cafeteria" },
    { icon: "PowerBackup", label: "24x7 Power Back-up" },
    { icon: "Drink", label: "Walking Path with Reflexology" },
    { icon: "GamesArea", label: "Break out Area " },
    { icon: "Phone", label: "Dedicated Phone Line" },
    { icon: "Wifi", label: "High Speed Internet" },
    { icon: "Indoor", label: "Indoor Gaming Zone" },
    { icon: "OpenLibrary", label: "Open Library" },
    { icon: "LaptopGraph", label: "Managed Workspace" },
    { icon: "Meeting", label: "Meeting / Training Rooms" },
    { icon: "Meeting", label: "On Call Training / Board Rooms" },
    { icon: "Security", label: "Round-o-clock Security" },
    { icon: "Fingerprint", label: "Secured Access" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },

];

const MAP_DATA = [
    {
        key: "city",
        title: "Regional & City Access",
        icon: "/icons/infrastrucureIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Workforce",
        icon: "/icons/userIcon.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Commercial Proximity",
        icon: "/icons/businessIcon.svg",
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
        imageSrc: "/images/ashokaImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Smart Tech",
        description: "Harnessing contemporary, intelligent technology enables us to streamline daily tasks, enhancing productivity and efficiency swiftly. What were once manual and time-consuming activities can now be efficiently accomplished through digital tools, self-automated systems and app management.",
        imageSrc: "/images/ashokaImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Sustainability",
        description: "Embrace sustainability through our comprehensive and energy-conscious ecosystem, crafted to mitigate our environmental footprint. Designed with sustainable systems that support responsible water and energy use.",
        imageSrc: "/images/ashokaImages/liv3.png"
    },
    {
        id: "location",
        label: "Efficiency",
        description: "Immerse yourself in the global community by embracing a fusion of modern sophistication and natural allure. Our workspace culture celebrates local ethnic artistry, harnessing its power to spark creativity, alleviate stress and cultivate a vibrant positive atmosphere.",
        imageSrc: "/images/ashokaImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Curated Workspaces",
        subtitle: "",
        image: "/images/ashokaImages/am1.png",
    },
    {
        id: "wellness",
        label: "Recreational Zones",
        subtitle: "",
        image: "/images/ashokaImages/am2.png",
    },
    {
        id: "lobby",
        label: "On Call Training/ Board Rooms",
        subtitle: "",
        image: "/images/ashokaImages/am3.png",
    },
    {
        id: "pool",
        label: "Designated Ares for Customer / Client Service",
        subtitle: "",
        image: "/images/ashokaImages/am4.png",
    },
    {
        id: "gym",
        label: "Auditorium & Banquet Hall",
        subtitle: "",
        image: "/images/ashokaImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "3 Tier Secured Parking",
        subtitle: "",
        image: "/images/ashokaImages/am6.png",
    }
];
const GALLERY_IMAGES = [
    "/images/ashokaImages/ft1.png",
    "/images/ashokaImages/ft2.png",
    "/images/ashokaImages/ft3.png",
    "/images/ashokaImages/ft4.png",
    "/images/ashokaImages/ft5.png",
    "/images/ashokaImages/ft6.png",
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
                <FeaturesSection features={FEATURES} heading="Designed for Everyday Work" completed={false} galleryImages={GALLERY_IMAGES} />

                <MapSection data={MAP_DATA} />
                <PartnerSection />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>The Workspace <br /> You Deserve</>} subtitle="Thoughtfully planned spaces built for lasting value" mobImg="/images/ctaImages/ashokaDesk.png" deskImg="/images/ctaImages/ashokaDesk.png" />
                <Footer />
            </div>
        </>
    );
}