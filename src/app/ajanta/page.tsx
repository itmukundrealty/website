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
import { CompletedHero } from "@/components/projectComponents/Rudraksh/features/project/CompletedHero";
import PartnerSection from "@/components/projectComponents/ashoka/PartnerSection";
// import PartnerSection from "@/components/projectComponents/Rudraksh/features/project/PartnerSection";

const FEATURES: FeatureItem[] = [
    // { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
    { icon: "CarParking", label: "Car Parking" },
    { icon: "Gymnasium", label: "Gymnasium" },
    { icon: "Indoor", label: "Indoor Gaming Zone" },

    { icon: "Generators", label: "24x7 Power Back-up" },
    { icon: "LaptopGraph", label: "Managed Workspace" },
    { icon: "Meeting", label: "Meeting / Training Rooms" },
    { icon: "CallTraining", label: "On Call Training / Board Rooms" },

    { icon: "Firesafety", label: "Fire Safety System" },
    { icon: "GamesArea", label: "Break out Area " },
    { icon: "Security", label: "Round-o-clock Security " },
    { icon: "Wifi", label: "High Speed Internet " },
    { icon: "Phone", label: "Dedicated Phone Line" },
    { icon: "Fingerprint", label: "Secured Access" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },

];


const MAP_DATA = [
    {
        key: "city",
        title: "City Connectivity",
        icon: "/icons/connectivityIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Transport Access",
        icon: "/icons/transportIcon.svg",
        points: [44, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Urban Amenities",
        icon: "/icons/urbanIcon.svg",
        points: [35, 29, 45, 46, 22, 47],
        viewport: {
            center: { lat: 12.8800, lng: 74.8400 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Business Neighborhoods",
        icon: "/icons/businessIcon.svg",
        points: [24, 48, 41, 40],
        viewport: {
            center: { lat: 12.8800, lng: 74.8500 },
            zoom: 14
        }
    },
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Focused Work",
        description: "Work in spaces thoughtfully designed to inspire productivity and comfort. Every detail supports your focus while keeping the environment welcoming and stress-free. ",
        imageSrc: "/images/ajantaImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Vitality Spaces",
        description: "Wellness zones and recreation areas encourage movement, relaxation, and balance. These spaces nurture both physical vitality and mental well-being. ",
        imageSrc: "/images/ajantaImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Professional Hubs",
        description: "Boardrooms and conference rooms crafted for seamless collaboration and impactful meetings. They provide the perfect setting for growth, learning, and connection. ",
        imageSrc: "/images/ajantaImages/liv3.png"
    },
    {
        id: "location",
        label: "Safe Haven",
        description: "A secure environment where safety and peace of mind come first. Here, you can thrive without worry and focus on what truly matters.",
        imageSrc: "/images/ajantaImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Board & Conference Rooms",
        subtitle: "",
        image: "/images/ajantaImages/am1.png",
    },
    {
        id: "wellness",
        label: "Training & Banquet Hall",
        subtitle: "",
        image: "/images/ajantaImages/am2.png",
    },
    {
        id: "lobby",
        label: "Breakout & Informal Areas",
        subtitle: "",
        image: "/images/ajantaImages/am3.png",
    },
    {
        id: "pool",
        label: "24×7 Security & Surveillance",
        subtitle: "",
        image: "/images/ajantaImages/am4.png",
    },
    {
        id: "gym",
        label: "Spacious Parking",
        subtitle: "",
        image: "/images/ajantaImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "Modern Utilities & Backup",
        subtitle: "",
        image: "/images/ajantaImages/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <CompletedHero desktopImage="/images/ajantaImages/heroDesk.png" mobileImage="/images/ajantaImages/heroMobile.png" title={<>Ajanta Business <br className="hidden lg:block" />Center</>} subtitle="" variant="rightCentered" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Elevated Work Environments"
                    description= "Welcome to Mukund MGM Realty Mathura, a thoughtfully planned residential community created for modern families seeking affordable luxury. Every detail is designed to enhance comfort, functionality, and everyday ease. Spaciously planned homes, dependable infrastructure, and carefully curated amenities come together to create a balanced living environment. From wellness-focused facilities and secure surroundings to inviting common spaces that encourage connection, the development supports both relaxation and active lifestyles."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Crafted for Everyday Comfort" variant="left" completed={true} />

                <MapSection data={MAP_DATA} />
                <PartnerSection />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Step Into Productivity   <br /> Productivity</>} subtitle="Modern spaces crafted for efficiency and growth." mobImg="/images/ctaImages/ajantaMob.png" deskImg="/images/ctaImages/ajantaDesk.png" />
                <Footer />
            </div>
        </>
    );
}