import { NextRequest, NextResponse } from "next/server";
import { getCachedAnnouncementById } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const announcement = await getCachedAnnouncementById(id);
        if (!announcement) {
            return NextResponse.json({ error: "Announcement not found" }, { status: 404 });
        }
        return NextResponse.json(announcement);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

