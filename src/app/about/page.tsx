
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroGrid from '@/components/aboutComponents/HeroGrid';
import MissionStatement from '@/components/aboutComponents/MissionStatement';
import PhilosophySection from '@/components/aboutComponents/PhilosophySection';
import TeamSelector from '@/components/aboutComponents/TeamSelector';
import QuoteBanner from '@/components/aboutComponents/QuoteBanner';
import TeamGroupSection from '@/components/aboutComponents/TeamGroupSection';

export default function ShapingPage() {
    return (
        <main className="bg-white min-h-screen">
            <Header />
            <HeroGrid />
            <MissionStatement />
            <PhilosophySection />
            <TeamSelector />
            <QuoteBanner />
            <TeamGroupSection />
            <Footer />
        </main>
    );
}