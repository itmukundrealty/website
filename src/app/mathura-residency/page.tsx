"use client";
// import MapSection from "@/components/contact/MapSection";
import NewHeader from "@/components/projectComponents/Rudraksh/features/NewHeader";
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
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapLocationIcon.svg",
        points: [],
        viewport: {
            center: { lat: 12.9055, lng: 74.8496 },
            zoom: 14.5
        }
    },
    {
        key: "it",
        title: "IT & Employment zones and Education",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/infrastrucureIcon.svg",
        points: [105, 101, 103],
        viewport: {
            center: { lat: 12.8974, lng: 74.8364 },
            zoom: 14.5
        }
    },
    {
        key: "essentials",
        title: "Healthcare and Everyday essentials",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/educationIcon.svg",
        points: [102, 107],
        viewport: {
            center: { lat: 12.8929, lng: 74.8436 },
            zoom: 14.5
        }
    },
    {
        key: "nearby",
        title: "Nearby places",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/culturalIcon.svg",
        points: [100, 104, 106, 108, 109, 110, 111, 112],
        viewport: {
            center: { lat: 12.8964, lng: 74.8405 },
            zoom: 14.5
        }
    },
];

const SECTION_DATA = [
    {
        id: "high-living",
        label: "Refined Living",
        description: "It's a carefully crafted world of comfort and belonging, not just a place to live. To satisfy the demands of contemporary families, we have created a safe, connected, and hospitable environment. ",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/liv1.webp"
    },
    {
        id: "kitchen",
        label: "Active Wellness",
        description: "Encourage an active and balanced lifestyle through thoughtfully designed wellness spaces. Crafted to support everyday movement and recreation, these amenities promote physical vitality and mental well-being. ",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/liv2.webp"
    },
    {
        id: "rooftop",
        label: "Assured Protection",
        description: "Enjoy complete peace of mind with an integrated security ecosystem featuring advanced surveillance, fire safety, and reliable power backup for a safe, uninterrupted living environment.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/liv3.webp"
    },
    {
        id: "location",
        label: "Seamless Ease",
        description: "Experience effortless living through intuitive design and user-friendly features. Our thoughtfully crafted spaces prioritize your comfort and convenience, letting you focus on what truly matters.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/liv4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Wellness Zone",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/am6.webp",
    },
    {
        id: "wellness",
        label: "Kids Play Area",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/am1.webp",
    },
    {
        id: "lobby",
        label: "Smart Surveillance",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/am2.webp",
    },
    {
        id: "pool",
        label: "Reliable Backup",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/am3.webp",
    },
    {
        id: "gym",
        label: "Community Spaces",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/am4.webp",
    },
    {
        id: "sky-deck",
        label: "Visitors Lounge",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/am5.webp",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <NewHeader projectLink="/project-enquire?project=mathura" projectName="Mathura Residency" floorPlanPdf="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/Mathura-FloorPlans.pdf" />
                <CompletedHero 
                    desktopImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/heroDesk.png" 
                    mobileImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mathuraImages/newHeroMobile.png" 
                    title={<>Mathura <br className="hidden lg:block" />Residency</>} 
                    subtitle="" 
                    variant="topRight" 
                    pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/Mathura-FloorPlans.pdf"
                />
                <ProjectHighLiving data={SECTION_DATA} />
                <HighlivingSection
                    heading="Inspired Living Spaces"
                    description="Welcome to Mukund MGM Realty Mathura, a thoughtfully planned residential community created for modern families seeking affordable luxury. Every detail is designed to enhance comfort, functionality, and everyday ease. Spaciously planned homes, dependable infrastructure, and carefully curated amenities come together to create a balanced living environment. From wellness-focused facilities and secure surroundings to inviting common spaces that encourage connection, the development supports both relaxation and active lifestyles."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                />
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Crafted for Everyday Comfort" variant="left" completed={true} />

                <MapSection customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcons/mathuraIcon.svg" data={MAP_DATA} mainMarkerPosition={{ lat: 12.90551016701943, lng: 74.84966575701976 }} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Discover Your   <br /> Perfect Home</>} subtitle={<>A home that reflects <br className="hidden md:block" /> your aspirations.</>} mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/mathuraMob.png" deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/mathuraDesk.png" />
                <Footer />
            </div>
        </>
    );
}