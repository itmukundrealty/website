import Link from 'next/link';
import { Cloud } from 'lucide-react';

export default function ShapingHeader() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="text-[#009FE3] p-1.5 rounded-lg transition-transform group-hover:scale-105">
                        <Cloud size={28} strokeWidth={2.5} />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-[#333333]">
                        MUKUND REALTY
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {['About', 'Projects', 'Insights', 'Contact'].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className="text-sm font-semibold uppercase tracking-wider text-[#666666] hover:text-[#009FE3] transition-colors"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}