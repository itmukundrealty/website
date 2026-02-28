
import Link from "next/link";

export default function InformationSection() {
    return (
        <section className="relative w-full py-24 bg-[#F9F9F9] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#009DE2] opacity-80 blur-[80px] rounded-full -translate-x-1/2" />
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#009DE2] opacity-80 blur-[60px] rounded-full translate-x-1/3 -translate-y-1/3" />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h2 className="text-[#333333] font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                    Need more information?
                </h2>
                <p className="text-[#888888] font-sans text-sm md:text-base tracking-wide mb-8 font-light">
                    Contact our team.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 font-sans font-medium text-[#009DE2]">
                    <Link href="tel:+917090933700" className="hover:underline transition-all">
                        +91 70909 33700
                    </Link>
                    <Link href="mailto:sales@mukundrealty.com" className="hover:underline transition-all">
                        sales@mukundrealty.com
                    </Link>
                </div>
            </div>
        </section>
    );
}