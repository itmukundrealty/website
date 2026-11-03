import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export interface TeamMember {
    id: string; // CMS uses string IDs (Firebase)
    name: string;
    role: string; // Mapped from 'position' in CMS
    img: string; // Mapped from 'imageUrl' in CMS
}

export interface Blog {
    id: string;
    title: string;
    summary: string;
    content: string; // HTML content
    imageUrl: string;
    date?: string; // Optional manually set date
    createdAt: string; // ISO string
    design?: any; // Raw Unlayer design if needed
    source?: string; // Source attribution (e.g. "Daijiworld Media Network – Bengaluru")
    customLinkUrl?: string;
}

export interface Testimonial {
    id: string | number;
    name: string;
    role: string;
    iframeSrc: string;
    videoUrl?: string;
    thumbnail?: string;
    order?: number;
    isActive?: boolean;
}

export const DEFAULT_TESTIMONIALS: Testimonial[] = [
    {
        id: "1",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=R9MQVfJkNfI",
        iframeSrc: "https://www.youtube.com/embed/R9MQVfJkNfI",
        name: "Dr. Prajwal K Rao & Dr. Shruthi J's",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 1,
    },
    {
        id: "2",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=YTbDJpuQIvw",
        iframeSrc: "https://www.youtube.com/embed/YTbDJpuQIvw?si=vBjMx8zK1Nx8SQxK",
        name: "Prajwal & Poornima",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 2,
    },
    {
        id: "3",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=i1FvfPn_AyY",
        iframeSrc: "https://www.youtube.com/embed/i1FvfPn_AyY",
        name: "Ajay Shenava & Anusha Shenava",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 3,
    },
    {
        id: "4",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=0Kr2E7fPxcY",
        iframeSrc: "https://www.youtube.com/embed/0Kr2E7fPxcY",
        name: "Mr. Nagraj Nayak",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 4,
    },
    {
        id: "5",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=OaiUlvvu1pU",
        iframeSrc: "https://www.youtube.com/embed/OaiUlvvu1pU",
        name: "Dinesh Kumar",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 5,
    },
    {
        id: "6",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=mwlgn3Cuq68",
        iframeSrc: "https://www.youtube.com/embed/mwlgn3Cuq68",
        name: "Mr. Jaggannath Bhandary",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 6,
    },
    {
        id: "7",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=DOoumWd6iJw",
        iframeSrc: "https://www.youtube.com/embed/DOoumWd6iJw",
        name: "Dr. Prashanth Bhat",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 7,
    },
    {
        id: "8",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=FPvLjrtQZUI",
        iframeSrc: "https://www.youtube.com/embed/FPvLjrtQZUI",
        name: "Mr. Vasuki Ganapati Shanbhag",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 8,
    },
    {
        id: "9",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=6tDa2MZunhY",
        iframeSrc: "https://www.youtube.com/embed/6tDa2MZunhY?si=tRelWm7-61QH0l__",
        name: "Subhashini",
        role: "Proud Owner at Kailash High Living Luxury Apartments",
        order: 9,
    },
    {
        id: "10",
        thumbnail: "",
        videoUrl: "https://www.youtube.com/watch?v=Rb1AN7Jn2H4",
        iframeSrc: "https://www.youtube.com/embed/Rb1AN7Jn2H4?si=SUxSQaqYAe6xThc0",
        name: "Dr. Devadas Kapikad",
        role: "Honoured Guest at the Inauguration Ceremony",
        order: 10,
    },
];

export function extractYouTubeEmbedUrl(url: string): string {
    if (!url) return "";
    const trimmed = url.trim();
    if (trimmed.includes("youtube.com/embed/")) {
        return trimmed;
    }
    const regExp = /(?:youtube\.com\/(?:watch\?.*v=|v\/|embed\/)|youtu\.be\/|youtube\.com\/shorts\/)([a-zA-Z0-9_-]{11})/i;
    const match = trimmed.match(regExp);
    if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}`;
    }
    return trimmed;
}

// Ensure this matches your CMS URL.
// Set NEXT_PUBLIC_CMS_URL in .env.local for local development (e.g. http://localhost:3001)
export const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_URL || "https://cms-dashboard.mukund-reality.workers.dev";

export async function fetchTeamMembers(): Promise<TeamMember[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/team`, {
            cache: 'no-store', // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch team members: ${res.statusText}`);
        }

        const data = await res.json();

        return data.map((item: any) => ({
            id: item.id,
            name: item.name,
            role: item.position || 'Team Member',
            img: item.imageUrl || 'https://placehold.co/500x500?text=No+Image',
        }));
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
    // 1. Try CMS API first
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/testimonials`, {
            cache: 'no-store',
        });

        if (res.ok) {
            const data = await res.json();
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
    } catch {
        // Fall back to direct Firestore query
    }

    // 2. Direct Firestore query fallback
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

    // 3. Fallback to default authentic dummy testimonials
    return DEFAULT_TESTIMONIALS;
}

export async function fetchBlogs(): Promise<Blog[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/blogs`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blogs: ${res.statusText}`);
        }

        const data = await res.json();
        return data as Blog[];
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return [];
    }
}

export async function fetchBlogById(id: string): Promise<Blog | null> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/blogs/${id}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch blog with id ${id}: ${res.statusText}`);
        }

        const data = await res.json();
        return data as Blog;
    } catch (error) {
        console.error(`Error fetching blog ${id}:`, error);
        return null;
    }
}

export async function fetchAnnouncements(): Promise<Blog[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/announcements`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch announcements: ${res.statusText}`);
        }

        const data = await res.json();
        return data as Blog[];
    } catch (error) {
        console.error('Error fetching announcements:', error);
        return [];
    }
}

export async function fetchAnnouncementById(id: string): Promise<Blog | null> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/announcements/${id}`, {
            cache: 'no-store',
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch announcement with id ${id}: ${res.statusText}`);
        }

        const data = await res.json();
        return data as Blog;
    } catch (error) {
        console.error(`Error fetching announcement ${id}:`, error);
        return null;
    }
}
