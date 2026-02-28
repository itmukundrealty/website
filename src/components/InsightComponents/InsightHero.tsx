import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function InsightHero() {
    return (
        <section className="bg-white pt-24 pb-16 md:pt-32 md:pb-24">
            <div className=" mx-auto px-6 md:px-12 lg:px-20 xl:px-54">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">

                    {/* Left Content */}
                    <div className="flex-1 md:pr-12 lg:pr-24 flex flex-col justify-center">
                        <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[1.05] font-medium text-[#191919] mb-12 tracking-tight">
                            What&apos;s New<br />at Mukund
                        </h1>

                        <div className="flex flex-col">
                            <span className="text-xs uppercase tracking-widest text-[#888888] font-light mb-6">
                                DATE 16 JAN 2026
                            </span>

                            <h2 className="text-[#555555] text-[1.35rem] md:text-[1.5rem] leading-relaxed font-normal mb-8 max-w-[450px]">
                                Vertex Managed Workspace<br />
                                Wins Prestigious &quot;Excellence...
                            </h2>

                            <Link
                                href="#"
                                className="flex items-center gap-1.5 text-[#00A3E0] font-semibold hover:text-[#008CBE] transition-colors w-fit pt-1"
                            >
                                <ArrowUpRight className="w-[17px] h-[17px]" strokeWidth={2} />
                                <span className="text-[14px]">Read More</span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full max-w-[500px] md:max-w-none mx-auto md:mx-0">
                        <div className="relative w-full aspect-[4/4.5] md:aspect-[4/4] max-w-[580px] ml-auto bg-gray-100">
                            <Image
                                src="/images/InsightHero.png"
                                alt="Speaker at Event"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}