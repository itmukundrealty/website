import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase";

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
        const jobsRef = collection(db, "careers");
        const q = query(jobsRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        let colorIndex = 0;
        const fetchedJobs: Job[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();
            // Only show active jobs if isActive flag exists
            if (data.isActive !== false) {
                const title = data.heading || "";

                // create URL-friendly slug and append a bit of ID for uniqueness
                const slugCandidate = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                const slug = `${slugCandidate}-${doc.id.substring(0, 5)}`;

                fetchedJobs.push({
                    id: doc.id,
                    title: title,
                    slug: slug,
                    type: data.type || "",
                    description: data.description || "",
                    color: colors[colorIndex % colors.length],
                    responsibilities: data.responsibilities || [],
                    experience: data.experiences || []
                });
                colorIndex++;
            }
        });

        return fetchedJobs;
    } catch (error) {
        console.error("Error fetching jobs from Firebase:", error);
        return [];
    }
}
