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
    { icon: "GamesArea", label: "Indoor Gaming Zone" },



    { icon: "Firesafety", label: "Fire Safety System" },
    { icon: "Minitheatre", label: "Mini Theatre" },
    { icon: "JacuzziSauna", label: "Yoga and meditation pavilion" },
    { icon: "OpenLibrary", label: "Open Library" },
    { icon: "Landscape", label: "Landscaped Leisure Areas" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "Generators", label: "24x7 Power Back-up" },

];

const MAP_DATA = [
    {
        key: "city",
        title: "Transit Routes",
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
        icon: "/icons/bookIcon.svg",
        points: [44, 19],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 14
        }
    },
    {
        key: "education",
        title: "Education",
        icon: "/icons/urbanIcon.svg",
        points: [59, 26, 29, 28, 22, 35],
        viewport: {
            center: { lat: 12.8900, lng: 74.8400 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Healthcare",
        icon: "/icons/cafeIcon.svg",
        points: [41, 24, 38, 39],
        viewport: {
            center: { lat: 12.8700, lng: 74.8500 },
            zoom: 14
        }
    },
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Spacious Living",
        description: "Experience thoughtfully designed homes with ample space, natural light, and functional layouts that make every corner comfortable and inviting. ",
        imageSrc: "/images/kailashImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Social Spaces",
        description: "Connect and unwind in community lounges, landscaped gardens, and multi-purpose halls crafted for gatherings, celebrations, and meaningful interactions. ",
        imageSrc: "/images/kailashImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Fitness Zones",
        description: "Stay active and energized with fully equipped gyms, yoga & meditation pavilions, and dedicated outdoor play and recreation areas.",
        imageSrc: "/images/kailashImages/liv3.png"
    },
    {
        id: "location",
        label: "Smart Living",
        description: "Enjoy modern conveniences with integrated technology, reliable utilities, safety features, and eco-friendly solutions for a seamless lifestyle.",
        imageSrc: "/images/kailashImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Infinity Pool at Roof Top",
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
        label: "Sea view",
        subtitle: "",
        image: "/images/kailashImages/am4.png",
    },
    {
        id: "gym",
        label: "Yoga & Meditation Deck",
        subtitle: "",
        image: "/images/nandagokulImages/am5.png",
    },
    {
        id: "Double-Height Entrance Lobby",
        label: "Double-Height Entrance Lobby",
        subtitle: "",
        image: "/images/kailashImages/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <ProjectHeader />
                <CompletedHero title={<>Kailash</>} subtitle="" mobileVariant="center" variant="topRight" desktopImage="/images/kailashImages/heroDesk.png" mobileImage="/images/kailashImages/heroMobile.png" />
                <ProjectHighLiving data={SECTION_DATA} />
                <HighlivingSection
                    heading="Crafted for Everyday Excellence"
                    description="Introducing Kailash, a carefully envisioned residential community by Bhargavi Builders, designed to harmonize comfort, connectivity, and contemporary aesthetics. Situated in the well-established locale of Kottara Chowki, it offers an ideal setting for modern family life. Each residence is planned to maximise space, ventilation, and functionality, while thoughtfully designed common areas create opportunities for relaxation and neighbourly interaction. A curated selection of amenities supports wellness, recreation, and daily convenience, shaping a lifestyle that feels both balanced and effortless. With dependable infrastructure, secure surroundings, and quality finishes, Kailash presents a serene yet well-connected address in Mangalore."
                    imageSrc=" https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__strict-architecture-lockpreserve-the-exact-same-to__57695%201.png?alt=media&token=3d00ef55-9ee0-45ce-828c-0d71e9d5ee52"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FKailash%20Final%20Version%20Walkthrough.mp4?alt=media&token=aab4ebe5-5e4a-49c7-af15-bf915635ed50"
                />
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Built for Modern Comfort" variant="left" completed={true} />

                <MapSection data={MAP_DATA} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Live with <br /> Greater Ease</>} subtitle="Where style and function align." mobImg="/images/ctaImages/kailashMob.png" deskImg="/images/ctaImages/kailashDesk.png" />
                <Footer />
            </div>
        </>
    );
}