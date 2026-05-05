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
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import Footer from "@/components/layout/Footer";
import PartnerSection from "@/components/projectComponents/ashoka/PartnerSection";
import { HERO_MARKERS } from "@/utils/floorMapAshoka.js";
import { floorData } from "@/utils/floorMapAshoka.js";
import { FLOOR_PATHS } from "@/utils/floorMapAshoka.js";
import { FLOOR_PATHS_VIEWBOX } from "@/utils/floorMapAshoka.js";

export const FEATURES: FeatureItem[] = [
  { icon: "CarParking", label: "3 Levels of Car Parking" },
  { icon: "Cafeteria", label: "24x7 Cafeteria" },
  { icon: "PowerBackup", label: "24x7 Power Back-up" },
  { icon: "BanquetHall", label: "Banquet Hall" },
  { icon: "BreakOutArea", label: "Break out Area" },
  { icon: "PhoneLine", label: "Dedicated Phone Line" },
  { icon: "Internet", label: "High Speed Internet" },
  { icon: "Indoor", label: "Indoor Gaming Zone" },
  { icon: "Workspace", label: "Managed Workspace" },
  { icon: "MeetingRooms", label: "Meeting / Training Rooms" },
  { icon: "TrainingRooms", label: "On Call Training / Board Rooms" },
  { icon: "Security", label: "Round-o-clock Security" },
  { icon: "SecuredAccess", label: "Secured Access" },
  { icon: "VisitorsLounge", label: "Visitors Lounge" },
];

const MAP_DATA = [
  {
    key: "city",
    title: "Regional & City Access",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/regional.svg",
    points: [0],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13.5,
    },
  },
  {
    key: "it",
    title: "Workforce",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/workforceIcon.svg",
    points: [18, 19],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13.5,
    },
  },
  {
    key: "education",
    title: "Commercial Proximity",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/itIcon.svg",
    points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "essentials",
    title: "Digital Infrastructure",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/digitalIcon.svg",
    points: [32, 33, 34],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
];

const SECTION_DATA = [
  {
    id: "high-living",
    label: "Green Workspaces",
    description:
      "It's more than just a workspace; it's a world unto itself. We craft a comfortable, secure and professional environment tailored to meet the needs of a diverse range of corporate businesses, surrounded by lush greenery and the beauty of Mother Nature in full bloom.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/liv1.webp",
  },
  {
    id: "kitchen",
    label: "Smart Tech",
    description:
      "Harnessing contemporary, intelligent technology enables us to streamline daily tasks, enhancing productivity and efficiency swiftly. What were once manual and time-consuming activities can now be efficiently accomplished through digital tools, self-automated systems and app management.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/liv2.webp",
  },
  {
    id: "rooftop",
    label: "Sustainability",
    description:
      "Embrace sustainability through our comprehensive and energy-conscious ecosystem, crafted to mitigate our environmental footprint. Designed with sustainable systems that support responsible water and energy use.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/liv3.webp",
  },
  {
    id: "location",
    label: "Efficiency",
    description:
      "Immerse yourself in the global community by embracing a fusion of modern sophistication and natural allure. Our workspace culture celebrates local ethnic artistry, harnessing its power to spark creativity, alleviate stress and cultivate a vibrant positive atmosphere.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/liv4.webp",
  },
];

const AMENITIES_DATA = [
  {
    id: "kitchen",
    label: "Curated Workspaces",
    subtitle: "",
    description: "Workspaces should adapt to you. Designed around focus and flexibility, these spaces allow individuals and teams to work in a way that feels both productive and intuitive.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/amenities/amm1.webp",
  },
  {
    id: "wellness",
    label: "Recreational Zones",
    subtitle: "",
    description: "Not every idea comes at a desk. These spaces create room for pauses, casual conversations, and a shift in pace, helping you return with clarity.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/amenities/amm2.webp",
  },
  {
    id: "lobby",
    label: "On Call Training/\n Board Rooms",
    subtitle: "",
    description: "Key conversations need the right setting. With fully equipped spaces available when required, meetings and sessions happen seamlessly without external dependencies.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/amenities/amm3.webp",
  },
  {
    id: "pool",
    label: "Designated Ares for Customer/ Client Service",
    subtitle: "",
    description: "First impressions matter. Thoughtfully designed areas ensure every interaction feels structured, professional, and aligned with your standards.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/amenities/amm4.webp",
  },
  {
    id: "gym",
    label: "Auditorium & Banquet Hall",
    subtitle: "",
    description: "From presentations to large gatherings, having expansive venues within the same space adds ease, allowing you to host and engage without stepping out.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/amenities/amm5.webp",
  },
  {
    id: "sky-deck",
    label: "3 Tier Secured Parking",
    subtitle: "",
    description: "Smooth movement matters. A well-planned, secure parking system across three levels keeps arrivals and departures organised and effortless.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/amenities/amm6.webp",
  },
];
const GALLERY_IMAGES = [
  "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/gallery/11.webp",
  "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/gallery/12.webp",
  "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/gallery/13.webp",
  "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/gallery/14.webp",
  "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/gallery/15.webp",
  "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/gallery/16.webp",
];
export default function page() {
  return (
    <>
      <div className="">
        <NewHeader projectLink="/project-enquire?project=ashoka" projectName="Ashoka" scrolledLogo="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/ashokaDarkLogo.svg" logo="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/ashokaLogo.svg" />
        <ProjectHero
          projectLink="/project-enquire?project=ashoka"
          projectName="Ashoka Business Center"
          title={<>Modern Business, <br /> Effortlessly Perfected</>}
          subtitle="Commercial Workspaces at Ashoka Business Center"
          pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/downloadFloorPlan/typical layout.pdf"
          FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX}
          HERO_MARKERS={HERO_MARKERS}
          floorData={floorData}
          FLOOR_PATHS={FLOOR_PATHS}
          heroImageDesktop="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/hero.png"
          heroImageMobile="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/newHeroMobile.png"
        />
        <ProjectHighLiving data={SECTION_DATA} />
        <HighlivingSection
          projectLink="/project-enquire?project=ashoka"
          heading="Spaces That Empower Business"
          description="Welcome to Ashoka Business Center, a commercial space created with the needs of modern businesses in mind. Every detail is planned to enhance efficiency, functionality and comfort. The development provides dependable infrastructure, smooth connectivity, and thoughtfully designed amenities. It is a place where productivity meets clarity and where businesses can operate confidently today and in the future."
          imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__98371%201.png?alt=media&token=213a5227-ed84-4e7b-92e1-61261ff87555"
          videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FAshoka%20Walkthrough%20Vertex%20Ending.mp4?alt=media&token=06d5709e-6712-4ecc-b104-d425159f1b5e"
        />
        <AmenitiesSection projectLink="/project-enquire?project=ashoka" data={AMENITIES_DATA} />
        <FeaturesSection
          projectLink="/project-enquire?project=ashoka"
          features={FEATURES}
          galleryImages={GALLERY_IMAGES}
          heading="Designed for Everyday Work"
          variant="left"
          completed={false}
        />

        <MapSection
          data={MAP_DATA}

          mainMarkerPosition={{ lat: 12.896339168047138, lng: 74.84203633612658 }}
          customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcons/ashokaIcon.svg"
        />
        <PartnerSection />
        <ExperienceSection
          titlePart1="Experiences that "
          titlePart2="Set the Standard"
          description="Testimonials from those who appreciate the uncompromising Mukund standard."
        />
        <CTASection
          link="/project-enquire?project=ashoka"
          cta="Enquire Now"
          title={
            <>
              The Workspace <br /> You Deserve
            </>
          }
          subtitle={
            <>
              Thoughtfully planned <br className="hidden lg:block" /> spaces built for lasting value
            </>
          }
          mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/ctabgMobile.webp"
          deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ashokaImages/ctabgDesk.webp"
        />
        <Footer />
      </div>
    </>
  );
}
