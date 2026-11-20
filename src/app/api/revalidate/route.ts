import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

const REVALIDATION_SECRET = process.env.REVALIDATION_SECRET || "mukund_secret_reval_token_2026";

async function handleRevalidation(req: NextRequest) {
    let secret = "";
    let tags: string[] = [];
    let paths: string[] = [];

    const url = new URL(req.url);
    const querySecret = url.searchParams.get("secret");
    const queryTag = url.searchParams.get("tag");
    const queryPath = url.searchParams.get("path");

    if (querySecret) secret = querySecret;
    if (queryTag) tags.push(...queryTag.split(",").map((t) => t.trim()).filter(Boolean));
    if (queryPath) paths.push(...queryPath.split(",").map((p) => p.trim()).filter(Boolean));

    if (req.method === "POST") {
        try {
            const body = await req.json();
            if (body && typeof body === "object") {
                if (body.secret) secret = body.secret;
                if (body.tag && typeof body.tag === "string") tags.push(body.tag.trim());
                if (Array.isArray(body.tags)) tags.push(...body.tags.map((t: any) => String(t).trim()));
                if (body.path && typeof body.path === "string") paths.push(body.path.trim());
                if (Array.isArray(body.paths)) paths.push(...body.paths.map((p: any) => String(p).trim()));
            }
        } catch {
            // Body was not JSON, fallback to query parameters
        }
    }

    if (secret !== REVALIDATION_SECRET) {
        return NextResponse.json({ error: "Invalid revalidation secret token" }, { status: 401 });
    }

    if (!tags.length && !paths.length) {
        return NextResponse.json(
            { error: "Must provide at least one 'tag' or 'path' to revalidate" },
            { status: 400 }
        );
    }

    const revalidatedTags: string[] = [];
    const revalidatedPaths: string[] = [];

    // Deduplicate
    const uniqueTags = Array.from(new Set(tags));
    const uniquePaths = Array.from(new Set(paths));

    for (const tag of uniqueTags) {
        try {
            (revalidateTag as any)(tag, { expire: 0 });
            revalidatedTags.push(tag);
        } catch (err) {
            console.error(`Failed to revalidate tag '${tag}':`, err);
        }
    }

    for (const path of uniquePaths) {
        try {
            revalidatePath(path);
            revalidatedPaths.push(path);
        } catch (err) {
            console.error(`Failed to revalidate path '${path}':`, err);
        }
    }

    return NextResponse.json({
        revalidated: true,
        tags: revalidatedTags,
        paths: revalidatedPaths,
        now: Date.now(),
    });
}

export async function GET(req: NextRequest) {
    return handleRevalidation(req);
}

export async function POST(req: NextRequest) {
    return handleRevalidation(req);
}
