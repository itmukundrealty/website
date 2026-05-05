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
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/citywideIcon.svg",
        points: [0],
        viewport: {
            center: { lat: 12.904891658303564, lng: 74.83737591311836 },
            zoom: 13
        }
    },
 {
        key: "it-education",
        title: "IT & Education",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/culturalIcon.svg", 
        points: [144, 145, 146, 147, 148], // Vertex, Sharada, Expert, Canara Schools
        viewport: {
            center: { lat: 12.8765, lng: 74.8405 },
            zoom: 15
        }
    },
    {
        key: "essentials-healthcare",
        title: "Everyday Essentials & Healthcare",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/healthcareIcon.svg",
        points: [149, 150, 151, 152, 153], // Malls, Market, Yenepoya Hospital
        viewport: {
            center: { lat: 12.8765, lng: 74.8405 },
            zoom: 15
        }
    },
    {
        key: "nearby-places",
        title: "Nearby Places",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/citywideIcon.svg", 
        points: [119, 124, 154, 155, 156, 157, 158, 159, 160], // Lalbagh, Pabbas, Hotels, Temples
        viewport: {
            center: { lat: 12.8765, lng: 74.8405 },
            zoom: 15
        }
    }
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Refined Residences",
        description: "Thoughtfully crafted homes with elegant design, quality finishes, and layouts that balance comfort with sophistication. Spacious interiors and practical planning create a warm, welcoming space for modern families. ",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/liv1.png"
    },
    {
        id: "kitchen",
        label: "Prime Location",
        description: "Everything is easily accessible thanks to its excellent connections to major city thoroughfares, workplaces, schools, and daily amenities. A well-chosen address that keeps you near the things that are most important while streamlining daily life. ",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/liv2.png"
    },
    {
        id: "rooftop",
        label: "Assured Living",
        description: "A secure, well-managed environment designed to offer peace of mind and a seamless living experience. Reliable infrastructure and essential systems support uninterrupted comfort every day.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/liv3.png"
    },
    {
        id: "location",
        label: "Safe & Serene",
        description: "A calm residential setting that blends privacy, greenery, and a sense of quiet retreat from the city’s pace. An atmosphere thoughtfully created to nurture relaxation and harmonious community living.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/liv4.png"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Poolside Party Deck",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/am1.png",
    },
    {
        id: "wellness",
        label: "Air-Conditioned Gymnasium",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/am2.png",
    },
    {
        id: "lobby",
        label: "Kids Play Area",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/am3.png",
    },
    {
        id: "pool",
        label: "Serene Surroundings",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/am4.png",
    },
    {
        id: "gym",
        label: "Yoga Pavilion",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/am5.png",
    },
    {
        id: "sky-deck",
        label: "Multipurpose Party Hall",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandagokulImages/am6.png",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <NewHeader projectLink="/project-enquire?project=mukund-sadhan" projectName="Mukund Sadan" floorPlanPdf="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/MukundSadan-FloorPlans.pdf" amenitiesTarget="#features" />
                <CompletedHero title={<>Mukund Sadan</>} subtitle="" variant="rightCentered" desktopImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mukundSadanImages/heroDesk.webp" mobileImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/mukundSadanImages/heroMobile.png" pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/MukundSadan-FloorPlans.pdf" />
                {/* <ProjectHighLiving data={SECTION_DATA} /> */}
                <HighlivingSection
                    heading="Refined Living in Every Detail"
                    description="Welcome to Mukund Sadan, a thoughtfully crafted residential address designed to bring together comfort, connectivity, and contemporary living. Located in the well-established neighbourhood of Kodailbail, the project offers carefully planned homes that balance functionality with a warm sense of belonging. With intelligently designed interiors, dependable infrastructure, and essential lifestyle amenities, Mukund Sadan creates a setting where daily life moves effortlessly. From secure premises and reliable utilities to shared spaces that foster community interaction, every element is aligned to deliver comfort, convenience, and harmonious urban living."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__strict-building-lockpreserve-the-exact-same-buildi__57692%202.png?alt=media&token=88cf1821-5bd2-42df-b857-941cdbaa16e1"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMukund%20Sadan%20Walkthrough.mp4?alt=media&token=59618d1d-476d-4360-a238-a81e5b384422"
                />
                {/* <AmenitiesSection data={AMENITIES_DATA}  /> */}
                <FeaturesSection features={FEATURES} heading="Curated Amenities" variant="left" completed={true} id="features" />
<MapSection 
    customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcons/mukundSadanIcon.svg" 
    data={MAP_DATA} 
    mainMarkerPosition={{ lat: 12.8765, lng: 74.8405 }} 
/>                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Elevate Your <br /> Everyday</>} subtitle={<>Spaces that support your  <br className="hidden md:block" /> next chapter.</>} mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/sadanMob.png" deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/sadanDesk.png" />
                <Footer />
            </div>
        </>
    );
}