import { CMS_BASE_URL } from "@/lib/api";

export interface Job {
    id: string;
    title: string;
    slug: string;
    type: string;
    description: string;
    color: string;
    responsibilities: string[];
    experience: string[];
}

const colors = ["#93CCE9", "#4DB4EA", "#0097DC"]; // Lightest blue, Medium blue, Darkest blue

export async function getJobs(): Promise<Job[]> {
    if (typeof window === "undefined") {
        try {
            const { getCachedJobs } = await import("@/lib/server-api");
            return await getCachedJobs();
        } catch (err) {
            console.warn("Failed to load cached jobs, falling back to fetch:", err);
        }
    }

    try {
        const url = typeof window !== "undefined" ? "/api/careers" : `${CMS_BASE_URL}/api/careers`;
        const res = await fetch(url, {
            next: { tags: ["careers", "jobs"], revalidate: 3600 },
        });

        if (!res.ok) {
            console.error(`Failed to fetch careers: ${res.statusText}`);
            return [];
        }

        const result = await res.json();
        const data = Array.isArray(result) ? result : result.data || [];
        let colorIndex = 0;
        const fetchedJobs: Job[] = [];

        for (const item of data) {
            if (item.isActive !== false) {
                const title = item.heading || item.title || "";

                // create URL-friendly slug and append a bit of ID for uniqueness
                const slugCandidate = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                const slug = `${slugCandidate}-${(item.id || "").substring(0, 5)}`;

                fetchedJobs.push({
                    id: item.id,
                    title: title,
                    slug: slug,
                    type: item.type || "",
                    description: item.description || "",
                    color: colors[colorIndex % colors.length],
                    responsibilities: item.responsibilities || [],
                    experience: item.experiences || item.experience || []
                });
                colorIndex++;
            }
        }

        return fetchedJobs;
    } catch (error) {
        console.error("Error fetching jobs from CMS:", error);
        return [];
    }
}
