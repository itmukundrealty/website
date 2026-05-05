import MissionStatement from "@/components/aboutComponents/MissionStatement";
import PhilosophySection from "@/components/aboutComponents/PhilosophySection";
// import CardSection from "@/components/CareerComponents/CardSection";
import NewCardSection from "@/components/CareerComponents/NewCardSection";
import FormSection from "@/components/CareerComponents/FormSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { getJobs } from "@/data/jobs";

export default async function page() {
    const jobs = await getJobs();

    return (
        <div>
            <Header />
            <NewCardSection jobs={jobs} />
            <MissionStatement
                text={
                    <>
                        We're not building just any team.{' '} <br />
                        <span className="font-medium text-[#505153]">
                            We seek visionaries who <br className="hidden md:block" />
                            shape futures.
                        </span>
                    </>
                }
                imageSrc="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mukund.svg"
                imageClassName="blur-lg"
            />


            <PhilosophySection
                heading={
                    <>
                        <span className="font-light">At <span className="font-medium"> Mukund  Realty</span> , meaningful work is shaped by people who value responsibility and approach every task with care. When the right individuals come together in a thoughtful setting, strong ideas take form and enduring value is created.</span>
                    </>
                }
                description={
                    <>
                        <span className="font-light">If this reflects how you prefer to work, we would be glad to connect.</span>
                    </>
                }
                imageSrc="https://storage.googleapis.com/mukund-website.firebasestorage.app/publicImages/icons/mukund.svg"
            />

            <FormSection />
            <Footer />
        </div>
    );
}