import { NextResponse } from "next/server";
import { getCachedBlogs } from "@/lib/server-api";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
        const blogs = await getCachedBlogs();
        return NextResponse.json(blogs);
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

