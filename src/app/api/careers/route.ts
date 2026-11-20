import { NextResponse } from "next/server";
import { getCachedJobs } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const jobs = await getCachedJobs();
        return NextResponse.json(jobs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

