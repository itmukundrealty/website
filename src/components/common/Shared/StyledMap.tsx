'use client';

import {
    GoogleMap,
    LoadScript,
    Circle,
    Marker,
} from '@react-google-maps/api';

import { useMemo } from 'react';

type Location = {
    id: number; // changed to number to match index
    lat: number;
    lng: number;
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

/* Light Gray Style (Like Your UI) */
const mapStyle = [
    {
        featureType: "all",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#e5e5e5" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
    },
];

/* 
  PLACEHOLDER LOCATIONS 
  Updated with real-world IT campus locations.
*/
const LOCATIONS: Location[] = [
    {
        id: 0,
        lat: 12.904891658303564,
        lng: 74.83737591311836,
        mapLink: "https://maps.app.goo.gl/kSygmBTMH7U4kDic7"
    },
    {
        id: 18,
        lat: 12.9020175,
        lng: 74.8465192,
        mapLink: "https://maps.app.goo.gl/XhmL4xmFEfdFtsHPA" // KEONICS IT Park
    },
    {
        id: 19,
        lat: 12.8048927,
        lng: 74.9456618,
        mapLink: "https://maps.app.goo.gl/SfPjS1TCg7ax3HJt6" // Infosys SEZ Nethra Campus
    },
    { id: 20, lat: 12.9064683, lng: 74.8395069, mapLink: "https://maps.app.goo.gl/PVjMnCZgo5hMg1Er9" }, // A. J. Institute of Management
    { id: 21, lat: 12.9137376, lng: 74.8362661, mapLink: "https://maps.app.goo.gl/BRYemRxM2hVn7Mir7" }, // Mahesh PU College
    { id: 22, lat: 12.9143723, lng: 74.836257, mapLink: "https://maps.app.goo.gl/RrRtoCwPhfH7K4JR8" }, // Sri Chaitanya Techno School
    { id: 23, lat: 12.9144958, lng: 74.8357808, mapLink: "https://maps.app.goo.gl/MtQXFaguhycqZwHT8" }, // SRI CHAITANYA COLLEGE
    { id: 24, lat: 12.8993521, lng: 74.8460278, mapLink: "https://maps.app.goo.gl/rV33maqXahwciNvEA" }, // A.J. Hospital & Research Centre
    { id: 25, lat: 12.9014696, lng: 74.8479397, mapLink: "https://maps.app.goo.gl/pGJLesqWZi3VfMBm9" }, // Boscoss PU College
    { id: 26, lat: 12.9019875, lng: 74.8264663, mapLink: "https://maps.app.goo.gl/znCdoYmZcXk3iaGg7" }, // SDM School Mangaluru
    { id: 27, lat: 12.9151968, lng: 74.828766, mapLink: "https://maps.app.goo.gl/HaMVY1hCZCnEm4DK6" }, // AJ Institute of Engineering and Technology
    { id: 28, lat: 12.9180608, lng: 74.841191, mapLink: "https://maps.app.goo.gl/UTPbHD4LL3FyHFur9" }, // Podar International School Mangalore (CBSE)
    { id: 29, lat: 12.8834418, lng: 74.847673, mapLink: "https://maps.app.goo.gl/2y9W915S7S81sZtk8" }, // Lourdes Central School Bejai
    { id: 30, lat: 12.8800537, lng: 74.8320551, mapLink: "https://maps.app.goo.gl/P4BxtUXzyWA4pAbJ8" }, // Amazing Kids School
    { id: 31, lat: 12.907092, lng: 74.8637985, mapLink: "https://maps.app.goo.gl/35zdp6J9nd1yjdUz8" }, // Mount Carmel Central School
    { id: 32, lat: 12.8712557, lng: 74.8427679, mapLink: "https://maps.app.goo.gl/s4uVQGozdvte1SLt6" }, // City Centre Mall
    { id: 33, lat: 12.8860336, lng: 74.8408218, mapLink: "https://maps.app.goo.gl/7iZuy5q5bm9Z1RSE8" }, // Bharath Mall
    { id: 34, lat: 12.8799349, lng: 74.8402455, mapLink: "https://maps.app.goo.gl/vKGZ5pkQWRemajfz8" }, // Empire Mall
    { id: 35, lat: 12.85937, lng: 74.83668, mapLink: "https://maps.app.goo.gl/1gX5XdP1QtnSGsvS8" }, // St. Ann's High School
    { id: 36, lat: 12.9172, lng: 74.8560, mapLink: "https://maps.app.goo.gl/hQeG5QfHkSocbM7U7" }, // Little Einsteins Daycare & Preschool
    { id: 37, lat: 12.8677, lng: 74.8664, mapLink: "https://maps.app.goo.gl/wE4nHbnXuMuvWKPYA" }, // Indiana Hospital & Heart Institute
    { id: 38, lat: 12.8583, lng: 74.8478, mapLink: "https://maps.app.goo.gl/zTx1Cc4e5RyzyJW48" }, // KMC Hospital, Attavar
    { id: 39, lat: 12.8676, lng: 74.8542, mapLink: "https://maps.app.goo.gl/xb8F4mVf4vges8AC8" }, // Unity Hospital
    { id: 40, lat: 12.8729, lng: 74.8492, mapLink: "https://maps.app.goo.gl/AiJ5SotMsC5v63wc8" }, // KMC Hospital Mangaluru
    { id: 41, lat: 12.8753, lng: 74.8385, mapLink: "https://maps.app.goo.gl/8KhY5EZaNgDAuBiz6" }, // Yenepoya Specialty Hospital
    { id: 42, lat: 12.8600, lng: 74.8570, mapLink: "https://maps.app.goo.gl/TuGaZEeEZEskdAVF9" }, // Father Muller Hospital
    { id: 43, lat: 12.8670, lng: 74.8430, mapLink: "https://maps.app.goo.gl/YGfsD2tzQVa4jTff6" }, // Wenlock District Hospital
    { id: 44, lat: 12.8997, lng: 74.8556, mapLink: "https://maps.app.goo.gl/DuC3io2mVvTgez7L9" }, // STPI / Mangalore IT Park
    { id: 45, lat: 12.8767, lng: 74.8395, mapLink: "https://maps.app.goo.gl/KJFRBEQLQNVPZ2Q36" }, // SHARADA VIDYALAYA
    { id: 46, lat: 12.8705, lng: 74.8408, mapLink: "https://maps.app.goo.gl/eMTe6ivrrL8auu4t7" }, // St. Aloysius Gonzaga School
    { id: 47, lat: 12.8739, lng: 74.8384, mapLink: "https://maps.app.goo.gl/CjuE9FBdeHqXihy97" }, // Canara College
    { id: 48, lat: 12.8838, lng: 74.8532, mapLink: "https://maps.app.goo.gl/VQt5Xsk2rbJVoDDB6" }, // Vinaya Hospital & Research Centre
    { id: 49, lat: 12.9980, lng: 74.8050, mapLink: "https://maps.app.goo.gl/YTwAggzYDxrC8FdGA" }, // Exelon Circuits Private Limited (Approx Iddya)
    { id: 50, lat: 13.0092, lng: 74.7937, mapLink: "https://maps.app.goo.gl/Bwy6kS3okmWw7dCS6" }, // Serpro Consulting Private Limited (NITK-STEP)
    { id: 51, lat: 13.0095, lng: 74.7940, mapLink: "https://maps.app.goo.gl/shrbBFdS5TcQrTKD6" }, // NITK English Medium School
    { id: 52, lat: 13.0001, lng: 74.8207, mapLink: "https://maps.app.goo.gl/ia5E98DhMymryKYy7" }, // LITTLE FLOWER PRE SCHOOL (Krishnapura)
    { id: 53, lat: 12.9950, lng: 74.8150, mapLink: "https://maps.app.goo.gl/Pk8jtymYW1dd43tb8" }, // Chaithanya Public School (Krishnapura)
    { id: 54, lat: 12.9650, lng: 74.8100, mapLink: "https://maps.app.goo.gl/an7T2B17qedVHqgHA" }, // Ryan International School (Kulai)
    { id: 55, lat: 13.0092, lng: 74.7937, mapLink: "https://maps.app.goo.gl/bnjqQHwhrCvjSkKW8" }, // NITK engineering college
    { id: 56, lat: 13.0204, lng: 74.7921, mapLink: "https://maps.app.goo.gl/ekBCGmEfcYq5qUtM6" }, // Srinivas Hospital (Mukka)
    { id: 57, lat: 12.9041, lng: 74.8936, mapLink: "https://maps.app.goo.gl/E7JeXM6DcgVwsREk6" }, // Tejasvini Hospital (Kudupu)
    { id: 58, lat: 12.8679, lng: 74.8610, mapLink: "https://maps.app.goo.gl/jeAYpTQAGARHehza9" }, // St. Joseph’s High School
    { id: 59, lat: 12.8741, lng: 74.8389, mapLink: "https://maps.app.goo.gl/p9lJpG58awDmUnNa6" }, // Canara School
];

interface StyledMapProps {
    activePoints?: number[];
    highlightHighway?: boolean;
    className?: string;
    center?: { lat: number; lng: number };
    zoom?: number;
    locations?: Location[];
    hideMainIcon?: boolean;
}

export default function StyledMap({
    activePoints = [],
    highlightHighway = false,
    className = "",
    center = defaultCenter,
    zoom = 14,
    locations = LOCATIONS,
    hideMainIcon = false,
}: StyledMapProps) {

    const dynamicMapStyle = useMemo(() => {
        return [
            {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#e5e5e5" }],
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: highlightHighway ? "#0097DC" : "#7fcbed" }],
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }],
            },
            {
                featureType: "landscape",
                elementType: "geometry",
                stylers: [{ color: "#ffffff" }],
            },
        ];
    }, [highlightHighway]);

    const mapOptions = useMemo(() => ({
        styles: dynamicMapStyle,
        disableDefaultUI: true,
        gestureHandling: "cooperative", // Prevents the map from zooming when scrolling the page
    }), [dynamicMapStyle]);

    const handlePointClick = (link?: string) => {
        if (link) {
            window.open(link, '_blank');
        }
    };

    return (
        <div className={`relative h-full w-full ${className}`}>
            <LoadScript
                googleMapsApiKey={
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY!
                }
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={zoom}
                    options={mapOptions}
                >
                    {/* Render Markers/Circles */}
                    {locations.map((loc) => {
                        const isActive = activePoints.includes(loc.id);

                        // Special Marker for ID 0 (Main Property) — only when hideMainIcon is false
                        if (loc.id === 0 && !hideMainIcon) {
                            return (
                                <Marker
                                    key={loc.id}
                                    position={{ lat: loc.lat, lng: loc.lng }}
                                    onClick={() => handlePointClick(loc.mapLink)}
                                    icon={{
                                        url: "/icons/mapIcon.svg",
                                        scaledSize: typeof google !== 'undefined' ? new google.maps.Size(50, 50) : undefined
                                    }}
                                />
                            );
                        }

                        // Default Circles for other points (dots)
                        return (
                            <Circle
                                key={loc.id}
                                center={{
                                    lat: loc.lat,
                                    lng: loc.lng,
                                }}
                                radius={isActive ? 100 : 80}
                                onClick={() => handlePointClick(loc.mapLink)}
                                options={{
                                    fillColor: isActive ? '#00A3E0' : '#96d9f3d5',
                                    fillOpacity: isActive ? 1 : 0.5,
                                    strokeColor: '#ffffff',
                                    strokeWeight: isActive ? 1.5 : 1,
                                    clickable: true,
                                }}
                            />
                        );
                    })}
                </GoogleMap>
            </LoadScript>
        </div>
    );
}
