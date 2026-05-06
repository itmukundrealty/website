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

    // tableOfContents?: { title: string }[]; // Table of contents items
    
    source?: string; // Source attribution (e.g. "Daijiworld Media Network – Bengaluru")
}

// Ensure this matches your CMS URL.
// Set NEXT_PUBLIC_CMS_URL in .env.local for local development (e.g. http://localhost:3001)
export const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_URL || "https://cms-mukund.vercel.app";

export async function fetchTeamMembers(): Promise<TeamMember[]> {
    try {
        const res = await fetch(`${CMS_BASE_URL}/api/team`, {
            cache: 'no-store', // Ensure fresh data
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch team members: ${res.statusText}`);
        }

        const data = await res.json();

        // Map CMS data structure to Frontend structure
        // CMS: { id, name, position, imageUrl }
        // Frontend: { id, name, role, img }
        return data.map((item: any) => ({
            id: item.id,
            name: item.name,
            role: item.position || 'Team Member', // Fallback if position is missing
            img: item.imageUrl || 'https://placehold.co/500x500?text=No+Image', // Fallback image
        }));
    } catch (error) {
        console.error('Error fetching team members:', error);
        return []; // Return empty array on error to prevent crash
    }
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
