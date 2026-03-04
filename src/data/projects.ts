export interface Project {
    id: string;
    name: string;
    href: string;
    type: 'ongoing' | 'completed';
    mapSrc:string
}

export const PROJECTS_LIST: Project[] = [
    // Ongoing
    { id: "rudraksh", name: "Rudraksh", href: "/rudraksh", type: 'ongoing', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0493902792978!2d74.8375473!3d12.9045457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35beefbfde021%3A0xc38a8d5fb11542ad!2sRudraksh%20High%20Living%20Luxury%20Homes!5e0!3m2!1sen!2sin!4v1772598205405!5m2!1sen!2sin" },
    { id: "ashoka", name: "Ashoka Business Center", href: "/ashoka-business-center", type: 'ongoing', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1805499973902!2d74.8421329!3d12.8961091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b18f4cd502b%3A0xaa15728ff340b2d6!2sAshoka%20Business%20Center!5e0!3m2!1sen!2sin!4v1772598235626!5m2!1sen!2sin" },
    { id: "kedar", name: "Kedar", href: "/kedar", type: 'ongoing', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9838176911585!2d74.8505237!3d12.9087615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35beb217920bb%3A0xe23f115d1b49a1d5!2sKEDAR%20high%20living%20luxury%20homes!5e0!3m2!1sen!2sin!4v1772570173639!5m2!1sen!2sin" },

    // Completed
    { id: "kailash", name: "Kailash", href: "/kailash", type: 'completed', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.9833758859263!2d74.8389257!3d12.9087899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35ba2e90e0259%3A0x62234c35b9f67bcf!2sKailash%20Luxury%20Apartment!5e0!3m2!1sen!2sin!4v1772598315879!5m2!1sen!2sin" },
    { id: "nandadeep", name: "Nandadeep Apartments", href: "/nandadeep-apartments", type: 'completed', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.03292698173!2d74.84691917507531!3d12.905604287403758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a748df470a3%3A0xf3ec6cb0bb212ecb!2sNirmaan%20Homes%20Mathura!5e0!3m2!1sen!2sin!4v1772598375360!5m2!1sen!2sin" },
    { id: "mathura", name: "Mathura Residency", href: "/mathura-residency", type: 'completed', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.221252273333!2d74.8443996!3d12.893489899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a6eaeaef089%3A0x2bbb4348e95865b8!2sNandagokul%20Apartment!5e0!3m2!1sen!2sin!4v1772598395589!5m2!1sen!2sin" },
    { id: "nandagokul", name: "Nandagokul Apartments", href: "/nandagokul-apartments", type: 'completed', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.43455286821!2d74.833252!3d12.879755399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b75ee41b717%3A0xc009ac69f7ba6583!2sGokuldham%20Apartment!5e0!3m2!1sen!2sin!4v1772598416492!5m2!1sen!2sin" },
    { id: "gokuldham", name: "Gokuldham", href: "/gokuldham", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.892277985021787,74.84131965767145&output=embed" },
    { id: "ajanta", name: "Ajanta Business Center", href: "/ajanta-business-center", type: 'completed', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.245607280778!2d74.8412982!3d12.891922399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35ba59c0c7c3d%3A0x857ed9a4e15efd09!2sAjantha%20business%20centre!5e0!3m2!1sen!2sin!4v1772598436652!5m2!1sen!2sin" },
    { id: "evanna", name: "Evanna Homes", href: "/evanna-homes", type: 'completed', mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.06339548979!2d74.8388611!3d12.903645099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35b6166d1dcab%3A0x119b5b17426cd158!2sEvanna%20Homes!5e0!3m2!1sen!2sin!4v1772598479260!5m2!1sen!2sin" },
    { id: "kudva", name: "Kudva's Grandeur", href: "/kudva-grandeur", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.989402030376874,74.80207348030677&output=embed" },
    { id: "madhuban", name: "Madhuban Apartments", href: "/madhuban-apartments", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.912372680974913,74.8329861441786&output=embed" },
    { id: "bhargavi", name: "Bhargavi Gloria Residency", href: "/bhargavi-gloria-residency", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.896839540060913,74.84863444232855&output=embed" },
    { id: "mukund-sadhan", name: "Mukund Sadan", href: "/mukund-sadan", type: 'completed', mapSrc: "https://www.google.com/maps?q=12.874191610994334,74.83616109749772&output=embed" },
];
