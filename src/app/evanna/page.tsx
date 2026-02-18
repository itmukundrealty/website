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
    // { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
    { icon: "ChildrenPlay", label: "Kid’s Play Area" },
    { icon: "Gymnasium", label: "Gymnasium" },
    { icon: "GamesArea", label: "Indoor Gaming Zone" },
    { icon: "Drink", label: "Party Hall" },
    { icon: "Firesafety", label: "Fire Safety System" },
    { icon: "Minitheatre", label: "Mini Theatre" },
    { icon: "JacuzziSauna", label: "Yoga and meditation pavilion" },
    { icon: "Generators", label: "24x7 Power Back-up" },
    { icon: "Solar", label: "Solar Electric Power Panels" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
   
];

const MAP_DATA = [
    {
        key: "city",
        title: "Citywide Access",
icon: "/icons/citywideIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "Healthcare Proximity",
icon: "/icons/healthcareIcon.svg",
        points: [18, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Daily Convenience",
icon: "/icons/urbanIcon.svg",
        points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Local Heritage",
icon: "/icons/culturalIcon.svg",
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
        label: "Spacious Living",
        description: "Experience thoughtfully designed homes with ample space, natural light, and functional layouts that make every corner comfortable and inviting. ",
        imageSrc: "/images/evannaImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Social Spaces",
        description: "Connect and unwind in community lounges, landscaped gardens, and multi-purpose halls crafted for gatherings, celebrations, and meaningful interactions. ",
        imageSrc: "/images/evannaImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Fitness Zones",
        description: "Stay active and energized with fully equipped gyms, yoga & meditation pavilions, and dedicated outdoor play and recreation areas. ",
        imageSrc: "/images/evannaImages/liv3.png"
    },
    {
        id: "location",
        label: "Smart Living",
        description: "Enjoy modern conveniences with integrated technology, reliable utilities, safety features, and eco-friendly solutions for a seamless lifestyle.",
        imageSrc: "/images/evannaImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Fitness Zone",
        subtitle: "",
        image: "/images/evannaImages/am1.png",
    },
    {
        id: "wellness",
        label: "Kids Play Area",
        subtitle: "",
        image: "/images/evannaImages/am2.png",
    },
    {
        id: "lobby",
        label: "Yoga Pavilion",
        subtitle: "",
        image: "/images/evannaImages/am3.png",
    },
    {
        id: "pool",
        label: "Terrace Lounge",
        subtitle: "",
        image: "/images/evannaImages/am4.png",
    },
    {
        id: "gym",
        label: "Party Hall",
        subtitle: "",
        image: "/images/evannaImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "Modern Interiors",
        subtitle: "",
        image: "/images/evannaImages/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <CompletedHero title={<>Evanna Homes</>} subtitle="" mobileVariant="topRight" variant="rightCentered" desktopImage="/images/evannaImages/heroDesk.png" mobileImage="/images/evannaImages/heroMob.png" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Thoughtful Residential Living"
                    description= "Welcome to Evanna Homes, a thoughtfully planned residential community with a focus on convenience, comfort, and style that is ideal for contemporary family living. From large, well-ventilated homes and modern layouts to communal areas that promote social interaction and leisure, every element of the development is designed to improve your everyday experience. Evanna Homes offers amenities that promote leisure, fitness, and daily necessities, resulting in a well-rounded lifestyle where comfort and usefulness coexist. A relaxing yet connected place to call home is provided by well-considered design, secure infrastructure, and high-quality finishes."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA}  />
                <FeaturesSection features={FEATURES} heading="Built for Modern Comfort" variant="left" />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Step Into    <br /> Better Living</>} subtitle="In a home crafted for comfort and care." mobImg="/images/ctaImages/evannaDesk.png" deskImg="/images/ctaImages/evannaMob.png" />
<Footer/>
            </div>
        </>
    );
}