import MissionStatement from "@/components/aboutComponents/MissionStatement";
import PhilosophySection from "@/components/aboutComponents/PhilosophySection";
import CardSection from "@/components/CareerComponents/CardSection";
import FormSection from "@/components/CareerComponents/FormSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getJobs } from "@/data/jobs";

export default async function page() {
    const jobs = await getJobs();

    return (
        <div>
            <Header />
            <CardSection jobs={jobs} />
            <MissionStatement
                text={
                    <>
                        We're not building just any team.{' '} <br />
                        <span className="font-semibold text-[#505153]">
                            We seek visionaries who shape futures.
                        </span>
                    </>
                }
                imageSrc="/icons/mukund.svg"
            />


            <PhilosophySection
                heading={
                    <>
                        <span className="font-medium">At Mukund </span> Realty, meaningful work is shaped by people who value responsibility and approach every task with care. When the right individuals come together in a thoughtful setting, strong ideas take form and enduring value is created.
                    </>
                }
                description={
                    <>
                        <span className="font-thin">If this reflects how you prefer to work, we would be glad to connect.</span>
                    </>
                }
                imageSrc="/icons/mukund.svg"
            />

            <FormSection />
            <Footer />
        </div>
    );
}