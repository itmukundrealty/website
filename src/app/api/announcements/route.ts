import { NextResponse } from "next/server";
import { getCachedAnnouncements } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const announcements = await getCachedAnnouncements();
        return NextResponse.json(announcements);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

