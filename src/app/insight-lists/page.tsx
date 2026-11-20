import InsightHero from "@/components/InsightComponents/InsightHero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InsightsSection from "@/components/sections/InsightsSection";
import CompanySection from "@/components/InsightComponents/CompanySection";
import { getCachedBlogs, getCachedAnnouncements } from "@/lib/server-api";

export const revalidate = 3600;

export default async function InsightsPage() {
    const [blogs, announcements] = await Promise.all([
        getCachedBlogs().catch(() => []),
        getCachedAnnouncements().catch(() => []),
    ]);

    return (
        <div>
            <Header />
            <InsightHero initialBlog={blogs[0] || null} />
            <InsightsSection initialBlogs={blogs} />
            <CompanySection initialAnnouncements={announcements} />
            <Footer />
        </div>
    );
}