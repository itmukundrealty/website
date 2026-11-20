import { NextRequest, NextResponse } from "next/server";
import { CMS_BASE_URL } from "@/lib/api";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function POST(
    req: NextRequest,
    { params }: { params: Promise<{ type: string }> }
) {
    try {
        const { type } = await params;
        const body = await req.json();

        // 1. Forward directly to CMS
        try {
            const cmsRes = await fetch(`${CMS_BASE_URL}/api/enquiries/${type}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            if (cmsRes.ok) {
                const data = await cmsRes.json();
                return NextResponse.json(data, { status: cmsRes.status });
            }
        } catch (cmsError) {
            console.warn("CMS submission failed, falling back to direct Firestore:", cmsError);
        }

        // 2. Direct Firestore fallback if CMS is unreachable
        if (process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID && db) {
            const collectionName = (type === "general" || type === "generalEnquiries")
                ? "generalEnquiries"
                : "projectEnquiries";

            const cleanData: Record<string, any> = {
                name: body.name || "",
                email: body.email || "",
                phone: body.phone || "",
                message: body.message || body.comments || "",
                consent: Boolean(body.consent),
                createdAt: serverTimestamp(),
            };
            if (body.project) cleanData.project = body.project;
            if (body.interestedIn) cleanData.interestedIn = body.interestedIn;
            if (body.enquiryType) cleanData.enquiryType = body.enquiryType;
            if (body.source) cleanData.source = body.source;
            if (body.downloadedFile) cleanData.downloadedFile = body.downloadedFile;
            if (body.fileName) cleanData.fileName = body.fileName;

            const docRef = await addDoc(collection(db, collectionName), cleanData);

            return NextResponse.json({ success: true, id: docRef.id, fallback: true });
        }

        return NextResponse.json({ error: "Failed to submit enquiry" }, { status: 500 });
    } catch (error: any) {
        console.error("Error submitting enquiry:", error);
        return NextResponse.json({ error: error.message || "Failed to process enquiry" }, { status: 500 });
    }
}
