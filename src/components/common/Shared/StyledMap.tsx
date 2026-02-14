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
];

interface StyledMapProps {
    activePoints?: number[];
    highlightHighway?: boolean;
    className?: string;
    center?: { lat: number; lng: number };
    zoom?: number;
}

export default function StyledMap({
    activePoints = [],
    highlightHighway = false,
    className = "",
    center = defaultCenter,
    zoom = 14
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
                    {LOCATIONS.map((loc) => {
                        const isActive = activePoints.includes(loc.id);

                        // Special Marker for ID 0
                        if (loc.id === 0) {
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

                        // Default Circles for other points
                        return (
                            <Circle
                                key={loc.id}
                                center={{
                                    lat: loc.lat,
                                    lng: loc.lng,
                                }}
                                radius={80}
                                onClick={() => handlePointClick(loc.mapLink)}
                                options={{
                                    fillColor: '#0097DC',
                                    fillOpacity: isActive ? 1 : 0.5,
                                    strokeColor: '#ffffff',
                                    strokeWeight: 1,
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
