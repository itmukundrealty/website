import InsightHero from "@/components/InsightComponents/InsightHero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import InsightsSection from "@/components/sections/InsightsSection";
import CompanySection from "@/components/InsightComponents/CompanySection";
import RelatedArticleSection from "@/components/InsightComponents/RelatedArticleSection";


export default function InsightsPage() {
    return (
        <div>
            <Header />
            <InsightHero />
            
            <InsightsSection />
            <CompanySection />
            {/* <RelatedArticleSection /> */}
            <Footer />

        </div>
    );
}