
import StyledMap from "@/components/common/Shared/StyledMap";
import StrategicMap from "@/components/projectComponents/ProjectMapSection";
import StrategicallyConnected from "@/components/projectComponents/ProjectMapSection";
import { ProjectHero } from "@/components/projectComponents/Rudraksh/features/project/Hero";
import ProjectHighLiving from "@/components/projectComponents/Rudraksh/features/project/HighLiving";
import HighlivingSection from "@/components/projectComponents/Rudraksh/features/project/HighlivingSection";
import AmenitiesSection from "@/components/projectComponents/Rudraksh/features/project/AmenitiesSection";
import FeaturesSection from "@/components/projectComponents/Rudraksh/features/project/FeaturesSection";

import MapSection from "@/components/projectComponents/Rudraksh/MapSection";
import ExperienceSection from "@/components/projectComponents/Rudraksh/features/project/ExperienceSection";
import CTASection from "@/components/projectComponents/Rudraksh/features/project/CTASection";
import Footer from "@/components/layout/Footer";
import ProjectHeader from "@/components/projectComponents/Rudraksh/features/Header";
// import ProjectHeader from "@/components/projectComponents/Rudraksh/features/project/Header";

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
        "Real Estate Mangalore"
    ],

    authors: [{ name: "Mukund MGM Realty" }],
    creator: "Mukund MGM Realty",
    publisher: "Mukund MGM Realty",

    openGraph: {
        title: "Rudraksh | Luxury Living by Mukund MGM Realty",
        description:
            "Premium residential apartments in Mangalore offering modern amenities, elegant architecture, and high-quality living experience.",
        url: "https://mukundrealty.vercel.app/",
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
        description:
            "Explore luxury 2, 3 & 4 BHK homes by Mukund MGM Realty designed for comfort, lifestyle, and modern living.",
        images: ["/og-images/rudraksh-og.png"],
    },

    metadataBase: new URL("https://www.mukundmgmrealty.com/rudraksh"),
};

export default function Project1Page() {
    return (
        <main className="min-h-screen bg-black">
            <ProjectHeader />
            <ProjectHero />
            <ProjectHighLiving />
            <HighlivingSection />
            <AmenitiesSection />
            <FeaturesSection />
            {/* <ProjectInteractivePlan /> */}

            <MapSection />
            <ExperienceSection />
            <CTASection />



            {/* Other sections can be implemented here */}
            {/* <ProjectAbout /> */}
            {/* <ProjectGallery /> */}


            <Footer />
        </main>
    );
}
