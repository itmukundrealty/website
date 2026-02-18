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
import PartnerSection from "@/components/projectComponents/Ashoka/PartnerSection";
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import Footer from "@/components/layout/Footer";

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
        title: "Strong Connectivity",
icon: "/icons/cityIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Institutional Services",
icon: "/icons/academics.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Urban Leisure",
icon: "/icons/urbanIcon.svg",
        points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Cafés & Eateries",
icon: "/icons/cafeIcon.svg",
        points: [32, 33, 34],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
];






// const SECTION_DATA = [
//     {
//         id: "high-living",
//         label: "Thoughtful Homes",
//         description: "Well-planned residences designed to maximize space, natural light, and ventilation. Every layout is crafted to support functional living while maintaining a sense of warmth and comfort.",
//         imageSrc: "/images/gokuldhamImages/liv1.png"
//     },
//     {
//         id: "kitchen",
//         label: "Balanced Comfort",
//         description: "A harmonious blend of modern essentials and practical design ensures ease in everyday life, creating a home that feels both efficient and inviting. ",
//         imageSrc: "/images/gokuldhamImages/liv2.png"
//     },
//     {
//         id: "rooftop",
//         label: "Trusted Security",
//         description: "Reliable safety measures and a secure residential setting provide complete peace of mind for you and your family.",
//         imageSrc: "/images/gokuldhamImages/liv3.png"
//     },
//     {
//         id: "location",
//         label: "Tranquil Environment",
//         description: "Set within a calm neighbourhood ambience, the development offers a quiet retreat from the city’s pace while remaining well connected to daily conveniences.",
//         imageSrc: "/images/gokuldhamImages/liv4.png"
//     }
// ];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Air-conditioned Gymnasium",
        subtitle: "",
        image: "/images/gokuldhamImages/liv1.png",
    },
    {
        id: "wellness",
        label: "Smart Utility Network",
        subtitle: "",
        image: "/images/gokuldhamImages/liv2.png",
    },
    {
        id: "lobby",
        label: "Kid’s Play Area",
        subtitle: "",
        image: "/images/gokuldhamImages/liv3.png",
    },
    {
        id: "pool",
        label: "Visitor's Lounge",
        subtitle: "",
        image: "/images/gokuldhamImages/liv4.png",
    },
    {
        id: "gym",
        label: "Dedicated Parking",
        subtitle: "",
        image: "/images/gokuldhamImages/liv5.png",
    },
    {
        id: "sky-deck",
        label: "Bedroom AC Provisioning",
        subtitle: "",
        image: "/images/gokuldhamImages/liv6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <ProjectHero />
                {/* <ProjectHighLiving data={SECTION_DATA} /> */}
                <HighlivingSection
                    heading="Living, Well Designed"
                    description= "Welcome to Gokuldham, a thoughtfully envisioned residential development by Mukund MGM Realty that brings together comfort, functionality, and everyday convenience. Situated in the well-connected neighbourhood of Mannagudda, the project offers intelligently designed homes that respond to the needs of modern families. With practical layouts, quality construction, and reliable infrastructure, every detail is aligned to support smooth daily living. Essential amenities, dependable utilities, and a secure residential setting come together to create a balanced lifestyle — one where comfort and convenience coexist effortlessly in the heart of Mangalore."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                />
                <AmenitiesSection data={AMENITIES_DATA}  />
                {/* <FeaturesSection features={FEATURES} heading="Spaces for Every Moment" variant="left" /> */}

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that" titlePart2="Set the Standard" description="Stories from clients who chose Mukund Realty for quality, integrity, and reliability." />
                <CTASection title={<>Find Your      <br />Place Here</>} subtitle="Experience comfort in the heart of the city." mobImg="/images/ctaImages/gokuldhamDesk.png" deskImg="/images/ctaImages/gokuldhamMob.png" />
<Footer/>
            </div>
        </>
    );
}