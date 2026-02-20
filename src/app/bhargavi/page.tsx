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
        title: "Academic Convenience",
        icon: "/icons/academics.svg",
        points: [44, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Commercial Reach",
        icon: "/icons/urbanIcon.svg",
        points: [58, 46, 29, 28, 22, 47],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Business Access",
        icon: "/icons/businessIcon.svg",
        points: [24, 37, 38, 57],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
];







const SECTION_DATA = [
    {
        id: "high-living",
        label: "Refined Residences",
        description: "Thoughtfully crafted homes with elegant design, quality finishes, and layouts that balance comfort with sophistication. Spacious interiors and practical planning create a warm, welcoming space for modern families. ",
        imageSrc: "/images/nandagokulImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Prime Location",
        description: "Everything is easily accessible thanks to its excellent connections to major city thoroughfares, workplaces, schools, and daily amenities. A well-chosen address that keeps you near the things that are most important while streamlining daily life. ",
        imageSrc: "/images/nandagokulImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Assured Living",
        description: "A secure, well-managed environment designed to offer peace of mind and a seamless living experience. Reliable infrastructure and essential systems support uninterrupted comfort every day.",
        imageSrc: "/images/nandagokulImages/liv3.png"
    },
    {
        id: "location",
        label: "Safe & Serene",
        description: "A calm residential setting that blends privacy, greenery, and a sense of quiet retreat from the city’s pace. An atmosphere thoughtfully created to nurture relaxation and harmonious community living.",
        imageSrc: "/images/nandagokulImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Poolside Party Deck",
        subtitle: "",
        image: "/images/nandagokulImages/am1.png",
    },
    {
        id: "wellness",
        label: "Air-Conditioned Gymnasium",
        subtitle: "",
        image: "/images/nandagokulImages/am2.png",
    },
    {
        id: "lobby",
        label: "Kids Play Area",
        subtitle: "",
        image: "/images/nandagokulImages/am3.png",
    },
    {
        id: "pool",
        label: "Serene Surroundings",
        subtitle: "",
        image: "/images/nandagokulImages/am4.png",
    },
    {
        id: "gym",
        label: "Yoga Pavilion",
        subtitle: "",
        image: "/images/nandagokulImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "Multipurpose Party Hall",
        subtitle: "",
        image: "/images/nandagokulImages/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <CompletedHero title={<>Bhargavi <br className="hidden lg:block" /> Gloria Residency</>} subtitle="" variant="rightCentered" desktopImage="/images/bhargaviImages/heroDesk.png" mobileImage="/images/bhargaviImages/heroMobile.png" />
                {/* <ProjectHighLiving data={SECTION_DATA} /> */}
                {/* <HighlivingSection
                    heading="Elevated Residential Living"
                    description="Welcome to Bhargavi Gloria Residency, a thoughtfully planned residential development that brings together comfort, functionality, and everyday convenience. Located in a well-connected neighbourhood, the project offers intelligently designed homes that cater to the needs of modern families. With practical layouts, quality construction, and dependable utilities, every element is crafted to enhance daily living. Essential amenities, sustainable systems, and a secure environment come together to create a balanced lifestyle where comfort and ease coexist seamlessly."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                {/* <AmenitiesSection data={AMENITIES_DATA}  /> */}
                {/* <FeaturesSection features={FEATURES} heading="Designed for Everyday Work" variant="left" completed={true} /> */}

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Own a Home <br /> That Matters</>} subtitle="Experience comfort crafted for you." mobImg="/images/ctaImages/bhargaviMob.png" deskImg="/images/ctaImages/bhargaviDesk.png" />
                <Footer />
            </div>
        </>
    );
}