import { unstable_cache } from "next/cache";
import { Blog, TeamMember, Testimonial, DEFAULT_TESTIMONIALS, extractYouTubeEmbedUrl, CMS_BASE_URL } from "./api";
import { db } from "./firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

const REVALIDATE_INTERVAL = 3600; // 1 hour ISR revalidation fallback

// ----------------------------------------------------
// Blogs & Insights
// ----------------------------------------------------
async function fetchBlogsFromSource(): Promise<Blog[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/blogs`, {
            next: { tags: ["blogs", "insights"], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const data = await res.json();
            const blogs = Array.isArray(data) ? (data as Blog[]) : (data.data || []);
            if (blogs.length > 0) return blogs;
        }
    } catch (error) {
        console.warn("CMS blogs fetch failed, falling back to Firestore:", error);
    }

    try {
        const snapshot = await getDocs(collection(db, "blogs"));
        if (!snapshot.empty) {
            const list: Blog[] = [];
            snapshot.forEach((doc) => {
                list.push({ id: doc.id, ...(doc.data() as any) });
            });
            return list.sort((a, b) => {
                const timeA = new Date(a.date || a.createdAt || 0).getTime();
                const timeB = new Date(b.date || b.createdAt || 0).getTime();
                return timeB - timeA;
            });
        }
    } catch (dbErr) {
        console.error("Firestore blogs query fallback error:", dbErr);
    }
    return [];
}

export const getCachedBlogs = unstable_cache(
    fetchBlogsFromSource,
    ["blogs-list-cache"],
    {
        tags: ["blogs", "insights"],
        revalidate: REVALIDATE_INTERVAL,
    }
);

async function fetchBlogByIdFromSource(id: string): Promise<Blog | null> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/blogs/${id}`, {
            next: { tags: ["blogs", "insights", `blog-${id}`], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const data = await res.json();
            if (data && !data.error) return data as Blog;
        }
    } catch (error) {
        console.warn(`CMS blog ${id} fetch failed, falling back to Firestore:`, error);
    }

    try {
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...(docSnap.data() as any) };
        }
    } catch (dbErr) {
        console.error(`Firestore blog ${id} query fallback error:`, dbErr);
    }
    return null;
}

export const getCachedBlogById = (id: string) =>
    unstable_cache(
        () => fetchBlogByIdFromSource(id),
        [`blog-detail-${id}`],
        {
            tags: ["blogs", "insights", `blog-${id}`],
            revalidate: REVALIDATE_INTERVAL,
        }
    )();

// ----------------------------------------------------
// Announcements
// ----------------------------------------------------
async function fetchAnnouncementsFromSource(): Promise<Blog[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/announcements`, {
            next: { tags: ["announcements"], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const data = await res.json();
            const items = Array.isArray(data) ? (data as Blog[]) : (data.data || []);
            if (items.length > 0) return items;
        }
    } catch (error) {
        console.warn("CMS announcements fetch failed, falling back to Firestore:", error);
    }

    try {
        const snapshot = await getDocs(collection(db, "announcements"));
        if (!snapshot.empty) {
            const list: Blog[] = [];
            snapshot.forEach((doc) => {
                list.push({ id: doc.id, ...(doc.data() as any) });
            });
            return list.sort((a, b) => {
                const timeA = new Date(a.date || a.createdAt || 0).getTime();
                const timeB = new Date(b.date || b.createdAt || 0).getTime();
                return timeB - timeA;
            });
        }
    } catch (dbErr) {
        console.error("Firestore announcements query fallback error:", dbErr);
    }
    return [];
}

export const getCachedAnnouncements = unstable_cache(
    fetchAnnouncementsFromSource,
    ["announcements-list-cache"],
    {
        tags: ["announcements"],
        revalidate: REVALIDATE_INTERVAL,
    }
);

async function fetchAnnouncementByIdFromSource(id: string): Promise<Blog | null> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/announcements/${id}`, {
            next: { tags: ["announcements", `announcement-${id}`], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const data = await res.json();
            if (data && !data.error) return data as Blog;
        }
    } catch (error) {
        console.warn(`CMS announcement ${id} fetch failed, falling back to Firestore:`, error);
    }

    try {
        const docRef = doc(db, "announcements", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...(docSnap.data() as any) };
        }
    } catch (dbErr) {
        console.error(`Firestore announcement ${id} query fallback error:`, dbErr);
    }
    return null;
}

export const getCachedAnnouncementById = (id: string) =>
    unstable_cache(
        () => fetchAnnouncementByIdFromSource(id),
        [`announcement-detail-${id}`],
        {
            tags: ["announcements", `announcement-${id}`],
            revalidate: REVALIDATE_INTERVAL,
        }
    )();

// ----------------------------------------------------
// Testimonials
// ----------------------------------------------------
async function fetchTestimonialsFromSource(): Promise<Testimonial[]> {
    // 1. Try CMS API
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/testimonials`, {
            next: { tags: ["testimonials"], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const result = await res.json();
            const data = Array.isArray(result) ? result : result.data;
            if (Array.isArray(data) && data.length > 0) {
                return data
                    .filter((item: any) => item.isActive !== false)
                    .map((item: any): Testimonial => ({
                        id: item.id,
                        name: item.name || "",
                        role: item.role || "",
                        iframeSrc: extractYouTubeEmbedUrl(item.iframeSrc || item.videoUrl || ""),
                        videoUrl: item.videoUrl || item.iframeSrc || "#",
                        thumbnail: item.thumbnail || "",
                        order: typeof item.order === "number" ? item.order : parseInt(item.order, 10) || 0,
                    }))
                    .sort((a: Testimonial, b: Testimonial) => (a.order || 0) - (b.order || 0));
            }
        }
    } catch (err) {
        console.warn("CMS testimonials fetch error, trying Firestore fallback:", err);
    }

    // 2. Direct Firestore fallback
    try {
        const snapshot = await getDocs(collection(db, "testimonials"));
        if (!snapshot.empty) {
            const list: Testimonial[] = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                if (data.isActive !== false) {
                    list.push({
                        id: doc.id,
                        name: data.name || "",
                        role: data.role || "",
                        iframeSrc: extractYouTubeEmbedUrl(data.iframeSrc || data.videoUrl || ""),
                        videoUrl: data.videoUrl || data.iframeSrc || "#",
                        thumbnail: data.thumbnail || "",
                        order: typeof data.order === "number" ? data.order : parseInt(data.order, 10) || 0,
                    });
                }
            });
            if (list.length > 0) {
                return list.sort((a, b) => (a.order || 0) - (b.order || 0));
            }
        }
    } catch (firestoreError) {
        console.warn("Firestore testimonials query fallback error:", firestoreError);
    }

    // 3. Fallback to default testimonials
    return DEFAULT_TESTIMONIALS;
}

export const getCachedTestimonials = unstable_cache(
    fetchTestimonialsFromSource,
    ["testimonials-list-cache"],
    {
        tags: ["testimonials"],
        revalidate: REVALIDATE_INTERVAL,
    }
);

// ----------------------------------------------------
// Team Members
// ----------------------------------------------------
async function fetchTeamMembersFromSource(): Promise<TeamMember[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/team`, {
            next: { tags: ["team"], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const data = await res.json();
            const items = Array.isArray(data) ? data : data.data || [];
            if (items.length > 0) {
                return items.map((item: any) => ({
                    id: item.id,
                    name: item.name,
                    role: item.position || item.role || "Team Member",
                    img: item.imageUrl || item.img || "https://placehold.co/500x500?text=No+Image",
                }));
            }
        }
    } catch (error) {
        console.warn("CMS team fetch failed, falling back to Firestore:", error);
    }

    try {
        const snapshot = await getDocs(collection(db, "team"));
        if (!snapshot.empty) {
            const list: TeamMember[] = [];
            snapshot.forEach((doc) => {
                const item = doc.data() as any;
                list.push({
                    id: doc.id,
                    name: item.name,
                    role: item.position || item.role || "Team Member",
                    img: item.imageUrl || item.img || "https://placehold.co/500x500?text=No+Image",
                });
            });
            return list;
        }
    } catch (dbErr) {
        console.error("Firestore team query fallback error:", dbErr);
    }
    return [];
}

export const getCachedTeamMembers = unstable_cache(
    fetchTeamMembersFromSource,
    ["team-list-cache"],
    {
        tags: ["team"],
        revalidate: REVALIDATE_INTERVAL,
    }
);

// ----------------------------------------------------
// Careers / Jobs
// ----------------------------------------------------
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

const colors = ["#93CCE9", "#4DB4EA", "#0097DC"];

async function fetchJobsFromSource(): Promise<Job[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/careers`, {
            next: { tags: ["careers", "jobs"], revalidate: REVALIDATE_INTERVAL },
        });
        if (res.ok) {
            const result = await res.json();
            const data = Array.isArray(result) ? result : result.data || [];
            if (data.length > 0) {
                let colorIndex = 0;
                const fetchedJobs: Job[] = [];

                for (const item of data) {
                    if (item.isActive !== false) {
                        const title = item.heading || item.title || "";
                        const slugCandidate = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                        const slug = `${slugCandidate}-${(item.id || "").substring(0, 5)}`;

                        fetchedJobs.push({
                            id: item.id,
                            title: title,
                            slug: slug,
                            type: item.type || "",
                            description: item.description || "",
                            color: colors[colorIndex % colors.length],
                            responsibilities: item.responsibilities || [],
                            experience: item.experiences || item.experience || [],
                        });
                        colorIndex++;
                    }
                }
                return fetchedJobs;
            }
        }
    } catch (error) {
        console.warn("CMS careers fetch failed, falling back to Firestore:", error);
    }

    try {
        const snapshot = await getDocs(collection(db, "careers"));
        if (!snapshot.empty) {
            const fetchedJobs: Job[] = [];
            let cIdx = 0;
            snapshot.forEach((docSnap) => {
                const item = { id: docSnap.id, ...(docSnap.data() as any) };
                if (item.isActive !== false) {
                    const title = item.heading || item.title || "";
                    const slugCandidate = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                    const slug = `${slugCandidate}-${(item.id || "").substring(0, 5)}`;
                    fetchedJobs.push({
                        id: item.id,
                        title: title,
                        slug: slug,
                        type: item.type || "",
                        description: item.description || "",
                        color: colors[cIdx % colors.length],
                        responsibilities: item.responsibilities || [],
                        experience: item.experiences || item.experience || [],
                    });
                    cIdx++;
                }
            });
            return fetchedJobs;
        }
    } catch (dbErr) {
        console.error("Firestore careers query fallback error:", dbErr);
    }
    return [];
}

export const getCachedJobs = unstable_cache(
    fetchJobsFromSource,
    ["careers-list-cache"],
    {
        tags: ["careers", "jobs"],
        revalidate: REVALIDATE_INTERVAL,
    }
);

// ----------------------------------------------------
// Project Features Gallery Images
// ----------------------------------------------------
async function fetchProjectFeaturesFromSource(projectId: string): Promise<string[]> {
    try {
        const docRef = doc(db, "projectFeatures", projectId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().galleryImages && docSnap.data().galleryImages.length > 0) {
            return docSnap.data().galleryImages as string[];
        }
        return [];
    } catch (err) {
        console.error(`Error fetching project features for ${projectId}:`, err);
        return [];
    }
}

export const getCachedProjectFeatures = (projectId: string) =>
    unstable_cache(
        () => fetchProjectFeaturesFromSource(projectId),
        [`project-features-${projectId}`],
        {
            tags: ["projects", `project-${projectId}`, `features-${projectId}`],
            revalidate: REVALIDATE_INTERVAL,
        }
    )();

