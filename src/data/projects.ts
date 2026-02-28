export interface Project {
    id: string;
    name: string;
    href: string;
    type: 'ongoing' | 'completed';
}

export const PROJECTS_LIST: Project[] = [
    // Ongoing
    { id: "rudraksh", name: "Rudraksh", href: "/rudraksh", type: 'ongoing' },
    { id: "kedar", name: "Kedar", href: "/kedar", type: 'ongoing' },
    { id: "ashoka", name: "Ashoka Business Center", href: "/ashoka", type: 'ongoing' },

    // Completed
    { id: "mathura", name: "Mathura Residency", href: "/mathura", type: 'completed' },
    { id: "ajanta", name: "Ajanta Business Center", href: "/ajanta", type: 'completed' },
    { id: "evanna", name: "Evanna Homes", href: "/evanna", type: 'completed' },
    { id: "kudva", name: "Kudva's Grandeur", href: "/kudva", type: 'completed' },
    { id: "madhuban", name: "Madhuban Apartments", href: "/madhuban", type: 'completed' },
    { id: "nandagokul", name: "Nandagokul Apartments", href: "/nandagokul", type: 'completed' },
    { id: "nandadeep", name: "Nandadeep Apartments", href: "/nandadeep", type: 'completed' },
    { id: "bhargavi", name: "Bhargavi Gloria Residency", href: "/bhargavi", type: 'completed' },
    { id: "gokuldham", name: "Gokuldham", href: "/gokuldham", type: 'completed' },
    { id: "mukund-sadhan", name: "Mukund Sadan", href: "/mukund-sadhan", type: 'completed' },
    { id: "kailash", name: "Kailash", href: "/kailash", type: 'completed' },
];
