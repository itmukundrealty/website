import { notFound } from 'next/navigation';
import { getJobs } from '@/data/jobs';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FormSection from '@/components/CareerComponents/FormSection';
import ApplyNowWrapper from '@/components/CareerComponents/ApplyNowWrapper';

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const jobs = await getJobs();
    const job = jobs.find((j) => j.slug === slug);

    if (!job) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6 md:px-12 lg:px-24 xl:px-52 max-w-full mx-auto w-full">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-medium text-[#505153] mb-4">{job.title}</h1>
                        <p className="text-xl md:text-2xl font-normal text-[#0097DC]">{job.type}</p>
                    </div>
                    <ApplyNowWrapper jobTitle={job.title} />
                </div>

                {/* Description */}
                <div className="mb-12">
                    <p className="text-base md:text-lg text-[#505153] font-light leading-relaxed">
                        {job.description}
                    </p>
                </div>

                {/* Key Responsibilities */}
                {job.responsibilities && job.responsibilities.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-xl md:text-2xl font-medium text-[#505153] mb-6">Key Responsibilities</h2>
                        <ul className="list-disc list-outside ml-5 space-y-2 text-[#505153] font-light text-base md:text-[17px]">
                            {job.responsibilities.map((resp, index) => (
                                <li key={index} className="pl-2 leading-relaxed">{resp}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Required Experience */}
                {job.experience && job.experience.length > 0 && (
                    <div className="mb-16">
                        <h2 className="text-xl md:text-2xl font-medium text-[#505153] mb-6">Required Experience</h2>
                        <ul className="list-disc list-outside ml-5 space-y-2 text-[#505153] font-light text-base md:text-[17px]">
                            {job.experience.map((exp, index) => (
                                <li key={index} className="pl-2 leading-relaxed">{exp}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Go Back */}
                <div className="mt-20">
                    <Link href="/careers" className="inline-flex items-center gap-6 text-[#505153] hover:text-[#505153] transition-colors group">
                        <div className="w-14 h-14 rounded-full border-2 border-[#505153] flex items-center justify-center group-hover:border-[#505153] transition-colors">
                            <ArrowLeft size={28} className="text-[#505153] group-hover:text-[#505153] transition-colors" />
                        </div>
                        <span className=" text-xl md:text-2xl font-medium">Go Back</span>
                    </Link>
                </div>
            </main>

            {/* <FormSection /> */}
            <Footer />
        </div>
    );
}

export async function generateStaticParams() {
    const jobs = await getJobs();
    return jobs.map((job) => ({
        slug: job.slug,
    }));
}