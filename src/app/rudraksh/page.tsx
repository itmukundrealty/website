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
import localFont from "next/font/local";

const playfair = localFont({
  src: "../../../public/fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair",
});

const montserrat = localFont({
  src: "../../../public/fonts/Montserrat-VariableFont_wght.ttf",
  variable: "--font-montserrat",
});


// ... (other imports)

const FEATURES: FeatureItem[] = [
  { icon: "SwimmingPool", label: "Infinity Rooftop Swimming Pool" },
  { icon: "GamesArea", label: "Indoor & Outdoor Games Area" },
  { icon: "Gymnasium", label: "Air Conditioned Gymnasium" },
  { icon: "Reflexology", label: "Walking Path with Reflexology" },
  // { icon: "LeisureAreas", label: "Landscaped Leisure Areas" },
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

  { icon: "Elevators", label: "Four Automatic Elevators 15 Pax Capacity " },
  { icon: "SolarElectricPowerPanels", label: "Solar Electric Power Panels " },
  { icon: "GeneratorBackup", label: "Generator Backup " },
  { icon: "SewageTreatment", label: "Sewage Treatment Plant " },
  { icon: "IntercomSecurity", label: "Intercom Facility Security " },



  
];

const MAP_DATA = [
  {
    key: "city",
    title: "City & Highway Access",
    icon: "/icons/cityIcon.svg",
    points: [0],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "it",
    title: "IT & Employment Zones",
    icon: "/icons/itIcon.svg",
    points: [18, 19],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "education",
    title: "Education & Healthcare",
    icon: "/icons/educationIcon.svg",
    points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "essentials",
    title: "Everyday Essentials",
    icon: "/icons/everydayIcon.svg",
    points: [32, 33, 34],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
];

// ... (existing SECTION_DATA)

import ExperienceSection from "@/components/projectComponents/Rudraksh/features/project/ExperienceSection";
import CTASection from "@/components/projectComponents/Rudraksh/features/project/CTASection";
import Footer from "@/components/layout/Footer";
import NewHeader from "@/components/projectComponents/Rudraksh/features/NewHeader";

// import ProjectHeader from "@/components/projectComponents/Rudraksh/features/project/Header";

const SECTION_DATA = [
  {
    id: "high-living",
    label: "High Living Homes",
    description:
      "Rudraksh is envisioned as an expression of high living, where space, light, and serenity define everyday life. With two refined wings rising across 14 floors, each home feels expansive, composed, and effortlessly elegant.",
    imageSrc: "/images/rudrakshImages/liv1.webp",
  },
  {
    id: "kitchen",
    label: "24×7 Cloud Kitchen",
    description:
      "A first of its kind offering, the round the clock cloud kitchen brings freshly prepared, personalised meals directly to residents, adding a new level of everyday convenience to luxury living.",
    imageSrc: "/images/rudrakshImages/liv2.webp",
  },
  {
    id: "rooftop",
    label: "Rooftop Living",
    description:
      "An elevated rooftop experience featuring an infinity pool with panoramic city and sea views, complemented by wellness amenities that invite relaxation above the urban rhythm.",
    imageSrc: "/images/rudrakshImages/liv3.webp",
  },
  {
    id: "location",
    label: "Prime Location",
    description:
      "Situated behind Infosys at Kottara, Rudraksh offers seamless access to key IT hubs, highways, education, and daily essentials, balancing connectivity with calm living.",
    imageSrc: "/images/rudrakshImages/liv5.png",
  },
];

const AMENITIES_DATA = [
  {
    id: "kitchen",
    label: "24x7 Cloud Kitchen",
    subtitle: "THE FIRST OF IT'S KIND IN MANGALURU",
    description: "Some days, stepping out feels like too much. And some cravings cannot wait. With a 24x7 cloud kitchen within reach, fresh meals become part of your everyday, arriving when you want them, just the way you like.",
    image: "/images/rudrakshImages/amm1.webp",
  },
  {
    id: "wellness",
    label: "Wellness Club",
    subtitle: "",
    description: "In a busy routine, taking time to reset often gets pushed aside. Here, that distance disappears. The wellness club brings calm closer to home, making restoration something you can return to whenever you need.",
    image: "/images/rudrakshImages/amm2.webp",
  },
  {
    id: "lobby",
    label: "Grand Entrance Lobby",
    subtitle: "",
    description: "The way you enter shapes how you feel. Instead of something purely functional, the grand lobby feels intentional, welcoming you into a space defined by quiet confidence and considered design.",
    image: "/images/rudrakshImages/amm3.webp",
  },
  {
    id: "pool",
    label: "People Spaces",
    subtitle: "",
    description: "Good conversations should not need planning. These shared spaces make it easy to meet, pause, and spend time together, all within reach of home.",
    image: "/images/rudrakshImages/amm4.webp",
  },
  {
    id: "gym",
    label: "Fitness & Activity Zones",
    subtitle: "",
    description: "When convenience meets routine, staying active feels natural. These spaces let you move, train, or reset whenever you choose, without working around time or distance.",
    image: "/images/rudrakshImages/amm5.webp",
  },
  {
    id: "sky-deck",
    label: "Rooftop Infinity\nSwimming Pool",
    subtitle: "",
    description: "Sometimes, all you need is a quiet escape. Elevated above the everyday, the rooftop pool offers openness, calm, and a space to unwind at your own pace.",
    image: "/images/rudrakshImages/amm6.webp",
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
    <main className={`min-h-screen bg-black ${playfair.variable} ${montserrat.variable} font-montserrat [&_h1]:font-playfair [&_h2]:font-playfair [&_h3]:font-playfair [&_h4]:font-playfair [&_h5]:font-playfair [&_h6]:font-playfair`}>

      <NewHeader 
        projectLink="/project-enquire?project=rudraksh" 
        projectName="Rudraksh" 
        scrolledLogo="/icons/rudrakshDarkLogo.svg" 
        logo="/icons/rudrakshLogo.svg" 
        btnAccentColor="#5A1F26"
      />
      <ProjectHero
        projectLink="/project-enquire?project=rudraksh"
        projectName="Rudraksh"
        title={<>A Higher Way to Live</>}
        subtitle="Luxury Homes at Rudraksh"
        pdfPath="/downloadFloorPlan/typical layout.pdf"
        zipPath="/floorPlanZip/Rudraksh.zip"
        FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX}
        heroImageDesktop="/images/rudrakshImages/hero.png"
        heroImageMobile="/images/rudrakshImages/newMobileHero.png"
        HERO_MARKERS={HERO_MARKERS}
        floorData={floorData}
        FLOOR_PATHS={FLOOR_PATHS}
        exploreTitle={<>A Higher Way to Live</>}
        exploreSubtitle={<>Luxury Homes <br /> at Rudraksh</>}
        accentColor="#4F5D4A"
        btnAccentColor="#5A1F26"
        logo="/icons/rudrakshLogo.svg"
      />
      <ProjectHighLiving data={SECTION_DATA} accentColor="#4F5D4A" />
      <HighlivingSection
        projectLink="/project-enquire?project=rudraksh"
        btnAccentColor="#5A1F26"
        heading="Luxury in the Contours of Life"
        description="Welcome to Rudraksh, an exquisite residential address envisioned for those who seek the true essence of high living. Thoughtfully crafted with a focus on space, comfort, and timeless elegance, the project offers well-planned homes, curated lifestyle amenities, and a setting that balances serenity with city connectivity. Every detail is shaped to create an elevated living experience where design, luxury, and everyday ease come together."
        imageSrc={["https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/publicImages%2Fthumbnails%2F2.jpeg?alt=media&token=689048d8-996f-43b3-a991-8269bc60b32f",
                   "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/publicImages%2Fthumbnails%2F3.jpeg?alt=media&token=63437684-bb54-4964-829b-2335b79cd08f" ,
                   "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/publicImages%2Fthumbnails%2F1.jpeg?alt=media&token=334917a6-3dd4-4ea2-a46e-d7c88405ee44" ]}
        videoSrc={[ 
          "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/videos%2Frudraksh2.mp4?alt=media&token=23553c65-102c-497c-bfeb-462fda653e78",
          "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/videos%2Frudraksh1.mp4?alt=media&token=beb814c8-a722-4cdf-b6b4-1ad42c503121",
          "https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/videos%2Frudraksh3.mp4?alt=media&token=ed5cf04f-ece8-441e-82c2-995cfaa964e8"
        ]}
      />
      <AmenitiesSection projectLink="/project-enquire?project=rudraksh" data={AMENITIES_DATA} accentColor="#4F5D4A" btnAccentColor="#5A1F26" bgAccentColor="#F3EFE8" />
      <FeaturesSection
        projectLink="/project-enquire?project=rudraksh"
        features={FEATURES}
        heading="Everything You’re Looking For"
        completed={false}
        galleryImages={[
          "/images/rudrakshImages/car1.webp",
          "/images/rudrakshImages/car2.webp",
          "/images/rudrakshImages/car3.webp",
          "/images/rudrakshImages/car4.webp",
          "/images/rudrakshImages/car5.webp",
          "/images/rudrakshImages/car6.webp",
        ]}
        variant="left"
        btnAccentColor="#5A1F26"
        accentColor="#4F5D4A"
      />
      {/* <ProjectInteractivePlan /> */}
      <MapSection 
        customMarkerImage="/icons/mapIcons/rudrakshIcon.svg" 
        data={MAP_DATA} 
        mainMarkerPosition={{ lat: 12.9055, lng: 74.8496 }} 
        boxAccentColor="#4F5D4A" 
        accentColor="#4F5D4A"
        titleLight={true}
      />
      <ExperienceSection
        titlePart1="Built on"
        titlePart2="Real Experiences"
        description="Every great future begins with the right foundation. Discover spaces that are planned with intent, built with integrity, and designed to stand the test of time."
        accentColor="#4F5D4A"
        titlePart2Light={true}
      />
      <CTASection
        link="/project-enquire?project=rudraksh"
        title={
          <>
            Where Luxury <br /> Finds Form
          </>
        }
        subtitle="Built for Enduring Value"
        mobImg="/images/rudrakshImages/mobileCta2.png"
        deskImg="/images/rudrakshImages/ctaImg1.png"
        accentColor="#5A1F26"
      />

      {/* Other sections can be implemented here */}
      {/* <ProjectAbout /> */}
      {/* <ProjectGallery /> */}

      <Footer />
    </main>
  );
}
