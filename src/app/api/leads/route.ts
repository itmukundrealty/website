import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, project, pageUrl } = body;

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
                    project: project || "General Enquiry"
                },
                pageUrl: pageUrl || "https://yourwebsite.com"
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
