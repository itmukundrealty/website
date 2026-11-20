import { NextResponse } from "next/server";
import { getCachedTestimonials } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const testimonials = await getCachedTestimonials();
        return NextResponse.json(testimonials);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

