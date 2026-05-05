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
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/cityIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.989402030376874, lng: 74.80207348030677 },
            zoom: 13
        }
    },
   {
        key: "education",
        title: "Education",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/culturalIcon.svg", 
        points: [128], // Govinda Das College
        viewport: {
            center: { lat: 12.9892975, lng: 74.8021164 },
            zoom: 14.5
        }
    },
    {
        key: "healthcare",
        title: "Healthcare",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/healthcareIcon.svg",
        points: [129], // Venus Hospital
        viewport: {
            center: { lat: 12.9892975, lng: 74.8021164 },
            zoom: 14.5
        }
    },
    {
        key: "nearby-places",
        title: "Nearby Places",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/citywideIcon.svg", 
        points: [130, 131, 132, 133, 134, 135], // Railway Station, Lalith, Mandovi, Sadananda, Market, Bus Stand
        viewport: {
            center: { lat: 12.9892975, lng: 74.8021164 },
            zoom: 14.5 // Zoomed out slightly to fit railway station and Lalith hotel
        }
    }
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Spacious Interiors",
        description: "Designed with openness and flexibility in mind, the interiors offer expansive layouts that adapt seamlessly to diverse business needs. Every space is planned to enhance functionality, comfort, and an elevated professional presence.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/liv1.webp"
    },
    {
        id: "kitchen",
        label: "Commercial Spaces",
        description: "Versatile retail and office environments thoughtfully structured to support productivity, customer engagement, and long-term growth. The design fosters visibility, accessibility, and operational efficiency.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/liv2.webp"
    },
    {
        id: "rooftop",
        label: "Strategic Layout",
        description: "Thoughtfully planned floor configurations that enhance visibility, movement, and functional efficiency. Designed to support seamless circulation and optimal space utilization, the layout ensures a smooth experience for businesses and visitors alike while maximizing commercial potential.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/liv3.webp"
    },
    {
        id: "location",
        label: "Professional Ecosystem",
        description: "A dynamic setting that brings together retail, offices, and lifestyle establishments, creating an environment that encourages collaboration, steady footfall, and sustainable business success.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/liv4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Retail Boutiques",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/am1.webp",
    },
    {
        id: "wellness",
        label: "Dining Experiences",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/am2.webp",
    },
    {
        id: "lobby",
        label: "Entertainment Spaces",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/am3.webp",
    },
    {
        id: "pool",
        label: "Business Suites",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/am4.webp",
    },
    {
        id: "gym",
        label: "Ample Parking",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/am5.webp",
    },
    {
        id: "sky-deck",
        label: "Spacious Interiors",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/am6.webp",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <NewHeader projectLink="/project-enquire?project=kudva" projectName="Kudva's Grandeur" floorPlanPdf="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/Kudva's Grandeur-FloorPlan.pdf" />
                <CompletedHero title={<>Kudva's Grandeur</>} mobileVariant="topRight" subtitle="" variant="rightCentered" desktopImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/heroDesk.png" mobileImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kudvaImages/heroMobile.png" pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/Kudva's Grandeur-FloorPlan.pdf" projectLink="/project-enquire?project=kudva" />
                <ProjectHighLiving data={SECTION_DATA} />
                <HighlivingSection
                    heading="Refined Commercial Living"
                    description="Greetings from Kudva's Grandeur, a well-planned business center in Surathkal that unites large, flexible workspaces and thriving business activity under one roof. This complex is designed to accommodate a variety of business needs, from retail and dining to offices and showrooms, and is situated in one of the most vibrant neighborhoods in the area. Business, lifestyle, and daily necessities can all coexist peacefully in Kudva's Grandeur thanks to its spacious interiors that can be customized to meet specific needs, high-quality construction, and thoughtful amenities like plenty of parking and contemporary utilities."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                    video={false}
                />
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Curated for Commercial Excellence" variant="left" completed={true} />

                <MapSection customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcons/kudvaIcon.svg" data={MAP_DATA} mainMarkerPosition={{ lat: 12.989402030376874, lng: 74.80207348030677 }} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Elevate Your   <br />Business Presence</>} subtitle="A space designed to amplify your success." mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/kudvaMob.png" deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/kudvaDesk.png" />
                <Footer />
            </div>
        </>
    );
}