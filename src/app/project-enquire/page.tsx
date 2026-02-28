"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import EnquireProject from "@/components/EnquireComponents/EnquireProject";
import FaqSection from "@/components/contact/FaqSection";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import InfoBanner from "@/components/EnquireComponents/InfoBanner";

import { PROJECT_FAQS } from "@/data/faqs";


function FaqContent() {
    const searchParams = useSearchParams();
    const projectParam = searchParams.get("project");

    const [currentProject, setCurrentProject] = useState<string>("default");

    useEffect(() => {
        let sourceProject = projectParam;

        if (!sourceProject && typeof window !== "undefined") {
            const referrer = document.referrer;
            if (referrer) {
                try {
                    const url = new URL(referrer);
                    const pathSegments = url.pathname.split("/").filter(Boolean);
                    if (pathSegments.length > 0 && pathSegments[0] !== "project-enquire") {
                        sourceProject = pathSegments[0];
                    }
                } catch (e) {
                    // Ignore
                }
            }
        }

        if (sourceProject && PROJECT_FAQS[sourceProject.toLowerCase()]) {
            setCurrentProject(sourceProject.toLowerCase());
        } else {
            setCurrentProject("default");
        }
    }, [projectParam]);

    const faqData = PROJECT_FAQS[currentProject] || PROJECT_FAQS["default"];

    return <FaqSection faqData={faqData} />;
}

export default function ProjectEnquirePage() {
    return (
        <div className="min-h-screen bg-white font-sans text-slate-900">
            <Header />
            <EnquireProject />
            <InfoBanner />

            <Suspense fallback={<div className="py-24 text-center">Loading FAQs...</div>}>
                <FaqContent />
            </Suspense>
            <Footer />
        </div>
    );
}
