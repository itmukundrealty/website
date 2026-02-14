export interface TeamMember {
    id: string; // CMS uses string IDs (Firebase)
    name: string;
    role: string; // Mapped from 'position' in CMS
    img: string; // Mapped from 'imageUrl' in CMS
}

// Ensure this matches your CMS URL. 
// In development, if CMS is on port 3000 and reality is on 3001, this should be http://localhost:3000
const CMS_BASE_URL = process.env.NEXT_PUBLIC_CMS_URL || 'https://mukund-cms.vercel.app';

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