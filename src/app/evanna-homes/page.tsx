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
            zoom: 13
        }
    },
   {
        key: "it-education",
        title: "IT & Education",
        icon: "/icons/culturalIcon.svg", 
        points: [113, 114, 115], // Infosys, Mahesh PU, AJ Institute
        viewport: {
            center: { lat: 12.903875173703936, lng: 74.83892547301431 },
            zoom: 14.5
        }
    },
    {
        key: "healthcare-essentials",
        title: "Healthcare & Essentials",
        icon: "/icons/healthcareIcon.svg",
        points: [116, 117], // AJ Hospital, Bharath Mall
        viewport: {
            center: { lat: 12.903875173703936, lng: 74.83892547301431 },
            zoom: 14.5
        }
    },
    {
        key: "nearby-places",
        title: "Nearby Places",
        icon: "/icons/citywideIcon.svg", 
        points: [118, 119, 120, 121, 122, 123, 124, 125, 126], 
        viewport: {
            center: { lat: 12.903875173703936, lng: 74.83892547301431 },
            zoom: 14.5 // Slightly zoomed out to fit all nearby places
        }
    }
];






const SECTION_DATA = [
    {
        id: "high-living",
        label: "Spacious Living",
        description: "Experience thoughtfully designed homes with ample space, natural light, and functional layouts that make every corner comfortable and inviting. ",
        imageSrc: "/images/evannaImages/liv1.webp"
    },
    {
        id: "kitchen",
        label: "Social Spaces",
        description: "Connect and unwind in community lounges, landscaped gardens, and multi-purpose halls crafted for gatherings, celebrations, and meaningful interactions. ",
        imageSrc: "/images/evannaImages/liv2.webp"
    },
    {
        id: "rooftop",
        label: "Fitness Zones",
        description: "Stay active and energized with fully equipped gyms, yoga & meditation pavilions, and dedicated outdoor play and recreation areas. ",
        imageSrc: "/images/evannaImages/liv3.webp"
    },
    {
        id: "location",
        label: "Smart Living",
        description: "Enjoy modern conveniences with integrated technology, reliable utilities, safety features, and eco-friendly solutions for a seamless lifestyle.",
        imageSrc: "/images/evannaImages/liv4.webp"
    }
];

const AMENITIES_DATA = [
    {
        id: "kitchen",
        label: "Fitness Zone",
        subtitle: "",
        image: "/images/evannaImages/am1.webp",
    },
    {
        id: "wellness",
        label: "Kids Play Area",
        subtitle: "",
        image: "/images/evannaImages/am2.webp",
    },
    {
        id: "lobby",
        label: "Yoga Pavilion",
        subtitle: "",
        image: "/images/evannaImages/am3.webp",
    },
    {
        id: "pool",
        label: "Terrace Lounge",
        subtitle: "",
        image: "/images/evannaImages/am4.webp",
    },
    {
        id: "gym",
        label: "Party Hall",
        subtitle: "",
        image: "/images/evannaImages/am5.webp",
    },
    {
        id: "sky-deck",
        label: "Modern Interiors",
        subtitle: "",
        image: "/images/evannaImages/am6.webp",
    }
];

const ftModal = [
  "Framed structure with laterite stone exterior walls and concrete solid block internal walls",
  "Multi-level interlocked car parking and yard with column guards",
  "Attractive melamine polished main entrance door with high-quality wooden frame",
  "Decorative interior doors with wooden frames",
  "Granite door frame with fibrotic shutter for toilets",
  "Provision for modular kitchen with chimney, refrigerator, washing machine, and aquaguard",
  "5KW three-phase power supply with AC provision for all bedrooms",
  "Modular electrical switches from reputed brands",
  "Two automatic elevators with eight-passenger capacity",
  "Generator backup for lifts and all apartments with soundproof enclosure",
  "Branded toilet and kitchen fittings (Jaguar, Hindware, Parryware or equivalent)",
  "Premium acrylic emulsion paint for interiors and weather-resistant exterior paint",
  "UPVC or high-grade aluminum sliding windows with mosquito mesh and 5mm clear glass",
  "Granite window sills",
  "Superior quality 800 x 800 vitrified tiles",
  "Two-way light control in all bedrooms",
  "TV provision in living room and master bedroom",
  "Neighbourhood shop and laundry shop"
];
export default function page() {
    return (
        <>
            <div className="">

                <NewHeader projectLink="/project-enquire?project=evanna" projectName="Evanna Homes" floorPlanPdf="/completedFloorplans/Evanna-FloorPlans.pdf" />
                <CompletedHero title={<>Evanna Homes</>} subtitle="" mobileVariant="topRight" variant="rightCentered" desktopImage="/images/evannaImages/heroDesk.webp" mobileImage="/images/evannaImages/heroMob.png" pdfPath="/completedFloorplans/Evanna-FloorPlans.pdf" />
                <ProjectHighLiving data={SECTION_DATA} />
                {/* <HighlivingSection
                    heading="Thoughtful Residential Living"
                    description= "Welcome to Evanna Homes, a thoughtfully planned residential community with a focus on convenience, comfort, and style that is ideal for contemporary family living. From large, well-ventilated homes and modern layouts to communal areas that promote social interaction and leisure, every element of the development is designed to improve your everyday experience. Evanna Homes offers amenities that promote leisure, fitness, and daily necessities, resulting in a well-rounded lifestyle where comfort and usefulness coexist. A relaxing yet connected place to call home is provided by well-considered design, secure infrastructure, and high-quality finishes."
                    imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
                    videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
                /> */}
                <AmenitiesSection data={AMENITIES_DATA} />
                <FeaturesSection features={FEATURES} heading="Built for Modern Comfort" variant="left" completed={true} btnType="know" modalTitle="Evanna Homes " modalPoints={ftModal}  />

                <MapSection customMarkerImage="/icons/mapIcons/evannaIcon.svg" data={MAP_DATA} mainMarkerPosition={{ lat: 12.903875173703936, lng: 74.83892547301431 }} />
                <ExperienceSection titlePart1="Experiences that " titlePart2="Set the Standard" description="Testimonials from those who appreciate the uncompromising Mukund standard." />
                <CTASection title={<>Step Into    <br /> Better Living</>} subtitle={<>In a home crafted for <br className="hidden md:block" /> comfort and care.</>} mobImg="/images/ctaImages/evannaMob.png" deskImg="/images/ctaImages/evannaDesk.png" />
                <Footer />
            </div>
        </>
    );
}