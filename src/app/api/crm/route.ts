import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const data = await request.json();

        const nameParts = data.name.trim().split(/\s+/);
        const fname = nameParts[0] || "Test";
        const lname = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "Lead";

        const crmData = {
            fname,
            mname: "",
            lname,
            gender: "",
            residing: "India",
            email: data.email,
            phone: data.phone,
            city: "",
            state: "",
            street: "",
            zipcode: "",
            country: "India",
            source: "Website",
            solution: "",
            company_name: "",
            enquiry_for: "Residential",
            enquiry_for_type: data.interestedIn,
            team_size: "0",
            description: `Enquiry from website for ${data.project}`,
            location: data.project,
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

        const result = await response.json();

        return NextResponse.json(result);
    } catch (error) {
        console.error("CRM API Error:", error);
        return NextResponse.json({ error: "Failed to push to CRM" }, { status: 500 });
    }
}
