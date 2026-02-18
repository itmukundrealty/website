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
    { icon: "ChildrenPlay", label: "Kid’s Play Area" },
    { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },
    { icon: "WellnessClub", label: "Wellness Club" },
    { icon: "JoggingTrack", label: "Jogging Track" },

    { icon: "GamesArea", label: "Indoor Gaming Zone" },



    { icon: "CarParking", label: "Car Parking" },
    { icon: "GatheringHall", label: "Residents Gathering Hall" },
    { icon: "OpenLibrary", label: "Open Library" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "Landscape", label: "Scenic Ambience" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "Generators", label: "24x7 Power Back-up" },
    { icon: "Wifi", label: "High Speed Internet" },
    { icon: "Solar", label: "Solar Electric Power Panels" },
    { icon: "Security", label: "Round-o-clock Security" },


];

const MAP_DATA = [
    {
        key: "city",
        title: "Smooth Commute",
        icon: "/icons/mapLocationIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "IT & Employment Zone",
        icon: "/icons/learningIcon.svg",
        points: [44, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Education",
        icon: "/icons/educationIcon.svg",
        points: [35, 29, 45, 28, 22, 47],
        viewport: {
            center: { lat: 12.8800, lng: 74.8400 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Healthcare",
        icon: "/icons/balancedIcon.svg",
        points: [41, 24, 37, 38],
        viewport: {
            center: { lat: 12.8700, lng: 74.8500 },
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
                <CompletedHero title={<>Nandagokul <br className="hidden lg:block" /> Apartments</>} subtitle="" variant="topRight" desktopImage="/images/nandagokulImages/heroDesk.png" mobileImage="/images/nandagokulImages/heroMobile.png" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Refined Residential Living"
                    description="Welcome to Nandagokul Apartments, a thoughtfully developed residential address by Mukund MGM Realty, designed to bring together comfort, connectivity, and everyday functionality. Nestled in a well-established neighbourhood, the project offers carefully planned homes that cater to the practical needs of modern families while maintaining a sense of warmth and belonging. With well-designed interiors, dependable infrastructure, and essential amenities, Nandagokul Apartments creates an environment where daily life flows with ease. From secure surroundings and reliable utilities to common spaces that encourage neighbourly interaction, every detail is aligned to ensure comfort, convenience, and harmonious community living."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Refined Recreational Living" variant="left" />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Find Your<br /> Ideal Home</>} subtitle="Discover refined living today." mobImg="/images/ctaImages/nandhaMob.png" deskImg="/images/ctaImages/nandhaDesk.png" />
                <Footer />
            </div>
        </>
    );
}