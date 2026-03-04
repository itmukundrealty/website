export interface Project {
    id: string;
    name: string;
    href: string;
    type: 'ongoing' | 'completed';
    mapSrc?: string;
}

export const PROJECTS_LIST: Project[] = [
    // Ongoing
    { id: "rudraksh", name: "Rudraksh", href: "/rudraksh", type: 'ongoing', mapSrc: "https://maps.app.goo.gl/nMRHPxR7Q1u9g62TA" },
    { id: "ashoka", name: "Ashoka Business Center", href: "/ashoka-business-center", type: 'ongoing', mapSrc: "https://maps.app.goo.gl/pCSMwYmCVWqVvBzd7" },
    { id: "kedar", name: "Kedar", href: "/kedar", type: 'ongoing', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9838176911585!2d74.8505237!3d12.9087615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35beb217920bb%3A0xe23f115d1b49a1d5!2sKEDAR%20high%20living%20luxury%20homes!5e0!3m2!1sen!2sin!4v1772570173639!5m2!1sen!2sin" },

    // Completed
    { id: "kailash", name: "Kailash", href: "/kailash", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.908957222908294,74.83897934417861&output=embed" },
    { id: "nandadeep", name: "Nandadeep Apartments", href: "/nandadeep-apartments", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.895899486705401,74.82442483598062&output=embed" },
    { id: "mathura", name: "Mathura Residency", href: "/mathura-residency", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.90551016701943,74.84966575701976&output=embed" },
    { id: "nandagokul", name: "Nandagokul Apartments", href: "/nandagokul-apartments", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.893646774824788,74.84442105767145&output=embed" },
    { id: "gokuldham", name: "Gokuldham", href: "/gokuldham", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.879975036772368,74.83332710185005&output=embed" },
    { id: "ajanta", name: "Ajanta Business Center", href: "/ajanta-business-center", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.892277985021787,74.84131965767145&output=embed" },
    { id: "evanna", name: "Evanna Homes", href: "/evanna-homes", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.903875173703936,74.83892547301431&output=embed" },
    { id: "kudva", name: "Kudva's Grandeur", href: "/kudva-grandeur", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.989402030376874,74.80207348030677&output=embed" },
    { id: "madhuban", name: "Madhuban Apartments", href: "/madhuban-apartments", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.912372680974913,74.8329861441786&output=embed" },
    { id: "bhargavi", name: "Bhargavi Gloria Residency", href: "/bhargavi-gloria-residency", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.896839540060913,74.84863444232855&output=embed" },
    { id: "mukund-sadhan", name: "Mukund Sadan", href: "/mukund-sadan", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.874191610994334,74.83616109749772&output=embed" },
];

