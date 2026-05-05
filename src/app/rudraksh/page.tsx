import ProjectHighLiving from "@/components/projectComponents/Rudraksh/features/project/HighLiving";
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import AmenitiesSection from "@/components/projectComponents/Rudraksh/features/project/AmenitiesSection";
import FeaturesSection, { FeatureItem } from "@/components/projectComponents/Rudraksh/features/project/FeaturesSection";

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
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/cityIcon.svg",
    points: [0],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "it",
    title: "IT & Employment Zones",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/itIcon.svg",
    points: [18, 19],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "education",
    title: "Education & Healthcare",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/educationIcon.svg",
    points: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    viewport: {
      center: { lat: 12.904891658303564, lng: 74.83737591311836 },
      zoom: 13,
    },
  },
  {
    key: "essentials",
    title: "Everyday Essentials",
    icon: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/everydayIcon.svg",
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
import ProjectShowcase from "@/components/projectComponents/ProjectShowcase";
// import ProjectHeader from "@/components/projectComponents/Rudraksh/features/project/Header";

const SECTION_DATA = [
  {
    id: "high-living",
    label: "High Living Homes",
    description:
      "Rudraksh is envisioned as an expression of high living, where space, light, and serenity define everyday life. With two refined wings rising across 14 floors, each home feels expansive, composed, and effortlessly elegant.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/liv1.webp",
  },
  {
    id: "kitchen",
    label: "24×7 Cloud Kitchen",
    description:
      "A first of its kind offering, the round the clock cloud kitchen brings freshly prepared, personalised meals directly to residents, adding a new level of everyday convenience to luxury living.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/liv2.webp",
  },
  {
    id: "rooftop",
    label: "Rooftop Living",
    description:
      "An elevated rooftop experience featuring an infinity pool with panoramic city and sea views, complemented by wellness amenities that invite relaxation above the urban rhythm.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/liv3.webp",
  },
  {
    id: "location",
    label: "Prime Location",
    description:
      "Situated behind Infosys at Kottara, Rudraksh offers seamless access to key IT hubs, highways, education, and daily essentials, balancing connectivity with calm living.",
    imageSrc: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/liv5.png",
  },
];

const AMENITIES_DATA = [
  {
    id: "kitchen",
    label: "24x7 Cloud Kitchen",
    subtitle: "THE FIRST OF IT'S KIND IN MANGALURU",
    description: "Some days, stepping out feels like too much. And some cravings cannot wait. With a 24x7 cloud kitchen within reach, fresh meals become part of your everyday, arriving when you want them, just the way you like.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/amm1.webp",
  },
  {
    id: "wellness",
    label: "Wellness Club",
    subtitle: "",
    description: "In a busy routine, taking time to reset often gets pushed aside. Here, that distance disappears. The wellness club brings calm closer to home, making restoration something you can return to whenever you need.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/amm2.webp",
  },
  {
    id: "lobby",
    label: "Grand Entrance Lobby",
    subtitle: "",
    description: "The way you enter shapes how you feel. Instead of something purely functional, the grand lobby feels intentional, welcoming you into a space defined by quiet confidence and considered design.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/amm3.webp",
  },
  {
    id: "pool",
    label: "People Spaces",
    subtitle: "",
    description: "Good conversations should not need planning. These shared spaces make it easy to meet, pause, and spend time together, all within reach of home.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/amm4.webp",
  },
  {
    id: "gym",
    label: "Fitness & Activity Zones",
    subtitle: "ACTIVE LIFESTYLE",
    description: "When convenience meets routine, staying active feels natural. These spaces let you move, train, or reset whenever you choose, without working around time or distance.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/amm5.webp",
  },
  {
    id: "sky-deck",
    label: "Rooftop Infinity\nSwimming Pool",
    subtitle: "ABOVE THE CLOUDS",
    description: "Sometimes, all you need is a quiet escape. Elevated above the everyday, the rooftop pool offers openness, calm, and a space to unwind at your own pace.",
    image: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/amm6.webp",
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
        url: "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/og-images/rudraksh-og.png",
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
    images: ["https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/og-images/rudraksh-og.png"],
  },

  metadataBase: new URL("https://www.mukundmgmrealty.com/rudraksh"),
};

export default function Project1Page() {
  return (
    <main className="min-h-screen bg-black">
      <NewHeader projectLink="/project-enquire?project=rudraksh" projectName="Rudraksh" scrolledLogo="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/rudrakshDarkLogo.svg" logo="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/rudrakshLogo.svg" />
      {/* <ProjectHero
        projectLink="/project-enquire?project=rudraksh"
        projectName="Rudraksh"
        title={<>A Higher Way to Live</>}
        subtitle="Luxury Homes at Rudraksh"
        pdfPath="https://storage.googleapis.com/mukund-website.firebasestorage.app/downloadFloorPlan/typical layout.pdf"
        FLOOR_PATHS_VIEWBOX={FLOOR_PATHS_VIEWBOX}
        heroImageDesktop="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/hero.png"
        heroImageMobile="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/newMobileHero.png"
        HERO_MARKERS={HERO_MARKERS}
        floorData={floorData}
        FLOOR_PATHS={FLOOR_PATHS}
        exploreTitle={<>A Higher Way to Live</>}
        exploreSubtitle={<>Luxury Homes <br /> at Rudraksh</>}
        accentColor="#4F5D4A"
      /> */}
      <ProjectHighLiving data={SECTION_DATA} accentColor="#4F5D4A" />
      <HighlivingSection
        projectLink="/project-enquire?project=rudraksh"
        btnAccentColor="#5A1F26"
        heading="Luxury in the Contours of Life"
        description="Welcome to Rudraksh, an exquisite residential address envisioned for those who seek the true essence of high living. Thoughtfully crafted with a focus on space, comfort, and timeless elegance, the project offers well-planned homes, curated lifestyle amenities, and a setting that balances serenity with city connectivity. Every detail is shaped to create an elevated living experience where design, luxury, and everyday ease come together."
        imageSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/testmonials%20thumbnail%2Ffreepik__ultra-premium-photorealistic-3d-architectural-rend__45469%201%20(1).png?alt=media&token=68d22cd0-b635-47cf-a44c-93c8b544673a"
        videoSrc="https://firebasestorage.googleapis.com/v0/b/mukund-website.firebasestorage.app/o/ProjectVideos%2FMGM_Rudraksh_FHD.mp4?alt=media&token=8e11695c-384c-431e-91f4-f5ace13790ab"
      />
      <AmenitiesSection projectLink="/project-enquire?project=rudraksh" data={AMENITIES_DATA} accentColor="#4F5D4A" btnAccentColor="#5A1F26" />
      <FeaturesSection
        projectLink="/project-enquire?project=rudraksh"
        features={FEATURES}
        heading="Everything You’re Looking For"
        completed={false}
        galleryImages={[
          "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/car1.webp",
          "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/car2.webp",
          "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/car3.webp",
          "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/car4.webp",
          "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/car5.webp",
          "https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/car6.webp",
        ]}
        variant="left"
        btnAccentColor="#5A1F26"
        accentColor="#4F5D4A"
      />
      {/* <ProjectInteractivePlan /> */}
      {/* <MapSection
        data={MAP_DATA}
        mainMarkerPosition={{ lat: 12.90477577287541, lng: 74.83732199444988 }}
        customMarkerImage="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mapIcon.svg"
        accentColor="#4F5D4A"
        boxAccentColor="#5A1F26"
      /> */}
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
        mobImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/mobileCta2.png"
        deskImg="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/images/rudrakshImages/ctaImg1.png"
      />

      {/* Other sections can be implemented here */}
      {/* <ProjectAbout /> */}
      {/* <ProjectGallery /> */}
<ProjectShowcase/>
      <Footer />
    </main>
  );
}
