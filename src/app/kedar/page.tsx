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
import { FLOOR_PATHS_VIEWBOX, HERO_MARKERS } from "@/utils/floorMapKedar";
import { floorData } from "@/utils/floorMapKedar";
import { FLOOR_PATHS } from "@/utils/floorMapKedar";

const FEATURES: FeatureItem[] = [
  { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
  { icon: "GamesArea", label: "Indoor & Outdoor Games Area" },
  { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },
  { icon: "Reflexology", label: "Walking Path with Reflexology" },
  { icon: "LeisureAreas", label: "Landscaped Leisure Areas" },
  { icon: "ChildrenPlay", label: "Children's Play Area" },
  { icon: "JacuzziSauna", label: "Heated Jacuzzi & Timber Sauna" },
  { icon: "GrandLobby", label: "Access Controlled Grand Entrance Lobby" },
  { icon: "OpenLibrary", label: "Open Library" },
  { icon: "WellnessClub", label: "Wellness Club" },
  { icon: "CloudKitchen", label: "24×7 Cloud Kitchen" },
  { icon: "BeautyLounge", label: "Beauty Lounge" },
  { icon: "SolarPanels", label: "Solar Electric Power Panels" },
  { icon: "Generators", label: "24×7 Backup Generators" },
  { icon: "SewageTreatment", label: "Sewage Water Treatment Plant" },
  { icon: "CCTV", label: "Security Surveillance with CCTV" },
  { icon: "MiniTheatre", label: "Air Conditioned Mini Theatre" },
  { icon: "DanceFloor", label: "Dance / Yoga / Zumba Floor" },
  { icon: "GatheringHall", label: "Residents Gathering Hall" },
  { icon: "FirefightingSystem", label: "State-of-the-art Firefighting System" },
];

const MAP_DATA = [
  {
    key: "city",
    title: "City Road Access",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/cityIcon.svg",
    points: [0],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "it",
    title: "Schools & Hospitals",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/itIcon.svg",
    points: [18, 19],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "education",
    title: "Business Hubs",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/educationIcon.svg",
    points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "essentials",
    title: "Lifestyle Conveniences",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/everydayIcon.svg",
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
    label: "Elevated Living",
    description:
      "More than just homes, Kedar offers a refined living experience shaped by comfort, privacy, and thoughtful design that supports everyday ease and long term well being.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/liv1.webp",
  },
  {
    id: "kitchen",
    label: "Panoramic Views",
    description:
      "Designed to rise above its surroundings, the residences enjoy expansive views of greenery and the city beyond, creating a sense of openness and quiet retreat.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/liv2.webp",
  },
  {
    id: "rooftop",
    label: "Thoughtful Design",
    description:
      "Every home is planned with clarity and balance, combining functional layouts, natural light, and refined detailing to support modern lifestyles.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/liv3.webp",
  },
  {
    id: "location",
    label: "Connected Yet Serene",
    description:
      "Strategically located to offer city accessibility while remaining removed from noise and congestion, allowing residents to enjoy calm living without compromise.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/liv4.webp",
  },
];

const AMENITIES_DATA = [
  {
    id: "kitchen",
    label: "Rooftop Infinity Swimming Pool",
    subtitle: "",
    description: "Some days call for a shift in perspective. Set above it all, the rooftop pool offers a space to pause, unwind, and let time move at your pace.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/amm1.webp",
  },
  {
    id: "wellness",
    label: "Open Air Gymnasium",
    subtitle: "",
    description: "Workouts feel different in open air. With space around you, staying active becomes something you look forward to, not just follow.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/amm2.webp",
  },
  {
    id: "lobby",
    label: "Indoor & Outdoor Recreation",
    subtitle: "",
    description: "Leisure should be within reach. With spaces for both indoor and outdoor activities, there is always a way to unwind or break the routine.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/amm3.webp",
  },
  {
    id: "pool",
    label: "Kids Play Area",
    subtitle: "",
    description: "A safe, lively space for children to play and explore makes everyday living easier, while keeping them close and within sight.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/amm4.webp",
  },
  {
    id: "gym",
    label: "Outdoor Badminton Court",
    subtitle: "",
    description: "A quick game can reset your day. With a dedicated court, staying active or enjoying a match becomes effortless.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/amm5.webp",
  },
  {
    id: "sky-deck",
    label: "Spacious Visitor’s Lounge",
    subtitle: "",
    description: "Welcoming someone over feels more considered with a space designed for it. The visitor’s lounge keeps interactions comfortable, without entering your private space.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/amm6.webp",
  },
];
export default function page() {
  return (
    <>
      <div className="">
        <NewHeader projectLink="/project-enquire?project=kedar" projectName="Kedar" scrolledLogo="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/kedarDarkLogo.svg" logo="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/kedarLogo.svg" view360Url="https://www.turiya.co/360/KedarHighLivingLuxuryHomes/"/>
        <ProjectHero
          projectLink="/project-enquire?project=kedar"
          projectName="Kedar"
          title={<>A Life of Luxury Awaits</>}
          subtitle="Luxury Living, Defined at Kedar"
          pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/downloadFloorPlan/typical layout.pdf"
          FLOOR_PATHS={FLOOR_PATHS}
          FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX}
          HERO_MARKERS={HERO_MARKERS}
          floorData={floorData}
          heroImageDesktop="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/hero.png"
          heroImageMobile="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/newMobileHero.png"
        />
        <ProjectHighLiving data={SECTION_DATA} />
        <HighlivingSection
          projectLink="/project-enquire?project=kedar"
          heading="Redefining the Essence of Living"
          description="Introducing Kedar, a contemporary residential address shaped by Mukund MGM Realty’s long-standing approach to quality and value. Thoughtfully planned duplex residences offer generous layouts, refined interiors, and a sense of openness that supports both everyday comfort and special moments. With carefully selected amenities and a location at the heart of Mangalore, Kedar brings homes that feel considered and easy to live in for years to come."
          imageSrc="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/videoPlaceholder.png"
          videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FKEDAR%20FILM_45s.mp4?alt=media&token=7b45ec51-a0ac-4b3a-94db-7e8468d1d7b8"
        />
        <AmenitiesSection projectLink="/project-enquire?project=kedar" data={AMENITIES_DATA} />
        <FeaturesSection
          projectLink="/project-enquire?project=kedar"
          features={FEATURES}
          heading="Designed for Everyday Work"
          completed={false}
          galleryImages={[
            "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/ft1.png",
            "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/ft2.png",
            "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/ft3.png",
            "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/ft4.png",
            "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/ft5.png",
            "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/kedarImage/ft6.png",
          ]}
          variant="left"
        />

        <MapSection
          data={MAP_DATA}
          mainMarkerPosition={{ lat: 12.908991556397066, lng: 74.85044859337258 }}
          customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcons/kedarIcon.svg"
        />
        <ExperienceSection
          titlePart1="Built on"
          titlePart2="Real Experiences"
          description="Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time."
        />
        <CTASection
          link="/project-enquire?project=kedar"
          title={
            <>
              The Home You’ve Been <br /> Looking For
            </>
          }
          subtitle="Spacious homes built for everyday living."
          mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/kedarDesk.png"
          deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/ctaImages/kedarDesk.png"
        />
        <Footer />
      </div>
    </>
  );
}
