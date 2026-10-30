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
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/careers`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            console.error(`Failed to fetch careers: ${res.statusText}`);
            return [];
        }

        const data = await res.json();
        let colorIndex = 0;
        const fetchedJobs: Job[] = [];

        for (const item of data) {
            if (item.isActive !== false) {
                const title = item.heading || "";

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
                    experience: item.experiences || []
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
