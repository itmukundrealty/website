
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
              <MissionStatement
                text={
                    <>
                        We craft spaces that go beyond buildings, becoming places{' '} <br />
                        <span className="font-semibold text-[#505153]">
                            where life, relationships and legacies thrive.
                        </span>
                    </>
                }
                imageSrc="/images/aboutImages/mukundOutline.svg"
            />
            <PhilosophySection
                heading={
                    <>
                        <span className="font-medium">At Mukund Realty, we build with responsibility,
                            integrity, and long term intent, guiding every
                            decision from planning through execution.</span> <span className="font-thin">We
                                believe real estate is about shaping environments
                                that serve people, businesses, and communities
                                with purpose.</span>
                    </>
                }
                description={
                    <>
                        Through disciplined processes, collaborative
                        teams, and a focus on function and transparency,
                        we deliver spaces that perform reliably and create
                        lasting value.
                    </>
                }
                imageSrc="/icons/mukund.svg"
            />
            <TeamSelector />
            <QuoteBanner />
            <TeamGroupSection />
            <Footer />
        </main>
    );
}