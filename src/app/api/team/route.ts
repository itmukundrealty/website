import { NextResponse } from "next/server";
import { getCachedTeamMembers } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const team = await getCachedTeamMembers();
        return NextResponse.json(team);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

