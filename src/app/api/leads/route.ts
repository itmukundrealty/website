import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        if (!body || typeof body !== "object") {
            return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
        }

        const name = typeof body.name === "string" ? body.name.trim() : "";
        const email = typeof body.email === "string" ? body.email.trim() : "";
        const phone = typeof body.phone === "string" ? body.phone.trim() : "";
        const project = typeof body.project === "string" ? body.project.trim() : "General Enquiry";
        const pageUrl = typeof body.pageUrl === "string" ? body.pageUrl.trim() : "https://mukundmgmrealty.com";

        if (!name || (!email && !phone)) {
            return NextResponse.json({ error: "Name and contact info are required" }, { status: 400 });
        }

        const response = await fetch("https://app.accelr.app/api/leads/capture", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trackingKey: "cms2ta6eg000aio1zzys8rt9m",
                data: {
                    name,
                    email,
                    phone,
                    project
                },
                pageUrl
            })
        });

        if (!response.ok) {
            const errText = await response.text();
            console.error("Accelr Webhook Error Response:", response.status, errText);
            return NextResponse.json({ error: "Webhook failed to capture lead" }, { status: response.status });
        }

        const result = await response.json();
        return NextResponse.json({ success: true, result });
    } catch (error: any) {
        console.error("Accelr Lead Capture Route Error:", error);
        return NextResponse.json({ error: error.message || "Failed to capture lead" }, { status: 500 });
    }
}
