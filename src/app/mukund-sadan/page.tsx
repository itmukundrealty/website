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

    { icon: "ChildrenPlay", label: "Children's Play Area" },
    { icon: "GamesArea", label: "Indoor Gaming Zone" },
    { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },

    { icon: "JacuzziSauna", label: "Car Parking" },
    { icon: "Landscape", label: "Landscaped Leisure Areas" },


    { icon: "Generators", label: "24×7 Backup Generators" },
    { icon: "Waterpipe", label: "24x7 Water Supply" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "Rainwater", label: "Rain Water Harvesting" },
    { icon: "Security", label: "Round-o-clock Security" },

];

const MAP_DATA = [
    {
        key: "city",
        title: "Central Urban Address",
        icon: "/icons/citywideIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "it",
        title: "IT & Employment Zone",
        icon: "/icons/closedBookIcon.svg",
        points: [44, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Education",
        icon: "/icons/businessIcon.svg",
        points: [59, 26, 29, 28, 22, 35],
        viewport: {
            center: { lat: 12.8900, lng: 74.8400 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Healthcare",
        icon: "/icons/urbanIcon.svg",
        points: [41, 24, 38, 39, 37],
        viewport: {
            center: { lat: 12.8800, lng: 74.8500 },
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
                <CompletedHero title={<>Mukund Sadan</>} subtitle="" variant="rightCentered" desktopImage="/images/mukundSadanImages/heroDesk.png" mobileImage="/images/mukundSadanImages/heroMobile.png" />
                {/* <ProjectHighLiving data={SECTION_DATA} /> */}
                <HighlivingSection
                    heading="Refined Living in Every Detail"
                    description="Welcome to Mukund Sadan, a thoughtfully crafted residential address designed to bring together comfort, connectivity, and contemporary living. Located in the well-established neighbourhood of Kodailbail, the project offers carefully planned homes that balance functionality with a warm sense of belonging. With intelligently designed interiors, dependable infrastructure, and essential lifestyle amenities, Mukund Sadan creates a setting where daily life moves effortlessly. From secure premises and reliable utilities to shared spaces that foster community interaction, every element is aligned to deliver comfort, convenience, and harmonious urban living."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__strict-building-lockpreserve-the-exact-same-buildi__57692%202.png?alt=media&token=88cf1821-5bd2-42df-b857-941cdbaa16e1"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMukund%20Sadan%20Walkthrough.mp4?alt=media&token=59618d1d-476d-4360-a238-a81e5b384422"
                />
                {/* <AmenitiesSection data={AMENITIES_DATA}  /> */}
                <FeaturesSection features={FEATURES} heading="Curated Amenities" variant="left" />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Elevate Your <br /> Everyday</>} subtitle="Spaces that support your next chapter." mobImg="/images/ctaImages/sadanMob.png" deskImg="/images/ctaImages/sadanDesk.png" />
                <Footer />
            </div>
        </>
    );
}