'use client';

import {
    GoogleMap,
    LoadScript,
    Circle,
    Marker,
    OverlayView,
} from '@react-google-maps/api';

import { useMemo, useState, useEffect, useCallback } from 'react';

type Location = {
    id: number;
    lat: number;
    lng: number;
    mapLink?: string;
    name?: string;
    markerIcon?: string;
};

type OffscreenPoint = {
    id: number;
    name: string;
    distance: number;
    edgeX: number;
    edgeY: number;
    angle: number;
    mapLink?: string;
};

const containerStyle = {
    width: '100%',
    height: '100%',
};

const defaultCenter = {
    lat: 12.904891658303564,
    lng: 74.83737591311836,
};

/* Haversine distance in km */
function getDistanceKm(lat1: number, lng1: number, lat2: number, lng2: number) {
    const R = 6371;
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLng = (lng2 - lng1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

const LOCATIONS: Location[] = [
    { id: 0, lat: 12.904891658303564, lng: 74.83737591311836, mapLink: "https://maps.app.goo.gl/kSygmBTMH7U4kDic7" },
    { id: 18, lat: 12.9020175, lng: 74.8465192, name: "KEONICS IT Park", mapLink: "https://maps.app.goo.gl/XhmL4xmFEfdFtsHPA" },
    { id: 19, lat: 12.8048927, lng: 74.9456618, name: "Infosys SEZ Nethra Campus", mapLink: "https://maps.app.goo.gl/SfPjS1TCg7ax3HJt6" },
    { id: 20, lat: 12.9064683, lng: 74.8395069, name: "A. J. Institute of Management", mapLink: "https://maps.app.goo.gl/PVjMnCZgo5hMg1Er9" },
    { id: 21, lat: 12.9137376, lng: 74.8362661, name: "Mahesh PU College", mapLink: "https://maps.app.goo.gl/BRYemRxM2hVn7Mir7" },
    { id: 22, lat: 12.9143723, lng: 74.836257, name: "Sri Chaitanya Techno School", mapLink: "https://maps.app.goo.gl/RrRtoCwPhfH7K4JR8" },
    { id: 23, lat: 12.9144958, lng: 74.8357808, name: "Sri Chaitanya PU College", mapLink: "https://maps.app.goo.gl/MtQXFaguhycqZwHT8" },
    { id: 24, lat: 12.8993521, lng: 74.8460278, name: "A.J. Hospital & Research Centre", mapLink: "https://maps.app.goo.gl/rV33maqXahwciNvEA" },
    { id: 25, lat: 12.9014696, lng: 74.8479397, name: "Boscoss PU College", mapLink: "https://maps.app.goo.gl/pGJLesqWZi3VfMBm9" },
    { id: 26, lat: 12.9019875, lng: 74.8264663, name: "SDM School Mangaluru", mapLink: "https://maps.app.goo.gl/znCdoYmZcXk3iaGg7" },
    { id: 27, lat: 12.9151968, lng: 74.828766, name: "AJ Institute of Engineering & Technology", mapLink: "https://maps.app.goo.gl/HaMVY1hCZCnEm4DK6" },
    { id: 28, lat: 12.9180608, lng: 74.841191, name: "Podar International School", mapLink: "https://maps.app.goo.gl/UTPbHD4LL3FyHFur9" },
    { id: 29, lat: 12.8834418, lng: 74.847673, name: "Lourdes Central School", mapLink: "https://maps.app.goo.gl/2y9W915S7S81sZtk8" },
    { id: 30, lat: 12.8800537, lng: 74.8320551, name: "Amazing Kids School", mapLink: "https://maps.app.goo.gl/P4BxtUXzyWA4pAbJ8" },
    { id: 31, lat: 12.907092, lng: 74.8637985, name: "Mount Carmel Central School", mapLink: "https://maps.app.goo.gl/35zdp6J9nd1yjdUz8" },
    { id: 32, lat: 12.8712557, lng: 74.8427679, name: "City Centre Mall", mapLink: "https://maps.app.goo.gl/s4uVQGozdvte1SLt6" },
    { id: 33, lat: 12.8860336, lng: 74.8408218, name: "Bharath Mall", mapLink: "https://maps.app.goo.gl/7iZuy5q5bm9Z1RSE8" },
    { id: 34, lat: 12.8799349, lng: 74.8402455, name: "Empire Mall", mapLink: "https://maps.app.goo.gl/vKGZ5pkQWRemajfz8" },
    { id: 35, lat: 12.85937, lng: 74.83668, name: "St. Ann's High School", mapLink: "https://maps.app.goo.gl/1gX5XdP1QtnSGsvS8" },
    { id: 36, lat: 12.9172, lng: 74.8560, mapLink: "https://maps.app.goo.gl/hQeG5QfHkSocbM7U7" },
    { id: 37, lat: 12.8677, lng: 74.8664, name: "Indiana Hospital & Heart Institute", mapLink: "https://maps.app.goo.gl/wE4nHbnXuMuvWKPYA" },
    { id: 38, lat: 12.8583, lng: 74.8478, name: "KMC Hospital Attavar", mapLink: "https://maps.app.goo.gl/zTx1Cc4e5RyzyJW48" },
    { id: 39, lat: 12.8676, lng: 74.8542, name: "Unity Hospital", mapLink: "https://maps.app.goo.gl/xb8F4mVf4vges8AC8" },
    { id: 40, lat: 12.8729, lng: 74.8492, name: "KMC Hospital Mangaluru", mapLink: "https://maps.app.goo.gl/AiJ5SotMsC5v63wc8" },
    { id: 41, lat: 12.8753, lng: 74.8385, name: "Yenepoya Specialty Hospital", mapLink: "https://maps.app.goo.gl/8KhY5EZaNgDAuBiz6" },
    { id: 42, lat: 12.8600, lng: 74.8570, mapLink: "https://maps.app.goo.gl/TuGaZEeEZEskdAVF9" },
    { id: 43, lat: 12.8670, lng: 74.8430, mapLink: "https://maps.app.goo.gl/YGfsD2tzQVa4jTff6" },
    { id: 44, lat: 12.8997, lng: 74.8556, name: "STPI / Mangalore IT Park", mapLink: "https://maps.app.goo.gl/DuC3io2mVvTgez7L9" },
    { id: 45, lat: 12.8767, lng: 74.8395, name: "Sharada Vidyalaya", mapLink: "https://maps.app.goo.gl/KJFRBEQLQNVPZ2Q36" },
    { id: 46, lat: 12.8705, lng: 74.8408, name: "St Aloysius Gonzaga School", mapLink: "https://maps.app.goo.gl/eMTe6ivrrL8auu4t7" },
    { id: 47, lat: 12.8739, lng: 74.8384, name: "Canara College", mapLink: "https://maps.app.goo.gl/CjuE9FBdeHqXihy97" },
    { id: 48, lat: 12.8838, lng: 74.8532, name: "Vinaya Hospital", mapLink: "https://maps.app.goo.gl/VQt5Xsk2rbJVoDDB6" },
    { id: 49, lat: 12.9980, lng: 74.8050, mapLink: "https://maps.app.goo.gl/YTwAggzYDxrC8FdGA" },
    { id: 50, lat: 13.0092, lng: 74.7937, mapLink: "https://maps.app.goo.gl/Bwy6kS3okmWw7dCS6" },
    { id: 51, lat: 13.0095, lng: 74.7940, mapLink: "https://maps.app.goo.gl/shrbBFdS5TcQrTKD6" },
    { id: 52, lat: 13.0001, lng: 74.8207, mapLink: "https://maps.app.goo.gl/ia5E98DhMymryKYy7" },
    { id: 53, lat: 12.9950, lng: 74.8150, mapLink: "https://maps.app.goo.gl/Pk8jtymYW1dd43tb8" },
    { id: 54, lat: 12.9650, lng: 74.8100, mapLink: "https://maps.app.goo.gl/an7T2B17qedVHqgHA" },
    { id: 55, lat: 13.0092, lng: 74.7937, mapLink: "https://maps.app.goo.gl/bnjqQHwhrCvjSkKW8" },
    { id: 56, lat: 13.0204, lng: 74.7921, mapLink: "https://maps.app.goo.gl/ekBCGmEfcYq5qUtM6" },
    { id: 57, lat: 12.9041, lng: 74.8936, name: "Tejasvini Hospital", mapLink: "https://maps.app.goo.gl/E7JeXM6DcgVwsREk6" },
    { id: 58, lat: 12.8679, lng: 74.8610, name: "St Joseph High School Bajal", mapLink: "https://maps.app.goo.gl/jeAYpTQAGARHehza9" },
    { id: 59, lat: 12.8741, lng: 74.8389, name: "Canara High School Main", mapLink: "https://maps.app.goo.gl/p9lJpG58awDmUnNa6" },
    { id: 100, lat: 12.904464673600481, lng: 74.84546964309354, name: "Derebail church", mapLink: "https://maps.app.goo.gl/CDeC5AQUSjMHHqQm9" },
    { id: 101, lat: 12.90035104475791, lng: 74.84496534047851, name: "St. Anns School", mapLink: "https://maps.app.goo.gl/rVvXLt2eDL6VstSD7" },
    { id: 102, lat: 12.899592635722783, lng: 74.8460278, name: "AJ Hospital", mapLink: "https://maps.app.goo.gl/UrtDyPRTswGLvwpD7" },
    { id: 103, lat: 12.886843323773403, lng: 74.8278873830295, name: "Mahesh PU College", mapLink: "https://maps.app.goo.gl/FpDcxCLk68neCZtKA" },
    { id: 104, lat: 12.912009875078228, lng: 74.8374185584364, name: "Kottara Chowki", mapLink: "https://maps.app.goo.gl/QP7eQYa2MUgYWkRV9" },
    { id: 105, lat: 12.905000309855666, lng: 74.83624167301433, name: "Infosys", mapLink: "https://maps.app.goo.gl/jtB5bzHiedGyZQVJ8" },
    { id: 106, lat: 12.905646131270558, lng: 74.84993398226453, name: "Nirmaan homes", mapLink: "https://maps.app.goo.gl/Z8cwvmhBB9aQ8Tn88" },
    { id: 107, lat: 12.886242772640482, lng: 74.84117585157844, name: "Bharath Mall", mapLink: "https://maps.app.goo.gl/gYndarRNncAWWAK76" },
    { id: 108, lat: 12.886063824661004, lng: 74.84210799390733, name: "KSRTC Bus stand", mapLink: "https://maps.app.goo.gl/7GgoFh9DrPcpvzfD7" },
    { id: 109, lat: 12.884826917374435, lng: 74.83843390979276, name: "MCC", mapLink: "https://maps.app.goo.gl/pkV4ZNgcwv3suBW46" },
    { id: 110, lat: 12.887763806388124, lng: 74.83739700362646, name: "Lalbagh", mapLink: "https://maps.app.goo.gl/RiNJAeanTXUWKzGd8" },
    { id: 111, lat: 12.890838306656047, lng: 74.83820237291665, name: "Ladyhill Circle", mapLink: "https://maps.app.goo.gl/gYCkf7SH7y6rCB9M7" },
    { id: 112, lat: 12.899247889536323, lng: 74.83468719575737, name: "Urwa store mangalore", mapLink: "https://maps.app.goo.gl/fzAfCqtcwaZuLAqP6" },
    { id: 113, lat: 12.905167635300032, lng: 74.83646697856446, name: "Infosys", mapLink: "https://maps.app.goo.gl/jtB5bzHiedGyZQVJ8 " },
    { id: 114, lat: 12.887931016079282, lng: 74.83029064223089, name: "Mahesh PU College", mapLink: "https://maps.app.goo.gl/FpDcxCLk68neCZtKA " },
    { id: 115, lat: 12.899624413002508, lng: 74.84636213808594, name: "AJ Institute of Medical Sciences", mapLink: "https://maps.app.goo.gl/RuWwD6VsWkm4KkKX9 " },
    { id: 116, lat: 12.899373016158986, lng: 74.84625310555012, name: "AJ Hospital", mapLink: "https://maps.app.goo.gl/UrtDyPRTswGLvwpD7 " },
    { id: 117, lat: 12.886180020866686, lng: 74.84101491904296, name: "Bharath Mall", mapLink: "https://maps.app.goo.gl/gYndarRNncAWWAK76 " },
    { id: 118, lat: 12.890681430071215, lng: 74.83902849326714, name: "Ladyhill Circle", mapLink: "https://maps.app.goo.gl/gYCkf7SH7y6rCB9M7 " },
    { id: 119, lat: 12.885796260718417, lng: 74.83675463494212, name: "Lalbagh", mapLink: "https://maps.app.goo.gl/RiNJAeanTXUWKzGd8 " },
    { id: 120, lat: 12.886001072842362, lng: 74.84187195952148, name: "KSRTC Bus Stand", mapLink: "https://maps.app.goo.gl/7GgoFh9DrPcpvzfD7 " },
    { id: 121, lat: 12.885172053800208, lng: 74.83795111218537, name: "MCC", mapLink: "https://maps.app.goo.gl/pkV4ZNgcwv3suBW46 " },
    { id: 122, lat: 12.896863434956666, lng: 74.83436533068576, name: "Urwa Store Mangalore", mapLink: "https://maps.app.goo.gl/fzAfCqtcwaZuLAqP6 " },
    { id: 123, lat: 12.903852839464257, lng: 74.83629226006401, name: "Zila Panchayath Office", mapLink: "https://maps.app.goo.gl/SsAiGfauMa8PCWdD8 " },
    { id: 124, lat: 12.885967941361077, lng: 74.84061030979274, name: "Pabbas", mapLink: "https://maps.app.goo.gl/5aG5K8KxvmyRdo1D9 " },
    { id: 125, lat: 12.889210287187517, lng: 74.85629820185002, name: "Kadri Park", mapLink: "https://maps.app.goo.gl/uCM5Cvdex5SPmWHs7 " },
    { id: 126, lat: 12.891041093326223, lng: 74.85406255767144, name: "KPT", mapLink: "https://maps.app.goo.gl/bod7qwNp2ezMw6Ko7 " },
    { id: 128, lat: 12.9852883, lng: 74.8020248, name: "Govinda Das College", mapLink: "https://maps.app.goo.gl/tUaWd5AGZS35MhZT7  " },
    { id: 129, lat: 12.9880561, lng: 74.8015201, name: "Venus Hospital", mapLink: "https://maps.app.goo.gl/61a3qVPpKixubrtN7 " },
    { id: 130, lat: 12.9902732, lng: 74.8053651, name: "Surathkal Railway Station", mapLink: "https://maps.app.goo.gl/tUfWRfFk4YZRt4tj6 " },
    { id: 131, lat: 12.9959761, lng: 74.7990515, name: "Hotel Lalith International", mapLink: "https://maps.app.goo.gl/UssT4qDnXRugRQfv9 " },
    { id: 132, lat: 12.9853583, lng: 74.8078581, name: "Mandovi Motors", mapLink: "https://maps.app.goo.gl/6YCgWAPhNZyX1v9P6 " },
    { id: 133, lat: 12.9897399, lng: 74.8001800, name: "Hotel Sadananda", mapLink: "https://maps.app.goo.gl/HGQEePotZAfq7arA9 " },
    { id: 134, lat: 12.9878091, lng: 74.8012937, name: "Surathkal Market", mapLink: "https://maps.app.goo.gl/P2RgVMvVBfZy8k3b7 " },
    { id: 135, lat: 12.9894650, lng: 74.8003520, name: "Service Bus Stand", mapLink: "https://maps.app.goo.gl/RvQj9FQbzag2teQr9 " },
    { id: 136, lat: 12.882431, lng: 74.833512, name: "Shree Gokarnatheshwara College", mapLink: "https://maps.app.goo.gl/bjLTkmf34SRzL7UH9  " },
    { id: 137, lat: 12.890654, lng: 74.837543, name: "Ladyhill English Higher Primary School", mapLink: "https://maps.app.goo.gl/ShhwfDvsUonnh25U8 " },
    { id: 138, lat: 12.888421, lng: 74.834712, name: "Mangala Stadium", mapLink: "https://maps.app.goo.gl/H5RtvXahacy7YL7n8 " },
    { id: 139, lat: 12.896345, lng: 74.834123, name: "Urwa Ground", mapLink: "https://maps.app.goo.gl/udWNzSU2DCdVHzJk6 " },
    { id: 140, lat: 12.883712, lng: 74.821745, name: "Boat Club (Sultan Battery)", mapLink: "https://maps.app.goo.gl/4ymQEPwdMHja4h4N8 " },
    { id: 141, lat: 12.879712, lng: 74.836512, name: "Sangatanikethan Hall", mapLink: "https://maps.app.goo.gl/1TqMd4ApkKFZNYGa7 " },
    { id: 142, lat: 12.895521, lng: 74.834512, name: "Shree Mariyamma Temple", mapLink: "https://maps.app.goo.gl/G2Yk7SpYo4mheCWTA " },
    { id: 143, lat: 12.892012, lng: 74.832412, name: "Urwa Church Centenary Hall", mapLink: "https://maps.app.goo.gl/y4dPanb8Siggi4Pi6" },
    { id: 144, lat: 12.8767, lng: 74.8415, name: "Vertex One", mapLink: "https://maps.app.goo.gl/THPPekwXsXFMzd1r5 " },
    { id: 145, lat: 12.8753, lng: 74.8447, name: "Sharada Vidyalaya", mapLink: "https://maps.app.goo.gl/gfvy4N6XjENinD277 " },
    { id: 146, lat: 12.8755, lng: 74.8435, name: "Expert PU College", mapLink: "https://maps.app.goo.gl/oU9s9YzuH8XwGbM78 " },
    { id: 147, lat: 12.8743, lng: 74.8396, name: "Canara School Campus", mapLink: "https://maps.app.goo.gl/LR5ud79xVMHMgJJA6 " },
    { id: 148, lat: 12.8740, lng: 74.8400, name: "Canara High School CBSE", mapLink: "https://maps.app.goo.gl/Pjd21Z771gdKoAFR6 " },
    { id: 149, lat: 12.8785, lng: 74.8395, name: "Empire Mall", mapLink: "https://maps.app.goo.gl/7r5jfV2srvGZdY4Z7  " },
    { id: 150, lat: 12.8732, lng: 74.8423, name: "Popular Gold Mart", mapLink: "https://maps.app.goo.gl/dr4m3ZuRzyXDi1p16 " },
    { id: 151, lat: 12.8715, lng: 74.8425, name: "City Centre", mapLink: "https://maps.app.goo.gl/nsDxiWsshgXhqAg79 " },
    { id: 152, lat: 12.8735, lng: 74.8355, name: "Carstreet Flower Market", mapLink: "https://maps.app.goo.gl/HDhSeMKYfRNKHjNU8 " },
    { id: 153, lat: 12.8687, lng: 74.8428, name: "Yenepoya Hospital", mapLink: "https://maps.app.goo.gl/UvUqmDtnepB9w4mY6 " },
    { id: 154, lat: 12.8782, lng: 74.8390, name: "TMA Pai Hall", mapLink: "https://maps.app.goo.gl/RKvmxMH7H6QAA5d2A " },
    { id: 155, lat: 12.8745, lng: 74.8412, name: "Hotel Janatha Deluxe", mapLink: "https://maps.app.goo.gl/zprTajcN2EY3RRrP7 " },
    { id: 156, lat: 12.8795, lng: 74.8385, name: "Hotel Deepa Comforts", mapLink: "https://maps.app.goo.gl/a7JxM1FbAWX8Z8Qh6 " },
    { id: 157, lat: 12.8780, lng: 74.8392, name: "Ocean Pearl", mapLink: "https://maps.app.goo.gl/wZfZ1HHq5Gx4d2UE6 " },
    { id: 158, lat: 12.8748, lng: 74.8385, name: "Dongerkery Shree Venkatramana Temple", mapLink: "https://maps.app.goo.gl/D9qBdruPdonzjksN7 " },
    { id: 159, lat: 12.8742, lng: 74.8355, name: "Shree Venkatramana Temple", mapLink: "https://maps.app.goo.gl/L4UWA8y7CTFNQXMs7 " },
    { id: 160, lat: 12.8745, lng: 74.8380, name: "Shree Dattatreya Temple", mapLink: "https://maps.app.goo.gl/7kz5QTDhmPXnyNfG8 " },
    { id: 161, lat: 12.9185, lng: 74.8330, name: "Karavali College", mapLink: "https://maps.app.goo.gl/63mEGEa75hxj9XLA8 " },
    { id: 162, lat: 12.8920, lng: 74.8324, name: "Urwa Church Centenary Hall", mapLink: "https://maps.app.goo.gl/y4dPanb8Siggi4Pi6 " },
];

// Base radius in meters at the reference zoom level
const BASE_RADIUS = 60;
const REFERENCE_ZOOM = 14;
const MIN_RADIUS = 8;

function getDynamicRadius(currentZoom: number): number {
    if (currentZoom <= REFERENCE_ZOOM) return BASE_RADIUS;
    const radius = BASE_RADIUS / Math.pow(2, currentZoom - REFERENCE_ZOOM);
    return Math.max(MIN_RADIUS, radius);
}

interface StyledMapProps {
    activePoints?: number[];
    highlightHighway?: boolean;
    className?: string;
    center?: { lat: number; lng: number };
    zoom?: number;
    locations?: Location[];
    hideMainIcon?: boolean;
    mainMarkerPosition?: { lat: number; lng: number };
    customMarkerImage?: string;
    renderAsMarkers?: boolean;
    allowedPoints?: number[];
    accentColor?: string;
    accentColorLight?: string;
}

export default function StyledMap({
    activePoints = [],
    highlightHighway = false,
    className = "",
    center = defaultCenter,
    zoom = 14,
    locations = LOCATIONS,
    hideMainIcon = false,
    mainMarkerPosition,
    customMarkerImage = "/icons/mapIcon.svg",
    renderAsMarkers = false,
    allowedPoints,
    accentColor = "#0097DC",
    accentColorLight = "#e5e5e5",
}: StyledMapProps) {

    const [hoveredLocation, setHoveredLocation] = useState<number | null>(null);
    const [mapInstance, setMapInstance] = useState<google.maps.Map | null>(null);
    const [offscreenPoints, setOffscreenPoints] = useState<OffscreenPoint[]>([]);
    const [currentZoom, setCurrentZoom] = useState(zoom);

    const dynamicMapStyle = useMemo(() => {
        return [
            { featureType: "all", elementType: "labels", stylers: [{ visibility: "off" }] },
            { featureType: "road", elementType: "geometry", stylers: [{ color: "#f0f0f0" }] },
            { featureType: "road.highway", elementType: "geometry", stylers: [{ color: highlightHighway ? accentColor : accentColorLight }] },
            { featureType: "water", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
            { featureType: "landscape", elementType: "geometry", stylers: [{ color: "#ffffff" }] },
        ];
    }, [highlightHighway, accentColor, accentColorLight]);

    const mapOptions = useMemo(() => ({
        styles: dynamicMapStyle,
        disableDefaultUI: true,
        gestureHandling: "cooperative",
    }), [dynamicMapStyle]);

    // Compute circle radius reactively from zoom
    const circleRadius = useMemo(() => getDynamicRadius(currentZoom), [currentZoom]);

    const handlePointClick = (link?: string) => {
        if (link) window.open(link, '_blank');
    };

    const checkOffscreenPoints = useCallback(() => {
        if (!mapInstance) return;
        const bounds = mapInstance.getBounds();
        const mapCenter = mapInstance.getCenter();
        if (!bounds || !mapCenter) return;

        const centerLat = mapCenter.lat();
        const centerLng = mapCenter.lng();
        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();

        const spanX_half = (ne.lng() - sw.lng()) / 2;
        const spanY_half = (ne.lat() - sw.lat()) / 2;

        const offscreen = locations
            .filter((loc) => {
                const isAllowed = allowedPoints ? allowedPoints.includes(loc.id) : true;
                const isActive = activePoints.includes(loc.id);
                return isAllowed && isActive && loc.name && loc.id !== 0;
            })
            .map((loc) => {
                const diffX = loc.lng - centerLng;
                const diffY = loc.lat - centerLat;

                const relX = diffX / spanX_half;
                const relY = -(diffY / spanY_half);

                if (Math.abs(relX) <= 1 && Math.abs(relY) <= 1) {
                    return null;
                }

                const scale = Math.max(Math.abs(relX), Math.abs(relY));
                const edgeX = relX / scale;
                const edgeY = relY / scale;
                const angle = Math.atan2(edgeY, edgeX) * (180 / Math.PI);

                return {
                    id: loc.id,
                    name: loc.name!,
                    distance: getDistanceKm(centerLat, centerLng, loc.lat, loc.lng),
                    edgeX,
                    edgeY,
                    angle,
                    mapLink: loc.mapLink
                };
            })
            .filter((p): p is NonNullable<typeof p> => p !== null);

        setOffscreenPoints(offscreen);
    }, [mapInstance, activePoints, allowedPoints, locations]);

    const handleMapLoad = useCallback((map: google.maps.Map) => {
        setMapInstance(map);
    }, []);

    const handleZoomChanged = useCallback(() => {
        if (!mapInstance) return;
        const z = mapInstance.getZoom();
        if (z !== undefined) setCurrentZoom(z);
    }, [mapInstance]);

    const handleMapIdle = useCallback(() => {
        checkOffscreenPoints();
    }, [checkOffscreenPoints]);

    useEffect(() => {
        const timeout = window.setTimeout(checkOffscreenPoints, 0);
        return () => window.clearTimeout(timeout);
    }, [checkOffscreenPoints]);

    useEffect(() => {
        if (!mapInstance) return;

        mapInstance.setCenter(center);
        mapInstance.setZoom(zoom);

        const timeout = window.setTimeout(checkOffscreenPoints, 0);
        return () => window.clearTimeout(timeout);
    }, [center, checkOffscreenPoints, mapInstance, zoom]);

    return (
        <div className={`relative h-full w-full overflow-hidden ${className}`}>
            <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    options={mapOptions}
                    onLoad={handleMapLoad}
                    onIdle={handleMapIdle}
                    onZoomChanged={handleZoomChanged}
                >
                    {mainMarkerPosition && !hideMainIcon && (
                        <Marker
                            position={mainMarkerPosition}
                            icon={{
                                url: customMarkerImage,
                                scaledSize: typeof google !== 'undefined' ? new google.maps.Size(50, 50) : undefined
                            }}
                        />
                    )}

                    {locations.map((loc) => {
                        if (allowedPoints && !allowedPoints.includes(loc.id)) return null;

                        const isActive = activePoints.includes(loc.id);

                        if (renderAsMarkers) {
                            return (
                                <Marker
                                    key={loc.id}
                                    position={{ lat: loc.lat, lng: loc.lng }}
                                    onClick={() => handlePointClick(loc.mapLink)}
                                    onMouseOver={() => setHoveredLocation(loc.id)}
                                    onMouseOut={() => setHoveredLocation(null)}
                                    options={{ opacity: isActive ? 1 : 0.5 }}
                                    icon={{
                                        url: loc.markerIcon || customMarkerImage,
                                        scaledSize: typeof google !== 'undefined' ? new google.maps.Size(isActive ? 60 : 50, isActive ? 60 : 50) : undefined
                                    }}
                                />
                            );
                        }

                        if (loc.id === 0) {
                            if (mainMarkerPosition || hideMainIcon) return null;
                            return (
                                <Marker
                                    key={loc.id}
                                    position={{ lat: loc.lat, lng: loc.lng }}
                                    onClick={() => handlePointClick(loc.mapLink)}
                                    icon={{
                                        url: customMarkerImage,
                                        scaledSize: typeof google !== 'undefined' ? new google.maps.Size(50, 50) : undefined
                                    }}
                                />
                            );
                        }

                        return (
   <Circle
    key={loc.id}
    center={{ lat: loc.lat, lng: loc.lng }}
    radius={circleRadius}
    onClick={() => handlePointClick(loc.mapLink)}
    options={{
        fillColor: isActive ? accentColor : '#d1d5db',
        fillOpacity: isActive ? 1 : 0.6,
        strokeColor: isActive ? accentColor : '#d1d5db',
        strokeWeight: 0,
        clickable: true,
    }}
/>
                        );
                    })}

                    {/* On-Screen Overlays */}
                    {!renderAsMarkers && locations.map((loc) => {
                        const isAllowed = allowedPoints ? allowedPoints.includes(loc.id) : true;
                        if (isAllowed && loc.name && loc.id !== 0) {
                            const isActive = activePoints.includes(loc.id);
                            return (
                                <OverlayView
                                    key={`label-${loc.id}`}
                                    position={{ lat: loc.lat, lng: loc.lng }}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    getPixelPositionOffset={() => ({ x: 0, y: -15 })}
                                >
                                    <div className="relative transform -translate-x-1/2 -translate-y-full">
                                        <div className="flex flex-col items-center">
                                            <span
                                                className={`text-[9px] sm:text-[10px] font-bold tracking-tight whitespace-nowrap uppercase transition-colors duration-300`}
                                                style={{ 
                                                    color: isActive ? accentColor : '#4B5563',
                                                    textShadow: '1px 1px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff' 
                                                }}
                                            >
                                                {loc.name}
                                            </span>
                                        </div>
                                    </div>
                                </OverlayView>
                            );
                        }
                        return null;
                    })}

                    {renderAsMarkers && locations.map((loc) => {
                        const isActive = activePoints.includes(loc.id);
                        if (isActive && loc.name && loc.id !== 0) {
                            return (
                                <OverlayView
                                    key={`active-label-${loc.id}`}
                                    position={{ lat: loc.lat, lng: loc.lng }}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    getPixelPositionOffset={() => ({ x: 0, y: -42 })}
                                >
                                    <div className="relative group transition-all duration-300 transform -translate-x-1/2 -translate-y-full">
                                        <div className="flex flex-col items-center">
                                            <div 
                                                className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-[0_4px_15px_rgba(0,0,0,0.1)] flex items-center gap-2"
                                                style={{ borderColor: `${accentColor}33`, borderWidth: '1px' }}
                                            >
                                                <div 
                                                    className="w-1.5 h-1.5 rounded-full animate-pulse" 
                                                    style={{ backgroundColor: accentColor }}
                                                />
                                                <span className="text-[11px] font-bold tracking-tight text-gray-800 whitespace-nowrap uppercase">
                                                    {loc.name}
                                                </span>
                                            </div>
                                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/90 filter drop-shadow-sm" />
                                        </div>
                                    </div>
                                </OverlayView>
                            );
                        }
                        return null;
                    })}

                    {renderAsMarkers && hoveredLocation !== null && !activePoints.includes(hoveredLocation) && (() => {
                        const hLoc = locations.find(l => l.id === hoveredLocation);
                        if (hLoc && hLoc.name) {
                            return (
                                <OverlayView
                                    position={{ lat: hLoc.lat, lng: hLoc.lng }}
                                    mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                                    getPixelPositionOffset={() => ({ x: 0, y: -42 })}
                                >
                                    <div className="relative transform -translate-x-1/2 -translate-y-full">
                                        <div className="flex flex-col items-center">
                                            <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                                                <span className="text-[11px] font-bold tracking-tight text-gray-800 whitespace-nowrap uppercase">
                                                    {hLoc.name}
                                                </span>
                                            </div>
                                            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white/95" />
                                        </div>
                                    </div>
                                </OverlayView>
                            );
                        }
                        return null;
                    })()}
                </GoogleMap>
            </LoadScript>

            {/* EDGE-BOUND OFFSCREEN INDICATORS & LABELS */}
            {!renderAsMarkers && offscreenPoints.map((point) => {
                const isHorizontalEdge = Math.abs(point.edgeX) > Math.abs(point.edgeY);

                const padding = 60;
                const leftPos = `clamp(${padding}px, ${50 + point.edgeX * 50}%, calc(100% - ${padding}px))`;
                const topPos = `clamp(${padding}px, ${50 + point.edgeY * 50}%, calc(100% - ${padding}px))`;

                return (
                    <div
                        key={`offscreen-${point.id}`}
                        className="absolute z-10 flex items-center justify-center cursor-pointer pointer-events-auto transition-transform hover:scale-105"
                        style={{
                            left: leftPos,
                            top: topPos,
                            transform: 'translate(-50%, -50%)',
                        }}
                        onClick={() => handlePointClick(point.mapLink)}
                    >
                        {/* Rotated Directional Pointer */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: `rotate(${point.angle}deg)` }}>
                            <div 
                                className="w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent transform translate-x-[12px]"
                                style={{ borderLeft: `6px solid ${accentColor}` }}
                            ></div>
                        </div>

                        {/* Anchor Dot */}
                        <div className="w-2.5 h-2.5 rounded-full shadow-sm relative z-10" style={{ backgroundColor: accentColor }}>
                            <div className="absolute inset-0 rounded-full animate-ping opacity-60" style={{ backgroundColor: accentColor }}></div>
                        </div>

                        {/* Label Pill */}
                        <div
                            className="absolute bg-white/95 backdrop-blur-md px-2 py-1 rounded-md shadow-lg flex items-center gap-1.5 min-w-max z-20 pointer-events-none"
                            style={{
                                borderColor: `${accentColor}26`, 
                                borderWidth: '1px',
                                ...(isHorizontalEdge
                                    ? {
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        ...(point.edgeX > 0 ? { right: '22px' } : { left: '22px' })
                                    }
                                    : {
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        ...(point.edgeY > 0 ? { bottom: '22px' } : { top: '22px' })
                                    }
                                )
                            }}
                        >
                            <span className="text-[10px] font-extrabold text-gray-800 uppercase tracking-tight">
                                {point.name}
                            </span>
                            <div className="w-px h-2.5 bg-gray-300"></div>
                            <span className="text-[9.5px] font-bold" style={{ color: accentColor }}>
                                {point.distance < 1
                                    ? `${(point.distance * 1000).toFixed(0)}m`
                                    : `${point.distance.toFixed(1)}km`}
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
