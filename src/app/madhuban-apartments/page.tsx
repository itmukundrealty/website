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
    { icon: "CarParking", label: "Car Parking" },
    { icon: "Gymnasium", label: "Fully Equipped Rooftop Gym" },
    { icon: "Firesafety", label: "Fire Safety System" },
    { icon: "Landscape", label: "Scenic Ambience" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "Generators", label: "24x7 Power Back-up" },
    { icon: "Waterpipe", label: "24x7 Water Supply" },
    { icon: "Solar", label: "Solar Electric Power Panels" },
    { icon: "Security", label: "Round-o-clock Security" },
];

const MAP_DATA = [
    {
        key: "city",
        title: "Centralized Location",
        icon: "/icons/mapLocationIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 13
        }
    },
    {
        key: "it-education",
        title: "IT Zone & Education",
        icon: "/icons/culturalIcon.svg", 
        points: [113, 114, 161], // Infosys, Mahesh PU College, Karavali College
        viewport: {
            center: { lat: 12.9100, lng: 74.8310 },
            zoom: 14
        }
    },
    {
        key: "healthcare",
        title: "Healthcare",
        icon: "/icons/healthcareIcon.svg",
        points: [116], // AJ Hospital
        viewport: {
            center: { lat: 12.9100, lng: 74.8310 },
            zoom: 14
        }
    },
    {
        key: "nearby-places",
        title: "Nearby Places",
        icon: "/icons/citywideIcon.svg", 
        points: [118, 162], // Ladyhill Circle, Urwa Church Centenary Hall
        viewport: {
            center: { lat: 12.9100, lng: 74.8310 },
            zoom: 14 
        }
    }
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Light-Infused Living",
        description: "Designed to welcome natural light and openness, the residences create bright, uplifting spaces that feel airy and inviting. Thoughtful layouts and well-planned interiors enhance ventilation and spatial flow, ensuring every home feels warm, balanced, and connected to its surroundings.",
        imageSrc: "/images/madhubanImages/liv1.webp"
    },
    {
        id: "kitchen",
        label: "Smart Comfort",
        description: "Modern conveniences and dependable infrastructure come together to support effortless daily living. From reliable utilities to intelligently integrated features, every element is curated to enhance comfort while simplifying everyday routines.",
        imageSrc: "/images/madhubanImages/liv2.webp"
    },
    {
        id: "rooftop",
        label: "Sustainable Essentials",
        description: "Built with mindful systems that encourage responsible resource use, the development supports energy efficiency and long-term sustainability. Carefully considered provisions help reduce environmental impact while maintaining comfort and performance.",
        imageSrc: "/images/madhubanImages/liv3.png"
    },
    {
        id: "location",
        label: "Effortless Convenience",
        description: "Seamless connectivity, essential services, and well-planned common areas ensure that everything you need is within easy reach. Designed for practicality and ease, the community allows daily life to unfold smoothly and without compromise.",
        imageSrc: "/images/madhubanImages/liv4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Premium Residences",
        subtitle: "",
        image: "/images/madhubanImages/am1.webp",
    },
    {
        id: "wellness",
        label: "Prime Urban Location",
        subtitle: "",
        image: "/images/madhubanImages/am2.webp",
    },
    {
        id: "lobby",
        label: "Rooftop Fitness Studio",
        subtitle: "",
        image: "/images/madhubanImages/am3.webp",
    },
    {
        id: "pool",
        label: "Serene Surroundings",
        subtitle: "",
        image: "/images/madhubanImages/am4.webp",
    },
    {
        id: "gym",
        label: "Dedicated Car Parking",
        subtitle: "",
        image: "/images/madhubanImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "Spacious Interiors",
        subtitle: "",
        image: "/images/madhubanImages/am6.webp",
    }
];

const ftModal = [
    "Aluminium windows and ventilators with necessary fixtures",
    "Granite kitchen platform with stainless steel sink",
    "AC point provision in all bedrooms",
    "Overhead water tank and underground sump tank",
    "Premium acrylic emulsion paint for interiors and moss-resistant exterior paint",
    "Pressure-tested plumbing and drainage lines for leak-proof toilets",
    "Concrete door frames with high-quality decorative flush doors for all rooms",
    "Terrace covered with high-quality heat-retardant sheets for thermal insulation",
    "Designer wall tiles in bathrooms and kitchen working area",
    "Kitchen with 2-inch wide granite platform on two sides",
    "Glazed tile cladding on kitchen walls up to 2-foot height",
    "Stainless steel sink with drainboard in kitchen"
];

export default function page() {
    return (
        <>
            <div className="">

                <NewHeader projectLink="/project-enquire?project=madhuban" projectName="Madhuban Apartments" floorPlanPdf="/completedFloorplans/Madhuban-FloorPlans.pdf" />
                <CompletedHero title={<>Madhuban <br className="hidden lg:block" /> Apartments</>} subtitle="" variant="topRight" desktopImage="/images/madhubanImages/heroDesk.png" mobileImage="/images/madhubanImages/heroMobile.png" pdfPath="/completedFloorplans/Madhuban-FloorPlans.pdf" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Refined Residential Living"
                    description= "Welcome to from madhubanImagesban Apartments, a carefully planned residential community created to seamlessly blend modern living, comfort, and convenience. The development offers roomy homes designed to satisfy the changing needs of modern families, all while being tucked away in a lively and well-connected neighborhood. madhubanImagesban Apartments' thoughtfully designed amenities, reliable infrastructure, and well-proportioned interiors create a setting where day-to-day living is effortless. Every component, from safe surroundings and dependable utilities to welcoming common areas that promote relaxation and connection, is made to guarantee that comfort, usefulness, and communal living coexist harmoniously."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Tailored for Contemporary Living" variant="left" completed={true} btnType="know" modalTitle="Madhuban Apartments" modalPoints={ftModal} />

                <MapSection customMarkerImage="/icons/mapIcons/madhubanIcon.svg" data={MAP_DATA} mainMarkerPosition={{ lat: 12.912372680974913, lng: 74.8329861441786 }} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Explore Your<br />Future Home</>} subtitle={<>A space created for  <br className="hidden md:block" /> inspired living.</>} mobImg="/images/ctaImages/madhubanMob.png" deskImg="/images/ctaImages/madhubanDesk.png" />
                <Footer />
            </div>
        </>
    );
}