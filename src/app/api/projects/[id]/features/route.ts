import { NextRequest, NextResponse } from "next/server";
import { getCachedProjectFeatures } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET(
    _req: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const images = await getCachedProjectFeatures(id);
        return NextResponse.json(images);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

