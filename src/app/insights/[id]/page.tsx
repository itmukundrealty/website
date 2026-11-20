import React from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getCachedBlogById, getCachedBlogs } from "@/lib/server-api";
import BlogDetailClient from "@/components/InsightComponents/BlogDetailClient";

export const revalidate = 3600;

interface BlogDetailPageProps {
    params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
    const { id } = await params;
    const blog = await getCachedBlogById(id);

    if (!blog) {
        return (
            <div className="bg-white min-h-screen">
                <Header />
                <div className="flex flex-col justify-center items-center h-[70vh]">
                    <h1 className="text-3xl text-[#505153] mb-4">Blog not found</h1>
                    <Link href="/insights" className="text-[#0097DC] hover:underline">Back to Blogs</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const allBlogs = await getCachedBlogs().catch(() => []);
    const relatedBlogs = allBlogs
        .filter((b) => b.id !== id)
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 2);

    return <BlogDetailClient blog={blog} relatedBlogs={relatedBlogs} />;
}
