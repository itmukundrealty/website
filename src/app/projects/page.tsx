import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"

import ProjectsMapSection from "@/components/ProjectListingComponents/ProjectsMapSection";

// Configure Next.js Route to be dynamic due to searchParams usage
export const dynamic = 'force-dynamic';

import { Suspense } from "react";

export default function page() {
    return (
        <div>
            <Header />
            <Suspense fallback={<div>Loading projects...</div>}>
                <ProjectsMapSection />
            </Suspense>
            <Footer />
        </div>
    );
}
