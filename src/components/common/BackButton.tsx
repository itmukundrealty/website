"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

export default function BackButton({ label = "Back" }: { label?: string }) {
    const router = useRouter();
    return (
        <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-[#505153] hover:text-[#0097DC] transition-colors group"
        >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium uppercase tracking-wider">{label}</span>
        </button>
    );
}

