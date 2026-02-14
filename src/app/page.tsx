"use client";

import CraftedForMomentsSection from "@/components/sections/CraftedForMomentsSection";
import DesignedForMatters from "@/components/sections/DesignedForMatters";
import ExperienceStandardSection from "@/components/sections/ExperienceStandardSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LandingHero from "@/components/sections/LandingHero";
import LandmarkSection from "@/components/sections/LandmarkSection";
import PrinciplesSection from "@/components/sections/PrinciplesSection";
import Script from "next/script";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "Mukund Realty",
    "url": "https://mukundrealty.vercel.app/",
    "description": "Mangalore-based real estate developer offering luxury and affordable residential and commercial projects.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Suprabhath Building, Bejai Kapikad Road",
      "addressLocality": "Mangalore",
      "addressRegion": "Karnataka",
      "postalCode": "575004",
      "addressCountry": "IN"
    },
    "telephone": "+91 70909 33700"
  };

  return (
    <main className="min-h-screen bg-white">
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <LandingHero />
      <PrinciplesSection />
      <div className="mt-[8vh] lg:mt-[20vh]">
        <LandmarkSection />
      </div>
      {/* <PortfolioSection /> */}
      <ExperienceStandardSection />
      {/* <InsightsSection /> */}
      <CraftedForMomentsSection />
      <DesignedForMatters />
      <Footer />
    </main>
  );
}
