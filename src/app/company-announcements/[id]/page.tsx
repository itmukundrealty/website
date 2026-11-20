import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getCachedAnnouncementById } from "@/lib/server-api";
import AnnouncementDetailClient from "@/components/common/AnnouncementDetailClient";

export const revalidate = 3600;

interface AnnouncementDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function AnnouncementDetailPage({ params }: AnnouncementDetailPageProps) {
    const { id } = await params;
    const announcement = await getCachedAnnouncementById(id);

    if (!announcement) {
        return (
            <div className="bg-white min-h-screen">
                <Header />
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <h1 className="text-3xl text-[#505153] mb-4">Announcement not found</h1>
                    <Link href="/company-announcements" className="text-[#0097DC] hover:underline">Back to Announcements</Link>
                </div>
                <Footer />
            </div>
        );
    }

    return <AnnouncementDetailClient announcement={announcement} />;
}
