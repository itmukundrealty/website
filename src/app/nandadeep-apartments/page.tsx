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
    { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
    { icon: "ChildrenPlay", label: "Kid’s Play Area" },
    { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },
    { icon: "WellnessClub", label: "Wellness Club" },
    { icon: "JoggingTrack", label: "Jogging Track" },

    { icon: "GamesArea", label: "Indoor Gaming Zone" },
    { icon: "Landscape", label: "Scenic Ambience" },




    { icon: "CarParking", label: "Car Parking" },
    { icon: "GatheringHall", label: "Residents Gathering Hall" },
    { icon: "OpenLibrary", label: "Open Library" },
    { icon: "Visitorslounge", label: "Visitors Lounge" },
    { icon: "CCTV", label: "Security Surveillance with CCTV" },
    { icon: "Wifi", label: "High Speed Internet" },
    { icon: "Solar", label: "Solar Electric Power Panels" },
    { icon: "Security", label: "Round-o-clock Security" },

    { icon: "Generators", label: "24x7 Power Back-up" },

    { icon: "Generators", label: "24x7 24x7 Backup Generators" },
];

const MAP_DATA = [
    {
        key: "city",
        title: "City Connectivity",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/cityIcon.svg",
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
        points: [113, 136, 137], // Infosys, Gokarnatheshwara College, Ladyhill School
        viewport: {
            center: { lat: 12.892842, lng: 74.834272 },
            zoom: 14
        }
    },
    {
        key: "essentials",
        title: "Everyday Essentials",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/healthcareIcon.svg",
        points: [117], // Bharath Mall
        viewport: {
            center: { lat: 12.892842, lng: 74.834272 },
            zoom: 15
        }
    },
    {
        key: "nearby-places",
        title: "Nearby Places",
        icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/citywideIcon.svg", 
        points: [119, 120, 124, 138, 139, 122, 140, 141, 142, 143], 
        viewport: {
            center: { lat: 12.892842, lng: 74.834272 },
            zoom: 14
        }
    }
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Thoughtful Homes",
        description: "Well-planned residences designed to maximize space, natural light, and ventilation. Every layout is crafted to support functional living while maintaining a sense of warmth and comfort.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/liv1.webp"
    },
    {
        id: "kitchen",
        label: "Balanced Comfort",
        description: "A harmonious blend of modern essentials and practical design ensures ease in everyday life, creating a home that feels both efficient and inviting. ",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/liv2.webp"
    },
    {
        id: "rooftop",
        label: "Trusted Security",
        description: "Reliable safety measures and a secure residential setting provide complete peace of mind for you and your family.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/liv3.webp"
    },
    {
        id: "location",
        label: "Tranquil Environment",
        description: "Set within a calm neighbourhood ambience, the development offers a quiet retreat from the city’s pace while remaining well connected to daily conveniences.",
        imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/liv4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Terrace Fitness Zone",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/am1.webp",
    },
    {
        id: "wellness",
        label: "Leisure Jogging Loop",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/am2.webp",
    },
    {
        id: "lobby",
        label: "Poolside Party Deck",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/am3.webp",
    },
    {
        id: "pool",
        label: "Yoga Pavilion",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/am4.webp",
    },
    {
        id: "gym",
        label: "Serene Surroundings",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/am5.webp",
    },
    {
        id: "sky-deck",
        label: "Multipurpose Party Hall",
        subtitle: "",
        image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/am6.webp",
    }
];

export default function page() {
    return (
        <>
            <div className="">

                <NewHeader projectLink="/project-enquire?project=nandadeep" projectName="Nandadeep Apartments" floorPlanPdf="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/Nandadeep-FloorPlans.pdf" />
                <CompletedHero title={<>Nandadeep Apartments</>} subtitle="" variant="center" desktopImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/heroDesk.webp" mobileImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/nandeepImages/heroMobile.png" pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/completedFloorplans/Nandadeep-FloorPlans.pdf" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Thoughtful Urban Living"
                    description= "Welcome to Nandadeep Apartments, a carefully planned residential development designed to offer comfort, convenience, and lasting value for modern families. With well-ventilated homes, efficient layouts, and quality finishes, every aspect of the project is crafted to enhance daily living. Practical amenities and dependable utilities ensure smooth functionality, while a secure and peaceful setting creates a reassuring environment to call home. Nandadeep Apartments brings together thoughtful design and everyday ease, offering a balanced lifestyle in a well-connected neighbourhood."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Spaces for Every Moment" variant="left" completed={true} />

                <MapSection customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcons/nandadeepIcon.svg"  data={MAP_DATA} mainMarkerPosition={{ lat: 12.895899486705401, lng: 74.82442483598062 }} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Own Your Space     <br />of Serenity</>} subtitle={<>A calm, connected place <br className="hidden md:block" /> to call home.</>} mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/nandeepMob.png" deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/nandeepDesk1.png" />
                <Footer />
            </div>
        </>
    );
}