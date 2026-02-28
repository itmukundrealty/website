import StyledMap from "@/components/common/Shared/StyledMap";
import StrategicMap from "@/components/projectComponents/ProjectMapSection";
import StrategicallyConnected from "@/components/projectComponents/ProjectMapSection";
import { ProjectHero } from "@/components/projectComponents/Rudraksh/features/project/Hero";
import ProjectHighLiving from "@/components/projectComponents/Rudraksh/features/project/HighLiving";
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import AmenitiesSection from "@/components/projectComponents/Rudraksh/features/project/AmenitiesSection";
import FeaturesSection, { FeatureItem } from "@/components/projectComponents/Rudraksh/features/project/FeaturesSection";
// import { Icons } from "@/components/projectComponents/Rudraksh/features/project/FeatureIcons";
import MapSection from "@/components/projectComponents/Rudraksh/MapSection";
import { FLOOR_PATHS_VIEWBOX, HERO_MARKERS } from "@/utils/floorMapRudraksh.js";
import { floorData } from "@/utils/floorMapRudraksh.js";
import { FLOOR_PATHS } from "@/utils/floorMapRudraksh.js";

// ... (other imports)

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
    title: "City & Highway Access",
    icon: "/icons/cityIcon.svg",
    points: [0],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 14,
    },
  },
  {
    key: "it",
    title: "IT & Employment Zones",
    icon: "/icons/itIcon.svg",
    points: [18, 19],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 14,
    },
  },
  {
    key: "education",
    title: "Education & Healthcare",
    icon: "/icons/educationIcon.svg",
    points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 14,
    },
  },
  {
    key: "essentials",
    title: "Everyday Essentials",
    icon: "/icons/everydayIcon.svg",
    points: [32, 33, 34],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 14,
    },
  },
];

// ... (existing SECTION_DATA)

import ExperienceSection from "@/components/projectComponents/Rudraksh/features/project/ExperienceSection";
import CTASection from "@/components/projectComponents/Rudraksh/features/project/CTASection";
import Footer from "@/components/layout/Footer";
import ProjectHeader from "@/components/projectComponents/Rudraksh/features/Header";
// import ProjectHeader from "@/components/projectComponents/Rudraksh/features/project/Header";

const SECTION_DATA = [
  {
    id: "high-living",
    label: "High Living Homes",
    description:
      "Rudraksh is envisioned as an expression of high living, where space, light, and serenity define everyday life. With two refined wings rising across 14 floors, each home feels expansive, composed, and effortlessly elegant.",
    imageSrc: "/images/rudrakshImages/liv1.png",
  },
  {
    id: "kitchen",
    label: "24×7 Cloud Kitchen",
    description:
      "A first of its kind offering, the round the clock cloud kitchen brings freshly prepared, personalised meals directly to residents, adding a new level of everyday convenience to luxury living.",
    imageSrc: "/images/rudrakshImages/2.webp",
  },
  {
    id: "rooftop",
    label: "Rooftop Living",
    description:
      "An elevated rooftop experience featuring an infinity pool with panoramic city and sea views, complemented by wellness amenities that invite relaxation above the urban rhythm.",
    imageSrc: "/images/rudrakshImages/3.webp",
  },
  {
    id: "location",
    label: "Prime Location",
    description:
      "Situated behind Infosys at Kottara, Rudraksh offers seamless access to key IT hubs, highways, education, and daily essentials, balancing connectivity with calm living.",
    imageSrc: "/images/rudrakshImages/4.webp",
  },
];

const AMENITIES_DATA = [
  {
    id: "kitchen",
    label: "24x7 Cloud Kitchen",
    subtitle: "THE FIRST OF IT'S KIND IN MANGALURU",
    image: "/images/rudrakshImages/2.webp",
  },
  {
    id: "wellness",
    label: "Wellness Club",
    subtitle: "",
    image: "/images/rudrakshImages/6.webp",
  },
  {
    id: "lobby",
    label: "Grand Entrance Lobby",
    subtitle: "",
    image: "/images/rudrakshImages/7.webp",
  },
  {
    id: "pool",
    label: "People Spaces",
    subtitle: "",
    image: "/images/rudrakshImages/8.webp",
  },
  {
    id: "gym",
    label: "Fitness & Activity Zones",
    subtitle: "",
    image: "/images/rudrakshImages/9.webp",
  },
  {
    id: "sky-deck",
    label: "Rooftop Infinity\nSwimming Pool",
    subtitle: "",
    image: "/images/rudrakshImages/3.webp",
  },
];

export const metadata = {
  title: "Rudraksh by Mukund MGM Realty | Luxury Apartments in Mangalore",
  description:
    "Rudraksh by Mukund MGM Realty offers thoughtfully designed luxury 2, 3 & 4 BHK apartments in Mangalore, combining modern amenities, elegant design, and premium living comfort.",

  keywords: [
    "Rudraksh Mukund MGM Realty",
    "Luxury Apartments Mangalore",
    "2 3 4 BHK Mangalore",
    "Mukund Realty Projects",
    "Flats in Mangalore",
    "Premium Apartments Karnataka",
    "Real Estate Mangalore",
  ],

  authors: [{ name: "Mukund MGM Realty" }],
  creator: "Mukund MGM Realty",
  publisher: "Mukund MGM Realty",

  openGraph: {
    title: "Rudraksh | Luxury Living by Mukund MGM Realty",
    description: "Premium residential apartments in Mangalore offering modern amenities, elegant architecture, and high-quality living experience.",
    url: "https://www.mukundmgmrealty.com/",
    siteName: "Rudraksh by Mukund MGM Realty",
    images: [
      {
        url: "/og-images/rudraksh-og.png",
        width: 1200,
        height: 630,
        alt: "Rudraksh by Mukund MGM Realty",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rudraksh – Luxury Apartments Mangalore",
    description: "Explore luxury 2, 3 & 4 BHK homes by Mukund MGM Realty designed for comfort, lifestyle, and modern living.",
    images: ["/og-images/rudraksh-og.png"],
  },

  metadataBase: new URL("https://www.mukundmgmrealty.com/rudraksh"),
};

export default function Project1Page() {
  return (
    <main className="min-h-screen bg-black">
      <ProjectHeader projectLink="/project-enquire?project=rudraksh" projectName="Rudraksh" />
      <ProjectHero
        projectLink="/project-enquire?project=rudraksh"
        projectName="Rudraksh"
        FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX}
        heroImageDesktop="/images/rudrakshImages/hero.png"
        heroImageMobile="/images/rudrakshImages/mobileHero1.png"
        HERO_MARKERS={HERO_MARKERS}
        floorData={floorData}
        FLOOR_PATHS={FLOOR_PATHS}
      />
      <ProjectHighLiving data={SECTION_DATA} />
      <HighlivingSection
        projectLink="/project-enquire?project=rudraksh"
        heading="Luxury in the Contours of Life"
        description="Welcome to Rudraksh, an exquisite residential address envisioned for those who seek the true essence of high living. Thoughtfully crafted with a focus on space, comfort, and timeless elegance, the project offers well-planned homes, curated lifestyle amenities, and a setting that balances serenity with city connectivity. Every detail is shaped to create an elevated living experience where design, luxury, and everyday ease come together."
        imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
      />
      <AmenitiesSection projectLink="/project-enquire?project=rudraksh" data={AMENITIES_DATA} />
      <FeaturesSection
        projectLink="/project-enquire?project=rudraksh"
        features={FEATURES}
        heading="Everything You’re Looking For"
        completed={false}
        galleryImages={[
          "/images/rudrakshImages/10.webp",
          "/images/rudrakshImages/11.webp",
          "/images/rudrakshImages/12.webp",
          "/images/rudrakshImages/13.webp",
          "/images/rudrakshImages/14.webp",
          "/images/rudrakshImages/15.webp",
        ]}
      />
      {/* <ProjectInteractivePlan /> */}

      <MapSection data={MAP_DATA} />
      <ExperienceSection
        titlePart1="Built on"
        titlePart2="Real Experiences"
        description="Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time."
      />
      <CTASection
        link="/project-enquire?project=rudraksh"
        title={
          <>
            Where Luxury <br /> Finds Form
          </>
        }
        subtitle="Built for Enduring Value"
        mobImg="/images/rudrakshImages/ctaBg.webp"
        deskImg="/images/rudrakshImages/image.png"
      />

      {/* Other sections can be implemented here */}
      {/* <ProjectAbout /> */}
      {/* <ProjectGallery /> */}

      <Footer />
    </main>
  );
}
