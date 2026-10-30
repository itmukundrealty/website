import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        if (!data || typeof data !== "object") {
            return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
        }

        const rawName = typeof data.name === "string" ? data.name.trim().slice(0, 100) : "";
        const email = typeof data.email === "string" ? data.email.trim().slice(0, 150) : "";
        const phone = typeof data.phone === "string" ? data.phone.trim().slice(0, 30) : "";

        if (!rawName || (!email && !phone)) {
            return NextResponse.json({ error: "Name and contact information (email or phone) are required" }, { status: 400 });
        }

        const nameParts = rawName.split(/\s+/);
        const fname = (nameParts[0] || "Lead").slice(0, 50);
        const lname = (nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Customer").slice(0, 50);

        const project = typeof data.project === "string" ? data.project.trim().slice(0, 100) : "General";
        const interestedIn = typeof data.interestedIn === "string" ? data.interestedIn.trim().slice(0, 100) : "General";

        const crmData = {
            fname,
            mname: "",
            lname,
            gender: "",
            residing: "India",
            email: email,
            phone: phone,
            city: "",
            state: "",
            street: "",
            zipcode: "",
            country: "India",
            source: "Website",
            solution: "",
            company_name: "",
            enquiry_for: "Residential",
            enquiry_for_type: interestedIn,
            team_size: "0",
            description: `Enquiry from website for ${project}`.slice(0, 500),
            location: project || "Mukund Realty",
            campaign: "Website Campaign",
            category: "lead"
        };

        const response = await fetch("https://mgmcrm.intelitechsolutions.in/api/create/lead-opportunity", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(crmData),
        });

        if (!response.ok) {
            console.error("CRM response error:", response.status, await response.text());
            return NextResponse.json({ error: "CRM service error" }, { status: response.status });
        }

        const result = await response.json();
        return NextResponse.json(result);
    } catch (error: any) {
        console.error("CRM API Error:", error);
        return NextResponse.json({ error: "Failed to push to CRM" }, { status: 500 });
    }
}
