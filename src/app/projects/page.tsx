import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header"

import ProjectsMapSection from "@/components/ProjectListingComponents/ProjectsMapSection";

export default function page() {
    return (
        <div>
            <Header />
            <ProjectsMapSection />
            <Footer />
        </div>
    );
}
